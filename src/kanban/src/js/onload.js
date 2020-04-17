'use strict'

import {
	tasks__addTasks,
	tasks__setCreateNewTasks,
	tasks__setMenuOpening,
	tasks__setButtonsAvailability
} from './tasks.js';
import {
	input__addNewInput,
	input__refreshCounters
} from './input.js';
import {account__setMenuOpening} from './account.js';
import {issues__setIssuesMoving} from './issues.js';
import {data} from './data.js';
import {main__checkAndFlagIfEmpty} from './main.js';

account__setMenuOpening();
issues__setIssuesMoving();
onload__layDataOut(data);
main__checkAndFlagIfEmpty();
tasks__setButtonsAvailability();
input__refreshCounters(data);
tasks__setCreateNewTasks();
tasks__setMenuOpening();

export function onload__layDataOut(data) {
  for (let tasksData of data) {
    let tasks = tasks__addTasks(tasksData);
    let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
    tasks.setAttribute('id', tasksTitle);
    for (let issue of tasksData.issues) {
      input__addNewInput(tasks, issue);
    }  
  }
}