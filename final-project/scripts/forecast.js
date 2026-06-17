export async function initForecast() {
    const selector = document.getElementById('city-selector-forecast');
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

        selector.addEventListener('change', (e) => {
            renderForecast(e.target.value);
        });
    } catch (err) {
        console.error(err);
    }
}

function renderForecast(cityId) {
    const container = document.getElementById('forecast-container');
    if (!container) return;

    if (!cityId) {
        container.innerHTML = `<p class="placeholder">Please select a city to see the 5-day forecast.</p>`;
        return;
    }

    const mockForecast = [
        { day: "Tomorrow", temp: "70°F", text: "Sunny" },
        { day: "Day 2", temp: "68°F", text: "Scattered Showers" },
        { day: "Day 3", temp: "75°F", text: "Clear and Warm" },
        { day: "Day 4", temp: "72°F", text: "Partly Cloudy" },
        { day: "Day 5", temp: "69°F", text: "Rainy" }
    ];

    container.innerHTML = mockForecast.map(f => `
        <div class="card">
            <h4>${f.day}</h4>
            <p><strong>${f.temp}</strong></p>
            <p>${f.text}</p>
        </div>
    `).join('');
}