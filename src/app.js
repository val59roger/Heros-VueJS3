const app = Vue.createApp({
  data() {
    return {
      superheros: [],
      research: '',
      isChecked: false
    }
  },
  computed: {
    // Propriété calculée pour filtrer les superhéros
    filteredSuperheros() {
      return this.superheros.filter(superhero => 
        superhero.name.toLowerCase().includes(this.research.toLowerCase())
      );
    },
  },
  mounted() {
    axios.get('https://cdn.jsdelivr.net/gh/rtomczak/superhero-api@0.3.0/api/all.json')
      .then(response => {
        this.superheros = response.data; // Récupérer les données des superhéros
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    reinitialiastion(){
      this.research = '';
    },
    detailHeros(id){
      const urlDetail = `/detail.html?id=${id}`;
      window.location.href = urlDetail;
    }
  }
}).mount('#app')