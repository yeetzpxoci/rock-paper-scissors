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
        console.log("It's a draw!");
        return "You Lose! Paper beats Rock";
    }

    if (p == "rock" && computerSelection == "Scissors") {
        console.log("It's a draw!");
        return "You Win! Rock beats Scissors";
    }

    if (p == "paper" && computerSelection == "Rock") {
        console.log("It's a draw!");
        return "You Win! Paper beats Rock";
    }

    if (p == "paper" && computerSelection == "Scissors") {
        console.log("It's a draw!");
        return "You Lose! Scissors beats Paper";
    }

    if (p == "scissors" && computerSelection == "Rock") {
        console.log("It's a draw!");
        return "You Lose! Rock beats Scissors";
    }

    if (p == "scissors" && computerSelection == "Paper") {
        console.log("It's a draw!");
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Please make your choice");
        const result = playRound(choice, getComputerChoice());
        console.log(result);
        if (result.includes("Win")) {
            playerScore++;
        } 
        if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return "You Win!";
    } 
    if (playerScore < computerScore) {
        return "You Lose";
    } else {
        return "It's a draw";
    }

}
document.getElementsByClassName("Rock").addEventListener("click", playRound("rock", getComputerChoice()));
document.getElementsByClassName("Paper").addEventListener("click", playRound("paper", getComputerChoice()));
document.getElementsByClassName("Scissors").addEventListener("click", playRound("scissors", getComputerChoice()));

