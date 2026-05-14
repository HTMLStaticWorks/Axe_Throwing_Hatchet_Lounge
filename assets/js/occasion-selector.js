document.addEventListener('DOMContentLoaded', () => {
    const occasionButtons = document.querySelectorAll('.occasion-btn');
    const occasionCards = document.querySelectorAll('.occasion-card');

    if (occasionButtons.length > 0) {
        occasionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                occasionButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                occasionCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }
});
