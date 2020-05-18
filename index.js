var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var random = Math.floor(Math.random() * 100) + 1
const itemObject = { itemName: `${item}`, itemPrice: parseInt(random) } 
cart.push(itemObject)
return `${item} has been added to your cart.`
 
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
    } else {
      if (cart.length === 2) {
        return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.` 
      } else {
        var mostOfList = []
        for (let i = 0; i < cart.length -1; i++) {
        mostOfList.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`)
        }
        return `In your cart, you have ${mostOfList.join(', ')}, and ${cart[cart.length - 1]["itemName"]} at $${cart[cart.length - 1]["itemPrice"]}.`
      }
    }
  }
}

function total() {
  // write your code here
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += (cart[i]["itemPrice"])
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  let i = 0
  for (i = 0; i < cart.length; i++) {
    if(cart[i]["itemName"] === item) {
      cart.splice(cart[i], 1)
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
