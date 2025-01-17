fetch('navbar.html') // Charge le fichier navbar.html
    .then(response => response.text()) // Récupère le contenu sous forme de texte
    .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data; // Insère le contenu dans le div
    })
    .catch(error => console.error('Erreur lors du chargement de la navbar:', error)); // Gestion des erreurs
