'use strict'

function input__setInputResize(input) {
  let area = input.querySelector('.input__area');
  area.addEventListener('input', function() {
    let comparator = this.nextElementSibling;
    comparator.innerHTML = this.value;
    area.style.height = comparator.offsetHeight+'px';
    comparator.style.width = area.offsetWidth + 'px';
  }, false);
}

function input__createNewInput() {
  let innerHTML = `
      <textarea class="input__area input__element" disabled></textarea>
      <p class="input__comparator input__element"></p>        
  `;
  let newInput = document.createElement('div');
  newInput.classList.value = "tasks__input input";
  newInput.innerHTML = innerHTML;
  return newInput;
}

function input__addNewInput(tasks, issue) {
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
  let tasksTitle = tasks.querySelector('.tasks__title').innerText;
  if (tasksTitle === 'Backlog') {
    newInput.querySelector('.input__area').removeAttribute('disabled');
    newInput.querySelector('.input__area').addEventListener('blur', input__modifyIssue);
  } 
  return newInput;
}

function input__modifyIssue(event) {
  let issueId = event.target.closest('.input').id;
  let currentAreaValue = event.target.value.trim();
  let currentIssueName = data__getIssueName(data, issueId);
  if (currentAreaValue === '') {
    // input__removeInput(event.target.closest('.input'));
    event.target.closest('.input').remove();
    data__removeIssue(data, issueId);
  }
  if (currentAreaValue !== currentIssueName) {
    data__modifyIssue(data, issueId, currentAreaValue);
    tasks__setButtonsAvailability();
  }
}

function input__addDropdown(tasks) {
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

function input__removeDropdown() {
  let dropdown = document.querySelector('.input__dropdown');
  let tasks = dropdown.closest('.tasks');
  dropdown.remove();
  return tasks;
}