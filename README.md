# nativescript-sqlite-migration
A typescript tiny plugin for project do some database migrations with nativescript-sqlite plugin

### Note
You should make sure you have added [nativescript-sqlite](https://github.com/NathanaelA/nativescript-sqlite) plugin before use this.

## Install
* Download files in src folder and put into your project.
* import **DBMigration** module and call functions when you want to use.

```typescript
import { DBMigration } from './sqlite.migration'

new Sqlite("Test.db").then(db => {
	DBMigration.init(db, () => {
		DBMigration.migrate(() => {
			console.log(`migration complete.`);
		})
	});
});
```

## Usage
The **DBMigration** has three functions:
```typescript
DBMigration.init(db, callback); //init the migration functions.

DBMigration.migrate(version?, callback); //begin to migrate.

DBMigration.defineMigration(version, actions); //define migration actions, should be called before migrate();
```
the **defineMigration** function can do actions as below:
```typescript
DBMigration.defineMigration(1, {
	up: (migration) => {
		console.log(`1 up`);
    		migration.executeSql('CREATE TABLE IF NOT EXISTS person (id INTEGER, name TEXT)');
	},
	down: (migration) => {
		console.log(`1 down`);
	}
});
DBMigration.defineMigration(2, {
	up: (migration) => {
		console.log(`2 up`);
    		migration.addIndex('person', 'name');
	},
	down: (migration) => {
		console.log(`2 down`);
	}
});
DBMigration.defineMigration(3, {
	up: (migration) => {
		console.log(`3 up`);
    		migration.removeIndex('person', 'name');
	},
	down: (migration) => {
		console.log(`3 down`);
	}
});
DBMigration.defineMigration(4, {
	up: (migration) => {
		console.log(`4 up`);
    		migration.addColumn('person', 'age', 'integer');
	},
	down: (migration) => {
		console.log(`4 down`);
	}
});
DBMigration.defineMigration(5, {
	up: (migration) => {
		console.log(`5 up`);
    		migration.removeColumn('person', 'name', 'text'); 
	},
	down: (migration) => {
		console.log(`5 down`);
	}
});
DBMigration.defineMigration(6, {
	up: (migration) => {
		console.log(`6 up`);
    		migration.db.all('SELECT * FROM person').then(result => {
      			console.log(JSON.stringify(result));
    		});
	},
	down: (migration) => {
		console.log(`6 down`);
	}
});
```
