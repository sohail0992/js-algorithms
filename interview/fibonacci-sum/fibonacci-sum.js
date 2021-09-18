var fibnnacciSumSeries = function(N) {
  const toReturn = [];
  let prevInt = 0, currentInt = 1, nextTerm;
  for (let i = 1; i <= N; i++) {
    toReturn.push(i);
  }
  for (let i = 1; i <= N; i++) {
    nextTerm = prevInt + currentInt;
    prevInt = currentInt;
    currentInt = nextTerm;
    const indexOfFibnaciNumber = toReturn.findIndex(each => each === nextTerm);
    if (indexOfFibnaciNumber > -1) {
      toReturn[indexOfFibnaciNumber] = -1;
    }
  }
  return toReturn;
};

module.exports = fibnnacciSumSeries;
