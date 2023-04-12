const testing = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const assertArrayEquals = testing.assertArrayEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const dispenseCoins = vendingMachine.dispenseCoins;

const testdispenseCoins = function() {
  assertEquals(0, dispenseCoins(0, [1, 2, 5, 10]), "0 rupees should return 0 coin");
  assertEquals(1, dispenseCoins(1, [1, 2, 5, 10]), "1 rupee should return 1 coin");
  assertEquals(1, dispenseCoins(2, [1, 2, 5, 10]), "2 rupees should return 1 coins");
  assertEquals(2, dispenseCoins(3, [1, 2, 5, 10]), "3 rupees should return 2 coins");
  assertEquals(1, dispenseCoins(5, [1, 2, 5, 10]), "5 rupees should return 1 coin");
  assertEquals(2, dispenseCoins(6, [1, 2, 5, 10]), "6 rupees should return 2 coins");
  assertEquals(2, dispenseCoins(7, [1, 2, 5, 10]), "7 rupees should return 2 coins");
  assertEquals(3, dispenseCoins(8, [1, 2, 5, 10]), "8 rupees should return 3 coins");
  assertEquals(3, dispenseCoins(9, [1, 2, 5, 10]), "9 rupees should return 3 coins");
  assertEquals(4, dispenseCoins(18, [1, 2, 5, 10]), "18 rupees should return 4 coins");
  assertEquals(5, dispenseCoins(18, [1, 2, 5]), "18 rupees should return 5 coins of denominations [1, 2, 5]");
  assertEquals(9, dispenseCoins(18, [1, 2]), "18 rupees should return 9 coins of two");
  assertEquals(3, dispenseCoins(18, [5]), "18 rupees should return 3 coins of five");
  assertEquals(4, dispenseCoins(13, [1, 4, 7]), "13 rupees should return 4 coins");
  summary();
}


const test = function() {
  testdispenseCoins();
}

test();
