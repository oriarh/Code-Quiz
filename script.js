var startquiz = document.getElementById("startquiz");
var startseconds = 75;
var countdowntimer = document.getElementById("countdown");
var questions = document.getElementById("instructions");

//Defined objects for each question with keys (question,answer & correctanswer)
const question1 = {
    question:"Arrays in JavaScript can be used to store?",
    answers: {
        1: "Numbers and Strings",
        2: "Other Arrays",
        3: "Booleans",
        4: "All of the Above"
    },
    correctAnswer: "4"
};

const question2 = {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
        1: "Commas",
        2: "Curly Brackets",
        3: "Quotes",
        4: "Parenthesis",
    },
    correctAnswer: "3"
};

const question3 = {
    question: "Commonly used data types DO NOT include:",
    answer: {
        1: "Strings",
        2: "Booleans",
        3: "Alerts",
        4: "Numbers",
    },
    correctAnswer: "3"
};

const question4 = {
    question: "The condition of an if/else statement is enclosed with:",
    answers: {
        1: "Quotes",
        2: "Curly Brackets",
        3: "Parenthesis",
        4: "Square Brackets",
    },
    correctAnswer: "3"
};

//assigning code to the start quiz button
startquiz.addEventListener("click",function() {
    startthetimer();
    console.log(startseconds);
    forquestion1();
}
    );

//when startquiz is clicked
//Then the times starts decreasing by 1 and shows up in HTML
function startgame () {
    startseconds--;
    countdowntimer.textContent = startseconds;
};

function startthetimer() {
    setInterval (startgame,1000);
};

//When startquiz is clicked, this function presents the first question
function forquestion1() {
    codingQuizchallenge = document.querySelector("#mainHeading");
    codingQuizchallenge.style.display = "none";
    questions.textContent = question1.question;
    questions.style.display = "block";
    var answerlist1 = document.createElement("ol");
        document.getElementById("quiz").appendChild(answerlist1);
        for (i=0;i,i<5;i++) {
            let li = document.createElement("button");
            li.textContent = question1.answers[i];
            li.style.display = "block";
            li.style.margin = "20px";
            li.setAttribute("type","button");
            li.setAttribute("class","startquiz");
            answerlist1.appendChild(li);
    };
};
