const dots = document.querySelectorAll(".dot");
const dice = document.querySelector(".dice");
const p1Bg = document.querySelector(".playerOne");
const p2Bg = document.querySelector(".playerTwo");
const rollBtnStyle = document.querySelector(".rollBtn");
const holdBtnStyle = document.querySelector(".holdBtn");
const newGameBtn = document.querySelector("#newGameBtn");
const currentScore1 = document.querySelector("#currentScore1");
const currentScore2 = document.querySelector("#currentScore2");
const holdScore1 = document.querySelector("#holdScore1");
const holdScore2 = document.querySelector("#holdScore2");
const rollBtn = document.querySelector("#rollBtn");
const holdBtn = document.querySelector("#holdBtn");

let player1Score = 0;
let player2Score = 0;
let hold1Score = 0;
let hold2Score = 0;

let currentPlayer;

const pickAPlayer = () => Math.round(Math.random() + 1);

const rollDice = () => Math.round((Math.random() * 5) + 1);

newGameBtn.addEventListener("click", () => {
    newGame();
});

rollBtn.addEventListener("click", () => {
    rollDice();
    currentDice = rollDice();
    diceStyling(currentDice);
    console.log(currentDice);
    
    if (currentDice !== 1 && hold1Score === 0) {    
        if (currentPlayer == 1) {
            player1Score = player1Score + currentDice;
            currentScore1.textContent = player1Score;
        } else {
            player2Score = player2Score + currentDice;
            currentScore2.textContent = player2Score;
        }
    } else if (currentDice !== 1 && hold1Score !== 0) {    
        if (currentPlayer == 1) {
            let afterHoldScore1 = 0;
            player1Score = hold1Score + currentDice ;
            currentScore1.textContent = player1Score;
        } else {
            player2Score = hold2Score + currentDice;
            currentScore2.textContent = player2Score;
        }
    } else if (currentDice === 1) {
        currentScore1.textContent = (currentPlayer === 1) ? "You Lost" : "You Win!";
        currentScore2.textContent = (currentPlayer === 2) ? "You Lost" : "You Win!";
    }
    doesWin();
});

holdBtn.addEventListener("click", () => {
    holdFunc();
});

const newGame = () => {
    currentPlayer = pickAPlayer();

    player1Score = 0;
    player2Score = 0;
    hold1Score = 0;
    hold2Score = 0;

    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
    holdScore1.textContent = 0;
    holdScore2.textContent = 0;

    diceStyling(1);
    switchBg();

    rollBtnStyle.style.display = "inline-block";
    holdBtnStyle.style.display = "inline-block";
}

const  switchBg = () => { 
    if (currentPlayer === 1) {
        p1Bg.style.backgroundColor = "white";
        p2Bg.style.backgroundColor = "transparent";

    } else {
        p1Bg.style.backgroundColor = "transparent";
        p2Bg.style.backgroundColor = "white";
    }
}

const diceStyling = (num) => {
    dice.style.display = "flex";

    for (let dot of dots){
        dot.style.display = "none";
    }

    for(let i = 0; i <= num - 1; i++) {
        dots[i].style.display = "block"
    }
}

const holdFunc = () => {
    if(currentPlayer === 1){
        hold1Score = player1Score;
        holdScore1.textContent = player1Score;
        currentScore1.textContent = 0;

    } else {
        hold2Score = player2Score;
        holdScore2.textContent = player2Score;
        currentScore2.textContent = 0;
    }
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    switchBg();
}

const doesWin = () => {
    if (player1Score >= 20) {
        currentScore1.textContent = "You Win!";
        currentScore2.textContent = "You Lost!";

    } else if (player2Score >= 20) {
        currentScore1.textContent = "You Lost!";
        currentScore2.textContent = "You Win!";    
    }
}

//ternary operator if/else as below
//currentPlayer = (currentPlayer === 1) ? 2 : 1;
// everything on the left of there is the test
// left is the true branch
// right side is after colon is False branch