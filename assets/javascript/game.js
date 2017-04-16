//initialize variables

var computerScore = 0;
var buttons = [];
var points = 0;
var ores, wood, bricks, wheat, sheeps;
var userScore = 0;
var win = 0;
var lose = 0;

//Start Score
$(".win").html(win);
$(".lose").html(lose);
$(".myScore").html(userScore);

function startTarget() {
    //random number should be between 19 - 120
    computerScore = Math.floor(Math.random()* (120 - 19)) + 19;
    $(".target-score").html(computerScore);
}

//when called it will return points
//points is assigned five times to an array
function pointsGenerator() {
    for (var i = 0; i < 5; i++) {
        points = Math.floor(Math.random() * (12 - 1)) + 1;
        buttons.push(points);
        console.log(buttons);
    }

    //buttons are assign with points with index
    wood = buttons[0];
    bricks = buttons[1];
    wheat = buttons[2];
    ores = buttons[3];
    sheeps = buttons[4];
}

function didIWin(user) {
    if (computerScore < userScore) {
        lose++;
        $(".lose").html(lose);
        //Game resets
		gameReset();

    } 
    else if (computerScore === userScore) {
        win++;
        $(".win").html(win);

        //Game resets
		gameReset();
    }
}

function gameReset(){
		userScore = 0;
		$(".myScore").html(userScore);
	    buttons = [];
        startTarget();
		pointsGenerator();
}

startTarget();
pointsGenerator();

$(document).ready(function() {

    //click any button add certain amount of points
    $(document).on("click", "input", function() {
        console.log(this);
        console.log($(this));
        if ($(this).hasClass("ores")) {
            userScore += ores;
            console.log(userScore);
        } else if ($(this).hasClass("wood")) {
            userScore += wood;
        } else if ($(this).hasClass("bricks")) {
            userScore += bricks;
        } else if ($(this).hasClass("wheat")) {
            userScore += wheat;
        } else if ($(this).hasClass("sheeps")) {
            userScore += sheeps;
        }
        $(".myScore").html(userScore);
        didIWin();
    });
});



//create randomize values and assign to each button

//The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hClasse this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hClassden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// * Each crystal should have a random hClassden value between 1 - 12.
