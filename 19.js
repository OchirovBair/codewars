// TITLE: Odd or Even?
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// SOLUTION:

function oddOrEven(array) {
  let sum = 0;
  let result;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  if (sum % 2 == 0) {
    result = 'even';
  } else {
    result = 'odd';
  }
  return result;
}