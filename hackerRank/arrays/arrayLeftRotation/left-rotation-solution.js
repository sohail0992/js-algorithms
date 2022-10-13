function rotLeft(arr, d) {
    // Write your code here
    if (arr.length === 1) {
        return arr;
    }
    for (let i = 0; i < d; i++) {
      rotate2(arr);
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


module.exports = rotLeft;