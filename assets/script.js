// variables mainly used to input values using js since these sections will change often in this app
var score = document.getElementById("score");
var timer = document.getElementById("timer");
var queastionArea = document.getElementById("question-area");
var answerArea = document.getElementById("answer-area");
var answerList= document.getElementById("answers");
var highscoreArea = document.getElementById("hgihscore-area");
var highscoreList = document.getElementById("hgihscore-List");

// local storage variables
var name = nameInput.value; //this will be declared in a function later on
var highscores =[];

// copy and paste the question format only things you have to change outside the strings is the:
// (question#, question#.options, question#.options[#])
var quiz = [
        questionSet1 = {question:'java script files have ____ after the file name',options:['.html','.css','.js','.py'],answer: question1.options[2]},
        questionSet2 = {question:'What is mainly used to add fucntionality a website?',options:['js','css','html','python'],answer: question2.options[0]},
        questionSet3 = {question:'to add js to a html file I want to use ____ tag',options:['<script>','<meta>','<head>','<html>'],answer: question3.options[0]},
        questionSet4 = {question:'When declaring a object I want to use ____ after the "="',options:['[]','""','<>','{}'],answer: question4.options[3]},
        questionSet5 = {question:'When declaring an array I want to use ____ after the "="',options:['""','[]','{}','<>'],answer: question4.options[1]}
];
