let computerScore = 0;
let userScore = 0;

function computerPlay (){
	let arr = ["rock","paper","scissors"];
	return arr[Math.floor(Math.random()*arr.length)];
}

function game() {
	let playerSelection;
	let computerSelection;
	const validEntries = ["rock","paper","scissors"];

	function validateEntry() {
		while (!validEntries.includes(playerSelection)){
			playerSelection = prompt("ERROR!\n\nPlease select one of the following valid entries\nRock, paper or scissors?").toLowerCase();
		}
	}

	for (let i = 0; i < 5; i++) {
		playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
		validateEntry();
		computerSelection = computerPlay();        
		console.log(playRound(playerSelection,computerSelection));
	}

	while (computerScore===userScore){
		playerSelection = prompt("Game is tied, please choose again for another round\nRock, paper or scissors?").toLowerCase();
		validateEntry();
		computerSelection = computerPlay();        
		console.log(playRound(playerSelection,computerSelection));
	}

	if (computerScore>userScore){
		computerScore = 0;
		userScore = 0;
		return "Computer wins, you lose:(";
	}else{
		computerScore = 0;
		userScore = 0;
		return "You won!";
	}
}

function playRound (playerSelection_,computerSelection_){
	let looserElement;
	let winnerElement;

	(function setWinnerElement (){
		let arr = [playerSelection_,computerSelection_];
		if (arr.includes("rock")&&arr.includes("scissors")){
			looserElement = "scissors";
			winnerElement = "rock";
		}else if (arr.includes("rock")&&arr.includes("paper")){
			looserElement = "rock";
			winnerElement = "paper";
		}else if (arr.includes("scissors")&&arr.includes("paper")){
			looserElement = "paper";
			winnerElement = "scissors";
		}
	})();

	if (playerSelection_===winnerElement){
		userScore++;
		return `Congratulations! you win this round, ${winnerElement} beats ${looserElement}`;
	}else if (playerSelection_===looserElement){
		computerScore++;
		return `You lose this round, ${winnerElement} beats ${looserElement}`;
	}else{
		return "You are tied";
	}
}