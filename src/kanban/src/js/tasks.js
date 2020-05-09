'use strict'

import {data, removeTasks, addNewTasks} from './data-utils.js'
import {checkIfMainEmpty} from './main.js'
import {refreshCounters, disableInputs} from './input-utils.js'

export function createNewTasks() {
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

export function addTasks(tasksObj) {
  let newTasksContainer = createNewTasks();
  document.querySelector('.main').append(newTasksContainer);
  newTasksContainer.querySelector('.tasks__title').innerText = capitalizeWords(tasksObj.title); 
  return newTasksContainer.firstElementChild;
}

export function addNewTasksBoard() {
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
  checkIfMainEmpty();
  let titleInput = document.querySelector('.tasks__titleInput');
  titleInput.addEventListener('blur', titleInputHandler);
  titleInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      titleInput.blur(); 
    }
  });
  titleInput.focus();
  return newTasks; 
}

export function removeTasksBoard(data, tasks) {
  removeTasks(data, tasks.id);
  tasks.parentElement.remove();
  setButtonsAvailability();
  checkIfMainEmpty();
  refreshCounters(data);
}

export function titleInputHandler() {
  let titleInput = document.querySelector('.tasks__titleInput');
  let newTasks = titleInput.closest('.tasks');
  if (titleInput.value === '') {
    newTasks.parentElement.remove();
    checkIfMainEmpty();
  }
  else {
    newTasks.id = titleInput.value.toLowerCase();
    let tasksTitle = document.createElement('span');
    tasksTitle.innerText = capitalizeWords(titleInput.value);
    tasksTitle.classList.add('tasks__title');
    titleInput.parentElement.replaceChild(tasksTitle, titleInput);
    addNewTasks(data, newTasks.id);
    setButtonsAvailability();
    disableInputs(data);
    refreshCounters(data);
  }
}

export function capitalizeWords(str) {
  let result = [];
  let words = str.split(' ');
  for (let word of words) {
    let letters = word.split('');
    letters[0] = letters[0].toUpperCase();    
    result.push(letters.join(''));
  }
  return result.join(' ');
}

export function setButtonsAvailability() {
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

export function setCreateNewTasks() {
  document.querySelector('.newListButton').addEventListener('click', addNewTasksBoard);
}

export function setTasksMenuOpen() {
  let isMenuOpen= false;
  document.body.addEventListener('click', (event) => {
    if (isMenuOpen) {
      let menu = document.querySelector('.tasks__menuList');
      if (menu) {
        menu.remove();
      }      
      isMenuOpen= false;
    }    
    else if (!isMenuOpen&& event.target.classList.contains('tasks__menu')) {
      let menuInnerHTML = `
        <li id="tasks-delete" class="tasks__menuItem">Delete</li>
        <li id="tasks-print" class="tasks__menuItem">Print</li>`;
      let menu = document.createElement('ul');
      menu.classList.add("tasks__menuList");
      menu.innerHTML = menuInnerHTML;
      event.target.append(menu);
      isMenuOpen= true;
      menu.addEventListener('click', (event) => {
        if(event.target.id === 'tasks-delete') {
          removeTasksBoard(data, event.target.closest('.tasks'));
          disableInputs(data);
        }
      });      
    }
  })  
}