document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-toner-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const reference = document.getElementById('reference').value;
        const quantite = document.getElementById('quantite').value;
        const imprimante = document.getElementById('imprimante').value;

        // Obtenir les stocks existants depuis le stockage local
        const tonerStock = JSON.parse(localStorage.getItem('tonerStock')) || [];

        // Ajouter les nouvelles informations de toner au stock
        tonerStock.push({ reference, quantite, imprimante });

        // Enregistrer le nouveau stock dans le stockage local
        localStorage.setItem('tonerStock', JSON.stringify(tonerStock));

        // Réinitialiser le formulaire
        form.reset();

        // Optionnel : Afficher une confirmation ou rediriger vers la page de stocks
        alert('Toner added successfully!');
    });
});


