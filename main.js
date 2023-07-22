let body = document.querySelector('body');
let questionDiv = document.getElementById('question');
let scoreDiv = document.getElementById('score');
let streakDiv = document.getElementById('streak');
let trueDiv = document.getElementById('trueTest');
let falseDiv = document.getElementById('falseTest');
let reset = document.getElementById('reset');
let resetGame = document.getElementById('resetGame');

body.append(questionDiv)

let tracker = -1;
let score = 0;
let streak = 0;
let tries = 0;
let allQuestions;

function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=50&type=boolean')
        //https://opentdb.com/api.php?amount=25&category=9&difficulty=easy&type=boolean
        .then((data) => data.json())
        .then((data) => {
            allQuestions = Object.values(data)[1];
            handler();
            console.log(allQuestions)
        })
};

function handler() {
    tracker++;
    questionDiv.innerHTML = allQuestions[tracker].question;
    scoreDiv.innerHTML = `HIGH SCORE: ${score}`;
    streakDiv.innerHTML = `W/L ratio: ${(score / tries).toFixed(2)}`;
};

function answerTrue() {
    if (allQuestions[tracker].correct_answer === 'True') {
        score++;
        tries++;
        handler();
    }
    else {
        tries++;
        handler();
    }
}

function answerFalse() {
    if (allQuestions[tracker].correct_answer === 'False') {
        score++;
        tries++;
        handler();
    }
    else {
        tries++;
        handler();
    }
}

function resetScore() {
    score = 0;
    tries = 0;
    scoreDiv.innerHTML = `HIGH SCORE: ${score}`;
    streakDiv.innerHTML = `W/L ratio: ${(score / tries).toFixed(2)}`;
}

function resetGameFunc() {
    window.location.href = "starterPage.html";
}


document.addEventListener('DOMContentLoaded', getQuestions);
trueDiv.addEventListener('click', answerTrue);
falseDiv.addEventListener('click', answerFalse);
reset.addEventListener('click', resetScore);
resetGame.addEventListener('click', resetGameFunc);