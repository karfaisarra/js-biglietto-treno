//chiedere all'utente: il numero di chilometri che vuole percorrere.
const kilometersToGo = prompt ('Inserisci il numero di chilometri che vuoi percorrere');
console.log(kilometersToGo);

//chiedere all'utente: l'età del passeggero.
const age = prompt ('Quanti anni hai?');
console.log(age);

//il prezzo del biglietto è definito in base ai km (0.21 € al km).
const initialPrice = kilometersToGo * 0.21;
console.log(initialPrice);

//va applicato uno sconto del 20% per i minorenni.
if (age < 18 ) {
    const price = initialPrice - (initialPrice * (20 / 100));
    document.getElementById('prezzo').innerHTML = `Il prezzo da pagare è: ${price}€`;
} else if (age >= 65) {
    const price = initialPrice - (initialPrice * (40 / 100));
    document.getElementById('prezzo').innerHTML = `Il prezzo da pagare è: ${price}€`;
} else {
    document.getElementById('prezzo').innerHTML = `Il prezzo da pagare è: ${initialPrice}€`;
}