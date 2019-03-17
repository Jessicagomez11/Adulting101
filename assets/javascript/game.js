
$(document).ready(function () {


    //declaring and initializing some variables
    var targetNumberPossibilities = [];
    var drinkPricePossibilities = [];
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
        drinkPricePossibilities.push(j);
    }


    //this will pick 1 random value from the targetNumberPossibilities
    //******** needs to spit out a new # whenever user reaches it or if the user has gone over the value

    var targetNumber = targetNumberPossibilities[Math.floor(Math.random() * targetNumberPossibilities.length)]
    console.log(targetNumber);

    //this takes the random target number and displays it
    var targetNumberDisplayed = document.getElementById("targetNumberGoesHere")
    targetNumberDisplayed.textContent = "$" + targetNumber;

    winsDisplayed = document.getElementById("userWinsGoHere");
    winsDisplayed.textContent = wins;

    lossesDisplayed = document.getElementById("userLossesGoHere")
    lossesDisplayed.textContent = losses;

    pointsDisplayed = document.getElementById("userScore");
    pointsDisplayed.textContent = "$" + usersTotalScore;


    //runs the crytal values possibilities four times to generate four numbers
    //assign those numbers to the crytals

    var cocktail;
    var tequila;
    var wine;
    var beer;

    //***** can i use this array to make a loop that generates random numbers for the 4 crystals


    //this generates a random number for the values of the crystals
    // ******figure out to to loop this

    var cocktail = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
    console.log("cocktail $" + cocktail);

    var tequila = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
    console.log("tequila $" + tequila);

    var wine = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
    console.log("wine $" + wine);

    var beer = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
    console.log("beer $" + beer);

    //assign the values with .attr() or it sets the values
    $("#cocktail").attr("value", cocktail);
    $("#tequila").attr("value", tequila);
    $("#wine").attr("value", wine);
    $("#beer").attr("value", beer);


    $(document.body).on("click", ".images", function () {
        console.log("Drink Price $", $(this).attr("value"));
        usersTotalScore = usersTotalScore + parseInt($(this).attr("value"))
        console.log(usersTotalScore)
        document.getElementById("userScore").textContent = "$" + usersTotalScore;

        //if the user's total equals the randomly generated number then the user gets a point


        if (usersTotalScore === targetNumber) {
            alert("You're on budget!  Woo-hoo!  Go you!");
            wins++
            console.log(wins)
            $("#userWinsGoHere").text(wins);
            //if the user goes over then they lose a point
            reset();
        } else if (usersTotalScore > targetNumber) {
            alert("Uh-Oh.  You went over budget!")
            losses++
            $("#userLossesGoHere").text(losses);
            reset();
        }
        if (losses === 5){
            alert(" You've gone over budget 5 times! Guess it's time to look for a second job...")
        } else if (wins === 5){
            alert("You've stayed on budget 5 times!  You are a budgeting kween!")
        } else if (losses === 10){
            alert("OH NO! You've gone over budget 10 times... we've got to work on those budgeting skillz!" )
        }

    })

    function reset() {//this function is going to reset the user's sccore, generate a new target number and generate new values for the crystals
        //this resets the users Total score
        usersTotalScore =  0; 
        $("#userScore").text( "$" + usersTotalScore);


        //this sets a new random number in the target in the document
        targetNumber = targetNumberPossibilities[Math.floor(Math.random() * targetNumberPossibilities.length)]
        $("#targetNumberGoesHere").text("$" + targetNumber);

        //resets the values of the crystals
        cocktail = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
        console.log("cocktail " + cocktail);

        tequila = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
        console.log("tequila " + tequila);

        wine = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
        console.log("wine " + wine);

        beer = drinkPricePossibilities[Math.floor(Math.random() * drinkPricePossibilities.length)]
        console.log("beer " + beer);

        $("#cocktail").attr("value", cocktail);
        $("#tequila").attr("value", tequila);
        $("#wine").attr("value", wine);
        $("#beer").attr("value", beer);


    }



});
