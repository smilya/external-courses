'use strict';

function logObjContent(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`key: ${key} has value: ${obj[key]}`);
    }    
  }
}

module.exports = logObjContent;