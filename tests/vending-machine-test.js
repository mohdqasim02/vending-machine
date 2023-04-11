const testing = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const assertArrayEquals = testing.assertArrayEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const dispenseCoins = vendingMachine.dispenseCoins;

const testdispenseCoins = function() {
  assertEquals(0, dispenseCoins(0), "Zero rupees should return zero coin");
  assertEquals(1, dispenseCoins(1), "One rupee should return one coin");
  assertEquals(1, dispenseCoins(2), "Two rupees should return one coins");
  assertEquals(2, dispenseCoins(3), "Three rupees should return two coins");
  assertEquals(4, dispenseCoins(8), "Even denominations should return (denominations / 2) coins");
  assertEquals(5, dispenseCoins(9), "Odd denominations should return (denominations / 2) plus one coins");
  summary();
}


const test = function() {
  testdispenseCoins();
}

test();
