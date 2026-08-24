/* ============================================================
   KODIAK LEGENDS — Datos de productos (PLACEHOLDER)
   Reemplazar nombre, img y descripcion por los reales.
   Catálogo informativo: NO se muestran precios.

   CÓMO CARGAR UNA FOTO:
   Cada producto es una línea con 5 datos obligatorios y un 6to OPCIONAL
   que es la ruta de la imagen:

     ["Nombre", "categoria_id", "Rareza", esDestacado, "Descripción", "assets/productos/archivo.jpg"]

   Si no ponés el 6to valor (o dejás la línea como está), se muestra el
   marco de color con "Foto próximamente".

   Ejemplo real:
     ["Booster Box – Escarlata y Púrpura", "pokemon", "Común", true,
      "Caja sellada de 36 sobres de la expansión principal.",
      "assets/productos/booster-box-escarlata-purpura.jpg"],

   Fotos: cuadradas, 800x800px (mismo criterio que Omega Store), guardadas
   en la carpeta assets/productos/ (crearla si no existe).
   ============================================================ */

const CATEGORIES = [
  { id: "pokemon", name: "Pokémon TCG", icon: "poke" },
  { id: "onepiece", name: "One Piece TCG", icon: "op" },
  { id: "magic", name: "Magic: The Gathering", icon: "mtg" },
  { id: "dbs", name: "Dragon Ball Super", icon: "dbs" },
  { id: "digimon", name: "Digimon Card Game", icon: "digi" },
  { id: "riftbound", name: "Riftbound (LoL)", icon: "rift" },
  { id: "starwars", name: "Star Wars: Unlimited", icon: "sw" },
  { id: "figuras", name: "Figuras & Coleccionables", icon: "fig" },
];

const RARITIES = ["Común", "Rara", "Ultra Rara", "Secreta"];

