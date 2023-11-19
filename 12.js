// TITLE: Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

// SOLUTION:

function century(year) {
  let result = 0;
  let arr = year.toString().split('').map(Number);
  if (year <= 100) {
    result = 1;
  } else if (arr.length == 3) {
    result = arr[0]
    if (arr[arr.length - 1] + arr[arr.length - 2] >= 1) {
      result += 1;
    }
  } else if (arr.length == 4) {
    result = arr[0] * 10 + arr[1];
    if (arr[arr.length - 1] + arr[arr.length - 2] >= 1) {
      result += 1;
    }
  } else if (arr.length == 5) {
    result = arr[0] * 100 + arr[1] * 10 + arr[2];
    if (arr[arr.length - 1] + arr[arr.length - 2] >= 1) {
      result += 1;
    }
  } else if (arr.length == 6) {
    result = arr[0] * 1000 + arr[1] * 100 + arr[2] * 10 + arr[3];
    if (arr[arr.length - 1] + arr[arr.length - 2] >= 1) {
      result += 1;
    }
  }
  return result;
}
