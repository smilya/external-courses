'use strict'

function filter(array, callback) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      answer.push(array[i]);
    }
  }
  return answer;  
}

module.exports = filter;