
// form
const nameUser = document.getElementById('name');
const kmUser = document.getElementById('km');
const ageUser = document.getElementById('age');
const createButton = document.getElementById('create');

// ticket
const ticketSection = document.getElementById('ticket-section');
const passengerEl = document.getElementById('passenger');
const rateEl = document.getElementById('rate');
const priceEl = document.getElementById('price');

// Al click del bottone

createButton.addEventListener('click' , function(){
    const nameValue = nameUser.value.trim();
    const kmValue = parseInt(kmUser.value);
    const ageValue = ageUser.value;

    // validazione
    if(!nameValue || isNaN(kmValue) || kmValue < 1){
        return;
    }

    // prezzo e tariffa di base
    let price = kmValue * 0.21;
    let rateName = 'Tariffa Ordinaria';

    if(ageValue === 'min'){
        price *= 0.8;
        rateName = 'Tariffa Giovani'
    }
    else if(ageValue === 'over'){
        price *= 0.6;
        rateName = 'Tariffa Over 65'
    }

    // inserisco i dati nel biglietto
    passengerEl.innerText = nameValue;
    rateEl.innerText = rateName;
    priceEl.innerText = '€' + price.toFixed(2);

    // faccio comparire il biglietto
    ticketSection.classList.remove('d-none');

})
