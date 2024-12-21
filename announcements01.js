// Gestion des annonces
function loadAnnouncements() {
    const container = document.getElementById('announcements');
    
    // Exemple d'annonces (à remplacer par des données dynamiques)
    const announcements = [
        {
            title: "Espace réservé pour l'annonce 1",
            date: new Date(),
            content: "Contenu de l'annonce..."
        },
        // Ajoutez d'autres annonces ici
    ];
    
    // Affichage des annonces
    container.innerHTML = announcements.map(announcement => `
        <div class="announcement-card">
            <h3>${announcement.title}</h3>
            <div class="announcement-date">${formatDate(announcement.date)}</div>
            <p>${announcement.content}</p>
        </div>
    `).join('');
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}