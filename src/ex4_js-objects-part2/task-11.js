'use strict'

function countChars(str) {
  let unics = {};
  let arr = str.split('');
  while (arr.length > 0) {
    let nextElement = arr[0];
    arr.shift();
    if (nextElement in unics) {
      unics[nextElement] += 1;
    }
    else {
      unics[nextElement] = 1;
    }
  }  
  for (let key in unics) {
    if (unics.hasOwnProperty(key)) {
      console.log(`${key}: ${unics[key]}`);
    }    
  }
  return undefined; // the record is added accoridng to general tasks requirements
                    // anyway tests are passed without it either. Let me delete the record please?
}

module.exports = countChars;