const utility = require("./utility.js");
const sortAscending = utility.bubbleSort;

const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const getDenominationCount = function(amount, denominations) {
  const sortedDenominations = sortAscending(denominations);
  let leftOverAmount = amount;
  let coins = {};

  for (let index = sortedDenominations.length - 1; index >= 0; index--) {
    const currentDenomination = sortedDenominations[index];
    coins[currentDenomination] = countCoins(leftOverAmount, currentDenomination);
    leftOverAmount = calculateRemainingAmount(leftOverAmount, currentDenomination);
  }

  return coins;
}

const sumCoins = function(denominationsCount) {
  let coins = 0;

  for (coin of Object.values(denominationsCount)) {
    coins += coin;
  }

  return coins;
}

const dispenseCoins = function(amount, denominations) {
  return sumCoins(getDenominationCount(amount, denominations));
}

exports.dispenseCoins = dispenseCoins;
exports.getDenominationCount = getDenominationCount;
