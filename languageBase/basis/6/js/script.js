'use strict';

function first() {
    // Что-то делает
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function done() {
    console.log("Это передаётся в виде параметра");
}

function testFun(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

testFun("JS", function () {
    console.log("Это передаётся в виде параметра");
})