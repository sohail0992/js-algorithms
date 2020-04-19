function sumOfSquare(acc,cv) {
  cv = parseInt(cv);
  cv = cv * cv;
  return acc + cv;
}

var isHappy = function(number) {
  let result = -1;
  while(result !== 1 && result !== 4) {
    number = number.toString().split('');
    result = number.reduce(sumOfSquare,0);//82
    number = result;
  }
  if(result === 1) {
      return true;
  } else {
      return false;
  }
};
module.exports = isHappy;