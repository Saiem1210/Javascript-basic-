// Select all the boxes, reset button, new game button, message container, and message element
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Initialize variables to track the current turn and count of moves
let turnO = true;
let count = 0; // to track draw

// Define the winning patterns for the game
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Function to handle a game draw
const gameDraw = () => {
    msg.innerText = "Game Draw"; // Display draw message
    msgContainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable all boxes
}

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "O"; // Set box text to "O"
            turnO = false; // Switch turn
        } else {
            box.innerText = "X"; // Set box text to "X"
            turnO = true; // Switch turn
        }
        box.disabled = true; // Disable the clicked box
        count++; // Increment move count

        let isWinner = checkWinner(); // Check for a winner
        if (count === 9 && !isWinner) {
            gameDraw(); // Handle game draw if all boxes are filled and no winner
        }
    })
});

// Function to reset the game
const resetGame = () => {
    turnO = true; // Reset turn to "O"
    enableBoxes(); // Enable all boxes
    msgContainer.classList.add("hide"); // Hide the message container
    count = 0; // Reset move count
}

// Function to enable all boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Enable the box
        box.innerText = ""; // Clear the box text
    }
}

// Function to disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Disable the box
    }
}

// Function to show the winner
const showWinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`; // Display winner message
    msgContainer.classList.remove("hide"); // Show the message container
    disableBoxes(); // Disable all boxes
}

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val); // Show the winner
                return true; // Return true if there's a winner
            }
        }
    }
    return false; // Return false if no winner
}

// Add event listeners to reset and new game buttons
newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
