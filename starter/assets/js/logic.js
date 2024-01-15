// logic.js
    // Logic for handling questions and high scores
    // Example: Display questions and high scores

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
  
    // Listen to click button to start the quiz
    startButton.addEventListener("click", startQuiz);

    //Play correct and incorrect sound
    // function playSound(correct) {
    //     const audio = new Audio(`./assests/sfx${correct.wav}`);
    //     audio.play();
    //   }

    //   function playSound(incorrect) {
    //     const audio = new Audio(`./assests/sfx${incorrect.wav}`);
    //     audio.play();
    //   }
  
    // Import the questions array
    function startQuiz() {
        // Hide the start screen
      startButton.parentElement.classList.add("hide");
      // Show the questions screen
      document.getElementById("questions").classList.remove("hide");
      loadQuestion();
  
        // Start the timer
      timerInterval = setInterval(function() {
        timeLeft--;
        timeElement.textContent = timeLeft;
  
        if (timeLeft <= 0) {
            // end the quiz
          endQuiz();
        }
      }, 1000);
    }
  
    // Function to display questions
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
   // Function to check the answer
    function checkAnswer(selectedAnswer, correctAnswer) {
      if (selectedAnswer === correctAnswer) {
        // Correct answer
        feedbackElement.textContent = "Correct!";
        score++;
      } else {
            // Incorrect answer, subtract time
        feedbackElement.textContent = "Incorrect!";
        timeLeft -= 10;
      }
  // Move to the next question
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        // Function to end the quiz
        endQuiz();
      }
    }
    // End quiz function when condition is met
  
    function endQuiz() {
      clearInterval(timerInterval);
  
      document.getElementById("questions").classList.add("hide");
      document.getElementById("end-screen").classList.remove("hide");
  
      document.getElementById("final-score").textContent = score;
    }
  
    // Event listener for submit button

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
  