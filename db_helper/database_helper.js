import data from '../dummy_data/Data.json' assert { type: 'json' };
import userCred from '../dummy_data/user-cred.json' assert { type: 'json' };

function printData() {
    console.log(resumes);
}

var resumes = data['resume'];

function isUserExists(username, password) {
    var foundUsePassword = userCred[username];
    if(password === foundUsePassword) {
        return true
    }
    return false;
}

export {
    printData,
    isUserExists
}