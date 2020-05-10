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
savings: true   
};

// let i=0;

function ChooseExpenses() {
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
}

ChooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function chooseOptExpenses() {
    for (i=0; i<=2; i++ ) {
        let optExp = +prompt("Статья необязательных расходов N"+(i+1)+" ?");
        if (typeof(optExp) !=null && optExp !="") {appData.optionalExpenses[i] = optExp;
        } else {i--;}
        
    }
}

chooseOptExpenses();

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
    
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
    
    } else if (appData.moneyPerDay > 2000) {
    console.log(" Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*persent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

