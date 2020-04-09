'use strict'

function Hangman(word, maxErrors=6) {
  this.word = word.toLowerCase().split('');
  this.entries = new Set;
  this.maxErrors = maxErrors;

  this.startAgain = function(word, maxErrors=6) {
    return new this.constructor(word, maxErrors);
  };

  this.getErrorsLeft = function() {
    return this.maxErrors - this.getWrongSymbols().length;
  };

  this.getStatus = function() {
    return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
  };

  this.getGuessedString = function() {
    let guessedArr = [];
    for (let symbol of this.word) {
      if(this.entries.has(symbol)) {
        guessedArr.push(symbol);
      }
      else {
        guessedArr.push('_');
      }
    }
    return guessedArr.join('');
  };

  this.getWrongSymbols = function() {
    let wrongSymbols = [];
    for (let symbol of this.entries) {
      if (!this.word.find(item => item === symbol)) {
        wrongSymbols.push(symbol);
      }
    }
    return wrongSymbols.sort();
  };
  
  this.guess = function(symbol) {
    let flagGameOver = () => {
      if (this.getErrorsLeft === 0) {
        console.log(`${this.getGuessedString()} | Game over!`);
        return true;
      }
      return false;
    }
    let flagGamePassed = () => {
      if (this.getGuessedString().indexOf('_') === -1) {
        console.log(`${this.getGuessedString()} | You won!`);
        return true;
      }
      return false;
    } 

    if (flagGameOver() || flagGamePassed()) {
      return this;
    }
    this.entries.add(symbol);
    if (this.word.find(item => item === symbol )) {
      if (flagGamePassed()) {
        return this;
      }
      console.log(this.getGuessedString());
      return this;
    }    
    if (flagGameOver()) {
      return this;
    }
    console.log (`wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().toString()}`);
    return this;    
  };
}

let hangman = new Hangman('webpurple');

module.exports = hangman;