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

function tasks__addTasks(tasksObj) {
  let newTasksContainer = tasks__createNewTasks();
  document.querySelector('.main').append(newTasksContainer);
  newTasksContainer.querySelector('.tasks__title').innerText = tasks__capitalizeWords(tasksObj.title); 
  return newTasksContainer.firstElementChild;
}

function tasks__addNewTasks() {
  let innerHtml = `
  <div class="tasks main__tasks">
    <div class="tasks__header">
      <input class="tasks__titleInput" type="text" autofocus>
      <div class="tasks__menu"></div>
    </div>
    <div class="tasks__container">
      <button class="tasks__button"><span class="tasks__symbol">+</span> Add card</button> 
    </div>
  </div>`;

  let newTasks = document.createElement('div');
  newTasks.innerHTML = innerHtml;
  document.querySelector('.main').prepend(newTasks);
  let titleInput = document.querySelector('.tasks__titleInput');
  titleInput.addEventListener('blur', tasks__titleInputHandler);
  titleInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      titleInput.blur(); 
    }
  });
  titleInput.focus();
  return newTasks; 
}

function tasks__titleInputHandler() {
  let titleInput = document.querySelector('.tasks__titleInput');
  let newTasks = titleInput.closest('.tasks');
  if (titleInput.value === '') {
    newTasks.parentElement.remove();
  }
  else {
    newTasks.id = titleInput.value.toLowerCase();
    let tasksTitle = document.createElement('span');
    tasksTitle.innerText = tasks__capitalizeWords(titleInput.value);
    tasksTitle.classList.add('tasks__title');
    titleInput.parentElement.replaceChild(tasksTitle, titleInput);
    data__addNewTasks(data, newTasks.id);
    tasks__setButtonsAvailability();
  }
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

function tasks__setCreateNewTasks() {
  document.querySelector('.newListButton').addEventListener('click', tasks__addNewTasks);
}