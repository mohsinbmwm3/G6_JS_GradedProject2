import { isUserExists, printData } from './database_helper.js'

const btnLogin = document.getElementById("login-button");
const containerLoginErrorMsg = document.getElementById("login-error-msg-holder");
const lblLoginError = document.getElementById("login-error-message");

// printData();

if(btnLogin != null) {
    btnLogin.addEventListener("click", (e) => {
        var username = document.getElementById("username-input").value;
        var password = document.getElementById("password-input").value;

        if((username == null || username === "") || (password == null || password === "")) {
            containerLoginErrorMsg.style.display = "block";
            lblLoginError.innerHTML = "Enter username/password!";
            lblLoginError.style.color = 'red';
        } else {
            containerLoginErrorMsg.style.display = "none";
            if(isUserExists(username, password)) {
                containerLoginErrorMsg.style.display = "block";
                lblLoginError.innerHTML = "Success!";
                lblLoginError.style.color = 'green';
            } else {
                lblLoginError.innerHTML = "Invalid username and password!";
                lblLoginError.style.color = 'red';
                containerLoginErrorMsg.style.display = "block";
            }
        }
    });
}
