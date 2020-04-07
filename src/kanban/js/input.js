'use strict'

function setInputResize(input) {
  let area = input.querySelector('.input__area');
  area.addEventListener('input', function() {
    let comparator = this.nextElementSibling;
    comparator.innerHTML = this.value;
    area.style.height = comparator.offsetHeight+'px';
    setTasksContainerHeight(input.closest('.tasks'));
  }, false);
}

function createNewInput() {
  let innerHTML = `
      <textarea class="input__area input__element" disabled></textarea>
      <p class="input__comparator input__element"></p>        
  `;
  let newInput = document.createElement('div');
  newInput.classList.value = "tasks__input input";
  newInput.innerHTML = innerHTML;
  return newInput;
}

function addNewInput(tasks, issue) {
  let button = tasks.querySelector('.tasks__button');
  let newInput = createNewInput();
  button.before(newInput);
  setInputResize(newInput);
  // let inputEvent = new Event('input'); видимо именно это устанввливало лишнуюю полосу прокрутки
  if (issue && issue.name) {
    let area = newInput.querySelector('.input__area');
    area.value = issue.name;   
    // area.dispatchEvent(inputEvent); видимо именно это устанввливало лишнуюю полосу прокрутки
  }
  if (issue && issue.id) {
    newInput.setAttribute('id', issue.id);
  }
  let tasksTitle = tasks.querySelector('.tasks__title').innerText;
  if (tasksTitle === 'Backlog') {
    newInput.querySelector('.input__area').removeAttribute('disabled');
    //тут добавить обработчик onblur для инпутов из backlog
    newInput.querySelector('.input__area').addEventListener('blur', input__modifyIssue);
  } 
  return newInput;
}

function deleteInput(input) {
  let tasks = input.closest('.tasks');
  input.remove();
  setTasksContainerHeight(tasks);
}

function input__modifyIssue(event) {
  let issueId = event.target.closest('.input').id;
  let currentAreaValue = event.target.value.trim();
  let currentIssueName = data__getIssueName(data, issueId);
  if (currentAreaValue === '') {
    deleteInput(event.target.closest('.input'));
    data__removeIssue(data, issueId);
  }
  if (currentAreaValue !== currentIssueName) {
    data__modifyIssue(data, issueId, currentAreaValue);
  }
}
