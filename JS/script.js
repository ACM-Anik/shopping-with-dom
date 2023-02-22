let serial = 0;
document.getElementById('btn-coffee').addEventListener('click', function(){
    const coffeeName = document.getElementById('coffee').innerText;
    const coffeePriceString = document.getElementById('coffee-price').innerText;
    const coffeePrice =parseInt(coffeePriceString);

    const coffeeQuantityString = document.getElementById('coffee-quantity').innerText;
    const coffeeQuantity = parseInt(coffeeQuantityString);

    const coffeeCost = coffeePrice * coffeeQuantity;
    // console.log(coffeeCost);
    serial += 1;
    displayData(coffeeName,coffeePrice, coffeeQuantity, coffeeCost);
    toDisabledButton('btn-coffee');
    toGetTotalCost(coffeeCost);
});


document.getElementById('btn-heart').addEventListener('click', function(){
    const heartName = document.getElementById('heart').innerText;
    const heartPriceString = document.getElementById('heart-price').innerText;
    const heartPrice = parseInt(heartPriceString);
   
    const heartQuantityString = document.getElementById('heart-quantity').innerText;
    const heartQuantity = parseInt(heartQuantityString);

    const heartCost = heartPriceString * heartQuantityString;
    serial += 1;
    displayData(heartName, heartPrice, heartQuantity, heartCost);
    toDisabledButton('btn-heart');
    toGetTotalCost(heartCost);
});


document.getElementById('btn-umbrella').addEventListener('click', function(){
    const umbrellaName = document.getElementById('umbrella').innerText;
    const umbrellaPriceString = document.getElementById('umbrella-price').innerText;
    const umbrellaPrice = parseInt(umbrellaPriceString);
   
    const umbrellaQuantityString = document.getElementById('umbrella-quantity').innerText;
    const umbrellaQuantity = parseInt(umbrellaQuantityString);

    const umbrellaCost = umbrellaPriceString * umbrellaQuantityString;
    serial += 1;
    displayData(umbrellaName, umbrellaPrice, umbrellaQuantity, umbrellaCost);
    toDisabledButton('btn-umbrella');
    toGetTotalCost(umbrellaCost);
});


document.getElementById('btn-panda').addEventListener('click', function(){
    const pandaName = document.getElementById('panda').innerText;
    const pandaPriceString = document.getElementById('panda-price').innerText;
    const pandaPrice = parseInt(pandaPriceString);
    
    const pandaQuantityString = document.getElementById('panda-quantity').innerText;
    const pandaQuantity = parseInt(pandaQuantityString);

    const pandaCost = pandaPriceString * pandaQuantityString;
    serial += 1;
    displayData(pandaName, pandaPrice, pandaQuantity, pandaCost);
    toDisabledButton('btn-panda');
    toGetTotalCost(pandaCost);
});


document.getElementById('btn-vue').addEventListener('click', function(){
    const vueName = document.getElementById('vue').innerText;
    const vuePriceString = document.getElementById('vue-price').value;
    const vuePrice = parseInt(vuePriceString);

    const vueQuantityString = document.getElementById('vue-quantity').value;
    const vueQuantity = parseInt(vueQuantityString);
    if(vuePrice === "" || vueQuantity === ""){
        alert("Please provide numbers first!");
    }
    else if(vuePrice < 0 || vueQuantity < 0){
        alert("Please provide valid (positive) numbers!");
    }
    else if(isNaN(vuePrice) || isNaN(vueQuantity)){
        alert("Please don't provide string, only numbers");
    }
    else{
        const vueCost = vuePriceString * vueQuantityString;
        serial += 1;
        displayData(vueName, vuePrice, vueQuantity, vueCost);
        toDisabledButton('btn-vue');
        toGetTotalCost(vueCost);
    }
    
});


// Common Function to display data:
function displayData(name, price, quantity, cost){
    const container = document.getElementById('table-data');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th>${serial}</th>
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${cost}</td>
    <button id="btn-remove" class="btn btn-sm bg-red-500">Remove</button>
    
    `;
    container.appendChild(tr);
    const totalProducts = document.getElementById('total-products').innerText;
    totalProducts.innerText = serial;
};


function toDisabledButton(id){
    document.getElementById(id).setAttribute("disabled", true);
    
};

// function toGetTotalCost(coffeeCost, heartCost, pandaCost, umbrellaCost, vueCost){
//     const totalCost = coffeeCost + heartCost + pandaCost + umbrellaCost + vueCost ;
//     const previousTotalCost = document.getElementById('total-cost').innerText;

//     previousTotalCost.innerText = totalCost;

// };

// document.getElementById('btn-remove').addEventListener('click', function(){
//     toDisabledButton(id).setAttribute("disabled", false);
// })


