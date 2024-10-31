// Go to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Popup Modal
const modal = document.getElementById("myModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Slideshow
const images = ["number1.jpg", "number2.jpg", "number3.jpg"];
let currentSlide = 0;

function showSlide(index) {
    const slideImage = document.getElementById("slideImage");
    slideImage.src = images[index];
}

function prevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : images.length - 1;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide < images.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Simple Quiz
function checkAnswer(answer) {
    const feedback = document.getElementById("quizFeedback");
    if (answer === 'square') {
        feedback.textContent = "Correct! A square has 4 equal sides.";
    } else {
        feedback.textContent = "Try again!";
    }
}

// Interactive Color Picker
function showColorName(color) {
    const colorName = document.getElementById("colorName");
    colorName.textContent = "This color is " + color + "!";
}