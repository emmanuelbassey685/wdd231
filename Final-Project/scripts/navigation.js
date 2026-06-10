export function initNavigation() {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            toggleBtn.textContent = navMenu.classList.contains('open') ? '❌' : '☰';
        });
    }
}