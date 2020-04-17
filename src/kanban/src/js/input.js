'use strict'

import {data, data__getIssueName, data__modifyIssue, data__removeIssue, data__getIssuesToAdd} from './data.js';
import {tasks__setButtonsAvailability} from './tasks.js';

export function input__setInputResize(input) {
  let area = input.querySelector('.input__area');
  area.addEventListener('input', function() {
    let comparator = this.nextElementSibling;
    comparator.innerHTML = this.value;
    area.style.height = comparator.offsetHeight+'px';
    comparator.style.width = area.offsetWidth + 'px';
  }, false);
}

export function input__createNewInput() {
  let innerHTML = `
      <textarea class="input__area input__element" disabled></textarea>
      <p class="input__comparator input__element"></p>        
  `;
  let newInput = document.createElement('div');
  newInput.classList.value = "tasks__input input";
  newInput.innerHTML = innerHTML;
  return newInput;
}

export function input__addNewInput(tasks, issue) {
  let button = tasks.querySelector('.tasks__button');
  let newInput = input__createNewInput();
  button.before(newInput);
  input__setInputResize(newInput);
  if (issue && issue.name) {
    let area = newInput.querySelector('.input__area');
    area.value = issue.name;   
  }
  if (issue && issue.id) {
    newInput.setAttribute('id', issue.id);
  }
  if (tasks.id === data[0].title) {
    newInput.querySelector('.input__area').removeAttribute('disabled');
    newInput.querySelector('.input__area').addEventListener('blur', input__modifyIssue); 
  } 
  return newInput;
}

export function input__modifyIssue(event) {
  let issueId = event.target.closest('.input').id;
  let currentAreaValue = event.target.value.trim();
  let currentIssueName = data__getIssueName(data, issueId);
  if (currentAreaValue === '') {
    event.target.closest('.input').remove();
    data__removeIssue(data, issueId);
  }
  if (currentAreaValue !== currentIssueName) {
    data__modifyIssue(data, issueId, currentAreaValue);
    tasks__setButtonsAvailability();
    input__refreshCounters(data);
  }  
}

export function input__addDropdown(tasks) {
  let dropdown = document.createElement('ul');
  dropdown.setAttribute('tabindex', 1);
  dropdown.classList.add('input__dropdown');
  let issues = data__getIssuesToAdd(data, tasks.id);
  for (let issue of issues) {
    let dropdownItem = document.createElement('li');
    dropdownItem.classList.add('input__dropdownItem');
    dropdownItem.innerText = issue.name;
    dropdown.append(dropdownItem);    
  }
  tasks.querySelector('.tasks__input:last-of-type').append(dropdown);
}

export function input__removeDropdown() {
  let dropdown = document.querySelector('.input__dropdown');
  let tasks = dropdown.closest('.tasks');
  dropdown.remove();
  return tasks;
}

export function input__disableInputs(data) {
  let inputAreas = document.querySelectorAll('.input__area');
  for (let area of inputAreas) {
    if (area.closest('.tasks').id === data[0].title) {
      area.removeAttribute('disabled');
    }
    else {
      area.setAttribute('disabled', true);
    }
  }
}

export function input__refreshCounters(data) {
  let inputs = document.querySelectorAll('.input');
  let actives = 0;
  let finished = 0;
  for (let input of inputs) {
    if (input.closest('.tasks').id === data[0].title) {
      actives++;
    }
    if (input.closest('.tasks').id === data[data.length - 1].title) {
      finished++;
    }
  }
  document.getElementById("activeTasks").innerText = actives;
  document.getElementById("finishedTasks").innerText = finished;
}