'use strict'

function camelize(str) {
  let arr = str.toLowerCase().split(' ');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}

module.exports = camelize;