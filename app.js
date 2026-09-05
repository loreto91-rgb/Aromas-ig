const products = [
  { id: 1, brand: "Emporio Armani", name: "Stronger With You Intensely", family: "gourmand", familyLabel: "Dulce intenso", notes: ["Pimienta rosa", "Castaña", "Vainilla"], occasion: "Noche y días fríos", description: "Cálido, envolvente y con mucha presencia. Su mezcla de castaña dulce, vainilla y maderas ambaradas deja una estela adictiva.", sizes: [2, 5, 10], prices: {2: 3990, 5: 7490, 10: 12990}, tone: "#3b170e", glow: "rgba(255,103,54,.5)" },
  { id: 2, brand: "Dolce & Gabbana", name: "Light Blue Pour Homme", family: "fresco", familyLabel: "Cítrico fresco", notes: ["Limón siciliano", "Romero", "Pachulí"], occasion: "Día y clima cálido", description: "Ligero, limpio y mediterráneo. Una salida cítrica vibrante con hierbas aromáticas y un fondo masculino suave.", sizes: [2, 5, 10], prices: {2: 2990, 5: 5490, 10: 8990}, tone: "#173446", glow: "rgba(91,196,255,.52)" },
  { id: 3, brand: "Lattafa", name: "Khamrah", family: "gourmand", familyLabel: "Dulce especiado", notes: ["Canela", "Dátiles", "Vainilla"], occasion: "Noche y clima frío", description: "Rico y especiado, con un corazón de dátiles y praliné. Ideal para quienes disfrutan los aromas dulces con carácter oriental.", sizes: [2, 5, 10], prices: {2: 3490, 5: 6490, 10: 10990}, tone: "#492609", glow: "rgba(255,165,50,.48)" },
  { id: 4, brand: "Lattafa", name: "Khamrah Qahwa", family: "gourmand", familyLabel: "Café gourmand", notes: ["Canela", "Café", "Vainilla"], occasion: "Noche y clima frío", description: "La faceta más oscura de Khamrah: especias cálidas, café y vainilla sobre una base cremosa y envolvente.", sizes: [2, 5, 10], prices: {2: 3790, 5: 6990, 10: 11990}, tone: "#2d170e", glow: "rgba(190,105,41,.46)" },
  { id: 5, brand: "Rayhaan", name: "Tropical Vibe", family: "tropical", familyLabel: "Frutal tropical", notes: ["Mango", "Piña", "Coco"], occasion: "Verano y salidas", description: "Jugoso, alegre y sin género definido. Mango y piña se encuentran con coco y una brisa marina de sensación veraniega.", sizes: [2, 5, 10], prices: {2: 3290, 5: 5990, 10: 9990}, tone: "#244415", glow: "rgba(146,229,65,.43)" },
  { id: 6, brand: "Armaf", name: "Odyssey Limoni", family: "fresco", familyLabel: "Cítrico aromático", notes: ["Limón", "Jengibre", "Té azul"], occasion: "Día y verano", description: "Cítrico, chispeante y liviano. Limón y naranja abren paso a jengibre, notas marinas y un fondo limpio de té azul.", sizes: [2, 5, 10], prices: {2: 2990, 5: 5490, 10: 8990}, tone: "#414312", glow: "rgba(235,241,63,.42)" },
  { id: 7, brand: "Rasasi", name: "Hawas Ice", family: "fresco", familyLabel: "Acuático frutal", notes: ["Cítricos", "Frutas heladas", "Maderas"], occasion: "Día y actividad", description: "Fresco, brillante y energético. Combina cítricos crujientes, acordes frutales, sensación marina y un fondo amaderado almizclado.", sizes: [2, 5, 10], prices: {2: 3490, 5: 6490, 10: 10990}, tone: "#12324a", glow: "rgba(81,177,255,.56)" },
  { id: 8, brand: "Armaf", name: "Odyssey Mandarin Sky", family: "gourmand", familyLabel: "Cítrico dulce", notes: ["Mandarina", "Haba tonka", "Ambroxan"], occasion: "Tarde y noche", description: "Juvenil y llamativo. La mandarina jugosa se mezcla con dulzor acaramelado, tonka y una base amaderada moderna.", sizes: [2, 5, 10], prices: {2: 3290, 5: 5990, 10: 9990}, tone: "#4a250c", glow: "rgba(255,136,36,.5)" },
  { id: 9, brand: "French Avenue", name: "Liquid Brun", family: "gourmand", familyLabel: "Ámbar vainilla", notes: ["Flor de azahar", "Vainilla", "Praliné"], occasion: "Noche y clima frío", description: "Cremoso, elegante y dulce. La vainilla bourbon y el praliné se equilibran con especias, maderas y flor de azahar.", sizes: [2, 5, 10], prices: {2: 3990, 5: 7490, 10: 12990}, tone: "#39200f", glow: "rgba(218,130,63,.47)" },
  { id: 10, brand: "Al Haramain", name: "Amber Oud Aqua Dubai", family: "fresco", familyLabel: "Frutal acuático", notes: ["Bergamota", "Melón", "Piña"], occasion: "Día y clima cálido", description: "Luminoso, afrutado y moderno. Notas verdes y cítricas se combinan con melón, piña, almizcle y una vainilla suave.", sizes: [2, 5, 10], prices: {2: 3690, 5: 6990, 10: 11990}, tone: "#0d3b43", glow: "rgba(49,224,213,.4)" },
  { id: 11, brand: "French Avenue", name: "Vulcan Feu", family: "tropical", familyLabel: "Tropical especiado", notes: ["Mango", "Jengibre", "Limón"], occasion: "Tarde y noche", description: "Explosivo y tropical. Mango jugoso, jengibre y limón abren una mezcla dulce, especiada y amaderada con gran personalidad.", sizes: [2, 5, 10], prices: {2: 3990, 5: 7490, 10: 12990}, tone: "#451710", glow: "rgba(255,77,42,.5)" },
  { id: 12, brand: "Afnan", name: "9 PM", family: "gourmand", familyLabel: "Dulce nocturno", notes: ["Manzana", "Canela", "Vainilla"], occasion: "Fiestas y noche", description: "Dulce, juvenil y seductor. Manzana, canela, vainilla y tonka crean un perfil potente pensado para salir de noche.", sizes: [2, 5, 10], prices: {2: 2990, 5: 5490, 10: 9490}, tone: "#27174c", glow: "rgba(130,79,255,.48)" }
];

