// prendo l'elemento dal DOM
const totalElement = document.getElementById('total');

// preparo il messaggio per l'utente
const priceMessage = 'Il prezzo del tuo biglietto è: €';

// prezzo al km
const pricePerKM = 0.21;

// preparo eventuale sconto
let discount = null;

// raccolgo info utente
const kms = parseInt(prompt('Quanti km devi percorrere?' , 10).trim());
const age = parseInt(prompt('Quanti anni hai?' , 30).trim());
console.log(kms , age);

//****/ validazione*****
if (isNaN(kms) || isNaN(age) || age <= 0 || kms <= 0){
    alert('I dati non sono validi');
} else{

    // calcolo prezzo
    const basePrice = pricePerKM * kms;
    let finalPrice = basePrice;
    
    // valuto eventuale sconto
    if(age >= 65) discount = 40;
    else if(age <= 18) discount = 20;

    if(discount){
        // recupero elemento sconto
        const discountElement = document.getElementById('discount-message');

        // preparo messaggio di sconto
        const discountMessage = `Hai ricevuto uno sconto del ${discount}%`;

        // inserisco testo nell'elemento
        discountElement.innerText = discountMessage;

        // calcolo sconto
        finalPrice -= (finalPrice / 100) * discount;
    }

    // inserisco prezzo nell'elemento in pagina
    totalElement.innerText = priceMessage + finalPrice.toFixed(2);

    // aggiungo prezzo scontato
    if(discount){
        totalElement.innerHTML += ` (<del class="text-danger">€${basePrice}</del>)`;
    }
}