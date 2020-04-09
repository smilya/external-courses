'use strict'

function setIssuesMoving() {
  document.body.addEventListener('click', (event) => { 
    let dropdown = document.querySelector('.input__dropdown');
    if (!dropdown) return;
    if (event.target.classList.contains('input__dropdownItem')) {
      let name = event.target.innerText;
      let tasksTitle = event.target.closest('.tasks').querySelector('.tasks__title').innerText.toLowerCase();
      let input = event.target.closest('.input');
      input.querySelector('.input__area').value = name;
      input.querySelector('.input__area').dispatchEvent(new Event('input'));
      input__removeDropdown();
      let issueId = data__getIssueId(data, name);
      input.setAttribute('id', issueId);
      let inputToRemove = document.getElementById(issueId);
      inputToRemove.remove();
      let movedIssue = data__removeIssue(data, issueId);
      data__insertIssue(data, tasksTitle, movedIssue);
      tasks__setButtonsAvailability();
    }
    else {
      let tasks = input__removeDropdown();
      tasks.querySelector('.input:last-of-type').remove();
    }
  });

  document.body.addEventListener('click', (event)=> {
    if(!event.target.classList.contains('tasks__button') || event.target.classList.contains('tasks__button--disabled')) {
      return;
    }
    else if (event.target.closest('.tasks[id="backlog"]')) {
      let backlogTasks = document.getElementById('backlog');
      let newInput = input__addNewInput(backlogTasks);
      input__setInputResize(newInput);    
      newInput.querySelector('.input__area').focus();
      let newIssueId = data__addNewIssue(data, 'backlog');
      newInput.setAttribute('id', newIssueId);
      newInput.querySelector('.input__area').addEventListener('blur', input__modifyIssue);
    }
    else { 
      let tasks = event.target.closest('.tasks');
      let newInput = input__addNewInput(tasks);
      newInput.querySelector('.input__area').value = 'Choose from the list:';
      input__addDropdown(tasks);
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && event.target.classList.contains('input__area')) {
      event.target.blur();
    }
  })
}