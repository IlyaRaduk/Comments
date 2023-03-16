export default function likeSwitch() {
    let likes = document.querySelectorAll('.comments__like');
    for(let like of likes){
        like.addEventListener('click',(e)=>{
            e.target.classList.toggle('like-active')
        })
    }
}

export  function newLikeSwitch() {
    document.querySelectorAll('.comments__like')[0].addEventListener('click',(e)=>{
        e.target.classList.toggle('like-active')
    });
}