'use strict';

function isKeyInObj(key, obj) {
  return Object.keys(obj).includes(key);
}

module.exports = isKeyInObj;

