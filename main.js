const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const form = document.getElementById('form');
const dateInput = document.getElementById('dateInput');

const firstName_error = document.getElementById('first-name_error');
const lastName_error = document.getElementById('last-name_error');
const password_error = document.getElementById('password_error');
const password2_error = document.getElementById('password2_error');
const email_error = document.getElementById('email_error');

form.addEventListener('submit', (e) => {
    const date = new Date(dateInput.value);
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear().toString().slice(-2)}`;
    dateInput.value = formattedDate;
});

form.addEventListener('submit', (e) => {
    if (firstName.value === '' || firstName.value == null) {
        e.preventDefault();
        firstName_error.innerHTML = "First name is required";
    } else {
        firstName_error.innerHTML = "";
    }
    if (email.value === '') {
        e.preventDefault();
        email_error.innerHTML = "Email or phone number is required";
    } else {
        email_error.innerHTML = "";
    }
    if (lastName.value === '' || lastName.value == null) {
        e.preventDefault();
        lastName_error.innerHTML = "Last name is required";
    } else {
        lastName_error.innerHTML = "";
    }
    if (password.value === '') {
        e.preventDefault();
        password_error.innerHTML = "Password is required";
    } else if (password.value.length < 8) {
        password_error.innerHTML = "Password must be at least 8 character";
    } else {
        password_error.innerHTML = "";
    }
    if (password2.value === '') {
        e.preventDefault();
        password2_error.innerHTML = "Please confirm your password";
    } else if (password2.value.length !== password) {
        password2_error.innerHTML = "Passwords does not match";
    } else {
        password2_error.innerHTML = "";
    }
});