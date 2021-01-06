var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

    function priceCheck() {
      return Math.floor((Math.random() *100) +1)
    };
      var newItem= {itemName: `${item}`, itemPrice: priceCheck()};
      cart.push(newItem);
    return `${item} has been added to your cart.`;
}



function viewCart() {
  let contents = "In your cart, you have ";
  const itemPrice = [...new Set(cart.map(cart => cart.itemPrice))]
  const itemName = [...new Set(cart.map(cart => cart.itemName))]

  if (cart.length > 0){
    for(let i = 0; i < cart.length; i++) {
      if (cart.length == 1) {
        contents = contents + `${itemName[i]} at $${itemPrice[i]}.`;
      }
      else if (i == cart.length-1){
        contents = contents + `and ${itemName[i]} at $${itemPrice[i]}.`;
        }
      else{
        contents = contents + `${itemName[i]} at $${itemPrice[i]}, `;
        }
      }
        return contents;
    }
  else {
    return "Your shopping cart is empty."
        }
}

function total() {
  const itemPrice = [...new Set(cart.map(cart => cart.itemPrice))]
  var sum = 0;
   for (let i  = 0; i < itemPrice.length; i++){
     sum  += itemPrice[i];
   }
return sum;
}



function removeFromCart(item) {
  if (item == cart[key]) {
    delete cart.item;
    return cart;
      }
    }
  } else {
    "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
}






//function cartCall (item) {
  //  cart.push(`itemName: ${item}, itemPrice: `Math.floor((Math.random() *100) +1));}
