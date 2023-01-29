function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 1000);
    return options[index % 3];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "It's a draw!"
    }

    if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    }

    if (playerSelection == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors"
    }

    if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    }

    if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    }

    if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
    }

    if (playerSelection == "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper"
    }
}

console.log(playRound("ROCK", getComputerChoice));
