const marsCost = 5000;
const moonCost = 3000;
//Handle Ticket Quantity
function updateTicketQuantity(planet, operator){
    const quantityInput = document.getElementById(planet + '-quantity').value;
    let quantity = parseInt(quantityInput);
    if(operator == 'plus'){
        quantity = quantity + 1;
    }else if(operator == 'minus' && quantity > 0){
        quantity = quantity - 1;
    }
    document.getElementById(planet + '-quantity').value = quantity;
    calculateJourney(planet);
};
let marsTotal = 0;
let moonTotal = 0;
function calculateJourney(planet){
    const quantityInput = document.getElementById(planet + '-quantity').value;
    let quantity = parseInt(quantityInput);

    if(planet === 'mars'){
       marsTotal = quantity * marsCost;
        updateUniqePrice(planet, marsTotal);
    }
    else{
        moonTotal = quantity * moonCost;
        updateUniqePrice(planet, moonTotal)
    }
    updateTotal(marsTotal, moonTotal);
};
function updateUniqePrice(planet, total){
    const planetTotal = document.getElementById(planet + '-total');
    planetTotal.innerText = total;
};
function updateTotal(marsTotal, moonTotal){
    let total = marsTotal + moonTotal;
    document.getElementById('total').innerText = total;
};