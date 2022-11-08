// const { toJulianDay } = require("julian-gregorian")
import CalendarConverter from 'julian-gregorian';

console.log(CalendarConverter.fromGregorianToJulian(2018,8,9));  // -> ''2018-7-27''
console.log(CalendarConverter.fromJulianToGregorian(1501,1,1));  // -> ''1501-1-11''