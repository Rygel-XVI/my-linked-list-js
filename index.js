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

  addToTail(data) {
    let node
    let size = this.size
    let current = this.head

    if (!!data) {

// when list is empty just add to head
      if (current === null) {
        this.addToHead(data)
      } else {

// otherwise find the end of the list and add a Node
        while (size > 0) {

// if size === 1 than it is the last node. Add new Node to end.
          if (size === 1) {
            node = new Node(data, null)
            current.next = node
            this.size += 1
          }
// size is > 1 than decrement size and check the next Node
          current = current.next
          size -= 1
        }
      }
    } else {
      return null
    }
  }

  insertAtIndex(data, index) {
    let node
    let current
    let size = this.size

// check if !!data and if index is within bounds
    if (!!data && index >= size - 1 && index >= 0) {
      current = this.head

// base case if list is empty or if adding to head
      if (current == null && index === 0 || index === size-1) {
        this.addToHead(data)
        return true
      }
// base case when adding to tail
      if (index === 1) {
        this.addToTail(data)
        return true
      }

// find spot before index and insert to next Node
      while (size > index) {
        if (size - 1 === index) {
          node = new Node(data, current.next)
          current.next = node
          this.size += 1
          return true
        }
        current = current.next
        size -= 1
      }

    }
    return false
  }

///combine remove and removeFromHead. Check if head is null first then decrement the size and move the head to head.next.
  removeFromHead() {
    if (this.size != 0) {
      this.head = this.head.next
      this.size -= 1
    }
  }

  remove(data) {
    let target
    let current = this.head

//   when list is empty
    if (current === null) {
      return "list is empty"
    }

// when the node is the head
    if (data === current.data) {
      return this.removeFromHead()
    }

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


// finds the Node that contains the data. If it doesn't exist returns null
  find(data) {
    let current = this.head
      while (current != null) {
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
