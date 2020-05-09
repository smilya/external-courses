'use strict'

import {
	addTasks,
	setCreateNewTasks,
	setTasksMenuOpen,
	setButtonsAvailability
} from './tasks.js';
import {
	addNewInput,
	refreshCounters
} from './input-utils.js';
import {setMenuOpen} from './account.js';
import {setIssuesMoving} from './issues.js';
import {data} from './data-utils.js';
import {checkIfMainEmpty} from './main.js';

setMenuOpen();
setIssuesMoving();
onload__layDataOut(data);
checkIfMainEmpty();
setButtonsAvailability();
refreshCounters(data);
setCreateNewTasks();
setTasksMenuOpen();

export function onload__layDataOut(data) {
  for (let tasksData of data) {
    let tasks = addTasks(tasksData);
    let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
    tasks.setAttribute('id', tasksTitle);
    for (let issue of tasksData.issues) {
      addNewInput(tasks, issue);
    }  
  }
}