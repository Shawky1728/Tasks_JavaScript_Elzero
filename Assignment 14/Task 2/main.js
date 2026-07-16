let myString = "EElllzzzzzzzeroo";

let result = myString.split("").reduce((acc,curr)=>{
  return acc.includes(curr)? acc:acc+curr;
});

console.log(result);