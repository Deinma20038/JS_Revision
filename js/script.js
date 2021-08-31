let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let inputs = null;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    inputs = document.querySelectorAll('.formInput');
    inputs.forEach(input => {
        for(input=0;input<=4;input++){
        if(input.parentElement.classList.contains('success')){
            alert("Congrats");
        }}
    });
  
});

function checkInputs() {
    // get values from inputs

   let usernameValue = username.value.trim();
   let emailValue = email.value.trim();
   let passwordValue = password.value.trim();
   let password2Value = password2.value.trim(); 
//-----------------------------------------------------------------------------

   if(usernameValue === "" ){
      
       setErrorFor(username, "Username cannot be blank");
   } else {
      
       setSuccessFor(username, "Acceptable");
   }
//-----------------------------------------------------------------------------
   if(emailValue === "" ){
    
    setErrorFor(email, "Email cannot be blank");
    } else if(!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");  
    }
    else {
      
    setSuccessFor(email, "Acceptable");
    }
//-----------------------------------------------------------------------------

    if(passwordValue === ""){
        setErrorFor(password,"Password cannot be blank");
    } else if(passwordValue === "password"){
        setErrorFor(password,"Are you a clown, your password can't be Password");
    }else{
        setSuccessFor(password, "Acceptable");
    }
//-----------------------------------------------------------------------------

if(password2Value === ""){
    setErrorFor(password2,"Password cannot be blank");
} else if(password2Value !== passwordValue){
    setErrorFor(password2,"Passwords don't match");
}else{
    setSuccessFor(password2, "Acceptable");
}



}
//-----------------------------------------------------------------------------


function setErrorFor(input, message) {
    let formControl = input.parentElement; //.form-control
     let small = formControl.querySelector('small');

     // add error message inside small element
     small.innerText = message;
     //add error class
     formControl.className = 'form-control error';
}


function setSuccessFor(input, message){
    let formControl = input.parentElement; //.form-control
    let small = formControl.querySelector('small');

    // add error message inside small element
    small.innerText = message;
    //add error class
    formControl.className = 'form-control success';

}

function isEmail(email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

