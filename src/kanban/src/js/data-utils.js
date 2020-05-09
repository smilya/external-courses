'use strict'

export {default as data} from './data-mock.js'

export function getLastIssueNumber(data) {
  let issueNumbers = [];
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      issueNumbers.push(parseInt(issue.id.match(/\d+/))); // eslint-disable-line radix
    }
  }  
  return Math.max(...issueNumbers);
}

export function getIssueName(data, issueId) {
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      if (issue.id === issueId) {
        return issue.name;
      }
    }
  }
  return undefined; // для того, чтобы линт не ругался
}

export function getIssueId(data, issueName) {
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      if (issue.name === issueName) {
        return issue.id;
      }
    }
  }
  return undefined; // для того, чтобы линт не ругался
}

export function addNewIssue(data, title) {
  let newIssueNumber = getLastIssueNumber(data) + 1;
  let issueId = 'issue'+newIssueNumber;
  let newIssue = {id: issueId};
  for (let tasksData of data) {
    if (tasksData.title === title) {
      tasksData.issues.push(newIssue);
    }
  }
  return issueId;
}

export function removeIssue(data, issueId) {
  let removedIssue;
  for (let tasksData of data) {
    for (let i = 0; i < tasksData.issues.length; i++) {
      if (tasksData.issues[i].id === issueId) {
        removedIssue = tasksData.issues[i];
        tasksData.issues.splice(i, 1);
      }
    }
  }
  return removedIssue;
}

export function insertIssue(data, title, issue) {
    for (let tasksData of data) {
      if(tasksData.title === title) {
        tasksData.issues.push(issue);
      }
    }
}

export function modifyIssue(data, issueId, name) {
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      if (issue.id === issueId) {
        issue.name = name;
      }
    }
  }
}

export function getIssuesToAdd(data, tasksTitle) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === tasksTitle) {
      return data[i - 1].issues;
    }
  }
  return undefined;
}

export function addNewTasks(data, title) {
  let newTasks = {
    title: title,
    issues: []
  };
  data.unshift(newTasks);
  return newTasks;
}

export function removeTasks(data, tasksTitle) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === tasksTitle) {
      data.splice(i, 1);
    }
  }
}