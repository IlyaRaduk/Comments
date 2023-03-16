import countComments from "./countComments.js";
import likeSwitch from "./likeSwitch.js";
import removeCommemt from "./removeCommemt.js";
import addComments from "./addComments.js";
import setDate from "./setDate.js";

document.addEventListener('DOMContentLoaded', () => {
    countComments();
    likeSwitch();
    removeCommemt();
    addComments();
    setDate();
})

const inputs = document.querySelectorAll('.form__input')
for (let input of inputs) {
    input.addEventListener('input', (e) => {
        if (e.target.closest('.error')) e.target.closest('.error').classList.remove('error');
    })
}
