// let timeId = setTimeout(sayHello, 3000);
// clearTimeout(timeId);
// let timeId = setInterval(sayHello, 3000);
// clearTimeout(timeId);
//
// function sayHello() {
//     console.log("Hello");
// }

// let timerId = setTimeout(function log() {
//     console.log("test");
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.animate'),
    elemL = document.querySelector('.border_left'),
    elemR = document.querySelector('.border_right'),
    elemBL = document.querySelector('.border_bottomL'),
    elemBR = document.querySelector('.border_bottomR');

function myAnimation() {
    let pos = 0;
    let timer = setInterval(frame, 10);
    function frame() {
        if (pos == 300){
            clearInterval(timer);
        }else {
            pos++;
            elemL.style.top = pos + 'px';
            elemL.style.left = pos + 'px';
            elemR.style.top = -100 + pos + 'px';
            elemR.style.left = 300 - pos + 'px';
            elemBL.style.top = 100 - pos + 'px';
            elemBL.style.left = pos + 'px';
            elemBR.style.top = -pos + 'px';
            elemBR.style.left = 300 - pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName("button");

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches("button.first")){
        console.log('Hello!');
    }
})
