'use strict'

import {data, addNewIssue, getIssueId, removeIssue, insertIssue} from './data-utils.js';
import {addNewInput, setInputResize, modifyInputIssue, addDropdown, removeDropdown, refreshCounters} from './input-utils.js';
import {setButtonsAvailability} from './tasks.js';

export function setIssuesMoving() {
  document.body.addEventListener('click', (event) => { 
    let dropdown = document.querySelector('.input_utils__dropdown');
    if (!dropdown) return;
    if (event.target.classList.contains('input_utils__dropdownItem')) {
      let name = event.target.innerText;
      let tasksTitle = event.target.closest('.tasks').querySelector('.tasks__title').innerText.toLowerCase();
      let input = event.target.closest('.input');
      input.querySelector('.input_utils__area').value = name;
      input.querySelector('.input_utils__area').dispatchEvent(new Event('input'));
      removeDropdown();
      let issueId = getIssueId(data, name);
      input.setAttribute('id', issueId);
      let inputToRemove = document.getElementById(issueId);
      inputToRemove.remove();
      let movedIssue = removeIssue(data, issueId);
      insertIssue(data, tasksTitle, movedIssue);
      setButtonsAvailability();
      refreshCounters(data);
    }
    else {
      let tasks = removeDropdown();
      tasks.querySelector('.input:last-of-type').remove();
    }
  });

  document.body.addEventListener('click', (event)=> {
    if(!event.target.classList.contains('tasks__button') || event.target.classList.contains('tasks__button--disabled')) {
      return;
    }
    else if (event.target.closest('.tasks').id === data[0].title) {
      let tasks = event.target.closest('.tasks');
      let newInput = addNewInput(tasks);
      setInputResize(newInput);    
      newInput.querySelector('.input_utils__area').focus();
      let newIssueId = addNewIssue(data, tasks.id);
      newInput.setAttribute('id', newIssueId);
      newInput.querySelector('.input_utils__area').addEventListener('blur', modifyInputIssue);
    }
    else { 
      let tasks = event.target.closest('.tasks');
      let newInput = addNewInput(tasks);
      newInput.querySelector('.input_utils__area').value = 'Choose from the list:';
      addDropdown(tasks);
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && event.target.classList.contains('input_utils__area')) {
      event.target.blur();
    }
  })
}