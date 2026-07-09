let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray.reduce(function(acc, current) {
  if (Array.isArray(current)) {
    current.forEach(function(item) {
      acc = acc.concat(item);
    });
  } else {
    acc = acc.concat(current);
  }
  return acc;
});

console.log(result); // "Elzero"