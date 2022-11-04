const { toJulianDay } = require("julian")

let today = new Date()
let birthday = new Date(1999, 09, 29)  

console.log(today)
console.log(birthday)

let nowjul = toJulianDay(today)
let birjul = toJulianDay(birthday)

console.log(nowjul)
console.log(birjul)

let dayspast = nowjul - birjul

console.log(dayspast)

// var birth = toJulianDay(Date.)