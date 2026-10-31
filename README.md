# MP Dev Studio — Portafolio

Sitio web de portafolio y catálogo de servicios de **MP Dev Studio**, estudio de desarrollo web, diseño editorial y sistemas empresariales a medida con base en Loja, Ecuador.

🌐 **[mpdesigns.xyz](https://mpdesigns.xyz)**

---

## Qué hay en este repositorio

El sitio está construido en HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias de build. Funciona directamente en el navegador y se publica mediante GitHub Pages.

### Páginas

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Portada principal con hero, secciones de servicios, proyectos, branding y contacto |
| `index2.html` | Catálogo de servicios detallado con carrusel de soluciones |
| `galerial.html` | Visor HD (archivo; fuera del flujo público / noindex) |
| `proyectos/` | Demos front-end que sí viven en este repo (`curativa`, `5elementos`) y fichas de proyecto generadas (`nuestro-si`). Curarte Menú es otro repositorio y no está aquí |

### Archivos clave

| Archivo | Función |
|---------|---------|
| `data/portfolio-data.js` | Fuente única de contenido compartida por todas las páginas. Los casos nuevos van en `projects` |
| `data/project-page.js` | Plantilla de la ficha y de la card de catálogo |
| `proyecto.html` | Ficha de proyecto. Lee `?id=` y no requiere build |
| `scripts/prerender-projects.mjs` | Opcional. Escribe `proyectos/<slug>/index.html` para SEO |
| `script.js` | Navegación animada, galerías, cards, hero interactivo |
| `style.css` | Sistema visual completo, responsive, animaciones y consentimiento |
| `ads-config.js` | Configuración de IDs publicitarios (ver sección Ads) |
| `ads-tracking.js` | Carga condicional de Google Ads y Meta Pixel por consentimiento |

---

## Stack

- **HTML5 / CSS3 / JavaScript ES2020+** — sin frameworks
- **GitHub Pages** — hosting y CI/CD automático vía `git push`
- **CNAME** configurado para dominio personalizado (`mpdesigns.xyz`)
- **WebP** para imágenes optimizadas con fallback PNG
- **Schema.org JSON-LD** para SEO estructurado

---

## Correr localmente

No requiere instalación. Basta con abrir `index.html` en el navegador, o usar cualquier servidor estático:

```bash
# Con Python
python -m http.server 8080

# Con Node.js (npx)
npx serve .
```

---

## Configuración de Ads (opcional)

El archivo `ads-config.js` centraliza los identificadores publicitarios. Por defecto están vacíos y el sistema de tracking no carga ninguna etiqueta hasta que el visitante otorgue consentimiento.

Para activar la medición, completar con los IDs reales de las cuentas propias:

```js
window.MPAdsConfig = Object.freeze({
  googleAdsId: "AW-XXXXXXXXX",
  googleLeadLabel: "AbCdEfGh1234",
  metaPixelId: "1234567890123456",
  currency: "USD",
  leadValue: 1
});
```

> Si en algún momento los IDs se añaden a este archivo, agregar `ads-config.js` al `.gitignore` antes de commitear.

---

## Cómo agregar un proyecto

Hace falta una entrada en `data/portfolio-data.js` y sus imágenes. No hay que editar `index.html`, `index2.html` ni armar una página a mano.

1. Guarda la imagen en `images/` (WebP, liviana; la card del home no debería depender de un PNG de varios MB).
2. Copia el ejemplo comentado dentro de `projects` en `data/portfolio-data.js` y completa los campos. Con eso la card aparece al final de la sección del home (`section`: `servicios`, `webs` o `branding`) y la ficha responde en `proyecto.html?id=<slug>`.
3. Si quieres la misma card en el catálogo, pon `catalogSection` en `web`, `marca` o `itera`. Si lo omites, el catálogo no cambia.
4. Opcional, para una URL estática indexable: `node scripts/prerender-projects.mjs`. Eso escribe `proyectos/<slug>/index.html` y suma la URL al sitemap. Hay que commitear ese HTML. El sitio sigue funcionando si no corres el script: la card apunta a `proyecto.html?id=<slug>` cuando el objeto no trae `page`.

La entrada comentada está justo arriba de `projects`. Los casos que ya estaban en `homeSections` no se mueven: una entrada nueva se agrega después, así que el mosaico actual queda igual.

## Proyectos en el portafolio

| Proyecto | Tipo | Dónde verlo |
|----------|------|-------------|
| ITERA QMS | Sistema de gestión de calidad y trazabilidad para fabricantes de cosmética | [iteraqms.com](https://iteraqms.com/) |
| Curativa Herbal | E-commerce + identidad de marca para cosmética artesanal | `proyectos/curativa/` |
| Curarte Menú | Carta digital para restaurante | Repositorio aparte. No existe `proyectos/curarte_menu/` en este repo. La card del portafolio abre [curarteloja.com](https://curarteloja.com) |
| 5 Elementos | Identidad y packaging editorial | `proyectos/5elementos/` |
| Nuestro Sí | Plataforma de invitaciones de boda (React, Vite, Node/Express, Postgres) | [nuestrosi.app](https://nuestrosi.app) · ficha `proyectos/nuestro-si/` |
| Dirección de arte Victoria | Afiche, adaptaciones y piezas de evento | incluido en galería |
| Revista Escanzel | Narrativa documental editorial | incluido en galería |

---

## Licencia

El código de este repositorio es de referencia pública como muestra de trabajo técnico.  
Los proyectos de clientes dentro de `proyectos/` son demos front-end y la propiedad intelectual de cada marca corresponde a sus respectivos dueños.  
Los sistemas propietarios (ITERA QMS y derivados) no están incluidos en este repositorio.

---

© 2026 MP Dev Studio · Loja, Ecuador