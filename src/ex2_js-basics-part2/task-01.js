'use strict';

function detectType(input) {
  switch (typeof(input)) {
    case 'string':
        return 'string';
    case 'number':
        if (isNaN(input)) { //Добавлено в связи с требованием об обязательной проверке на NaN
          return 'NaN'; //Задание не уточняет, что должно выводиться при NaN. Сейчас будет возвращаться строка "NaN"
        }
        return 'number';
    default:
        return undefined;
  }
}

module.exports = detectType;