"use strict";
exports.__esModule = true;
// const { toJulianDay } = require("julian-gregorian")
var julian_gregorian_1 = require("julian-gregorian");
let today = new Date()
console.log(julian_gregorian_1["default"].fromGregorianToJulian(today)); // -> ''2018-7-27''
console.log(julian_gregorian_1["default"].fromGregorianToJulian(1999, 9, 29)); // -> ''2018-7-27''

