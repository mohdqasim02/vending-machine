const calculateRemainingAmount = function(amount, denomination) {
  return amount % denomination;
}

const countTenRupeeCoin = function(amount) {
  return Math.floor(amount / 10);
}

const countFiveRupeeCoin = function(amount) {
  return Math.floor(amount / 5);
}

const countTwoRupeeCoin = function(amount) {
  return Math.floor(amount / 2);
}


const countOptimumCoins = function(amount) {
  let leftOverAmount = amount;
  let coins = 0;

  coins = countTenRupeeCoin(leftOverAmount);
  leftOverAmount = calculateRemainingAmount(leftOverAmount, 10);

  coins += countFiveRupeeCoin(leftOverAmount);
  leftOverAmount = calculateRemainingAmount(leftOverAmount, 5);

  coins += countTwoRupeeCoin(leftOverAmount);
  leftOverAmount = calculateRemainingAmount(leftOverAmount, 2);

  return coins + leftOverAmount;
}

const dispenseCoins = function(denomination) {
  return countOptimumCoins(denomination);
}

exports.dispenseCoins = dispenseCoins;
