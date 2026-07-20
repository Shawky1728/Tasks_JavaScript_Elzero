let input = prompt("Print Number From - To");

let inputArray = input.split("-");

inputArray.sort((a, b) => a - b);

let start = Number(inputArray[0]);
let end = Number(inputArray[1]);

let div = document.createElement("div");
for (let i = start; i <= end; i++) {
    let p = document.createElement("p");
    p.textContent = i;
    div.appendChild(p);
}
document.body.appendChild(div);