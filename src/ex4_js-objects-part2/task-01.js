'use strict'

function getProtoValue(key, obj) {
  return Object.getPrototypeOf(obj)[key];
}

module.exports = getProtoValue;