// Validation du formulaire
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    // Règles de validation
    const rules = {
        nom: {
            pattern: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
            message: 'Le nom doit contenir au moins 2 caractères'
        },
        prenoms: {
            pattern: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
            message: 'Les prénoms doivent contenir au moins 2 caractères'
        },
        email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Email invalide'
        },
        telephone: {
            pattern: /^\+?[\d\s-]{8,}$/,
            message: 'Numéro de téléphone invalide'
        }
    };

    // Validation en temps réel
    Object.keys(rules).forEach(field => {
        const input = document.getElementById(field);
        if (input) {
            input.addEventListener('input', () => validateField(input, rules[field]));
        }
    });

    // Soumission du formulaire
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Afficher le résumé
            showSummary();
        }
    });
});

function validateField(input, rule) {
    const isValid = rule.pattern.test(input.value);
    toggleError(input, isValid ? '' : rule.message);
    return isValid;
}

function validateForm() {
    let isValid = true;
    const requiredFields = ['nom', 'prenoms', 'dateNaissance', 'sexe', 'adresse', 'email', 'telephone', 'filiere', 'semestre'];
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            isValid = false;
            toggleError(input, 'Ce champ est requis');
        }
    });
    
    return isValid;
}

function toggleError(input, message) {
    const errorElement = input.parentElement.querySelector('.error-message');
    if (message) {
        if (!errorElement) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            input.parentElement.appendChild(error);
        } else {
            errorElement.textContent = message;
        }
        input.classList.add('invalid');
    } else {
        if (errorElement) {
            errorElement.remove();
        }
        input.classList.remove('invalid');
    }
}

function showSummary() {
    const formData = {
        nom: document.getElementById('nom').value,
        prenoms: document.getElementById('prenoms').value,
        dateNaissance: formatDate(document.getElementById('dateNaissance').value),
        sexe: document.getElementById('sexe').options[document.getElementById('sexe').selectedIndex].text,
        adresse: document.getElementById('adresse').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        filiere: document.getElementById('filiere').options[document.getElementById('filiere').selectedIndex].text,
        semestre: document.getElementById('semestre').options[document.getElementById('semestre').selectedIndex].text
    };

    const modal = document.createElement('div');
    modal.className = 'summary-modal';
    modal.innerHTML = `
        <div class="summary-content">
            <h2 class="main-title">Résumé de l'enregistrement</h2>
            <div class="summary-grid">
                ${Object.entries(formData).map(([key, value]) => `
                    <div class="summary-item">
                        <div class="summary-label">${formatLabel(key)}</div>
                        <div class="summary-value">${value}</div>
                    </div>
                `).join('')}
            </div>
            <div class="summary-buttons">
                <button class="submit-btn" onclick="confirmSubmission(this.closest('.summary-modal'))">
                    <span class="btn-text">Confirmer</span>
                </button>
                <button class="submit-btn" onclick="closeModal(this.closest('.summary-modal'))">
                    <span class="btn-text">Modifier</span>
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.style.display = 'block', 10);
}

function confirmSubmission(modal) {
    // Récupération des données du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        prenoms: document.getElementById('prenoms').value
    };

    // Stockage des informations d'inscription
    localStorage.setItem('registeredUser', JSON.stringify(formData));

    // Fermeture du modal
    closeModal(modal);

    // Affichage du message de succès
    showNotification('Enregistrement réussie !', 'success');

    // Redirection vers le portail après 2 secondes
    setTimeout(() => {
        window.location.href = 'index01.html';
    }, 2000);
}

function closeModal(modal) {
    modal.style.display = 'none';
    setTimeout(() => modal.remove(), 300);
}

function formatLabel(key) {
    const labels = {
        nom: 'Nom',
        prenoms: 'Prénoms',
        dateNaissance: 'Date de naissance',
        sexe: 'Sexe',
        adresse: 'Adresse',
        email: 'Email',
        telephone: 'Téléphone',
        filiere: 'Filière',
        semestre: 'Semestre'
    };
    return labels[key] || key;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}