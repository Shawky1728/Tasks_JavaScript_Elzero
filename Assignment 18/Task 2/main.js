
function CreatePopup() {
  let myDiv = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let button = document.createElement("button");

  h3.textContent = "Welcome";
  p.textContent = "Welcome To Elzero Web School";
  button.textContent = "x";

  myDiv.appendChild(h3);
  myDiv.appendChild(p);
  myDiv.appendChild(button);

  button.addEventListener("click", function () {
    myDiv.remove();
  });

  document.body.appendChild(myDiv);
}

setTimeout(CreatePopup, 5000);
