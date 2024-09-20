const cart = [];
document.querySelectorAll('.product button').forEach((button) => {
  button.addEventListener('click', () => {
    const product = {
      name: button.previousSibling.previousSibling.textContent,
      price: button.previousSibling.textContent,
      quantity: 1
    };
    cart.push(product);
    updateCart();
  });
});

function updateCart() {
  const cartItems = cart.map((product) => {
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: <input type="number" value="${product.quantity}"></p>
        <button>Remove</button>
      </div>
    `;
  }).join('');
  document.querySelector('.cart').innerHTML = cartItems;
  document.querySelector('.total').textContent = `Total: $${cart.reduce((total, product) => total + product.price * product.quantity, 0)}`;
}