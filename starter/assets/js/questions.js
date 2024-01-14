// Array of questions with choices and correct answers
var questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyperlink and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Javascript is an _______ language??",
        choices: ["Oject-Oriented", "Oject-Based", "Procedural", "None of the above"],
        correctAnswer: "Oject-Oriented"
      },
      {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["Var", "let", "Both A amd B", "None of the above"],
        correctAnswer: "Both A amd B"
      },
      {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["getElementbyId()", "getElementByClassName()", "Both A amd B", "None of the above"],
        correctAnswer: "Both A amd B"
      },
      {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        choices: ["Throws an error", "Ignores the stements", "Gives a warning", "None of the above"],
        correctAnswer: "Ignores the stements"
      },
      {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        correctAnswer: "All of the above"
      },
      
      {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        correctAnswer: "const"
      },

      
      {
        question: "What will be the output of the following code snippet a=5+NineInNumber?" ,
        choices: ["Compilation Error", "14", "Runtime Error", "5NineInNumber"],
        correctAnswer: "5NineInNumber"
      },

      {
        question: "What keyword is used to check whether a given property is valid or not?" ,
        choices: ["in", "is in", "exits", "lies"],
        correctAnswer: "in"
      },
      {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:" ,
        choices: ["Boolean", "Undefined", "Object", "Integer"],
        correctAnswer: "Object"
      },
      {
        question: "Which function is used to serialize an object into a JSON string in Javascript?" ,
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        correctAnswer: "stingyfy()"
      },


  ];
  
  // Export the questions array
  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = questions;
  }
  