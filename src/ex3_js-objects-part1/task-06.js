'use strict'

function deepClone(obj) {
  if (Array.isArray(obj)) {
    let result = [];
    for (let i of obj) {
      if (typeof(i) === 'object') {
        result.push(deepClone(i));
      }
      else result.push(i);
    }
    return result;
  }
  let result = {};
  for (let key in obj ) {
    if (typeof obj[key] === 'object') {
      result[key] = deepClone(obj[key]);
    }
    else {
      result[key] = obj[key];
    }
  }
  return result;  
}

module.exports = deepClone;
