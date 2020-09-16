let a = true;
if (a){
    console.log("True")
}else{
    console.log("False")
}

(a) ? console.log("True") : console.log("False")

switch (a) {
    case a == true:
        console.log("True");
        break;
    case a == false:
        console.log("False");
        break;
    case a == "Null":
        console.log("Null");
        break;
    case a == "":
        console.log("");
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
}

let x = 30;
while (x != 25){
    x--;
    //console.log(x);
}

do {
    console.log(x);
    x--;
}while (x != 23)

for (x; x > 10; x--){
    console.log(x);
}