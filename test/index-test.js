// const assert = require('chai').assert;
const expect = require('chai').expect;
// const sinon = require('sinon');
// const should = require('should');
// const sinonTest = require('sinon-test');
// var chai = require('chai');
const assert = require("assert");
const LinkedList = require("../index.js").LinkedList
const Node = require("../index.js").Node

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');



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

  })

});
