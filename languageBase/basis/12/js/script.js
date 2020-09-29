'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add("menu-item");
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

adv.remove();
let text = prompt("Ваше отношение к Apple технике?");
promptForApple.textContent = text;

