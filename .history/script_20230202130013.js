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

function stop_game() {
    document.getElementById("Rock").removeEventListener("click");
    document.getElementById("Paper").removeEventListener("click");
    document.getElementById("Scissors").removeEventListener("click");
}

function game() {
    const rock = document.getElementById("Rock");
    const paper = document.getElementById("Paper");
    const scissors = document.getElementById("Scissors");

    rock.addEventListener("click", function () {
        const result = playRound(this.id, getComputerChoice());
        document.getElementById("computer-text").innerHTML = result;

        if (document.getElementById("playerScore").innerHTML == 5) {
            document.getElementById("winner-text").innerHTML = "Congratz! You Win"
            stop_game();
        } else if (document.getElementById("computerScore").innerHTML == 5) {
            document.getElementById("winner-text").innerHTML = ":( You Lost"
            stop_game();
        }
    });

    paper.addEventListener("click", function () {
        const result = playRound(this.id, getComputerChoice());
        document.getElementById("computer-text").innerHTML = result;

        if (document.getElementById("playerScore").innerHTML == 5) {
            document.getElementById("winner-text").innerHTML = "Congratz! You Win"
            stop_game();
        } else if (document.getElementById("computerScore").innerHTML == 5) {
            document.getElementById("winner-text").innerHTML = ":( You Lost"
            stop_game();
        }
    });

    scissors.addEventListener("click", function () {
        const result = playRound(this.id, getComputerChoice());
        document.getElementById("computer-text").innerHTML = result;
        
        if (document.getElementById("playerScore").innerHTML == 5) {
            document.getElementById("winner-text").innerHTML = "Congratz! You Win"
            stop_game();
        } else if (document.getElementById("computerScore").innerHTML == 5) {
            document.getElementById("winner-text").innerHTML = ":( You Lost"
            stop_game()
        }
    });
}

game()

