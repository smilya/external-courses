'use strict'

let isAccountOpen = false;
let account = document.querySelector('.account');
let dropdown = document.querySelector('.account__dropdown');
let menu = document.createElement('ul');
menu.classList.add("account__menu");
menu.innerHTML = `
  <li class="account__menuItem">Account</li>
  <li class="account__menuItem">Tasks</li>
  <li class="account__menuItem">Settings</li>
  <li class="account__menuItem">Log out</li>
`;

document.body.addEventListener('click', (event) => {
  if (isAccountOpen) {
    isAccountOpen = false;
    dropdown.classList.remove("account__dropdown--open");
    menu.remove();
  }
  else if (event.target.closest('.account')) {
    isAccountOpen = true;
    dropdown.classList.add("account__dropdown--open");
    account.append(menu);
  }
})