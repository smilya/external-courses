'use strict'

function reduceStr(str, size) {
  if (str.length <= size) {
    return str;
  }
  return str.substr(0, size - 1) + '\u2026';
}

module.exports = reduceStr;