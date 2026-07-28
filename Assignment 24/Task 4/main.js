// Needed Output
//method 1
let date1 = new Date(2002, 11, 5);


//method 2
let date2 = new Date();
date2.setFullYear(2002, 11, 5);
date2.setHours(0, 0, 0, 0);

//method 3
let date3 = new Date("2002-11-05");
date3.setHours(0, 0, 0, 0);

console.log(date1.toString());
console.log(date2.toString());
console.log(date3.toString());
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"