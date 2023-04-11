const testing = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const assertArrayEquals = testing.assertArrayEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const dispenseCoins = vendingMachine.dispenseCoins;

const testdispenseCoins = function() {
  assertEquals(0, dispenseCoins(0), "0 rupees should return 0 coin");
  assertEquals(1, dispenseCoins(1), "1 rupee should return 1 coin");
  assertEquals(1, dispenseCoins(2), "2 rupees should return 1 coins");
  assertEquals(2, dispenseCoins(3), "3 rupees should return 2 coins");
  assertEquals(1, dispenseCoins(5), "5 rupees should return 1 coin");
  assertEquals(2, dispenseCoins(6), "6 rupees should return 2 coins");
  assertEquals(2, dispenseCoins(7), "7 rupees should return 2 coins");
  assertEquals(3, dispenseCoins(8), "8 rupees should return 3 coins");
  assertEquals(4, dispenseCoins(18), "18 rupees should return 4 coins");
  assertEquals(21, dispenseCoins(188), "188 rupees should return 21 coins");
  summary();
}


const test = function() {
  testdispenseCoins();
}

test();
