/*
// SUBMIT EVENTS
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username'); // 1 way

form.addEventListener('submit', e => {
    e.preventDefault(); // submit event default is to refresh page... we are preventing it
    // console.log(username.value); // 1 way
    console.log(form.username.value); // id attribute, 2nd way
});
*/

/*
// REGULAR EXPRESSIONS (RegEx) & Testing
const username = '123fsreno232';
const pattern = /^[a-z]{6,}$/; // a-z lowercase, 6 characters (^, beginning $, end)

// let result = pattern.test(username); // test regex, returns t or f
// console.log(result);

// if (result) {
//     console.log('regex test passed :)');
// } else {
//     console.log('regex test failed :(');
// }

// let result = username.search(pattern); // returns integer of position of match
// console.log(result);
*/

// BASIC FORM VALIDATION & KEYBOARD EVENTS
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault(); // submit event default is to refresh page... we are preventing it

    // validation
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6-12 characters long';
    }

});

// live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});