'use strict';

function assignNewKey(key, obj) {
  if(!(key in obj)) {
    Object.assign(obj, {[key]: 'new'}); 
  }
  return obj;
}

module.exports = assignNewKey;