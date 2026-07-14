let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");


let temp = "";

temp = div1.title;
div1.title = div2.title;
div2.title = temp;

temp = div1.textContent;
div1.textContent = div2.textContent;
div2.textContent = temp;

div2.textContent += " " + document.querySelectorAll("div").length;


