console.log("Hello World")

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

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors: ");
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a tie!");
        } else if(humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock.")
            computerScore++;
        } else if(humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors.")
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock.")
            humanScore++;
        } else if(humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a tie!");
        } else if(humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper.")
            computerScore++;
        } else if(humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.")
            computerScore++;
        } else if(humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper.")
            humanScore++;
        } else if(humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It's a tie!");
        }
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log(playGame());