
var binarySearch = function(arr, valueToSearch, lowerIndex, upperIndex) {
    if (lowerIndex > upperIndex) {
        return -1;
    }
    const mid = parseInt((upperIndex + lowerIndex)/2);
    if (valueToSearch === arr[mid]) {
        console.log('found at ' + mid);
        return mid;
    }
    if (valueToSearch > arr[mid]) {
        lowerIndex = mid + 1;
        return binarySearch(arr, valueToSearch,  lowerIndex, upperIndex);
    } else {
        upperIndex = mid - 1;
        return binarySearch(arr, valueToSearch,  lowerIndex, upperIndex);
    }
  
}

const arr = [6, 8, 19, 20, 23, 41, 49, 53, 56];
let indexOfValue = binarySearch(arr, 6, 0, arr.length - 1);
console.log(indexOfValue, 'index of value');
module.exports = binarySearch;