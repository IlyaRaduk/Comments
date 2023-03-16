export default function countComments() {
    let counts = document.querySelectorAll('.comments__item').length;
    const lastOne = counts % 10;
    const lastTwo = counts % 100;
    let str = '';
    if (lastTwo > 10 && lastTwo < 15) {
        str = ' комментариев';
    }
    else if (lastOne == 1) {
        str = 'комментарий';
    }
    else if (lastOne > 1 && lastOne < 5) {
        str = 'комментария';
    }
    else {
        str = ' комментариев';
    }
    let title = document.querySelector('.comments__count');
    title.innerHTML = counts + " " + str;
}
