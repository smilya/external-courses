'use strict'

import {data, getIssueName, modifyIssue, removeIssue, getIssuesToAdd} from './data-utils.js';
import {setButtonsAvailability} from './tasks.js';

export function setInputResize(input) {
  let area = input.querySelector('.input_utils__area');
  area.addEventListener('input', function() {
    let comparator = this.nextElementSibling;
    comparator.innerHTML = this.value;
    area.style.height = comparator.offsetHeight+'px';
    comparator.style.width = area.offsetWidth + 'px';
  }, false);
}

export function createNewInput() {
  let innerHTML = `
      <textarea class="input_utils__area input_utils__element" disabled></textarea>
      <p class="input_utils__comparator input_utils__element"></p>        
  `;
  let newInput = document.createElement('div');
  newInput.classList.value = "tasks__input input";
  newInput.innerHTML = innerHTML;
  return newInput;
}

export function addNewInput(tasks, issue) {
  let button = tasks.querySelector('.tasks__button');
  let newInput = createNewInput();
  button.before(newInput);
  setInputResize(newInput);
  if (issue && issue.name) {
    let area = newInput.querySelector('.input_utils__area');
    area.value = issue.name;   
  }
  if (issue && issue.id) {
    newInput.setAttribute('id', issue.id);
  }
  if (tasks.id === data[0].title) {
    newInput.querySelector('.input_utils__area').removeAttribute('disabled');
    newInput.querySelector('.input_utils__area').addEventListener('blur', modifyInputIssue); 
  } 
  return newInput;
}

export function modifyInputIssue(event) {
  let issueId = event.target.closest('.input').id;
  let currentAreaValue = event.target.value.trim();
  let currentIssueName = getIssueName(data, issueId);
  if (currentAreaValue === '') {
    event.target.closest('.input').remove();
    removeIssue(data, issueId);
  }
  if (currentAreaValue !== currentIssueName) {
    modifyIssue(data, issueId, currentAreaValue);
    setButtonsAvailability();
    refreshCounters(data);
  }  
}

export function addDropdown(tasks) {
  let dropdown = document.createElement('ul');
  dropdown.setAttribute('tabindex', 1);
  dropdown.classList.add('input_utils__dropdown');
  let issues = getIssuesToAdd(data, tasks.id);
  for (let issue of issues) {
    let dropdownItem = document.createElement('li');
    dropdownItem.classList.add('input_utils__dropdownItem');
    dropdownItem.innerText = issue.name;
    dropdown.append(dropdownItem);    
  }
  tasks.querySelector('.tasks__input:last-of-type').append(dropdown);
}

export function removeDropdown() {
  let dropdown = document.querySelector('.input_utils__dropdown');
  let tasks = dropdown.closest('.tasks');
  dropdown.remove();
  return tasks;
}

export function disableInputs(data) {
  let inputAreas = document.querySelectorAll('.input_utils__area');
  for (let area of inputAreas) {
    if (area.closest('.tasks').id === data[0].title) {
      area.removeAttribute('disabled');
    }
    else {
      area.setAttribute('disabled', true);
    }
  }
}

export function refreshCounters(data) {
  let inputs = document.querySelectorAll('.input');
  let activeTasks = 0;
  let finished = 0;
  for (let input of inputs) {
    if (input.closest('.tasks').id === data[0].title) {
      activeTasks++;
    }
    if (input.closest('.tasks').id === data[data.length - 1].title) {
      finished++;
    }
  }
  document.getElementById("activeTasks").innerText = activeTasks;
  document.getElementById("finishedTasks").innerText = finished;
}