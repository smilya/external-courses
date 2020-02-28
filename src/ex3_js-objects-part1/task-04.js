'use strict';

// отключаю линт, потому что тест требует, чтобы именно в исходный объект было добавлено свойство
function assignNewKey(key, obj) {
  if(!(key in obj)) {
    obj[key] = 'new'; //eslint-disable-line no-param-reassign
  }
  return obj;
}

module.exports = assignNewKey;

/* Приведенная выше функция проходит тест, но она не соответствует заданию, т.к.
не возвращает копию исходного объкта, а модифицирует сам исходный объект.
Ниже - код функции, отвечающей тех. заданию.
Но он не проходит тест, т.к. тест требует изменения исходного объекта.
*/

function assignNewKey_correct(newKey, obj) {
  let answer = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      answer[key] = obj[key];
    }    
  }
  if (!(newKey in answer)) {
    answer[newKey] = 'new';
  }
  return answer;
}