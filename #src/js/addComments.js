import setDate from "./setDate.js";
import countComments from "./countComments.js";
import validation from "./validation.js";
import {newLikeSwitch} from "./likeSwitch.js";

export default function addComments() {

    const form = document.querySelector('.form');
    const comments = document.querySelector('.comments__colomns')

    function createDate(day, month, year) {
        let date = new Date();
        let diff = date - new Date(year, month - 1, day);
        let hours = date.getHours();
        let min = date.getMinutes();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        if (hours < 10) hours = '0' + min;
        if (min < 10) min = '0' + min;
        if (diff < 86400000) return 'сегодня' + ' ' + hours + ":" + min;
        if (diff >= 86400000 && diff < 172800000) return 'вчера' + ' ' + hours + ":" + min;
        return day + '.' + month + '.' + year.slice(2) + ' ' + hours + ":" + min;
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validation()) return;

        let date = createDate(form.day.value, form.month.value, form.year.value);
        let newComment = document.createElement('div');
        newComment.classList.add('comments__item');
        newComment.innerHTML = `
        <div class="comments__title">
            <div class="comments__name">
                ${form.firstName.value}
            </div>
            <div class="comments__date">
            ${date}
            </div>
            <div class="comments__like">
            </div>
            <div class="comments__remove">
                <img src="./img/remove.gif" alt="remove">
            </div>
        </div>
        <div class="comments__text">
            ${form.comments.value}
        </div>`;
        comments.prepend(newComment);
        form.firstName.value = null;
        form.comments.value = null;
        setDate();
        countComments();
        newLikeSwitch();
    })
}