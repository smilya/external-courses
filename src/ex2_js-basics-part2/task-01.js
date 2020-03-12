'use strict';

function detectType(input) {
  if (typeof(input) === 'string') {
    return 'string';
  }  
  if (typeof(input) === 'number' && !isNaN(input)) {
    return 'number';
  }
  return undefined// here <undefined> after return is required by lint
}

module.exports = detectType;