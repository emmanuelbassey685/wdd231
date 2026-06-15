export function getSavedCity() {
    return localStorage.getItem('selectedCity') || '';
}

export function saveCity(cityName) {
    if (cityName) {
        localStorage.setItem('selectedCity', cityName);
    }
}