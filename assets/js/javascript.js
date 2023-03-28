
// allQuestions.question
// allQuestions[0].answers[
// forloop(questions - answers)


// Click start button and timer starts as a question is presented


// set questions
var allQuestions = [

    {  // Question 1 -- index=0
        question: ["Commonly used data types DO NOT include:"],
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 'alerts - correctAnswer1'
    },

    {  // Question 2 -- index=1
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correctAnswer: 'correctAnswer2'
    },


    {  // Question 3 -- index=2
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        correctAnswer: 'correctAnswer3'
    },


    { // Question 4 -- index=3
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correctAnswer: 'correctAnswer4'
    },

];

// Once a question is answered, show if its correct or wrong then automatically move to the next question.

// If a question is answered incorrectly, time is subtracted from the clock.

// When all the questions are answered or the time reaches 0, the game is over.

// Calculate correct/total for score
 