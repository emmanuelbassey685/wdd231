export function initWeather() {
    const selector = document.getElementById('city-selector');
    const card = document.getElementById('weather-card');

    // Load available dataset definitions
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
                    displayWeather(selected);
                } else {
                    card.classList.add('hidden');
                }
            });
        }).catch(err => console.error("Error fetching city metadata:", err));
}

function displayWeather(data) {
    const card = document.getElementById('weather-card');
    document.getElementById('weather-city').textContent = data.name;
    document.getElementById('weather-temp').textContent = `${data.temp}°C`;
    document.getElementById('weather-desc').textContent = data.desc;
    document.getElementById('weather-humidity').textContent = data.humidity;
    document.getElementById('weather-wind').textContent = data.wind;
    card.classList.remove('hidden');
}