function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 1000);
    return options[index % 3];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    if (p == computerSelection.toString().toLowerCase()) {
        return "It's a draw!";
    }

    if (p == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    }

    if (p == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    }

    if (p == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    }

    if (p == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    }

    if (p == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    }

    if (p == "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    const playerScore = 0;
    const computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Please make your choice");
        if (playRound(choice, getComputerChoice).includes("Win")) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return "You Win!"
    } else {
        return "You Lose"
    }

}

console.log(game());
