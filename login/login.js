import { isUserExists, printData } from './db_helper/database_helper.js'

const btnLogin = document.getElementById("login-button");
const containerLoginErrorMsg = document.getElementById("login-error-msg-holder");
const lblLoginError = document.getElementById("login-error-message");


btnLogin.addEventListener("click", (e) => {
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    console.log("clicked");
    if ((username == null || username === "") || (password == null || password === "")) {
        onLoginFailureDueToEmptyCredentials();
    } else {
        containerLoginErrorMsg.style.display = "none";
        if (isUserExists(username, password)) {
            onLoginSuccess(() => {
                window.location.replace("/view_resume.html");
            });
        } else {
            onLoginFailureDueToInvalidCredentials();
        }
    }
});

function fetchData() {
    fetch('.dummy_data/Data.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

function onLoginSuccess(callback) {
    containerLoginErrorMsg.style.display = "block";
    lblLoginError.innerHTML = "Success!";
    lblLoginError.style.color = 'green';

    callback();
}
function onLoginFailureDueToInvalidCredentials() {
    lblLoginError.innerHTML = "Invalid username and password!";
    lblLoginError.style.color = 'red';
    containerLoginErrorMsg.style.display = "block";
}
function onLoginFailureDueToEmptyCredentials() {
    containerLoginErrorMsg.style.display = "block";
    lblLoginError.innerHTML = "Enter username/password!";
    lblLoginError.style.color = 'red';
}