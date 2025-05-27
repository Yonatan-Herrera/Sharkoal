const db = require('../../src/electron/db');

describe('Data base tesst', () => {
  test('should check if databse works', () => {
    const testDB = new db();
    testDB._flush();
    testDB._createDB();
    testDB._addSite('hello world');
    testDB._addSite('perhaps');
    expect(testDB._prevSite()).toEqual('hello world');
  });
});
