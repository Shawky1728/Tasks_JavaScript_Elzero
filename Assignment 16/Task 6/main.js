let number = document.querySelector("input[name='elements']");
let text = document.querySelector("input[name='texts']");
let type = document.querySelector("select[name='type']");
let create = document.querySelector("input[name='create']");
let results = document.querySelector(".results");
let submit = document.querySelector("input[type='submit']");

submit.onclick = function (e) {
    e.preventDefault();

    results.innerHTML = "";


    let elements = number.value;
    let texts = text.value;
    let types = type.value;

    for (let i = 0; i < elements; i++) {
        let myElement = document.createElement(types);
        let myText = document.createTextNode(texts);
        myElement.className = "box";
        myElement.appendChild(myText);
        results.appendChild(myElement);
    }


}