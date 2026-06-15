import { initNavigation } from './navigation.js';
import { populateCityDropdown, fetchWeatherData } from './weather.js';
import { getSavedCity, saveCity } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();

    const citySelect = document.getElementById('city-select');
    const weatherCard = document.getElementById('weather-card');
    const hiddenCityInput = document.getElementById('hidden-city');

    populateCityDropdown(citySelect, () => {
        const savedCity = getSavedCity();
        if (savedCity) {
            // Find and restore options matching historical user setups
            for (let option of citySelect.options) {
                if (option.value && JSON.parse(option.value).name === savedCity) {
                    option.selected = true;
                    handleCityChange(JSON.parse(option.value));
                    break;
                }
            }
        }
    });

    citySelect.addEventListener('change', (e) => {
        if (!e.target.value) return;
        const cityData = JSON.parse(e.target.value);
        saveCity(cityData.name);
        handleCityChange(cityData);
    });

    async function handleCityChange(cityData) {
        if (hiddenCityInput) hiddenCityInput.value = cityData.name;
        const data = await fetchWeatherData(cityData.lat, cityData.lon);
        if (data && data.current_weather) {
            document.getElementById('weather-city').textContent = cityData.name;
            document.getElementById('weather-temp').textContent = data.current_weather.temperature;
            document.getElementById('weather-desc').textContent = `Wind Direction Angle: ${data.current_weather.winddirection}°`;
            document.getElementById('weather-wind').textContent = data.current_weather.windspeed;
            document.getElementById('weather-humidity').textContent = 'N/A';
            weatherCard.classList.remove('hidden');
        }
    }
});