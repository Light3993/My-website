// Initialisation du client Supabase
const { createClient } = supabase;

// Configuration de la connexion à Supabase avec les variables d'environnement
const supabaseUrl = 'https://yreyvbqguezsllqiezxe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyZXl2YnFndWV6c2xscWllenhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NTMzNDIsImV4cCI6MjA1MDQyOTM0Mn0.kkL2NaCkHbZCBRP1C0leuuEwBEPjMWlPX9u_gE2rSC8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction pour enregistrer un nouvel étudiant
async function saveStudentData(formData) {
    try {
        const { data, error } = await supabase
            .from('students')
            .insert([
                {
                    nom: formData.nom,
                    prenoms: formData.prenoms,
                    date_naissance: formData.dateNaissance,
                    sexe: formData.sexe,
                    adresse: formData.adresse,
                    email: formData.email,
                    telephone: formData.telephone,
                    filiere: formData.filiere,
                    semestre: formData.semestre,
                    photo_url: formData.photoUrl
                }
            ]);

        if (error) throw error;
        return { success: true, data };
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement:', error);
        return { success: false, error: error.message };
    }
}

// Fonction pour vérifier si un email existe déjà
async function checkEmailExists(email) {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('email')
            .eq('email', email)
            .single();

        if (error && error.code !== 'PGRST116') {
            throw error;
        }

        return { exists: !!data };
    } catch (error) {
        console.error('Erreur lors de la vérification:', error);
        return { error: error.message };
    }
}