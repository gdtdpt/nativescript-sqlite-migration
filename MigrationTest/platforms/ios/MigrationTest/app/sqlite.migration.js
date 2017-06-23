"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Migration = (function () {
    function Migration() {
    }
    return Migration;
}());
Migration.testArray = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLm1pZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxbGl0ZS5taWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUFBO0lBRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUZEO0FBQ1MsbUJBQVMsR0FBRyxFQUFFLENBQUM7QUFEWCw4QkFBUztBQUl0QjtJQUFBO1FBQ0UsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQWFmLENBQUM7SUFYQyw0QkFBSSxHQUFKLFVBQUssVUFBa0I7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsVUFBa0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssVUFBa0I7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgTWlncmF0aW9uIHtcbiAgc3RhdGljIHRlc3RBcnJheSA9IFtdO1xufVxuXG5jbGFzcyBDb2x1bW5zSGVscGVyIHtcbiAgY29sdW1ucyA9IFtdO1xuXG4gIHRleHQoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2x1bW5zLnVuc2hpZnQoY29sdW1uTmFtZSArICcgVEVYVCcpO1xuICB9XG5cbiAgaW50ZWdlcihjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbHVtbnMudW5zaGlmdChjb2x1bW5OYW1lICsgJyBJTlRFR0VSJyk7XG4gIH1cblxuICByZWFsKGNvbHVtbk5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY29sdW1ucy51bnNoaWZ0KGNvbHVtbk5hbWUgKyAnIFJFQUwnKTtcbiAgfVxufSJdfQ==