'use strict';

// lint is disabled as it alerts initial obj modification required by the task
function assignNewKey(key, obj) {
  if(!(key in obj)) {
    obj[key] = 'new'; //eslint-disable-line no-param-reassign
  }
  return obj;
}

module.exports = assignNewKey;