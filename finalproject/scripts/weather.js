import { getSavedCity, saveCity } from './storage.js';

export async function initWeather() {
    const selector = document.getElementById('city-selector');
    if (!selector) return;

    try {
        const response = await fetch('data/cities.json');
        const data = await response.json();
        
        data.cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.id;
            option.textContent = city.name;
            selector.appendChild(option);
        });

        const saved = getSavedCity();
        if (saved) {
            selector.value = saved;
            fetchCurrentWeather(saved);
        }

        selector.addEventListener('change', (e) => {
            const targetCity = e.target.value;
            saveCity(targetCity);
            fetchCurrentWeather(targetCity);
        });

    } catch (err) {
        console.error('Failed to load cities config', err);
    }
}

function fetchCurrentWeather(cityId) {
    const display = document.getElementById('current-weather');
    if (!display || !cityId) return;

    // Simulating API response structure based on city selection
    const mockData = {
        ny: { temp: "72°F", condition: "Partly Cloudy", wind: "8 mph" },
        lon: { temp: "15°C", condition: "Light Rain", wind: "12 mph" },
        tok: { temp: "22°C", condition: "Clear Sky", wind: "4 mph" },
        syd: { temp: "18°C", condition: "Sunny", wind: "15 mph" },
    };

    const data = mockData[cityId];
    if (data) {
        display.innerHTML = `
            <h3>Current Weather</h3>
            <p><strong>Temperature:</strong> ${data.temp}</p>
            <p><strong>Condition:</strong> ${data.condition}</p>
            <p><strong>Wind Speed:</strong> ${data.wind}</p>
        `;
    }
}