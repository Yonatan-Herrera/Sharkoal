import Search_Bar from '../models/search_bar';

class UseSearchBar implements Search_Bar {
  URL: string;
  index: number;
  constructor(url: string = '') {
    this.URL = url;
    this.index = 0;
  }

  _getURL(index: string): string {
    this.URL = localStorage.getItem(index) || 'null';
    return this.URL;
  }
  _addURL(url: string): void {
    localStorage.setItem(this.index.toString(), url);
    this.index++;
  }
}

module.exports = UseSearchBar;
