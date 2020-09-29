const readlineSync = require('readline-sync');
const dayOfWeek = require('./lab-three');
const constants = require('./constants');

function printWelcomeMessage() {
  console.log('\n\n\n=============================== Welcome =============================== \n');
  console.log('\t\t Please enter the date using YYYY-MM-DD format.\n');
}

function getYearFromUser() {
  const yearRegex = /^\d{4}$/;
  const year = readlineSync.question('\n\t\t\t\t Please enter year [YYYY] : ', {
    limit: yearRegex,
    limitMessage: '\nSorry, $<lastInput> is not a valid year.',
  });
  return year;
}

function getMonthFromUser() {
  const monthRegex = /^(0?[1-9]|1[012])$/;
  const month = readlineSync.question('\n\t\t\t\t Please enter month  [MM] : ', {
    limit: monthRegex,
    limitMessage: '\nSorry, $<lastInput> is not a valid month.',
  });
  return month;
}

function getNumberOfDaysInMonthFromUser(year, month) {
  switch (month) {
    case 1:
      return dayOfWeek.isLeapYear(year) ? 29 : 28;
    case 3: case 5: case 8: case 10:
      return 30;
    default:
      return 31;
  }
}

function getDayFromUser(year, month) {
  const day = readlineSync.question('\n\t\t\t\t Please enter day    [DD] : ', {
    limit(input) {
      const numberOfDaysInMonth = getNumberOfDaysInMonthFromUser(year, month - 1);
      return Number(input) >= 1 && Number(input) <= numberOfDaysInMonth;
    },
    limitMessage: `\nSorry, $<lastInput> is not a valid day in ${constants.numberToMonthLong[month - 1]}.`,
  });
  return day;
}

function printDayOfWeek(year, month, day, dayOfWeekStr) {
  console.log(`\n\t\t\t\t || ${constants.numberToMonthLong[month - 1]} ${day}, ${year} is a ${dayOfWeekStr} ||`, '\n');
}

function promptUserToQueryAnotherDate() {
  const result = readlineSync.question('\nDo you want to query another date? [y/n]: ', {
    limit: ['y', 'n', 'Y', 'N'],
    limitMessage: '\nPlease enter `y` or `n`.',
  });

  return result;
}

function getUserInput() {
  for (;;) {
    const year = getYearFromUser();
    const month = getMonthFromUser();
    const day = getDayFromUser(year, month);
    const dayOfWeekStr = dayOfWeek.getDayOfTheWeek(Number(year), Number(month) - 1, Number(day));
    printDayOfWeek(year, month, day, dayOfWeekStr);

    const result = promptUserToQueryAnotherDate();

    if (result === 'n' || result === 'N') {
      break;
    }
  }
}

function getDayOfTheWeekForUserDate() {
  printWelcomeMessage();
  getUserInput();
}

dayOfWeek.makeCalendar();
getDayOfTheWeekForUserDate();
