
arr = [1, 2, 3, 4, 5]
[2, 3, 4, 5, 1]

[2, 3, 4, 5, 1]
[3, 4, 5, 1, 2]



2 left = [3, 4, 5, 1, 2]

highest index move to lowest


`
// input array and number of rotations
// return rotated array
function rotLeft(arr, d) {
    // Write your code here
    if (arr.length === 1) {
        return arr;
    }
    for (let i = 0; i < d; i++) {
      rotate(arr);
    }
    return arr;
}

function rotate(arr) {
    // in theory it's O(1) because ECMA specification doesn't specify boundries 
    // swaping the highest index with lowest
    const temp = arr[0];
    for (let i = 0; i < (arr.length - 1); i++) {
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = temp;
    return arr;
}

function rotate2(arr) {
    // in theory it's O(1) because ECMA specification doesn't specify boundries 
    // swaping the highest index with lowest
    const temp = arr.shift();
    arr.push(temp);
    return arr;
}



`