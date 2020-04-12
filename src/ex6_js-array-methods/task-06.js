'use strict'

function reduce(array, callback, initialValue=array[0]) {
  let i;
  let currentValue = initialValue;
  if(currentValue === array[0]) {
    i = 1;
  }
  else {
    i = 0;
  }
  for (i; i < array.length; i++) {
    currentValue = callback(currentValue, array[i], i, array);
  }
  return currentValue;
}

module.exports = reduce;