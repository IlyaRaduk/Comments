import countComments from "./countComments.js";

export default function removeCommemt() {
    let comments = document.querySelector('.comments__colomns');
    comments.addEventListener('click', (e) => {
        if (!e.target.parentElement.classList.contains('comments__remove')) return;
        let comment = e.target.closest('.comments__item');
        comment.remove();
        countComments();
    })
}
