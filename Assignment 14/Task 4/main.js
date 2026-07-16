let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings.filter(i=> !isNaN(parseInt(i))).map(i=>-i);

console.log(result)


// [-1, -10, 10, 20, -5, -3]