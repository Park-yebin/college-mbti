const main = document.querySelector(".main");
const question = document.querySelector('.question');
const status = document.querySelector('.status');
const result = document.querySelector('.result');
const endPoint = 12;

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        question.style.WebkitAnimation = "fadeIn 1s";
        question.style.animation = "fadeIn 1s";
        status.style.WebkitAnimation = "fadeIn 1s";
        status.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            question.style.display = "block";
            status.style.display = "block";
        }, 450)
        let qNum = 0;
        goNext(qNum);
    }, 450);
}
function goNext(qNum){
    if(qNum+1 === endPoint){
        goResult();
    }
    var q = document.querySelector('.question-box');
    q.innerHTML = questionlist[qNum].q;
    for(let i in questionlist[qNum].a){
        addAnswer(questionlist[qNum].a[i].answer, qNum);
    }
    var status = document.querySelector('.status-bar-matter');
    status.style.width = (100/endPoint)*(qNum+1)+'%'
}
function addAnswer(answerText, qNum){
    var a = document.querySelector('.question-answer');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('mx-auto');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll(".answerList");
        for(let i = 0;i < children.length; i++){
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        goNext(++qNum);
    },false);
}
function goResult(){
    question.style.WebkitAnimation = "fadeOut 1s";
    question.style.animation = "fadeOut 1s";
    status.style.WebkitAnimation = "fadeOut 1s";
    status.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            question.style.display = "none";
            status.style.display = "none";
            result.style.display = "block";
        }, 450)
    });
}
