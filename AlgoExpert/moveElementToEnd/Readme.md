Write a function that takes in two non-empty arrays of integers, finds the
pair of numbers (one from each array) whose absolute difference is closest to
zero, and returns an array containing these two numbers, with the number from
the first array in the first position.
Note that the absolute difference of two integers is the distance between
them on the real number line. For example, the absolute difference of -5 and 5
is 10, and the absolute difference of -5 and -4 is 1.

If no three numbers sum up to the target sum, the function should return an
empty array.
## Example 1:
```
Input: 
arr1 = [-1, 5, 10, 20, 28, 3]
arr2 =  = [26, 134, 135, 15, 17]
Output: [28, 26]
```

## Complexity
- time
  O(n^2)
- space
  O(n) space