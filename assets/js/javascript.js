// set questions & answers
var allQuestions = [

    {  // Question 1 -- index=0
        question: "Commonly used data types DO NOT include:",
        answers: ['strings', 'booleans', 'alerts', 'numbers'],
        correctAnswer: 'alerts'
    },

    {  // Question 2 -- index=1
        question: "The condition in an if / else statement is enclosed within _______.",
        answers: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        correctAnswer: 'parenthesis'
    },


    {  // Question 3 -- index=2
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: ['commas', 'curly brackets', 'quotes', 'parentheses',],
        correctAnswer: 'quotes'
    },


    { // Question 4 -- index=3
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        correctAnswer: 'console.log'
    },
];

//variables
var counter = 0;
var time = 90;
var timerId;
var scoretotal = 0;

// hide results
var results = document.getElementById("results");
console.log(results);
results.setAttribute("style", "display: none;");

// hide leaderboard
document.getElementById("leaderboard").style.display = 'none';

// set timer once start button is clicked to 1 minute
function timer() {
    timerId = setInterval(function () {
        document.getElementById("timer").textContent = time;
        time--;
        if (time === 0) {
            finalscore();
        }
    }, 1000);
}

// hide questions, show final score and initials field
function finalscore() {
    clearInterval(timerId);
    //hide questions div & show results
    document.getElementById("questions").style.display = 'none';
    document.getElementById("results").style.display = 'block';

    //show final score div
    var finalScoreEl = document.getElementById("score")
    finalScoreEl.textContent = `Final Score: ${scoretotal}`



    var inputVal = document.getElementById("initials");

    var submitbtn = document.getElementById("submit")
    submitbtn.addEventListener('click', () => {
        // hide results - show leaderboard
        document.getElementById("results").style.display = 'none';
        document.getElementById("leaderboard").style.display = 'block';
        var leaderboardString = inputVal.value + ' - ' + scoretotal + '/4'
        console.log(leaderboardString)

        // set local storage
        localStorage.setItem(`${inputVal.value}-score`, JSON.stringify(leaderboardString));
    }
    )

    // window.localStorage.getItem(leaderboardString);


    // show results page including your score and request for initials, hide next show submit

    // show leaderboard with prior 3 submissions, hide submit show try again button
}

function checkAnswer() {
    var userAns = this.getAttribute("data-text");
    console.log(userAns);

    // CORRECT ANSWER
    if (userAns === allQuestions[counter].correctAnswer) {
        // change from alert to highlighting correct answer and red if wrong
        alert('Correct');
        // add one to counter
        counter++;
        console.log(counter)
        scoretotal++
        console.log(scoretotal)
        // if counter is greater than <4 then show the next question
        if (counter < 4) {
            displayQuestion()
        }
        // if counter is <4 then show final score and initials field
        else {
            finalscore();
            console.log(finalscore)
        }
    }

    // INCORRECT ANSWER
    else {
        // change from alert to highlighting correct answer and red if wrong
        alert("Incorrect");
        time = time - 5;
        counter++;
        if (counter < 4) {
            displayQuestion()
        }
        else {
            // function final score & initials
            finalscore();
        }
    }
}

function displayQuestion() {
    document.getElementById("questions").textContent = "";
    var h4 = document.createElement("h4");
    h4.textContent = allQuestions[counter].question;
    document.getElementById("questions").append(h4);

    for (var i = 0; i < allQuestions[counter].answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = allQuestions[counter].answers[i];
        btn.setAttribute("data-text", allQuestions[counter].answers[i]);
        btn.onclick = checkAnswer;
        document.getElementById("questions").append(btn);
    }
}

document.getElementById('start').addEventListener('click', function () {
    document.getElementById("introduction").style.display = "none";
    document.getElementById("questions");
    timer();
    displayQuestion();
})



// credit to doug in README :)
// credit tutor in README :)
// credit w3 schools


