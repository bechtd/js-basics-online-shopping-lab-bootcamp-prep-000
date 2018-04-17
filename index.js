var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var theCart = getCart();
  var newItem = { itemName: item, itemPrice: Math.floor(Math.random() * 100) }
  theCart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  var theCart = getCart();
  if(theCart.length === 0) {
    return "Your shopping cart is empty.";
  }
  var items = ""
  for(var i = 0; i < theCart.length; i++) {
    if(items.length > 0) {
      items += ", ";
    
      if(i === items.length - 1) {
        items += "and ";
      }
    }

    items += `${theCart[i].itemName} at $${theCart[i].itemPrice}`;
  }
  
  return `In your cart, you have ${items}.`;
}

function total() {
  var theCart = getCart();
  var cost = 0;
  for(var i = 0; i < theCart.length; i++) {
    cost += theCart[i].itemPrice;
  }
  
  return cost;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
