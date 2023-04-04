console.log('connected');

//Html elements
const timerEl = document.querySelector('#timer');
const quizStartBtn = document.querySelector('#startQuiz');
const questionEL = document.querySelector('#question');
const option1EL = document.querySelector('#option1');
const option2EL = document.querySelector('#option2');
const option3EL = document.querySelector('#option3');
const option4EL = document.querySelector('#option4');

//Global variables
let timeLeft;
let questionArray = [
    { question: 'What does HTML stand for?', 
          option3: '3. Hypertext Markup Language',
          options: [{options: '1. Hypertext Markdown Language'}, {options: '2. Hyper Mark Language'}, {options: '3. Hypertext Markup Language'}, {options: '4. None of the above'}]
        },
        { question: 'Inside which HTML element do we put the javascript?', 
          option3: '3. <script>', 
          options: [{options: '1. <h1>'}, {options: '2. <js>'}, {options: '3. <script>'}, {options: '4. <head>'}]
        },
    ]


//Start Quiz Function
quizStartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    quizStartBtn.style.display = 'none';
    timeLeft = 10;
    timerEl.textContent = timeLeft;
    startTimer();
    displayQuestions();
}


//Timer function
function startTimer() {
var timer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
       timerEl.textContent = 0
       quizStartBtn.style.display = 'visible';
    };
}, 1000);
};

function displayQuestions() {
    questionEL.textContent = questionArray[0].question
    option1EL.textContent = questionArray[0].options[0].options
    option2EL.textContent = questionArray[0].options[1].options
    option3EL.textContent = questionArray[0].options[2].options
    option4EL.textContent = questionArray[0].options[3].options
}

