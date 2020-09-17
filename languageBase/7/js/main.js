let option = {
    test: 201,
    tes: 2
};

console.log(option.test);
option.test = 20;
option.colors = {
    border: "black",
    bg: "red"
};
delete option.test;
//console.log(option);

for (let key in option){
    console.log('Свойство ' + key + ' Значение' + option[key]);
}
//console.log(Object.keys(option).length);

let arr = ["test", 1, 2, 3];

arr.pop();
arr.push("5");
arr.shift();
arr.unshift("23");

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function (item, i, array) {
    console.log(i + ' : ' + item + "(массив: " + array + ")");
});
//console.log(arr);

let mass = [1, 3, 4, 5, 6];

for (let key of mass){
    //console.log(key);
}

let ans = prompt("", ""),
    arr1 = [];

arr1 = ans.split(',');
//console.log(arr1);

