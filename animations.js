// Gestion des animations et effets visuels
document.addEventListener('DOMContentLoaded', () => {
    // Animation du fond
    const container = document.querySelector('.container');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        // Effet parallaxe subtil sur le fond
        container.style.setProperty(
            '--mouse-x',
            `${mouseX * 100}%`
        );
        container.style.setProperty(
            '--mouse-y',
            `${mouseY * 100}%`
        );
    });

    // Animation des inputs au focus
    const inputs = document.querySelectorAll('.floating-input');
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

    // Système de notification toast
    window.showToast = (message, type = 'success') => {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
        }, 3000);
    };
});