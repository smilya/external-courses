'use strict'

function deepClone(obj) {
  if (Array.isArray(obj)) {
    let answer = [];
    for (let i of obj) {
      if (typeof(i) === 'object') {
        answer.push(deepClone(i));
      }
      else answer.push(i);
    }
    return answer;
  }
  let answer = {};
  for (let key in obj ) {
    if (typeof obj[key] === 'object') {
      answer[key] = deepClone(obj[key]);
    }
    else {
      answer[key] = obj[key];
    }
  }
  return answer;  
}

module.exports = deepClone;
