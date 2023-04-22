const btnSearch = document.getElementById("search-button");
const btnPrevious = document.getElementById("previous-button");
const btnNext = document.getElementById("next-button");
const containerLoginErrorMsg = document.getElementById("search-error-msg-holder");
const lblLoginError = document.getElementById("search-error-message");
const resumeDiv = document.getElementById("content-card-div");
const noresumeDiv = document.getElementById("content-no-resume-div");
const personName = document.getElementById("name");
const appliedFor = document.getElementById("appliedFor");
var resume = [];
var currentPosition = 0;

window.onload = () => {
    containerLoginErrorMsg.style.display = "none";
    if (data.resume.length != 0) {
        resume = data.resume;
        console.log("length " + data.resume.length + " resume " + resume.length);
        resumeDiv.style.display = "block"
        noresumeDiv.style.display = "none"
        showButtons()
    }

}


function showButtons() {
    console.log("current position " + currentPosition + " length " + resume.length);
    if (currentPosition == 0) {
        btnPrevious.style.display = "none"
    } else {
        btnPrevious.style.display = "inline"
    }

    if (currentPosition < resume.length) {
        btnNext.style.display = "inline"
    } else {
        btnNext.style.display = "none"
    }

    updateResume();
}

function updateResume() {
    personName.innerText = resume[currentPosition].basics.name;
    appliedFor.innerHTML = `<small_text_heading>Applied For </small_text_heading> <small_text>${resume[currentPosition].basics.AppliedFor}</small_text>`
}

btnNext.addEventListener("click", (e) => {

    if (currentPosition < resume.length) {
        currentPosition++;
    }
    console.log(currentPosition)
    showButtons();
})


btnPrevious.addEventListener("click", (e) => {
    if (currentPosition > 0) {
        currentPosition--;
    }
    console.log(currentPosition)
    showButtons();
})
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
