const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const copyList = function(list) {
  const newList = [];

  for (let index = 0; index < list.length; index++) {
    newList.push(list[index]);
  }

  return newList;
}

const sortAscending = function(list) {
  const sortedList = copyList(list);

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

const countOptimumCoins = function(amount, denominations) {
  let leftOverAmount = amount;
  let coins = 0;
  const sortedDenominations = sortAscending(denominations);

  for (let index = sortedDenominations.length - 1; index >= 0; index--) {
    if (leftOverAmount === 0) break;

    const currentDenomination = sortedDenominations[index];
    coins += countCoins(leftOverAmount, currentDenomination);
    leftOverAmount = calculateRemainingAmount(leftOverAmount, currentDenomination);
  }

  return coins;
}

const dispenseCoins = function(amount, denominations) {
  return countOptimumCoins(amount, denominations);
}

exports.dispenseCoins = dispenseCoins;
exports.sortAscending = sortAscending;
