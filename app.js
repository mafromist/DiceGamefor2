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


let player1Score = 0;
let player1HoldScore = 0;
let player2Score = 0;
let player2HoldScore = 0;

//When click on new Game 
    //style.display will be block of dice //roll dice button 
    //hold score button   //player 1's background change color
const initGame = () => {
    newGameBtn.addEventListener ("click", () => {
        currentScoreOne.textContent = 0;
        currentScoreTwo.textContent = 0;
        holdScoreOne.textContent = 0;
        holdScoreTwo.textContent = 0;
        rollBtnArea.style.display = "inline-block";
        holdBtnArea.style.display = "inline-block";
        player1bg.style.backgroundColor = "#fff";
        diceBg.style.display = "flex";
        dots[0].style.display = "block";
    });
}

// function : when click on the roll dice it will affect only one player of 
//currentScore and added to this player's until the player click on hold score

initGame();

rollBtn.addEventListener("click", () => {
    const randomNum = parseInt(Math.random() * 6) + 1;
    let currentDiceValue = 0;
    
    if(player1bg.style.backgroundColor === "#fff") {
        if(randomNum === 1) {
            currentScoreOne.textContent = "You Lost!";
            diceDots(randomNum);
        } else {
            if(player1Score < 20) {
                diceDots(randomNum);
                currentDiceValue = randomNum;
                player1Score += randomNum;
                currentScoreOne.textContent = player1Score;
            } else {
                currentScoreOne.textContent = "You Win!";
                console.log(currentDiceValue);
            }
        }
    } else if (player2bg.style.backgroundColor === "#fff") {
        if(randomNum === 1) {
            currentScoreTwo.textContent = "You Lost!";
            diceDots(randomNum);
        } else {
            if(player2Score < 20) {
                diceDots(randomNum);
                currentDiceValue = randomNum;
                player2Score += randomNum;
                currentScoreTwo.textContent = player2Score;
            } else {
                currentScoreTwo.textContent = "You Win!";
                console.log(currentDiceValue);
            }
        } 
    }
});

/* I left it here to look tomorrow, I am trying to find way to enable the Roll Button
It does not work if I put the code in if/else statement
*/

/* also i need hold button function */

//This function for styling of Dice
const diceDots = (num) => {
    // first disable all dots from the dice
        for(let dot of dots) {
            dot.style.display = "none";
        }
//this loop for enable dot classes for the dice dots depends on the rolled number 
        for(let i = 0; i <= num - 1 ; i++) {
            dots[i].style.display = "block";
        }
}
/*    //if dice 1, the game is over if not just continue to add numbers to the sum
        rollDice(randomNum);

    if(num === 1){
        currentScoreOne.textContent = "You Lost!";
    } else {
        player1Score += num;
        currentScoreOne.textContent = player1Score;
    }

const rollDice = (num) => {
    if(currentScoreOne.textContent && currentScoreTwo.textContent < 20) {
        diceDots(num);
    }

    if (currentScoreOne.textContent >= 20) {
        title1.textContent = "You Win!";
        currentScoreOne = 0;
        holdScoreOne = 0;
        currentScoreTwo = 0;
        holdScoreTwo = 0;
    }
    
    if (currentScoreTwo.textContent >= 20) {
        title2.textContent = "You Win!";
        currentScoreOne = 0;
        holdScoreOne = 0;
        currentScoreTwo = 0;
        holdScoreTwo = 0;
    }
};


*/

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


/*DEFINE ELEMENTS
    a.#title1
    b.#title2
    c.#currentScoreOne
    j.#currentScoreTwo
    d.#scoreOne
    d.#scoreTwo
    e.#newGameBtn
    f.#diceBg
    g. .dot
    h.#rollBtn
    i.#holdBtn
    
*/

/*DEFINE VARIABLES

    sum for currentScoreOne
    sum for holdScoreTwo
    sum for currentScoreTwo
    sum for holdScoreTwo  

*/












/*

/////////////////////////////////////////////////

let sum = 0;

//This function for styling of Dice
const diceDots = (num) => {
// first disable all dots from the dice
    for(let dot of dots) {
        dot.style.display = "none";
    }
//if dice 1, the game is over if not just continue to add numbers to the sum
    if(num === 1){
        score.textContent = "You Lost!";
        button.textContent = "Start AGAIN?";
    } else {
        sum += num;
        score.textContent = sum;
    }
//this loop for enable dot classes for the dice dots depends on the rolled number 
    for(let i = 0; i <= num - 1 ; i++) {
        dots[i].style.display = "block";
    }
}

const afterClick = (num) => {
    if(score.textContent < 20) {
        diceDots(num);
    }

    if (score.textContent >= 20) {
        score.textContent = "You Win!";
        button.textContent = "Start AGAIN?";
    }
};

button.addEventListener("click", () => {
    if(button.textContent === "Roll") {
        diceBck.style.display = "flex";
        const randomNum = parseInt(Math.random() * 6) + 1;
        afterClick(randomNum);
    } else {
        resetGame();
    }
});

const resetGame = () => {
    if (button.textContent === "Start AGAIN?") {
        button.textContent = "Roll";
        score.textContent = 0;
        sum = 0;
        diceBck.style.display = "none";
    }
};


//////Dice Game for 1 Player Logic Instrcution

Get a random number between 1 to 6 for dice and add the numbers each other create a sum

    Click on #button 
        a.Show the Dice and get a random number between 1-6 --> done
        b.change .subContainer2 to display = "flex" and keep it;
        c.Change Dice Styling Classes depends on the randomNum
        d.Show the number as change textContent #score
        e.Keep the roll button for roll another number
        f.Add the number to the sum;

        if randomNum == 1;
        Styling
        change .one display = "block";

        if randomNum == 2 
        Styling
        change .two display = "block";
        
        if randomNum == 3 
        Styling
        change .three display = "block";
        
        if randomNum == 4;
        Styling
        change .four display = "block";

        if randomNum == 5; 
        Styling
        change .five display = "block";
        
        if randomNum == 6;
        Styling
        change .six display = "block";

*/ 