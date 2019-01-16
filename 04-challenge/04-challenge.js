// ***********************
// Challenge Assessment 4
// ***********************

// Make separate HTML, CSS, and JS files, and link files. In HTML, create a sign up form that takes in three values, username, password, and confirm password. 
//This should alert the user if they hit submit without all of the fields filled in, saying, "Please fill in all your fields".  
//It should also check the password and, if they do not match, the user should be alerted with "Your passwords MUST match". If all of the fields are filled in, and the passwords match, 
//when the submit button is clicked, the button should become disabled.



function checkInputs() {

    var empty = "";
    var btn = document.getElementById("submit");
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (userName === empty || password === empty || confirmPassword === empty) {
        alert("Please fill in all text fields!");
    }
    if (password !== confirmPassword) {
        alert("Sorry passwords MUST match!");
    }
    if (userName !== empty && password !== empty && confirmPassword !== empty && password === confirmPassword) {
        btn.disabled = true;
    }

    //check the validitiy of passwords to userName
}




