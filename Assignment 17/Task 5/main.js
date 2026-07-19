let elements = document.body.children;
for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", function(){
        console.log(`This Is ${elements[i].tagName} Element`);
    });
}