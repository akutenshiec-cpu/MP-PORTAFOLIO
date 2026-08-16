# MP Dev Studio — Portafolio

Sitio web de portafolio y catálogo de servicios de **MP Dev Studio**, estudio de desarrollo web, diseño editorial y sistemas empresariales a medida con base en Loja, Ecuador.

🌐 **[mpdesigns.xyz](https://mpdesigns.xyz)**

---

## Qué hay en este repositorio

El sitio está construido en HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias de build. Funciona directamente en el navegador y se publica mediante GitHub Pages.

### Páginas

| Archivo | Descripción |
|---------|-------------|
| index.html | Portada principal con hero, secciones de servicios, proyectos, branding y contacto |
| index2.html | Catálogo de servicios detallado con carrusel de soluciones |
| galerial.html | Visor independiente de proyectos |
| proyectos/ | Demos front-end de proyectos para clientes (Curativa, Curarte, 5 Elementos) |

### Archivos clave

| Archivo | Función |
|---------|---------|
| data/portfolio-data.js | Fuente única de contenido compartida por todas las páginas |
| script.js | Navegación animada, galerías, cards, hero interactivo |
| style.css | Sistema visual completo, responsive, animaciones y consentimiento |
| ds-config.js | Configuración de IDs publicitarios (ver sección Ads) |
| ds-tracking.js | Carga condicional de Google Ads y Meta Pixel por consentimiento |

---

## Stack

- **HTML5 / CSS3 / JavaScript ES2020+** — sin frameworks
- **GitHub Pages** — hosting y CI/CD automático vía git push
- **CNAME** configurado para dominio personalizado (mpdesigns.xyz)
- **WebP** para imágenes optimizadas con fallback PNG
- **Schema.org JSON-LD** para SEO estructurado

---

## Correr localmente

No requiere instalación. Basta con abrir index.html en el navegador, o usar cualquier servidor estático:

`ash
# Con Python
python -m http.server 8080

# Con Node.js (npx)
npx serve .
`

---

## Configuración de Ads (opcional)

El archivo ds-config.js centraliza los identificadores publicitarios. Por defecto están vacíos y el sistema de tracking no carga ninguna etiqueta hasta que el visitante otorgue consentimiento.

Para activar la medición, completar con los IDs reales de las cuentas propias:

`js
window.MPAdsConfig = Object.freeze({
  googleAdsId: "AW-XXXXXXXXX",
  googleLeadLabel: "AbCdEfGh1234",
  metaPixelId: "1234567890123456",
  currency: "USD",
  leadValue: 1
});
`

> Si en algún momento los IDs se añaden a este archivo, agregar ds-config.js al .gitignore antes de commitear.

---

## Proyectos en el portafolio

| Proyecto | Tipo | Demo |
|----------|------|------|
| ITERA QMS | Sistema de gestión de calidad y trazabilidad para fabricantes de cosmética | *privado* |
| Curativa Herbal | E-commerce + identidad de marca para cosmética artesanal | proyectos/curativa/ |
| Curarte Menú | Carta digital interactiva para restaurante | proyectos/curarte_menu/ |
| 5 Elementos | Identidad y packaging editorial | proyectos/5elementos/ |
| Dirección de arte Victoria | Afiche, adaptaciones y piezas de evento | incluido en galería |
| Revista Escanzel | Narrativa documental editorial | incluido en galería |

---

## Licencia

El código de este repositorio es de referencia pública como muestra de trabajo técnico.  
Los proyectos de clientes dentro de proyectos/ son demos front-end y la propiedad intelectual de cada marca corresponde a sus respectivos dueños.  
Los sistemas propietarios (ITERA QMS y derivados) no están incluidos en este repositorio.

---

© 2026 MP Dev Studio · Loja, Ecuador
