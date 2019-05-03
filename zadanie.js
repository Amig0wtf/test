'use strict';

let money = ("Ваш бюджет на месяц?");
let time = ("YYYY-MM-DD");

let appData = {
    budget: money, // бюджет- кол-во денег
    timeData: time, 
    income = [], // перечисляем, доходы
    savings = false // мы не экономим// время, кол-во дней \
        expenses:{ // расходы 
            firstNecessity: 'firstQuestion' , // “ответ на первый вопрос” , первойстепенные
            Habits: 'secondQuestion' ,  // “ответ на второй вопрос”  , второстепенные 
            optionalExpenses: { },  // Дополнительнные расходы
    },
};

alert (appData.budget / 30);