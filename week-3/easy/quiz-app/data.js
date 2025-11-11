//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

let currentQuestion = 0;
let score = 0;

const showQuestion = document.getElementById("questions");
const showOption = document.getElementById("options");
const showSubmit = document.getElementById("submitBtn");
const quizForm = document.getElementById("parent");
//show question
function loadQuestion(){
    // First, deselect any previous answer
    deselectAnswers();

    const currrentQuizData = quizData[currentQuestion];
    showQuestion.innerHTML = currrentQuizData.question;
    //option
    showOption.innerHTML = `
    <label><input type="radio" name="answer" value="a">${currrentQuizData.a}</label><br>
    <label><input type="radio" name="answer" value="b">${currrentQuizData.b}</label><br>
    <label><input type="radio" name="answer" value="c">${currrentQuizData.c}</label><br>
    <label><input type="radio" name="answer" value="d">${currrentQuizData.d}</label><br>
    `;


}

//functioon to know which answer is selected
function getSelected(){
    let selectedAnswer;
    const answer = document.querySelectorAll('input[name="answer"]');
    answer.forEach(answerEl=>{
        if(answerEl.checked){
            selectedAnswer = answerEl.value;
        }
    });
    return selectedAnswer;
}

//function to unchecked for next quetions
function deselectAnswers() {
    const answers = document.querySelectorAll('input[name="answer"]');
    answers.forEach(answerEl => {
        answerEl.checked = false;
    });
}




loadQuestion();
/* button cliked-> 1. check answer is correct or not
2. score ++ */

showSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        // Check if we are at the end of the quiz
        if(currentQuestion < quizData.length){
            loadQuestion()
        } else{
            quizForm.innerHTML=`<h2>You finished the quiz!</h2>
                <h3>Your score is ${score} out of ${quizData.length}</h3>
                
                <button onclick="location.reload()">Restart Quiz</button>`
        }
    } else{
        alert("Please select an answer!");
    }

});






