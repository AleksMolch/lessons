let money , time;

function start() {
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

while (isNaN(money) || money == "" || money == null ) {
    money = +prompt("Ваш бюджет на месяц?");
}
}

start();

let appData = {
data: time,
budget: money,
expenses: {},
optionalExpenses: {},
income: [],
savings: true, 
chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
          
            if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null 
            && a != "" && b != "" && a.length < 50) {
    
                console.log ("done");
        
                appData.expenses[a] = b;
            } else {                            
                console.log("error");
                i--;
            }
    }
},
detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget/30).toFixed();
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
},
detectLevel: function () {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
        
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
        
        } else if (appData.moneyPerDay > 2000) {
        console.log(" Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
},
chooseOptExpenses: function () {
    for (i=0; i<=2; i++ ) {
        let optExp = +prompt("Статья необязательных расходов N"+(i+1)+" ?");
        if (typeof(optExp) !=null && optExp !="") {appData.optionalExpenses[i] = optExp;
        } else {i--;}
        
    }
},
checkSavings: function () {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
},
chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

    if (typeof(items) != "string" || items == "" || typeof(items) == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }

    appData.income.forEach (function (item, i) {
        alert("Способы доп. заработка: " + (i+1) + " - " + item);
    });
}
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.chooseOptExpenses();
appData.checkSavings();

for ( let key in appData) {
    console.log("Программа включает в себя" + key + ": " + appData[key]);
}