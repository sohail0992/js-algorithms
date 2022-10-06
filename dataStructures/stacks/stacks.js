// stack
let stack = {};
let count = 0;

function push(data) {
    stack[count++] = data;
}

function pop() {
    if (count < 0) {
        return undefined;
    }
    return stack[--count];
}

function peek() {
    if (count < 0) {
        return undefined;
    }
    return stack[count - 1];
}

// stack can be use for checking if the word is Palindrome
function isPalindrome(d) {
    let reverse = '';
    for (let i = 0; i < d.length; i++) {
         push(d[i]);
    }
   for (let i = 0; i < d.length; i++) {
        reverse = reverse + pop();
   }
   return d === reverse;
}

module.exports = isPalindrome;