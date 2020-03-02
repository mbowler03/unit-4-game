//Global Variables

var userRandomNumber 
var btn1RandomNumber 
var btn1RandomNumber 
var btn3RandomNumber 
var btn4RandomNumber 
var winCount = 0
var lossCount = 0
var playerScore = 0

//Start Function and establishing random intergers for the buttons and the "Magic number"
//userRandomNumber is the "magic number"
$(document).ready(function() {
    var start = function() { 
        btn1RandomNumber = Math.floor(Math.random() * (13 - 1) + 1);
        btn2RandomNumber = Math.floor(Math.random() * (13 - 1) + 1);
        btn3RandomNumber = Math.floor(Math.random() * (13 - 1) + 1);
        btn4RandomNumber = Math.floor(Math.random() * (13 - 1) + 1);
        userRandomNumber = Math.floor(Math.random() * (121 - 19) + 19);
        $("#userRandomNumber").text(userRandomNumber)
    }
 //call the function   
 start();

//four button functions    

$('#button1').click(function(){
console.log(btn1RandomNumber);
playerScore+=btn1RandomNumber;
$('#playerScore').text(playerScore);
endGame()
});


    
$('#button2').click(function(){
console.log(btn2RandomNumber);
playerScore+=btn2RandomNumber;
$('#playerScore').text(playerScore);
endGame()
});


$('#button3').click(function(){
console.log(btn3RandomNumber);
playerScore+=btn3RandomNumber;
$('#playerScore').text(playerScore);
endGame()
});


$('#button4').click(function(){
console.log(btn4RandomNumber);
playerScore+=btn4RandomNumber;
$('#playerScore').text(playerScore);
endGame()
});

var endGame = function() {
    if (userRandomNumber === playerScore) {
    alert ("You Won!");
    winCount++;
    document.getElementById("win-count").innerHTML = winCount;
    $('#playerScore').empty();
    $('#userRandomNumber').empty();
    start();
    } 
    else if (userRandomNumber < playerScore) {
    alert ("You lost!");
    lossCount++;
    document.getElementById("loss-count").innerHTML = lossCount;
    $('#playerScore').empty();
    $('#userRandomNumber').empty();
    start();
    }
};
start();

});













   

   


