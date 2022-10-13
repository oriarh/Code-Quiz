var startquiz = document.getElementById("startquiz");
var startseconds = 75;
var countdowntimer = document.getElementById("countdown");
const questions = document.getElementById("instructions");
var globalQuestionCounter = 0;
var result = document.getElementById("result");
var scores = [];

//Defined objects for each question with keys (question, answer & correct answer)

const question1 = {
    question: "Arrays in JavaScript can be used to store ________.",
    answers: {
        1: "Numbers and Strings",
        2: "Other Arrays",
        3: "Booleans",
        4: "All of the Above"
    },
    correctAnswer: "All of the Above"
};

const question2 = {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    answers: {
        1: "Commas",
        2: "Curly Brackets",
        3: "Quotes",
        4: "Parenthesis",
    },
    correctAnswer: "Quotes"
};

const question3 = {
    question: "Commonly used data types DO NOT include:",
    answers: {
        1: "Strings",
        2: "Booleans",
        3: "Alerts",
        4: "Numbers",
    },
    correctAnswer: "Alerts"
};

const question4 = {
    question: "The condition of an if/else statement is enclosed with:",
    answers: {
        1: "Quotes",
        2: "Curly Brackets",
        3: "Parenthesis",
        4: "Square Brackets",
    },
    correctAnswer: "Parenthesis"
};

const question5 = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
        1: "JavaScript",
        2: "Terminal/Bash",
        3: "for Loops",
        4: "Console.log",
    },
    correctAnswer: "Console.log"
};

const questionList = [question1, question2, question3, question4, question5];

//assigning code to the start quiz button
startquiz.addEventListener("click", function () {
    startthetimer();
    forQuestions();
});



//Changes questions in a loop after the quiz has started
//assigning code to the start quiz button
var changeQuestion = document.getElementById("quiz")
changeQuestion.addEventListener("click", function (event) {
    if (event.target.textContent === "Submit") {
        questions.textContent = "High Scores";
        result.style.display = "none";
        document.getElementById("initialssubmit").style.display = "none";
        var inputinitialss = document.getElementById("styleforquestions");
        inputinitialss.style.backgroundColor = "lightgray";
        inputinitialss.readOnly = true;
        let optionButtons = document.createElement("button");
        optionButtons.textContent = "Go back";
        optionButtons.setAttribute("type", "button");
        optionButtons.setAttribute("class", "options");
        optionButtons.setAttribute("id","goBack")
        optionButtons.style.display = "block";
        optionButtons.style.marginLeft = "191px";
        optionButtons.style.marginTop = "20px";
        document.getElementById("quiz").appendChild(optionButtons);

        let Clearhighscores = document.createElement("button");
        Clearhighscores.textContent = "Clear high scores";
        Clearhighscores.setAttribute("type", "button");
        Clearhighscores.setAttribute("class", "options");
        Clearhighscores.setAttribute("id","clearHighScores")
        Clearhighscores.style.display = "inline";
        Clearhighscores.style.marginLeft = "191px";
        Clearhighscores.style.marginTop = "-1px ";
        document.getElementById("quiz").appendChild(Clearhighscores);
    }
    else if (event.target.textContent === "Go back") {
        document.getElementById("goBack").addEventListener("click",function(){
            window.location.reload(true); 

        })}

    else if (event.target.textContent === "Clear high scores") {
        document.getElementById("clearHighScores").addEventListener("click",function(){
            alert("When I wrote this code, only me and God knew how it works. Now only God knows.")
        });
    }

    else if(event.target.nodeName === "BUTTON") {
        var buttontext = event.target.textContent;
        var activequestion = questionList[globalQuestionCounter-1];
        if(buttontext != activequestion.correctAnswer) {
            startseconds-=10;
            result.textContent = "Wrong";
        }
        else {
            result.textContent = "Correct!"
        }
        console.log(buttontext,activequestion.correctAnswer);
        forQuestions();
        result.style.display = "flex";
    }
}
);   


//when startquiz is clicked
//Then the times starts decreasing by 1 and shows up in HTML
function startgame() {
    if (startseconds >=1) {
        startseconds--;
    countdowntimer.textContent = startseconds;
    }
};

function startthetimer() {
    setInterval(startgame, 1000);
};

function forQuestions() {
    if (globalQuestionCounter >= questionList.length) {
        // present results
        codingQuizchallenge = document.querySelector("#mainHeading");
        codingQuizchallenge.setAttribute ("class","styleforquestions");
        codingQuizchallenge.style.marginLeft = "192px";
        codingQuizchallenge.style.display = "block";
        codingQuizchallenge.textContent = "All done!";
        questions.style.marginTop = "30px";
        var answerList = document.getElementById("ol");
        answerList.style.display = "none";
        //Creating the input bar to enter initials
        var inputinitials = document.createElement("input");
        inputinitials.setAttribute("type","text");
        inputinitials.setAttribute("id","styleforquestions");
        inputinitials.setAttribute("placeholder","Enter initials Here")
        inputinitials.style.marginTop = "27px";
        document.getElementById("quiz").appendChild(inputinitials);
        inputinitials.setAttribute("class","styleforquestions");
        inputinitials.style.marginRight = "1px";
        inputinitials.style.display = "inline";
        //Creating the button to submit initials
        let optionButtons = document.createElement("button");
        optionButtons.textContent = "Submit";
        optionButtons.setAttribute("type", "button");
        optionButtons.setAttribute("class", "options");
        optionButtons.style.display = "inline";
        optionButtons.setAttribute("id", "initialssubmit")
        optionButtons.addEventListener("click",function(){
            scores.push({
                initials: inputinitials.value,
                score: startseconds,
            })
            localStorage.setItem("scores",JSON.stringify(scores));    
        });
        document.getElementById("quiz").appendChild(optionButtons);
        showhighscore();
        var endtime = document.getElementById("time");
        endtime.style.display = "none";

    } else {
        codingQuizchallenge = document.querySelector("#mainHeading");
        codingQuizchallenge.style.display = "none";
        startquiz.style.display = "none";
        let myQuestion = questionList[globalQuestionCounter++];
        questions.textContent = myQuestion.question;
        questions.setAttribute("class","styleforquestions")
        var answerList = document.getElementById("ol");

        // if there no existing OL element, then create one.
        if (answerList == null){
            answerList = document.createElement("ol");
            document.getElementById("quiz").appendChild(answerList);
            answerList.setAttribute("id", "ol");

        //if there is an existing OL, then remove its child (the option buttons for the previous question)
        } else {
            while (answerList.firstChild) {
                answerList.removeChild(answerList.firstChild);
            }
        }

        for (i = 1; i < 5; i++) {
            let optionButtons = document.createElement("button");
            optionButtons.textContent = myQuestion.answers[i];
            optionButtons.setAttribute("type", "button");
            optionButtons.setAttribute("class", "options");
            optionButtons.setAttribute("id", "options" + i)
            answerList.appendChild(optionButtons);
        };
    };
};

function showhighscore() {
        var highscore = countdowntimer.textContent;
        var wronghighscore = startseconds;
        if (result.textContent != "Correct!") {
            questions.textContent = "Your high score is " + wronghighscore;
        }
        else {
            questions.textContent = "Your high score is " + highscore;
        };
}