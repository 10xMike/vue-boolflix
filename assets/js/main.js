/*
Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: titolo, titolo originale, lingua, voto.
*/

const app = new Vue({
  el: "#app",
  data: {
    dataResponse: {},
    query: "",
    api_key: "0b9ec2a9d60e7c467ae3f0b1da81bd7a",
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
