import { initNavigation } from './navigation.js';
import { populateCityDropdown, fetchWeatherData } from './weather.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    const citySelect = document.getElementById('city-select');
    const forecastContainer = document.getElementById('forecast-container');

    populateCityDropdown(citySelect);

    citySelect.addEventListener('change', async (e) => {
        if (!e.target.value) return;
        const cityData = JSON.parse(e.target.value);
        const data = await fetchWeatherData(cityData.lat, cityData.lon);
        
        if (data && data.daily) {
            forecastContainer.innerHTML = '';
            data.daily.time.forEach((time, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${time}</h3>
                    <p>High: ${data.daily.temperature_2m_max[index]}°C</p>
                    <p>Low: ${data.daily.temperature_2m_min[index]}°C</p>
                `;
                forecastContainer.appendChild(card);
            });
        }
    });
});