

// Get the wrapper element
const wrapper = document.querySelector('.wrapper');

// Get the login form element
const loginForm = document.querySelector('.form-box.login form');

// Get the registration form element
const registerForm = document.querySelector('.form-box.register form');

// Get the login link and register link elements
const loginLink = document.querySelector('.loginlink');
const registerLink = document.querySelector('.registerlink');

// Get the login button and close icon elements
const btnpop = document.querySelector('.btnpop');
const iconClose = document.querySelector('.iconclose');

// Event listener for clicking the "Register" link
registerLink.addEventListener('click', () => {
    // Show the registration form and hide the login form
    wrapper.classList.add('active');
});

// Event listener for clicking the "Login" link
loginLink.addEventListener('click', () => {
    // Show the login form and hide the registration form
    wrapper.classList.remove('active');
});

// Event listener for clicking the "Login" button
btnpop.addEventListener('click', () => {
    // Show the login form as a popup
    wrapper.classList.add('active-popup');
});

// Event listener for clicking the close icon in the popup
iconClose.addEventListener('click', () => {
    // Hide the login popup
    wrapper.classList.remove('active-popup');
});

// Event listener for submitting the login form
loginForm.addEventListener('submit', function (e) {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();

    // Perform any login validation here if needed

    // Redirect the user to the next page after successful login
    window.location.href = '/Linking Page/index.html'; // Replace with the actual URL of the next page
});

// Event listener for submitting the registration form
registerForm.addEventListener('submit', function (e) {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();

    // Perform any registration validation here if needed

    // Redirect the user to the registration page after successful registration
    window.location.href = '/Linking Page/index.html'; // Replace with the actual URL of the registration page
});
