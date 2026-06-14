export function updateTimestamp() {
    const modifiedField = document.getElementById('last-modified');
    if (modifiedField) {
        modifiedField.textContent = document.lastModified;
    }
    
    // Store track record of access
    localStorage.setItem('skypulse-last-visit', new Date().toISOString());
}
