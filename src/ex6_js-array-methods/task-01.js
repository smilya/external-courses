'use strict'

function slice(array, begin=0, end=array.length) {
  // these variables are declared as lint does not allow to modify the function parameters
  let beginChecked, endChecked; 
  if(begin < 0) {
    beginChecked = array.length + begin;
  }
  else {
    beginChecked = begin;
  }
  if(end < 0) {
    endChecked = array.length + end;
  }
  else {
    endChecked = end;
  }
  let result = [];
  for (let i = beginChecked; i < endChecked && i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

module.exports = slice;