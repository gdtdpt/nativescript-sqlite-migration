


class ColumnsHelper {
  columns = [];

  text(columnName: string) {
    this.columns.unshift(columnName + ' TEXT');
  }

  integer(columnName: string) {
    this.columns.unshift(columnName + ' INTEGER');
  }

  real(columnName: string) {
    this.columns.unshift(columnName + ' REAL');
  }
}