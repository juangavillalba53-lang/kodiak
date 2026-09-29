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
    "Delta Reign Booster Box",
    "pokemon",
    "Rara",
    true,
    "Booster Box de Pokémon: Delta Reign.",
    "assets/productos/delta.png"
  ],
  [
    "Grafaiai ex Box",
    "pokemon",
    "Rara",
    false,
    "Caja de colección Grafaiai ex con carta promocional, carta jumbo y sobres de Pokémon TCG.",
    "assets/productos/grafa.png"
  ],
  [
    "Destined Rivals Booster Box",
    "pokemon",
    "Rara",
    false,
    "Booster Box de Pokémon Scarlet & Violet: Destined Rivals.",
    "assets/productos/destined.png"
  ],
  [
    "Pitch Black Build & Battle Box",
    "pokemon",
    "Rara",
    false,
    "Build & Battle Box de Pokémon Mega Evolution: Pitch Black.",
    "assets/productos/pitch.png"
  ],
  [
    "Prismatic Evolutions Tech Sticker Collection",
    "pokemon",
    "Rara",
    false,
    "Colección Tech Sticker Collection de Pokémon Scarlet & Violet: Prismatic Evolutions con carta promocional, stickers y sobres.",
    "assets/productos/sticker.png"
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
    false,
    "Elite Trainer Box de Pokémon Sword & Shield: Silver Tempest.",
    "assets/productos/silver.png"
  ],
  [
    "First Partner Illustration Collection Series 3",
    "pokemon",
    "Rara",
    false,
    "Colección First Partner Illustration Collection Series 3 con cartas promocionales y sobres.",
    "assets/productos/serie3.png"
  ],
  [
    "Ninetales ex Deluxe Battle Deck",
    "pokemon",
    "Rara",
    false,
    "Deluxe Battle Deck de Ninetales ex listo para jugar con mazo preconstruido de 60 cartas.",
    "assets/productos/deluxe.png"
  ],
  [
    "Annihilape ex Box",
    "pokemon",
    "Rara",
    false,
    "Caja Annihilape ex con carta promocional, carta jumbo y sobres de Pokémon TCG.",
    "assets/productos/anni.png"
  ],
  [
    "Pokémon Fall 2024 Mini Tin Display",
    "pokemon",
    "Rara",
    false,
    "Display de Mini Tins Pokémon con latas coleccionables y sobres de Pokémon TCG.",
    "assets/productos/tin.png"
  ],
  [
    "Koraidon & Miraidon Collector Chest",
    "pokemon",
    "Rara",
    false,
    "Collector Chest de Pokémon con Koraidon y Miraidon, incluye sobres y artículos coleccionables.",
    "assets/productos/lata.png"
  ],

  // ---------- ONE PIECE TCG ----------
  [
    "Starter Deck ST-22 Ace & Newgate",
    "onepiece",
    "Rara",
    true,
    "Starter Deck ST-22 Ace & Newgate listo para jugar del One Piece Card Game.",
    "assets/productos/ace.png"
  ],
  [
    "Starter Deck ST-14 3D2Y",
    "onepiece",
    "Rara",
    true,
    "Starter Deck ST-14 3D2Y listo para jugar del One Piece Card Game.",
    "assets/productos/st14.png"
  ],
  [
    "Starter Deck ST-35 Sabo",
    "onepiece",
    "Rara",
    false,
    "Starter Deck ST-35 Sabo listo para jugar del One Piece Card Game.",
    "assets/productos/sabo.png"
  ],
  [
    "Starter Deck ST-33 Kuzan",
    "onepiece",
    "Rara",
    true,
    "Starter Deck ST-33 Kuzan listo para jugar del One Piece Card Game.",
    "assets/productos/kuzan.png"
  ],
  [
    "Double Pack Set Vol. 11",
    "onepiece",
    "Rara",
    false,
    "Double Pack Set Vol. 11 del One Piece Card Game con sobres y carta DON!! especial.",
    "assets/productos/negro.png"
  ],
  [
    "The Best Vol. 2 Booster Box",
    "onepiece",
    "Ultra Rara",
    false,
    "Booster Box de The Best Vol. 2 (PRB-02) del One Piece Card Game.",
    "assets/productos/best.png"
  ],
  [
    "Royal Blood Booster Box",
    "onepiece",
    "Ultra Rara",
    false,
    "Booster Box de Royal Blood (OP-10) del One Piece Card Game.",
    "assets/productos/royal.png"
  ],
  [
    "Learn Together Deck Set",
    "onepiece",
    "Ultra Rara",
    false,
    "Learn Together Deck Set del One Piece Card Game para aprender a jugar en pareja.",
    "assets/productos/colores.png"
  ],

  // ---------- MAGIC: THE GATHERING ----------
  [
    "Final Fantasy VIII: Children of Fate Scene Box",
    "magic",
    "Rara",
    true,
    "Scene Box de Magic: The Gathering – Final Fantasy VIII: Children of Fate con cartas de escena y sobres Play Booster.",
    "assets/productos/final.png"
  ],
  [
    "The Hobbit Play Booster Box",
    "magic",
    "Ultra Rara",
    true,
    "Play Booster Box de Magic: The Gathering – The Hobbit.",
    "assets/productos/hobbit.png"
  ],
  [
    "Teenage Mutant Ninja Turtles Pizza Bundle",
    "magic",
    "Ultra Rara",
    true,
    "Pizza Bundle de Magic: The Gathering x Teenage Mutant Ninja Turtles con sobres y contenido exclusivo.",
    "assets/productos/tortuga.png"
  ],
  [
    "Marvel Super Heroes Collector Booster Box",
    "magic",
    "Ultra Rara",
    false,
    "Collector Booster Box de Magic: The Gathering – Marvel Super Heroes.",
    "assets/productos/super.png"
  ],
  [
    "Marvel Super Heroes Jumpstart Booster Box",
    "magic",
    "Rara",
    false,
    "Jumpstart Booster Box de Magic: The Gathering – Marvel Super Heroes.",
    "assets/productos/jump.png"
  ],
  [
    "Tarkir: Dragonstorm Collector Booster Box",
    "magic",
    "Ultra Rara",
    false,
    "Collector Booster Box de Magic: The Gathering – Tarkir: Dragonstorm.",
    "assets/productos/tarkir.png"
  ],
  [
    "Lorehold Spirit Commander Deck",
    "magic",
    "Rara",
    false,
    "Commander Deck de Strixhaven: Lorehold Spirit listo para jugar.",
    "assets/productos/lore.png"
  ],
  [
    "Prismari Artistry Commander Deck",
    "magic",
    "Rara",
    false,
    "Commander Deck de Strixhaven: Prismari Artistry listo para jugar.",
    "assets/productos/prismari.png"
  ],

  // ---------- DRAGON BALL SUPER ----------
  [
    "Story Booster 01",
    "dbs",
    "Ultra Rara",
    true,
    "Story Booster 01 (ST01) de Dragon Ball Super Card Game Fusion World.",
    "assets/productos/01.png"
  ],
  [
    "Fusion World FB10 Booster Box",
    "dbs",
    "Ultra Rara",
    true,
    "Booster Box FB10 de Dragon Ball Super Card Game Fusion World.",
    "assets/productos/10.png"
  ],
  [
    "Starter Deck EX FS11",
    "dbs",
    "Rara",
    false,
    "Starter Deck EX FS11 de Dragon Ball Super Card Game Fusion World listo para jugar.",
    "assets/productos/11.png"
  ],
  [
    "Starter Deck EX FS12",
    "dbs",
    "Rara",
    false,
    "Starter Deck EX FS12 de Dragon Ball Super Card Game Fusion World listo para jugar.",
    "assets/productos/12.png"
  ],
  [
    "Starter Deck FS08 Vegeta (Mini) Super Saiyan 3",
    "dbs",
    "Rara",
    false,
    "Starter Deck FS08 Vegeta (Mini) Super Saiyan 3 de Dragon Ball Super Card Game Fusion World.",
    "assets/productos/08.png"
  ],
  [
    "Starter Deck FS07 Vegeta (Mini)",
    "dbs",
    "Rara",
    false,
    "Starter Deck FS07 Vegeta (Mini) de Dragon Ball Super Card Game Fusion World.",
    "assets/productos/07.png"
  ],

  // ---------- DIGIMON CARD GAME ----------
  [
    "Timeless Bonds Booster Box",
    "digimon",
    "Ultra Rara",
    true,
    "Booster Box de Digimon Card Game: Timeless Bonds.",
    "assets/productos/time.png"
  ],
  [
    "Time Stranger Booster Box",
    "digimon",
    "Ultra Rara",
    true,
    "Booster Box de Digimon Card Game: Time Stranger.",
    "assets/productos/time1.png"
  ],
  [
    "Sinister Order Booster Box",
    "digimon",
    "Ultra Rara",
    false,
    "Booster Box de Digimon Card Game: Sinister Order.",
    "assets/productos/gini.png"
  ],
  [
    "Starter Deck ST-24 Digimon Data Squad",
    "digimon",
    "Rara",
    false,
    "Starter Deck ST-24 Digimon Data Squad listo para jugar del Digimon Card Game.",
    "assets/productos/24.png"
  ],
  [
    "Starter Deck ST-23 Digimon Beatbreak",
    "digimon",
    "Rara",
    false,
    "Starter Deck ST-23 Digimon Beatbreak listo para jugar del Digimon Card Game.",
    "assets/productos/23.png"
  ],

  // ---------- RIFTBOUND (LEAGUE OF LEGENDS) ----------
  [
    "Vendetta Booster Box",
    "riftbound",
    "Ultra Rara",
    true,
    "Booster Box de Riftbound: Vendetta.",
    "assets/productos/vend.png"
  ],
  [
    "Unleashed Booster Box",
    "riftbound",
    "Ultra Rara",
    true,
    "Booster Box de Riftbound: Unleashed.",
    "assets/productos/unle.png"
  ],
  [
    "Spiritforge Booster Box",
    "riftbound",
    "Ultra Rara",
    false,
    "Booster Box de Riftbound: Spiritforge.",
    "assets/productos/spir.png"
  ],
  [
    "Spiritforge Pre-Rift Kit",
    "riftbound",
    "Rara",
    false,
    "Pre-Rift Kit de Riftbound: Spiritforge para iniciarse en el juego.",
    "assets/productos/pre.png"
  ],
  [
    "Jinx Champion Deck",
    "riftbound",
    "Rara",
    false,
    "Champion Deck de Jinx listo para jugar en Riftbound: League of Legends TCG.",
    "assets/productos/jinx.png"
  ],

  // ---------- STAR WARS: UNLIMITED ----------
  [
    "Secrets of Power Booster Box",
    "starwars",
    "Ultra Rara",
    true,
    "Booster Box de Star Wars Unlimited: Secrets of Power.",
    "assets/productos/secrets.png"
  ],
  ["Two-Player Starter Set", "starwars", "Rara", true, "Set para dos jugadores listo para arrancar.", "assets/productos/law.png"],
  [
    "Chancellor Palpatine Spotlight Deck",
    "starwars",
    "Rara",
    false,
    "Spotlight Deck de Chancellor Palpatine listo para jugar en Star Wars Unlimited: Secrets of Power.",
    "assets/productos/secret.png"
  ],
  [
    "Jabba the Hutt Spotlight Deck",
    "starwars",
    "Rara",
    false,
    "Spotlight Deck de Jabba the Hutt listo para jugar en Star Wars Unlimited: A Lawless Time.",
    "assets/productos/lawl.png"
  ],

  // ---------- FIGURAS & COLECCIONABLES ----------
  [
    "Ken Action Figure",
    "figuras",
    "Ultra Rara",
    true,
    "Figura articulada de Ken de Street Fighter para colección y exhibición.",
    "assets/productos/ken.png"
  ],
  [
    "Shanks Figure",
    "figuras",
    "Ultra Rara",
    true,
    "Figura de Shanks de One Piece para colección y exhibición.",
    "assets/productos/shanks.png"
  ],
  [
    "Goku Ultra Instinct Action Figure",
    "figuras",
    "Ultra Rara",
    false,
    "Figura articulada de Goku Ultra Instinct para colección y exhibición.",
    "assets/productos/goku.png"
  ],
  [
    "Charizard Funko Pop! #843",
    "figuras",
    "Rara",
    true,
    "Figura Funko Pop! #843 de Charizard de Pokémon para colección y exhibición.",
    "assets/productos/chari.png"
  ],
  [
    "Kirito Figure",
    "figuras",
    "Ultra Rara",
    false,
    "Figura de Kirito de Sword Art Online para colección y exhibición.",
    "assets/productos/nv.png"
  ],
  [
    "Portgas D. Ace Action Figure",
    "figuras",
    "Ultra Rara",
    false,
    "Figura articulada de Portgas D. Ace de One Piece para colección y exhibición.",
    "assets/productos/luck.png"
  ],
  [
    "Darth Vader Action Figure",
    "figuras",
    "Rara",
    false,
    "Figura articulada de Darth Vader de Star Wars para colección y exhibición.",
    "assets/productos/darth.png"
  ],
  [
    "Charizard Figure",
    "figuras",
    "Ultra Rara",
    false,
    "Figura de Charizard de Pokémon para colección y exhibición.",
    "assets/productos/charizard.png"
  ],
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

const FULL_LIST = RAW_PRODUCTS;

const PRODUCTS = FULL_LIST.map((p, idx) => ({
  id: idx + 1,
  name: p[0],
  category: p[1],
  rarity: p[2],
  featured: p[3],
  desc: p[4],
  img: p[5] || "",
}));
