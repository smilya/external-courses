'use strict'

function insertWord(str, word, position) {
  let arr = str.split(" ");
  let frontStr = '';
  let i = 0;
  for (i; i < arr.length - position; i++) {
    frontStr = frontStr + arr[i] + ' ';
  }
  let backStr = '';
  for (i; i < arr.length; i++) {
    backStr = backStr + arr[i] + " ";
  }
  backStr = backStr.trim();
  return frontStr + word + " " + backStr;
}

module.exports = insertWord;