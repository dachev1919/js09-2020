'use strict';

let num = 20;

function showFirstMessage(text) {
    alert(text);
    num = 10;
}

// function calc(a, b){
//     return (a + b);
// }

let calc = (a,b) => a+b;
console.log(calc(2, 4))

let x = "text";
showFirstMessage(x);

console.log(num);

showFirstMessage(calc(2, 3));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();

let testF = function () {
    return 0;
}

let str = "test";
console.log(str.length);
alert(str.toLowerCase());
alert(str.toUpperCase());

let twelve = "12.1px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));