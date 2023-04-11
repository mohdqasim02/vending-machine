const testing = require('../lib/test-framework.js');
const coins = require('../src/vending-machine.js');
const assertArrayEquals = testing.assertArrayEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const test = function() {
  assertEquals(coins.zero, coins.one, "Failed Test");
  assertEquals(coins.zero, 0, "Passed Test");
  summary();
}

test();
