/* Precios ficticios de demostración. Se reemplazan por los valores reales de Aromas IG. */
const CartCore = {
  phone: "56988207686",
  price(product, size) {
    const value = product.prices?.[size];
    return Number.isSafeInteger(value) && value > 0 ? value : null;
  },
  money(value) {
    return value === null ? "Por confirmar" : new Intl.NumberFormat("es-CL", {
      style: "currency", currency: "CLP", maximumFractionDigits: 0
    }).format(value);
  },
  add(cart, id, size, quantity, products) {
    const product = products.find(p => p.id === id);
    if (!product || !product.sizes.includes(Number(size)) ||
        !Number.isInteger(quantity) || quantity < 1 || quantity > 99) return false;
    const existing = cart.find(line => line.id === id && line.size === Number(size));
    if (existing && existing.quantity + quantity > 99) return false;
    if (existing) existing.quantity += quantity;
    else cart.push({ id, size: Number(size), quantity });
    return true;
  },
  lines(cart, products) {
    return cart.map(line => {
      const product = products.find(p => p.id === line.id);
      const unit = this.price(product, line.size);
      return { ...line, product, unit, subtotal: unit === null ? null : unit * line.quantity };
    });
  },
  total(lines) {
    return lines.some(line => line.subtotal === null) ? null :
      lines.reduce((sum, line) => sum + line.subtotal, 0);
  },
  message(cart, products) {
    const lines = this.lines(cart, products);
    if (!lines.length) return "";
    const total = this.total(lines);
    const text = ["Hola Aromas IG, quisiera hacer este pedido:", ""];
    for (const [i, line] of lines.entries()) {
      text.push((i + 1) + ". " + line.product.brand + " — " + line.product.name,
        "Formato: " + line.size + " ml | Cantidad: " + line.quantity,
        "Precio unitario: " + this.money(line.unit),
        "Subtotal: " + this.money(line.subtotal), "");
    }
    text.push("Total de productos: " + this.money(total),
      "Envío: por coordinar",
      "Total a pagar: por confirmar" + (total === null ? " (faltan precios y envío)." : " según envío o retiro."),
      total === null ? "¿Me confirman precios, disponibilidad y total a pagar?" :
        "¿Me confirman disponibilidad y el total final con envío o retiro?");
    return text.join("\n");
  },
  url(cart, products) {
    const message = this.message(cart, products);
    return message ? "https://wa.me/" + this.phone + "?text=" + encodeURIComponent(message) : null;
  }
};
if (typeof module !== "undefined") module.exports = CartCore;
