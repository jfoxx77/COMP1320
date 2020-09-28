
var constants = require("./constants");

function getDayOfTheWeek(year, month, day){

    let lastTwoDigits = getLastTwoDigitsOfYear(year);  
    let numOfTwelves = getQuotient(lastTwoDigits, 12);                                          // Step 1
    let remainderOfDivision = getRemainder(lastTwoDigits, 12);                                  // Step 2
    let numOfFours = getQuotient(remainderOfDivision, 4);                                       // Step 3
    let monthCode = considerOffsets(year, month, constants.monthCodes[month]);                  // Step 5
    let daysTotal = (numOfTwelves + remainderOfDivision + numOfFours + day + monthCode);        // Step 6a
    let dayOfWeek = getRemainder(daysTotal, 7);                                                 // Step 6b

    return (constants.weekdays2[dayOfWeek]);
}

function isLeapYear(year){
    return ((!(year % 4)) && ((year % 100))) || (!(year % 400));
}

function makeCalendar(){
    let year = 2020;
    let month = 0;

    while(month <= 11){
        let numOfDaysInMonth = constants.daysInMonth[month];
        let dayOfWeek = getDayOfTheWeek(year, month, 1);
        
        if(isItFebruaryInALeapYear(year, month)){
            numOfDaysInMonth++;
        }
        
        for(let day = 1; day <= numOfDaysInMonth; day++){
            printDay(year, month, day, dayOfWeek);
            dayOfWeek = incrementDayOfWeek(dayOfWeek);
        }
        month++;
    }
}

function isItFebruaryInALeapYear(year, month){
    return (isLeapYear(year) && month == 1);
}


// Helpers

function incrementDayOfWeek(dayOfWeek){

    if(dayOfWeek == "Saturday"){
        return "Sunday";
    }

    let dayOfWeekAsInt = constants.weekdayToInt[dayOfWeek];
    return constants.weekday[dayOfWeekAsInt + 1];
}

function printDay(year, month, day, dayOfWeek){
    console.log(month + 1 + "-" + day + "-" + year + " is a " + dayOfWeek);
}

function considerOffsets(year, month, monthCode){
    monthCode = considerCenturyOffsets(year, monthCode);
    monthCode = considerLeapYearOffsets(year, month, monthCode);
    return monthCode;
}

function getFirstTwoDigitsOfYear(year) {
    return Number(year.toString().slice(0,2));
}

function considerCenturyOffsets(year, monthCode){

    var period = getFirstTwoDigitsOfYear(year)*100;

    // These repeat every 400 years 
    if(!((period - 1600) % 400)){
        return (monthCode + 6);
    } else if(!((period - 1700) % 400)){
        return (monthCode + 4);
    } else if(!((period - 1800) % 400)){
        return (monthCode + 2);
    }
    return monthCode;
}

function considerLeapYearOffsets(year, month, monthCode){
    
    if(isLeapYear(year) && (month == 0 || month == 1 )){
        return (monthCode - 1);
    }
    return monthCode;
}

function getLastTwoDigitsOfYear(year){
    return (year % 100);
}

function getRemainder(dividend, divisor){
    return (dividend % divisor);
}

function getQuotient(dividend, divisor){
    return parseInt(dividend / divisor, 10);
}


module.exports = {getDayOfTheWeek, isLeapYear, makeCalendar};