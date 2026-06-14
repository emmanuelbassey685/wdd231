export function updateTimestamp() {
    const modifiedField = document.getElementById('last-modified');
    if (modifiedField) {
        modifiedField.textContent = document.lastModified;
    }
    
    // Store track record of access
    localStorage.setItem('skycast-last-visit', new Date().toISOString());
}

export function savePreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getPreference(key, defaultValue) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
}