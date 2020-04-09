const Calculator = {
  _value: 0,  
  reset() {
    this._value = 0;
    return this;
  },
  getResult() {
    return this._value;
  },
  add(num) {
    if(num) {
      this._value += num;
    }  
    return this;
  },
  subtract(num) {
    if(num) {
      this._value -= num;
    } 
    return this;
  },
  multiply(num) {
    if(num) {
      this._value *= num;
    } 
    return this;
  },
  divide(num) {
    if(num) {
      this._value /= num;
    } 
    return this;
  },
  setState(num) {
    if(num) {
      this._value = num;
    }
    return this;
  },
  fetchData(callback) {
    async function runCallback(num) {
      return callback(num);     
   }
    runCallback(500).then((value) => {
      this._value = value;
    });
  }
}

module.exports = Calculator;