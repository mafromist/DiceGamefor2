let player1Score = 0;
let player2Score = 0;

let currentPlayer;

const pickAPlayer = () => Math.round(Math.random() + 1);

const rollDice = () => Math.round((Math.random() * 5) + 1);

currentPlayer = pickAPlayer();
console.log(currentPlayer);

currentDice = rollDice();
console.log(currentDice);

const dots = document.querySelectorAll(".dot");
const dice = document.querySelector(".dice");

const diceStyling = (num) => {
    dice.style.display = "flex";
    for (let dot of dots){
        dot.style.display = "none";
    }
    for(let i = 0; i <= num - 1; i++) {
        dots[i].style.display = "block"
    }
}

const p1Bg = document.querySelector(".playerOne");
const p2Bg = document.querySelector(".playerTwo");

const  switchBg = () => { 
    if (currentPlayer === 1) {
        p1Bg.style.backgroundColor = "white";
        p2Bg.style.backgroundColor = "transparent";
    } else {
        p1Bg.style.backgroundColor = "transparent";
        p2Bg.style.backgroundColor = "white";
    }
}
    
const rollBtnStyle = document.querySelector(".rollBtn");
const holdBtnStyle = document.querySelector(".holdBtn");
const newGameBtn = document.querySelector("#newGameBtn");

const newGame = () => {
    console.log("newGame");
    
    player1Score = 0;
    player2Score = 0;

    diceStyling(1);
    switchBg();

    rollBtnStyle.style.display = "inline-block";
    holdBtnStyle.style.display = "inline-block";
}

newGameBtn.addEventListener("click", () => {
    newGame();
});

const currentScore1 = document.querySelector("#currentScore1");
const currentScore2 = document.querySelector("#currentScore2");

const addScore = (num) => {
    if(currentPlayer === 1) {
        player1Score = num + holdScore1.textContent;
        console.log(player1Score);
        currentScore1.textContent = player1Score;
    } else {
        currentScore2.textContent = num + holdScore2.textContent;
    }
    console.log(player1Score);
    console.log(player2Score);
}
    
const game = (num) => {
    if(player1Score && player2Score < 20) {
        addScore(num);
        console.log(player1Score);
        console.log(player2Score);
    } else if (player1Score >= 20) {
        currentScore1.textContent = "You Win!";
    } else if (player2Score >= 20) {
        currentScore2.textContent = "You Win!";
    }
    
}

const rollBtn = document.querySelector("#rollBtn");

rollBtn.addEventListener("click", () => {
    rollDice();
    currentDice = rollDice();
    diceStyling(currentDice);
    console.log(currentDice);
    game(currentDice);
});

const holdScore1 = document.querySelector("#holdScore1");
const holdScore2 = document.querySelector("#holdScore2");

const holdFunc = () => {
    //ternary operator if/else as below
    currentPlayer = (currentPlayer === 1) ? 2 : 1;
    // everything on the left of there is the test
    // left is the true branch
    // right side is after colon is False branch
    switchBg();

    if(currentPlayer === 1){
        holdScore1.textContent = player1Score;
        currentScore1.textContent = 0;
   
    } else {
        holdScore2.textContent = player2Score;
        currentScore2.textContent = 0;
    }

    console.log(currentPlayer);
    console.log(player1Score);
    console.log(player2Score);
    console.log("holdScore");
}

const holdBtn = document.querySelector("#holdBtn");

holdBtn.addEventListener("click", () => {
    holdFunc();
    switchBg();
});






