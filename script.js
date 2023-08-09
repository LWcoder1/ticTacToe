function Player(name) {
    let currPositions = [];

    const getPositions = () => {
        return currPositions;
    }

    const addPosition = (number) => {
        return currPositions.push(number);
    }
    
    const reset = () => {
        currPositions = [];
    }

    return {getPositions, addPosition, reset}
}

function boardInactivation() {
    ticTacToeBoxes.forEach((box) => {
        if (box.textContent == "") {
            box.textContent = " ";
        }
    });
}

function winnerNotificationDiv(result) {
    const newDivBackground = document.createElement("div");
    newDivBackground.classList.add("notification-div");
    const congratsH1 = document.createElement("h1");
    congratsH1.textContent = "Congratulations!";
    newDivBackground.appendChild(congratsH1);
    const exitH1 = document.createElement("h1");
    exitH1.textContent = "X";
    exitH1.addEventListener("click", () => {
        document.body.removeChild(newDivBackground);
    })
    exitH1.classList.add("exit")
    newDivBackground.appendChild(exitH1);
    const winnerH1 = document.createElement("h1");
    if (result == 0) {
        winnerH1.textContent = "Player One Wins";
    }
    else if (result == 1) {
        winnerH1.textContent = "Player Two Wins";

    }
    else {
        winnerH1.textContent = "Tie Game"
    }
    newDivBackground.appendChild(winnerH1);
    document.body.appendChild(newDivBackground);

}

function boardReset() {
    ticTacToeBoxes.forEach((box) => {
        box.textContent = "";
        box.style.color = "#FFF6E0"
    })
    playerOne.reset();
    playerTwo.reset();

}

