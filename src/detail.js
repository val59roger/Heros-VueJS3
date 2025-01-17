const app = Vue.createApp({
    data() {
      return {
        hero: null
      }
    },    
    mounted() {
        // Récupérer l'ID depuis l'URL
        const params = new URLSearchParams(window.location.search);
        const heroId = params.get('id');

        // Charger les données pour ce héros spécifique
        axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
          .then(response => {
            this.hero = response.data.find(h => h.id == heroId); // Trouver le héros correspondant
          })
          .catch(error => {
            console.error('Erreur lors du chargement des détails du héros:', error);
          });
    }    
  }).mount('#detail')