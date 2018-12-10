function computerPlay (){
    let arr = ["Rock","Paper","Scissors"];
    return arr[Math.floor(Math.random()*arr.length)];
}

function game() {
    let computerScore;
    let userScore;

    function playRound (playerSelection_,computerSelection_){
        let playerSelection;
        let computerSelection;
        let looserElement;
        let winnerElement;
        let winMessage;
        let lossMessage;
        let tieMessage = "You are tied";

        (function textTransformer (){
            playerSelection = playerSelection_.toLowerCase();
            computerSelection = computerSelection_.toLowerCase();
        })();

        (function setWinnerElement (){
            let arr = [playerSelection,computerSelection];
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
            winMessage = `Congratulations! ${winnerElement} beats ${looserElement}`;
            lossMessage = `You Lose! ${winnerElement} beats ${looserElement}`;
        })();

        if (playerSelection===winnerElement){
            userScore++;
            return winMessage;
        }else if (playerSelection===looserElement){
            computerScore++;
            return lossMessage;
        }else{
            return tieMessage;
        }
    }

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = computerPlay();
        
        console.log(playRound(playerSelection,computerSelection));
    }

    if (computerScore>userScore){
        return "Computer wins, you lose:(";
    }else{
        return "You won!";
    }
}