"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require('nativescript-sqlite');
var person_service_1 = require("./services/person.service");
var AppComponent = (function () {
    function AppComponent(personDao) {
        this.personDao = personDao;
        console.log(this.personDao.conter);
    }
    AppComponent.prototype.ngOnInit = function () {
        new Sqlite("TestTable.db", function (err, db) {
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [person_service_1.PersonDao])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFOUMsNERBQXFEO0FBTXJELElBQWEsWUFBWTtJQUNyQixzQkFBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFBRTtRQUU1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSixtQkFBQztBQUFELENBQUMsQUFWRixJQVVFO0FBVlcsWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO3FDQUVpQywwQkFBUztHQUQvQixZQUFZLENBVXZCO0FBVlcsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNvbnN0IFNxbGl0ZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zcWxpdGUnKTtcblxuaW1wb3J0IHsgUGVyc29uRGFvIH0gZnJvbSAnLi9zZXJ2aWNlcy9wZXJzb24uc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJzb25EYW86IFBlcnNvbkRhbykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbkRhby5jb250ZXIpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBuZXcgU3FsaXRlKFwiVGVzdFRhYmxlLmRiXCIsIGZ1bmN0aW9uIChlcnIsIGRiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuIH1cbiJdfQ==