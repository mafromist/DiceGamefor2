let title1 = document.querySelector("#title1");
let title2 = document.querySelector("#title2");
let currentScoreOne = document.querySelector("#currentScoreOne");
let currentScoreTwo = document.querySelector("#currentScoreTwo");
let holdScoreOne = document.querySelector("#holdScoreOne");
let holdScoreTwo = document.querySelector("#holdScoreTwo");
let player1bg = document.querySelector(".playerOne");
let player2bg = document.querySelector(".playerTwo");
const newGameBtn = document.querySelector("#newGameBtn");
const rollBtn = document.querySelector("#rollBtn");
const holdBtn = document.querySelector("#holdBtn");
const rollBtnArea = document.querySelector(".rollBtnArea");
const holdBtnArea = document.querySelector(".holdBtnArea");
const diceBg = document.querySelector("#diceBg");
const dots = document.querySelectorAll(".dot");

let currentPlayer = 1;
//when hold button click change the currentPlayer into 2

//When click on new Game 
    //style.display will be block of dice //roll dice button 
    //hold score button   //player 1's background change color

newGameBtn.addEventListener ("click", () => {
    currentScoreOne.textContent = 0;
    currentScoreTwo.textContent = 0;
    holdScoreOne.textContent = 0;
    holdScoreTwo.textContent = 0;
    rollBtnArea.style.display = "inline-block";
    holdBtnArea.style.display = "inline-block";
    diceBg.style.display = "flex";
    player1bg.style.backgroundColor = "white";
    dots[0].style.display = "block";
});

// function : when click on the roll dice it will affect only one player of 
// currentScore and added to this player's until the player click on hold score


//for Dice Styling after Roll
const diceDots = (num) => {
    // first disable all dots from the dice
        for(let dot of dots) {
            dot.style.display = "none";
        }

        for(let i = 0; i <= num - 1 ; i++) {
            dots[i].style.display = "block";
        }
}
//add rolled Dice values to currentScore

let player1Score = 0;
let player1HoldScore = 0;
let player2Score = 0;
let player2HoldScore = 0;

const addScore = (num) => {
    if(currentPlayer == 1){
        player1Score = num + player1Score;
        currentScoreOne.textContent = player1Score;
    } else {
        player2Score = num + player2Score;
        currentScoreTwo.textContent = player2Score;  
    }
    console.log(num);
}

/*Roll Dice and 
//add styling for Dice and 
//check which player's turn via bgColor
if the player's score < 20 score,use function addScore1() else the player wins;

*/
const rollAct = () => {

    rollBtn.addEventListener("click", () => {
        const randomNum = parseInt((Math.random() * 6) + 1);
        console.log(randomNum);
        diceDots(randomNum);
        
        if (player1bg.style.backgroundColor == "white") {
            if(randomNum === 1) {
                currentScoreOne.textContent = "You Lost!";
            } else {
                if(currentScoreOne.textContent < 20) {
                    addScore1(randomNum);
                } else {
                    currentScoreOne.textContent = "YOU WIN!"
                }
            }
        }

        if (player2bg.style.backgroundColor == "white") {
            if(randomNum === 1) {
                currentScoreOne.textContent = "You Lost!";
            } else {
                if(currentScoreTwo.textContent < 20) {
                    addScore2(randomNum);
                } else {
                    currentScoreTwo.textContent = "YOU WIN!"
                }
            }
        }
    })
};

rollAct();


//if player click on hold score, 
    //the currentScore value will be added to holdScore.textContent and
    //keep it to use later, 

    //also the other player's bg will change the color

//when the other player will click on roll dice button, 
    //it affect only the player's currentScore then it will follow same function 3

//if the player will hit hold score button, 
    //other player can keep playing as start from the holdScore value

    //also the other player's bg will change the color

//players can click as much as they want whoever can pass the score of 20 first

//if a player roll ONE, it lose the game