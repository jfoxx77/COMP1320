var dayOfWeek = require("./lab-three");
var constants = require("./constants");
var readlineSync = require('readline-sync');

dayOfWeek.makeCalendar();
getDayOfTheWeekForUserDate();

function getDayOfTheWeekForUserDate(){

    console.log("\n\n\n=============================== Welcome =============================== \n");
    console.log("\t\t Please enter the date using YYYY-MM-DD format.\n");
    getUserInput();   
}

function getUserInput(){

    const yearRegex = /^\d{4}$/;
    const monthRegex = /^(0?[1-9]|1[012])$/;

    while(true){
        var year = readlineSync.question("\n\t\t\t\t Please enter year [YYYY] : ", {
            limit: yearRegex, 
            limitMessage: '\nSorry, $<lastInput> is not a valid year.'
        });

        var month = readlineSync.question("\n\t\t\t\t Please enter month  [MM] : ", {
            limit: monthRegex, 
            limitMessage: '\nSorry, $<lastInput> is not a valid month.'
        });
        
        
        var day = readlineSync.question("\n\t\t\t\t Please enter day    [DD] : ", {limit: function(input) {
            var numberOfDaysInMonth = getDayOfMonthRange(year, month - 1);
            return Number(input) >= 1 && Number(input) <= numberOfDaysInMonth; 
        },
            limitMessage: '\nSorry, $<lastInput> is not a valid day in ' + constants.numberToMonthLong[month - 1] + "."
        });

        var dayOfWeekStr = dayOfWeek.getDayOfTheWeek(Number(year), Number(month) - 1, Number(day));


        console.log( "\n\t\t\t\t || " + constants.numberToMonthLong[month - 1] + " " + day + ", " + year + " is a " + dayOfWeekStr + " ||" +"\n");

        var result = readlineSync.question('\nDo you want to query another date? [y/n]', {
            limit: ['y', 'n', 'Y', 'N'],
            limitMessage: '\nPlease enter `y` or `n`.'
        });

        if(result == "n" || result == 'N'){
            break;
        }
    }

}

function getDayOfMonthRange(year, month){
    switch (month) {
        case 1 :
            return dayOfWeek.isLeapYear(year) ? 29 : 28;
        case 3 : case 5 : case 8 : case 10 :
            return 30;
        default :
        return 31;
    } 
}