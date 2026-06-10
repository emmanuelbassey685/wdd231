export function initForecast() {
    const selector = document.getElementById('forecast-city-selector');
    const container = document.getElementById('forecast-container');

    fetch('data/cities.json')
        .then(res => res.json())
        .then(cities => {
            cities.forEach(city => {
                const opt = document.createElement('option');
                opt.value = city.id;
                opt.textContent = city.name;
                selector.appendChild(opt);
            });

            selector.addEventListener('change', (e) => {
                const selected = cities.find(c => c.id === e.target.value);
                if (selected) {
                    generateForecastCards(selected.name);
                } else {
                    container.innerHTML = '';
                }
            });
        });
}

function generateForecastCards(cityName) {
    const container = document.getElementById('forecast-container');
    container.innerHTML = ''; // reset

    const days = ['Today', 'Tomorrow', 'Day after Tomorrow', 'Day Four', 'Extended Outlook'];
    const fakeModifiers = [2, -1, 4, 1, 3]; // Fake forecast variance logic 

    days.forEach((day, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${day}</h3>
            <p class="light-text">${cityName}</p>
            <span class="temp">${20 + fakeModifiers[index]}°C</span>
            <p>Varied Cloud Cover</p>
        `;
        container.appendChild(card);
    });
}