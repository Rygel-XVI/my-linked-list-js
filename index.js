class LinkedList {

  constructor() {
    this.head = null
    this.size = 0
  }

  addToHead(data) {
    if (!!data) {
      let node = new Node(data, this.head)

      this.head = node
      this.size += 1
    } else {
      return "needs data as arg"
    }
  }

  removeFromHead() {
    if (this.size != 0) {
      this.head = this.head.next
      this.size -= 1
    }
  }

  remove(data) {

  }

  find(data, current) {
    while (current.next != null) {
      if (current.data === data) {
        return current
      } else {
        current = current.next
      }
    }
    return null
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
