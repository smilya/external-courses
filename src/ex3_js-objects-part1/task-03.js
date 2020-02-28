'use strict';

function isThereKeyInObj(key, obj) {
  if (key in obj) {return true};
  return false;
}

module.exports = isThereKeyInObj;

