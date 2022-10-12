var startquiz = document.getElementById("startquiz");
var startseconds = 75;
var countdowntimer = document.getElementById("countdown");
var questions = document.getElementById("instructions");
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

console.log(questionList[0].correctAnswer);

//assigning code to the start quiz button
startquiz.addEventListener("click", function () {
    startthetimer();
    console.log(startseconds);
    // forquestion1();
    forQuestions();
});


var globalQuestionCounter = 0;

//Changes questions in a loop after the quiz has started
var changeQuestion = document.getElementById("quiz")
//assigning code to the start quiz button
changeQuestion.addEventListener("click", function (event) {
    if(event.target.nodeName === "BUTTON") {
        var buttontext = event.target.textContent;
        var activequestion = questionList[globalQuestionCounter-1];
        if(buttontext != activequestion.correctAnswer) {
            startseconds-=10;
        }
        console.log(buttontext,activequestion.correctAnswer);
        forQuestions();
    };
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
        //var highscore = getItem()Enter keyname here to fetch from local storage));
        questions.textContent = "Your final score is" + highscore;
        questions.style.marginTop = "30px";
        var answerList = document.getElementById("ol");
        answerList.style.display = "none";
        //Creating the input bar to enter initials
        var inputinitials = document.createElement("input");
        inputinitials.setAttribute("type","text");
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

    } else {
        codingQuizchallenge = document.querySelector("#mainHeading");
        codingQuizchallenge.style.display = "none";
        startquiz.style.display = "none";
        let myQuestion = questionList[globalQuestionCounter++];
        questions.textContent = myQuestion.question;
        questions.setAttribute("class","styleforquestions")
        var answerList = document.getElementById("ol");

        if (answerList == null){
            answerList = document.createElement("ol");
            document.getElementById("quiz").appendChild(answerList);
            answerList.setAttribute("id", "ol");
            console.log("created OL");
        } else {
            console.log("found old ol");
            while (answerList.firstChild){
                answerList.removeChild(answerList.firstChild);
                console.log("removed child");
            }
        }
        console.log(answerList);
        for (i = 1; i < 5; i++) {
            let optionButtons = document.createElement("button");
            optionButtons.textContent = myQuestion.answers[i];
            optionButtons.setAttribute("type", "button");
            optionButtons.setAttribute("class", "options");
            optionButtons.setAttribute("id", "options" + i)
            answerList.appendChild(optionButtons);
            console.log("appending button" + optionButtons);
        };
    };
};

