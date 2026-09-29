/* ============================================================
   KODIAK LEGENDS — Guías por juego
   Cada tema tiene:
   - icon: emoji para la tarjeta
   - teaser: texto CORTO que se ve en la tarjeta (lo justo)
   - desc: explicación completa que se ve al abrir el modal
   Revisar y ajustar si algo cambia con nuevas expansiones/reglas.
   ============================================================ */

const GUIDE_TOPICS = {
  pokemon: [
    { icon: "⚡", title: "Tipos de Energía", teaser: "Planta, Fuego, Agua, Rayo, Psíquico, Lucha, Oscuridad, Metal e Incoloro.", desc: "Cada Pokémon necesita energía de su tipo para atacar: Planta, Fuego, Agua, Rayo, Psíquico, Lucha, Oscuridad, Metal e Incoloro son los tipos básicos." },
    { icon: "⭐", title: "Rarezas", teaser: "Común, Poco Común, Rara... y las especiales como Full Art o Secreta.", desc: "Común, Poco Común y Rara son las básicas. Después están las especiales como Full Art, Ultra Rara, Illustration Rare y Secreta, marcadas con un símbolo en la esquina inferior." },
    { icon: "🎮", title: "Cómo se juega", teaser: "Ganás si le robás a tu rival sus 6 cartas de premio.", desc: "Armás un mazo de 60 cartas y ganás si dejás sin Pokémon a tu rival o le robás sus 6 cartas de premio primero, atacando por turnos con Pokémon, energías y cartas de Entrenador." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Elite Trainer Box para arrancar, sobres para sumar cartas.", desc: "Para arrancar de cero, un Elite Trainer Box o un Battle Deck te dan todo lo necesario. Los sobres son para ir sumando cartas nuevas a tu colección o mejorar tu mazo." },
    { icon: "🃏", title: "Armar mazo", teaser: "60 cartas, máximo 4 copias de cada una.", desc: "Un mazo legal tiene exactamente 60 cartas, con un máximo de 4 copias de cada carta (las energías básicas son la excepción, podés poner las que quieras)." },
    { icon: "🏆", title: "Formatos", teaser: "Standard o Expanded.", desc: "Standard usa solo las expansiones más recientes. Expanded suma un pool mucho más grande de cartas de años anteriores." },
  ],
  onepiece: [
    { icon: "🎴", title: "Tipos de Carta", teaser: "Líder, Personaje, Evento, Escenario e Inicio.", desc: "Líder, Personaje, Evento, Escenario e Inicio. El Líder queda en juego toda la partida y define el color de tu mazo." },
    { icon: "💪", title: "Costo y Power", teaser: "DON!! para jugar cartas y potenciar tus ataques.", desc: "Cada carta tiene un Costo en DON!! para jugarla y un Power para pelear. Los DON!! se ganan por turno y también sirven para potenciar tus ataques." },
    { icon: "🎮", title: "Cómo se juega", teaser: "Ganás bajando la Vida del rival a 0.", desc: "Ganás bajando la Vida de tu rival a 0 o dejándolo sin cartas. Atacás con Personajes usando DON!!, y podés bloquear o jugar Eventos para defenderte." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Starter Deck para arrancar, sobres para potenciar.", desc: "Un Starter Deck te da un mazo temático listo para jugar. Los sobres sirven para completar ese mazo o potenciarlo con cartas más fuertes." },
    { icon: "🃏", title: "Armar mazo", teaser: "50 cartas del color de tu Líder.", desc: "El mazo principal tiene 50 cartas (el Líder va aparte), con máximo 4 copias de cada carta y, salvo excepciones, todas del mismo color que tu Líder." },
    { icon: "🏆", title: "Formatos", teaser: "Todas las expansiones legales vigentes.", desc: "Se juega con todas las expansiones legales publicadas hasta el momento; Bandai va actualizando el pool permitido con el tiempo." },
  ],
  magic: [
    { icon: "💠", title: "Colores de Maná", teaser: "Blanco, Azul, Negro, Rojo y Verde.", desc: "Blanco, Azul, Negro, Rojo y Verde. Cada color tiene su propio estilo de juego y se pueden combinar para armar mazos de varios colores." },
    { icon: "📜", title: "Tipos de Hechizo", teaser: "Criaturas, Instantáneos, Conjuros, Encantamientos y más.", desc: "Criaturas, Instantáneos, Conjuros, Encantamientos, Artefactos y Planeswalkers son los tipos de carta principales que vas a usar en cualquier mazo." },
    { icon: "🎮", title: "Cómo se juega", teaser: "20 puntos de vida, ganás llevando los del rival a 0.", desc: "Arrancás con 20 puntos de vida. Ganás bajando la vida del rival a 0, dejándolo sin cartas para robar, o con alguna condición especial de victoria." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Play Boosters al azar, Commander Decks listos.", desc: "Los Play Boosters son la forma estándar de sumar cartas al azar a tu colección. Los Commander Decks vienen listos para jugar sin armar nada." },
    { icon: "🃏", title: "Armar mazo", teaser: "60 cartas, máximo 4 copias de cada una.", desc: "Un mazo estándar tiene 60 cartas, con hasta 4 copias de cada una (las tierras básicas no tienen límite). Commander usa 100 cartas, todas distintas entre sí." },
    { icon: "🏆", title: "Formatos", teaser: "Standard, Pioneer, Modern y Commander.", desc: "Standard, Pioneer, Modern y Commander son los más jugados, cada uno con su propio pool de cartas permitidas." },
  ],
  dbs: [
    { icon: "🎴", title: "Tipos de Carta", teaser: "Líder, Batalla, Extra y Estado.", desc: "Líder, Batalla, Extra y Estado. El Líder queda fijo toda la partida y marca tu color y tu poder inicial." },
    { icon: "🔥", title: "Combos y Energía", teaser: "La Energía te deja jugar cartas extra y activar combos.", desc: "El sistema de Energía te deja jugar cartas extra y activar combos especiales durante tus ataques y bloqueos." },
    { icon: "🎮", title: "Cómo se juega", teaser: "Ganás bajando la Vida del rival a 0.", desc: "Ganás bajando la Vida de tu rival a 0. Atacás y bloqueás con cartas de Batalla, usando tu Energía para potenciar las jugadas." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Starter Deck para arrancar, sobres para potenciar.", desc: "Un Starter Deck es la forma más simple de arrancar con un mazo temático ya armado. Los sobres sirven para sumar variantes y cartas más fuertes." },
    { icon: "🃏", title: "Armar mazo", teaser: "50 cartas, máximo 4 copias de cada una.", desc: "El mazo principal tiene 50 cartas (el Líder va aparte), con un máximo de 4 copias de cada carta según lo que indique su texto." },
    { icon: "🏆", title: "Formatos", teaser: "Fusion World, el formato vigente.", desc: "Fusion World es el formato vigente. Bandai actualiza cada tanto qué expansiones están permitidas en torneos oficiales." },
  ],
  digimon: [
    { icon: "🧬", title: "Niveles Digimon", teaser: "Baby, In-Training, Rookie, Champion, Ultimate y Mega.", desc: "Baby, In-Training, Rookie, Champion, Ultimate y Mega. Tus Digimon evolucionan de un nivel al siguiente pagando el costo de evolución." },
    { icon: "🛡️", title: "Memoria y Seguridad", teaser: "La Memoria define el turno, la Seguridad te protege.", desc: "La Memoria decide de quién es el turno: si queda negativa para tu rival, el turno pasa a ser tuyo. La Pila de Seguridad protege tu partida como última línea de defensa." },
    { icon: "🎮", title: "Cómo se juega", teaser: "Ganás vaciando la Pila de Seguridad del rival.", desc: "Ganás atacando la Pila de Seguridad del rival hasta vaciarla y después atacando directo, o si tu rival se queda sin cartas para robar." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Starter Deck para arrancar, sobres para potenciar.", desc: "Un Starter Deck trae un mazo temático completo y listo. Los sobres sirven para potenciar ese mazo o armar uno nuevo desde cero." },
    { icon: "🃏", title: "Armar mazo", teaser: "50 cartas más hasta 5 Digi-Egg aparte.", desc: "El mazo principal tiene 50 cartas (hasta 5 cartas de Digi-Egg van aparte), con un máximo de 4 copias de cada carta." },
    { icon: "🏆", title: "Formatos", teaser: "El formato estándar rota con el tiempo.", desc: "El formato estándar rota con el tiempo, a medida que Bandai retira las expansiones más viejas del pool legal en torneos." },
  ],
  riftbound: [
    { icon: "👑", title: "Dominios y Campeones", teaser: "Cada mazo gira en torno a Campeones y su Dominio.", desc: "Cada mazo se arma alrededor de Campeones de League of Legends y sus Dominios (colores), que definen el estilo de juego." },
    { icon: "🔮", title: "Runas y Recursos", teaser: "Un sistema propio de recursos para jugar tus cartas.", desc: "El juego tiene un sistema propio de recursos para jugar tus cartas y activar las habilidades de tus Campeones durante la partida." },
    { icon: "🎮", title: "Cómo se juega", teaser: "Derrotás a tu rival con Campeones y Unidades.", desc: "Es un juego de cartas por turnos donde el objetivo es derrotar a tu rival usando Campeones y Unidades, apoyado en la estrategia de tu Dominio." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Starter Deck para arrancar, sobres para expandir.", desc: "Un Starter Deck te da un mazo temático listo para jugar. Los sobres sirven para expandir tu colección con cartas nuevas." },
    { icon: "🃏", title: "Armar mazo", teaser: "Campeones de hasta dos Dominios distintos.", desc: "El mazo se arma combinando Campeones de hasta dos Dominios distintos, respetando los límites de copias por carta." },
    { icon: "🏆", title: "Formatos", teaser: "Todas las expansiones publicadas hasta el momento.", desc: "Al ser un juego nuevo, por ahora se juega con todas las expansiones publicadas hasta el momento." },
  ],
  starwars: [
    { icon: "🎭", title: "Aspectos", teaser: "Vigilancia, Comando, Astucia, Agresión y Heroísmo/Villanía.", desc: "Vigilancia, Comando, Astucia, Agresión y Heroísmo/Villanía marcan el estilo de cada mazo y qué cartas podés incluir en él." },
    { icon: "🏰", title: "Bases y Unidades", teaser: "Tu Base es tu vida, tus Unidades atacan y defienden.", desc: "Tenés una Base que define tu vida total, y desplegás Unidades y Eventos para atacar la del rival y defender la tuya." },
    { icon: "🎮", title: "Cómo se juega", teaser: "Ganás bajando a 0 la vida de la Base rival.", desc: "Ganás reduciendo la vida de la Base rival a 0, atacando con tus Unidades y usando Eventos para sacar ventaja en la partida." },
    { icon: "🛒", title: "Cómo comprar", teaser: "Two-Player Starter Set para arrancar de a dos.", desc: "Un Two-Player Starter Set es ideal para arrancar de a dos. Los sobres sirven para sumar cartas y armar tu propio mazo." },
    { icon: "🃏", title: "Armar mazo", teaser: "Un Líder, una Base y hasta dos Aspectos.", desc: "El mazo se arma alrededor de un Líder y una Base, eligiendo cartas de hasta dos Aspectos compatibles con esa combinación." },
    { icon: "🏆", title: "Formatos", teaser: "Premier, con todas las expansiones vigentes.", desc: "El formato Premier incluye todas las expansiones legales publicadas hasta el momento." },
  ],
};

/* Juegos con guía disponible (se excluye "figuras" porque no es un TCG) */
const GUIDE_GAMES = CATEGORIES.filter((c) => c.id !== "figuras").map((c) => ({
  id: c.id,
  name: c.name,
  topics: GUIDE_TOPICS[c.id] || [],
}));
