function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 1000);
    return options[index % 3];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    if (p == computerSelection.toLowerCase()) {
        return "It's a draw!";
    }

    if (p == "rock" && computerSelection == "Paper") {
        var score = document.getElementById("computerScore").innerHTML;
        score++;
        document.getElementById("computerScore").innerHTML = score;
        return "You Lose! Paper beats Rock";
    }

    if (p == "rock" && computerSelection == "Scissors") {
        var score = document.getElementById("playerScore").innerHTML;
        score++;
        document.getElementById("playerScore").innerHTML = score;
        return "You Win! Rock beats Scissors";
    }

    if (p == "paper" && computerSelection == "Rock") {
        var score = document.getElementById("playerScore").innerHTML;
        score++;
        document.getElementById("playerScore").innerHTML = score;
        return "You Win! Paper beats Rock";
    }

    if (p == "paper" && computerSelection == "Scissors") {
        var score = document.getElementById("computerScore").innerHTML;
        score++;
        document.getElementById("computerScore").innerHTML = score;
        return "You Lose! Scissors beats Paper";
    }

    if (p == "scissors" && computerSelection == "Rock") {
        var score = document.getElementById("computerScore").innerHTML;
        score++;
        document.getElementById("computerScore").innerHTML = score;
        return "You Lose! Rock beats Scissors";
    }

    if (p == "scissors" && computerSelection == "Paper") {
        var score = document.getElementById("playerScore").innerHTML;
        score++;
        document.getElementById("playerScore").innerHTML = score;
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    document.getElementById("Rock").addEventListener("click", function () {
        result = playRound(this.id, getComputerChoice());
    });

    document.getElementById("Paper").addEventListener("click", function () {
        result = playRound(this.id, getComputerChoice());
    });

    document.getElementById("Scissors").addEventListener("click", function () {
        result = playRound(this.id, getComputerChoice());    
    });
}

game()

