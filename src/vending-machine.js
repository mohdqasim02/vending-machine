const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const countFiveRupeeCoin = function(amount) {
  return Math.floor(amount / 5);
}

const countTwoRupeeCoin = function(amount) {
  return Math.floor(amount / 2);
}


const countOptimumCoins = function(amount) {
  const denominations = [1, 2, 5, 10];
  let leftOverAmount = amount;
  let coins = 0;

  for (let index = denominations.length - 1; index >= 0; index--) {
    if (leftOverAmount === 0) break;

    const currentDenomination = denominations[index];
    coins += countCoins(leftOverAmount, currentDenomination);
    leftOverAmount = calculateRemainingAmount(leftOverAmount, currentDenomination);
  }

  return coins;

  //   coins = countTenRupeeCoin(leftOverAmount);
  //   leftOverAmount = calculateRemainingAmount(leftOverAmount, 10);
  // 
  //   coins += countFiveRupeeCoin(leftOverAmount);
  //   leftOverAmount = calculateRemainingAmount(leftOverAmount, 5);
  // 
  //   coins += countTwoRupeeCoin(leftOverAmount);
  //   leftOverAmount = calculateRemainingAmount(leftOverAmount, 2);
  // 
  //   return coins + leftOverAmount;
}

const dispenseCoins = function(denomination) {
  return countOptimumCoins(denomination);
}

exports.dispenseCoins = dispenseCoins;
