const cart = [];
const cartDialog = document.querySelector("#cart-dialog");
const cartLines = document.querySelector("#cart-lines");
const orderButton = document.querySelector("#place-order");
let toastTimer;

function showCartNotice(message) {
  const toast = document.querySelector("#toast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

function renderCart() {
  const lines = CartCore.lines(cart, products);
  document.querySelector("#cart-count").textContent = cart.reduce((sum, l) => sum + l.quantity, 0);
  cartLines.innerHTML = lines.length ? lines.map(line => `
    <article class="cart-line">
      <img src="${line.product.image}" alt="" width="64" height="80">
      <div class="cart-line-info"><h3>${line.product.name}</h3>
        <p>${line.size} ml · Unidad: ${CartCore.money(line.unit)}</p>
        <div class="cart-controls">
          <button type="button" data-action="minus" data-id="${line.id}" data-size="${line.size}" aria-label="Reducir cantidad de ${line.product.name}, ${line.size} ml" ${line.quantity === 1 ? "disabled" : ""}>−</button>
          <span aria-label="Cantidad">${line.quantity}</span>
          <button type="button" data-action="plus" data-id="${line.id}" data-size="${line.size}" aria-label="Aumentar cantidad de ${line.product.name}, ${line.size} ml" ${line.quantity === 99 ? "disabled" : ""}>+</button>
          <button type="button" data-action="remove" data-id="${line.id}" data-size="${line.size}" aria-label="Eliminar ${line.product.name}, ${line.size} ml">Eliminar</button>
        </div>
        <p>Subtotal: <strong>${CartCore.money(line.subtotal)}</strong></p>
      </div>
    </article>`).join("") : '<p class="cart-empty">Tu carrito está vacío. Elige un perfume y su formato para empezar.</p>';
  document.querySelector("#cart-total").textContent = lines.length ? CartCore.money(CartCore.total(lines)) : "—";
  document.querySelector("#cart-price-note").textContent = CartCore.total(lines) === null ?
    "Solicita una cotización: hay precios por confirmar. El total a pagar se acordará por WhatsApp." :
    "El envío no está incluido. El total a pagar se confirma según envío o retiro.";
  orderButton.disabled = lines.length === 0;
}

document.querySelector("#availability-button").addEventListener("click", () => {
  const input = document.querySelector("#product-quantity");
  if (!input.reportValidity()) return;
  if (!CartCore.add(cart, selectedProduct.id, selectedSize, Number(input.value), products)) {
    showCartNotice("Puedes añadir hasta 99 unidades de cada perfume y formato.");
    return;
  }
  renderCart();
  dialog.close();
  cartDialog.showModal();
});
document.querySelector("#open-cart").addEventListener("click", () => {
  renderCart();
  cartDialog.showModal();
});
document.querySelector("#close-cart").addEventListener("click", () => cartDialog.close());
document.querySelector("#continue-shopping").addEventListener("click", () => cartDialog.close());
cartDialog.addEventListener("click", event => { if (event.target === cartDialog) cartDialog.close(); });
cartLines.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const index = cart.findIndex(l => l.id === Number(button.dataset.id) && l.size === Number(button.dataset.size));
  if (index < 0) return;
  if (button.dataset.action === "remove") cart.splice(index, 1);
  else cart[index].quantity = Math.max(1, Math.min(99, cart[index].quantity + (button.dataset.action === "plus" ? 1 : -1)));
  const action = button.dataset.action;
  const id = button.dataset.id;
  const size = button.dataset.size;
  renderCart();
  const next = cartLines.querySelector(`button[data-action="${action}"][data-id="${id}"][data-size="${size}"]:not(:disabled)`);
  (next || document.querySelector("#continue-shopping")).focus();
});
orderButton.addEventListener("click", () => {
  const url = CartCore.url(cart, products);
  if (url) window.open(url, "_blank", "noopener,noreferrer");
});
renderCart();