function endGame(playerOne, playerTwo) {

    if (playerOne.includes("1") && playerOne.includes("2") && playerOne.includes("3")){
        boardInactivation();
        ticTacToeBoxes[0].style.color = "#A78295";
        ticTacToeBoxes[1].style.color = "#A78295";
        ticTacToeBoxes[2].style.color = "#A78295";
        winnerNotificationDiv(0);


    }
    else if(playerOne.includes("4") && playerOne.includes("5") && playerOne.includes("6")) {
        boardInactivation();
        ticTacToeBoxes[3].style.color = "#A78295";
        ticTacToeBoxes[4].style.color = "#A78295";
        ticTacToeBoxes[5].style.color = "#A78295";
        winnerNotificationDiv(0);

    }
    else if(playerOne.includes("7") && playerOne.includes("8") && playerOne.includes("9")) {
        boardInactivation();
        ticTacToeBoxes[6].style.color = "#A78295";
        ticTacToeBoxes[7].style.color = "#A78295";
        ticTacToeBoxes[8].style.color = "#A78295";
        winnerNotificationDiv();

    }
    else if(playerOne.includes("1") && playerOne.includes("4") && playerOne.includes("7")) {
        boardInactivation();
        ticTacToeBoxes[0].style.color = "#A78295";
        ticTacToeBoxes[3].style.color = "#A78295";
        ticTacToeBoxes[6].style.color = "#A78295";
        winnerNotificationDiv(0);

    }
    else if(playerOne.includes("2") && playerOne.includes("5") && playerOne.includes("8")) {
        boardInactivation();
        ticTacToeBoxes[1].style.color = "#A78295";
        ticTacToeBoxes[4].style.color = "#A78295";
        ticTacToeBoxes[7].style.color = "#A78295";
        winnerNotificationDiv(0);

    }
    else if(playerOne.includes("3") && playerOne.includes("6") && playerOne.includes("9")) {
        boardInactivation();
        ticTacToeBoxes[2].style.color = "#A78295";
        ticTacToeBoxes[5].style.color = "#A78295";
        ticTacToeBoxes[8].style.color = "#A78295";
        winnerNotificationDiv(0);

    }
    else if(playerOne.includes("1") && playerOne.includes("5") && playerOne.includes("9")) {
        boardInactivation();
        ticTacToeBoxes[0].style.color = "#A78295";
        ticTacToeBoxes[4].style.color = "#A78295";
        ticTacToeBoxes[8].style.color = "#A78295";
        winnerNotificationDiv(0);

    }
    else if(playerOne.includes("3") && playerOne.includes("5") && playerOne.includes("7")) {
        boardInactivation();
        ticTacToeBoxes[2].style.color = "#A78295";
        ticTacToeBoxes[4].style.color = "#A78295";
        ticTacToeBoxes[6].style.color = "#A78295";
        winnerNotificationDiv(0);

    }

    if (playerTwo.includes("1") && playerTwo.includes("2") && playerTwo.includes("3")){
        boardInactivation();
        ticTacToeBoxes[0].style.color = "#E86A33";
        ticTacToeBoxes[1].style.color = "#E86A33";
        ticTacToeBoxes[2].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("4") && playerTwo.includes("5") && playerTwo.includes("6")) {
        boardInactivation();
        ticTacToeBoxes[3].style.color = "#E86A33";
        ticTacToeBoxes[4].style.color = "#E86A33";
        ticTacToeBoxes[5].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("7") && playerTwo.includes("8") && playerTwo.includes("9")) {
        boardInactivation();
        ticTacToeBoxes[6].style.color = "#E86A33";
        ticTacToeBoxes[7].style.color = "#E86A33";
        ticTacToeBoxes[8].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("1") && playerTwo.includes("4") && playerTwo.includes("7")) {
        boardInactivation();
        ticTacToeBoxes[0].style.color = "#E86A33";
        ticTacToeBoxes[3].style.color = "#E86A33";
        ticTacToeBoxes[6].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("2") && playerTwo.includes("5") && playerTwo.includes("8")) {
        boardInactivation();
        ticTacToeBoxes[1].style.color = "#E86A33";
        ticTacToeBoxes[4].style.color = "#E86A33";
        ticTacToeBoxes[7].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("3") && playerTwo.includes("6") && playerTwo.includes("9")) {
        boardInactivation();
        ticTacToeBoxes[2].style.color = "#E86A33";
        ticTacToeBoxes[5].style.color = "#E86A33";
        ticTacToeBoxes[8].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("1") && playerTwo.includes("5") && playerTwo.includes("9")) {
        boardInactivation();
        ticTacToeBoxes[0].style.color = "#E86A33";
        ticTacToeBoxes[4].style.color = "#E86A33";
        ticTacToeBoxes[8].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }
    else if(playerTwo.includes("3") && playerTwo.includes("5") && playerTwo.includes("7")) {
        boardInactivation();
        ticTacToeBoxes[2].style.color = "#E86A33";
        ticTacToeBoxes[4].style.color = "#E86A33";
        ticTacToeBoxes[6].style.color = "#E86A33";
        winnerNotificationDiv(1);

    }

    else if(playerOne.length + playerTwo.length == 9) {
        winnerNotificationDiv(2);
    }


    
}

function playerTurn(box, currGame) {
        if (currGame == 0) {
            if (box.textContent == "") {
                box.textContent = "X";
                playerOne.addPosition(box.className)
                currGame = 1;  
            }
        }
        else {
            if (box.textContent == "") {
                box.textContent = "O";
                playerTwo.addPosition(box.className)
                currGame = 0;  


            }
        }
        endGame(playerOne.getPositions(), playerTwo.getPositions());
        return currGame;

}

function setUp() {
    let currGame = 0;
    const restartButton = document.querySelector(".retry");

    restartButton.addEventListener("click", () => {
        boardReset();
        currGame = 0;
    });
    ticTacToeBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            currGame = playerTurn(box, currGame);
        })
    })


}

const ticTacToeBoxes = document.querySelector(".gameDiv").querySelectorAll("div");
const playerOne = new Player("Larry");
const playerTwo = new Player("Robot");
setUp();
