'use strict'

const Calculator = {
  _value: 0,  
  reset() {
    Calculator._value = 0;
    return Calculator._value;
  },
  getResult() {
    return Calculator._value;
  },
  add(num) {
    if(num) {
      Calculator._value += num;
    }  
    return Calculator.add;
  },
  subtract(num) {
    if(num) {
      Calculator._value -= num;
    } 
    return Calculator.subtract;
  },
  multiply(num) {
    if(num) {
      Calculator._value *= num;
    } 
    return Calculator.multiply;
  },
  divide(num) {
    if(num) {
      Calculator._value /= num;
    } 
    return Calculator.divide;
  }
}

module.exports = Calculator;