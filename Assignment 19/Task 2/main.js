let userName = document.querySelector("[name='username']");
let userEmail = document.querySelector("[name='email']");
let age = document.querySelector("[name='age']");
let select = document.querySelector("[name='gender']");
let submitBtn = document.querySelector("[type='submit']");

if(sessionStorage.getItem("username") != null){
    userName.value = sessionStorage.getItem("username");
}

if(sessionStorage.getItem("email") != null){
    userEmail.value = sessionStorage.getItem("email");
}

if(sessionStorage.getItem("age") != null){
    age.value = sessionStorage.getItem("age");
}

if(sessionStorage.getItem("select") != null){
    select.value = sessionStorage.getItem("select");
}

userName.onblur = function(){
    sessionStorage.setItem("username", userName.value);
}

userEmail.onblur = function(){
    sessionStorage.setItem("email", userEmail.value);
}

age.onblur = function(){
    sessionStorage.setItem("age", age.value);
}

select.onchange = function(){
    sessionStorage.setItem("select", select.value);
}