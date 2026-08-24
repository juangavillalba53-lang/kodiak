/* ============================================================
   KODIAK LEGENDS — Lógica compartida
   Contacto: solo redes sociales (Instagram / TikTok), sin WhatsApp.
   ============================================================ */
const IG_URL = "https://www.instagram.com/kodiak_legends/";
const TIKTOK_URL = "https://www.tiktok.com/@kodiaklegends";

/* Colores de fondo para el marco de cada categoría mientras no hay foto real.
   Las fotos reales van cuadradas, 800x800px, en assets/productos/ */
const CATEGORY_META = {
  pokemon: { emoji: "⚡", a: "#3a1216", b: "#16171c" },
  onepiece: { emoji: "☠️", a: "#142a3a", b: "#16171c" },
  magic: { emoji: "✦", a: "#241a3a", b: "#16171c" },
  dbs: { emoji: "🐉", a: "#3a2410", b: "#16171c" },
  digimon: { emoji: "🦖", a: "#123a2c", b: "#16171c" },
  riftbound: { emoji: "⚔️", a: "#3a1414", b: "#16171c" },
  starwars: { emoji: "🌌", a: "#12203a", b: "#16171c" },
  figuras: { emoji: "🗿", a: "#2a2416", b: "#16171c" },
};

function categoryName(id) {
  const c = CATEGORIES.find((c) => c.id === id);
  return c ? c.name : id;
}

/* Tarjeta de producto — catálogo informativo, sin precio ni rareza.
   Sin foto real: solo un marco de color liso con "Foto próximamente". */
function cardHTML(p) {
  const meta = CATEGORY_META[p.category] || { a: "#222", b: "#16171c" };
  const art = p.img
    ? `<img src="${p.img}" alt="${p.name}">`
    : `<span class="art-placeholder"></span>`;
  return `
    <article class="card ${p.featured ? "featured" : ""}" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver ${p.name}">
      <div class="card-art ${p.img ? "has-img" : ""}" style="--art-a:${meta.a}; --art-b:${meta.b};">
        ${art}
      </div>
      <div class="card-body">
        <span class="card-cat">${categoryName(p.category)}</span>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-foot">
          <span class="card-cta">Ver detalle →</span>
        </div>
      </div>
    </article>`;
}

/* ---------- Modal de producto ---------- */
function ensureModal() {
  if (document.getElementById("productModal")) return;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "productModal";
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-art" id="modalArt"></div>
      <div class="modal-info">
        <button class="modal-close" aria-label="Cerrar">✕</button>
        <span class="card-cat" id="modalCat"></span>
        <h3 id="modalName"></h3>
        <p class="modal-desc" id="modalDesc"></p>
        <p class="modal-desc" style="margin-top:14px;">Consultá disponibilidad por redes:</p>
        <div class="modal-social">
          <a class="btn btn-primary" data-ig-link target="_blank" rel="noopener">Instagram</a>
          <a class="btn btn-outline" data-tiktok-link target="_blank" rel="noopener">TikTok</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("modal-close")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
  initGlobalLinks(overlay);
}

function openModal(product) {
  ensureModal();
  const meta = CATEGORY_META[product.category] || { a: "#222", b: "#16171c" };
  const overlay = document.getElementById("productModal");
  const artEl = document.getElementById("modalArt");
  artEl.className = "modal-art" + (product.img ? " has-img" : "");
  artEl.style.setProperty("--art-a", meta.a);
  artEl.style.setProperty("--art-b", meta.b);
  artEl.innerHTML = product.img
    ? `<img src="${product.img}" alt="${product.name}">`
    : `<span class="art-placeholder"></span>`;
  document.getElementById("modalCat").textContent = categoryName(product.category);
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalDesc").textContent = product.desc;
  overlay.classList.add("open");
}
function closeModal() {
  const overlay = document.getElementById("productModal");
  if (overlay) overlay.classList.remove("open");
}

function attachCardHandlers(container, products) {
  container.querySelectorAll(".card").forEach((el) => {
    const id = Number(el.dataset.id);
    const product = products.find((p) => p.id === id);
    const open = () => openModal(product);
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });
  });
}

/* ---------- Nav / hamburger ---------- */
function initNav() {
  const btn = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      btn.classList.remove("open");
      links.classList.remove("open");
    })
  );
}

/* ---------- Instagram / TikTok links ---------- */
function initGlobalLinks(scope) {
  const root = scope || document;
  root.querySelectorAll("[data-ig-link]").forEach((el) => { el.href = IG_URL; });
  root.querySelectorAll("[data-tiktok-link]").forEach((el) => { el.href = TIKTOK_URL; });
}

/* ---------- Altura real del header, para que el buscador sticky del
   catálogo no tape productos ---------- */
function syncHeaderHeight() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
}

/* ---------- Carrusel de destacados con autoplay ---------- */
function initAutoCarousel(track, { interval = 3200 } = {}) {
  if (!track) return;
  let timer = null;

  function step() {
    const card = track.querySelector(".card");
    const cardWidth = card ? card.getBoundingClientRect().width + 22 : 280;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    track.scrollBy({ left: atEnd ? -track.scrollWidth : cardWidth, behavior: "smooth" });
  }
  function start() { stop(); timer = setInterval(step, interval); }
  function stop() { if (timer) clearInterval(timer); }

  track.addEventListener("mouseenter", stop);
  track.addEventListener("mouseleave", start);
  track.addEventListener("touchstart", stop, { passive: true });
  track.addEventListener("touchend", start, { passive: true });

  start();
  return { start, stop, step };
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initGlobalLinks();
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
});
