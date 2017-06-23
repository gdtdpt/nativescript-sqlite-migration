"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var PersonDao = (function () {
    function PersonDao() {
        var _this = this;
        new Sqlite("TestTable.db").then(function (db) {
            _this.db = db;
            _this.conter = Math.random();
        });
    }
    return PersonDao;
}());
PersonDao = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PersonDao);
exports.PersonDao = PersonDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc5QyxJQUFhLFNBQVM7SUFHcEI7UUFBQSxpQkFLQztRQUpDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDaEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksU0FBUztJQURyQixpQkFBVSxFQUFFOztHQUNBLFNBQVMsQ0FTckI7QUFUWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuY29uc3QgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzb25EYW8ge1xuICBkYjtcbiAgY29udGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBuZXcgU3FsaXRlKFwiVGVzdFRhYmxlLmRiXCIpLnRoZW4oZGIgPT4ge1xuICAgICAgdGhpcy5kYiA9IGRiO1xuICAgICAgdGhpcy5jb250ZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH0pXG4gIH1cbn0iXX0=