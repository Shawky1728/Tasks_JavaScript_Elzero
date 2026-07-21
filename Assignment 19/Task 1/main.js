
if(localStorage.getItem("color") != null){
    document.body.style.color = localStorage.getItem("color");
}

if(localStorage.getItem("font") != null){
    document.body.style.fontFamily = localStorage.getItem("font");
}

if(localStorage.getItem("size") != null){
    document.body.style.fontSize = localStorage.getItem("size");
}

let color = document.querySelector("select[name=color]");
let font = document.querySelector("select[name=font]");
let size = document.querySelector("select[name=size]");

if(color != null){
    color.addEventListener("change", function(){
        localStorage.setItem("color", color.value);
        document.body.style.color = color.value;
    });
}

if(font != null){
    font.addEventListener("change", function(){
        localStorage.setItem("font", font.value);
        document.body.style.fontFamily = font.value;
    });
}

if(size != null){
    size.addEventListener("change", function(){
        localStorage.setItem("size", size.value);
        document.body.style.fontSize = size.value;
    });
}