function computerPlay (){
    let arr = ["Rock","Paper","Scissors"];
    return arr[Math.floor(Math.random()*arr.length)];
}

function playRound_ (playerSelection_,computerSelection_){
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
        return winMessage;
    }else if (playerSelection===looserElement){
        return lossMessage;
    }else{
        return tieMessage;
    }
}
