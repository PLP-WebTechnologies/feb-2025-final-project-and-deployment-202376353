let cartCount = 0;

function addToCart(product, price) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${product} added to cart!`);
}
