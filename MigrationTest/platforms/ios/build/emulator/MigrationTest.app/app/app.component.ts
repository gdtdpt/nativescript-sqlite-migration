import { Component, OnInit } from "@angular/core";

const Sqlite = require('nativescript-sqlite');

import { PersonDao } from './services/person.service'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    constructor(private personDao: PersonDao) {
        console.log(this.personDao.conter);
    }

    ngOnInit() {
        new Sqlite("TestTable.db", function (err, db) {
            
        });
    }
 }
