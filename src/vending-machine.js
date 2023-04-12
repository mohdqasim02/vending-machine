const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const sort = function(list) {
  for (let i = 0; i < list.length - 1; i++){
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]){
        const temp = list[i];
        list[i] = list[j];
        list[j] = temp;
      }
    }
  }
  return list
}

const countOptimumCoins = function(amount, denominations) {
  let leftOverAmount = amount;
  let coins = 0;
  const sortedDenominations = sort(denominations);

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
