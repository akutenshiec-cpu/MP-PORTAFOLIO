# MP Portafolio — contexto y pendientes

Última actualización: 13 de agosto de 2026  
Proyecto: `MP-PORTAFOLIO`  
Sitio principal: `https://mpdesigns.xyz/`

## Objetivo vigente

Mantener un portafolio editorial y tecnológico consistente entre `index.html`, `index2.html` y `galerial.html`, con navegación animada por secciones, galerías coherentes, escala visual estable, buen rendimiento y medición publicitaria basada en consentimiento.

## Estado actual

### Navegación y escala

- Se conserva la animación direccional de entrada y salida de secciones en escritorio.
- Los botones de sección están integrados en el header.
- Se retiraron los algoritmos de autoajuste que reducían las secciones hasta 58–62% según la altura de pantalla.
- `index`, `index2` y la galería trabajan a escala CSS `1` / 100%.
- Cuando una sección excede la altura disponible debe desplazarse internamente, no encogerse.
- El zoom de las galerías se restablece al encuadre normal al abrir, cerrar, cambiar de imagen, redimensionar o volver desde el historial.

### Hero

- Se restauró la composición editorial en dos mitades.
- El lado izquierdo contiene retrato, círculo dorado, círculo lineal, retícula de puntos y arco.
- Existe una interacción de profundidad vinculada al mouse en `script.js` (`initHeroPointerComposition`).
- La implementación actual escucha `mousemove` desde `window` y utiliza variables CSS independientes por capa.
- Pendiente de comprobación visual en el navegador publicado: confirmar que el movimiento sea perceptible y no exista una versión anterior en caché.

### Galerías y contenido

- `data/portfolio-data.js` es la fuente compartida por `index` y `galerial.html`.
- Dirección de arte Victoria incluye afiche, adaptación móvil y boleto horizontal con talón, perforación, folio y QR.
- Narrativa documental se amplió como revista Escanzel:
  - apertura editorial;
  - índice y referencias;
  - páginas originales de Saraguro.
- Arquitectura de información conserva un mockup editorial y las páginas reales `Manual1–7`.
- Merchandising contiene objetos fabricables mediante impresión 3D y aplicaciones de marcas reales.
- PROTOTYP3D utiliza un mockup alineado con su símbolo y paleta.
- Evitar añadir variantes reiterativas: una imagen nueva debe cumplir una función distinta o reemplazar una composición débil.

### Sistemas a medida e ITERA QMS

- La ruta **Sistemas a medida** comunica la capacidad de analizar procesos reales y convertirlos en software operativo; no debe reducirse a una lista genérica de tecnologías.
- **ITERA QMS** es el caso principal que demuestra esa capacidad. Su repositorio de referencia está en `C:\Users\Usuario iTC\Documents\Desarrollo Sistemas\IteraQMS - MUDA A VENTANAS INTERFAZ`.
- ITERA QMS es una plataforma multiempresa de gestión de calidad, producción y trazabilidad para fabricantes de cosmética y cuidado personal bajo exigencias sanitarias.
- Su núcleo conecta proveedor, recepción, materia prima, fórmula, producción, lote terminado, liberación técnica, venta y despacho.
- Deben respetarse como conceptos centrales: Representante Técnico, estados sanitarios y bloqueos, trazabilidad insumo→cliente, inventario FIFO/FEFO, evidencia documental, auditoría y privacidad por planta.
- Ventas, tienda, portal mayorista, inventario inteligente y sincronización entre equipos son ampliaciones integradas; no deben presentarse como si ITERA fuera un ERP contable o de nómina.
- En el portafolio, las capturas reales deben acompañar la función que muestran: `itera_dashboard.png` para indicadores/alertas, `itera_trazabilidad.png` para calidad del lote y `itera_ventas_crm.png` para ventas/despacho.

### Rendimiento

- La auditoría local detectó aproximadamente 101 MB de PNG en el repositorio.
- Catorce mockups activos se convirtieron a WebP sin borrar los originales.
- Esos recursos pasaron de aproximadamente 32 MB a 2,22 MB.
- La primera imagen de una galería carga con prioridad alta.
- Las siguientes utilizan `loading="lazy"`, prioridad baja y decodificación asíncrona.
- El loader de galería se oculta cuando termina de cargar la imagen inicialmente visible.
- Las 70 referencias de imágenes existentes fueron verificadas después de la optimización.

### Meta Ads y Google Ads

