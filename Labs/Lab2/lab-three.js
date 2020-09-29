const constants = require('./constants');

// Helpers

function isLeapYear(year) {
  return ((!(year % 4)) && ((year % 100))) || (!(year % 400));
}

function incrementDayOfWeek(dayOfWeek) {
  const dayOfWeekAsInt = constants.weekdayToInt[dayOfWeek];
  return constants.weekday[(dayOfWeekAsInt + 1) % 7];
}

function printDay(year, month, day, dayOfWeek) {
  console.log(`${month + 1}-${day}-${year} is a ${dayOfWeek}`);
}

function getFirstTwoDigitsOfYear(year) {
  return Number(year.toString().slice(0, 2));
}

function considerCenturyOffsets(year, monthCode) {
  const period = getFirstTwoDigitsOfYear(year) * 100;

  // These repeat every 400 years
  if (!((period - 1600) % 400)) {
    return (monthCode + 6);
  } if (!((period - 1700) % 400)) {
    return (monthCode + 4);
  } if (!((period - 1800) % 400)) {
    return (monthCode + 2);
  }
  return monthCode;
}

function considerLeapYearOffsets(year, month, monthCode) {
  if (isLeapYear(year) && (month === 0 || month === 1)) {
    return (monthCode - 1);
  }
  return monthCode;
}

function considerOffsets(year, month, monthCode) {
  let upDatedMonthCode = considerCenturyOffsets(year, monthCode);
  upDatedMonthCode = considerLeapYearOffsets(year, month, upDatedMonthCode);
  return upDatedMonthCode;
}

function getLastTwoDigitsOfYear(year) {
  return (year % 100);
}

function getRemainder(dividend, divisor) {
  return (dividend % divisor);
}

function getQuotient(dividend, divisor) {
  return parseInt(dividend / divisor, 10);
}

function isItFebruaryInALeapYear(year, month) {
  return (isLeapYear(year) && month === 1);
}

// Part 1
function getDayOfTheWeek(year, month, day) {
  const lastTwoDigits = getLastTwoDigitsOfYear(year);
  const numOfTwelves = getQuotient(lastTwoDigits, 12); // Step 1
  const remainderOfDivision = getRemainder(lastTwoDigits, 12); // Step 2
  const numOfFours = getQuotient(remainderOfDivision, 4); // Step 3
  const monthCode = considerOffsets(year, month, constants.monthCodes[month]); // Step 5
  const daysTotal = (numOfTwelves + remainderOfDivision + numOfFours + day + monthCode); // Step 6a
  const dayOfWeek = getRemainder(daysTotal, 7); // Step 6b

  return (constants.weekdays2[dayOfWeek]);
}

// Part 2
function makeCalendar() {
  const year = 2020;
  let month = 0;

  while (month <= 11) {
    let numOfDaysInMonth = constants.daysInMonth[month];
    let dayOfWeek = getDayOfTheWeek(year, month, 1);

    if (isItFebruaryInALeapYear(year, month)) {
      numOfDaysInMonth++;
    }

    for (let day = 1; day <= numOfDaysInMonth; day++) {
      printDay(year, month, day, dayOfWeek);
      dayOfWeek = incrementDayOfWeek(dayOfWeek);
    }
    month++;
  }
}

module.exports = { getDayOfTheWeek, isLeapYear, makeCalendar };
