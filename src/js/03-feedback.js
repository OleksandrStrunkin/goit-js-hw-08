import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`)
const textArea = document.querySelector(`.feedback-form textarea`);
const mailForm = document.querySelector(`.feedback-form input`)

const STORAGE_KEY = "feedback-form-state"

let formData = {};

form.addEventListener(`submit`, onFormSubmit);



form.addEventListener(`input`, throttle(addLocal, 500))

populateData();

function addLocal(e) {
    const email = mailForm.value;
    const message = textArea.value;
    formData = { email, message };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function onFormSubmit(e) {
    e.preventDefault();

    localStorage.getItem(STORAGE_KEY)
    console.log(formData)

    e.currentTarget.reset();

    formData = {};
    localStorage.removeItem(STORAGE_KEY)
};

function populateData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const data = JSON.parse(savedData);
    if (savedData) {
        textArea.value = data.message;
        mailForm.value = data.email;
    }
}