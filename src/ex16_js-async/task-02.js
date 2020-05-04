'use strict'

let dictionary = [
  'catarsis','catalog','catran',
  'car','cat','cap',
  'crown','corn','cup'
];

let addDropdown_1sec = debounce(addDropdown, 1000);

document.querySelector('.searcher__input').addEventListener('input', (e) => {
  addDropdown_1sec(e.target.closest('.searcher'), e.target.value, dictionary);  
});

function addDropdown(searcher, value, data) {
  let oldDropdown = document.querySelector('.searcher__dropdown');
  if (oldDropdown) {
    oldDropdown.remove();
    document.removeEventListener('input', clickHandler);
  }
  if (!value) {
    return;
  }
  let ul = document.createElement('ul');
  ul.classList.add('searcher__dropdown');
  let words = findWords(value, data);
  for (let word of words) {
    addLi(word, ul);
  }
  searcher.append(ul);
  document.addEventListener('click', clickHandler);
  
  function findWords(value, data) {
    let result = [];
    for (let record of data) {
      if (record.slice(0, value.length) === value) {
        result.push(record);
      }
    }
    return result.sort();
  }

  function addLi(value, ul) {
    let li = document.createElement('li');
    li.classList.add('searcher__item');
    li.innerText = value;
    ul.append(li);
  }

  function clickHandler(event) {
    if (event.target.closest('ul') === ul && 
      event.target.classList.contains('searcher__item')) {
      event.target.closest('.searcher').querySelector('.searcher__input').value = event.target.innerText; // eslint-disable-line no-param-reassign
    }
    ul.remove();
    document.removeEventListener('click', clickHandler);
    return;
  }
}

function debounce(callback, timeout) {
  let timer;
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(callback, timeout, ...args);
  }
}