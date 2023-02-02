function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 1000);
    return options[index % 3];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    var playerScore = document.getElementById("playerScore").innerHTML;
    var computerScore = document.getElementById("computerScore").innerHTML;

    if (p == computerSelection.toLowerCase()) {
        return "It's a draw!";
    }

    if (p == "rock" && computerSelection == "Paper") {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        return "You Lose! Paper beats Rock";
    }

    if (p == "rock" && computerSelection == "Scissors") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
        return "You Win! Rock beats Scissors";
    }

    if (p == "paper" && computerSelection == "Rock") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
        return "You Win! Paper beats Rock";
    }

    if (p == "paper" && computerSelection == "Scissors") {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        return "You Lose! Scissors beats Paper";
    }

    if (p == "scissors" && computerSelection == "Rock") {
        computerScore++;
        document.getElementById("computerScore").innerHTML = computerScore;
        return "You Lose! Rock beats Scissors";
    }

    if (p == "scissors" && computerSelection == "Paper") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
        return "You Win! Scissors beats Paper";
    }
}

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        document.getElementById("winner-text").innerHTML = "Congratz! You Win"
    } else if (computerScore == 5) {
        document.getElementById("winner-text").innerHTML = ":( You Lost"
    }
}

function game() {
    document.getElementById("Rock").addEventListener("click", function clickPlay() {
        const result = playRound(this.id, getComputerChoice());
        document.getElementById("computer-text").innerHTML = result;
        var playerScore = document.getElementById("playerScore").innerHTML;
        var computerScore = document.getElementById("computerScore").innerHTML; 
        checkWinner(playerScore, computerScore);
    });

    document.getElementById("Paper").addEventListener("click", function clickPlay() {
        const result = playRound(this.id, getComputerChoice());
        document.getElementById("computer-text").innerHTML = result;
        var playerScore = document.getElementById("playerScore").innerHTML;
        var computerScore = document.getElementById("computerScore").innerHTML; 
        checkWinner(playerScore, computerScore);
    });

    document.getElementById("Scissors").addEventListener("click", function clickPlay() {
        const result = playRound(this.id, getComputerChoice());
        document.getElementById("computer-text").innerHTML = result;
        var playerScore = document.getElementById("playerScore").innerHTML;
        var computerScore = document.getElementById("computerScore").innerHTML; 
        checkWinner(playerScore, computerScore);
    });
}

game()

