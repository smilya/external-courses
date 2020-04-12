'use strict'

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

module.exports = randomInteger;