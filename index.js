var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 100) }
  getCart().push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var items = ""
  for(var i = 0; i < cart.length; i++) {
    if(items.length > 0) {
      items += ","
    }
    
    items += `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  
  return `In your cart, you have ${items}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
