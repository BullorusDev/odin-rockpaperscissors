let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const scoreStatus = document.createElement("p");
const scoreContainer = document.querySelector(".score-container");

scoreContainer.appendChild(scoreStatus);

function getComputerChoice() {
    const selection =  Math.floor(Math.random() * 3) + 1;
    let item;
    switch (selection) {
        case 1:
            item = 'Rock';
            break;
        case 2:
            item = 'Paper';
            break;
        case 3:
            item = 'Scissors'
            break;
    }
    return item;
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        scoreStatus.textContent = "It's a tie!";
    } else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
        console.log("You chose Rock but computer chose Paper so YOU LOSE");
        scoreStatus.textContent = "You chose Rock but computer chose Paper so YOU LOSE";
        computerScore ++;
    } else if (playerSelection === "ROCK" && computerChoice === "SCISSORS") {
        console.log("You chose Rock and computer chose Scissors so YOU WIN");
        scoreStatus.textContent = "You chose Rock and computer chose Scissors so YOU WIN";
        playerScore ++;
    } else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        console.log("You chose Paper and computer chose Rock so YOU WIN");
        
        scoreStatus.textContent = "You chose Paper and computer chose Rock so YOU WIN";
        playerScore ++;
    } else if (playerSelection === "PAPER" && computerChoice === "SCISSORS") {
        console.log("You chose Paper but computer chose Scissors so YOU LOSE");
        scoreStatus.textContent = "You chose Paper but computer chose Scissors so YOU LOSE";
        computerScore ++;
    } else if (playerSelection === "SCISSORS" && computerChoice === "PAPER") {
        console.log("You chose Scissors and computer chose Paper so YOU WIN");
        scoreStatus.textContent = "You chose Scissors and computer chose Paper so YOU WIN";
        playerScore ++;
    } else if (playerSelection === "SCISSORS" && computerChoice === "ROCK") {
        console.log("You chose Scissors but computer chose Rock so YOU LOSE");
        scoreStatus.textContent = "You chose Scissors but computer chose Rock so YOU LOSE";
        computerScore ++;
    } else {
        console.log('Something went wrong, please try again.');
    }
}

function playGame() {
    /*
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
        const computerChoice = getComputerChoice().toUpperCase();
        playRound(playerSelection, computerChoice);
        console.log(`Score: Computer - ${computerScore}, You - ${playerScore}`);
    }
    */ 
    if (playerScore > computerScore) {
        alert(`Congratulations! You beat the computer with a score of ${playerScore} to ${computerScore}!`);
    } else if (computerScore > playerScore) {  
        alert(`Womp womp! You lost to the computer with a score of ${playerScore} to ${computerScore}.`);
    } else {
        alert(`It's a tie! You and the computer both had a score of ${computerScore}!`);
    }

}
function checkForEnd() {
    if (playerScore === 5) {
        scoreStatus.style.fontWeight = "bold";
        scoreStatus.textContent = `Congratulations! You beat the computer with a score of 5 to ${computerScore}`;
    } else if (computerScore === 5) {
        scoreStatus.style.fontWeight = "bold";
        scoreStatus.textContent = `Too bad! The computer beat you with a score of 5 to ${playerScore}`;
    }
}

rockButton.addEventListener("click", () => {
    playRound("ROCK", getComputerChoice().toUpperCase());
    checkForEnd();
});
paperButton.addEventListener("click", () => {
    playRound("PAPER", getComputerChoice().toUpperCase());
    checkForEnd();
});

scissorsButton.addEventListener("click", () => {
    playRound("SCISSORS", getComputerChoice().toUpperCase());
    checkForEnd();
});
