'use strict';
let appData;
let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

appData = {
    budget: money,
    expenses: {},
    optionalExpenes: {},
    income: [],
    timeData: time,
    saving: false
};

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a) != null ) && (typeof(b) != null )
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }else{
        i--;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("У Вас минимальный уровень достатка");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
    console.log("У Вас средний уровень достатка");
}else if (appData.moneyPerDay > 1000){
    console.log("У Вас высокий уровень достатка");
}else{
    console.log("Error");
}