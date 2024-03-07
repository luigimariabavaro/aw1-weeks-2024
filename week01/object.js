'use strict';

const movie = {
    title: 'Titanic',
    genre: 'Drama',
    durata: 200 ,
    
};
//AGGIUNTA CAMPI 
//movie['director'] = 'Cameron';
movie.director = 'Cameron';
//questo caso aggiunge anche più proprietà
Object.assign(movie, {budget: '200 milioni USD'});
//RIMUOVI CAMPI 
delete movie.genre;
//delete movie['genre']
// STAMPA OGGETTO
console.log(movie);
//OCCHIO ALLE VIRGOLETTE
const title = 'director';
console.log('senza virgolette ' + movie[title]);
console.log('con virgolette ' + movie['title']);
//STAMPA DELLE PROPRIETA
for (const prop in movie)
{
    console.log(`${prop} e' ${movie[prop]}`)
}
// STAMPA SINGOLO CAMPO
console.log(movie['title']);
console.log(movie.title);

//COPIA DI UN OGGETTO 
let titanic = movie; //SOLO ASSEGNAZIONE
const titanic2 = {... movie};
console.log('titanic: ' + titanic);

//OBJECT ASSIGN
titanic = Object.assign({}, movie);
//in questo caso si comporta come la copia

//CON ASSIGN POSSO AGGIUNGERE PIU' COSE CONTEMPORANEAMENTE
const improvedMovie = Object.assign({}, movie, {cast: '...'});
console.log(improvedMovie);
//applica un metodo di lettura standard, quindi se vuoi che stampi il risultato della arrrow function devi 
//ridefinire il to string 
console.log(titanic);


