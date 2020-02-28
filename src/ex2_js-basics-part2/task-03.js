'use strict';

function differElements(arr) {
  let evens = 0;
  let odds = 0;
  let nulls = 0;
  for (let elem of arr) {
    if (typeof(elem) !== "number") {continue};
    if (elem === 0) {nulls++;}
    else if (elem % 2 === 0) {evens++;}
    else if (elem % 2 === 1) {odds++;}
  }
  console.log(`Evens: ${evens}, odds: ${odds}, nulls: ${nulls}`);
  return [evens, odds, nulls];
}

module.exports = differElements;