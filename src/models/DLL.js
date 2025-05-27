// Implement DDL
class Node {
  value = '';
  next;
  prev;
  constructor(value) {
    this.value = value;
    this.prev = this;
    this.next = this;
  }
}

class DLL {
  root;
  constructor() {
    this.root = new Node('null');
  }

  _add(newNode) {
    this.root.prev = new Node(newNode);
    this.root.prev.next = this.root;
    this.root = this.root.prev;
  }
  _prev() {
    this.root = this.root.next;
    return this.root === 'null' ? null : this.root.value;
  }
  _getRoot() {
    return this.root;
  }
}

module.exports = DLL;
