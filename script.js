const questions = [
    {
        question: "phúc hao la con gi?",
        answers: ["CON CHO", "CON ME may", "CON CAK", "CON CUCU"],
        correctAnswer: 2
    },
    {
        question: "Nước đóng băng ở nhiệt độ nào?",
        answers: ["0°C", "100°C", "50°C", "25°C"],
        correctAnswer: 0
    },
    {
        question: "Nguyên tử nhỏ nhất trong các nguyên tố là?",
        answers: ["Hydro", "Oxi", "Nitơ", "Cacbon"],
        correctAnswer: 0
    },
    
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timer;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuestion.answers[index];
    });

    document.getElementById("time-left").innerText = timeLeft;
    timer = setInterval(countdown, 1000);
}

function selectAnswer(answerIndex) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswer) {
        score++;
        document.getElementById("result-container").innerText = "Đúng!";
    } else {
        document.getElementById("result-container").innerText = "Sai!";
    }
    document.getElementById("next-button").style.display = "block";
}

function countdown() {
    timeLeft--;
    document.getElementById("time-left").innerText = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        selectAnswer(-1); // Automatically move to the next question if time is up
    }
}

function nextQuestion() {
    timeLeft = 15;
    document.getElementById("result-container").innerText = "";
    document.getElementById("next-button").style.display = "none";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("result-container").innerText = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu hỏi.`;
}

window.onload = showQuestion;
