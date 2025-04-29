// Quiz Questions (using options array and correct index)
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "London"],
        correct: 2
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    },
    {
        question: "Who is the CEO of Tesla?",
        options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
        correct: 1
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Management Language"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

// Load the current question and options
function loadQuestion() {
    const questionObj = questions[currentQuestion];
    document.getElementById("questionText").innerText = questionObj.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionObj.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${index}">
            ${option}
        `;
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement("br"));
    });
}

// Handle Next button click
function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    const answer = parseInt(selected.value);
    if (answer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

// Display final score
function showScore() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz Finished</h2>
        <p>Your score is: ${score} / ${questions.length}</p>
    `;
}

// Initialize quiz
window.onload = loadQuestion;
