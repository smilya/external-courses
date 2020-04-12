'use strict'

function insertWord(str, word, position) {
  let arr = str.split(" "),
    firstStrPart = '',
    i = 0,
    lastStrPart = '';
  for (i; i < arr.length - position; i++) {
    firstStrPart = firstStrPart + arr[i] + ' ';
  }
  for (i; i < arr.length; i++) {
    lastStrPart = lastStrPart + arr[i] + " ";
  }
  lastStrPart = lastStrPart.trim();
  return firstStrPart + word + " " + lastStrPart;
}

module.exports = insertWord;