const productImages = {
  "1": {
    "image": "products/stronger-with-you-intensely.jpg",
    "source": "https://www.nordstrom.com/s/stronger-with-you-intensely-eau-de-parfum/7882796"
  },
  "2": {
    "image": "products/light-blue.jpg",
    "source": "https://www.nordstrom.com/s/dolce-and-gabbana-light-blue-pour-homme-eau-de-toilette/8243920"
  },
  "3": {
    "image": "products/khamrah.png",
    "source": "https://www.lattafa-usa.com/products/khamrah"
  },
  "4": {
    "image": "products/khamrah-qahwa.png",
    "source": "https://www.lattafa-usa.com/products/khamrah-qahwa"
  },
  "5": {
    "image": "products/tropical-vibe.jpg",
    "source": "https://rayhaanperfumes.com/products/tropical-vibe"
  },
  "6": {
    "image": "products/odyssey-limoni.png",
    "source": "https://armaf.com/products/armaf-odyssey-limoni-fresh-edition"
  },
  "7": {
    "image": "products/hawas-ice.jpg",
    "source": "https://rasasistore.com/products/hawas-ice"
  },
  "8": {
    "image": "products/mandarin-sky.jpg",
    "source": "https://armaf.com/products/odyssey-mega-for-men"
  },
  "9": {
    "image": "products/liquid-brun.jpg",
    "source": "https://frenchavenue.com/products/liquid-brun"
  },
  "10": {
    "image": "products/aqua-dubai.jpg",
    "source": "https://www.noon.com/uae-en/haramain-amber-oud-aqua-dubai-100ml/Z02BAEF7BEB5E404107E6Z/p/"
  },
  "11": {
    "image": "products/vulcan-feu.jpg",
    "source": "https://frenchavenue.com/products/vulcan-feu"
  },
  "12": {
    "image": "products/9pm.jpg",
    "source": "https://uae.afnan.com/products/9-pm-perfume"
  }
};
products.forEach(product => Object.assign(product, productImages[product.id]));

