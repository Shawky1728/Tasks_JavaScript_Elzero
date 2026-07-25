let theName = "Elzero";

let method1 = Array.from(theName);

console.log(method1);

let method2 = [...theName];

console.log(method2);

let method3 = [theName.split('')];

console.log(method3);


// method four
console.log(Object.assign([], theName));

// method five
let arr = [];
let i = 0;
while (i < theName.length) {
  arr.push(theName[i]);
  i++;
}

console.log(arr);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']