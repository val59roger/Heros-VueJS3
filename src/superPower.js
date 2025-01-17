const app = Vue.createApp({
    data() {
      return {
        superheros: [],
        filters: {
            strength: 0,
            intelligence: 0,
            speed: 0,
          },
      }
    },  
    computed: {
        // Propriété calculée pour filtrer les superhéros
        filteredSuperheros() {
          return this.superheros.filter(superhero => 
            superhero.powerstats.strength >= this.filters.strength &&
            superhero.powerstats.intelligence >= this.filters.intelligence &&
            superhero.powerstats.speed >= this.filters.speed
          );
        },
    },  
    mounted() {
        // Récupérer l'ID depuis l'URL
        const params = new URLSearchParams(window.location.search);

        // Charger les données pour ce héros spécifique
        axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
          .then(response => {
            this.superheros = response.data; // Trouver le héros correspondant
          })
          .catch(error => {
            console.error('Erreur lors du chargement des détails du héros:', error);
          });
    }    
  }).mount('#superPower')