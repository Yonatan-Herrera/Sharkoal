const SitesTracker = require('../../src/components/webSiteTracker');
const DLL = require('../../src/models/DLL');

describe('DLL', () => {
  test('should create a new DLL', () => {
    const dll = new DLL();
    expect(dll.root.value).toBe('null');
  });

  test('should return the first element', () => {
    const dll = new DLL();
    dll._add('Hello World');
    dll._add('Kobe');
    expect(dll._prev()).toEqual('Hello World');
  });
});

describe('webSiteTracker', () => {
  test('webSite tracker test 1: adding', () => {
    const site = new SitesTracker();
    site._add('Lebron');
    site._add('Kobe');
    expect(site._prev()).toEqual('Lebron');
  });
});
