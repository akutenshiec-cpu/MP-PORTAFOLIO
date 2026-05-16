# Cómo agregar trabajos

Todo el contenido editable vive en `data/portfolio-data.js` (sin paneles ni `localStorage`).

## 1) Galería de imágenes (`galleries`)

Agrega o duplica un bloque con `title`, opcional `summary` (texto en la galería HD) e `images` (rutas relativas desde la raíz del sitio):

```js
nuevoProyecto: {
    title: "Nombre del proyecto",
    summary: "Una línea que describe el encargo.",
    images: ["images/proyecto-1.jpg", "images/proyecto-2.jpg"]
}
```

## 2) Tarjetas en la portada (`homeSections`)

En la sección que corresponda (`webs`, `branding`, `promo`, `ciencia`, `servicios`), agrega un ítem:

```js
{
    id: "nuevoProyecto",
    type: "gallery",
    title: "Nombre del proyecto",
    description: "Descripción comercial corta.",
    image: "images/proyecto-thumb.jpg",
    imageAlt: "Nombre del proyecto",
    badge: "Nuevo",
    tags: ["Branding", "Web"],
    order: 99,
    visible: true
}
```

- `type: "web"` + entrada en `webs` abre el demo en modal.
- `type: "gallery"` + misma `id` que en `galleries` abre el lightbox y el enlace “Vista galería HD”.

## 3) Textos globales

Ajusta `contentBlocks` (planes, contacto, footer), `sectionMeta` (títulos y subtítulos de bloque) y `heroCarousel` para el hero.

## 4) Agrupar en la galería lateral

Edita `galleryGroups` para incluir el nuevo `id` en el grupo que corresponda.
