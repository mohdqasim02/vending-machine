const countOptimumCoins = function(denomination) {
  let leftOverAmount = denomination;
  let coins = Math.floor(leftOverAmount / 5);

  leftOverAmount = leftOverAmount % 5;
  coins += Math.floor(leftOverAmount / 2) + (leftOverAmount % 2);

  return coins;
}

const dispenseCoins = function(denomination) {
  return countOptimumCoins(denomination);
}

exports.dispenseCoins = dispenseCoins;
