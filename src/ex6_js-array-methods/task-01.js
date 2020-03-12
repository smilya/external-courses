'use strict'

function slice(array, begin=0, end=array.length) {
  let beginChecked, endChecked; // these variables are declared as lint does not allow to modify the function parameters
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
  let answer = [];
  for (let i = beginChecked; i < endChecked && i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
}

module.exports = slice;