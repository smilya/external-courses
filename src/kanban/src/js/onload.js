'use strict'

import {
	tasks__addTasks,
	tasks__setCreateNewTasks,
	tasks__setMenuOpen,
	tasks__setButtonsAvailability
} from './tasks.js';
import {
	input_utils__addNewInput,
	input_utils__refreshCounters
} from './input-utils.js';
import {account__setMenuOpen} from './account.js';
import {issues__setIssuesMoving} from './issues.js';
import {data} from './data-utils.js';
import {main__checkEmpty} from './main.js';

account__setMenuOpen();
issues__setIssuesMoving();
onload__layDataOut(data);
main__checkEmpty();
tasks__setButtonsAvailability();
input_utils__refreshCounters(data);
tasks__setCreateNewTasks();
tasks__setMenuOpen();

export function onload__layDataOut(data) {
  for (let tasksData of data) {
    let tasks = tasks__addTasks(tasksData);
    let tasksTitle = tasks.querySelector('.tasks__title').innerText.toLowerCase();
    tasks.setAttribute('id', tasksTitle);
    for (let issue of tasksData.issues) {
      input_utils__addNewInput(tasks, issue);
    }  
  }
}