// 7. Task: Leap Year Checker

const isLeapYear = (year: number): boolean => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const year = 2024;
if (isLeapYear(year)) {
  console.log("Happy New Year");
} else {
  console.log("Not a leap year");
}
