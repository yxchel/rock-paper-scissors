console.log("Hello World")

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);
const scores = document.querySelector(".score");
const winner = document.createElement("div");
document.body.appendChild(winner);

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if(randomInt == 0) {
        return "rock";
    } else if (randomInt == 1) {
        return "paper";
    } else if (randomInt == 2) {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "rock") {
        resultsDiv.textContent = ("It's a tie!");
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        resultsDiv.textContent = ("You lose! Paper beats rock.")
        computerScore++;
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        resultsDiv.textContent = ("You win! Rock beats scissors.")
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        resultsDiv.textContent = ("You win! Paper beats rock.")
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "paper") {
        resultsDiv.textContent = ("It's a tie!");
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        resultsDiv.textContent = ("You lose! Scissors beats paper.")
        computerScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        resultsDiv.textContent = ("You lose! Rock beats scissors.")
        computerScore++;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        resultsDiv.textContent = ("You win! Scissors beats paper.")
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "scissors") {
        resultsDiv.textContent = ("It's a tie!");
    }
    scores.textContent = ("Player: " + humanScore + "  Computer: " + computerScore);
    if(humanScore == 5) {
        winner.textContent = "You win!";
        scores.textContent = "Let's Play Rock, Paper, Scissors!";
        resultsDiv.textContent = "";
    } else if(computerScore ==5) {
        winner.textContent = "Computer wins!";
        scores.textContent = "Let's Play Rock, Paper, Scissors!";
        resultsDiv.textContent = "";
    }
}