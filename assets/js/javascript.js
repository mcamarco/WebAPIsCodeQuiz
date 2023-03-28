
// Click start button to begin quiz
    // set time once start button is clicked to 1 minute

// set questions & answers
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

// correct (highlight green), wrong (highlight red) and notification 

// automatically move to the next question || show the next button

// WRONG ANSWER
    // incorrect answer = time -5 seconds (subtracted from the clock)

// GAME OVER
    // all questions answered OR time reaches 0 =  game over.
        // if questions id = 3 
        // OR if timer reaches 0 then
        // then show submit button, hide next button  

// Calculate 'correct answers/total questions' for score 

// enter initials for leader board

// organize leader board array by highest score & update initials -- if initials already exist, replace with new score

// set try again button with quiz function


 