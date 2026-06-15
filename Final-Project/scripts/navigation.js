export function initNavigation() {
    const toggleBtn = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (toggleBtn && mainNav) {
        toggleBtn.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    // Set copyright year details automatically
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const lastModEl = document.getElementById('last-modified');
    if (lastModEl) lastModEl.textContent = document.lastModified;
}