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

	(function highlightPlayerSelection (){
		let img = event.target;
		img.classList.toggle('playerSelection');
		img.addEventListener('transitionend',showFight);
		img.addEventListener('transitionend',e=>e.target.classList.remove('playerSelection'));
		if (document.querySelector('.playerWeapon')){
			document.querySelector('#playerImgHolder').removeChild(document.querySelector('.playerWeapon'));
			document.querySelector('#cpuImgHolder').removeChild(document.querySelector('.cpuWeapon'));
		}
		
		function showFight(params) {
			let playerWeapon = document.createElement('img');
			let cpuWeapon = document.createElement('img');
			let cpuSelection = document.querySelector(`img[alt="${computerSelection_}"]`);			
			playerWeapon.setAttribute('src',`${img['src']}`);			
			cpuWeapon.setAttribute('src',`${cpuSelection['src']}`);
			document.getElementById('playerImgHolder').appendChild(playerWeapon);
			document.getElementById('cpuImgHolder').appendChild(cpuWeapon);
			playerWeapon.classList.add('playerWeapon');
			cpuWeapon.classList.add('cpuWeapon');
			img.removeEventListener('transitionend',showFight);
			playerWeapon.addEventListener('animationend',showResults);
		}

		function showResults (event){
			if (playerSelection_===winnerElement){
				userScore++;
				roundResultsContainer.textContent = `Congratulations! you win this round, ${winnerElement} beats ${looserElement}`;				
			}else if (playerSelection_===looserElement){
				computerScore++;
				roundResultsContainer.textContent = `You lose this round, ${winnerElement} beats ${looserElement}`;
			}else{
				roundResultsContainer.textContent = "You are tied";
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
			img.removeEventListener('transitionend',showResults);			
		}
	})();
}