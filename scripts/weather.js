// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API Configuration Constants
const LAT = '49.76';
const LON = '6.64';
const API_KEY = '81e7d3dd142281cf3a0b21c4bdbb20f4'; // Replace with your operational API key
const UNITS = 'imperial'; // Use 'metric' for Celsius if preferred

// Construct the full OpenWeatherMap API URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${API_KEY}`;

// Define asynchronous function to fetch API data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Build the displayResults function to fill the blanks
function displayResults(data) {
    // Round to the nearest whole integer for clean presentation
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`; 
    
    // Extract icon code and description path strings
    const iconCode = data.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    let desc = data.weather[0].description;
    
    // Set image attributes
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    
    // Set description caption text
    captionDesc.textContent = `${desc}`;
}

// Invoke the function to execute on load
apiFetch();