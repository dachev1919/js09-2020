'use strict';

// let box = document.getElementById("box"),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     firstHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('wrapper');
// btn[0].style.borderRadius = '100%';
// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';
// for (let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'black';
// }
// heart.forEach(function (item) {
//     item.style.backgroundColor = 'purple';
// })
// let div = document.createElement('div'),
//     text = document.createTextNode('₴₴₴');
// div.classList.add('black');
// div.innerHTML = 'Hello World!';
// div.classList.add('heart');
// wrapper.appendChild(div);
// document.body.insertBefore(div, circle[0]);
// console.log(div);
// document.body.replaceChild(btn[0], heart[1]);
// document.body.appendChild(div);
let box = document.getElementById('box'),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'purple';
btn[1].style.borderRadius = '100%';
circle[0].style.opacity = '80%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < circle.length; i++){
//     let arr = ['red', 'yellow', 'green'];
//     circle[i].style.backgroundColor = arr[i];
// }

heart.forEach(function (item, i) {
    let arr = ['purple', 'yellow', 'green'];
    item.style.backgroundColor = arr[i];
});

let div = document.createElement('div'),
    text = document.createTextNode('With love');

div.classList.add('black');
div.innerHTML = 'Hellk';
// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);

// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[0]);
document.body.replaceChild(btn[2], circle[1])

console.log(div);
