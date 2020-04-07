document.querySelector('.main').addEventListener('click', (event)=> {
  if(!event.target.classList.contains('tasks__button')) return;
  else if (event.target.closest('.tasks[id="backlog"]')) {
    // пишем добавление поля в backlog
    let backlogTasks = document.getElementById('backlog');
    let newInput = addNewInput(backlogTasks);
    setInputResize(newInput);    
    setTasksVerticalResize(backlogTasks);
    setTasksContainerHeight(backlogTasks);
    newInput.querySelector('.input__area').focus();
    let newIssueId = data__addNewIssue(data, 'backlog');
    newInput.setAttribute('id', newIssueId);
    newInput.querySelector('.input__area').addEventListener('blur', input__modifyIssue);
    // установить дисэйбл кнопок addCard
  }
  else {
    console.log(event.target.closest('.tasks').querySelector('.tasks__title').innerText)
  }
})

