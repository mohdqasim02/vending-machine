const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const sortAscending = function(list) {
  const sortedList = list.slice(0);

  for (let i = 0; i < sortedList.length - 1; i++){
    for (let j = i + 1; j < sortedList.length; j++) {
      if (sortedList[i] > sortedList[j]){
        const firstNum = sortedList[i];
        sortedList[i] = sortedList[j];
        sortedList[j] = firstNum;
      }
    }
  }
  return sortedList;
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
exports.sortAscending = sortAscending;
exports.getDenominationCount = getDenominationCount;
