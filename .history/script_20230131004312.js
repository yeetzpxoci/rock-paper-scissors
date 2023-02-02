function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 1000);
    return options[index % 3];
}

function playRound(playerSelection, computerSelection) {
    const p = playerSelection.toLowerCase();
    if (p == computerSelection.toLowerCase()) {
        console.log("It's a draw!");
        return "It's a draw!";
    }

    if (p == "rock" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock");
        return "You Lose! Paper beats Rock";
    }

    if (p == "rock" && computerSelection == "Scissors") {
        console.log("You Win! Rock beats Scissors");
        return "You Win! Rock beats Scissors";
    }

    if (p == "paper" && computerSelection == "Rock") {
        console.log("You Win! Paper beats Rock");
        return "You Win! Paper beats Rock";
    }

    if (p == "paper" && computerSelection == "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "You Lose! Scissors beats Paper";
    }

    if (p == "scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors");
        return "You Lose! Rock beats Scissors";
    }

    if (p == "scissors" && computerSelection == "Paper") {
        console.log("You Win! Scissors beats Paper");
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    var playerScore = 0;
    var computerScore = 0;
    
    while (playerScore < 5 || computerScore < 5) {
        document.getElementById("Rock").addEventListener("click", function () {
            result = playRound(this.id, getComputerChoice());

            if (result.includes("Win")) {
                playerScore++;
            }

            if (result.includes("Lose")) {
                computerScore++;
            }

            document.getElementById("score").innerHTML = String(playerScore) + " - " + String(computerScore)
        });

        document.getElementById("Paper").addEventListener("click", function () {
            result = playRound(this.id, getComputerChoice());

            if (result.includes("Win")) {
                playerScore++;
            }

            if (result.includes("Lose")) {
                computerScore++;
            }

            document.getElementById("score").innerHTML = String(playerScore) + " - " + String(computerScore)
        });

        document.getElementById("Scissors").addEventListener("click", function () {
            result = playRound(this.id, getComputerChoice());

            if (result.includes("Win")) {
                playerScore++;
            }

            if (result.includes("Lose")) {
                computerScore++;
            }

            document.getElementById("score").innerHTML = String(playerScore) + " - " + String(computerScore)
        });
    }   
}

game()
