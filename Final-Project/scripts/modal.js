export function initModals() {
    const triggerButtons = document.querySelectorAll('.info-btn');
    const closeButtons = document.querySelectorAll('.close-modal');

    triggerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetModalId = btn.getAttribute('data-modal');
            const targetModal = document.getElementById(targetModalId);
            if (targetModal) targetModal.classList.remove('hidden');
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').classList.add('hidden');
        });
    });

    // Close window if clicking background
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });
}