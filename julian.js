const { toJulianDay } = require("julian");
const { toDate } = require("julian");


let today = new Date();
// let birthday = new Date(Date.UTC(1999, 09, 29 ) ); 
let birthday = new Date('2022-11-04T17:25:29.822Z'); 

console.log("FECHAS")
console.log("Hoy es: ",today);
console.log("Mi cumpleaños es: ",birthday);

console.log("-------------------------------------");

let nowjul = toJulianDay(today);
let birjul = toJulianDay(birthday);

console.log("hoy en dias: ",nowjul);
console.log("Cumpleaños en dias: ",birjul);

// console.log(toDate(nowjul))

let daysold = (nowjul - birjul);

console.log("-------------------------------------");

console.log("Tienes:",daysold, "dias de nacido!");

let i = 0;

for( i ; daysold > (10**i) ; i++){
  // console.log("Sigue siendo menor");
  
}

let limit = 10**i;
// console.log(i);
// console.log(limit);
// console.log(daysold);

let daysleft = limit - daysold;
// console.log(daysleft)
// console.log(daysleft + nowjul)

let nextmathbirthdate = toDate(nowjul + daysleft)

console.log(nextmathbirthdate)

console.log("Quedan:", daysleft, "dias" ,  "para tu:", i, "Mathbirthday");
console.log("Your next math birthday is your",limit,"-day-old birthday on", nextmathbirthdate," date");





