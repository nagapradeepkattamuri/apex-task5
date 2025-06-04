const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const buyButton = document.getElementById("buy-button");

function updateCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = total.toFixed(2);
}

buyButton.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Purchase successful! Thank you for shopping with Prep.");
  localStorage.removeItem("cart");
  updateCart();
});

updateCart();
