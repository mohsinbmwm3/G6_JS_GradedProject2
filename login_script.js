import { printData } from './database_helper.js'

const btnLogin = document.getElementById("login-button");
const containerLoginErrorMsg = document.getElementById("login-error-msg-holder");

printData();

if(btnLogin != null) {
    btnLogin.addEventListener("click", (e) => {
        var username = document.getElementById("username-input").value;
        var password = document.getElementById("password-input").value;

        if((username == null || username === "") || (password == null || password === "")) {
            containerLoginErrorMsg.style.display = "block";
        } else {
            containerLoginErrorMsg.style.display = "none";
        }
    });
}
