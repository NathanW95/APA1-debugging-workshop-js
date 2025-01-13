function calculatePercentageChange(original, newAmount) {
  const difference = Math.abs(newAmount - original);
  const percentageDifference = (difference / original) * 100;

  if (difference === 0) {
    return 0;
  }
  else if (original > newAmount) {
    return Math.ceil(percentageDifference *-1);
  }
  else {
    return percentageDifference;
  }
}

calculatePercentageChange(50, 40);
module.exports = { calculatePercentageChange };
