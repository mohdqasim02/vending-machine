const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const countOptimumCoins = function(amount, denominations) {
  let leftOverAmount = amount;
  let coins = 0;

  for (let index = denominations.length - 1; index >= 0; index--) {
    if (leftOverAmount === 0) break;

    const currentDenomination = denominations[index];
    coins += countCoins(leftOverAmount, currentDenomination);
    leftOverAmount = calculateRemainingAmount(leftOverAmount, currentDenomination);
  }

  return coins;
}

const dispenseCoins = function(amount, denominations) {
  return countOptimumCoins(amount, denominations);
}

exports.dispenseCoins = dispenseCoins;
