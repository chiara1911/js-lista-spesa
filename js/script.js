// MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
// Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
// Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"



// preparare costanti
const fresh = document.getElementById('fresh').value;
console.log(fresh);
const btn = document.querySelector('button');

// array vuota lista della spesa
const lista = [];

btn.addEventListener('click', function(){
    let trovato = false;
    let i = 0;

    while (i < lista.length && !trovato) {
            
        i++;
        lista.push(fresh);
        
    }
    

});