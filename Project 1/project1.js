// Color Picker Function
function showColorName(color) {
    document.getElementById("colorName").textContent = "This color is " + color + "!";
}

// Slideshow Functionality
const images = ["number1.jpg", "number2.jpg", "number3.jpg"];
let currentSlide = 0;

function showSlide(index) {
    const slideImage = document.getElementById("slideImage");
    if (slideImage) {
        slideImage.src = images[index];
        slideImage.alt = `Number ${index + 1}`;
    }
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : images.length - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide < images.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

// Initialize the slideshow by showing the first image
document.addEventListener("DOMContentLoaded", function () {
    showSlide(currentSlide);
});
let currentQuestionIndex = 0;

const quizQuestions = [
    {
        question: "What sound does a cow make?",
        options: ["Meow", "Moo", "Woof", "Quack"],
        answer: "Moo"
    },
    {
        question: "Which animal is known for barking?",
        options: ["Cat", "Dog", "Bird", "Cow"],
        answer: "Dog"
    },
    {
        question: "Which animal says 'Meow'?",
        options: ["Dog", "Cat", "Sheep", "Duck"],
        answer: "Cat"
    },
    {
        question: "Which animal has black and white stripes?",
        options: ["Lion", "Zebra", "Elephant", "Cow"],
        answer: "Zebra"
    },
    {
        question: "What animal has a long trunk?",
        options: ["Dog", "Elephant", "Cat", "Bird"],
        answer: "Elephant"
    },
    {
        question: "Which animal is big and has a mane?",
        options: ["Tiger", "Lion", "Giraffe", "Bear"],
        answer: "Lion"
    },
    {
        question: "Which animal has a long neck and eats leaves?",
        options: ["Elephant", "Monkey", "Giraffe", "Cat"],
        answer: "Giraffe"
    },
    {
        question: "Which animal is small, yellow, and says 'Quack'?",
        options: ["Duck", "Dog", "Elephant", "Cat"],
        answer: "Duck"
    },
    {
        question: "What animal can fly and sings?",
        options: ["Fish", "Bird", "Dog", "Horse"],
        answer: "Bird"
    }
];

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = ""; // Clear previous options
    
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("next-question-btn").style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    const feedback = document.getElementById("quiz-feedback");

    if (selectedOption === correctAnswer) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Oops! The correct answer is "${correctAnswer}".`;
        feedback.style.color = "red";
    }

    // Show the Next Question button
    document.getElementById("next-question-btn").style.display = "inline";
}

function loadNextQuestion() {
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        currentQuestionIndex = 0; // Restart quiz
    }
    loadQuestion();
}

// Initialize the quiz by loading the first question
document.addEventListener("DOMContentLoaded", loadQuestion);


function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = ""; // Clear previous options
    
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("next-question-btn").style.display = "none";
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    const feedback = document.getElementById("quiz-feedback");

    if (selectedOption === correctAnswer) {
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Incorrect. The correct answer is "${correctAnswer}".`;
        feedback.style.color = "red";
    }

    // Show the Next Question button
    document.getElementById("next-question-btn").style.display = "inline";
}

function loadNextQuestion() {
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
        currentQuestionIndex = 0; // Restart quiz
    }
    loadQuestion();
}

// Initialize the quiz by loading the first question
document.addEventListener("DOMContentLoaded", loadQuestion);

function showShapeInfo(shape, info) {
    // Set shape name and information
    document.getElementById("shapeName").textContent = shape;
    document.getElementById("shapeInfo").textContent = info;

    // Display the modal
    document.getElementById("shapeModal").style.display = "block";
}

function closeModal() {
    // Hide the modal
    document.getElementById("shapeModal").style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("shapeModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
