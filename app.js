/*















/////////////////////////////////////////////////

const title = document.querySelector("#title");
let score = document.querySelector("#score");
const diceBck = document.querySelector("#diceBackground");
const button = document.querySelector("#button");
const dots = document.querySelectorAll(".dot");

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