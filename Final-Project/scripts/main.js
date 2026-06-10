import { initNavigation } from './navigation.js';
import { initWeather } from './weather.js';
import { initModals } from './modal.js';
import { updateTimestamp } from './storage.js';
import { initForecast } from './forecast.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateTimestamp();

    // Contextual execution base on current page views
    if (document.getElementById('city-selector')) {
        initWeather();
    }
    if (document.getElementById('forecast-city-selector')) {
        initForecast();
    }
    if (document.querySelectorAll('.info-btn').length > 0) {
        initModals();
    }

    // Set layout elements globally accessible
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});