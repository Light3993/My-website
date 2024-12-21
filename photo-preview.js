// Gestion de la prévisualisation de la photo
document.addEventListener('DOMContentLoaded', () => {
    const photoInput = document.getElementById('photo');
    const previewImage = document.getElementById('previewImage');
    const maxFileSize = 5 * 1024 * 1024; // 5MB

    photoInput.addEventListener('change', function(e) {
        const file = this.files[0];
        
        if (file) {
            // Vérification de la taille du fichier
            if (file.size > maxFileSize) {
                showToast('La taille de l\'image ne doit pas dépasser 5MB', 'error');
                this.value = '';
                return;
            }

            // Vérification du type de fichier
            if (!file.type.startsWith('image/')) {
                showToast('Veuillez sélectionner une image valide', 'error');
                this.value = '';
                return;
            }

            // Prévisualisation de l'image
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                
                // Animation de la prévisualisation
                previewImage.style.opacity = '0';
                setTimeout(() => {
                    previewImage.style.opacity = '1';
                }, 100);
            };
            reader.readAsDataURL(file);
        }
    });
});