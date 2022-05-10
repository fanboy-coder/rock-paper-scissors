const choices = ["rock","paper","scissors"];
const winners = [];
let playerInput = [];
let round = 0;
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('.button');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
            if (button.id == "rock") {
                playerInput.push("rock");
            }
            else if (button.id == "paper") {
                playerInput.push("paper");
            }
            else if (button.id == "scissors") {
                playerInput.push("scissors");
            }
        round += 1;
        clear();
        playRound(round);
    });
});

function game(){
        logWins();
    }

function clear(){
    if (element = document.getElementById("display")){
        element.remove();
    }
}

function playRound(round){
    const playerSelection = playerInput[0];
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
    continuePlaying();
    playerInput.pop();
}    

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        playerWins +=1;
        const playerCounter = document.querySelector(".playerScore")
        playerCounter.textContent = playerWins;
        return "Player";
    }

    else {
        computerWins +=1;
        const computerCounter = document.querySelector(".computerScore")
        computerCounter.textContent = computerWins;
        return "Computer";
    }
}

function continuePlaying (){
    if (playerWins === 5) {
        const body = document.body
        let div = document.createElement("div");
        div.setAttribute("id","modal-bg-display");
        let newDiv = document.createElement("newDiv");
        newDiv.setAttribute("class","modal");
        div.appendChild(newDiv);
        let h1 = document.createElement("h1")
        h1.textContent = "Congratulations! You won the game!"
        newDiv.appendChild(h1);
        let button = document.createElement("button")
        button.textContent= "Play again";
        button.setAttribute("class", "play-again")
        button.addEventListener("click", ()=>{
            location.reload();
        })
        newDiv.appendChild(button);
        body.append(div);
    }

    else if (computerWins === 5) {
        const body = document.body
        let div = document.createElement("div");
        div.setAttribute("id","modal-bg-display");
        let newDiv = document.createElement("newDiv");
        newDiv.setAttribute("class","modal");
        div.appendChild(newDiv);
        let h1 = document.createElement("h1")
        h1.textContent = "Sorry. You lost the game."
        newDiv.appendChild(h1);
        let button = document.createElement("button")
        button.textContent= "Play again";
        button.setAttribute("class", "play-again")
        button.addEventListener("click", ()=>{
            location.reload();
        })
        newDiv.appendChild(button);
        body.append(div);
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item = "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins", computerWins);
    console.log("Ties:", ties);
}

function logRound (playerChoice, computerChoice, winner, round) {
    if (winner === "Player" || winner === "Computer"){
        const body = document.body
        const div = document.createElement("div")
        div.setAttribute("id","display");
        div.style.textAlign = "center";
        div.style.marginbottom = "20px";
        div.textContent = "Round " + round + ": Player chose " + playerChoice + " and Computer chose " + computerChoice +". " + winner + " won the round!";
        body.append(div);
    }
    else {
        const body = document.body
        const div = document.createElement("div")
        div.setAttribute("id","display");
        div.style.textAlign = "center";
        div.style.marginbottom = "20px";
        div.textContent = "Round " + round + ": Player chose " + playerChoice + " and Computer chose " + computerChoice +". It's a tie!";
        body.append(div);
    }

    console.log("Round:", round);
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(winner, "won the round");
    console.log("-------------------");
}

game()