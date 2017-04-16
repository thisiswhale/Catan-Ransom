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


//Add lose/win sound
//sound buttons
//win lose spacings