export class Migrator {
  static migrations = [];

  static version(db, callback) {
    db.execSQL('SELECT current_version FROM schema_version', null, (err, result) => {
      if (result.length == 0) {
        db.execSQL('INSERT INTO schema_version VALUES (0)', null, (err, result) => {
          callback(0);
        })
      } else {
        callback(result[0].current_version);
      }
    })
  }

  static setup(db, callback: () => void) {
    db.execSQL('CREATE TABLE IF NOT EXISTS schema_version (current_version INTEGER)', null, () => {
      console.log(`create table success.`);
      callback();
    })
  }
}

export class Migration {
  version;
  body;
  actions;

  constructor(version, body) {
    this.version = version;
    this.body = body;
    this.actions = [];
  }

  executeSql(sql, args) {
    this.action((db, nextCommand) => {
      db.execSQL(sql, args, nextCommand)
    });
  }

  action(callback) {
    this.actions.unshift(callback);
  }
}

class ColumnsHelper {
  columns = [];

  text(columnName: string) {
    this.columns.unshift(columnName + ' TEXT');
  }

  integer(columnName: string) {
    this.columns.unshift(columnName + ' INTEGER');
  }

  real(columnName: string) {
    this.columns.unshift(columnName + ' REAL');
  }
}