let startingPlayer = localStorage.getItem("startingPlayer");
if(startingPlayer == null) {
    localStorage.setItem("startingPlayer", "1");
    startingPlayer = localStorage.getItem("startingPlayer");
}

function checkIfGameEnded() {
    // Player won
    if(
        (squares[0].textContent == "X" && squares[1].textContent == "X" && squares[2].textContent == "X")
            ||
        (squares[3].textContent == "X" && squares[4].textContent == "X" && squares[5].textContent == "X") || 
        (squares[6].textContent == "X" && squares[7].textContent == "X" && squares[8].textContent == "X") || 
        (squares[0].textContent == "X" && squares[3].textContent == "X" && squares[6].textContent == "X") || 
        (squares[1].textContent == "X" && squares[4].textContent == "X" && squares[7].textContent == "X") || 
        (squares[2].textContent == "X" && squares[5].textContent == "X" && squares[8].textContent == "X") || 
        (squares[0].textContent == "X" && squares[4].textContent == "X" && squares[8].textContent == "X") || 
        (squares[2].textContent == "X" && squares[4].textContent == "X" && squares[6].textContent == "X")) {
                endMessage.textContent = "You win!";
                return true;
            }

    // Computer won
    if(
        (squares[0].textContent == "O" && squares[1].textContent == "O" && squares[2].textContent == "O")
            || 
            (squares[3].textContent == "O" && squares[4].textContent == "O" && squares[5].textContent == "O") || 
            (squares[6].textContent == "O" && squares[7].textContent == "O" && squares[8].textContent == "O") || 
            (squares[0].textContent == "O" && squares[3].textContent == "O" && squares[6].textContent == "O") || 
            (squares[1].textContent == "O" && squares[4].textContent == "O" && squares[7].textContent == "O") || 
            (squares[2].textContent == "O" && squares[5].textContent == "O" && squares[8].textContent == "O") || 
            (squares[0].textContent == "O" && squares[4].textContent == "O" && squares[8].textContent == "O") || 
            (squares[2].textContent == "O" && squares[4].textContent == "O" && squares[6].textContent == "O")) {
                endMessage.textContent = "You lose!";
                return true;
            }

    // Tie
    if(squares[0].textContent != "" && squares[1].textContent != "" && squares[2].textContent != "" && squares[3].textContent != "" && squares[4].textContent != "" && squares[5].textContent != "" && squares[6].textContent != "" && squares[7].textContent != "" && squares[8].textContent != "") {
        endMessage.textContent = "It's a tie!";
        return true;
    }
}

function startGame() {
    squares.forEach(square => {
        square.style.display = "block";
        square.textContent = "";});
    endMessage.textContent = "";
    if(localStorage.getItem("startingPlayer") == "1") {
        startMessage.textContent = "You start!"
        localStorage.setItem("startingPlayer", "0");
    } else {
        computerPlay();
        startMessage.textContent = "Computer started";
        localStorage.setItem("startingPlayer", "1");
    }
}

function computerPlay() {
    let squareToPlay = Math.floor(Math.random() * 9);
    console.log(squareToPlay);
    while(squares[squareToPlay].textContent != "") {
        squareToPlay = Math.floor(Math.random() * 9);
    }
    squares[squareToPlay].textContent = "O";
}

function playRound() {
    if(this.textContent == "") {
        if(!checkIfGameEnded()) {
            startMessage.textContent = "";
            this.textContent = "X";
            if(!checkIfGameEnded()) {
                computerPlay();
                checkIfGameEnded();
            }
        }  
    }
    
}

const startGameButton = document.querySelector(".start-game");
startGameButton.addEventListener("click", startGame);

let squares = document.querySelectorAll(".grid-square");
squares.forEach(square => square.addEventListener("click", playRound));

const startMessage = document.querySelector(".start-message");

const endMessage = document.querySelector(".end-message");