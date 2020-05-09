'use strict'

import {data, data_utils__addNewIssue, data_utils__getIssueId, data_utils__removeIssue, data_utils__insertIssue} from './data-utils.js';
import {input_utils__addNewInput, input_utils__setInputResize, input_utils__modifyIssue, input_utils__addDropdown, input_utils__removeDropdown, input_utils__refreshCounters} from './input-utils.js';
import {tasks__setButtonsAvailability} from './tasks.js';

export function issues__setIssuesMoving() {
  document.body.addEventListener('click', (event) => { 
    let dropdown = document.querySelector('.input_utils__dropdown');
    if (!dropdown) return;
    if (event.target.classList.contains('input_utils__dropdownItem')) {
      let name = event.target.innerText;
      let tasksTitle = event.target.closest('.tasks').querySelector('.tasks__title').innerText.toLowerCase();
      let input = event.target.closest('.input');
      input.querySelector('.input_utils__area').value = name;
      input.querySelector('.input_utils__area').dispatchEvent(new Event('input'));
      input_utils__removeDropdown();
      let issueId = data_utils__getIssueId(data, name);
      input.setAttribute('id', issueId);
      let inputToRemove = document.getElementById(issueId);
      inputToRemove.remove();
      let movedIssue = data_utils__removeIssue(data, issueId);
      data_utils__insertIssue(data, tasksTitle, movedIssue);
      tasks__setButtonsAvailability();
      input_utils__refreshCounters(data);
    }
    else {
      let tasks = input_utils__removeDropdown();
      tasks.querySelector('.input:last-of-type').remove();
    }
  });

  document.body.addEventListener('click', (event)=> {
    if(!event.target.classList.contains('tasks__button') || event.target.classList.contains('tasks__button--disabled')) {
      return;
    }
    else if (event.target.closest('.tasks').id === data[0].title) {
      let tasks = event.target.closest('.tasks');
      let newInput = input_utils__addNewInput(tasks);
      input_utils__setInputResize(newInput);    
      newInput.querySelector('.input_utils__area').focus();
      let newIssueId = data_utils__addNewIssue(data, tasks.id);
      newInput.setAttribute('id', newIssueId);
      newInput.querySelector('.input_utils__area').addEventListener('blur', input_utils__modifyIssue);
    }
    else { 
      let tasks = event.target.closest('.tasks');
      let newInput = input_utils__addNewInput(tasks);
      newInput.querySelector('.input_utils__area').value = 'Choose from the list:';
      input_utils__addDropdown(tasks);
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && event.target.classList.contains('input_utils__area')) {
      event.target.blur();
    }
  })
}