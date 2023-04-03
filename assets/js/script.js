console.log('connected');

//Html elements
var timerEl = document.querySelector('#timer');
var quizStartBtn = document.querySelector('#startQuiz');

//Global variables
var timeLeft;

//Start Quiz Function
quizStartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    quizStartBtn.style.display = 'none';
    timeLeft = 10;
    timerEl.textContent = timeLeft;
    startTimer();
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

