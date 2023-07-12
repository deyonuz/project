const cartLength = document.querySelector("#badge");

let cardProductsJSON = localStorage.getItem(CART);
let cardProducts = JSON.parse(cardProductsJSON) || [];

cartLength.innerHTML = cardProducts.length;

function addToCard() {
    
}
