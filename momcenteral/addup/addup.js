

function getMax(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function argmap(arr1, arr2) {
  var arrToReturn = []
  var i = 0
  var reset = 0
  var arr1Length = arr1.length
  var arr2Length = arr2.length
  // loop will run till the length of array of greater size
  while (i < getMax(arr1Length, arr2Length)) {
      // verify if i is less than length - 1 for both
      // if yes add the sum of values on the index from both array
      // if no add the index from the array which has that index
      if (i < arr1Length && i < arr2Length) {
         arrToReturn.push(arr1[i] + arr2[i])
      } else if (i < arr1Length) {
        if (reset >= arr2Length) {
          reset = 0
        }
        arrToReturn.push(arr1[i] + arr2[reset])
        reset = reset + 1
      } else {
        if (reset >= arr1Length) {
          reset = 0
        }
        arrToReturn.push(arr1[reset] + arr2[i])
        reset = reset + 1
      }
      i = i + 1
  }
  // printArray(arrToReturn)
  return arrToReturn
}


module.exports = argmap;
