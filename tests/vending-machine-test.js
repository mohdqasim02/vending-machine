const testing = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const assertArrayEquals = testing.assertArrayEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const coins = vendingMachine.coins;

const testCoins = function() {
  assertEquals(0, coins(0), "Zero rupees should return zero coins");
  assertEquals(10, coins(10), "Denominations other than zero should return coins equal to the Denomination number");
  summary();
}


const test = function() {
  testCoins();
}

test();
