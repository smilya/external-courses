'use strict'

//onload:
layDataOut(data);
setInitialTasksContainersHeight();
//тут вместо таймаута надо применить промис - узнать как это сделать
setTimeout(() => {
  onload__simulateInputEvents();
}, 5);

// установить дисэйбл кнопок addCard

function layTasksOut(tasksData) {
  let tasks = addNewTasks(tasksData);
  for (let issue of tasksData.issues) {
    addNewInput(tasks, issue);
  }
  let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
  tasks.setAttribute('id', tasksTitle);
  return tasks;
}

function layDataOut(data) {
  for (let tasksData of data) {
    layTasksOut(tasksData);
  }
}

function setInitialTasksContainersHeight() {
  let tasksFields = document.querySelectorAll('.tasks');
  for (let tasks of tasksFields) {
    if (tasks.clientHeight > (document.querySelector('main').clientHeight - 42)) {
      setTasksContainerHeight(tasks);
    }
  }
}

function onload__simulateInputEvents() {
  let inputEvent = new Event('input');
  let areas = document.querySelectorAll('.input__area');
  for (let area of areas) {
    area.dispatchEvent(inputEvent);  
  }  
}