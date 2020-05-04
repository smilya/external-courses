'use strict'

// method .bind() polyfill:
function customBind(context, f) {
  return function(...args) {
    f.apply(context, args);
  }
}

// customBind usage:
let obj_cat = {
  name: "Murzik"
};

function f(...args) {
  let treat = '';
  for(let arg of args) {
    treat = treat + arg + ', ';
  }
  treat = treat.slice(0, treat.length - 2);
  console.log(`${this.name} eats: ${treat}`);
}

f = customBind(obj_cat, f);
f('meat', 'fish', 'sausages'); // Murzik eats: meat, fish, sausages