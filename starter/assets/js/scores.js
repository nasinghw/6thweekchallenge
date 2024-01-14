// Logic for handling high scores



// Retrieve high scores from storage (you may need to implement this logic)


// Display high scores

// Event listener for the clear button

// scores.js

document.addEventListener("DOMContentLoaded", function() {
    var highscoresList = document.getElementById("highscores");
    var clearButton = document.getElementById("clear");
  
    // Load and display highscores from localStorage
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(entry) {
      var li = document.createElement("li");
      li.textContent = entry.initials + " - " + entry.score;
      highscoresList.appendChild(li);
    });
  
    clearButton.addEventListener("click", function() {
      // Clear highscores in localStorage
      localStorage.removeItem("highscores");
      highscoresList.innerHTML = "";
    });
  });
  