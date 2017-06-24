export class DBMigration {
  static init(db, callback) {
    Migrator.setup(db, callback);
  }
  static migrate(version, callback?) {
    Migrator.migrate(version, callback);
  }
  static defineMigration(version, actions) {
    Migrator.migration(version, actions);
  }
}

class Migrator {
  static migrations = [];
  static _version;
  static db;

  static version(callback) {
    let self = this;
    self.db.all('SELECT current_version FROM schema_version').then((result) => {
      if (result.length == 0) {
        self.db.execSQL('INSERT INTO schema_version VALUES (0)').then((err, result) => {
          callback(0);
        });
      } else {
        callback(result[0][0]);
      }
    });
  }

  static setVersion(db, version, callback?) {
    this.db.execSQL('UPDATE schema_version SET current_version = ?', [version]).then(() => {
      Migrator._version = version;
      if (callback) callback();
    })
  }

  static setup(db, callback?: () => void) {
    this.db = db;
    db.execSQL('CREATE TABLE IF NOT EXISTS schema_version (current_version INTEGER)').then(() => {
      this.migration(0, { up: () => {console.log('setup up.')}, down: () => {console.log(`setup down.`)} });
      Migrator.migrations.forEach((migrationObj, index) => {
        migrationObj.db = db;
      });
      if (callback) callback();
    });
  }

  static reset(callback?) {
    Migrator.migrations = [];
    Migrator.setVersion(0, callback);

  }

  static migration(version, actions) {
    Migrator.migrations[version] = new Migration(version, actions);
    return Migrator.migrations[version];
  }

  static migrateUpTo(version, callback) {
    let migrationsToRun = [];

    function migrateOne() {
      let migration = migrationsToRun.pop();

      if (!migration) callback();

      migration.up(() => {
        if (migrationsToRun.length > 0) {
          migrateOne();
        } else if (callback) {
          callback();
        }
      });
    }

    this.version((currentVersion) => {
      for (let v = currentVersion+1; v <= version; v++) {
        migrationsToRun.unshift(Migrator.migrations[v]);
      }

      if (migrationsToRun.length > 0) {
        migrateOne();
      } else if (callback) {
        callback();
      }
    });
  }

  static migrateDownTo(version, callback) {
    let migrationsToRun = [];

    function migrateOne() {
      let migration = migrationsToRun.pop();

      if (!migration) callback();

      migration.down(() => {
        if (migrationsToRun.length > 0) {
          migrateOne();
        } else if (callback) {
          callback();
        }
      });
    }

    this.version((currentVersion) => {
      for (let v = currentVersion-1; v >= version; v--) {
        migrationsToRun.unshift(Migrator.migrations[v]);
      }

      if (migrationsToRun.length > 0) {
        migrateOne();
      } else if (callback) {
        callback();
      }
    });
  }

  static migrate(version, callback?) {
    if (callback === undefined) {
      callback = version;
      version = this.migrations.length - 1;
    }

    this.version(currentVersion => {
      if (currentVersion < version) {
        Migrator.migrateUpTo(version, callback);
      } else if (currentVersion > version) {
        Migrator.migrateDownTo(version, callback);
      } else {
        callback();
      }
    })
  }
}

class Migration {
  db;
  version;
  body;
  actions;

  constructor(version, body) {
    this.version = version;
    this.body = body;
    this.actions = [];
  }

  executeActions(callback, customVersion?) {
    var actionsToRun = this.actions;
    var version = (customVersion !== undefined) ? customVersion : this.version;

    function nextAction (db) {
      if (actionsToRun.length == 0) {
        Migrator.setVersion(db, version, callback);
      } else {
        var action = actionsToRun.pop();
        action(db, nextAction);
      }
    }

    nextAction(this.db);
  }

  up(callback) {
    if (this.body.up) this.body.up.apply(this, [this]);
    this.executeActions(callback);
  }

  down(callback) {
    if (this.body.down) this.body.down.apply(this, [this]);
    this.executeActions(callback);
  }

  addColumn(tableName, columnName, columnType) {
    let sql = 'ALTER TABLE ' + tableName + ' ADD ' + columnName + ' ' + columnType;
    this.executeSql(sql);
  }

  removeColumn(tableName, columnName) {
    let self = this;
    this.action((db, nextCommand) => {
      let sql = 'SELECT sql FROM sqlite_master WHERE type="table" AND name=="' + tableName + '"';
      db.all(sql).then(result => {
        let _start = result[0][0].indexOf('(');
        let _end = result[0][0].indexOf(')');
        let _tmp = result[0][0].substring(_start+1, _end);
        let columns = _tmp.split(',');

        let selectColumns = [];
        let columnsSql = [];

        columns.forEach((column, index) => {
          var colName = new RegExp("((`\\w+`)|(\\w+)) .+").exec(column)[1].trim();
          if (colName != columnName) {
            columnsSql.push(column);
            selectColumns.push(colName);
          }
        });
        let columnsSqlStr = columnsSql.join(', '); 
        let selectColumnsStr = selectColumns.join(', ');

        let queries = [];
        queries.unshift("ALTER TABLE " + tableName + " RENAME TO " + tableName + "_bkp;");
        queries.unshift("CREATE TABLE " + tableName + " (" + columnsSql + ");");
        queries.unshift("INSERT INTO " + tableName + " SELECT " + selectColumns + " FROM " + tableName + "_bkp;");
        queries.unshift("DROP TABLE " + tableName + "_bkp;");

        function executeQueriesSeq(queries, nextCommand) {
          if (queries.length > 0) {
            let sql = queries.pop();
            self.db.execSQL(sql).then(() => {
              if (queries.length) {
                executeQueriesSeq(queries, nextCommand);
              } else {
                nextCommand();
              }
            });
          }
        }

        executeQueriesSeq(queries, nextCommand);
      });
    });
  }

  addIndex(tableName, columnName, unique) {
    let sql = 'CREATE ' + (unique === true? 'UNIQUE' : '') + ' INDEX ' + tableName + '_' + columnName + ' ON ' + tableName + ' (' + columnName + ')';
    this.executeSql(sql);
  }

  removeIndex(tableName, columnName) {
    let sql = 'DROP INDEX ' + tableName + '_' + columnName;
    this.executeSql(sql); 
  }

  executeSql(sql, args?) {
    this.action((db, nextCommand) => {
      db.execSQL(sql, args).then(() => {
        nextCommand();
      });
    });
  }

  action(callback: (arg1, arg2) => void) {
    this.actions.unshift(callback);
  }
}