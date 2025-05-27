const DataBase = require('../electron/db');

class WebSites {
  db;
  constructor() {
    this.db = new DataBase();
    this.db._createDB();
  }
  _add(url) {
    this.db._addSite(url);
  }
  _prev() {
    return this.db._prevSite();
  }
}

module.exports = WebSites;
