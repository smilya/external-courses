'use strict'

// Использовать при добавлении и удалении поля в tasks
function setTasksContainerHeight(tasks) {  
  let container = tasks.querySelector('.tasks__container');
  if (!container) return;
  container.style.height = '';
  let tasksHeight = tasks.clientHeight;
  container.style.height = (tasksHeight - 55) + 'px';
}

// Использовать при добавлении нового tasks
function setTasksVerticalResize(tasks) {
  window.addEventListener('resize', () => {
    setTasksContainerHeight(tasks);
  })
}

function createNewTasks() {
  let innerHtml = `
    <div class="tasks__header">
      <span class="tasks__title"></span>
      <div class="tasks__menu"></div>
    </div>
    <div class="tasks__container">
      <button class="tasks__button"><span class="tasks__symbol">+</span> Add card</button> 
    </div>`;

  let newTasks = document.createElement('div');
  newTasks.classList.value = 'tasks main__tasks';
  newTasks.innerHTML = innerHtml;
  return newTasks;
}

function addNewTasks(tasksObj) {
  let newTasks = createNewTasks();
  document.querySelector('.main').append(newTasks);
  setTasksVerticalResize(newTasks);
  newTasks.querySelector('.tasks__title').innerText = capitalizeWords(tasksObj.title);
  return newTasks;
}

function capitalizeWords(str) {
  let result = [];
  let words = str.split(' ');
  for (let word of words) {
    let letters = word.split('');
    letters[0] = letters[0].toUpperCase();    
    result.push(letters.join(''));
  }
  return result.join(' ');
}