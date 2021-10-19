var fibnnacciSumSeries = function(limit) {
    const list = [];
    const fibSequence = { 1: true };
    let left = 1, right = 1;
    for (let i = 1; i <= limit; i++) {
      if (fibSequence[i]) {
        list.push(-1);
      } else {
        list.push(i);
      }
      const temp = left;
      left = right;
      right = temp + right;
      fibSequence[right] = true;
    }
    return list;
}
  
module.exports = fibnnacciSumSeries;
  