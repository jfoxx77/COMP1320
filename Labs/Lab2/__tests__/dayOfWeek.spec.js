var dayOfWeek = require("../lab-three");
var constants = require("../constants");

function getExpectedDayOfWeek(date){
    return constants.weekday[date.getDay()];
}


function splitDateToDayMonthYear(date) {
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var dateSplit = [year, month, day]; 
    return dateSplit;
}


describe("isLeapYear Function", () => {
    test("Should return false for common years", () => {
        for (const year of constants.commonYears){
            expect(dayOfWeek.isLeapYear(year)).toBeFalsy();
        }
    });
  });

  describe("isLeapYear Function", () => {
    test("Should return true for leap years", () => {
        for (const year of constants.leapYears){
            expect(dayOfWeek.isLeapYear(year)).toBeTruthy();
        }
    });
  });

  // @Jamie Tests
  describe("Day of Week Function (Range)", () => {
    test("Should correctly get day(of week) given date (year, month, day) in range", () => {
      
        let endDate = new Date(3000, 0, 1);
        for (let date = new Date(1000, 0, 1); date <= endDate; date.setDate(date.getDate() + 1)) {
            let splitDate = splitDateToDayMonthYear(date);
            let actualDayOfWeek = dayOfWeek.getDayOfTheWeek(splitDate[0], splitDate[1], splitDate[2]);
            let expectedDayOfWeek = getExpectedDayOfWeek(date);
            expect(actualDayOfWeek).toEqual(expectedDayOfWeek);
        }
    });
  });


// @Ryan Tests
//   describe("Day of Week Function (Range)", () => {
//     test("Should correctly get day(of week) given date (year, month, day) in range", () => {
      
//         let endDate = new Date(2199, 0, 1);
//         for (let date = new Date(1582, 0, 1); date <= endDate; date.setDate(date.getDate() + 1)) {
//             let splitDate = splitDateToDayMonthYear(date);
//             let actualDayOfWeek = dayOfWeek.getDayOfTheWeek(splitDate[0], constants.numberToMonthLong[splitDate[1]], splitDate[2]);
//             let expectedDayOfWeek = getExpectedDayOfWeek2(date);
//             expect(actualDayOfWeek).toEqual(expectedDayOfWeek);
//         }
//     });
//   });


  
