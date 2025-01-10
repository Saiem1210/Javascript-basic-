const jokecontainer = document.querySelector(".joke"); // Select the container to display the joke
const btn = document.getElementById("btn"); // Select the button element by its ID
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"; // URL for the joke API

let getJoke = () => {
    fetch(url)
        .then(data => data.json()) // Convert the response to JSON
        .then(item => {
            console.log(item.joke); // Log the joke to the console (optional)
            jokecontainer.innerText = item.joke; // Display the joke inside the container
        })
        .catch(error => console.error("Error fetching joke:", error)); // Handle any errors
};

// Call the getJoke function
getJoke();

// Add an event listener to the button to fetch a new joke when clicked
btn.addEventListener("click", getJoke);
