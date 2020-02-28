'use strict';

function lookOverArr(arr) {
  let i;
  for (i = 0; i < arr.length; i++) {
    console.log (arr[i]);
  }  
  console.log (`The array has ${i} elements`);
  return undefined;
}

module.exports = lookOverArr;