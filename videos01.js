// Gestion des vidéos
function loadVideos() {
    const grid = document.getElementById('videoGrid');
    
    // Exemple de vidéos (à remplacer par des données dynamiques)
    const videos = [
        {
            title: "Espace réservé pour la vidéo 1",
            thumbnail: "path/to/thumbnail.jpg",
            url: "Learn Python in an Animated Way ｜ Log2Base2.mp4"
        },
        // Ajoutez d'autres vidéos ici
    ];
    
    // Affichage des vidéos
    grid.innerHTML = videos.map(video => `
        <div class="video-card">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
            </div>
            <h3>${video.title}</h3>
        </div>
    `).join('');
}