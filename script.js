function answerQuestion(answer, currentQuestionId, nextQuestionId) {
    // Display the response
    var responseContainer = document.getElementById('response-container');
    
    // If there is a next question, show the "Your answer" message
    if (nextQuestionId) {
        responseContainer.innerHTML = 'Your answer: ' + answer;
    }

    // Hide the current question
    var currentQuestion = document.getElementById(currentQuestionId);
    currentQuestion.style.display = 'none';

    // Show the next question or Love you message
    var nextQuestion = document.getElementById(nextQuestionId);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    } else {
        // No more questions, display "Love you" message
        responseContainer.innerHTML = "Yay, you are awesome for playing along! Got a question for me? I'm all ears and ready to spill some tea! ☕️💖 ";
        document.querySelector('.love-you').style.display = 'block';
    }
}

function disableButton(answer, buttonId) {
    // Display a cute message
    var responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = 'Aww, you chose ' + answer + '! This button needs a break, but click Yes to continue!';

    // Disable the button
    var button = document.getElementById(buttonId);
    button.disabled = true;
}


function showCompliments() {
    var introText = document.getElementById('questionIntro');
    var proceedButton = document.getElementById('proceedButton');
    var hiLove = document.getElementById('hiLove');
    var intro = document.getElementById('intro');

    introText.style.display = 'none';
    proceedButton.style.display = 'none';
    hiLove.style.display = 'none';
    intro.style.display = 'none';

    var complimentsContainer = document.querySelector('.compliments-container');
    complimentsContainer.style.display = 'block';

}


function showQuestions() {
    var complimentsContainer = document.querySelector('.compliments-container');
    complimentsContainer.style.display = 'none';

    var questionsContainer = document.querySelector('.questions-container');
    questionsContainer.style.display = 'block';
}

document.getElementById('proceedButton').addEventListener('click', showCompliments);
document.getElementById('proceedToQuestionsButton').addEventListener('click', showQuestions);

var backgroundMusic = document.getElementById('backgroundMusic');

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}

// Function to show the notification popup
function showNotification() {
    var notificationPopup = document.getElementById('notification-popup');
    notificationPopup.style.display = 'block';
}

// Function to close the notification popup
function closeNotification() {
    var notificationPopup = document.getElementById('notification-popup');
    notificationPopup.style.display = 'none';
}

// Call the showNotification function when the page loads (you can adjust the timing)
window.onload = function () {
    setTimeout(showNotification, 2000); // Display after 2 seconds (adjust as needed)
};
