import { Injectable } from '@angular/core'
const Sqlite = require("nativescript-sqlite");

@Injectable()
export class PersonDao {
  db;
  conter;
  constructor() {
    new Sqlite("TestTable.db").then(db => {
      this.db = db;
      this.conter = Math.random();
    })
  }
}