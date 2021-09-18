function isPerfectSquare(x)
{
  let s = parseInt(Math.sqrt(x));
  return (s * s == x);
}
 
// Returns true if n is a Fibinacci Number, else false
function isFibonacci(n)
{
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return isPerfectSquare(5*n*n + 4) ||
           isPerfectSquare(5*n*n - 4);
}


var fibnnacciSumSeries = function(N) {
  const toReturn = [];
  for (let i = 1; i <= N; i++) {
    toReturn.push(isFibonacci(i) ? -1 : i);
  }
  return toReturn;
};

module.exports = fibnnacciSumSeries;
