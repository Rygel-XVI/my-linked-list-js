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

  before(() => {
    list1 = new LinkedList
  })

  it('should create an instance of the LinkedList class with size 0', function() {
    expect(list1.size).to.equal(0);
  });

  it('should instatiate with a Node as the head', function() {
    expect(list1.head).to.be.instanceof(Node);
  })

  it('instantiates with the data as null if no data is given', function() {
    expect(list1.head.data).to.equal(null);
  })
});
