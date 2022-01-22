
let userScore = 0
let computerScore = 0

let computerArray = ['rock', 'paper', 'scissors']

function computerPlay() {
    return (computerArray[Math.floor(Math.random() * computerArray.length)])
}



function playRound() {
    let playerSelection = userInput()
    let computerSelection = computerPlay().toUpperCase()

    if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
        userScore++;
        return `You win!, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "Scissor" && computerSelection === "PAPER") {
        userScore++;
        return `You win!, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        userScore++;
        return `You win!, ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        return "Nani!!! Its a draw";
    }
    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function userInput() {
    let result = prompt(("Choose [Rock, Paper, Scissor] : ").toUpperCase())
    if (result === "ROCK" || result === "PAPER" || result === "SCISSOR") {
        return result;
    }

    else {
        userInput()
    }

}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(`User : ${userScore}, Computer : ${computerScore}`)
    winnerAnnouncer();
}

function winnerAnnouncer() {
    if (userScore > computerScore) {
        console.log("User Wins!!!");
    } else if (userScore < computerScore) {
        console.log("Computer Wins!!!");
    } else {
        console.log("Its A draw!!!")
    }
}

game();

