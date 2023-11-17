// TITLE: Abbreviate a Two Word Name
// DESCRIPTION: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// SOLUTION:

function abbrevName(name) {

  let x = name.split(' ');
  let first = x[0][0].toUpperCase();
  let second = x[1][0].toUpperCase();
  let result = `${first}.${second}`;
  return result;
}