
let myAgeInMileSeconds = new Date() - new Date('2002-11-05');

console.log(`${(myAgeInMileSeconds /1000).toFixed(0)} Seconds`)
console.log(`${(myAgeInMileSeconds /1000 /60).toFixed(0)} Minutes`)
console.log(`${(myAgeInMileSeconds /1000 /60 /60).toFixed(0)} Hours`)
console.log(`${(myAgeInMileSeconds /1000 /60 /60 /24).toFixed(0)} Days`)
console.log(`${(myAgeInMileSeconds /1000 /60 /60 /24 /30).toFixed(0)} Months`)
console.log(`${(myAgeInMileSeconds /1000 /60 /60 /24 /30 /12).toFixed(0)} Years`)
