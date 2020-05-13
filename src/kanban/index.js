import './src/style.css';
import './src/js/onload.js';

//Images
import account_img from './src/images/account.svg';
document.querySelector('.account__icon').src = account_img;
import newList_img from './src/images/header__newList.svg';
document.querySelector('.newListButton__img').src = newList_img;
import menu_img from './src/images/menu__burger.svg';
document.querySelector('.menu__img').src = menu_img;
import favicon_ico from './src/images/favicon.ico';
document.querySelector('link[rel="icon"]').href = favicon_ico;