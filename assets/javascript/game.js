//game audios
var woodChop = new Audio('assets/images/log-splitting.wav');
var brickScrape = new Audio('assets/images/brick-scraping.wav');
var rustling = new Audio('assets/images/bush-rustling.wav');
var mining = new Audio('assets/images/pickaxe-mining.wav');
var bah = new Audio('assets/images/sheep-bah.wav');
var oooh = new Audio('assets/images/oooh.mp3');
var ahhh =  new Audio('assets/images/ahhh.mp3');

var extraResources = new Audio('assets/images/extraResources.mp3');
var loser = new Audio('assets/images/kingofLoser.mp3')

//initialize variables
var computerScore = 0;
var buttons = [];
var points = 0;
var wood,bricks,wheat,ores,sheeps;
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

//lost if user score is higher computer score
function didIWin(user) {
    if (computerScore < userScore) {
        lose++;
        $(".lose").html(lose);
        loser.play();
        //Game resets
		gameReset();

    }
    else if (computerScore === userScore) {
        win++;
        $(".win").html(win);
    	ahhh.play();
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
	extraResources.play();
    //click any button add certain amount of points
    $(document).on("click", "input", function() {
        if ($(this).hasClass("ores")) {
        	mining.play();
            userScore += ores;
        } else if ($(this).hasClass("wood")) {
        	woodChop.play();
            userScore += wood;
        } else if ($(this).hasClass("bricks")) {
        	brickScrape.play();
            userScore += bricks;
        } else if ($(this).hasClass("wheat")) {
        	rustling.play();
            userScore += wheat;
        } else if ($(this).hasClass("sheeps")) {
        	bah.play();
            userScore += sheeps;
        }
        $(".myScore").html(userScore);
        didIWin();
    });
});
