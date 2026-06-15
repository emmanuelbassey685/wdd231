import { initNavigation } from './navigation.js';
import { populateCityDropdown } from './weather.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    const citySelect = document.getElementById('city-select');
    const alertsDisplay = document.getElementById('alerts-display');
    
    if (citySelect) {
        populateCityDropdown(citySelect);
        citySelect.addEventListener('change', (e) => {
            if (!e.target.value) return;
            const cityData = JSON.parse(e.target.value);
            alertsDisplay.innerHTML = `<h3>${cityData.name} Alerts</h3><p>No active dangerous weather warnings for this sector at present.</p>`;
        });
    }

    // Modal Operations Management
    const modal = document.getElementById('safety-modal');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.getElementById('close-modal-btn');

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
});