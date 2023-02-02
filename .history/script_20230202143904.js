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

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper")
const scissors = document.getElementById("Scissors");

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        document.getElementById("winner-text").innerHTML = "Congratz! You Win"
        rock.disabled = true; 
        paper.disabled = true; 
        scissors.disabled = true; 

        let btn = document.createElement("button");
        btn.innerHTML = "Play again";
        btn.setAttribute("id", "again");
        document.body.appendChild(btn);
        document.getElementById("again").addEventListener("click", resetGame);

    } else if (computerScore == 5) {
        document.getElementById("winner-text").innerHTML = ":( You Lost"
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true; 
        
        let btn = document.createElement("button");
        btn.innerHTML = "Play again";
        btn.setAttribute("id", "again");
        document.body.appendChild(btn);
        document.getElementById("again").addEventListener("click", resetGame);
    }
}

function resetGame() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    document.getElementById("winner-text").innerHTML = "";
    document.getElementById("computer-text").innerHTML = "";
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
}

rock.addEventListener("click", function clickPlay() {
    const result = playRound(this.id, getComputerChoice());
    document.getElementById("computer-text").innerHTML = result;
    var playerScore = document.getElementById("playerScore").innerHTML;
    var computerScore = document.getElementById("computerScore").innerHTML; 
    checkWinner(playerScore, computerScore);
});

paper.addEventListener("click", function clickPlay() {
    const result = playRound(this.id, getComputerChoice());
    document.getElementById("computer-text").innerHTML = result;
    var playerScore = document.getElementById("playerScore").innerHTML;
    var computerScore = document.getElementById("computerScore").innerHTML; 
    checkWinner(playerScore, computerScore);
});

scissors.addEventListener("click", function clickPlay() {
    const result = playRound(this.id, getComputerChoice());
    document.getElementById("computer-text").innerHTML = result;
    var playerScore = document.getElementById("playerScore").innerHTML;
    var computerScore = document.getElementById("computerScore").innerHTML; 
    checkWinner(playerScore, computerScore);
});


