let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let temp = [];
let countNumber = 0;

for (let i = 0; i < chars.length; i++) {
    if(typeof chars[i] == "number"){
      temp.unshift(chars[i]);
      countNumber++;
    }
    else{
      temp.push(chars[i]);
    }
}

temp.copyWithin(0, countNumber,countNumber + countNumber);


console.log(temp);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']