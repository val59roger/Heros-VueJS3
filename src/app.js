const app = Vue.createApp({
  data() {
    return {
      superheros: [],
      research: '',
      isChecked: false
    }
  },
  computed: {
    /* Propriété calculée pour filtrer les superhéros */
    filteredSuperheros() {
      return this.superheros.filter(superhero => 
        superhero.name.toLowerCase().includes(this.research.toLowerCase())
      );
    },
  },
  /* appel de l'api */
  mounted() {
    axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
      .then(response => {
        /* récupération de toutes les données qui seront stocker dans le tableau superheros*/
        this.superheros = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    /* lors de l'appel de la méthode remet le contenu de research à vide */
    reinitialiastion(){
      this.research = '';
    },
    /* lors de l'appel de la méthode renvoie vers une page spécifique en utilisant la méthode GET */
    detailHeros(id){
      const urlDetail = `./detail.html?id=${id}`;
      window.location.href = urlDetail;
    }
  }
}).mount('#app')