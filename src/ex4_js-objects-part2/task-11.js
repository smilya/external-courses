'use strict'

function countChars(str) {
  let collection = {};
  let arr = str.split('');
  while (arr.length > 0) {
    let nextElement = arr[0];
    arr.shift();
    if (nextElement in collection) {
      collection[nextElement] += 1;
    }
    else {
      collection[nextElement] = 1;
    }
  }  
  for (let key in collection) {
    if (collection.hasOwnProperty(key)) {
      console.log(`${key}: ${collection[key]}`);
    }    
  }
  return;  
}

module.exports = countChars;