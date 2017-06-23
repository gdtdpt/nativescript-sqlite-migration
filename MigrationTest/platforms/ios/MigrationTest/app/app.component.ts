import { Component, OnInit } from "@angular/core";

const Sqlite = require('nativescript-sqlite');

import { PersonDao } from './services/person.service'
import { Migration } from './sqlite.migration'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    constructor(private personDao: PersonDao) {
        console.log(this.personDao.conter);
        Migration.testArray.push('333333');
    }

    ngOnInit() {
        Migration.testArray.push('222222');
        console.log(this.personDao.conter);
        new Sqlite("TestTable.db", function (err, db) {
            console.log('11111111');
        });
    }
 }
