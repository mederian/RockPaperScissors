let input = ""
let computerWin = 0;
let playerWin = 0;
let rounds = 0;


const rockButton = document.querySelector('#rock');
const papersButton = document.querySelector('#papers');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', playerChoice);
papersButton.addEventListener('click', playerChoice);
scissorsButton.addEventListener('click', playerChoice);

const resultsPanel = document.querySelector('#results');

function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    if(randomValue == 0) return "rock"
    else if (randomValue == 1) return "papers"
    else if (randomValue == 2) return "scissors"
    else return "wrong";
}

function playSingleRound(playerChoice, computerChoice){

    console.log(playerChoice)
    console.log(computerChoice)
    return determineWinner(playerChoice, computerChoice)
}

function determineWinner(player, computer){
    if(player === "rock") return rock(computer);
    else if(player === "papers") return papers(computer)
    else if(player === "scissors") return scissor(computer)
}

function scissor(hand){
    if(hand === "rock") return {
        text: "You lose! Rock beats Scissors",
        numeric: 0
    }
    else if( hand === "papers") return { 
        text:"You win! Scissors cuts paper", 
        numeric: 1
    }
    else if (hand === "scissors") return {
        text: "Tie! Both had Scissors",
        numberic:  2
    }
}
function rock(hand){
    if(hand === "rock") return {
        text: "Tie! Both had Rock",
        numeric:  2
    }
    else if( hand === "papers") return {
        text: "You Lose! Paper wraps Rock",
        numeric: 0
    }
    else if (hand === "scissors") return {
        text: "You win! Rock beats Scissors",
        numeric: 1
    }
}
function papers(hand){
    if(hand === "rock") return {
        text: "You Win! Paper wraps Rock",
        numeric:  1
    }
    else if( hand === "papers") return {
        text: "Tie! Both had Paper",
        numeric: 2
    }
    else if (hand === "scissors") return {
        text: "You Lose! Scissors cut paper", 
        numeric: 0
    }

}

function endGame(){
    let finalResult = "It was a tie";
    
    if(playerWin > computerWin) finalResult = "You win!";
    else if(playerWin < computerWin) finalResult = "You lose! Computer won";
    resultsPanel.innerText += `\nThe game is over ${finalResult}`;
}
function displayCurrentScore(){
    resultsPanel.innerText = `Round ${rounds}: You have won ${playerWin} times, and computer won ${computerWin} times`;
}

function playRound(playerChoice){
    let result = playSingleRound(playerChoice, getComputerChoice());
    if(result.numeric === 1) playerWin++;
    else if(result.numeric === 0) computerWin++;
    rounds++;
    displayCurrentScore();
    if(playerWin >= 5 || computerWin >= 5) endGame();
}

//Change this one

/*
function game(rounds){
    let computerWin = 0;
    let playerWin = 0;
    let x = 0;
    while(x < (rounds)){
        input = prompt("write, rock, papers or scissors");
        input = input.toLowerCase();
        if(input === 'rock' || input === 'papers' || input === 'scissors'){
             
            let result = playSingleRound(input, getComputerChoice())
            console.log(result.text)
            if(result.numeric === 1) playerWin++;
            else if(result.numeric === 0) computerWin++;
            x++;
        }
        else console.log("Not a valid input, try again");
    }

    if(playerWin > computerWin) console.log("You win!");
    else if( computerWin > playerWin) console.log("You lose!!");
    else if(computerWin === playerWin) console.log("It is a tie!!")

}
*/


function playerChoice(){

    playRound(this.id)
}

