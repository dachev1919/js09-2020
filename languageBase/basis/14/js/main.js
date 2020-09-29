// touchstart клик по экрану
// touchmove свайпать
// touchend перестает касаться сенсора
// touchenter палец заходит на элемент
// touchleave палец покинул пределы элемента
// touchcansel палец не в браузере

window.addEventListener('DOMContentLoaded', function () {
    // let box = document.querySelector('.box');
    // box.textContent = 'prikol';
    // box.addEventListener('touchstart', function (e) {
    //     e.preventDefault();
    //     console.log('red box: touch start');
    //     console.log(e.touches);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        //console.log("Red box: " + e.touches[0].pageX);
    });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        //console.log('red box: touch move');
    });

    box.addEventListener('touchend', function (e) {
        e.preventDefault();
        //console.log('red box: touch end');
    });

    // new RegExp('pattern', 'flags'); //first variant
    // /pattern/ //second variant
    // let ans = prompt("Enter your name: ");
    // let reg = /n/g;
    // console.log(ans.search(reg)); // просто индекс элемента, который нашли
    // console.log(ans.match(reg)); // массив уже из совпадений, с различной информацией
    // console.log(reg.test(ans));

    // \d - поиск всех цифр в строке \D -- поиск не числа
    // \w - поиск всех букв в строе \w - поиск не букв
    // \s - search spaces

    // let ans = prompt("Введите число: ");
    // let reg = /\d/g;
    //
    // alert(ans.match(reg));
    // flag in reg
    // i - флаг регистра, ищем что-то независимо от регистра
    // g - ищем глобально, не только первое найденное учитывается
    // m - флаг многострочности

    // let pass = prompt("Enter your password");
    // alert(pass.replace(/./g, "*")); // /./ регулярка ищет любые символы строки, g - флаг глобальности, меняет все символы на *
    // alert('12-23-41'.replace(/-/g, "|"));
    let str = 'my name is 0le/g';
    // alert(str.match(/\d\w\w\w/i));
    alert(str.match(/\//i)); // поиск слеша \ - экранирует
    
});

