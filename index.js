class LinkedList {

  constructor() {
    this.head = null
    this.size = 0
  }

  addToHead(data) {
    let node = new Node(data, this.head)

    this.head = node
    this.size += 1
  }

  removeFromHead() {
    this.head = this.head.next
    this.size -= 1
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
    this.data = data
    this.next = next
  }

}

module.exports.LinkedList = LinkedList
module.exports.Node = Node
