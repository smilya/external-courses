'use strict';

function lookOverArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log (arr[i]);
  }  
  console.log (`The array has ${(arr.length)} elements`);
  return undefined;
}

module.exports = lookOverArr;