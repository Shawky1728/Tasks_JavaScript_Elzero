let myInput = document.querySelector('[name="dollar"]');
let resultDiv = document.querySelector('.result');

myInput.oninput=function() {
  let dollarValue = myInput.value;
  let egyptianPoundValue = dollarValue * 50;
  resultDiv.innerHTML = `${dollarValue} USD Dollar = ${egyptianPoundValue.toFixed(2)} Egyptian Pound`;
}