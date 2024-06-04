let humanScore = 0;
let computerScore = 0;
let numberOfPlays = 0;

let gameFlag = false;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) + 1
    let result
    if(randomNum >=1 && randomNum < 34){
        console.log("paper");
        result = "paper";
    }
    else if(randomNum >=34 && randomNum<66){
        console.log("rock");
        result = "rock";
    }
    else{
        console.log("scissor");
        result = "scissor";
    }
    return result;
}
const computerBoard = document.querySelector(".computer");
const humanBoard = document.querySelector(".human");

const choice = document.querySelector(".button-container");
const scoreBoard = document.querySelector(".game-log");
const para = document.createElement("p");
const finalMessage = document.createElement("p");
const restart = document.querySelector(".restart-button");

restart.addEventListener("click", () => {
    while(scoreBoard.firstChild){
        scoreBoard.removeChild(scoreBoard.firstChild);
    }

    humanScore = 0;
    computerScore = 0;
    numberOfPlays = 0;

    computerBoard.textContent = "Computer";
    humanBoard.textContent = "Human";

    gameFlag = true;

});

choice.addEventListener("click", event => {

    if(!gameFlag){
        return;
    }

    if(event.target.classList.contains("button-container")){
        return;
    }

    let target = event.target;

    let humanChoice;
    if(target.classList.contains("rock")){
        humanChoice = "rock";
    }
    else if(target.classList.contains("paper")){
        humanChoice = "paper";
    }
    else{
        humanChoice = "scissor";
    }
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    para.textContent = result;
    scoreBoard.appendChild(para);

    computerBoard.textContent = `Computer: ${computerScore}`;
    humanBoard.textContent = `Human: ${humanScore}`;

    if(numberOfPlays >= 5){
        endGame();
    }


});

function endGame(){

    scoreBoard.removeChild(para);

    if(humanScore > computerScore){
        finalMessage.textContent = "Congrats! You're the winner! Press Play to play again";
    }
    else if(humanScore < computerScore){
        finalMessage.textContent = "You lose! Better luck next time. Press Play to play again";
    }
    else {
        finalMessage.textContent = "It's a tie! Press Play to play again";
    }

    scoreBoard.appendChild(finalMessage);

    humanScore = 0;
    computerScore = 0;
    numberOfPlays = 0;


    gameFlag = false;

    
}



function playRound(humanChoice, computerChoice) {

    numberOfPlays++;

    if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "paper")){

        humanScore++;

        return `Good Job! ${humanChoice} beats ${computerChoice}`;
        
    }
    else if(humanChoice === computerChoice){

        return `Its a tie! you both choose ${humanChoice}`;

    }
    else{

        computerScore++;

        return `Uh-Oh! ${computerChoice} beats ${humanChoice}`;

    }
}
