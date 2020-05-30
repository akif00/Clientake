// consulation form
// Form
const form = document.querySelector('.form');
// Error
const errorBlock = document.querySelector('.error-block');
const errorText = document.querySelector('.error');
// Inputs
const fullname = document.querySelector('.fullname-input');
const email = document.querySelector('.email-input');
const phone = document.querySelector('.phone-input');
const commentBox = document.querySelector('.comment-box');

const fields = [fullname, email, phone, commentBox];
// Helper functions
const throwError = message => {
    errorBlock.style.display = 'block';
    errorText.innerHTML = message;
};
const emptyFields = fields => {
    let isEmpty;
    fields.forEach(field =>
        field.value.length === 0 ? (isEmpty = true) : (isEmpty = false)
    );
    return isEmpty;
};
const validEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.value) ? true : false;
};
const validPhone = phone => {
    if (phone.value.length < 9) return false;
    else return true;
};


form.addEventListener('submit', e => {
    e.preventDefault();
    // Check for empty fields
    if (emptyFields(fields)) throwError('All fields must be completed.');
    // Check for valid email
    else if (!validEmail(email)) throwError('You must enter a valid email.');
    // Check for valid phoneNumber
    else if (!validPassowrd(phone))
        throwError(' Please insert a valid phone number.');
    // Submit
    else {
        errorBlock.classList.add('success');
        throwError('Submitted.');
        // var resetForm = document.getElementsByName('contact-form')[0];
        // resetForm.reset();

    }
});