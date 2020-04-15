'use strict'

account__setMenuOpening();
issues__setIssuesMoving();
onload__layDataOut(data);
main__checkAndFlagIfEmpty();
tasks__setButtonsAvailability();
tasks__setCreateNewTasks();
tasks__setMenuOpening();

/* function layTasksOut(tasksData) { 
  let tasks = tasks__addTasks(tasksData);
  for (let issue of tasksData.issues) {
    input__addNewInput(tasks, issue);
  } 
  let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
  tasks.setAttribute('id', tasksTitle);
  return tasks;
} */

/* function layDataOut(data) {
  for (let tasksData of data) {
    layTasksOut(tasksData);
  }
} */

function onload__layDataOut(data) {
  for (let tasksData of data) {
    let tasks = tasks__addTasks(tasksData);
    for (let issue of tasksData.issues) {
      input__addNewInput(tasks, issue);
    } 
    let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
    tasks.setAttribute('id', tasksTitle);
  }
}