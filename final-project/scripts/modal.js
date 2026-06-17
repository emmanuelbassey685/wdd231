export function initModal() {
    const openBtn = document.getElementById('open-modal-btn');
    const modal = document.getElementById('safety-modal');
    const closeBtn = document.querySelector('.close-btn');

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
}