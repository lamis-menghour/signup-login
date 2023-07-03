var register = document.querySelector('.register a');
var login = document.querySelector('.login a');
var flipCardInner = document.querySelector('.flip-card-inner');

login.onclick = () => {
    flipCardInner.style.transform = 'rotateY(180deg)';
}

register.onclick = () => {
    flipCardInner.style.transform = 'rotateY(0deg)';
}

// --------------------------------------------------------------------------

usersJson = [
    {
        id: 0,
        firstName: "lamis",
        lastName: "menghour",
        email: "lamis@gmail.com",
        password: "lamislamis"
    }
    ,
    {
        id: 1,
        firstName: "mouna",
        lastName: "menghour",
        email: "mouna@gmail.com",
        password: "mounamouna"
    }
    ,
    {
        id: 2,
        firstName: "ahmed",
        lastName: "menghour",
        email: "ahmed@gmail.com",
        password: "ahmedahmed"
    }
];

localStorage.users = JSON.stringify(usersJson);
USERS = JSON.parse(localStorage.users);
var index = 3;

var firstName = document.querySelector('form#signup .inputField .fullName .firstName input');
var lastName = document.querySelector('form#signup .inputField .fullName .lastName input');
var email = document.querySelector('form#signup .inputField.email input');
var password = document.querySelector('form#signup .inputField.password input');

const signupForm = document.querySelector('form#signup');
signupForm.addEventListener('submit', (e) => {

    function checkEmail() {
        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i].email == email.value) {
                email.value = "";
                return false;
            }
            else {
                return true;
            };
        };
    };

    if (checkEmail() == true) {
        var newUser =
        {
            id: index,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }

        USERS.push(newUser)
        localStorage.users = JSON.stringify(USERS);

        index += 1;
        alert('You become a member in our family')
        // reset the Signup form
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
    }
    else {
        alert('Email allready exist');
    }

    console.log('------------------ NEW SIGNUP --------------------');
    flipCardInner.style.transform = 'rotateY(180deg)';

});



// -------------------------------------- LOG IN ------------------------------------------


var EMAIL = document.querySelector('form#login .inputField.email input');
var PASSWORD = document.querySelector('form#login .inputField.password input');

const loginForm = document.querySelector('form#login');
loginForm.addEventListener('submit', () => {

    function loginFunction() {
        for (let i = 0; i < USERS.length; i++) {
            if (USERS[i].email == EMAIL.value) {
                var ID = USERS[i].id;
                if (USERS[ID].password == PASSWORD.value) {
                    return true;
                }
                else {
                    return false;
                };
            }
            else{
                return false;
            }
        };

    };

    if (loginFunction() == true) {
        alert('Welcome back');
        // reset the login form
        EMAIL.value = "";
        PASSWORD.value = "";
    }
    else if (loginFunction() == false) {
        alert('Your email or password is incorrect');
        // reset password
        EMAIL.value = "";
        PASSWORD.value = "";
    };

    console.log('------------------ LOGIN --------------------');

})