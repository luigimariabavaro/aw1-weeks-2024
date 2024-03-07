/* Strange JS behaviors and where to find (some of) them */
'use strict';

const type = typeof NaN;
console.log('NaN is a ' + type); // number
console.log(`NaN === NaN? ${NaN === NaN}\n`); // FALSO --> non è uguale a niente

console.log(`NaN == NaN? ${NaN == NaN}`); // FALSO --> come sopra
console.log(`null == undefined? ${null == undefined}\n`); // VERO --> sono entrambi nullish

console.log(`null == false? ${null == false}`); // FALSO --> conversione del numero true in [0] 
console.log(`'' == false? ${'' == false}`); // VERO --> valore falsy
console.log(`3 == true? ${3 == true}`); // FALSO --> conversione del numero true in [1]
console.log(`0 == -0? ${0 == -0}\n`); // VERO

console.log(`true + true = ${true + true}`); // FALSO: fa 2 [1]+[1] = 2
console.log(`true !== 1? ${true !== 1}\n`); // VERO: la disuguaglianza stretta non converte

console.log(`5 + '10' = ${5 + '10'}`); // 510
console.log(`'5' - 1 = ${'5' - 1}\n`); // 4

console.log(`1 < 2 < 3? ${1 < 2 < 3}`); // VERO --> 1<2 = 1 (true) quindi 1<3 vero 
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`); // FALSO --> 3>2 = 1 (true) quindi 1 >1 è falso;

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`); // FALSO: gode della coversione dei floating point quindi non è preciso

console.log('b' + 'a' + (+ 'a') + 'a'); // baNaNa perchè (+(+'a')) è operatore unario e non vale per le stringhe quindi NaN  

