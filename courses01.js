// Gestion des cours
function loadCourses() {
    const grid = document.getElementById('coursesGrid');
    
    // Exemple de cours (à remplacer par des données dynamiques)
    const courses = [
        {
            title: "Espace réservé pour le cours de Mécanique",
            pdfUrl: "Cinema_Chap3.pdf"
        },
        // Ajoutez d'autres cours ici
        {
            title: "Espace réservé pour le cours Bases Mathématiques",
            pdfUrl: "mensah_MTH100 V 2.0.pdf"
        },
        {
            title: "Espace réservé pour le cours D'algèbre linéaire",
            pdfUrl: "fiche_cours_ASINSA1_espace.pdf"
        },
        {
            title: "Espace réservé pour le cours D'électrostatique",
            pdfUrl: "1 PHY 1120.pdf"
        },
        {
            title: "Espace réservé pour le cours D'agorithmique",
            pdfUrl: "INF1120-seance3.pdf"
        },
    ];
    
    // Affichage des cours
    grid.innerHTML = courses.map(course => `
        <div class="course-card" onclick="openPDF('${course.pdfUrl}')">
            <h3>${course.title}</h3>
            <div class="course-icon">📄</div>
        </div>
    `).join('');
}

function openPDF(url) {
    window.open(url, '_blank');
}