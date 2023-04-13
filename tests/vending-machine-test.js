const testing = require('../lib/test-framework.js');
const vendingMachine = require('../src/vending-machine.js');

const assertObjectEquals = testing.assertObjectEquals;
const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const dispenseCoins = vendingMachine.dispenseCoins;
const denominationCount = vendingMachine.getDenominationCount;

const testdispenseCoins = function() {
  title("\nTesting optimum number of coins");

  const funcName = "dispenseCoins";
  let expected = 0;
  let actual = dispenseCoins(0, [1, 2, 5]);
  let message = "No amount should return zero coins";
  assertEquals(expected, actual, message, funcName); 

  expected = 10;
  actual = dispenseCoins(10, [1]);
  message = "Given Only 1₹ denomination should return the original amount";
  assertEquals(expected, actual, message, funcName); 

  expected = 0;
  actual = dispenseCoins(0, [5, 10]);
  message = "Amount less than every denomination should return zero coin";
  assertEquals(expected, actual, message, funcName); 

  expected = 1;
  actual = dispenseCoins(5, [1, 2, 5, 10]);
  message = "Amount equal to any denomination should return one coin";
  assertEquals(expected, actual, message, funcName); 

  expected = 3;
  actual = dispenseCoins(8, [1, 2, 5]);
  message = "Amount equal to sum of all denominations should return number of denominations";
  assertEquals(expected, actual, message, funcName); 

  expected = 4;
  actual = dispenseCoins(8, [1, 5]);
  message = "Same amount with different denominations should return different number of coins each times";
  assertEquals(expected, actual, message, funcName); 
}

const testOrderOfDenominations = function() {
  title("\nTesting order of denominations"); 

  const funcName = "dispenseCoins";
  let expected = 3;
  let actual = dispenseCoins(8, [1, 2, 5]);
  let message = "Denominations in Ascending Order should return optimum number of coins";
  assertEquals(expected, actual, message, funcName); 

  expected = 3;
  actual = dispenseCoins(8, [1, 2, 5]);
  message = "Shuffled Denominations should also return optimum number of coins";
  assertEquals(expected, actual, message, funcName); 
}

const testDenominationCount = function() {
  title("\nTesting count of each denominations");

  const funcName = "denominationCount";
  let expected = {1: 0, 2: 0, 5: 0};
  let actual = denominationCount(0, [1, 2, 5]);
  let message = "No amount should return zero coins of all denominations";
  assertObjectEquals(expected, actual, message, funcName); 

  expected = {1:0, 2:0, 5:2};
  actual = denominationCount(10, [1, 2, 5]);
  message = "Amount in multiple of a denomination should return all other denomination coins as zero";
  assertObjectEquals(expected, actual, message, funcName); 

  expected = {1:1, 2:1, 5:1};
  actual = denominationCount(8, [1, 2, 5]);
  message = "Amount equal to sum of all denominations should return one coin of each denomination";
  assertObjectEquals(expected, actual, message, funcName); 

  expected = {1:0, 2:2, 5:1, 10:1};
  actual = denominationCount(19, [5, 1, 2, 10]);
  message = "Amount greater than the sum of all denominations should return optimum num of coins";
  assertObjectEquals(expected, actual, message, funcName); 
}


const test = function() {
  testdispenseCoins();
  testOrderOfDenominations();
  testDenominationCount();
  summary();
}

test();
