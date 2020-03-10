'use strict';

function detectType(input) {
  switch (typeof(input)) {
    case 'string':
        return 'string';
    case 'number':
        if (isNaN(input)) {
          return undefined;
        }
        return 'number';
    default:
        return undefined; // here <undefined> after return is required by lint
  }
}

module.exports = detectType;