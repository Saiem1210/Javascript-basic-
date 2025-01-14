// Selecting elements from the DOM
const inputbox= document.querySelector('.input-box'); // Selecting the input box element
const searchbtn=document.getElementById('searchbtn'); // Selecting the search button element
const weather_img=document.querySelector('.weather-img'); // Selecting the weather image element
const temperature=document.querySelector('.temperature'); // Selecting the temperature element
const description=document.querySelector('.description'); // Selecting the description element
const humidity=document.getElementById('Humidity'); // Selecting the humidity element
const windspeed=document.getElementById('wind-speed'); // Selecting the wind speed element
const location_not_found=document.querySelector(".location-not-found"); // Selecting the location not found element
const weather_body=document.querySelector(".weather-body"); // Selecting the weather body element

// Function to check the weather for a given city
async function checkWeather(city){
    const api_key="18850020424484be3c9f67574084ae44"; // API key for OpenWeatherMap
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`; // Constructing the URL to fetch weather data for the given city
    const weather_data=await fetch(`${url}`).then(response=> response.json()); // Fetching the weather data and converting it to JSON
    console.log(weather_data); // Logging the weather data to the console

    // Handling the case where the location is not found
    if(weather_data.cod==="404"){
        location_not_found.style.display="flex"; // Displaying the location not found message
        weather_body.style.display="none"; // Hiding the weather body
        console.log('error'); // Logging an error message
        return; // Exiting the function
    }

    // Displaying the weather data
    location_not_found.style.display="none"; // Hiding the location not found message
    weather_body.style.display="flex"; // Displaying the weather body
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`; // Setting the temperature in Celsius
    description.innerHTML=`${weather_data.weather[0].description}`; // Setting the weather description
    humidity.innerHTML=`${weather_data.main.humidity}%`; // Setting the humidity
    windspeed.innerHTML=`${weather_data.wind.speed}Kmph`; // Setting the wind speed

    // Setting the weather image based on the weather condition
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="/assets/cloud.png"; // Setting image for cloudy weather
            break;
        case 'Clear':
            weather_img.src="/assets/clear.png"; // Setting image for clear weather
            break;
        case 'Rain':
            weather_img.src="/assets/rain.png"; // Setting image for rainy weather
            break;
        case 'Mist':
            weather_img.src="/assets/mist.png"; // Setting image for misty weather
            break;
        case 'Snow':
            weather_img.src="/assets/snow.png"; // Setting image for snowy weather
            break;
    }
}

// Adding an event listener to the search button
searchbtn.addEventListener("click",()=>{
    checkWeather(inputbox.value); // Calling the checkWeather function with the value from the input box
});
