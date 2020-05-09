'use strict'

export function checkIfMainEmpty() {
  let main = document.querySelector('.main');
  let banner = document.querySelector('.tasks__onEmptyBanner');
  if (!main.childElementCount) {
    let newBanner = document.createElement('p');
    newBanner.innerHTML = "There are no tasklists available.<br>Use 'Create new list' button to add one.";
    newBanner.classList.add('tasks__onEmptyBanner');
    main.append(newBanner);
  }
  for (let child of main.children) {
    if (child.firstElementChild.classList.contains('tasks') && banner) {
      banner.remove();
      return;
    }
  }  
}