
$(document).ready(function() {


//declaring and initializing some variables
var targetNumberPossibilities = [];
var crystalValuesPossibilities = [];
var targetNumber;
var usersTotalScore = 0;
var wins = 0;
var losses = 0;

//this gives all numbers between 19 and 120.  
//we need this to generate a randon number between the two values
for (var i = 19; i < 121; i++) {
      targetNumberPossibilities.push(i); 
}
//this generates all the numbers between 1-12

    for (var j = 1; j < 13; j++) {
        crystalValuesPossibilities.push(j);
}


//this will pick 1 random value from the targetNumberPossibilities
//******** needs to spit out a new # whenever user reaches it or if the user has gone over the value

var targetNumber = targetNumberPossibilities[Math.floor(Math.random() * targetNumberPossibilities.length)]
console.log(targetNumber);
 
//this takes the random target number and displays it
var targetNumberDisplayed = document.getElementById("targetNumberGoesHere")
targetNumberDisplayed.textContent = targetNumber;

//runs the crytal values possibilities four times to generate four numbers
//assign those numbers to the crytals

var roseQuartz;
var amethyst;
var emerald;
var aquamarine;

//***** can i use this array to make a loop that generates random numbers for the 4 crystals


//this generates a random number for the values of the crystals
// ******figure out to to loop this

var roseQuartz = crystalValuesPossibilities[Math.floor(Math.random() * crystalValuesPossibilities.length)]
console.log("rose quartz " + roseQuartz);

var amethyst = crystalValuesPossibilities[Math.floor(Math.random() * crystalValuesPossibilities.length)]
console.log("amethyst " + amethyst);

var emerald = crystalValuesPossibilities[Math.floor(Math.random() * crystalValuesPossibilities.length)]
console.log("emerald " + emerald);

var aquamarine = crystalValuesPossibilities[Math.floor(Math.random() * crystalValuesPossibilities.length)]
console.log("aquamarine " + aquamarine);

//assign the values with .attr() or it sets the values
$("#rose").attr("value", roseQuartz);
$("#amethyst").attr("value", amethyst);
$("#emerald").attr("value", emerald);
$("#aqua").attr("value", aquamarine);


//your score is computed by adding the number assigned to the crystals clicked

$("#rose").on("click", function() {

    usersTotalScore = usersTotalScore + roseQuartz;
    console.log(usersTotalScore);

    var usersScoreDisplayed = document.getElementById("userScore");
usersScoreDisplayed.textContent = usersTotalScore;

});
$("#amethyst").on("click", function() {

    //when amethyst is clicked add the value assigned to users total score    
    usersTotalScore = usersTotalScore + amethyst;
    console.log(usersTotalScore);

    var usersScoreDisplayed = document.getElementById("userScore");
usersScoreDisplayed.textContent = usersTotalScore;
});
$("#emerald").on("click", function() {

    //when emerald is clicked add the value assigned to users total score    
    usersTotalScore = usersTotalScore + emerald;
    console.log(usersTotalScore);

    var usersScoreDisplayed = document.getElementById("userScore");
usersScoreDisplayed.textContent = usersTotalScore;
});
$("#aqua").on("click", function() {

    //when aqua is clicked add the value assigned to users total score    
    usersTotalScore = usersTotalScore + aquamarine;
    console.log(usersTotalScore);



var usersScoreDisplayed = document.getElementById("userScore");
usersScoreDisplayed.textContent = usersTotalScore;
});


//if the user's total equals the randomly generated number then the user gets a point
//if the user's number is geater than the randomly generated value then the user loses a point

// if (usersTotalScore === targetNumber) |
// function clear() {
//     usersTotalScore = "";
// }
// $("#userScore").on("click", Function() {
//     clear();
// });

  

});