
function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    if(randomValue == 0) return "rock"
    else if (randomValue == 1) return "papers"
    else if (randomValue == 2) return "scissors"
    else return false;
}

console.log(getComputerChoice());