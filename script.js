var register = document.querySelector(".register a");
var login = document.querySelector(".login a");
var flipCardInner = document.querySelector(".flip-card-inner");

login.onclick = () => {
  flipCardInner.style.transform = "rotateY(180deg)";
};

register.onclick = () => {
  flipCardInner.style.transform = "rotateY(0deg)";
};

// -------------------------------------- DATABASE ------------------------------------------
const usersJson = [
  {
    id: 0,
    firstName: "lamis",
    lastName: "menghour",
    email: "lamis@gmail.com",
    password: "lamislamis",
  },
  {
    id: 1,
    firstName: "mouna",
    lastName: "menghour",
    email: "mouna@gmail.com",
    password: "mounamouna",
  },
  {
    id: 2,
    firstName: "ahmed",
    lastName: "menghour",
    email: "ahmed@gmail.com",
    password: "ahmedahmed",
  },
];

localStorage.users = JSON.stringify(usersJson);
var USERS = JSON.parse(localStorage.users);
console.log("check users accounts");
console.log(USERS);
var index = 3;

// -------------------------------------- SIGN UP ------------------------------------------
const firstName = document.querySelector(
  "form#signup .inputField .fullName .firstName input"
);
const lastName = document.querySelector(
  "form#signup .inputField .fullName .lastName input"
);
const email = document.querySelector("form#signup .inputField.email input");
const password = document.querySelector(
  "form#signup .inputField.password input"
);
const signupForm = document.querySelector("form#signup");

function isValidEmail(email) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailFormat.test(email); // test() method is used with regular expressions to test if a string matches a pattern.
}

function isExistingEmail(email) {
  for (let i = 0; i < USERS.length; i++) {
    if (USERS[i].email === email) {
      return true;
    }
  }
  return false;
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  if (!isValidEmail(email.value)) {
    alert("Please enter a valid email address.");
    email.value = "";
    return;
  }

  if (isExistingEmail(email.value)) {
    alert("Email already exists.");
    email.value = "";
    return;
  }

  // add the new user to the database
  var newUser = {
    id: index,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  USERS.push(newUser);
  localStorage.users = JSON.stringify(USERS);
  index += 1;

  alert("You become a member in our family");
  // reset the Signup form
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";

  flipCardInner.style.transform = "rotateY(180deg)";
});

// -------------------------------------- LOG IN ------------------------------------------
const EMAIL = document.querySelector("form#login .inputField.email input");
const PASSWORD = document.querySelector(
  "form#login .inputField.password input"
);
const loginForm = document.querySelector("form#login");

function loginFunction() {
  for (let i = 0; i < USERS.length; i++) {
    if (USERS[i].email == EMAIL.value) {
      if (USERS[i].password == PASSWORD.value) {
        alert("Welcome back");
        // reset the login form
        EMAIL.value = "";
        PASSWORD.value = "";
        return true;
      } else {
        alert("Your password is incorrect");
        PASSWORD.value = "";
        return false;
      }
    }
  }
  alert("Your email is incorrect");
  // reset the login form
  EMAIL.value = "";
  PASSWORD.value = "";
  return false;
}

loginForm.addEventListener("submit", loginFunction);

// -------------------------------------- end of code ------------------------------------------
