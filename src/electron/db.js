const DataBase = require('better-sqlite3');

// Doesn't delete database, i'm to lazy to implemented it rn
class DB {
  db;
  constructor() {
    this.db = new DataBase('sites');
  }
  _createDB() {
    this.db.exec(`
        CREATE TABLE IF NOT EXISTS sites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL
        )
        `);
  }
  _addSite(url) {
    const add = this.db.prepare(`
        INSERT INTO sites (url)
        VALUES (?)`);
    add.run(url);
  }
  _flush() {
    const flush = this.db.prepare(`
        DELETE FROM sites`);
    flush.run();
  }
  _prevSite() {
    let maxID = this.db.prepare(`SELECT MAX(id) FROM sites`);
    maxID = maxID.all();
    let prev = this.db.prepare(`SELECT * FROM sites WHERE id = ?`);
    prev = prev.get((Number(maxID[0]['MAX(id)']) - 1).toString());
    return prev.url;
  }
}

module.exports = DB;
