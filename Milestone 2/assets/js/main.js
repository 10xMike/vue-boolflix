/*
Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
*/

const app = new Vue({
  el: "#app",
  data: {
    dataResponse: {},
    query: "",
    api_key: "0b9ec2a9d60e7c467ae3f0b1da81bd7a",
    results: [],
  },
  methods: {
    fetchMovie() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=" +
            this.api_key +
            "&query=" +
            this.query
        )
        .then((response) => {
          this.dataResponse = response.data.results;
          console.log(this.results);
        });
    },
  },
});
