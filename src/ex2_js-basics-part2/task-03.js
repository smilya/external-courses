'use strict';

function differElements(arr) {
  let result = [0, 0, 0];
  for (let elem of arr) {
    if (typeof(elem) !== "number") {continue};
    if (elem === 0) {result[2]++;}
    else if (elem % 2 === 0) {result[0]++;}
    else if (elem % 2 === 1) {result[1]++;}
  }
  console.log(`Evens: ${result[0]}, odds: ${result[1]}, nulls: ${result[2]}`);
  return result;
}

module.exports = differElements;