// MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
// Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
// Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"



// preparare costanti


// array vuota lista della spesa
let lista = [];
let fresh = '';
while (fresh != 'stop') {
    fresh = prompt("Cosa vuoi comprare?");
if (fresh !== 'stop'){
    lista.push(fresh);}  
};
const listEl = document.getElementById ('lista');
for ( i = 0; i < lista.length; i++){
    console.log(lista[i]);
  const listItem = document.createElement('li');
  listItem.innerHTML = lista[i];
listEl.appendChild(listItem);
}


