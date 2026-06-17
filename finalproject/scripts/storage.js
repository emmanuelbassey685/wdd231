export function getSavedCity() {
    return localStorage.getItem('selectedCity') || '';
}

export function saveCity(cityId) {
    localStorage.setItem('selectedCity', cityId);
}