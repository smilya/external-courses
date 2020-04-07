'use strict'

const dataMock = [
  {
    title: 'backlog',
    issues: [
      {
        id: 'issue1',
        name: 'Sprint bugfix'
      },
      {
        id: 'issue3',
        name: 'Hard bugfix'
      },
    ],
  },
  {
    title: 'ready',
    issues: [
      {
        id: 'issue2',
        name: 'Foo'
      },
      
    ],
  },
  {
    title: 'in progress',
    issues: [

    ],
  },
  {
    title: 'finished',
    issues: [
 
    ],
  },
];


let data = dataMock;

function data__getLastIssueNumber(data) {
  let issueNumbers = [];
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      issueNumbers.push(parseInt(issue.id.match(/\d+/))); // eslint-disable-line radix
    }
  }  
  return Math.max(...issueNumbers);
}

function data__getIssueName(data, issueId) {
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      if (issue.id === issueId) {
        return issue.name;
      }
    }
  }
  return undefined; // для того, чтобы линт не ругался
}

function data__addNewIssue(data, title) {
  let newIssueNumber = data__getLastIssueNumber(data) + 1;
  let issueId = 'issue'+newIssueNumber;
  let newIssue = {id: issueId};
  for (let tasksData of data) {
    if (tasksData.title === title) {
      tasksData.issues.push(newIssue);
    }
  }
  return issueId;
}

function data__removeIssue(data, issueId) {
  for (let tasksData of data) {
    for (let i = 0; i < tasksData.issues.length; i++) {
      if (tasksData.issues[i].id === issueId) {
        tasksData.issues.splice(i, 1);
      }
    }
  }
}

function data__modifyIssue(data, issueId, name) {
  for (let tasksData of data) {
    for (let issue of tasksData.issues) {
      if (issue.id === issueId) {
        issue.name = name;
      }
    }
  }
}