const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const age = document.getElementById('age');
const role = document.getElementById('dropdown');
let count = 0;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidName = username => {
    const re = /^[A-Za-z]+$/;
    return re.test(String(username).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const ageValue = age.value.trim();
    const roleValue = role.value.trim();

    if(usernameValue === '') {
        setError(username, '*Name is required');
    } else if (!isValidName(usernameValue)) {
        setError(username, '*Name should contain characters only');
    } else if (usernameValue.length < 3) {
        setError(username, '*Length should be greater than 3');
    } else {
        setSuccess(username);
        count++;
    }

    if(emailValue === '') {
        setError(email, '*Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Email id should be valid');
    } else {
        setSuccess(email);
        count++;
    }

    if(numberValue === '') {
        setError(number, '*Number is required');
    } else if (numberValue.length < 10 ) {
        setError(number, '*Number should be valid')
    } else {
        setSuccess(number);
        count++;
    }

    if(ageValue === '') {
        setError(age, '*Age is required');
    } else if (ageValue < 0) {
        setError(age, '*Age should not be negetive');
    } else {
        setSuccess(age);
        count++;
    }

    if(roleValue == 'Select your current role') {
        setError(role, '*Required')
    }
    else {
        setSuccess(role);
        count++;
    }

    let gender1 = document.getElementById('gender1')
    let gender2 = document.getElementById('gender2')
    let gender3 = document.getElementById('gender3')
    let text = document.getElementById('gen');
    if (!gender1.checked && !gender2.checked && !gender3.checked) {
        text.innerHTML='*Required';
    } else{
        text.innerHTML='';
        count++;
    }

    let rate1 = document.getElementById('rate1')
    let rate2 = document.getElementById('rate2')
    let rate3 = document.getElementById('rate3')
    let rate4 = document.getElementById('rate4')
    let rate5 = document.getElementById('rate5')
    let text1 = document.getElementById('rat');
    if (!rate1.checked && !rate2.checked && !rate3.checked && !rate4.checked && !rate5.checked) {
        text1.innerHTML='*Required';
    } else{
        text1.innerHTML='';
        count++;
    }

    let choose1 = document.getElementById('choose1')
    let choose2 = document.getElementById('choose2')
    let choose3 = document.getElementById('choose3')
    let choose4 = document.getElementById('choose4')
    let choose5 = document.getElementById('choose5')
    let text2 = document.getElementById('ques');
    if (!choose1.checked && !choose2.checked && !choose3.checked && !choose4.checked && !choose5.checked) {
        text2.innerHTML='*Required';
    } else{
        text2.innerHTML='';
        count++;
    }

    let option1 = document.getElementById('option1')
    let option2 = document.getElementById('option2')
    let option3 = document.getElementById('option3')
    let text3 = document.getElementById('rec');
    if (!option1.checked && !option2.checked && !option3.checked) {
       text3.innerHTML='*Required';
    } else{
        text3.innerHTML='';
        count++;
    }

    if(count == 9){
        alert('Form Submitted Successfully');
    } else {
        count = 0;
    }
};