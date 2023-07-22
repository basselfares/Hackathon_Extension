let body = document.querySelector('body');
let questionDiv = document.getElementById('question');
let scoreDiv = document.getElementById('score');
let streakDiv = document.getElementById('streak');
let trueDiv = document.getElementById('trueTest');
let falseDiv = document.getElementById('falseTest');
let reset = document.getElementById('reset');

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


document.addEventListener('DOMContentLoaded', getQuestions);
trueDiv.addEventListener('click', answerTrue);
falseDiv.addEventListener('click', answerFalse);
reset.addEventListener('click', resetScore);




// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://opentdb.com/api.php?amount=50&type=boolean')
//         .then((data) => data.json())
//         .then((data) => {
//             // let allQuestions = [];
//             let newDiv = document.createElement('div');
//             let objVal = Object.values(data);
//             questionDiv.append(newDiv);
//             newDiv.innerHTML = objVal[1][0].question;
//             // allQuestions.push(objVal.question);
//             console.log(objVal[1][0]);
//             console.log(allQuestions);
//             // Object.values(data).forEach((element, index) => {
//             //     if (typeof element === 'object') {
//             //         let newDiv = document.createElement('div');
//             //         questionDiv.append(newDiv);
//             //         newDiv.innerHTML = element[0].question;
//             //         allQuestions.push(element[0].question)
//             //         console.log(element)
//             //     }
//             // });
//         })
// });














// let riddle = ''
// fetch('https://riddles-api.vercel.app/random')
// .then(riddles => riddles.json())
// .then(riddles => {
//   let riddle = JSON.stringify(riddles);
// })

// body.style.backgroundColor = 'blue';
// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("change-color-button");
//     button.onclick = function () {
//         body.style.backgroundColor = 'blue';
//         // let queryOptions = { active: true, lastFocusedWindow: true };
//         // let tab = chrome.tabs.query(queryOptions);
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             // Toggle the pinned status
//             let current = tabs[0]
//             console.log(`Tab ID is ${current.id}`)
//             current.style.backgroundColor = 'blue';
//             // chrome.tabs.update(tabs[0].id, { type: "change-color" });
//             chrome.tabs.update(current.id, { 'background-color': "red" });
//             // document.body.style.backgroundColor = "red";
//         })
//     }
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.getElementById("change-color-button");
//     button.addEventListener("click", () => {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             chrome.tabs.sendMessage(tabs[0].id, { type: "change-color" });
//         });
//     });
// });