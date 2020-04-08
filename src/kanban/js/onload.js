'use strict'

account__setMenuOpening();
setIssuesMoving();
layDataOut(data);
tasks__setButtonsAvailability();

function layTasksOut(tasksData) { 
  let tasks = tasks__addNewTasks(tasksData);
  for (let issue of tasksData.issues) {
    input__addNewInput(tasks, issue);
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