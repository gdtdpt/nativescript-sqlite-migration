"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require('nativescript-sqlite');
var person_service_1 = require("./services/person.service");
var sqlite_migration_1 = require("./sqlite.migration");
var AppComponent = (function () {
    function AppComponent(personDao) {
        this.personDao = personDao;
        sqlite_migration_1.DBMigration.defineMigration(1, {
            up: function (obj) {
                console.log("1 up");
            },
            down: function (obj) {
                console.log("1 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(2, {
            up: function (obj) {
                console.log("2 up");
                // this.addColumn('person', 'age', 'integer');
            },
            down: function (obj) {
                console.log("2 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(3, {
            up: function (obj) {
                console.log("3 up");
            },
            down: function (obj) {
                console.log("3 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(4, {
            up: function (obj) {
                console.log("4 up");
            },
            down: function (obj) {
                console.log("4 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(5, {
            up: function (obj) {
                console.log("5 up");
            },
            down: function (obj) {
                console.log("5 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(6, {
            up: function (obj) {
                console.log("6 up");
                obj.addIndex('person', 'age');
            },
            down: function (obj) {
                console.log("6 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(7, {
            up: function (obj) {
                console.log("7 up");
                obj.executeSql('create table if not exists student (id integer, name text)');
            },
            down: function (obj) {
                console.log("7 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(8, {
            up: function (obj) {
                console.log("8 up");
                obj.removeIndex('person', 'age');
            },
            down: function (obj) {
                console.log("8 down");
            }
        });
        sqlite_migration_1.DBMigration.defineMigration(9, {
            up: function (obj) {
                console.log("9 up");
                obj.removeColumn('person', 'number', 'integer');
            },
            down: function () {
                console.log("9 down");
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        new Sqlite("TestTable.db").then(function (db) {
            sqlite_migration_1.DBMigration.init(db, function () {
                sqlite_migration_1.DBMigration.migrate(function () {
                    console.log("migration complete.");
                });
            });
            // db.all('select sql from sqlite_master where type = "table" and name == "schema_version"').then((results) => {
            //     console.log(`create table success, ${JSON.stringify(results)}`);
            // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFOUMsNERBQXFEO0FBQ3JELHVEQUFnRDtBQU1oRCxJQUFhLFlBQVk7SUFDckIsc0JBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEMsOEJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsRUFBRSxVQUFDLEdBQUc7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCw4QkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsRUFBRSxFQUFFLFVBQUMsR0FBRztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQiw4Q0FBOEM7WUFDbEQsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsOEJBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsRUFBRSxVQUFDLEdBQUc7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCw4QkFB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LFFBQVE7UUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtLQUNwQyxDQUFDO3FDQUVpQywwQkFBUztHQUQvQixZQUFZLENBNkZ2QjtBQTdGVyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuY29uc3QgU3FsaXRlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXNxbGl0ZScpO1xuXG5pbXBvcnQgeyBQZXJzb25EYW8gfSBmcm9tICcuL3NlcnZpY2VzL3BlcnNvbi5zZXJ2aWNlJ1xuaW1wb3J0IHsgREJNaWdyYXRpb24gfSBmcm9tICcuL3NxbGl0ZS5taWdyYXRpb24nXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyc29uRGFvOiBQZXJzb25EYW8pIHtcbiAgICAgICAgREJNaWdyYXRpb24uZGVmaW5lTWlncmF0aW9uKDEsIHtcbiAgICAgICAgICAgIHVwOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDEgdXBgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDEgZG93bmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgREJNaWdyYXRpb24uZGVmaW5lTWlncmF0aW9uKDIsIHtcbiAgICAgICAgICAgIHVwOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDIgdXBgKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENvbHVtbigncGVyc29uJywgJ2FnZScsICdpbnRlZ2VyJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAyIGRvd25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIERCTWlncmF0aW9uLmRlZmluZU1pZ3JhdGlvbigzLCB7XG4gICAgICAgICAgICB1cDogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAzIHVwYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAzIGRvd25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIERCTWlncmF0aW9uLmRlZmluZU1pZ3JhdGlvbig0LCB7XG4gICAgICAgICAgICB1cDogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA0IHVwYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA0IGRvd25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIERCTWlncmF0aW9uLmRlZmluZU1pZ3JhdGlvbig1LCB7XG4gICAgICAgICAgICB1cDogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA1IHVwYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA1IGRvd25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIERCTWlncmF0aW9uLmRlZmluZU1pZ3JhdGlvbig2LCB7XG4gICAgICAgICAgICB1cDogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA2IHVwYCk7XG4gICAgICAgICAgICAgICAgb2JqLmFkZEluZGV4KCdwZXJzb24nLCAnYWdlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA2IGRvd25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIERCTWlncmF0aW9uLmRlZmluZU1pZ3JhdGlvbig3LCB7XG4gICAgICAgICAgICB1cDogKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA3IHVwYCk7XG4gICAgICAgICAgICAgICAgb2JqLmV4ZWN1dGVTcWwoJ2NyZWF0ZSB0YWJsZSBpZiBub3QgZXhpc3RzIHN0dWRlbnQgKGlkIGludGVnZXIsIG5hbWUgdGV4dCknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDcgZG93bmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgREJNaWdyYXRpb24uZGVmaW5lTWlncmF0aW9uKDgsIHtcbiAgICAgICAgICAgIHVwOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDggdXBgKTtcbiAgICAgICAgICAgICAgICBvYmoucmVtb3ZlSW5kZXgoJ3BlcnNvbicsICdhZ2UnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDggZG93bmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgREJNaWdyYXRpb24uZGVmaW5lTWlncmF0aW9uKDksIHtcbiAgICAgICAgICAgIHVwOiAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYDkgdXBgKTtcbiAgICAgICAgICAgICAgICBvYmoucmVtb3ZlQ29sdW1uKCdwZXJzb24nLCAnbnVtYmVyJywgJ2ludGVnZXInKTsgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGA5IGRvd25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgICBuZXcgU3FsaXRlKFwiVGVzdFRhYmxlLmRiXCIpLnRoZW4oZGIgPT4ge1xuICAgICAgICAgICAgREJNaWdyYXRpb24uaW5pdChkYiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIERCTWlncmF0aW9uLm1pZ3JhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbWlncmF0aW9uIGNvbXBsZXRlLmApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGRiLmFsbCgnc2VsZWN0IHNxbCBmcm9tIHNxbGl0ZV9tYXN0ZXIgd2hlcmUgdHlwZSA9IFwidGFibGVcIiBhbmQgbmFtZSA9PSBcInNjaGVtYV92ZXJzaW9uXCInKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYGNyZWF0ZSB0YWJsZSBzdWNjZXNzLCAke0pTT04uc3RyaW5naWZ5KHJlc3VsdHMpfWApO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiB9XG4iXX0=