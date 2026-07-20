let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);




let id = setInterval(countDown, 1000);



function countDown() {

    let myDiv = document.querySelector("div");
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML === "0") {
        myDiv.textContent = "Done";
        clearInterval(id);
        location.assign("https://elzero.org");
    }
}


