// Utilitaires généraux
const utils = {
    // Afficher une notification
    showNotification: (message, type = 'success') => {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `tech-notification ${type} show`;

        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
        }, 3000);
    },

    // Valider un email
    validateEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    // Valider un numéro de téléphone
    validatePhone: (phone) => {
        return /^\+?[\d\s-]{8,}$/.test(phone);
    },

    // Valider un nom
    validateName: (name) => {
        return /^[a-zA-ZÀ-ÿ\s]{2,}$/.test(name);
    },

    // Formater une date
    formatDate: (date) => {
        return new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};

// Export des utilitaires
window.utils = utils;