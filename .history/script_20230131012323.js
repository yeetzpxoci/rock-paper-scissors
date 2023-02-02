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

function game() {
    document.getElementById("Rock").addEventListener("click", function () {
        playRound(this.id, getComputerChoice());

        if (document.getElementById("playerScore").innerHTML == 5 || document.getElementById("computerScore").innerHTML == 5) {
            alert("Finished!");
            return;
        }
    });

    document.getElementById("Paper").addEventListener("click", function () {
        playRound(this.id, getComputerChoice());

        if (document.getElementById("playerScore").innerHTML == 5 || document.getElementById("computerScore").innerHTML == 5) {
            alert("Finished!");
            return;
        }
    });

    document.getElementById("Scissors").addEventListener("click", function () {
        playRound(this.id, getComputerChoice());   
        
        if (document.getElementById("playerScore").innerHTML == 5 || document.getElementById("computerScore").innerHTML == 5) {
            alert("Finished!");
            return;
        }
    });
}

game()

