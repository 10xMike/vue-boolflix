/*
Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: titolo, titolo originale, lingua, voto.
*/

const app = new Vue({
    el: '#app',
    data:{
        movies: [],
        shows: [],
    },
    methods:{},
    mounted(){
        axios
        .get("https://api.themoviedb.org/3/")

    },
});