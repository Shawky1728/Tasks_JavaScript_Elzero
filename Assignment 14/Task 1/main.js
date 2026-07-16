let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map((i) =>
  isNaN(parseInt(i)) ? i : ""
).reduce((acc, curr) => {
  return acc + curr
});

console.log(result)