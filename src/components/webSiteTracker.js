// Handles sites
class SitesTracker {
  websites = [];
  constructor() {
    this.websites.push('/');
  }
  _add(website) {
    this.websites.push(website);
  }
  _prev() {
    this.websites.reverse();
    return this.websites[this.websites.length - 2];
  }
}
export default SitesTracker;
