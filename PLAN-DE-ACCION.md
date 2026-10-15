# Plan de acción — especialización MP Dev Studio

Última actualización: 15 de octubre de 2026  
Sitio: https://mpdesigns.xyz/

## Posicionamiento

**Promesa:** Diseño y software para marcas que fabrican bajo norma: de la etiqueta al lote, del catálogo al despacho.

**Núcleo (70%):** ITERA QMS/ERP · packaging técnico · web comercial (landing / catálogo WhatsApp)  
**Soporte (20%):** brandbook · web premium · SaaS solo si es vertical  
**Craft (10%):** ciencia, editorial, 3D, F&B — prueba de precisión, no menú principal

---

## Hecho en esta iteración

1. Home reordenado: **Sistemas → Web → Marca → Soluciones → Contacto**.
2. Secciones **Narrativa** y **Ciencia** ocultas (`hiddenSections` + `enabled: false`).
3. Cards SaaS y F&B **fuera del home** (siguen en catálogo como casos extendidos).
4. **Galería HD** (`galerial.html`) retirada de nav, FAB y enlaces de cards.
5. Hero, footer, taglines y copy alineados al vertical regulado.
6. Catálogo (`index2`): rutas priorizan Sistemas → Web → Marca; SaaS/F&B etiquetados como extendidos.
7. Sitemap sin `galerial.html`; `robots.txt` Disallow + `noindex` en la página.
8. Limpieza: scripts `patch*`/`fix_*` borrados del disco; `styles.css` huérfano fuera del tracking.

---

## Próximos 7 días (prioridad alta)

| # | Acción | Criterio de listo |
|---|--------|-------------------|
| 1 | Publicar este commit y verificar caché en producción | Hero y nav sin “Galería”; solo 6 secciones en ruleta |
| 2 | Revisar cards de branding: priorizar Curativa + etiquetas normativas | Primer viewport de Marca cuenta la historia planta→envase |
| 3 | Convertir PNG HQ restantes a WebP (Manual*, etiqueta*, gallery-* sin pareja) | Peso de `images/` baja de forma medible |
| 4 | Añadir 1 caso “loop completo” (marca + packaging + sistema o web) | Una card o bloque que cierre el posicionamiento |

## 30 días (prioridad media)

| # | Acción | Criterio de listo |
|---|--------|-------------------|
| 5 | Página o sección “Para quién” (cosmética / alimentos regulados) | Visitante identifica si es su cliente en &lt;10 s |
| 6 | Oferta de diagnóstico empaquetada (WhatsApp + 3 preguntas) | CTA único en hero y catálogo |
| 7 | Decidir destino de `galerial.html`: archivo privado, 301 noindex, o borrar del deploy | No aparece en SEO ni navegación |
| 8 | Unificar capturas reales de ITERA en home (dashboard / lote / despacho) | Sin mockups genéricos en Sistemas |

## Backlog (cuando haya capacidad)

- Mover ciencia / promo a `/archivo` solo si hace falta mostrar craft.
- Verticalizar SaaS: copy “tienda para líneas cosméticas / food”, no tienda genérica.
- F&B: mantener como producto aparte con landing propia, no en el mensaje principal.
- Medir consultas WhatsApp por ruta (Sistemas / Web / Marca) 4 semanas.

---

## Qué no hacer

- No volver a poner Galería HD en el menú principal.
- No añadir más líneas de oferta (IA genérica, apps sueltas, merch) al hero.
- No publicar PNG de 2–6 MB en cards del home.
- No tratar F&B y QMS regulado como el mismo producto.

---

## Checklist de aceptación del sitio

- [ ] Home: Sistemas, Web, Marca, Soluciones, Contacto (sin promo/ciencia visibles)
- [ ] Sin enlace a `galerial.html` en UI pública
- [ ] Hero habla de norma / lote / packaging / web comercial
- [ ] Catálogo abre con 3 rutas; SaaS y F&B como extendidos
- [ ] Repo sin scripts `patch*` / backups en el working tree público
