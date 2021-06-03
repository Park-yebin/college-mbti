const main = document.querySelector(".main");
const question = document.querySelector('.question');
const status = document.querySelector('.status');
const result = document.querySelector('.result');
const endPoint = 12;
const select = [];

function setResult(){
    let point = calResult();
    const resultType = document.querySelector('.result-type');
    resultType.innerHTML = resultlist[point].type;
    const resultDetail = document.querySelector('.result-detail');
    resultDetail.innerHTML = resultlist[point].detail;
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
    })
    setResult();
}
function addAnswer(answerText, qNum, iNum){
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
        var images = document.querySelectorAll('.img-fluid');
        for(let i = 0; i < images.length; i++){
            images[i].style.display = 'none';
        }
        select[qNum] = iNum;
        goNext(++qNum);
    },false);
}
function goNext(qNum){
    if(qNum === endPoint){
        goResult();
        return;
    }
    var questionImg = document.createElement('img');
    const qImg = document.querySelector('.question-img');
    var imgURL = 'img/img'+ qNum + '.jpg';
    questionImg.src = imgURL;
    questionImg.alt = qNum;
    questionImg.classList.add('img-fluid');
    qImg.appendChild(questionImg);

    var q = document.querySelector('.question-box');
    q.innerHTML = questionlist[qNum].q;
    for(let i in questionlist[qNum].a){
        addAnswer(questionlist[qNum].a[i].answer, qNum, i);
    }
    var status = document.querySelector('.status-bar-matter');
    status.style.width = (100/endPoint)*(qNum+1)+'%'
}
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
function calResult(){
    var pointArray = [
        { type: '인간알람형', value: 0, key: 0 },
        { type: '오늘은 자체휴강각이다형', value: 0, key: 1 },
        { type: '리액션장인 나야나형', value: 0, key: 2 },
        { type: '대인관계만렙형', value: 0, key: 3 },
        { type: '본투비조장형', value: 0, key: 4 },
        { type: '혹시 물이세요형', value: 0, key: 5 },
        { type: '그냥 제가 할게요형', value: 0, key: 6 },
        { type: '호기심폭발 새내기형', value: 0, key: 7 },
        { type: '말하는 감자형', value: 0, key: 8 },
        { type: '니 이름이 왜 여기서 나와형', value: 0, key: 9 },
        { type: '내추럴본서포터형', value: 0, key: 10 },
        { type: '평화주의 한량형', value: 0, key: 11 },
        { type: '예비대학원생형', value: 0, key: 12 },
        { type: '프로팩폭러형', value: 0, key: 13 },
        { type: '도서관지박령형', value: 0, key: 14 },
        { type: '친구한정 흥부자형', value: 0, key: 15 }
    ]
    for(let i = 0; i < endPoint; i++){
        var target = questionlist[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++){
            for(let k = 0; k < pointArray.length; k++){
                if (target.type[j] === pointArray[k].type){
                    pointArray[k].value += 1;
                }
            }
        }
    }
    var resultArray = pointArray.sort(function (x,y){
        if(x.value > y.value){
            return -1;
        }
        if (x.value < y.value){
            return 1;
        }
        return 0;
    });
    let resultType = resultArray[0].key;
    return resultType;
}