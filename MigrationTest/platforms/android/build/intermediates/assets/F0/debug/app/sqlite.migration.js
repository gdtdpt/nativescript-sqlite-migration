"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Migrator = (function () {
    function Migrator() {
    }
    Migrator.version = function (db, callback) {
        db.execSQL('SELECT current_version FROM schema_version', null, function (err, result) {
            if (result.length == 0) {
                db.execSQL('INSERT INTO schema_version VALUES (0)', null, function (err, result) {
                    callback(0);
                });
            }
            else {
                callback(result[0].current_version);
            }
        });
    };
    Migrator.setup = function (db, callback) {
        db.execSQL('CREATE TABLE IF NOT EXISTS schema_version (current_version INTEGER)', null, function () {
            console.log("create table success.");
            callback();
        });
    };
    return Migrator;
}());
Migrator.migrations = [];
exports.Migrator = Migrator;
var Migration = (function () {
    function Migration(version, body) {
        this.version = version;
        this.body = body;
        this.actions = [];
    }
    Migration.prototype.executeSql = function (sql, args) {
        this.action(function (db, nextCommand) {
            db.execSQL(sql, args, nextCommand);
        });
    };
    Migration.prototype.action = function (callback) {
        this.actions.unshift(callback);
    };
    return Migration;
}());
exports.Migration = Migration;
var ColumnsHelper = (function () {
    function ColumnsHelper() {
        this.columns = [];
    }
    ColumnsHelper.prototype.text = function (columnName) {
        this.columns.unshift(columnName + ' TEXT');
    };
    ColumnsHelper.prototype.integer = function (columnName) {
        this.columns.unshift(columnName + ' INTEGER');
    };
    ColumnsHelper.prototype.real = function (columnName) {
        this.columns.unshift(columnName + ' REAL');
    };
    return ColumnsHelper;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLm1pZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxbGl0ZS5taWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBcUJBLENBQUM7SUFsQlEsZ0JBQU8sR0FBZCxVQUFlLEVBQUUsRUFBRSxRQUFRO1FBQ3pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07WUFDekUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixFQUFFLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxFQUFFLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO29CQUNwRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0QyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sY0FBSyxHQUFaLFVBQWEsRUFBRSxFQUFFLFFBQW9CO1FBQ25DLEVBQUUsQ0FBQyxPQUFPLENBQUMscUVBQXFFLEVBQUUsSUFBSSxFQUFFO1lBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxRQUFRLEVBQUUsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBckJEO0FBQ1MsbUJBQVUsR0FBRyxFQUFFLENBQUM7QUFEWiw0QkFBUTtBQXVCckI7SUFLRSxtQkFBWSxPQUFPLEVBQUUsSUFBSTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsOEJBQVUsR0FBVixVQUFXLEdBQUcsRUFBRSxJQUFJO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLEVBQUUsV0FBVztZQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLDhCQUFTO0FBc0J0QjtJQUFBO1FBQ0UsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQWFmLENBQUM7SUFYQyw0QkFBSSxHQUFKLFVBQUssVUFBa0I7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsVUFBa0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssVUFBa0I7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1pZ3JhdG9yIHtcbiAgc3RhdGljIG1pZ3JhdGlvbnMgPSBbXTtcblxuICBzdGF0aWMgdmVyc2lvbihkYiwgY2FsbGJhY2spIHtcbiAgICBkYi5leGVjU1FMKCdTRUxFQ1QgY3VycmVudF92ZXJzaW9uIEZST00gc2NoZW1hX3ZlcnNpb24nLCBudWxsLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgZGIuZXhlY1NRTCgnSU5TRVJUIElOVE8gc2NoZW1hX3ZlcnNpb24gVkFMVUVTICgwKScsIG51bGwsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKDApO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0WzBdLmN1cnJlbnRfdmVyc2lvbik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBzZXR1cChkYiwgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICBkYi5leGVjU1FMKCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBzY2hlbWFfdmVyc2lvbiAoY3VycmVudF92ZXJzaW9uIElOVEVHRVIpJywgbnVsbCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYGNyZWF0ZSB0YWJsZSBzdWNjZXNzLmApO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNaWdyYXRpb24ge1xuICB2ZXJzaW9uO1xuICBib2R5O1xuICBhY3Rpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHZlcnNpb24sIGJvZHkpIHtcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5hY3Rpb25zID0gW107XG4gIH1cblxuICBleGVjdXRlU3FsKHNxbCwgYXJncykge1xuICAgIHRoaXMuYWN0aW9uKChkYiwgbmV4dENvbW1hbmQpID0+IHtcbiAgICAgIGRiLmV4ZWNTUUwoc3FsLCBhcmdzLCBuZXh0Q29tbWFuZClcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGlvbihjYWxsYmFjaykge1xuICAgIHRoaXMuYWN0aW9ucy51bnNoaWZ0KGNhbGxiYWNrKTtcbiAgfVxufVxuXG5jbGFzcyBDb2x1bW5zSGVscGVyIHtcbiAgY29sdW1ucyA9IFtdO1xuXG4gIHRleHQoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2x1bW5zLnVuc2hpZnQoY29sdW1uTmFtZSArICcgVEVYVCcpO1xuICB9XG5cbiAgaW50ZWdlcihjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbHVtbnMudW5zaGlmdChjb2x1bW5OYW1lICsgJyBJTlRFR0VSJyk7XG4gIH1cblxuICByZWFsKGNvbHVtbk5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY29sdW1ucy51bnNoaWZ0KGNvbHVtbk5hbWUgKyAnIFJFQUwnKTtcbiAgfVxufSJdfQ==