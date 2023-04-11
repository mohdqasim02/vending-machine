const countOptimumCoins = function(denomination) {
  return Math.floor(denomination / 2) + (denomination % 2); 
}

const dispenseCoins = function(denomination) {
  return countOptimumCoins(denomination);
}

exports.dispenseCoins = dispenseCoins;
