'use strict';

const scores = [20, -5, -1, 100, -3, 30, 50];
const betterScores = [];
let NN = 0;
let avg = 0;
// se itero su oggetti e array posso usare const in definizione della variabile per ciclare
for(let s of scores){
    if(s >= 0){
        betterScores.push(s);
    }
}

NN = scores.length - betterScores.length;
/*
//VERSIONE CALCOLANDO I MINIMI 
let minScore = Math.min(...betterScores); //usa ... per scompattare il contenuto
let index = betterScores.indexOf(minScore);
betterScores.splice(index, 1); 

minScore = Math.min(...betterScores);
index = betterScores.indexOf(minScore);
betterScores.splice(index, 1); 
*/

//VERSIONE CON SORT
betterScores.sort((a,b) => a-b);
betterScores.shift();
betterScores.shift();

//CALCOLO MEDIA 
for (const s of betterScores){
    avg += s;
}
avg /= betterScores.length;
//ARROTONDAMENTO 
avg = Math.round(avg);

for(let i = 0; i < NN+2; i++){
    betterScores.push(avg);
}

console.log('Score: ' + scores);
console.log('Better Score: ' + betterScores);

