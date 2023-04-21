const btnSearch = document.getElementById("search-button");
const containerLoginErrorMsg = document.getElementById("search-error-msg-holder");
const lblLoginError = document.getElementById("search-error-message");
const resumeDiv = document.getElementById("content-card-div");
const noresumeDiv = document.getElementById("content-no-resume-div");
var resume = [];

window.onload = () => {
    containerLoginErrorMsg.style.display = "none";
    if (data.resume.length != 0) {
        resume = data.resume;
        console.log("length " + data.resume.length + " resume " + resume.length);
        resumeDiv.style.display = "block"
        noresumeDiv.style.display = "none"
    }

}
if (btnSearch != null) {
    btnSearch.addEventListener("click", (e) => {
        var searchInput = document.getElementById("search-input-field").value;
        console.log("searchInput " + searchInput);
        if ((searchInput == null || searchInput === "")) {
            onFailureDueToEmptyCredentials();
        } else {
            containerLoginErrorMsg.style.display = "none";
            resume = [];
            for (resumes of data.resume) {
                if (resumes.basics.AppliedFor.toLowerCase() == searchInput.toLowerCase()) {
                    resume.push(resumes);

                }
            }
            if (resume.length == 0) {
                resumeDiv.style.display = "none"
                noresumeDiv.style.display = "flex"
            } else {
                resumeDiv.style.display = "block"
                noresumeDiv.style.display = "none"
            }

        }
    });
}

function onFailureDueToEmptyCredentials() {
    containerLoginErrorMsg.style.display = "block";
    lblLoginError.innerHTML = "Enter text to search";
    lblLoginError.style.color = 'red';
}
