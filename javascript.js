function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "rock";
    }  else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0; 

function playRound(playerSelection,computerSelection) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore ++;
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        playerScore ++;
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "Its a tie!"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerScore ++;
        return "You Win! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore ++;
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "Its a tie!"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore ++;
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerScore ++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "Its a tie!"
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let A = prompt("Rock, paper or Scissors?");
        let B = computerPlay();
        var log =playRound(A,B);
        console.log(log);
        console.log("Score: Player: " + playerScore + " Computer: " + computerScore);

        if (i === 4) {
            if (playerScore > computerScore) {
                console.log("You won out of all the rounds!")
            } else if (playerScore < computerScore) {
                console.log("The computer is better than you, you lose!")
            } else console.log("ITS A TIE!");
            playerScore = 0;
            computerScore = 0;
        }
    }
}
