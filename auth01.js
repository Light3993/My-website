// Configuration de l'administrateur (à personnaliser)
const ADMIN_CONFIG = {
    nom: "light",
    prenoms: "oblight"
};

// Gestion de l'authentification
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si l'utilisateur vient de s'inscrire
    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser) {
        const user = JSON.parse(registeredUser);
        document.getElementById('nom').value = user.nom;
        document.getElementById('prenoms').value = user.prenoms;
        // Nettoyer les données d'inscription après utilisation
        localStorage.removeItem('registeredUser');
    }

    const authForm = document.getElementById('authForm');
    
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nom = document.getElementById('nom').value.trim();
        const prenoms = document.getElementById('prenoms').value.trim();
        
        // Vérification des credentials
        if (isValidUser(nom, prenoms)) {
            // Stockage des informations de session
            sessionStorage.setItem('user', JSON.stringify({ nom, prenoms }));
            
            // Affichage du dashboard
            showDashboard();
        } else {
            showError('Nom ou prénoms incorrects');
        }
    });
});

// ... reste du code auth.js inchangé ...