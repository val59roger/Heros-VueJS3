/* Charge le fichier navbar.html */
fetch('navbar.html')
    /* Récupère le contenu sous forme de texte */
    .then(response => response.text())
    .then(data => {
    /* Insère le contenu dans le div */
    document.getElementById('navbar-placeholder').innerHTML = data;
    /* Gestion des erreurs */
    })
    .catch(error => console.error('Erreur lors du chargement de la navbar:', error));
