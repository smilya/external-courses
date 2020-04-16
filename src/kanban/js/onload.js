'use strict'

account__setMenuOpening();
issues__setIssuesMoving();
onload__layDataOut(data);
main__checkAndFlagIfEmpty();
tasks__setButtonsAvailability();
input__refreshCounters(data)
tasks__setCreateNewTasks();
tasks__setMenuOpening();

function onload__layDataOut(data) {
  for (let tasksData of data) {
    let tasks = tasks__addTasks(tasksData);
    let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
    tasks.setAttribute('id', tasksTitle);
    for (let issue of tasksData.issues) {
      input__addNewInput(tasks, issue);
    }  
  }
}