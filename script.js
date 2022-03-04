//hamburger menu
let menuIcon = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('change');
});


//form
let inputs = document.querySelectorAll(".inputs");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
});

let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

function formValidation()
{



if(firstName.value == ""){
    firstName.style.borderColor = "#e74c3c";
} else {
    firstName.style.borderColor = "#2ecc71"
}

if(lastName.value == ""){
    lastName.style.borderColor = "#e74c3c";
} else {
    lastName.style.borderColor = "#2ecc71"
}

if(email.value == ""){
    email.style.borderColor = "#e74c3c";
} else {
    email.style.borderColor = "#2ecc71"
}

if(subject.value == ""){
    subject.style.borderColor = "#e74c3c";
} else {
    subject.style.borderColor = "#2ecc71"
}

if(message.value == ""){
    message.style.borderColor = "#e74c3c";
} else {
    message.style.borderColor = "#2ecc71"
}
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


if (email.value.match(pattern)){
email.style.borderColor = "#2ecc71";
}
else {
email.style.borderColor = "red";

}
} 



let arr = [];

function add(){
    let updateFirstName = firstName.value;
    let updateLastName = lastName.value;
    let updateEmail = email.value;
    let updateSubject = subject.value;
    let updateMessage = message.value;
    let display =  document.querySelector("#contact-info");

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    display.innerHTML="" ;


    if(firstName.value == "" || lastName.value == "" ||
    email.value == ""|| subject.value == ""|| message.value == "") {
        alert("Please fill all the fields")
    } else if (!email.value.match(pattern)) {
        alert("Please enter a valid email")
    }
    else{       

    arr.push("<br>" + updateFirstName + "<br>" + updateLastName +"<br>" + updateEmail +"<br>"+ updateSubject +"<br>"+ updateMessage +"<br>");
    console.log(arr);

        
    }
    for( let i of arr){
        display.innerHTML += i + "<br>"; 
    }
}

