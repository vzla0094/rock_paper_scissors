let computerScore = 0;
let userScore = 0;
const cpuScoreContainer = document.querySelector('#cpuScore');
const userScoreContainer = document.querySelector('#userScore');
const roundResultsContainer = document.querySelector('#roundResults');

const weaponsArr = document.querySelectorAll('.weapons');
weaponsArr.forEach(weapon=>weapon.addEventListener('click',playRound));

function computerPlay (){
	let arr = ["rock","paper","scissors"];
	return arr[Math.floor(Math.random()*arr.length)];
}

function game() {
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

function playRound (event){
	let looserElement;
	let winnerElement;
	let playerSelection_ = event.target.alt;
	let computerSelection_ = computerPlay();

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
		roundResultsContainer.textContent = `Congratulations! you win this round, ${winnerElement} beats ${looserElement}`;
		// return `Congratulations! you win this round, ${winnerElement} beats ${looserElement}`;
	}else if (playerSelection_===looserElement){
		computerScore++;
		roundResultsContainer.textContent = `You lose this round, ${winnerElement} beats ${looserElement}`;
		// return `You lose this round, ${winnerElement} beats ${looserElement}`;
	}else{
		roundResultsContainer.textContent = "You are tied";
		// return "You are tied";
	}	
	userScoreContainer.textContent = `${userScore}`;
	cpuScoreContainer.textContent = `${computerScore}`;

	if (userScore===5){
		roundResultsContainer.textContent = "YOU WON!!";
		computerScore = 0;
		userScore = 0;
	}else if(computerScore===5){
		roundResultsContainer.textContent = "Computer wins, you lose :C";
		computerScore = 0;
		userScore = 0;
	}
	
}