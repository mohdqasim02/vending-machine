const testing = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const assertArrayEquals = testing.assertArrayEquals;
const assertObjectEquals = testing.assertObjectEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const dispenseCoins = vendingMachine.dispenseCoins;
const denominationCount = vendingMachine.getDenominationCount;
const sortAscending = vendingMachine.sortAscending;

const testSortAscending = function() {
  title("sortAscending");
  assertEquals([1, 2, 3], sortAscending([3, 2, 1]), "reversed list should be sorted");
  assertEquals([1, 2, 3], sortAscending([1, 2, 3]), "sorted list should remain same");
  assertEquals([1, 2, 3], sortAscending([3, 1, 2]), "shuffled list should be sorted");
}

const testdispenseCoins = function() {
  title("dispenseCoins");
  assertEquals(0, dispenseCoins(0, [1, 2, 5, 10]), "0 rupees should return 0 coin");
  assertEquals(1, dispenseCoins(1, [1, 2, 5, 10]), "1 rupee should return 1 coin");
  assertEquals(1, dispenseCoins(2, [1, 2, 5, 10]), "2 rupees should return 1 coins");
  assertEquals(2, dispenseCoins(3, [1, 2, 5, 10]), "3 rupees should return 2 coins");
  assertEquals(1, dispenseCoins(5, [1, 2, 5, 10]), "5 rupees should return 1 coin");
  assertEquals(2, dispenseCoins(6, [1, 2, 5, 10]), "6 rupees should return 2 coins");
  assertEquals(2, dispenseCoins(7, [1, 2, 5, 10]), "7 rupees should return 2 coins");
  assertEquals(3, dispenseCoins(8, [1, 2, 5, 10]), "8 rupees should return 3 coins");
  assertEquals(3, dispenseCoins(9, [1, 2, 5, 10]), "9 rupees should return 3 coins");
  assertEquals(4, dispenseCoins(18, [5, 1, 2, 10]), "18 rupees should return 4 coins");
  assertEquals(5, dispenseCoins(18, [1, 2, 5]), "18 rupees should return 5 coins");
  assertEquals(9, dispenseCoins(18, [1, 2]), "18 rupees should return 9 coins");
  assertEquals(3, dispenseCoins(18, [5]), "18 rupees should return 3 coins");
  assertEquals(4, dispenseCoins(13, [7, 4, 1]), "13 rupees should return 4 coins");
  assertEquals(5, dispenseCoins(18, [5, 2, 1]), "18 rupees should return 5 coins");
  assertEquals(5, dispenseCoins(18, [5, 1, 2]), "18 rupees should return 5 coins");
}

const testDenominationCount = function() {
  title("denominationCount");
  assertObjectEquals({1:0, 2:0, 5:0}, denominationCount(0, [1, 2, 5]), "should return Zero coins of all denominations");
  assertObjectEquals({1:1, 2:0, 5:0}, denominationCount(1, [1, 2, 5]), "should return one coin of denominations one");
  assertObjectEquals({1:0, 2:1, 5:0}, denominationCount(2, [1, 2, 5]), "should return one coin of denomination two");
  assertObjectEquals({1:1, 2:1, 5:1}, denominationCount(8, [1, 2, 5]), "should return one coin of all denomination");
  assertObjectEquals({1:1, 2:1, 5:1}, denominationCount(8, [5, 1, 2]), "should return one coin of all denomination");
  assertObjectEquals({1:0, 2:2, 5:1, 10:1}, denominationCount(19, [5, 1, 2, 10]), "should return one coin of denomination two");
}


const test = function() {
  testdispenseCoins();
  testDenominationCount();
  summary();
}

test();
