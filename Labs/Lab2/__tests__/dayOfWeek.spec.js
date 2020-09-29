const dayOfWeek = require('../lab-three');
const constants = require('../constants');

function getExpectedDayOfWeek(date) {
  return constants.weekday[date.getDay()];
}

function splitDateToDayMonthYear(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateSplit = [year, month, day];
  return dateSplit;
}

describe('isLeapYear Function', () => {
  test('Should return false for common years', () => {
    for (let i = 0; i < constants.commonYears.length; i++) {
      expect(dayOfWeek.isLeapYear(constants.commonYears[i])).toBeFalsy();
    }
  });
});

describe('isLeapYear Function', () => {
  test('Should return true for leap years', () => {
    for (let i = 0; i < constants.leapYears.length; i++) {
      expect(dayOfWeek.isLeapYear(constants.leapYears[i])).toBeTruthy();
    }
  });
});

// @Jamie Tests
describe('Day of Week Function (Range)', () => {
  test('Should correctly get day(of week) given date (year, month, day) in range', () => {
    const endDate = new Date(3000, 0, 1);
    for (let date = new Date(1000, 0, 1); date <= endDate; date.setDate(date.getDate() + 1)) {
      const splitDate = splitDateToDayMonthYear(date);
      const actualDayOfWeek = dayOfWeek.getDayOfTheWeek(splitDate[0], splitDate[1], splitDate[2]);
      const expectedDayOfWeek = getExpectedDayOfWeek(date);
      expect(actualDayOfWeek).toEqual(expectedDayOfWeek);
    }
  });
});

// @Ryan Tests
//   describe("Day of Week Function (Range)", () => {
//     test("Should correctly get day(of week) given date (year, month, day) in range", () => {

//         let endDate = new Date(2199, 0, 1);
//         for (let date = new Date(1582, 0, 1); date <=
// endDate; date.setDate(date.getDate() + 1)) {
//             let splitDate = splitDateToDayMonthYear(date);
//             let actualDayOfWeek = dayOfWeek.getDayOfTheWeek(splitDate[0],
// constants.numberToMonthLong[splitDate[1]], splitDate[2]);
//             let expectedDayOfWeek = getExpectedDayOfWeek2(date);
//             expect(actualDayOfWeek).toEqual(expectedDayOfWeek);
//         }
//     });
//   });
