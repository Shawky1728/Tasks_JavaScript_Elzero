let images = document.querySelectorAll("img");

for(let i=0; i<5; i++){
    let img = images[i];
    if(img.hasAttribute("alt")){
        img.setAttribute("alt", "old");
    }
    else{
        img.alt="Elzero New";
    }
}