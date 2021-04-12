function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === computerSelection) {
        console.log("It's a tie !");
        return playerScore, computerScore += 0;
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors") {
        console.log(`You won ! ${playerSelectionLower.toUpperCase()} beats ${computerSelection.toUpperCase()} !`);
        return playerScore++;
    } else if (playerSelectionLower === "paper" && computerSelection === "rock") {
        console.log(`You won ! ${playerSelectionLower.toUpperCase()} beats ${computerSelection.toUpperCase()} !`);
        return playerScore++;
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
        console.log(`You won ! ${playerSelectionLower.toUpperCase()} beats ${computerSelection.toUpperCase()} !`);
        return playerScore++;
    } else {
        console.log(`You lose ! ${computerSelection.toUpperCase()} beats ${playerSelectionLower.toUpperCase()} !`);
        return computerScore++;
    }
}

function game() {
    for (let i = 0; i <= 4; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors ?");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore === computerScore) {
        console.log(`It's a tie ! SCORES --> YOU ${playerScore} x ${computerScore} COMPUTER`)
    } else if (playerScore > computerScore) {
        console.log(`You won ! SCORES --> YOU ${playerScore} x ${computerScore} COMPUTER`)
    } else {
        console.log(`You lose ! SCORES --> YOU ${playerScore} x ${computerScore} COMPUTER`);    
    }
}

let playerScore = 0;
let computerScore = 0;
game()
