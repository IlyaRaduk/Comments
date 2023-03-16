const form = document.querySelector('.form');

export default function validation() {
    let result = true;
    if (!form.firstName.value) {
        document.querySelector('.form__name').classList.add('error');
        result = false;
    }
    if (!form.comments.value) {
        document.querySelector('.form__comments').classList.add('error')
        result = false;
    }
    return result;
}