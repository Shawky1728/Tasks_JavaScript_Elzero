let input = prompt("Print Number From - To");

let inputArray = input.split("-");

inputArray.sort((a, b) => a - b);

let start = Number(inputArray[0]);
let end = Number(inputArray[1]);

for (let i = start; i <= end; i++) {
    console.log(i);
}