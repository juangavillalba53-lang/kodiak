<<<<<<< HEAD
# Kodiak Legends — sitio web

## Estructura
- `index.html` — página principal (hero tipo escudo, carrusel de destacados con autoplay, categorías, redes).
- `products.html` — catálogo completo con buscador, filtro por categoría y orden.
- `css/style.css` — todos los estilos.
- `js/products.js` — **acá se cargan los productos**. Es una lista de placeholders.
- `js/main.js` — lógica compartida (tarjetas, modal, links de Instagram/TikTok).
- `assets/logo.png` — logo actual.

## Catálogo informativo, sin precio ni WhatsApp
Las tarjetas no muestran precio ni rareza. El contacto es 100% por redes:
cada producto abre un modal con nombre, categoría, descripción y botones
directos a Instagram y TikTok. No hay ningún número ni link de WhatsApp
en el sitio.

## Cómo cargar productos reales
Editar `js/products.js`. Cada producto tiene esta forma:

```js
["Nombre del producto", "categoria_id", "Rareza", esDestacado, "Descripción corta."]
```

- `categoria_id` tiene que ser uno de: `pokemon`, `onepiece`, `magic`, `dbs`,
  `digimon`, `riftbound`, `starwars`, `figuras`.
- `esDestacado` = `true` hace que el producto aparezca en el carrusel de la home.
- El campo "Rareza" queda en los datos por si en algún momento se vuelve a
  mostrar, pero hoy no se renderiza en ningún lado.
- Para poner una foto real, en el objeto final (`PRODUCTS`) se le puede pasar
  `img: "assets/productos/nombre-archivo.jpg"`. Mientras no haya foto, la
  tarjeta muestra un marco de color con "Foto próximamente".

## Fotos de producto
**Formato cuadrado, 800×800px** (mismo criterio que usamos en Omega Store TCG).
Guardarlas en `assets/productos/` y referenciarlas desde `products.js`.

## Redes (ya cargadas)
En `js/main.js`:
- Instagram: https://www.instagram.com/kodiak_legends/
- TikTok: https://www.tiktok.com/@kodiaklegends

## Deploy
Mismo flujo de siempre: GitHub → Vercel.
=======
# kodiak
>>>>>>> a7c5c8df17858f44b30414116f5901ee1c04011f
