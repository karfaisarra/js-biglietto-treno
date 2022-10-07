//chiedere all'utente: il numero di chilometri che vuole percorrere.
const kilometersToGo = Number(prompt ('Inserisci il numero di chilometri che vuoi percorrere'));
//console.log(kilometersToGo);

//chiedere all'utente: l'età del passeggero.
const age = Number( prompt ('Quanti anni hai?') );
//console.log(age);

//il prezzo del biglietto è definito in base ai km (0.21 € al km).
const pricePerKm = 0.21;
const initialPrice = kilometersToGo * pricePerKm;
//console.log(initialPrice);
let price;
//va applicato uno sconto del 20% per i minorenni.
if (age < 18 ) {
    const sconto = 20 / 100;
    price = initialPrice - (initialPrice * sconto);
    
} else if (age >= 65) {
    const sconto = 40 / 100;
    price = initialPrice - (initialPrice * sconto);

} else {
    price = initialPrice;

}
const priceFixed = price.toFixed(2); 

// verificazione 
if (isNaN(priceFixed)){
    alert('non hai inserito correttamento i km da percorrere! Devi inserie un valore numerico')
    document.getElementById('prezzo').innerHTML = `Ops! c'è stato un problema! Riprova.`;
} else {
    document.getElementById('prezzo').innerHTML = `Il prezzo da pagare è: ${priceFixed}€`;
}