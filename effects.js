// Effets visuels
document.addEventListener('DOMContentLoaded', () => {
    const particles = document.querySelector('.particles');
    
    // Effet de parallaxe sur la souris
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        particles.style.setProperty('--mouse-x', `${mouseX * 100}%`);
        particles.style.setProperty('--mouse-y', `${mouseY * 100}%`);
    });

    // Animation des inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});