Archivos instalados:

- `ads-config.js`: configuración central de identificadores.
- `ads-tracking.js`: consentimiento, carga de etiquetas y eventos.

Comportamiento implementado:

- Las etiquetas no cargan antes de que el visitante acepte la medición.
- La preferencia se guarda en `localStorage` bajo `mp_ads_consent_v1`.
- Google Ads registra `generate_lead` y puede enviar una conversión específica.
- Meta Pixel registra `PageView` y `Contact`.
- Los clics en WhatsApp, botones de consulta y enlaces de correo se detectan automáticamente.
- Se genera un identificador único por lead para evitar duplicados y preparar una futura Conversions API.

## Pendientes prioritarios

### 1. Activar las cuentas publicitarias

Obtener de las cuentas reales y completar en `ads-config.js`:

```js
googleAdsId: "AW-...",
googleLeadLabel: "...",
metaPixelId: "..."
```

No inventar ni reutilizar IDs de otro dominio.

Después de añadirlos:

1. Publicar el sitio.
2. Aceptar medición en el banner.
3. Verificar Google con Tag Assistant.
4. Verificar Meta desde Administrador de eventos → Probar eventos.
5. Hacer un clic real de prueba en WhatsApp y correo.
6. Confirmar que cada acción produzca una sola conversión.
7. Revisar el estado de Google Ads después de hasta 48 horas.

### 2. Privacidad y cumplimiento

- Añadir una página o sección visible de política de privacidad.
- Incluir un enlace permanente “Preferencias de privacidad” con `data-privacy-settings` en el footer.
- Definir responsable del tratamiento, finalidad, duración y mecanismos de revocación.
- Evaluar una CMP certificada si las campañas se orientarán al EEE/Reino Unido.
- No activar coincidencia avanzada o datos personales hasta revisar su base legal.

### 3. Validación visual multidispositivo

Comprobar al menos estas resoluciones:

- 1920 × 1080
- 1536 × 864
- 1366 × 768
- 1280 × 720
- 1024 × 768
- 390 × 844
- 360 × 800

Validar:

- escala 100% consistente;
- scroll interno en secciones altas;
- hero sin recortes involuntarios;
- interacción del mouse en las capas izquierdas;
- cards sin imágenes deformadas;
- galería sin heredar zoom o desplazamiento;
- retorno desde galería sin expansión del layout.

### 4. Auditoría de rendimiento publicada

- Ejecutar Lighthouse sobre el dominio publicado en móvil y escritorio.
- Registrar LCP, INP, CLS, TTFB y peso transferido.
- Confirmar encabezados de caché para WebP, CSS, JS y fuentes.
- Considerar conversión adicional de PNG activos si siguen apareciendo entre los recursos más costosos.
- No eliminar los PNG originales hasta comprobar que ninguna ruta externa los utiliza.

### 5. Limpieza controlada del repositorio

El árbol de trabajo contiene archivos modificados, imágenes nuevas y eliminaciones anteriores. Antes de limpiar o confirmar cambios:

- revisar `git status`;
- verificar que las eliminaciones de imágenes originales sean intencionales;
- no borrar variantes todavía referenciadas desde páginas de proyectos;
- separar, si se desea, cambios funcionales, optimización de imágenes y contenido visual en commits distintos.

## Archivos clave

- `index.html`: portada y estructura principal.
- `style.css`: sistema visual, hero, secciones, responsive y consentimiento.
- `script.js`: cards, navegación, galerías internas, animación de secciones y hero interactivo.
- `index2.html`: página de servicios con carrusel de secciones.
- `galerial.html`: visor independiente de proyectos.
- `data/portfolio-data.js`: contenido y rutas compartidas.
- `ads-config.js`: IDs publicitarios pendientes.
- `ads-tracking.js`: consentimiento y eventos.

## Criterios para futuros cambios

- No volver a introducir autozoom por altura o resolución.
- No usar `zoom` ni escalar el contenido activo para hacerlo caber.
- Mantener las imágenes con `object-fit: contain` en visores y `cover` solo cuando la card lo requiera.
- Las animaciones no deben alterar el tamaño final de las secciones.
- Reemplazar composiciones débiles en sus mismas rutas cuando sea posible, evitando galerías reiterativas.
- Conservar originales de alta resolución y servir versiones WebP optimizadas en el front.
- No activar plataformas publicitarias sin consentimiento e identificadores reales.
