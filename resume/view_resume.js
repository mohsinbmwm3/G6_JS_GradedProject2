const btnSearch = document.getElementById("search-button");
const btnPrevious = document.getElementById("previous-button");
const btnNext = document.getElementById("next-button");
const containerLoginErrorMsg = document.getElementById("search-error-msg-holder");
const lblLoginError = document.getElementById("search-error-message");
const noresumeDiv = document.getElementById("no-resume");
const resumeDiv = document.getElementById("resume")
const personName = document.getElementById("name")
const appliedFor = document.getElementById("appliedFor")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const linkedin = document.getElementById("linkedin")
const tecSkills = document.getElementById("skills")
const hobbies = document.getElementById("hobbies")
const company = document.getElementById("company")
const position = document.getElementById("position")
const startDate = document.getElementById("startDate")
const endDate = document.getElementById("endDate")
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
    //   personName.innerText = resume[currentPosition].basics.name;
    // appliedFor.innerText = resume[currentPosition].basics.AppliedFor;
    const currentResume = resume[currentPosition];
    personName.innerText = currentResume.basics.name;
    appliedFor.innerText = currentResume.basics.AppliedFor;
    phone.innerText = currentResume.basics.phone;
    email.innerText = currentResume.basics.email;
    email.innerText = currentResume.basics.email;
    linkedin.innerText = currentResume.basics.profiles.url;
    company.innerText = currentResume.work["Company Name"];
    var skills = ""
    for (items in currentResume.skills.keywords) {
        if (items > 0) {
            skills += "\n"
        }
        skills += currentResume.skills.keywords[items]
        console.log("items " + currentResume.skills.keywords[items]);
    }
    tecSkills.innerText = skills;

    var resumeHobbies = ""
    for (items in currentResume.interests.hobbies) {
        if (items > 0) {
            resumeHobbies += "\n"
        }
        resumeHobbies += currentResume.interests.hobbies[items]
        console.log("items " + currentResume.interests.hobbies[items]);
    }
    hobbies.innerText = resumeHobbies;
    position.innerText = currentResume.work.Position;
    startDate.innerText = currentResume.work["Start Date"];
    endDate.innerText = currentResume.work["End Date"];
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
                noresumeDiv.style.display = "block"
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
