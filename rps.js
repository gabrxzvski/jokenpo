let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('input');
const computer = document.getElementById('computer');
const player = document.getElementById('player');
const results = document.querySelector('#results');
const result = document.createElement('p');
const finalScore = document.createElement('p');
const resetText = document.createElement('p');
const labels2 = document.querySelector('.labels2');
const counterplayer = document.createElement('p');
const countercomputer = document.createElement('p');
const playAgainBtn = document.createElement('a');
playAgainBtn.setAttribute('class', 'button1');
playAgainBtn.setAttribute('href', '#')
playAgainBtn.textContent = 'PLAY AGAIN ?';
const divPlayAgain = document.getElementById('playagainbtn');

const rock = document.createElement('img');
rock.src = "./images/rock.png";
rock.setAttribute('id', 'rockstyle');
const rock1 = rock.cloneNode(true);
rock1.setAttribute('id', 'rockstyleclone');
const paper = document.createElement('img');
paper.src = "./images/paper.png";
paper.setAttribute('id', 'paperstyle');
const paper1 = paper.cloneNode(true);
paper1.setAttribute('id', 'paperstyleclone');
const scissors = document.createElement('img');
scissors.src = "./images/scissors.png";
scissors.setAttribute('id', 'scissorsstyle');
const scissors1 = scissors.cloneNode(true);
scissors1.setAttribute('id', 'scissorsstyleclone');

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let cloned = computerSelection + '1';
    if (playerSelection === computerSelection) {

        result.textContent = "It's a tie !";
        const resultchild = results.children[0];
        results.replaceChild(result, resultchild);

        const playerchild = player.children[0];
        const computerchild = computer.children[0];
        player.replaceChild(eval(playerSelection), playerchild);
        computer.replaceChild(eval(cloned), computerchild);

        return playerScore, computerScore += 0;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {

        playerScore++;

        result.textContent = `You won ! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} !`;
        const resultchild = results.children[0];
        results.replaceChild(result, resultchild);

        const playerchild = player.children[0];
        const computerchild = computer.children[0];
        player.replaceChild(eval(playerSelection), playerchild);
        computer.replaceChild(eval(cloned), computerchild);

        counterplayer.textContent = `${playerScore}`;
        countercomputer.textContent = `${computerScore}`;
        const labelchild1 = labels2.children[0];
        const labelchild2 = labels2.children[1];
        labels2.replaceChild(counterplayer, labelchild1);
        labels2.replaceChild(countercomputer, labelchild2);

        return playerScore;

    } else if (playerSelection === "paper" && computerSelection === "rock") {

        playerScore++;

        result.textContent = `You won ! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} !`;
        const resultchild = results.children[0];
        results.replaceChild(result, resultchild);

        const playerchild = player.children[0];
        const computerchild = computer.children[0];
        player.replaceChild(eval(playerSelection), playerchild);
        computer.replaceChild(eval(cloned), computerchild);

        counterplayer.textContent = `${playerScore}`;
        countercomputer.textContent = `${computerScore}`;
        const labelchild1 = labels2.children[0];
        const labelchild2 = labels2.children[1];
        labels2.replaceChild(counterplayer, labelchild1);
        labels2.replaceChild(countercomputer, labelchild2);

        return playerScore;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        playerScore++;

        result.textContent = `You won ! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()} !`;
        const resultchild = results.children[0];
        results.replaceChild(result, resultchild);

        const playerchild = player.children[0];
        const computerchild = computer.children[0];
        player.replaceChild(eval(playerSelection), playerchild);
        computer.replaceChild(eval(cloned), computerchild);

        counterplayer.textContent = `${playerScore}`;
        countercomputer.textContent = `${computerScore}`;
        const labelchild1 = labels2.children[0];
        const labelchild2 = labels2.children[1];
        labels2.replaceChild(counterplayer, labelchild1);
        labels2.replaceChild(countercomputer, labelchild2);

        return playerScore;

    } else {

        computerScore++;

        result.textContent = `You lose ! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()} !`;
        const resultchild = results.children[0];
        results.replaceChild(result, resultchild);

        const playerchild = player.children[0];
        const computerchild = computer.children[0];
        player.replaceChild(eval(playerSelection), playerchild);
        computer.replaceChild(eval(cloned), computerchild);

        counterplayer.textContent = `${playerScore}`;
        countercomputer.textContent = `${computerScore}`;
        const labelchild1 = labels2.children[0];
        const labelchild2 = labels2.children[1];
        labels2.replaceChild(counterplayer, labelchild1);
        labels2.replaceChild(countercomputer, labelchild2);

        return computerScore;

    }
}


buttons.forEach((input) => {
    input.addEventListener('click', () => {
        playRound(input.id, computerPlay());
        if (playerScore === 5 || computerScore === 5) {

            if (playerScore === computerScore) {

                finalScore.textContent = `It's a tie ! SCORES > YOU ${playerScore} x ${computerScore} COMPUTER`;
                const resultchild = results.children[0];
                results.replaceChild(finalScore, resultchild);

            } else if (playerScore > computerScore) {

                finalScore.textContent = `You won ! SCORES > YOU ${playerScore} x ${computerScore} COMPUTER`;
                const resultchild = results.children[0];
                results.replaceChild(finalScore, resultchild);

            } else {

                finalScore.textContent = `You lose ! SCORES > YOU ${playerScore} x ${computerScore} COMPUTER`;
                const resultchild = results.children[0];
                results.replaceChild(finalScore, resultchild);

            }

            document.getElementById("rock").style.pointerEvents ="none";
            document.getElementById("paper").style.pointerEvents ="none";
            document.getElementById("scissors").style.pointerEvents ="none";

            divPlayAgain.appendChild(playAgainBtn);
            playAgainBtn.addEventListener('click', () => {

                document.getElementById("rock").style.pointerEvents ="auto";
                document.getElementById("paper").style.pointerEvents ="auto";
                document.getElementById("scissors").style.pointerEvents ="auto";

                playerScore = 0;
                computerScore = 0;

                counterplayer.textContent = `${playerScore}`;
                countercomputer.textContent = `${computerScore}`;
                const labelchild1 = labels2.children[0];
                const labelchild2 = labels2.children[1];
                labels2.replaceChild(counterplayer, labelchild1);
                labels2.replaceChild(countercomputer, labelchild2);

                resetText.textContent = "Play Rock-Paper-Scissors against the computer, first to reach 5 points wins !";
                const resultchild = results.children[0];
                results.replaceChild(resetText, resultchild);

                playAgainBtn.remove();
                
            });

        }
    });
});


