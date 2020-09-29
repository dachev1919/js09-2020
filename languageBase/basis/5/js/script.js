'use strict';
let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData;

appData = {
    budget: money,
    expenses: {},
    optionalExpenes: {},
    income: [],
    timeData: time,
    saving: true,
    chooseExpenses: function () {
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100){
            console.log("У Вас минимальный уровень достатка");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000){
            console.log("У Вас средний уровень достатка");
        }else if (appData.moneyPerDay > 1000){
            console.log("У Вас высокий уровень достатка");
        }else{
            console.log("Error");
        }
    },
    checkSavings: function () {
        if (appData.saving){
            let save = +prompt("Какая сумма накопления?"),
                percent = +prompt("Под какой процент?")/100;
            appData.monthIncome = (save*percent/12).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    choseOptExpenses: function () {
        for (let i = 1; i < 3; i++){
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenes[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход?");
        appData.income = items.split(', ');
    }
};