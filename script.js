var passwordLengthEl = document.getElementById('input_box');
var generateEl = document.getElementById('generate_button');
var passwordEl = document.getElementById('custom_password')

var passwordChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890$@-';

function generatePassword() {
    var passwordLength = passwordLengthEl.value;
    let password = '';

    for (let i = 0; i < passwordLength; i++) { 
    /* as long as i is less than password length (i.e. 10), the loop will continue running, generating one character by one
    until it assembles the set password length */
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)];

        if (passwordLength > 25) {
            alert("You can't choose a password length greater than 25!");
            break; // using break keyword jumps out of the entire loop
        }

        if (passwordLength < 8) {
            alert("You can't choose a password length less than 8! This is to ensure you have a secure enough password.");
            break;
        }
        
    passwordEl.innerHTML = password;
    
    }
}

generateEl.addEventListener('click', generatePassword);