// logic.js

document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("start");
    var timeElement = document.getElementById("time");
    var questionTitleElement = document.getElementById("question-title");
    var choicesElement = document.getElementById("choices");
    var feedbackElement = document.getElementById("feedback");
    var initialsInput = document.getElementById("initials");
    var submitButton = document.getElementById("submit");
  
    var currentQuestionIndex = 0;
    var score = 0;
    var timeLeft = 30;
    var timerInterval;
  
    startButton.addEventListener("click", startQuiz);
  
    function startQuiz() {
      startButton.parentElement.classList.add("hide");
      document.getElementById("questions").classList.remove("hide");
      loadQuestion();
  
      timerInterval = setInterval(function() {
        timeLeft--;
        timeElement.textContent = timeLeft;
  
        if (timeLeft <= 0) {
          endQuiz();
        }
      }, 1000);
    }
  
    function loadQuestion() {
      var currentQuestion = questions[currentQuestionIndex];
  
      questionTitleElement.textContent = currentQuestion.question;
      choicesElement.innerHTML = "";
  
      currentQuestion.choices.forEach(function(choice) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", function() {
          checkAnswer(choice, currentQuestion.correctAnswer);
        });
  
        choicesElement.appendChild(choiceButton);
      });
    }
  
    function checkAnswer(selectedAnswer, correctAnswer) {
      if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
      } else {
        feedbackElement.textContent = "Incorrect!";
        timeLeft -= 10;
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }
  // Event listener for the clear button
    function endQuiz() {
      clearInterval(timerInterval);
  
      document.getElementById("questions").classList.add("hide");
      document.getElementById("end-screen").classList.remove("hide");
  
      document.getElementById("final-score").textContent = score;
    }
  
    // Logic for handling high scores

    // Example: Display high scores

    submitButton.addEventListener("click", function() {
      var initials = initialsInput.value.trim();
  
      if (initials !== "") {
        // Store the score and initials in localStorage
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
        highscores.push({ initials: initials, score: score });
        localStorage.setItem("highscores", JSON.stringify(highscores));
  
        // Redirect to highscores page
        window.location.href = "highscores.html";
      }
    });
  });
  