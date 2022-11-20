import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`)
const textArea = document.querySelector(`.feedback-form textarea`);
const mailForm = document.querySelector(`.feedback-form input`)

const STORAGE_KEY = "feedback-form-state"

let formData = {};

form.addEventListener(`submit`, onFormSubmit);

populateTextarea();
populateMail();

form.addEventListener(`input`, throttle(addLocal, 500))

function addLocal(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function onFormSubmit(e) {
    e.preventDefault();

    localStorage.getItem(STORAGE_KEY)
    console.log(formData)

    e.currentTarget.reset();

    formData = {};
    localStorage.removeItem(STORAGE_KEY)
};


// function onTextareaInput(e) {
//     const message = e.target.value;
//     // localStorage.setItem(STORAGE_KEY, message)
// };

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    const message = JSON.parse(savedMessage)
    if (savedMessage) {
        textArea.value = message.message;
    }
}

function populateMail() {
    const savedMail = localStorage.getItem(STORAGE_KEY)
    const mail = JSON.parse(savedMail)
    if (savedMail) {
        mailForm.value = mail.email;
    }
}