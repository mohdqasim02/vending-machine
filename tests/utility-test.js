const testing = require('../lib/test-framework.js');
const utility = require('../src/utility.js');

const assertEquals = testing.assertEquals;
const summary = testing.summary;
const title = testing.title;

const sortAscending = utility.bubbleSort;

const testSortAscending = function() {
  title("Testing sort utility");

  const funcName = "sortAscending";
  let expected = [1, 2, 3];
  let actual = sortAscending([3, 2, 1]);
  let message = "reversed list should be sorted";
  assertEquals(expected, actual, message, funcName);

  expected = [1, 2, 3];
  actual = sortAscending([1, 2, 3]);
  message = "sorted list should remain same";
  assertEquals(expected, actual, message, funcName);

  expected = [1, 2, 3];
  actual = sortAscending([3, 1, 2]);
  message = "shuffled list should be sorted";
  assertEquals(expected, actual, message, funcName);

  expected = [-1, 0, 2, 3];
  actual = sortAscending([3, -1, 2, 0]);
  message = "negative numbers and zero should come before positive numbers";
  assertEquals(expected, actual, message, funcName);
}

const test = function() {
  testSortAscending();
  summary();
}

test();

