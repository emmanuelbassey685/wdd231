// Base weather utility layer targeting public configurations
export async function fetchCities() {
    try {
        const response = await fetch('data/cities.json');
        if (!response.ok) throw new Error('Failed to load city data metrics.');
        return await response.json();
    } catch (error) {
        console.error('City configurations load failure:', error);
        return [];
    }
}

export async function populateCityDropdown(selectElement, callback) {
    const cities = await fetchCities();
    selectElement.innerHTML = '<option value="">-- Choose Target Location --</option>';
    
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = JSON.stringify({ lat: city.lat, lon: city.lon, name: city.name });
        option.textContent = city.name;
        selectElement.appendChild(option);
    });

    if (callback) callback();
}

// Uses open-meteo open public API endpoints requiring zero authentication tokens
export async function fetchWeatherData(lat, lon) {
    const url = `https://open-meteo.com{lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('API platform response failure.');
        return await response.json();
    } catch (error) {
        console.error('Weather download pipeline failure:', error);
        return null;
    }
}