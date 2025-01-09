

// Select the input element and all buttons
let input = document.getElementById("inputbox"); // Adjusted selector to match class or id
let buttons = document.querySelectorAll("button");

let string = ""; // Initialize an empty string to store the input
let arr = Array.from(buttons); // Convert NodeList of buttons to an array

// Add event listeners to each button
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string); // Evaluate the expression
            input.value = string; // Update the input value
        } else if (e.target.innerHTML == "AC") {
            string = ""; // Clear the input
            input.value = string; // Update the input value
        } 
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        
        else {
            string += e.target.innerHTML; // Append the button value to the string
            input.value = string; // Update the input value
        }
    });
});
