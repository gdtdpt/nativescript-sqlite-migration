"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require('nativescript-sqlite');
var person_service_1 = require("./services/person.service");
var sqlite_migration_1 = require("./sqlite.migration");
var AppComponent = (function () {
    function AppComponent(personDao) {
        this.personDao = personDao;
        console.log(this.personDao.conter);
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.personDao.conter);
        new Sqlite("TestTable.db", function (err, db) {
            sqlite_migration_1.Migrator.setup(db, function () {
                console.log("setup callback");
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFOUMsNERBQXFEO0FBQ3JELHVEQUE2QztBQU03QyxJQUFhLFlBQVk7SUFDckIsc0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUFFO1lBQ3hDLDJCQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSixtQkFBQztBQUFELENBQUMsQUFiRixJQWFFO0FBYlcsWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO3FDQUVpQywwQkFBUztHQUQvQixZQUFZLENBYXZCO0FBYlcsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNvbnN0IFNxbGl0ZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zcWxpdGUnKTtcblxuaW1wb3J0IHsgUGVyc29uRGFvIH0gZnJvbSAnLi9zZXJ2aWNlcy9wZXJzb24uc2VydmljZSdcbmltcG9ydCB7IE1pZ3JhdG9yIH0gZnJvbSAnLi9zcWxpdGUubWlncmF0aW9uJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcnNvbkRhbzogUGVyc29uRGFvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGVyc29uRGFvLmNvbnRlcik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGVyc29uRGFvLmNvbnRlcik7XG4gICAgICAgIG5ldyBTcWxpdGUoXCJUZXN0VGFibGUuZGJcIiwgZnVuY3Rpb24gKGVyciwgZGIpIHtcbiAgICAgICAgICAgIE1pZ3JhdG9yLnNldHVwKGRiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNldHVwIGNhbGxiYWNrYCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG4gfVxuIl19