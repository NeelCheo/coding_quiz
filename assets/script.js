// variables mainly used to input values using js since these sections will change often in this app
var score = document.getElementById("score");
var timerArea = document.getElementById("timer");
var questionArea = document.getElementById("question-area");
var answerArea = document.getElementById("answer-area");
var answerList = document.getElementById("answers");
var highscoreArea = document.getElementById("hgihscore-area");
var highscoreList = document.getElementById("hgihscore-List");
var quizButton = document.getElementById("quizButton");
var option = document.getElementById("option");
var scoreButton = document.getElementById("scoreButton");
var againButton = document.getElementById("againButton");

// local storage variables
//var name = nameInput.value; //this will be declared in a function later on
var highscores = [];
var i = 0; // for itterating through the question set
var time = 100;//time is based on how many questions there are 

// copy and paste the question format to add more question and just change the strings
var quiz = [
  questionSet1 = { question: 'java script files have ____ after the file name', options: ['.html', '.css', '.js', '.py'], answer: '.js' },
  questionSet2 = { question: 'What is mainly used to add fucntionality a website?', options: ['js', 'css', 'html', 'python'], answer: 'js' },
  questionSet3 = { question: 'to add js to a html file I want to use ____ tag', options: ['<script>', '<meta>', '<head>', '<html>'], answer: '<script>' },
  questionSet4 = { question: 'When declaring a object I want to use ____ after the "="', options: ['[]', '""', '<>', '{}'], answer: '{}' },
  questionSet5 = { question: 'When declaring an array I want to use ____ after the "="', options: ['""', '[]', '{}', '<>'], answer: '[]' }
];

printScore();
function startQuiz(event) { // on click function, handles the code for the quiz when you click the start button 
  event.preventDefault();
  printQuestionSet();
  timeID = setInterval(timer,1000);
  quizButton.style.display ="none";
}

function printQuestionSet() { //occurs when you start the quiz and when you select an asnwer
  questionArea.innerText = quiz[i].question;
  answerList.textContent = "";
  for (x = 0; x < quiz[i].options.length; x++) {
    var li = document.createElement("li");
    li.innerText = quiz[i].options[x];
    li.setAttribute("id", "option");
    li.addEventListener("click", checkAnswer);
    answerList.appendChild(li);
  }
}

function endQuiz() { //occurs when you answer the last question
  console.log("END QUIZ");
  clearInterval(timeID);
  timerArea.textContent = time;
  questionArea.innerText = "youre score is: "+time;
  scoreButton.style.display="block";
  againButton.style.display="block";
  answerArea.textContent = "";
  var form =document.createElement('input');
  form.setAttribute("type","text");
  form.setAttribute("id","name");
  form.setAttribute("placeholder","name");
  answerArea.appendChild(form);
}

//timer stuff 
function timer() { //sets the timer based on the amount of questions there are
    time--;
    timerArea.textContent = time;
    if(time === 0 || time < 0){
      timerArea.textContent = 0;
      endQuiz();
    }
    if(i>=quiz.length){
      endQuiz();
    }
  }

function checkAnswer(event) { 
  if(event.target.innerText == quiz[i].answer){ //correct is not needed
    console.log('correct');
  }
  if(event.target.innerText !== quiz[i].answer){
      console.log('wrong');
      time = time -10;
  }
  if(i<quiz.length-1){
  i++;
  printQuestionSet();
  }else{
    endQuiz();
  }
}

function submitScore(event) { //occurs when you finish the quiz and submit your name and prints to local stoarage
  event.preventDefault();
  console.log("score Submited")
}

function printScore() { //once quiz ends it will print scores from local storage
  console.log("scores are printed")
}

quizButton.addEventListener("click", startQuiz);
scoreButton.addEventListener("click",submitScore);