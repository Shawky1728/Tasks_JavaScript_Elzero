let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let method1 = numsOne.concat(numsTwo);

let method2 = [...numsOne, ...numsTwo];

let method3 = numsOne.push(...numsTwo);

// Needed Output
// [1, 2, 3, 4, 5, 6]