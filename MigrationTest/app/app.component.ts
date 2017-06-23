import { Component, OnInit } from "@angular/core";

const Sqlite = require('nativescript-sqlite');

import { PersonDao } from './services/person.service'
import { DBMigration } from './sqlite.migration'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    constructor(private personDao: PersonDao) {
        DBMigration.defineMigration(1, {
            up: (obj) => {
                console.log(`1 up`);
            },
            down: (obj) => {
                console.log(`1 down`);
            }
        });
        DBMigration.defineMigration(2, {
            up: (obj) => {
                console.log(`2 up`);
                // this.addColumn('person', 'age', 'integer');
            },
            down: (obj) => {
                console.log(`2 down`);
            }
        });
        DBMigration.defineMigration(3, {
            up: (obj) => {
                console.log(`3 up`);
            },
            down: (obj) => {
                console.log(`3 down`);
            }
        });
        DBMigration.defineMigration(4, {
            up: (obj) => {
                console.log(`4 up`);
            },
            down: (obj) => {
                console.log(`4 down`);
            }
        });
        DBMigration.defineMigration(5, {
            up: (obj) => {
                console.log(`5 up`);
            },
            down: (obj) => {
                console.log(`5 down`);
            }
        });
        DBMigration.defineMigration(6, {
            up: (obj) => {
                console.log(`6 up`);
                obj.addIndex('person', 'age');
            },
            down: (obj) => {
                console.log(`6 down`);
            }
        });
        DBMigration.defineMigration(7, {
            up: (obj) => {
                console.log(`7 up`);
                obj.executeSql('create table if not exists student (id integer, name text)');
            },
            down: (obj) => {
                console.log(`7 down`);
            }
        });
        DBMigration.defineMigration(8, {
            up: (obj) => {
                console.log(`8 up`);
                obj.removeIndex('person', 'age');
            },
            down: (obj) => {
                console.log(`8 down`);
            }
        });
        DBMigration.defineMigration(9, {
            up: (obj) => {
                console.log(`9 up`);
                obj.removeColumn('person', 'number', 'integer'); 
            },
            down: () => {
                console.log(`9 down`);
            }
        });
    }

    ngOnInit() { 
        new Sqlite("TestTable.db").then(db => {
            DBMigration.init(db, () => {
                DBMigration.migrate(() => {
                    console.log(`migration complete.`);
                })
            });
            // db.all('select sql from sqlite_master where type = "table" and name == "schema_version"').then((results) => {
            //     console.log(`create table success, ${JSON.stringify(results)}`);
            // });
        });
    }
 }