const RAW_PRODUCTS = [
  // ---------- POKÉMON TCG ----------
  [
    "Evolving Skies Elite Trainer Box",
    "pokemon",
    "Ultra Raro",
    true,
    "Elite Trainer Box de Pokémon Sword & Shield: Evolving Skies.",
    "assets/productos/skies.png"
  ],
  [
    "Black Bolt Elite Trainer Box",
    "pokemon",
    "Rara",
    true,
    "Elite Trainer Box de Pokémon Scarlet & Violet: Black Bolt.",
    "assets/productos/black.png"
  ],
  [
    "Destined Rivals Elite Trainer Box",
    "pokemon",
    "Rara",
    false,
    "Elite Trainer Box de Pokémon Scarlet & Violet: Destined Rivals.",
    "assets/productos/red.png"
  ],
  [
    "Silver Tempest Elite Trainer Box",
    "pokemon",
    "Rara",
    true,
    "Elite Trainer Box de Pokémon Sword & Shield: Silver Tempest.",
    "assets/productos/silver.png"
  ],
  ["Tin de Lata – Paldea Evolved", "pokemon", "Rara", false, "Lata coleccionable con 3 sobres y carta foil."],
  ["Deck de Batalla – Sword & Shield", "pokemon", "Común", false, "Mazo listo para jugar de 60 cartas."],
  ["Caja Coleccionista – Pokémon Center", "pokemon", "Secreta", false, "Edición especial con arte exclusivo."],
  ["Sobre Individual – Twilight Masquerade", "pokemon", "Común", false, "Sobre suelto de la expansión más reciente."],
  ["Mini Portfolio 60 Cartas", "pokemon", "Común", false, "Álbum portátil para transportar tu mazo."],
  ["Bundle Pokémon – 6 Sobres + Promo", "pokemon", "Rara", false, "Pack combo pensado para nuevos jugadores."],

  // ---------- ONE PIECE TCG ----------
  ["Booster Box – OP-10 Royal Blood", "onepiece", "Común", true, "36 sobres de la décima expansión oficial."],
  ["Starter Deck – Straw Hat Crew", "onepiece", "Rara", true, "Mazo temático de la tripulación de Luffy."],
  ["Display Doble Parallel – OP-07", "onepiece", "Ultra Rara", false, "Caja con cartas de arte alternativo garantizado."],
  ["Caja Coleccionista – Ace Edition", "onepiece", "Secreta", true, "Edición limitada con playmat incluido."],
  ["Sobre Individual – OP-09", "onepiece", "Común", false, "Sobre suelto de Emperors in the New World."],
  ["Starter Deck – Animal Kingdom Pirates", "onepiece", "Rara", false, "Mazo temático de Kaido y su tripulación."],
  ["Álbum Oficial One Piece TCG", "onepiece", "Común", false, "Carpeta con 9 slots por hoja, 20 hojas."],
  ["Playmat Oficial – Going Merry", "onepiece", "Rara", false, "Base de juego de tela con diseño oficial."],

  // ---------- MAGIC: THE GATHERING ----------
  ["Play Booster Box – The Hobbit", "magic", "Común", true, "36 sobres Play Booster de la edición temática."],
  ["Commander Deck – Eldrazi Incursion", "magic", "Rara", true, "Mazo listo para jugar en formato Commander."],
  ["Collector Booster Box", "magic", "Secreta", true, "Sobres premium con cartas foil garantizadas."],
  ["Bundle – Bloomburrow", "magic", "Rara", false, "Incluye 9 sobres, dados y caja de almacenaje."],
  ["Draft Booster – Duskmourn", "magic", "Común", false, "Sobre individual pensado para draft."],
  ["Mazo Precons – Modern Horizons", "magic", "Ultra Rara", false, "Mazo preconstruido competitivo."],
  ["Fat Pack – Foundations", "magic", "Rara", false, "Pack completo con accesorios de juego."],
  ["Caja de Almacenaje 400 Cartas", "magic", "Común", false, "Deck box rígida con separadores."],

  // ---------- DRAGON BALL SUPER ----------
  ["Booster Box – Blazing Aura (FS02)", "dbs", "Común", true, "24 sobres de la serie Fusion World."],
  ["Starter Deck – Saiyan Legacy", "dbs", "Rara", true, "Mazo temático listo para jugar."],
  ["Premium Pack Set – 2025", "dbs", "Ultra Rara", false, "Set premium con cartas de arte especial."],
  ["Sobre Individual – Fusion World", "dbs", "Común", false, "Sobre suelto de la última expansión."],
  ["Playmat – Goku Ultra Instinct", "dbs", "Rara", false, "Base de juego con estampado oficial."],
  ["Álbum Coleccionable DBS", "dbs", "Común", false, "Carpeta oficial de 180 cartas de capacidad."],

  // ---------- DIGIMON CARD GAME ----------
  ["Booster Box – BT-19", "digimon", "Común", true, "24 sobres de la expansión más reciente."],
  ["Starter Deck – Gaia Red", "digimon", "Rara", true, "Mazo inicial listo para jugar."],
  ["Tamer Set – Special Edition", "digimon", "Ultra Rara", false, "Set especial con sleeves y playmat."],
  ["Sobre Individual – EX Booster", "digimon", "Común", false, "Sobre suelto de expansión limitada."],
  ["Deck Box Oficial Digimon", "digimon", "Común", false, "Caja rígida con capacidad para 100 cartas."],

  // ---------- RIFTBOUND (LEAGUE OF LEGENDS) ----------
  ["Booster Box – Vendetta", "riftbound", "Común", true, "Caja sellada de la primera expansión oficial."],
  ["Starter Deck – Noxus Aggro", "riftbound", "Rara", true, "Mazo temático de la facción de Noxus."],
  ["Proving Grounds Bundle", "riftbound", "Ultra Rara", false, "Pack de introducción con accesorios."],
  ["Sobre Individual – Origins", "riftbound", "Común", false, "Sobre suelto de la colección Origins."],
  ["Playmat Oficial – Piltover", "riftbound", "Rara", false, "Base de juego con arte exclusivo."],

  // ---------- STAR WARS: UNLIMITED ----------
  ["Booster Box – Twilight of the Republic", "starwars", "Común", true, "Caja de 24 sobres de la expansión galáctica."],
  ["Two-Player Starter Set", "starwars", "Rara", true, "Set para dos jugadores listo para arrancar."],
  ["Sobre Individual – Spark of Rebellion", "starwars", "Común", false, "Sobre suelto de la primera expansión."],
  ["Deck Box – Darth Vader Edition", "starwars", "Rara", false, "Caja rígida temática del Lado Oscuro."],

  // ---------- FIGURAS & COLECCIONABLES ----------
  ["Figura Articulada – Ken (Street Fighter)", "figuras", "Ultra Rara", true, "Figura articulada de colección con base."],
  ["Estatua – Shanks (One Piece)", "figuras", "Secreta", true, "Estatua premium de resina, edición limitada."],
  ["Figura Coleccionable – Goku Ultra Instinct", "figuras", "Ultra Rara", false, "Figura de alta calidad con detalles pintados a mano."],
  ["Funko Pop – Charizard", "figuras", "Rara", true, "Edición especial brillante de la línea Pokémon."],
  ["Diorama – Luffy Gear 5", "figuras", "Secreta", false, "Pieza de colección con base temática incluida."],
  ["Figura Articulada – Nightmare Moon", "figuras", "Ultra Rara", false, "Figura de edición limitada con accesorios."],
  ["Busto Coleccionable – Darth Vader", "figuras", "Rara", false, "Busto a escala con acabado premium."],
  ["Set de Dados Metálicos – Legends Edition", "figuras", "Común", false, "Set de 7 dados metálicos para TTRPG."],
  ["Sleeves Premium 100u – Kodiak Edition", "figuras", "Común", false, "Protectores de cartas con diseño exclusivo."],
  ["Caja de Almacenaje Ilustrada – Legends", "figuras", "Rara", false, "Caja temática para guardar tus cartas sueltas."],
];

/* Genera productos adicionales para completar ~70 sin repetir contenido real */
function padProducts(list, target) {
  const extra = [];
  let i = 1;
  while (list.length + extra.length < target) {
    const cat = CATEGORIES[(i - 1) % CATEGORIES.length];
    extra.push([
      `${cat.name} – Producto ${i}`,
      cat.id,
      RARITIES[i % RARITIES.length],
      false,
      "Descripción a completar con el producto real.",
    ]);
    i++;
  }
  return list.concat(extra);
}

const FULL_LIST = padProducts(RAW_PRODUCTS, 70);

const PRODUCTS = FULL_LIST.map((p, idx) => ({
  id: idx + 1,
  name: p[0],
  category: p[1],
  rarity: p[2],
  featured: p[3],
  desc: p[4],
  img: p[5] || "",
}));
