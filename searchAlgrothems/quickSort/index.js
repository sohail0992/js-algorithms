// O (n 2) worst case

function swap(a ,b) {
    const temp = a;
    a = b;
    b = temp;
}

function partition(arr, first, last) {
    const pivot = first;
    let lowerIndex = first + 1;
    let upperIndex = last;
     // call first element as pivot
    // loop till the higher and lower indices cross each other
    while (upperIndex >= lowerIndex) {
        if (arr[pivot] > arr[lowerIndex]) {
            lowerIndex++;
        } else if (arr[upperIndex] > arr[pivot]) {
            upperIndex--;
        } else if (arr[pivot] > arr[upperIndex] && arr[lowerIndex] > arr[upperIndex]) {
            // now lower index value is greater than pivot so we stop incrementing the lowerindex
            // we will decrement the upperIndex until we find a value that is less than pivot and lowerindex value we will switch array indices positions
            const temp = arr[upperIndex];
            arr[upperIndex] = arr[lowerIndex];
            arr[lowerIndex] = temp;
            upperIndex--;
            lowerIndex++;
        }
    }
    // swap pivot with uper
    const temp = arr[upperIndex];
    arr[upperIndex] = arr[pivot];
    arr[pivot] = temp;
    return upperIndex;
}

function quickSort(arr, first, last) {
    if (first < last) {
        const pivot = partition(arr, first, last);
        quickSort(arr, first, pivot - 1);
        quickSort(arr, pivot + 1, last);
    }
}


const arr = [20, 6, 8, 53, 23, 87, 42, 19];
console.log(arr, 'orignal');
quickSort(arr, 0, (arr.length - 1));
console.log(arr, 'sorted');

module.exports = quickSort;
