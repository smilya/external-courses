'use strict'

function tasks__createNewTasks() {
  let innerHtml = `
    <div class="tasks main__tasks">
      <div class="tasks__header">
        <span class="tasks__title"></span>
        <div class="tasks__menu"></div>
      </div>
      <div class="tasks__container">
        <button class="tasks__button"><span class="tasks__symbol">+</span> Add card</button> 
      </div>
    </div>`;

  let newTasks = document.createElement('div');
  newTasks.innerHTML = innerHtml;
  return newTasks;
}

function tasks__addNewTasks(tasksObj) {
  let newTasksContainer = tasks__createNewTasks();
  document.querySelector('.main').append(newTasksContainer);
  newTasksContainer.querySelector('.tasks__title').innerText = tasks__capitalizeWords(tasksObj.title); 
  return newTasksContainer.firstElementChild;
}

function tasks__capitalizeWords(str) {
  let result = [];
  let words = str.split(' ');
  for (let word of words) {
    let letters = word.split('');
    letters[0] = letters[0].toUpperCase();    
    result.push(letters.join(''));
  }
  return result.join(' ');
}

function tasks__setButtonsAvailability() {
  let tasks = document.querySelectorAll('.tasks');
  for (let i = 1; i < tasks.length; i++) {
    let availableIssues = tasks[i - 1].querySelectorAll('.tasks__input');
    let button = tasks[i].querySelector('.tasks__button');
    if (availableIssues.length === 0) {
      // button.setAttribute('disabled', true);
      button.classList.add('tasks__button--disabled');
    }
    else {
      // button.removeAttribute('disabled');
      button.classList.remove('tasks__button--disabled');
    }
  }
}