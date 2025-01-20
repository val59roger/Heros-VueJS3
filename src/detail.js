const app = Vue.createApp({
    data() {
      return {
        hero: null
      }
    },    
    mounted() {
        /* Récupérer l'ID depuis l'URL grace à la méthode GET */
        const params = new URLSearchParams(window.location.search);
        const heroId = params.get('id');

        /* appel de l'api */
        axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
          .then(response => {
            /* récupération de toutes les données du héros grace à son id*/
            this.hero = response.data.find(h => h.id == heroId);
          })
          .catch(error => {
            console.error('Erreur lors du chargement des détails du héros:', error);
          });
    }    
  }).mount('#detail')