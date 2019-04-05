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
    let current
    let node
    if (!!data) {

      // when list is empty just add to head
      if (this.head === null) {
        node = new Node(data, this.head)
        this.head = node
      } else {
      // otherwise find the end of the list and add a Node
        current = this.head

        while (current !== null) {
          if (current.next === null) {
            node = new Node(data, null)
            current.next = node
            break
          }
          current = current.next
        }
      }

      this.size += 1
    } else {
      return null
    }
  }

  // implement #insert(data, index)
  insertAtIndex(data, index) {
    let i
    let node
    let current
    // check if !!data and if size > index and if index > 0
    if (!!data) {
      current = this.head
      i = this.size

    // base case if list is empty
    if ((current == null && index == 1) || index === i) {
      this.addToHead(data)
    }

      if (i > index && index >= 0) {

        while (i > index) {
          if (i - 1 === index) {
            node = new Node(data, current.next)
            current.next = node
            this.size += 1
            return true
          }
          current = current.next
          i -= 1
        }

      }
    } else {
      return false
    }

    // transverse the list by decrementing size until you hit .next of it

    // make new Node w/ next of current.next
    // make current.next = new node

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


// finds the Node that contains the data. If it doesn't exist returns null
  find(data) {

    let current = this.head
    if (this.head === null) {
      return null
    }
    if (current.data === data) {
      return current
    }
    if (current != null) {
      while (current.next != null) {
        if (current.data === data) {
          return current
        } else {
          current = current.next
        }
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
