'use strict'

function map(array, callback) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(callback(array[i], i, array));    
  }
  return answer;  
}

module.exports = map;