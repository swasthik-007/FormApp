// Define the regex as a RegExp object
let regex = /^(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

function validatePassword(string) {
    // Check if the string is at least 8 characters long and matches the regex
    if( !regex.test(string) ){
        // console.log(false);
        return false;
    }
    if (string.length < 8  ) {
        // console.log(falseup);
        return false;
    }
    // console.log(true);
    return true;
}

export default validatePassword;
