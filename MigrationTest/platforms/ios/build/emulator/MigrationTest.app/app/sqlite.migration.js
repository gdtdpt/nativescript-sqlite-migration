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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLm1pZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxbGl0ZS5taWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFBQTtRQUNFLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFhZixDQUFDO0lBWEMsNEJBQUksR0FBSixVQUFLLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLFVBQWtCO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLFVBQWtCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIENvbHVtbnNIZWxwZXIge1xuICBjb2x1bW5zID0gW107XG5cbiAgdGV4dChjb2x1bW5OYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbHVtbnMudW5zaGlmdChjb2x1bW5OYW1lICsgJyBURVhUJyk7XG4gIH1cblxuICBpbnRlZ2VyKGNvbHVtbk5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY29sdW1ucy51bnNoaWZ0KGNvbHVtbk5hbWUgKyAnIElOVEVHRVInKTtcbiAgfVxuXG4gIHJlYWwoY29sdW1uTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2x1bW5zLnVuc2hpZnQoY29sdW1uTmFtZSArICcgUkVBTCcpO1xuICB9XG59Il19