const form = document.querySelector('.form');
export default function setDate() {
    let date = new Date();
    form.day.value = date.getDate();
    form.month.value = date.getMonth() + 1;
    form.year.value = date.getFullYear();
}