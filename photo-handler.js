// Gestion des photos
document.addEventListener('DOMContentLoaded', () => {
    const photoInput = document.getElementById('photo');
    const preview = document.getElementById('photoPreview');
    const maxSize = 5 * 1024 * 1024; // 5MB

    photoInput.addEventListener('change', function(e) {
        const file = this.files[0];
        
        if (file) {
            if (file.size > maxSize) {
                showNotification('La taille de l\'image ne doit pas dépasser 5MB', 'error');
                return;
            }

            if (!file.type.startsWith('image/')) {
                showNotification('Veuillez sélectionner une image valide', 'error');
                return;
            }

            const reader = new FileReader();
            reader.onload = e => {
                preview.style.opacity = '0';
                preview.src = e.target.result;
                setTimeout(() => preview.style.opacity = '1', 300);
            };
            reader.readAsDataURL(file);
        }
    });
});