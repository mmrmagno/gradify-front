document.addEventListener('DOMContentLoaded', () => {
    const classCards = document.querySelectorAll('.class-card');
    
    // Fade-in animation for class cards
    classCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150); // Staggered animation
    });
    
    // Hover effect - already handled in CSS
});
