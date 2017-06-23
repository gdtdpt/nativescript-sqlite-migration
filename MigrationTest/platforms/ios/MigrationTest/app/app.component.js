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
        sqlite_migration_1.Migration.testArray.push('333333');
    }
    AppComponent.prototype.ngOnInit = function () {
        sqlite_migration_1.Migration.testArray.push('222222');
        console.log(this.personDao.conter);
        new Sqlite("TestTable.db", function (err, db) {
            console.log('11111111');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFOUMsNERBQXFEO0FBQ3JELHVEQUE4QztBQU05QyxJQUFhLFlBQVk7SUFDckIsc0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLDRCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLDRCQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSixtQkFBQztBQUFELENBQUMsQUFiRixJQWFFO0FBYlcsWUFBWTtJQUp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO3FDQUVpQywwQkFBUztHQUQvQixZQUFZLENBYXZCO0FBYlcsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNvbnN0IFNxbGl0ZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zcWxpdGUnKTtcblxuaW1wb3J0IHsgUGVyc29uRGFvIH0gZnJvbSAnLi9zZXJ2aWNlcy9wZXJzb24uc2VydmljZSdcbmltcG9ydCB7IE1pZ3JhdGlvbiB9IGZyb20gJy4vc3FsaXRlLm1pZ3JhdGlvbidcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJzb25EYW86IFBlcnNvbkRhbykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbkRhby5jb250ZXIpO1xuICAgICAgICBNaWdyYXRpb24udGVzdEFycmF5LnB1c2goJzMzMzMzMycpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBNaWdyYXRpb24udGVzdEFycmF5LnB1c2goJzIyMjIyMicpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBlcnNvbkRhby5jb250ZXIpO1xuICAgICAgICBuZXcgU3FsaXRlKFwiVGVzdFRhYmxlLmRiXCIsIGZ1bmN0aW9uIChlcnIsIGRiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMTExMTExMTEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuIH1cbiJdfQ==