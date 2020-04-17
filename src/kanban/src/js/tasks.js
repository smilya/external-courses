'use strict'

import {data, data__removeTasks, data__addNewTasks} from './data.js'
import {main__checkAndFlagIfEmpty} from './main.js'
import {input__refreshCounters, input__disableInputs} from './input.js'

export function tasks__createNewTasks() {
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

export function tasks__addTasks(tasksObj) {
  let newTasksContainer = tasks__createNewTasks();
  document.querySelector('.main').append(newTasksContainer);
  newTasksContainer.querySelector('.tasks__title').innerText = tasks__capitalizeWords(tasksObj.title); 
  return newTasksContainer.firstElementChild;
}

export function tasks__addNewTasks() {
  let innerHtml = `
  <div class="tasks main__tasks">
    <div class="tasks__header">
      <input class="tasks__titleInput" type="text">
      <div class="tasks__menu"></div>
    </div>
    <div class="tasks__container">
      <button class="tasks__button"><span class="tasks__symbol">+</span> Add card</button> 
    </div>
  </div>`;

  let newTasks = document.createElement('div');
  newTasks.innerHTML = innerHtml;
  document.querySelector('.main').prepend(newTasks);
  main__checkAndFlagIfEmpty();
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

export function tasks__removeTasks(data, tasks) {
  data__removeTasks(data, tasks.id);
  tasks.parentElement.remove();
  tasks__setButtonsAvailability();
  main__checkAndFlagIfEmpty();
  input__refreshCounters(data);
}

export function tasks__titleInputHandler() {
  let titleInput = document.querySelector('.tasks__titleInput');
  let newTasks = titleInput.closest('.tasks');
  if (titleInput.value === '') {
    newTasks.parentElement.remove();
    main__checkAndFlagIfEmpty();
  }
  else {
    newTasks.id = titleInput.value.toLowerCase();
    let tasksTitle = document.createElement('span');
    tasksTitle.innerText = tasks__capitalizeWords(titleInput.value);
    tasksTitle.classList.add('tasks__title');
    titleInput.parentElement.replaceChild(tasksTitle, titleInput);
    data__addNewTasks(data, newTasks.id);
    tasks__setButtonsAvailability();
    input__disableInputs(data);
    input__refreshCounters(data);
  }
}

export function tasks__capitalizeWords(str) {
  let result = [];
  let words = str.split(' ');
  for (let word of words) {
    let letters = word.split('');
    letters[0] = letters[0].toUpperCase();    
    result.push(letters.join(''));
  }
  return result.join(' ');
}

export function tasks__setButtonsAvailability() {
  let tasks = document.querySelectorAll('.tasks');
  for (let i = 1; i < tasks.length; i++) {
    let availableIssues = tasks[i - 1].querySelectorAll('.tasks__input');
    let button = tasks[i].querySelector('.tasks__button');
    if (availableIssues.length === 0) {
      button.classList.add('tasks__button--disabled');
    }
    else {
      button.classList.remove('tasks__button--disabled');
    }
  }
}

export function tasks__setCreateNewTasks() {
  document.querySelector('.newListButton').addEventListener('click', tasks__addNewTasks);
}

export function tasks__setMenuOpening() {
  let menuOpen = false;
  document.body.addEventListener('click', (event) => {
    if (menuOpen) {
      let menu = document.querySelector('.tasks__menuList');
      if (menu) {
        menu.remove();
      }      
      menuOpen = false;
    }    
    else if (!menuOpen && event.target.classList.contains('tasks__menu')) {
      let menuInnerHTML = `
        <li id="tasks-delete" class="tasks__menuItem">Delete</li>
        <li id="tasks-print" class="tasks__menuItem">Print</li>`;
      let menu = document.createElement('ul');
      menu.classList.add("tasks__menuList");
      menu.innerHTML = menuInnerHTML;
      event.target.append(menu);
      menuOpen = true;
      menu.addEventListener('click', (event) => {
        if(event.target.id === 'tasks-delete') {
          tasks__removeTasks(data, event.target.closest('.tasks'));
          input__disableInputs(data);
        }
      });      
    }
  })  
}