'use strict';

function differElements(arr) {
  let answer = [0, 0, 0];
  for (let elem of arr) {
    if (typeof(elem) !== "number") {continue};
    if (elem === 0) {answer[2]++;}
    else if (elem % 2 === 0) {answer[0]++;}
    else if (elem % 2 === 1) {answer[1]++;}
  }
  console.log(`Evens: ${answer[0]}, odds: ${answer[1]}, nulls: ${answer[2]}`);
  return answer;
}

module.exports = differElements;