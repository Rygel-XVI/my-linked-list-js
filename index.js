class LinkedList {

  constructor() {
    this.head = null
    this.size = 0
  }

  addToHead(data) {
    let node
    if (!!data) {
      node = new Node(data, this.head)
      this.head = node
      this.size += 1
    } else {
      return null
    }
  }

  //implement #addToTail()

  //implement #insert(data, index)

///combine remove and removeFromHead. Check if head is null first then decrement the size and move the head to head.next.
  removeFromHead() {
    if (this.size != 0) {
      this.head = this.head.next
      this.size -= 1
    }
  }

  remove(data) {
    let target
    let current

//   when list is empty
    if (this.head == null) {
      return "list is empty"
    }

// when the node is the head
    if (data == this.head.data) {
      return this.removeFromHead()
    }

// set inital values for target and current
    target = false
    current = this.head

// while we are not at the last node check if current.next has the data. If it does move the next pointer over to remove the current.next Node from the list and decreases the size.
    while (current.next != null) {
     if (current.next.data === data) {
        this.size -= 1
        current.next = current.next.next
        return current
      } else {
        current = current.next
      }
    }
    return 'node not found'
  }

  find(data) {
    let current = this.head
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
