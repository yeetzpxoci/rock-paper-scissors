function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 1000);
    return options[index % 3];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();

    if (p == computerSelection.toLowerCase()) {
        return "It's a draw!"
    }

    if (p == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock"
    }

    if (p == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors"
    }

    if (p == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock"
    }

    if (p == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper"
    }

    if (p == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors"
    }

    if (p == "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper"
    }
}

console.log(playRound("ROCK", getComputerChoice()));
