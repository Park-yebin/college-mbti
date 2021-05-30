const main = document.querySelector(".main");
const question = document.querySelector('.question')

function begin(){
    main.style.WebkitAnimation = "fadeout 1s";
    main.style.animation = "fadeout 1s";
    setTimeout(() => {
        question.style.WebkitAnimation = "fadein 1s";
        question.style.animation = "fadein 1s";
        setTimeout(() => {
            main.style.display = "none";
            question.style.display = "block";
        }, 450)
    }, 450);
    // main.style.display = "none";
    // question.style.display = "block";
}