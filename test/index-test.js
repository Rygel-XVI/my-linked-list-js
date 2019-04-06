const expect = require('chai').expect;
// const sinon = require('sinon');
// const should = require('should');
// const sinonTest = require('sinon-test');
// var chai = require('chai');
// const assert = require("assert");
const LinkedList = require("../index.js").LinkedList
const Node = require("../index.js").Node

// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');



describe('LinkedList', function() {
  let list1
  let list2

  describe('constructor', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
    })

    it('should create an instance of the LinkedList', function() {
      expect(list1).to.be.instanceof(LinkedList);
    });

    it('it should initialize with a size of 0', function() {
      expect(list1.size).to.equal(0);
    });

    it('it should initialize with head.data equal to null', function() {
      expect(list2.head).to.equal(null)
    })
  })

  describe('addToHead', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
    })

    it('creates a new Node at the head', function() {
      list1.addToHead("first node")
      expect(list1.head).to.be.instanceof(Node)
    })

    it('it increments length by 1', function() {
      expect(list1.size).to.be.equal(1)
    })

    it('adds data to the node (new head)', function() {
      expect(list1.head.data).to.be.equal("first node")
    })

    it('does nothing if no data is give', function() {
      expect(list1.addToHead()).to.be.equal(null)
    })

  })

  describe('removeFromHead', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
    })

    it('reduces the size by 1', function() {
      list1.addToHead("first node")
      list1.addToHead("second node")
      list1.removeFromHead()
      expect(list1.size).to.be.equal(1)
    })

    it('removes the most recently added node', function() {
      expect(list1.head.data).to.be.equal("first node")
    })

    it('does not do anything if size is already 0', function() {
      list2.removeFromHead()
      expect(list2.size).to.be.equal(0)
    })
  })

  describe('find', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
      list1.addToHead("first node")
      list1.addToHead("second node")
      list1.addToHead("third node")
      list1.addToHead("fourth node")
    })

    it('returns a node if the data exists in a node', function() {
      expect(list1.find("second node")).to.be.instanceof(Node)
    })

    it('returns the node with the data you are looking for', function() {
      expect(list1.find("first node").data).to.be.equal("first node")
      expect(list1.find("second node").data).to.be.equal('second node')
      expect(list1.find("third node").data).to.be.equal("third node")
      expect(list1.find("fourth node").data).to.be.equal("fourth node")
    })

    it('returns null if no node with the data is found', function() {
      expect(list1.find("2")).to.be.equal(null)
    })

    it('returns the head if that is the one we want', function() {
      expect(list1.find(list1.head.data).data).to.be.equal(list1.head.data)
    })

    it('returns null when the list is empty', function() {
      expect(list2.find('something')).to.be.equal(null)
    })

  })

  describe('remove', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
      list1.addToHead("first node")
      list1.addToHead("second node")
      list1.addToHead("third node")
    })

    it('finds the node with the corresponding data and removes it', function() {
      list1.remove("second node")
      expect(list1.find("second node")).to.be.equal(null)
    })

    it('changes the next pointer so that the linkedlist isn\'t broken', function() {
      expect(list1.find("third node").next.data).to.be.equal("first node")
    })

    it('returns node not found if !node', function() {
      expect(list1.remove("i dont exist!")).to.be.equal('node not found')
    })

    it('works when node is at head', function() {
      let prevHead = list1.head
      list1.remove(list1.head.data)
      expect(list1.head.data).to.not.equal(prevHead.data)
    })

    it('reduces the size by 1', function() {
      expect(list1.size).to.be.equal(1)
    })

    it('works when head = null', function() {
      expect(list2.remove("data")).to.be.equal('list is empty')
    })
  })

  describe('addToTail', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
    })

    it('returns null if no data is given', function() {
      expect(list1.addToTail()).to.be.equal(null)
    })

    it('increments the size by 1', function() {
      list1.addToTail("first")
      expect(list1.find("first").data).to.be.equal("first")
      expect(list1.find("first").next).to.be.equal(null)
      expect(list1.size).to.be.equal(1)
      list1.addToTail('second')
      expect(list1.find("second").data).to.be.equal("second")
      expect(list1.find("second").next).to.be.equal(null)
      expect(list1.find("first").next).to.be.equal(list1.find("second"))
      expect(list1.size).to.be.equal(2)
    })

    it('contains nodes with the data in the list', function() {
      let node = list1.find("first")
      expect(node.data).to.be.equal("first")
    })

  })

  describe('insertAtIndex', function() {
    before(() => {
      list1 = new LinkedList
      list2 = new LinkedList
    })

    it('inserts a node into the list at the head and it is empty', function() {
      let node = list1.insertAtIndex('insert at head', 0)
      let found = list1.find('insert at head')
      expect(list1.size).to.be.equal(1)
      expect(found.data).to.be.equal('insert at head')
      expect(found).to.be.equal(list1.head)
    })

    it('it inserts in the middle', function() {
      list1.insertAtIndex("inserted at 1",1)
      list1.insertAtIndex("inserted at 1 take 2",1)
      expect(list1.find("inserted at 1")).to.be.true
      expect(list1.find("inserted at 1 take 2")).to.be.true
    })

    it('returns false if index is > size', function() {
      list1.insertAtIndex("inserted at 10",10)
      expect(list1.find("inserted at 10")).to.be.false
    })

    it('returns false if no data is given', function() {
      expect(list1.insertAtIndex()).to.be.false
    })
  })
})
