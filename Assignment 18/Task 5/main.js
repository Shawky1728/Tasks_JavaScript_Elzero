let div = document.createElement("div");
div.textContent = "10";
document.body.appendChild(div);




let id = setInterval(countDown, 1000);



function countDown() {

    let myDiv = document.querySelector("div");
    myDiv.innerHTML -= 1;

    if(myDiv.innerHTML === "5") {

        // open window with specified parameters
        window.open("https://Elzero.org", "_blank", "width=500,height=500","top=200,left=200");


    }

    if (myDiv.innerHTML === "0") {
        myDiv.textContent = "Done";
        clearInterval(id);
    }
}


