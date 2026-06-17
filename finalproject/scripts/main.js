import { initNavigation } from './navigation.js';
import { initWeather } from './weather.js';
import { initModal } from './modal.js';
import { initForecast } from './forecast.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initWeather();
    initModal();
    initForecast();

    // Footer Dates
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const lastModEl = document.getElementById('last-modified');
    if (lastModEl) lastModEl.textContent = document.lastModified;
});