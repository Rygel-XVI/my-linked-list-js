class LinkedList {

  constructor(data) {
    this.head = new Node(data)
    this.size = 0
  }

  addToHead(data) {
    let node = new Node(data)
  }

  removeFromHead() {

  }

  insertAt() {

  }

  removeAt() {

  }

  find() {

  }

}

class Node {

  constructor(data, next) {
    this.data = data || null
    this.next = next
  }

}

module.exports.LinkedList = LinkedList
module.exports.Node = Node
