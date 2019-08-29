const name = document.getElementById("name");
const mail = document.getElementById("email");
const msg = document.getElementById("moreinfo");
const submit = document.getElementById("submit");
const regEx = /\S+@\S+\.\S+/;
const form = document.querySelector("form");


function checkInput(){
    if (  name.value.trim() && regEx.test(mail.value) ){
        submit.style.background = "#fa923f";
        submit.disabled = false;
    }
    else {
        submit.style.backgroundColor = "#979695";
        submit.disabled = true;
    }
}

