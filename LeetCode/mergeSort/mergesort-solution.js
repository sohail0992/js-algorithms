var arr = [5,4,1,8,7,2,6,3];
mergeSort(arr);

function  mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let halfLength = arr.length/2;
  let lastHalf = arr.splice(halfLength,arr.length);
  let firstHalf = arr.splice(0,halfLength);
  lastHalf = mergeSort(lastHalf);
  console.log(lastHalf,'lastHalf')
}