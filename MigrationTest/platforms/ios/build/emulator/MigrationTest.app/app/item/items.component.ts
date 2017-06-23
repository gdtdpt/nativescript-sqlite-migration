import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { PersonDao } from '../services/person.service'

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    constructor(private itemService: ItemService, private personDao: PersonDao) {
        console.log(this.personDao.conter);
     }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