const grid = document.querySelector("#product-grid");
const search = document.querySelector("#search");
const sizeFilter = document.querySelector("#size-filter");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
const dialog = document.querySelector("#product-dialog");
let activeFamily = "all";
let selectedSize = "5";
let selectedProduct = null;

const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function renderProducts() {
  const term = normalize(search.value.trim());
  const size = sizeFilter.value;
  const filtered = products.filter(product => {
    const matchesText = normalize(`${product.brand} ${product.name} ${product.notes.join(" ")}`).includes(term);
    const matchesFamily = activeFamily === "all" || product.family === activeFamily;
    const matchesSize = size === "all" || product.sizes.includes(Number(size));
    return matchesText && matchesFamily && matchesSize;
  });

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-art" data-index="0${product.id}" style="--tone:${product.tone};--glow:${product.glow}">
        <img class="product-photo" src="${product.image}" alt="Frasco original de ${product.name}, ${product.brand}" loading="lazy" decoding="async" width="600" height="600">
        <span class="product-family">${product.familyLabel}</span>
      </div>
      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3>${product.name}</h3>
        <div class="notes">${product.notes.slice(0, 2).map(note => `<span>${note}</span>`).join("")}</div>
        <div class="card-bottom">
          <div><small>Desde 2 ml</small><strong>${CartCore.money(CartCore.price(product, 2))}</strong></div>
          <button class="view-button" type="button" data-product="${product.id}" aria-label="Elegir formato de ${product.name}">Elegir</button>
        </div>
      </div>
    </article>`).join("");

  count.textContent = `${filtered.length} ${filtered.length === 1 ? "perfume" : "perfumes"}`;
  empty.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  document.querySelectorAll(".view-button").forEach(button => button.addEventListener("click", () => openProduct(Number(button.dataset.product))));
}

function openProduct(id) {
  selectedProduct = products.find(product => product.id === id);
  selectedSize = "5";
  document.querySelector("#product-quantity").value = "1";
  document.querySelector("#dialog-brand").textContent = selectedProduct.brand;
  document.querySelector("#dialog-title").textContent = selectedProduct.name;
  document.querySelector("#dialog-description").textContent = selectedProduct.description;
  document.querySelector("#dialog-family").textContent = selectedProduct.familyLabel;
  document.querySelector("#dialog-occasion").textContent = selectedProduct.occasion;
  document.querySelector("#dialog-notes").innerHTML = selectedProduct.notes.map(note => `<span>${note}</span>`).join("");
  const art = document.querySelector("#dialog-art");
  art.innerHTML = `<img class="dialog-photo" src="${selectedProduct.image}" alt="Frasco original de ${selectedProduct.name}" width="600" height="600"><p class="image-caption">Frasco de referencia. Se ofrece decant de 2, 5 o 10 ml.<br><a href="${selectedProduct.source}" target="_blank" rel="noopener noreferrer">Fuente de la fotografía</a></p>`;
  art.style.setProperty("--tone", selectedProduct.tone);
  art.style.setProperty("--glow", selectedProduct.glow);
  document.querySelector("#dialog-sizes").innerHTML = selectedProduct.sizes.map(size => `<button type="button" class="size-option ${String(size) === selectedSize ? "active" : ""}" data-size="${size}">${size} ml</button>`).join("");
  document.querySelector("#dialog-price").textContent = CartCore.money(CartCore.price(selectedProduct, selectedSize));
  dialog.showModal();
  document.querySelectorAll(".size-option").forEach(button => button.addEventListener("click", selectDialogSize));
}

function selectDialogSize(event) {
  selectedSize = event.currentTarget.dataset.size;
  document.querySelectorAll(".size-option").forEach(button => button.classList.toggle("active", button.dataset.size === selectedSize));
  document.querySelector("#dialog-price").textContent = CartCore.money(CartCore.price(selectedProduct, selectedSize));
}

document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => {
  activeFamily = button.dataset.family;
  document.querySelectorAll(".filter-chip").forEach(item => {
    const isActive = item === button;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  renderProducts();
}));

search.addEventListener("input", renderProducts);
sizeFilter.addEventListener("change", renderProducts);
document.querySelector("#clear-filters").addEventListener("click", () => {
  search.value = "";
  sizeFilter.value = "all";
  document.querySelector('[data-family="all"]').click();
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobile-nav");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  mobileNav.hidden = true;
}));

renderProducts();
