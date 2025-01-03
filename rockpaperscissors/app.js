// Initialize user and computer scores
let userscore = 0;
let compscore = 0;

// Select all choice buttons
const choices = document.querySelectorAll(".choice");

// Select the message display element
const msg = document.querySelector("#msg");

// Select score display elements
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate a random choice for the computer
const genCompChoice = () => {
    let opt = ["rock", "paper", "scissors"];
    let ranidx = Math.floor(Math.random() * 3); // Generates a random index from 0 to 2
    return opt[ranidx]; // Returns the choice corresponding to the random index
}

// Function to handle a game draw
const gameDraw = () => {
    console.log("The game is draw");
    msg.innerText = "GAME DRAW"; // Updates the message to indicate a draw
}

// Function to show the winner and update scores
const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userscore++; // Increments user score
        userScorePara.innerText = userscore;// Updates user score display
        msg.innerText = "YOU WIN";// Updates the message to indicate a win
        console.log(`You win ${userchoice} beats ${compChoice}`);
        msg.style.backgroundColor = "green"; // Corrected background color assignment
    } else {
        compscore++;//increments computer score
        compScorePara.innerText = compscore;// Updates computer score display
        msg.innerText = "You Lose";// Updates the message to indicate a loss
        console.log(`You Lose ${compChoice} beats ${userchoice}`);
        msg.style.backgroundColor = "red"; // Sets the background color to red for a loss
    }
}

// Function to play the game
const playGame = (userchoice) => {
    console.log("user choice: ", userchoice);
    const compChoice = genCompChoice();// Generates a random choice for the computer    
    console.log("comp choice: ", compChoice);

    if (userchoice === compChoice) {
        gameDraw();// If user choice and computer choice are the same, it's a draw
    } else {
        let userWin = true;
        // Determine if the user wins based on their choice and the computer's choice
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);// Show the winner and update scores
    }
}

// Add click event listeners to each choice button
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");// Get the ID of the clicked choice
        playGame(userchoice);// Play the game with the user's choice
    });
});
