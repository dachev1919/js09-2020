<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
<div class="app">
    <div class="logo">
        <span>money</span>
        keeper
    </div>
    <div class="title">
        Расчет дневного бюджета
    </div>
    <div class="main">
        <div class="data">
            <div class="choose-expenses">Введите обязательные расходы</div>
            <input type="text" class="expenses-item" id="expenses_1" placeholder="Наименование">
            <input type="text" class="expenses-item" id="expenses_2" placeholder="Цена">
            <input type="text" class="expenses-item" id="expenses_3" placeholder="Наименование">
            <input type="text" class="expenses-item" id="expenses_4" placeholder="Цена">
            <button class="expenses-item-btn">Утвердить</button>

            <div class="optional_expenses">Введите необязательные расходы</div>
            <input type="text" class="optional_expenses-item" id="optional_expenses_1">
            <input type="text" class="optional_expenses-item" id="optional_expenses_2">
            <input type="text" class="optional_expenses-item" id="optional_expenses_3">
            <button class="optionalexpenses-btn" style="margin-top: 10px">Утвердить</button>

            <div class="count-budget">Расчет дневного бюджета</div>
            <button class="count-budget-btn">Рассчитать</button>

            <div class="choose-income-label">Введите статьи возможного дохода через запятую</div>
            <input class="choose-income" type="text" id="income">

            <div class="checksavings">Есть ли накопления:
                <input id="savings" type="checkbox" />
            </div>
            <label for="sum">Сумма</label>
            <input class="choose-sum" id="sum" type="text">
            <label for="percent">Процент</label>
            <input class="choose-percent" id="percent" type="text">

            <div class="open">
                <button class="start" id="start">Начать расчет</button>
            </div>
        </div>
        <div class="result">
            <div class="result-table">
                <div class="budget">Доход: </div>
                <div class="budget-value"></div>

                <div class="daybudget">Бюджет на 1 день: </div>
                <div class="daybudget-value"></div>

                <div class="level">Уровень дохода: </div>
                <div class="level-value"></div>

                <div class="expenses">Обязательные расходы: </div>
                <div class="expenses-value"></div>

                <div class="optionalexpenses">Возможные траты: </div>
                <div class="optionalexpenses-value"></div>

                <div class="income">Дополнительный доход: </div>
                <div class="income-value"></div>

                <div class="monthsavings">Накопления за 1 месяц:</div>
                <div class="monthsavings-value"></div>

                <div class="yearsavings">Накопления за 1 год:</div>
                <div class="yearsavings-value"></div>
            </div>
            <div class="time-data">
                <div class="year">
                    Год:
                    <input class="year-value" type="text" readonly>
                </div>
                <div class="month">
                    Месяц:
                    <input class="month-value" type="text" readonly>
                </div>
                <div class="day">
                    День:
                    <input class="day-value" type="text" readonly>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="js/main.js"></script>
</body>
</html>