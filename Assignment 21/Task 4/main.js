let theNumber = 100020003000;

let result = +[...new Set(theNumber.toString())].filter((char) => char !== '0').join('');


console.log(result);

// Needed Output
123