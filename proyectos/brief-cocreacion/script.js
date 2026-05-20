/* Javascript logic: Multidisciplinary Brand Brief Co-Creation Engine */
/* Designed by Marco Pérez · MP Designs */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 0. CREATIVE PRESET DATABASE
    // ==========================================
    const brandingPresets = {
        perfumeria: {
            title: "Perfumería & Cosmética",
            defaultName: "Ferjho Aromas Lab",
            defaultSlogan: "Alquimia & Cosmética Apotecaria",
            sidebarTitle: "FÓRMULA EN DESTILACIÓN",
            sidebarIcon: "fa-flask",
            sidebarState: "Destilando esencias botánicas...",
            products: [
                { value: "Perfumería Fina", icon: "fa-spray-can-sparkles", title: "Perfumería Fina", desc: "Extractos de perfume de autor, fragancias exclusivas de larga duración." },
                { value: "Aceites Esenciales", icon: "fa-droplet", title: "Aceites & Aromaterapia", desc: "Aceites puros, elíxires para masajes y roll-on terapéuticos." },
                { value: "Velas & Difusores", icon: "fa-fire", title: "Velas & Difusores", desc: "Velas de cera de soya natural y difusores de varillas premium." },
                { value: "Cosmética Científica", icon: "fa-mortar-pestle", title: "Cosmética Científica", desc: "Cuidado de la piel apotecario, tónicos, sueros y aceites faciales." },
                { value: "Jabonería de Autor", icon: "fa-soap", title: "Jabonería de Autor", desc: "Jabones botánicos saponificados en frío con aceites esenciales." },
                { value: "Línea Spa / Hoteles", icon: "fa-hotel", title: "Línea Spa & Colecciones", desc: "Líneas exclusivas para hotelería boutique o centros de bienestar." }
            ],
            values: [
                { value: "Pureza Orgánica", color: "--sage-primary", text: "Pureza / Orgánico" },
                { value: "Lujo de Nicho", color: "--gold-primary", text: "Lujo / Exclusividad" },
                { value: "Rigor Científico", color: "--slate-primary", text: "Ciencia / Apotecario" },
                { value: "Artesanía Cálida", color: "--amber-warm", text: "Hecho a Mano / Calidez" },
                { value: "Alquimia Mística", color: "--purple-mystic", text: "Misticismo / Ritual" },
                { value: "Bienestar Holístico", color: "--mint-green", text: "Bienestar / Salud" }
            ],
            targets: [
                { value: "El Buscador de Bienestar", icon: "fa-spa", title: "El Buscador de Bienestar", desc: "Personas que buscan aromaterapia para meditación, calma mental y desconexión." },
                { value: "El Coleccionista de Lujo", icon: "fa-crown", title: "El Coleccionista de Lujo", desc: "Clientes sofisticados que valoran la exclusividad, los frascos numerados y fragancias únicas." },
                { value: "El Consumidor Consciente", icon: "fa-leaf", title: "El Consumidor Consciente", desc: "Usuarios de cosmética limpia, libre de químicos agresivos y orientados a lo natural." },
                { value: "El Creador de Espacios", icon: "fa-couch", title: "El Creador de Espacios", desc: "Quienes compran velas y difusores para transformar la atmósfera visual y olfativa de su hogar." }
            ],
            personalityLabels: {
                eje1Left: "Clásico / Ancestral", eje1Right: "Vanguardista / Moderno",
                eje2Left: "Alquimia Mística", eje2Right: "Rigor Científico",
                eje3Left: "Artesanal / Calidez", eje3Right: "Lujo / Altísima Gama",
                eje4Left: "Uso Familiar / Diario", eje4Right: "Nicho / Exclusivo"
            },
            tones: [
                { value: "Editorial & Poético", title: "Editorial & Poético", desc: "Evocador, literario, sofisticado. Habla de recuerdos, sensaciones y poesía aromática." },
                { value: "Clínico & Profesional", title: "Clínico & Técnico", desc: "Preciso, informativo, seguro. Explica fórmulas químicas de aceites y rigor de laboratorio." },
                { value: "Cálido & Holístico", title: "Cálido & Espiritual", desc: "Cercano, protector, natural. Habla de sanación, paz interior y amor por el planeta." },
                { value: "Audaz & Sensual", title: "Audaz & Magnético", desc: "Intenso, provocador, nocturno. Enfocado en la seducción olfativa y el magnetismo del aroma." }
            ],
            palettes: [
                { name: "Alquimia Dorada", colors: ["#0B0C10", "#1F2833", "#D4AF37", "#F4F6F9"], tag: "Recomendado", desc: "Lujo, misticismo y perfumería fina de alto valor. Un fondo oscuro sofisticado con destellos oro." },
                { name: "Eucalipto Apotecario", colors: ["#1E2522", "#8A9A86", "#E3DCD2", "#F4F6F9"], tag: "Botánico", desc: "Cosmética botánica y aromaterapia científica. Inspirado en laboratorios herbales e ingredientes naturales." },
                { name: "Ámbar & Tierra", colors: ["#3E2723", "#FFBF00", "#FFFDD0", "#A0522D"], tag: "Cálido", desc: "Calidez orgánica, velas artesanales y resinas aromáticas. Transmite conexión con el suelo y el fuego." },
                { name: "Noche de Lavanda", colors: ["#2C3539", "#967BB6", "#E6E6FA", "#C0C0C0"], tag: "Tranquilo", desc: "Relajación profunda, rituales de sueño y aceites calmantes. Un tono espiritual y sanador." }
            ],
            logoStyles: [
                { value: "Tipográfico Minimalista", initial: "F A L", text: "Tipográfico Puro", desc: "Diseño sin isotipo, basado puramente en una tipografía exclusiva muy bien espaciada y equilibrada." },
                { value: "Apotecario Vintage", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50,20 L50,35 M40,35 L60,35 M35,35 L65,75 L35,75 Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>`, text: "Sello Apotecario", desc: "Estructuras circulares, marcas de laboratorio clásico, matraces, tipografías perimetrales y aspecto de botica antigua." },
                { value: "Isotipo Botánico / Orgánico", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M50,15 C50,15 25,45 25,65 C25,75 35,85 50,85 C65,85 75,75 75,65 C75,45 50,15 50,15 Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M50,40 Q40,60 50,75 M50,55 Q60,65 50,75" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`, text: "Isotipo Botánico", desc: "Una gota fusionada con hojas botánicas. Representa la destilación de plantas y la naturaleza concentrada." },
                { value: "Monograma / Escudo de Lacre", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M50,15 L80,30 L80,60 L50,85 L20,60 L20,30 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="58" font-family="'Cinzel', serif" font-size="28" font-weight="bold" text-anchor="middle" fill="currentColor">F</text></svg>`, text: "Monograma / Sello de Lacre", desc: "Iniciales estilizadas o un escudo de armas tradicional. Máximo refinamiento, ideal para lacrar cajas de empaque." }
            ],
            visualLab: {
                title: "Laboratorio visual de perfumeria",
                badge: "Perfumeria",
                intro: "Aterriza la identidad en un frasco de referencia: firma protagonista, sistema de etiqueta y acabado material.",
                signatureTemplates: [
                    { value: "Cartucho Editorial", badge: "Letra en recuadro", frameClass: "frame-cartouche", preview: "FA", title: "Cartucho editorial", desc: "Iniciales centradas en un recuadro limpio para marcas de nicho con aire sobrio y premium." },
                    { value: "Sello Oval", badge: "Clasico", frameClass: "frame-oval", preview: "V", title: "Sello ovalado", desc: "Una letra central con marco oval para perfume de autor, elegante y tradicional." },
                    { value: "Archivo Botanico", badge: "Botanico", frameClass: "frame-botanical", preview: "AR", title: "Archivo botanico", desc: "Marco suave con memoria herbal. Funciona bien para skincare, aceites y cuidado natural." },
                    { value: "Lacre Circular", badge: "Insignia", frameClass: "frame-seal", preview: "L", title: "Lacre circular", desc: "Una marca compacta tipo sello, ideal para colecciones numeradas o lineas rituales." }
                ],
                bottleTemplates: [
                    { value: "Frasco Boticario Contemporaneo", badge: "Mas versatil", shapeClass: "bottle-shape-rect", frameClass: "frame-cartouche", title: "Frasco boticario contemporaneo", desc: "Base amplia, lectura clara y etiqueta protagonista. Muy util para perfumeria fina y linea spa." },
                    { value: "Bloque de Vidrio Esculpido", badge: "Lujo", shapeClass: "bottle-shape-square", frameClass: "frame-oval", title: "Bloque de vidrio esculpido", desc: "Volumen compacto y pesado, orientado a una percepcion mas exclusiva y de coleccion." },
                    { value: "Ampolla Ritual Vertical", badge: "Ritual", shapeClass: "bottle-shape-tall", frameClass: "frame-stack", title: "Ampolla ritual vertical", desc: "Silueta alta y estilizada para aceites, roll-on o extractos de uso preciso." },
                    { value: "Frasco Redondo de Tocador", badge: "Sensorial", shapeClass: "bottle-shape-round", frameClass: "frame-botanical", title: "Frasco redondo de tocador", desc: "Mas suave, femenino y evocador. Funciona bien para lineas aromaticas y velas premium." }
                ],
                finishes: [
                    { value: "Tapa dorada satinada", title: "Tapa dorada satinada", desc: "Percepcion de lujo clasico, brillo controlado y lectura premium." },
                    { value: "Negro mate mineral", title: "Negro mate mineral", desc: "Direccion mas contemporanea, sobria y un poco mas unisex." },
                    { value: "Marfil porcelana", title: "Marfil porcelana", desc: "Acabado delicado y limpio para cosmetica refinada y botanica." },
                    { value: "Verde herbario", title: "Verde herbario", desc: "Acento natural con memoria de laboratorio vegetal." }
                ],
                defaultSignature: "FA",
                disclaimer: "Esto no es la marca final en si. Es una referencia visual y estrategica para alinear gustos, lenguaje, acabados y direccion creativa antes del diseno formal."
            },
            regulatory: [
                { id: "reg-arcsa", value: "Notificación Sanitaria ARCSA", title: "Notificación Sanitaria (ARCSA)", desc: "Estándar obligatorio en el Ecuador para la comercialización segura de cosméticos y perfumes.", checked: true },
                { id: "reg-trace", value: "Trazabilidad FEFO/FIFO de Lotes", title: "Trazabilidad de Lotes FEFO/FIFO", desc: "Control de materias primas y caducidad para garantizar absoluta estabilidad.", checked: true },
                { id: "reg-warnings", value: "Advertencia de Alérgenos", title: "Etiquetado de Alérgenos", desc: "Declaración obligatoria de componentes olfativos botánicos naturales sensibles.", checked: false },
                { id: "reg-amber", value: "Vidrio Ámbar Grado USP", title: "Vidrio Ámbar de Grado USP", desc: "Uso de envases inactivos a radiaciones UV para aceites esenciales puros.", checked: true },
                { id: "reg-cruelty", value: "Cruelty Free & Vegano", title: "Certificación Vegana / Cruelty-Free", desc: "Insumos libres de pruebas en animales y sin grasas animales.", checked: false }
            ],
            channels: [
                { value: "E-commerce Propio", icon: "fa-globe", text: "E-commerce Propio", checked: true },
                { value: "WhatsApp & Instagram", icon: "fa-whatsapp", text: "WhatsApp & Redes", checked: true },
                { value: "Showrooms de Autor", icon: "fa-store", text: "Showrooms / Nicho", checked: false },
                { value: "Hoteles & Spas Boutique", icon: "fa-spa", text: "Spas & Hoteles", checked: false }
            ],
            fallbackStory: "Ferjho Aromas Lab surge como un puente entre la sabiduría tradicional del boticario y las técnicas más refinadas de la perfumería de nicho contemporánea. Buscamos destilar la naturaleza para transformarla en rituales de absoluto bienestar cotidiano."
        },
        gastronomia: {
            title: "Gastronomía & Cocina",
            defaultName: "Origen Cocina Taller",
            defaultSlogan: "Gastronomía Contemporánea & Ingredientes Locales",
            sidebarTitle: "RECETA EN PREPARACIÓN",
            sidebarIcon: "fa-utensils",
            sidebarState: "Atemperando sabores e ingredientes...",
            products: [
                { value: "Catering de Autor", icon: "fa-champagne-glasses", title: "Catering de Autor", desc: "Experiencias culinarias personalizadas para eventos privados de alto nivel." },
                { value: "Restauración Casual-Fine", icon: "fa-utensils", title: "Alta Cocina Taller", desc: "Propuestas de menú de pasos con enfoque conceptual y productos locales de origen." },
                { value: "Productos Gourmet Envasados", icon: "fa-jar", title: "Delicatessen & Conservas", desc: "Salsas de firma, aceites infusionados, mermeladas artesanales y sales gourmet." },
                { value: "Panadería & Masa Madre", icon: "fa-bread-slice", title: "Panadería de Autor", desc: "Procesos lentos de fermentación natural con granos andinos y técnicas tradicionales." },
                { value: "Pastelería & Chocolatería Fina", icon: "fa-cookie", title: "Chocolatería de Origen", desc: "Bombones de autor elaborados con cacao de aroma ecuatoriano (Cacao Fino de Aroma)." },
                { value: "Bebidas & Coctelería de Firma", icon: "fa-wine-glass", title: "Mixología & Elíxires", desc: "Bebidas fermentadas artesanales, licores macerados y coctelería botánica conceptual." }
            ],
            values: [
                { value: "Herencia Local", color: "--amber-warm", text: "Herencia / Origen" },
                { value: "Técnica Rigurosa", color: "--slate-primary", text: "Técnica / Vanguardia" },
                { value: "Estética Visual", color: "--gold-primary", text: "Estética / Emplatado" },
                { value: "Ingrediente Puro", color: "--sage-primary", text: "Puro / Orgánico" },
                { value: "Fuego & Alma", color: "--purple-mystic", text: "Fuego / Pasión" },
                { value: "Sustentabilidad", color: "--mint-green", text: "Sostenible / Km 0" }
            ],
            targets: [
                { value: "El Foodie Sofisticado", icon: "fa-bowl-food", title: "El Foodie Sofisticado", desc: "Comensales que viajan y buscan descubrir historias detrás de cada plato y maridajes exclusivos." },
                { value: "El Anfitrión de Lujo", icon: "fa-crown", title: "El Anfitrión de Lujo", desc: "Clientes que buscan deslumbrar a sus invitados con cenas temáticas privadas." },
                { value: "El Consumidor Orgánico", icon: "fa-seedling", title: "El Consumidor Consciente", desc: "Defensores de la alimentación limpia, el comercio justo Km 0 y productos agroecológicos." },
                { value: "El Buscador de Detalles Gourmet", icon: "fa-gift", title: "Buscador de Detalles Gourmet", desc: "Personas que eligen packs y conservas exclusivas para regalar o coleccionar experiencias gastronómicas." }
            ],
            personalityLabels: {
                eje1Left: "Cocina Tradicional / Fuego", eje1Right: "Cocina Molecular / Vanguardia",
                eje2Left: "Sabores Rústicos / Ancestral", eje2Right: "Técnica Quirúrgica / Minimalista",
                eje3Left: "Artesanal / Acogedor", eje3Right: "Lujo Alta Mesa / Premium",
                eje4Left: "Consumo Masivo / Diario", eje4Right: "Experiencia Exclusiva / Reserva"
            },
            tones: [
                { value: "Evocador & Sensorial", title: "Evocador & Sensorial", desc: "Descriptivo, poético, apetitoso. Se centra en las texturas, aromas, fuego y memoria gustativa." },
                { value: "Técnico & Alta Escuela", title: "Técnico & Preciso", desc: "Rígido, informativo, profesional. Explica orígenes de insumos, temperaturas y maduración." },
                { value: "Narrativo & de Origen", title: "Storytelling / Km 0", desc: "Cercano, humilde, cultural. Cuenta la historia de los agricultores, la tierra y la tradición andina." },
                { value: "Audaz & Disruptivo", title: "Moderno & Directo", desc: "Enérgico, jovial, provocativo. Apunta al contraste de sabores arriesgados y experiencias lúdicas." }
            ],
            palettes: [
                { name: "Cacao & Tierra Salada", colors: ["#23160C", "#5C4033", "#C19A6B", "#F5F5DC"], tag: "Recomendado", desc: "Tonos chocolate oscuro, beige crema y madera. Inspira profundidad culinaria, artesanía y fuego lento." },
                { name: "Verde Albahaca & Oliva", colors: ["#142E1F", "#4D7C5B", "#99B898", "#FECEA8"], tag: "Fresco", desc: "Inspirado en la frescura del huerto, hierbas finas y aceites vírgenes. Perfecto para gastronomía Km 0." },
                { name: "Terracota Cobre & Fuego", colors: ["#3D1E16", "#C86446", "#E8A382", "#F9F6F0"], tag: "Cálido", desc: "Inspirado en hornos de leña, ollas de barro y especias andinas. Transmite alma hogareña y sabor rústico." },
                { name: "Bivalvo & Carbón", colors: ["#1A1A1D", "#6F7C85", "#C2CAD0", "#FFFFFF"], tag: "Contraste", desc: "Negro carbón y grises marinos. Un estilo minimalista de alta cocina urbana, sofisticado y pulcro." }
            ],
            logoStyles: [
                { value: "Tipográfico Minimalista", initial: "O R I G E N", text: "Tipográfico Puro", desc: "Diseño elegante y sobrio basado puramente en tipografías de alto impacto visual." },
                { value: "Cresta de Cocina Taller", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40,35 L40,65 M60,35 L60,65 M50,30 L50,70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M35,45 Q50,30 65,45 Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>`, text: "Escudo Culinario", desc: "Estructuras clásicas, monogramas circulares, tenedor/cuchillo cruzados estilizados o sellos de autor tradicionales." },
                { value: "Isotipo Orgánico de Tierra", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M50,15 C50,15 30,35 30,55 C30,70 40,80 50,80 C60,80 70,70 70,55 C70,35 50,15 50,15 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="52" r="8" fill="currentColor"/></svg>`, text: "Semilla / Origen", desc: "Líneas fluidas inspiradas en hojas, raíces, fuego o trigo, representando el origen natural de los alimentos." },
                { value: "Sello de Firma del Chef", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M25,50 Q50,20 75,50 T25,50 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="58" font-family="'Sacramento', cursive" font-size="28" text-anchor="middle" fill="currentColor">O</text></svg>`, text: "Monograma / Firma", desc: "Un trazo fluido que emula la firma autógrafa del creador de la cocina. Alta gama y sello de autor." }
            ],
            regulatory: [
                { id: "reg-arcsa-alimentos", value: "Notificación Sanitaria ARCSA Alimentos", title: "Notificación Sanitaria (ARCSA Alimentos)", desc: "Obligatorio en Ecuador para la venta de alimentos y bebidas procesados envasados.", checked: true },
                { id: "reg-bpm", value: "Buenas Prácticas de Manufactura (BPM)", title: "Gobernanza de BPM / HACCP", desc: "Protocolos estrictos de higiene, temperaturas y prevención de contaminación cruzada.", checked: true },
                { id: "reg-packaging", value: "Empaque Grado Alimentario INEN", title: "Empaque Apto Grado Alimenticio INEN", desc: "Cumplimiento de la norma técnica para recipientes libres de polímeros tóxicos.", checked: true },
                { id: "reg-semaro", value: "Semáforo Nutricional Ecuador", title: "Rotulado de Semáforo Nutricional", desc: "Etiquetado reglamentario indicando grasas, sal y azúcar en perchas comerciales.", checked: false },
                { id: "reg-organic", value: "Certificación Orgánica Local", title: "Certificado Orgánico / Producción Limpia", desc: "Aval de agricultura libre de pesticidas químicos e insumos transgénicos.", checked: false }
            ],
            channels: [
                { value: "Restaurante / Taller Físico", icon: "fa-store", text: "Mesa / Local Físico", checked: true },
                { value: "WhatsApp Directo / Delivery", icon: "fa-whatsapp", text: "WhatsApp & Takeout", checked: true },
                { value: "Suscripción Culinaria Semanal", icon: "fa-box", text: "Club de Suscripción", checked: false },
                { value: "Eventos Especiales / Catering", icon: "fa-champagne-glasses", text: "Eventos Privados", checked: false }
            ],
            fallbackStory: "Origen Cocina Taller nace de la pasión por rescatar la biodiversidad andina y costera, transformándola mediante técnicas contemporáneas en experiencias sensoriales únicas. Redefinimos el acto de compartir la mesa.",
            visualLab: {
                title: "Laboratorio Visual de Gastronomía",
                badge: "Gastronomía",
                intro: "Aterriza la identidad visual en soportes culinarios: firma de autor, cartucho de producto y acabados táctiles.",
                signatureTemplates: [
                    { value: "Cartucho Culinario", badge: "Recuadro de Autor", frameClass: "frame-cartouche", preview: "OC", title: "Cartucho Culinario", desc: "Iniciales enmarcadas con líneas limpias, ideal para menús contemporáneos y conservas selectas." },
                    { value: "Sello de Autor", badge: "Insignia de Mesa", frameClass: "frame-seal", preview: "G", title: "Sello de Autor", desc: "Sello redondo de prestigio para lacrar correspondencia de menús de pasos o cera de botellas." },
                    { value: "Placa Ovalada", badge: "Clásico de Cocina", frameClass: "frame-oval", preview: "T", title: "Placa Ovalada", desc: "Marco ovalado para marcas de comida fina, evocando tradición, maestría y solidez." },
                    { value: "Marco de Tierra", badge: "Orgánico", frameClass: "frame-botanical", preview: "OT", title: "Marco de Tierra", desc: "Detalles orgánicos y sutiles, perfecto para panaderías de masa madre y agricultura Km 0." }
                ],
                bottleTemplates: [
                    { value: "Soporte Culinario Estándar", badge: "Estándar", shapeClass: "bottle-shape-rect", frameClass: "frame-cartouche", title: "Soporte Culinario", desc: "Previsualización base para elementos de marca." }
                ],
                finishes: [
                    { value: "Terracota Cobre Satinado", title: "Terracota Cobre Satinado", desc: "Tonos tierra con brillo metálico sutil, evocando ollas de barro y calor de brasa." },
                    { value: "Negro Carbón Mate", title: "Negro Carbón Mate", desc: "Acabado mineral y sobrio, alineado con alta cocina urbana y emplatados vanguardistas." },
                    { value: "Latón Dorado Antiguo", title: "Latón Dorado Antiguo", desc: "Lujo clásico y atemporal, ideal para vajillas personalizadas y experiencias exclusivas." },
                    { value: "Verde Oliva Orgánico", title: "Verde Oliva Orgánico", desc: "Tono natural e íntimo, perfecto para propuestas centradas en huertos e ingredientes Km 0." }
                ],
                defaultSignature: "OC",
                disclaimer: "Esto no es la marca final en sí. Es una referencia visual y estratégica culinaria para alinear gustos, texturas y dirección creativa antes del diseño formal."
            }
        },
        abogados: {
            title: "Servicios Legales & Ley",
            defaultName: "Valverde & Asociados",
            defaultSlogan: "Estrategia Legal, Rigor Jurídico & Protección Patrimonial",
            sidebarTitle: "EXPEDIENTE EN REDACCIÓN",
            sidebarIcon: "fa-scale-balanced",
            sidebarState: "Analizando jurisprudencia y ley...",
            products: [
                { value: "Derecho Corporativo & Fusiones", icon: "fa-building", title: "Derecho Corporativo", desc: "Constitución de empresas, contratos comerciales internacionales y reestructuraciones corporativas." },
                { value: "Protección de Datos & Digital", icon: "fa-shield-halved", title: "Derecho Digital & Datos", desc: "Auditoría en protección de datos, ciberseguridad corporativa y cumplimiento de la LOPDP." },
                { value: "Litigio & Arbitraje Complejo", icon: "fa-gavel", title: "Litigio & Arbitraje", desc: "Representación judicial, defensa estratégica y resolución de controversias civiles y comerciales." },
                { value: "Propiedad Intelectual & Patentes", icon: "fa-copyright", title: "Marcas & Propiedad Int.", desc: "Registro internacional de marcas, patentes industriales, derechos de autor y secretos comerciales." },
                { value: "Compliance & Prevención de Riesgos", icon: "fa-briefcase", title: "Legal Compliance", desc: "Diseño e implementación de sistemas de prevención de delitos y códigos de ética corporativa." },
                { value: "Asesoría Tributaria & Fiscal", icon: "fa-calculator", title: "Planeación Fiscal", desc: "Optimización fiscal lícita de activos, litigio tributario nacional y planificación de patrimonios." }
            ],
            values: [
                { value: "Ética Inquebrantable", color: "--slate-primary", text: "Ética / Integridad" },
                { value: "Rigor Técnico", color: "--gold-primary", text: "Rigor / Precisión" },
                { value: "Discreción Absoluta", color: "--sage-primary", text: "Discreción / Privado" },
                { value: "Lealtad al Cliente", color: "--amber-warm", text: "Lealtad / Defensa" },
                { value: "Vanguardia Legal", color: "--purple-mystic", text: "Innovación / Futuro" },
                { value: "Justicia Social", color: "--mint-green", text: "Justicia / Compromiso" }
            ],
            targets: [
                { value: "El Director General (CEO)", icon: "fa-building-columns", title: "Corporaciones & CEO", desc: "Empresas medianas y grandes que buscan blindaje normativo y mitigación de riesgos legales." },
                { value: "El Inversionista de Alto Valor", icon: "fa-crown", title: "Family Offices & Inversores", desc: "Clientes de alto patrimonio que exigen discreción para proteger legados familiares." },
                { value: "La Startup de Base Tecnológica", icon: "fa-rocket", title: "Startups & Creadores", desc: "Negocios digitales que escalan rápido y requieren protección en datos, software y marcas." },
                { value: "El Particular para Casos Complejos", icon: "fa-user-shield", title: "Defensa Civil Particular", desc: "Individuos que enfrentan litigios de alta complejidad familiar, patrimonial o contractual." }
            ],
            personalityLabels: {
                eje1Left: "Derecho Clásico / Litigio", eje1Right: "Derecho Digital / Innovación",
                eje2Left: "Estructuras Rígidas / Ley", eje2Right: "Negociación / Acuerdos",
                eje3Left: "Firma Tradicional / Histórica", eje3Right: "Firma Boutique / Exclusiva",
                eje4Left: "Casos Masivos / Generalistas", eje4Right: "Casos Alta Complejidad / Especialistas"
            },
            tones: [
                { value: "Formal & Académico", title: "Formal & Académico", desc: "Impecable, objetivo, riguroso. Utiliza términos legales técnicos con absoluta precisión gramatical." },
                { value: "Persuasivo & Firme", title: "Persuasivo & Firme", desc: "Argumentativo, contundente, estratégico. Transmite seguridad, defensa férrea y liderazgo judicial." },
                { value: "Cercano & Asesor", title: "Cercano & Explicativo", desc: "Comprensivo, claro, didáctico. Traduce la complejidad legal a un lenguaje accesible y protector." },
                { value: "Corporativo & Ejecutivo", title: "Ejecutivo / Directo", desc: "Breve, pragmático, enfocado a negocios. Ideal para juntas de directorio y tomas de decisión rápidas." }
            ],
            palettes: [
                { name: "Azul de Almirantazgo & Oro", colors: ["#0C1324", "#1E293B", "#D4AF37", "#FFFFFF"], tag: "Recomendado", desc: "Azul marino profundo, gris oxford y acentos dorados. Inspira autoridad, lealtad, seriedad y elegancia formal." },
                { name: "Pizarra & Plata Pulida", colors: ["#1B1F24", "#374151", "#E5E7EB", "#FFFFFF"], tag: "Rigor", desc: "Escala de grises técnicos con blanco inmaculado. Expresa precisión absoluta, rigor matemático y modernidad corporativa." },
                { name: "Verde Inglés & Pergamino", colors: ["#1B2E24", "#3E5B4B", "#DFD5C6", "#FFFFFF"], tag: "Histórico", desc: "Verde bosque tradicional con tonos lino. Evoca firmas de trayectoria centenaria, historia, honor y sabiduría." },
                { name: "Borgoña Imperial", colors: ["#2C0D11", "#5C1D24", "#D4AF37", "#FAF9F6"], tag: "Prestigio", desc: "Tono vino tinto oscuro y oro. Transmite prestigio académico, fuerza en litigio, poder y distinción tradicional." }
            ],
            logoStyles: [
                { value: "Tipográfico Minimalista", initial: "V A L V E R D E", text: "Tipográfico Puro", desc: "Diseño clásico tipográfico (con o sin serifas romanas), muy limpio y de alto respeto visual." },
                { value: "Monograma Heráldico Jurídico", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M50,15 L80,25 L80,55 Q80,75 50,85 Q20,75 20,55 L20,25 Z" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="58" font-family="'Cinzel', serif" font-size="28" font-weight="bold" text-anchor="middle" fill="currentColor">V</text></svg>`, text: "Monograma / Escudo", desc: "Iniciales entrelazadas o un escudo clásico con líneas modernas. Representa linaje legal y prestigio." },
                { value: "Balanza de la Justicia Estilizada", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/><path d="M30,45 L70,45 M50,20 L50,75 M50,45 L30,60 M50,45 L70,60" fill="none" stroke="currentColor" stroke-width="2"/></svg>`, text: "Balanza / Mazo", desc: "Líneas geométricas abstractas basadas en la balanza jurídica o el mazo de sala. El equilibrio y la ley." },
                { value: "Columna de Templo Romano", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M30,20 L70,20 M35,20 L35,75 M65,20 L65,75 M30,75 L70,75 M45,20 L45,75 M55,20 L55,75" fill="none" stroke="currentColor" stroke-width="2"/><path d="M28,15 L72,15 L72,20 L28,20 Z" fill="currentColor"/></svg>`, text: "Columna / Pilares", desc: "Arquitectura clásica representando solidez, fundamentos inamovibles, bases del derecho y protección institucional." }
            ],
            regulatory: [
                { id: "reg-lopd", value: "Protección de Datos LOPD Ecuador", title: "Ley de Protección de Datos (LOPDP)", desc: "Obligatorio en Ecuador para toda empresa que registre bases de datos de usuarios.", checked: true },
                { id: "reg-cpl", value: "Prevención de Lavado de Activos UAFE", title: "Compliance Financiero (UAFE)", desc: "Manuales estrictos de prevención de riesgos y lavado para sujetos obligados.", checked: true },
                { id: "reg-coip", value: "Responsabilidad Penal Jurídica COIP", title: "Mitigación Penal (COIP)", desc: "Modelos de prevención delictiva para blindar de responsabilidad corporativa penal.", checked: false },
                { id: "reg-ethics", value: "Código Deontológico Forense", title: "Código Deontológico Jurídico", desc: "Estándares profesionales éticos ante el foro judicial nacional.", checked: true },
                { id: "reg-contract", value: "Cláusulas de Confidencialidad NDA", title: "Contratos de Confidencialidad (NDA)", desc: "Acuerdos estrictos de no divulgación en todas las fases del servicio legal.", checked: false }
            ],
            channels: [
                { value: "Oficina Central / Consultas", icon: "fa-store", text: "Despacho Físico", checked: true },
                { value: "Consultoría Digital / Zoom", icon: "fa-globe", text: "Videoconsulta Legal", checked: true },
                { value: "WhatsApp Directo / Emergencias", icon: "fa-whatsapp", text: "WhatsApp de Guardia", checked: false },
                { value: "Convenios Corporativos Anuales", icon: "fa-briefcase", text: "Retainer Mensual", checked: false }
            ],
            fallbackStory: "Valverde & Asociados nace con la misión de proporcionar soluciones legales sofisticadas a problemas complejos. Creemos que la abogacía es un arte técnico regido por el rigor, el honor y la defensa intransigente del patrimonio de nuestros clientes.",
            visualLab: {
                title: "Laboratorio Visual Jurídico",
                badge: "Servicios Legales",
                intro: "Aterriza el lenguaje institucional en soportes de prestigio: lacrado de documentos, escudos y acabados premium.",
                signatureTemplates: [
                    { value: "Cartucho de Prestigio", badge: "Recuadro Ejecutivo", frameClass: "frame-cartouche", preview: "VA", title: "Cartucho de Prestigio", desc: "Monograma enmarcado con sobriedad y equilibrio, ideal para cabeceras de cartas y documentos legales." },
                    { value: "Sello de Lacrado Imperial", badge: "Sello Heráldico", frameClass: "frame-seal", preview: "L", title: "Sello de Lacrado", desc: "Insignia redonda que evoca el prestigio de la cera de lacre tradicional para certificar confidencialidad." },
                    { value: "Escudo de Autoridad", badge: "Firma Tradicional", frameClass: "frame-oval", preview: "J", title: "Escudo de Autoridad", desc: "Marco elíptico estilizado, proyectando solidez académica, historia, rigor y máxima confianza." },
                    { value: "Marco de Consistencia", badge: "Minimalista", frameClass: "frame-botanical", preview: "V", title: "Marco de Consistencia", desc: "Líneas rectas y limpias con acentos discretos, ideal para firmas corporativas modernas y ciberderecho." }
                ],
                bottleTemplates: [
                    { value: "Soporte Institucional Estándar", badge: "Estándar", shapeClass: "bottle-shape-rect", frameClass: "frame-cartouche", title: "Soporte Institucional", desc: "Previsualización base para papelería y documentos." }
                ],
                finishes: [
                    { value: "Lacre Rojo Lacré", title: "Lacre Rojo Lacré", desc: "Rojo oscuro y profundo tradicional, evocando autoridad, autenticidad y resguardo ético." },
                    { value: "Oro de Ley Satinado", title: "Oro de Ley Satinado", desc: "Brillo dorado controlado para acentos en papelería y relieves tipográficos de gran distinción." },
                    { value: "Plata Noble Pulida", title: "Plata Noble Pulida", desc: "Gris metálico pulcro, transmitiendo precisión técnica, transparencia y rigor contemporáneo." },
                    { value: "Azul Almirantazgo Mate", title: "Azul Almirantazgo Mate", desc: "Azul marino institucional profundo, proyectando máxima discreción, lealtad y rectitud." }
                ],
                defaultSignature: "VA",
                disclaimer: "Esto no es la marca final en sí. Es una referencia visual y estratégica jurídica para alinear el prestigio, la sobriedad y la dirección institucional antes del diseño formal."
            }
        },
        boutique: {
            title: "Boutique & Moda",
            defaultName: "Linen & Thread Studio",
            defaultSlogan: "Sastrería Lenta, Telas Nobles & Diseño de Autor",
            sidebarTitle: "COLECCIÓN EN DISEÑO",
            sidebarIcon: "fa-shirt",
            sidebarState: "Cortando y ensayando patrones textiles...",
            products: [
                { value: "Prendas Ready-to-Wear", icon: "fa-shirt", title: "Ready-to-Wear de Autor", desc: "Colecciones limitadas de uso diario, con cortes contemporáneos y costuras pulcras." },
                { value: "Sastrería Bespoke / Medida", icon: "fa-scissors", title: "Sastrería a la Medida", desc: "Confección artesanal uno a uno para eventos formales o prendas estructuradas únicas." },
                { value: "Accesorios & Marroquinería", icon: "fa-bag-shopping", title: "Bolsos & Marroquinería", desc: "Accesorios elaborados con cuero natural tratado y herrajes metálicos pulidos." },
                { value: "Textiles del Hogar Premium", icon: "fa-sheet-plastic", title: "Textiles / Ropa de Cama", desc: "Líneas exclusivas de lino y algodón orgánico para transformar el hogar." },
                { value: "Cuidado Textil & Fragancias", icon: "fa-spray-can", title: "Aromas & Cuidado Textil", desc: "Líneas de tónicos de planchado perfumados y jabones de lino botánicos." },
                { value: "Colección Calzado de Autor", icon: "fa-shoe-prints", title: "Calzado de Cuero", desc: "Diseño ergonómico y acabados finos hechos a mano por maestros zapateros." }
            ],
            values: [
                { value: "Lujo Silencioso", color: "--gold-primary", text: "Silencioso / Lujo" },
                { value: "Textil Noble", color: "--sage-primary", text: "Noble / Lino Puro" },
                { value: "Comercio Justo", color: "--mint-green", text: "Comercio Justo / Km 0" },
                { value: "Sastrería Lenta", color: "--amber-warm", text: "Slow-Fashion / Lento" },
                { value: "Estructura Visual", color: "--slate-primary", text: "Corte / Patronaje" },
                { value: "Identidad Libre", color: "--purple-mystic", text: "Expresión / Libre" }
            ],
            targets: [
                { value: "El Coleccionista de Moda", icon: "fa-vest", title: "El Coleccionista de Moda", desc: "Personas que huyen del Fast-Fashion y coleccionan prendas exclusivas de diseñador." },
                { value: "El Profesional Urbano", icon: "fa-user-tie", title: "El Profesional Contemporáneo", desc: "Clientes que exigen verse pulcros, cómodos e impecables en juntas y vida social." },
                { value: "El Defensor Eco-Textil", icon: "fa-recycle", title: "Consumidor Eco-Consciente", desc: "Usuarios que valoran la trazabilidad textil, fibras biodegradables y tintes naturales." },
                { value: "El Buscador de Bespoke", icon: "fa-crown", title: "Cliente Alta Costura / Novias", desc: "Novias o padrinos que requieren una pieza única confeccionada exclusivamente a su fisonomía." }
            ],
            personalityLabels: {
                eje1Left: "Clásico / Sastrería Ancestral", eje1Right: "Minimalismo Conceptual / Futuro",
                eje2Left: "Fibras Crudas / Orgánico", eje2Right: "Cortes Estructurados / Arquitectura",
                eje3Left: "Artesanal / Hecho a Mano", eje3Right: "Lujo de Pasarela / Alta Gama",
                eje4Left: "Prendas Masivas / Casual", eje4Right: "Prendas Edición Limitada / Únicas"
            },
            tones: [
                { value: "Curatorial & Poético", title: "Curatorial & Poético", desc: "Inspirador, sereno, táctil. Habla del tacto, de las caídas de la tela, la luz y la memoria textil." },
                { value: "Editorial & Moda", title: "Editorial / Pasarela", desc: "Directo, audaz, moderno. Escribe para revistas de diseño, tendencias conceptuales y desfiles." },
                { value: "Transparente & de Origen", title: "Transparente / Lento", desc: "Honesto, íntimo, ético. Narra el origen del algodón, del telar y del artesano costurero." },
                { value: "Elegante & Reservado", title: "Lujo Silencioso", desc: "Sutil, sobrio, selecto. Ideal para clientes que no quieren logotipos gigantes, sino detalles íntimos." }
            ],
            palettes: [
                { name: "Salvia & Lino Crudo", colors: ["#2B302E", "#8F9D96", "#EBE5D8", "#F7F5F0"], tag: "Recomendado", desc: "Verde salvia degradado, lino crudo marfil y gris pizarra. Expresa calma textil, organicidad y costura lenta." },
                { name: "Algodón & Tierra Arcilla", colors: ["#3D251E", "#D28E7E", "#F0DFD5", "#FAF6F3"], tag: "Cálido", desc: "Marrón tierra, rosa arcilla lavado y tiza. Perfecto para lanas, algodones puros y colecciones otoñales." },
                { name: "Monocromo Minimalista", colors: ["#0B0B0C", "#4A4B4D", "#D1D2D6", "#FFFFFF"], tag: "Concepto", desc: "Negro absoluto, gris piedra y blanco. Un estilo de corte arquitectónico urbano, futurista y pulcro." },
                { name: "Índigo Índigo", colors: ["#101D33", "#2C4673", "#D2DAE6", "#FAF9F6"], tag: "Artesanal", desc: "Azul índigo tradicional y mezclilla lavada. Evoca tintes naturales botánicos y sastrería de alta duración." }
            ],
            logoStyles: [
                { value: "Tipográfico Minimalista", initial: "L I N E N", text: "Tipográfico Puro", desc: "Tipografía extendida sin isotipo, con una arquitectura y espaciado de letras impecable." },
                { value: "Monograma / Sello de Costura", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="58" font-family="'Cormorant Garamond', serif" font-size="28" font-style="italic" text-anchor="middle" fill="currentColor">L</text></svg>`, text: "Monograma Sastre", desc: "Una letra capitular estilizada rodeada por un óvalo. Elegancia sutil para bordar en etiquetas internas." },
                { value: "Isotipo Lineal de la Aguja", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M70,30 L30,70 M70,30 Q80,20 70,30 M65,35 L60,30 M40,60 L35,55" fill="none" stroke="currentColor" stroke-width="2"/><path d="M45,35 C35,25 25,35 35,45" fill="none" stroke="currentColor" stroke-dasharray="2,2" stroke-width="1.5"/></svg>`, text: "Aguja & Hebra", desc: "Líneas de trazo fino que simbolizan una aguja atravesando un tejido fluido. Concepto técnico." },
                { value: "Emblema Orgánico del Algodón", svg: `<svg viewBox="0 0 100 100" width="50" height="50"><path d="M50,20 Q65,30 50,45 Q35,30 50,20 M50,45 Q65,55 50,70 Q35,55 50,45 Z M50,70 L50,85" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="45" r="4" fill="currentColor"/></svg>`, text: "Flor / Capullo Textil", desc: "Representación lineal del capullo de algodón o una flor estilizada. Refleja la pureza vegetal del insumo." }
            ],
            regulatory: [
                { id: "reg-inen-textil", value: "Norma Técnica INEN Textil", title: "Etiquetado de Composición Textil (INEN)", desc: "Estándar ecuatoriano obligatorio para etiquetar composición de fibras, talla y país de origen.", checked: true },
                { id: "reg-trace-textil", value: "Trazabilidad de Cadena de Suministro", title: "Trazabilidad de Proveedores Éticos", desc: "Garantía de hilados orgánicos y talleres libres de explotación laboral.", checked: true },
                { id: "reg-dyes", value: "Tintes Libres de Metales Pesados", title: "Uso de Tintes Ecológicos Libres de Azoicos", desc: "Aseguramiento de pigmentos que no dañan el medio ambiente ni irritan la epidermis.", checked: false },
                { id: "reg-packaging-textil", value: "Empaques Kraft Compostables", title: "Empaque de Papel Kraft Biodegradable", desc: "Bolsas y envoltorios libres de plásticos de un solo uso.", checked: true },
                { id: "reg-wash", value: "Instrucciones Técnicas de Lavado", title: "Instrucciones Técnicas de Conservación", desc: "Iconografía de mantenimiento textil para prolongar la vida útil de las prendas nobles.", checked: false }
            ],
            channels: [
                { value: "Boutique / Taller Privado", icon: "fa-store", text: "Atelier Físico", checked: true },
                { value: "Canal Digital / Tienda Online", icon: "fa-globe", text: "E-commerce de Firma", checked: true },
                { value: "WhatsApp / Asesoría Virtual", icon: "fa-whatsapp", text: "Sartorial WhatsApp", checked: false },
                { value: "Showrooms Multimarca Selectos", icon: "fa-shop", text: "Tiendas Multimarca", checked: false }
            ],
            fallbackStory: "Linen & Thread Studio nace de la convicción de desacelerar el consumo de moda. Confeccionamos piezas atemporales concebidas bajo la técnica de la sastrería lenta, utilizando textiles de lino y algodón puro.",
            visualLab: {
                title: "Laboratorio Visual del Atelier",
                badge: "Boutique & Moda",
                intro: "Aterriza la identidad en soportes textiles: marquillas, sellos de costura, etiquetas de lino y acabados táctiles.",
                signatureTemplates: [
                    { value: "Cartucho Minimalista", badge: "Etiqueta Plana", frameClass: "frame-cartouche", preview: "LT", title: "Cartucho Minimalista", desc: "Estructura rectangular perfecta para tejer en marquillas de lino o coser en el cuello de prendas." },
                    { value: "Sello del Atelier", badge: "Sello de Cera", frameClass: "frame-seal", preview: "S", title: "Sello del Atelier", desc: "Insignia circular de lacre para colgar con cordel de yute en etiquetas colgantes de cartón premium." },
                    { value: "Silueta de Medida", badge: "Clásico Textil", frameClass: "frame-oval", preview: "M", title: "Silueta de Medida", desc: "Líneas elípticas de alta costura, proyectando herencia sartorial, atemporalidad y elegancia lenta." },
                    { value: "Matriz de Costura", badge: "Línea Táctil", frameClass: "frame-botanical", preview: "T", title: "Matriz de Costura", desc: "Detalles lineales que recuerdan hilados y costuras delicadas, perfecto para colecciones botánicas y lino." }
                ],
                bottleTemplates: [
                    { value: "Soporte Textil Estándar", badge: "Estándar", shapeClass: "bottle-shape-rect", frameClass: "frame-cartouche", title: "Soporte Textil", desc: "Previsualización base para marquillas y etiquetas colgantes." }
                ],
                finishes: [
                    { value: "Lino Crudo Texturizado", title: "Lino Crudo Texturizado", desc: "Tono crudo orgánico que evoca telas naturales, fibras puras biodegradables y artesanía lenta." },
                    { value: "Hebra de Cobre Pulida", title: "Hebra de Cobre Pulida", desc: "Brillo cálido de cobre pulido, ideal para herrajes metálicos de bolsos o remaches de autor." },
                    { value: "Oro Rosa Satinado", title: "Oro Rosa Satinado", desc: "Un dorado rosa suave, transmitiendo sofisticación íntima, delicadeza de diseño y alta pasarela." },
                    { value: "Negro Boutique Mate", title: "Negro Boutique Mate", desc: "Negro absoluto de altísimo contraste, ideal para marcas conceptuales de lujo silencioso urbano." }
                ],
                defaultSignature: "LT",
                disclaimer: "Esto no es la marca final en sí. Es una referencia visual y estratégica de moda para alinear la materialidad, los acabados y la estética creativa antes del diseño formal."
            }
        }
    };

    brandingPresets.perfumeria.palettes.push(
        { name: "Rosa Mineral", colors: ["#2A1F24", "#B87C8A", "#EED7D9", "#F8F3F1"], tag: "Suave", desc: "Una mezcla mas amable y cosmetica para marcas delicadas, femeninas o de cuidado ritual." },
        { name: "Citricos de Atelier", colors: ["#182126", "#6C8A7B", "#F0C66D", "#FFF4E8"], tag: "Fresco", desc: "Verde grisaceo, miel suave y crema luminosa para una marca fresca, pulida y sensorial." }
    );
    brandingPresets.gastronomia.palettes.push(
        { name: "Tomate & Crema", colors: ["#442622", "#C96A4A", "#F5D6C6", "#FFF7F0"], tag: "Amable", desc: "Una mezcla mas calida y apetecible para conceptos casuales con identidad cuidada." },
        { name: "Sal Marina & Limon", colors: ["#20323C", "#6EA8A6", "#F2D16B", "#F7F7F2"], tag: "Ligero", desc: "Ideal para propuestas frescas, brunch, cocina costera o marcas de bebidas con personalidad limpia." }
    );
    brandingPresets.abogados.palettes.push(
        { name: "Piedra & Champan", colors: ["#20242B", "#6B7280", "#D6C3A1", "#F5F1EA"], tag: "Confiable", desc: "Sobria pero mas cercana, con un acento champan que suaviza la rigidez institucional." },
        { name: "Azul Consejo", colors: ["#152238", "#3E5C89", "#B7C4D6", "#F7F9FC"], tag: "Clara", desc: "Una paleta serena y profesional para firmas que quieren verse modernas y accesibles." }
    );
    brandingPresets.boutique.palettes.push(
        { name: "Moka & Blush", colors: ["#2F2523", "#9B6F68", "#E8C9C1", "#F7F1EE"], tag: "Editorial", desc: "Aporta una lectura mas amable y boutique para prendas, accesorios y marcas de autor." },
        { name: "Salvia Rosada", colors: ["#27312D", "#7E9B8C", "#D9B8B0", "#F8F4EF"], tag: "Delicada", desc: "Verde suave y rosa empolvado para marcas sensibles, modernas y visualmente mas cercanas." }
    );
    brandingPresets.perfumeria.palettes.push(
        { name: "Lino Solar", colors: ["#262220", "#A68A64", "#E7D6BE", "#FBF7F1"], tag: "Natural", desc: "Aterriza una identidad mas luminosa, elegante y comercial para productos de cuidado o bienestar." },
        { name: "Ciruela de Noche", colors: ["#1E1A24", "#66506F", "#C8B5C9", "#F4EEF4"], tag: "Sensorial", desc: "Una lectura mas seductora y amable para marcas nocturnas, sensoriales o con aire de autor." }
    );
    brandingPresets.gastronomia.palettes.push(
        { name: "Caramelo & Sal", colors: ["#35241D", "#B67A4C", "#EBC9A7", "#FBF6F0"], tag: "Hogar", desc: "Perfecta para propuestas acogedoras, panaderia, brunch o cocina casual premium." },
        { name: "Pistacho & Hueso", colors: ["#27352C", "#8FA58A", "#D8CCBE", "#FAF7F2"], tag: "Natural", desc: "Mas amigable y limpia para experiencias frescas, saludables o de identidad vegetal." }
    );
    brandingPresets.abogados.palettes.push(
        { name: "Vino Institucional", colors: ["#231A1D", "#6B3F4A", "#CDB8B4", "#F5F0EE"], tag: "Distinción", desc: "Una opcion mas calida y exclusiva para firmas boutique que quieren diferenciarse." },
        { name: "Marfil & Pizarra", colors: ["#25282D", "#7C858F", "#DCCFB8", "#FAF7F1"], tag: "Sobria", desc: "Mantiene la autoridad, pero con una presencia mas amable y contemporanea." }
    );
    brandingPresets.boutique.palettes.push(
        { name: "Lavanda Editorial", colors: ["#26242C", "#8F7AA8", "#DCCFE4", "#F7F3F8"], tag: "Creativa", desc: "Una mezcla suave para marcas expresivas, editoriales y con sensibilidad visual." },
        { name: "Arena & Carbón", colors: ["#222120", "#7D736A", "#D9CEC2", "#FBF8F3"], tag: "Quiet Luxury", desc: "Funciona muy bien para marcas sobrias, de lujo silencioso y retail refinado." }
    );

    brandingPresets.perfumeria.visualLab.intro = "Aterriza la identidad en recursos visuales mas concretos: monogramas, sistemas de firma y acabados para explorar una direccion mas atractiva.";
    brandingPresets.perfumeria.visualLab.signatureTemplates.push(
        { value: "Bloque Tipografico", badge: "Editorial", frameClass: "frame-stack", preview: "LAB", title: "Bloque tipografico", desc: "Una firma mas contemporanea para marcas limpias, editoriales y con mejor presencia digital." },
        { value: "Marco Tallado", badge: "Coleccion", frameClass: "frame-oval", preview: "FM", title: "Marco tallado", desc: "Un sistema mas ornamental y amable para gamas premium, sets regalo o colecciones especiales." }
    );
    brandingPresets.perfumeria.visualLab.finishes.push(
        { value: "Rosa cuarzo satinado", title: "Rosa cuarzo satinado", desc: "Suaviza la percepcion y vuelve la marca mas amable, limpia y contemporanea." },
        { value: "Grafito ahumado", title: "Grafito ahumado", desc: "Un acabado elegante y mas urbano para perfumes de autor, velas y lineas unisex." }
    );

    brandingPresets.perfumeria.regulatory = [
        { id: "reg-arcsa", value: "Definir la linea hero y la familia de productos", title: "Linea hero y familia de productos", desc: "Aclarar que producto o ritual lidera la marca y como se ordenan sus extensiones.", checked: true },
        { id: "reg-trace", value: "Aterrizar el tono editorial y el storytelling", title: "Tono editorial y storytelling", desc: "Definir la voz de la marca para web, redes, etiquetas y presentacion comercial.", checked: true },
        { id: "reg-warnings", value: "Priorizar empaque, etiqueta y experiencia de apertura", title: "Empaque y experiencia de apertura", desc: "Alinear la direccion del unboxing, la etiqueta y los detalles que vuelven deseable el producto.", checked: true },
        { id: "reg-amber", value: "Definir estilo visual para fotografia y contenido", title: "Fotografia y contenido visual", desc: "Precisar el look de fotos, fondos, props y escenas que usara la marca para vender mejor.", checked: false },
        { id: "reg-cruelty", value: "Ajustar posicionamiento de precio y exclusividad", title: "Precio, exclusividad y percepcion", desc: "Alinear el nivel de lujo, el rango de precios y la sensacion que debe transmitir la marca.", checked: false }
    ];
    brandingPresets.gastronomia.regulatory = [
        { id: "reg-arcsa-alimentos", value: "Definir la experiencia insignia o menu hero", title: "Experiencia o menu hero", desc: "Aclarar que propuesta principal lidera la percepcion de la marca.", checked: true },
        { id: "reg-bpm", value: "Ordenar el relato del origen y la cocina", title: "Relato de origen y concepto culinario", desc: "Traducir territorio, tecnica y promesa gastronomica en una narrativa coherente.", checked: true },
        { id: "reg-packaging", value: "Priorizar empaque, menu o carta visual", title: "Menu, empaque o carta visual", desc: "Definir que piezas deben resolverse primero para que la marca se vea consistente.", checked: true },
        { id: "reg-semaro", value: "Definir estilo de fotografia y contenido", title: "Fotografia y contenido", desc: "Alinear el look de platos, mesas, producto y redes para vender mejor la experiencia.", checked: false },
        { id: "reg-wash", value: "Afinar nivel de precio y ritual de servicio", title: "Precio y ritual de servicio", desc: "Ajustar como se percibe la experiencia en sala, delivery o eventos.", checked: false }
    ];
    brandingPresets.abogados.regulatory = [
        { id: "reg-uafe", value: "Definir el servicio bandera o area principal", title: "Servicio bandera o area principal", desc: "Dejar claro que practica lidera la promesa de la firma.", checked: true },
        { id: "reg-privacy", value: "Aterrizar tono institucional y propuesta de confianza", title: "Tono institucional y confianza", desc: "Definir como se comunica autoridad sin verse distante ni generico.", checked: true },
        { id: "reg-dpo", value: "Priorizar web, dossier o papeleria comercial", title: "Web, dossier o papeleria", desc: "Escoger que activos deben resolverse primero para presentar mejor la firma.", checked: true },
        { id: "reg-conflict", value: "Ordenar casos, credenciales o prueba social", title: "Credenciales y prueba social", desc: "Alinear que señales de experiencia y confianza mostrara la marca.", checked: false },
        { id: "reg-governance", value: "Definir captacion y relacion con clientes", title: "Captacion y relacion con clientes", desc: "Pensar en reuniones, seguimiento, referidos y presencia digital con criterio.", checked: false }
    ];
    brandingPresets.boutique.regulatory = [
        { id: "reg-inen-textil", value: "Definir la coleccion hero o producto emblema", title: "Coleccion hero o producto emblema", desc: "Aclarar que pieza o linea concentra la propuesta de valor inicial.", checked: true },
        { id: "reg-trace-textil", value: "Aterrizar el universo editorial y el tono visual", title: "Universo editorial y tono visual", desc: "Definir como se vera la marca en campañas, redes, lookbooks y empaque.", checked: true },
        { id: "reg-dyes", value: "Priorizar etiquetas, empaque o experiencia de compra", title: "Etiquetas, empaque o experiencia de compra", desc: "Elegir que soportes deben resolverse primero para vender con mas coherencia.", checked: true },
        { id: "reg-packaging-textil", value: "Definir fotografia, styling y direccion de campaña", title: "Fotografia, styling y campaña", desc: "Alinear el look de contenido para reforzar deseo y consistencia visual.", checked: false },
        { id: "reg-wash", value: "Ajustar precio, deseo y percepcion de exclusividad", title: "Precio y percepcion de exclusividad", desc: "Definir si la marca quiere verse mas accesible, premium o de lujo silencioso.", checked: false }
    ];

    // ==========================================
    // 1. STATE MANAGEMENT & WIZARD NAVIGATION
    // ==========================================
    let currentStep = 1;
    const totalSteps = 5;
    let selectedCategory = "perfumeria";
    
    // Core brand data state
    const brandData = {
        name: "Ferjho Aromas Lab",
        slogan: "",
        products: [],
        history: "",
        values: [],
        target: "",
        personality: {
            modernity: 50,
            science: 50,
            luxury: 50,
            exclusivity: 50
        },
        tone: "",
        paletteName: "Alquimia Dorada",
        paletteColors: ["#0B0C10", "#1F2833", "#D4AF37", "#F4F6F9"],
        fontFamily: "Cormorant Garamond",
        fontType: "Editorial Serif",
        logoStyle: "",
        valueProp: "",
        regulatory: [],
        channels: [],
        references: "",
        visualDirection: {
            signatureText: "FA",
            signatureTemplate: "",
            bottleTemplate: "",
            finish: "",
            frameClass: "frame-cartouche",
            bottleShapeClass: "bottle-shape-rect"
        }
    };

    // DOM Elements
    const welcomeScreen = document.getElementById("welcome-screen");
    const wizardScreen = document.getElementById("wizard-screen");
    const startBriefBtn = document.getElementById("start-brief-btn");
    
    console.log("DOM Elements loaded:");
    console.log("welcomeScreen:", welcomeScreen);
    console.log("wizardScreen:", wizardScreen);
    console.log("startBriefBtn:", startBriefBtn);
    
    const prevStepBtn = document.getElementById("prev-step-btn");
    const nextStepBtn = document.getElementById("next-step-btn");
    const currentStepDisplay = document.getElementById("current-step-display");
    const stepTitleDisplay = document.getElementById("step-title-display");
    const progressLiquid = document.getElementById("step-progress-liquid");
    
    const stepPanes = document.querySelectorAll(".step-content-pane");
    const stepNodes = document.querySelectorAll(".step-node");
    const circleIndicators = document.querySelectorAll(".indicator-circle");
    
    const brandNameInput = document.getElementById("brand-name");
    const brandSloganInput = document.getElementById("brand-slogan");
    const brandValuePropInput = document.getElementById("brand-value-prop");
    const historyTextarea = document.getElementById("brand-history");
    const brandReferencesInput = ensureReferencesTextarea();
    const signatureLetterInput = document.getElementById("signature-letter-input");
    const ambientGlow1 = document.querySelector(".glow-1");
    const ambientGlow2 = document.querySelector(".glow-2");

    // Dynamic slider labels dictionary
    const sliders = [
        { id: "personality-slider-1", displayId: "slider-1-val", liveId: "live-param-eje1", key: "modernity", balancedText: "Equilibrio Perfecto" },
        { id: "personality-slider-2", displayId: "slider-2-val", liveId: "live-param-eje2", key: "science", balancedText: "Equilibrio Perfecto" },
        { id: "personality-slider-3", displayId: "slider-3-val", liveId: "live-param-eje3", key: "luxury", balancedText: "Equilibrio Perfecto" },
        { id: "personality-slider-4", displayId: "slider-4-val", liveId: "live-param-eje4", key: "exclusivity", balancedText: "Equilibrio Perfecto" }
    ];

    const categoryUICopy = {
        perfumeria: {
            badges: ["1. Esencia Aromatica", "2. ADN Sensorial", "3. Direccion Visual", "4. Prioridades & Canales", "5. Retrato de Marca"],
            stepTitles: { 1: "Esencia & Alma del Proyecto", 2: "ADN & Publico Objetivo", 3: "Estetica & Alquimia Visual", 4: "Prioridades de Marca & Activacion", 5: "La Alquimia de Marca Completada" },
            steps: {
                1: { heading: "Definiendo la Base del Elixir", description: "Delimitemos nombre, universo de productos e historia fundacional para que la marca tenga una base refinada y coherente." },
                2: { heading: "Psicologia & Audiencia del Laboratorio", description: "Definamos el caracter emocional y el tipo de cliente que debe sentirse atraido por la experiencia olfativa." },
                3: { heading: "Estetica & Alquimia Visual", description: "Traduzcamos la promesa de la marca a color, tipografia, acabados y referencias visuales mas tangibles." },
                4: { heading: "Prioridades de Marca & Activacion", description: "Definimos que piezas y focos necesita la marca para aterrizar mejor su salida al mercado, su narrativa y su sistema visual." },
                5: { heading: "Retrato de Marca Destilado", description: "Aqui reunimos la direccion visual y estrategica como base de referencia para la siguiente etapa creativa." }
            },
            sliderIntro: "Desliza para posicionar la marca dentro de ejes sensoriales y de percepcion premium:",
            paletteIntro: "Selecciona una armonia cromatica alineada con la experiencia aromatica que buscas proyectar:",
            typoIntro: "Escribe el nombre y observa como cambia la sensacion de la marca segun el estilo tipografico:",
            regulatoryIntro: "Selecciona las prioridades que quieres resolver primero para que la marca avance con mas claridad y coherencia:",
            actionTitle: "Que deseas hacer con esta direccion de marca?",
            actionDescription: "Puedes descargar la referencia visual en PDF o enviarla por WhatsApp para continuar con la exploracion creativa y tecnica."
        },
        gastronomia: {
            badges: ["1. Concepto Culinario", "2. Perfil del Comensal", "3. Lenguaje Visual", "4. Operacion & Venta", "5. Ruta de Marca"],
            stepTitles: { 1: "Concepto & Origen del Proyecto", 2: "Perfil de Marca & Audiencia", 3: "Direccion Estetica de la Experiencia", 4: "Prioridades de Marca & Activacion", 5: "Sintesis de Marca Gastronomica" },
            steps: {
                1: { heading: "Definiendo la Propuesta Culinaria", description: "Aterricemos nombre, oferta principal y origen del proyecto para construir una marca con apetito comercial y personalidad." },
                2: { heading: "Perfil del Comensal & Tono de Servicio", description: "Necesitamos entender a quien invita la marca a la mesa y desde que actitud quiere hablarle." },
                3: { heading: "Direccion Visual de la Experiencia", description: "Construyamos una atmosfera visual que respalde sabor, emplatado, hospitalidad y nivel de propuesta." },
                4: { heading: "Prioridades de Marca & Activacion", description: "Aqui definimos que frentes del brief y de la experiencia deben resolverse primero para lanzar una propuesta gastronomica mas consistente." },
                5: { heading: "Ruta de Marca Servida", description: "Esta sintesis deja lista la referencia para desarrollar identidad, menu, empaque o experiencia del local." }
            },
            sliderIntro: "Desliza para ubicar la marca entre tradicion, tecnica, calidez y exclusividad:",
            paletteIntro: "Elige una paleta que refuerce el tipo de experiencia culinaria que la marca promete:",
            typoIntro: "Escribe el nombre y compara como cambia la percepcion entre autor, tradicion y contemporaneidad:",
            regulatoryIntro: "Marca los frentes mas importantes para estructurar mejor la experiencia, el sistema visual y la salida comercial:",
            actionTitle: "Que deseas hacer con esta ruta de marca?",
            actionDescription: "Puedes bajar el PDF de referencia o enviarlo para avanzar con branding, menu, piezas de empaque o presencia comercial."
        },
        abogados: {
            badges: ["1. Posicionamiento", "2. Perfil del Cliente", "3. Lenguaje Institucional", "4. Riesgo & Canales", "5. Sintesis Ejecutiva"],
            stepTitles: { 1: "Posicionamiento & Base Institucional", 2: "Perfil del Cliente & Tono Profesional", 3: "Direccion Visual Institucional", 4: "Prioridades de Marca & Activacion", 5: "Sintesis de Marca Juridica" },
            steps: {
                1: { heading: "Definiendo la Base Institucional", description: "Aterricemos nombre, area de practica y fundamento de la firma para construir una presencia seria, sobria y confiable." },
                2: { heading: "Cliente Ideal & Registro de Autoridad", description: "Definamos a quien asesora la firma y desde que tono quiere proyectar criterio, seguridad y rigor." },
                3: { heading: "Lenguaje Visual de Confianza", description: "En esta etapa traducimos solidez, prestigio y claridad institucional a recursos visuales consistentes." },
                4: { heading: "Prioridades de Marca & Activacion", description: "Definimos los activos y frentes mas importantes para que la firma proyecte orden, claridad y una presencia institucional mas solida." },
                5: { heading: "Sintesis Ejecutiva de Marca", description: "Aqui queda consolidada una base de referencia para avanzar con identidad, papeleria y presencia institucional." }
            },
            sliderIntro: "Desliza para posicionar la firma entre tradicion, innovacion, cercania y nivel institucional:",
            paletteIntro: "Selecciona una paleta que refuerce prestigio, claridad y confianza en el entorno juridico:",
            typoIntro: "Prueba el nombre de la firma y compara cual registro transmite mayor autoridad y legibilidad:",
            regulatoryIntro: "Selecciona los frentes de marca y negocio que necesitas resolver primero para fortalecer la presencia profesional:",
            actionTitle: "Que deseas hacer con esta sintesis ejecutiva?",
            actionDescription: "Puedes descargar el PDF o enviarlo para pasar a identidad visual, piezas institucionales o estrategia de presencia profesional."
        },
        boutique: {
            badges: ["1. Universo de Coleccion", "2. Estilo & Cliente", "3. Codigo Visual", "4. Venta & Produccion", "5. Mapa de Marca"],
            stepTitles: { 1: "Universo de Marca & Coleccion", 2: "Estilo, Audiencia & Personalidad", 3: "Codigo Estetico de la Marca", 4: "Prioridades de Marca & Activacion", 5: "Mapa de Marca Boutique" },
            steps: {
                1: { heading: "Definiendo el Universo de Coleccion", description: "Necesitamos definir nombre, lineas de producto y origen creativo para que la marca tenga una voz reconocible." },
                2: { heading: "Estilo de Cliente & Actitud de Marca", description: "Aclaremos a quien viste la marca y desde que energia quiere relacionarse con su publico." },
                3: { heading: "Codigo Visual & Firma de Autor", description: "Aterricemos color, tipografia, silueta visual y recursos de personalizacion acordes a la propuesta textil." },
                4: { heading: "Prioridades de Marca & Activacion", description: "Ordenamos los frentes que mas importan para convertir la identidad en una marca vendible, consistente y lista para presentarse mejor." },
                5: { heading: "Mapa de Marca Consolidado", description: "Este resumen sirve como guia para avanzar con identidad, etiquetas, empaque y presentacion comercial." }
            },
            sliderIntro: "Desliza para ubicar la marca entre artesania, estructura, lujo y cercania:",
            paletteIntro: "Escoge la paleta que mejor traduzca el caracter de la coleccion y su nivel de sofisticacion:",
            typoIntro: "Escribe el nombre y revisa como cambia la energia de la marca entre editorial, sastre y contemporanea:",
            regulatoryIntro: "Selecciona los frentes que mas te interesa resolver primero para construir una marca boutique mas clara y deseable:",
            actionTitle: "Que deseas hacer con este mapa de marca?",
            actionDescription: "Puedes descargar el PDF o enviarlo para desarrollar identidad, etiquetas, empaque y piezas comerciales."
        }
    };

    const categoryFormCopy = {
        perfumeria: {
            brandNameLabel: "Nombre de la Marca",
            brandNamePlaceholder: "Ej. Ferjho Aromas / Valverde Botanica",
            brandNameHint: "El nombre oficial tal como aparecera en logotipos, frascos, cajas y etiquetas.",
            brandSloganLabel: "Slogan o Subtexto Sugerido",
            brandSloganPlaceholder: "Ej. Alquimia Olfativa / Perfumeria de Autor",
            brandSloganHint: "Una frase corta que define la categoria o la filosofia del laboratorio.",
            productsLabel: "Universo de Productos Primarios",
            historyLabel: "El Origen y la Inspiracion",
            historyPlaceholder: "Cual es la historia detras de este laboratorio de aromas? Describe la chispa que dio vida al proyecto...",
            historyHint: "Esto nos ayuda a redactar la narrativa de marca y el ADN emocional.",
            valuesLabel: "Valores Conceptuales Centrales",
            targetLabel: "El Cliente Ideal (Target Visual)",
            personalityLabel: "Ejes de Personalidad de Marca",
            toneLabel: "Tono de la Comunicacion Escrita",
            paletteLabel: "Paletas de Colores de Inspiracion",
            typoLabel: "Tipografia & Personalidad del Logotipo",
            logoStyleLabel: "Estilo Visual Preferido para el Logotipo",
            valuePropLabel: "La Propuesta de Valor Unica (El \"Superpoder\")",
            valuePropPlaceholder: "Ej. Elixires botanicos formulados con precision cientifica para balancear cuerpo y mente.",
            valuePropHint: "Por que el cliente te elegira a ti en lugar de marcas industriales?",
            regulatoryLabel: "Prioridades Clave para Desarrollar la Marca",
            channelsLabel: "Canales Primarios de Distribucion Comercial",
            referencesLabel: "Marcas Referentes o de Inspiracion",
            referencesPlaceholder: "Ej.\nAesop - retail sobrio y tono editorial - https://www.aesop.com/\nLe Labo - sistema de etiquetas y naming - https://www.lelabofragrances.com/",
            referencesHint: "Puedes escribir varias referencias. Idealmente una por linea: marca, idea clave y enlace si lo tienes."
        },
        gastronomia: {
            brandNameLabel: "Nombre del Proyecto Gastronomico",
            brandNamePlaceholder: "Ej. Origen Cocina Taller / Fuego Lento",
            brandNameHint: "El nombre oficial como aparecera en menu, fachada, packaging o piezas digitales.",
            brandSloganLabel: "Concepto Corto o Subtitulo",
            brandSloganPlaceholder: "Ej. Cocina de Autor / Brasa & Territorio",
            brandSloganHint: "Una frase que resuma la experiencia culinaria o el tipo de cocina.",
            productsLabel: "Lineas de Oferta o Unidades de Negocio",
            historyLabel: "Origen del Proyecto Culinario",
            historyPlaceholder: "Como nace esta propuesta? Cuenta la historia, el territorio, la tecnica o la motivacion que dio origen al proyecto...",
            historyHint: "Esto nos ayuda a construir storytelling, atmosfera y propuesta de marca.",
            valuesLabel: "Valores de la Experiencia",
            targetLabel: "Perfil del Comensal Ideal",
            personalityLabel: "Ejes de Personalidad de la Marca",
            toneLabel: "Tono de la Comunicacion",
            paletteLabel: "Paletas de Color para la Experiencia",
            typoLabel: "Tipografia & Estilo del Nombre",
            logoStyleLabel: "Direccion Visual Preferida para la Marca",
            valuePropLabel: "La Promesa Diferencial del Proyecto",
            valuePropPlaceholder: "Ej. Cocina contemporanea que reinterpreta ingredientes locales con tecnica precisa y servicio cercano.",
            valuePropHint: "Que hace que esta propuesta valga la pena frente a otras opciones del mercado?",
            regulatoryLabel: "Prioridades Clave para Ordenar la Marca",
            channelsLabel: "Canales Primarios de Venta o Servicio",
            referencesLabel: "Referentes Gastronomicos o Comerciales",
            referencesPlaceholder: "Ej.\nCentral - narrativa de territorio y cocina de autor - https://centralrestaurante.com.pe/\nNuema - tono visual y experiencia contemporanea - https://www.instagram.com/nuema.ec/",
            referencesHint: "Puedes listar varias referencias. Una por linea funciona mejor: marca, idea clave y enlace."
        },
        abogados: {
            brandNameLabel: "Nombre de la Firma o Marca Profesional",
            brandNamePlaceholder: "Ej. Valverde & Asociados / Lexra",
            brandNameHint: "El nombre oficial como aparecera en papeleria, sitio web, propuestas y piezas institucionales.",
            brandSloganLabel: "Linea de Posicionamiento o Subtitulo",
            brandSloganPlaceholder: "Ej. Estrategia Legal & Proteccion Patrimonial",
            brandSloganHint: "Una frase sobria que explique con claridad el enfoque de la firma.",
            productsLabel: "Areas de Practica o Servicios Prioritarios",
            historyLabel: "Origen de la Firma o Enfoque Profesional",
            historyPlaceholder: "Como nace la firma? Que experiencia, vacio del mercado o enfoque profesional le da sentido a esta propuesta?",
            historyHint: "Esto ayuda a construir una narrativa de confianza, criterio y posicionamiento.",
            valuesLabel: "Principios de la Firma",
            targetLabel: "Perfil del Cliente Ideal",
            personalityLabel: "Ejes de Posicionamiento Institucional",
            toneLabel: "Tono de la Comunicacion Profesional",
            paletteLabel: "Paletas de Color Institucionales",
            typoLabel: "Tipografia & Presencia del Nombre",
            logoStyleLabel: "Direccion Visual Institucional",
            valuePropLabel: "La Propuesta de Valor de la Firma",
            valuePropPlaceholder: "Ej. Acompañamiento legal riguroso con enfoque preventivo, criterio estrategico y comunicacion clara.",
            valuePropHint: "Por que un cliente serio deberia confiar en esta firma y no en otra?",
            regulatoryLabel: "Prioridades Clave para Consolidar la Firma",
            channelsLabel: "Canales Primarios de Captacion o Relacion",
            referencesLabel: "Firmas o Referentes Profesionales",
            referencesPlaceholder: "Ej.\nFirma X - tono institucional y claridad web - https://dominio.com/\nFirma Y - sobriedad visual y credibilidad editorial - https://dominio.com/",
            referencesHint: "Puedes escribir varias referencias. Usa una por linea con el nombre, la idea que rescatas y el enlace."
        },
        boutique: {
            brandNameLabel: "Nombre de la Marca o Coleccion",
            brandNamePlaceholder: "Ej. Lunea Atelier / Casa Sal",
            brandNameHint: "El nombre oficial como aparecera en etiquetas, empaques, redes y piezas editoriales.",
            brandSloganLabel: "Bajada de Marca o Concepto Corto",
            brandSloganPlaceholder: "Ej. Costura Lenta / Ready-to-Wear de Autor",
            brandSloganHint: "Una frase breve que ubique la marca dentro de su universo estetico o comercial.",
            productsLabel: "Lineas de Producto o Coleccion",
            historyLabel: "Origen de la Marca o la Coleccion",
            historyPlaceholder: "Como nace la marca? Describe la inspiracion, la mirada estetica o la necesidad que origino el proyecto...",
            historyHint: "Esto nos ayuda a definir relato, tono y direccion visual.",
            valuesLabel: "Valores de Marca",
            targetLabel: "Perfil de Cliente Ideal",
            personalityLabel: "Ejes de Personalidad de la Marca",
            toneLabel: "Tono de la Comunicacion de Marca",
            paletteLabel: "Paletas de Color de Coleccion",
            typoLabel: "Tipografia & Personalidad del Nombre",
            logoStyleLabel: "Direccion Visual para la Marca",
            valuePropLabel: "La Propuesta de Valor de la Coleccion",
            valuePropPlaceholder: "Ej. Prendas de edicion limitada con patronaje cuidado, materiales nobles y una identidad muy editorial.",
            valuePropHint: "Que hace que la marca sea deseable y relevante frente a otras propuestas?",
            regulatoryLabel: "Prioridades Clave para Potenciar la Marca",
            channelsLabel: "Canales Primarios de Venta",
            referencesLabel: "Marcas o Universos de Inspiracion",
            referencesPlaceholder: "Ej.\nThe Row - sobriedad y lujo silencioso - https://www.therow.com/\nPaloma Wool - tono editorial y direccion artistica - https://palomawool.com/",
            referencesHint: "Puedes incluir varias referencias. Una por linea con marca, idea rescatable y enlace funciona mejor."
        }
    };

    // Step Title dictionary
    let stepTitles = {
        1: "Esencia & Alma del Proyecto",
        2: "ADN & Público Objetivo",
        3: "Estética & Alquimia Visual",
        4: "Prioridades & Canales",
        5: "La Alquimia de Marca Completada"
    };

    function deriveSignatureText(name) {
        const clean = (name || "").replace(/[^A-Za-z0-9\s]/g, " ").trim();
        if (!clean) return "MP";
        const parts = clean.split(/\s+/).filter(Boolean);
        if (parts.length === 1) {
            return parts[0].slice(0, 2).toUpperCase();
        }
        return parts.slice(0, 2).map(part => part[0]).join("").toUpperCase();
    }

    function ensureReferencesTextarea() {
        const current = document.getElementById("brand-references");
        if (!current || current.tagName === "TEXTAREA") return current;

        const textarea = document.createElement("textarea");
        textarea.id = current.id;
        textarea.className = current.className;
        textarea.rows = 5;
        textarea.placeholder = current.placeholder;
        textarea.value = current.value || "";
        current.replaceWith(textarea);
        return textarea;
    }

    function updatePrioritySummary() {
        const livePriorityEl = document.getElementById("live-param-regulatory");
        if (livePriorityEl) {
            livePriorityEl.textContent = `${brandData.regulatory.length} prioridades clave`;
        }
    }

    function getCurrentVisualPreset() {
        return brandingPresets[selectedCategory].visualLab || null;
    }

    function getFinishColors(finishName) {
        const finishes = {
            // Perfumería
            "Tapa dorada satinada": { hex: "#D4AF37", rgb: [212, 175, 55], text: "#FAF6E8", shadow: "rgba(212, 175, 55, 0.4)" },
            "Negro mate mineral": { hex: "#2A2C31", rgb: [42, 44, 49], text: "#E2E5EC", shadow: "rgba(42, 44, 49, 0.4)" },
            "Marfil porcelana": { hex: "#F1EBDD", rgb: [241, 235, 221], text: "#1A1B1F", shadow: "rgba(241, 235, 221, 0.2)" },
            "Verde herbario": { hex: "#80917C", rgb: [128, 145, 124], text: "#F3F7F2", shadow: "rgba(128, 145, 124, 0.3)" },
            // Gastronomía
            "Terracota Cobre Satinado": { hex: "#C86446", rgb: [200, 100, 70], text: "#FFF5F2", shadow: "rgba(200, 100, 70, 0.4)" },
            "Negro Carbón Mate": { hex: "#23160C", rgb: [35, 22, 12], text: "#EADFD7", shadow: "rgba(35, 22, 12, 0.4)" },
            "Latón Dorado Antiguo": { hex: "#C19A6B", rgb: [193, 154, 107], text: "#1A1B1F", shadow: "rgba(193, 154, 107, 0.4)" },
            "Verde Oliva Orgánico": { hex: "#4D7C5B", rgb: [77, 124, 91], text: "#F0F7F2", shadow: "rgba(77, 124, 91, 0.3)" },
            // Abogados
            "Lacre Rojo Lacré": { hex: "#5C1D24", rgb: [92, 29, 36], text: "#FCEBEC", shadow: "rgba(92, 29, 36, 0.5)" },
            "Oro de Ley Satinado": { hex: "#D4AF37", rgb: [212, 175, 55], text: "#FAF6E8", shadow: "rgba(212, 175, 55, 0.4)" },
            "Plata Noble Pulida": { hex: "#C2CAD0", rgb: [194, 202, 208], text: "#1A1B1F", shadow: "rgba(194, 202, 208, 0.3)" },
            "Azul Almirantazgo Mate": { hex: "#1E293B", rgb: [30, 41, 59], text: "#E9F0FC", shadow: "rgba(30, 41, 59, 0.4)" },
            // Boutique
            "Lino Crudo Texturizado": { hex: "#EBE5D8", rgb: [235, 229, 216], text: "#1A1B1F", shadow: "rgba(235, 229, 216, 0.2)" },
            "Hebra de Cobre Pulida": { hex: "#D28E7E", rgb: [210, 142, 126], text: "#FCF3F1", shadow: "rgba(210, 142, 126, 0.4)" },
            "Oro Rosa Satinado": { hex: "#ECC8C0", rgb: [236, 200, 192], text: "#1A1B1F", shadow: "rgba(236, 200, 192, 0.3)" },
            "Negro Boutique Mate": { hex: "#2B302E", rgb: [43, 48, 46], text: "#E7EFEA", shadow: "rgba(43, 48, 46, 0.4)" }
        };
        return finishes[finishName] || { hex: "#D4AF37", rgb: [212, 175, 55], text: "#FAF6E8", shadow: "rgba(212, 175, 55, 0.4)" };
    }

    function getFinishCapStyle(finishName) {
        const colors = getFinishColors(finishName);
        return `linear-gradient(180deg, ${colors.hex}, rgba(${colors.rgb[0]}, ${colors.rgb[1]}, ${colors.rgb[2]}, 0.85))`;
    }

    function applyCategoryCopy(categoryKey) {
        const copy = categoryUICopy[categoryKey];
        const formCopy = categoryFormCopy[categoryKey];
        if (!copy) return;

        stepTitles = { ...copy.stepTitles };

        copy.badges.forEach((text, idx) => {
            const badge = document.getElementById(`badge-step-${idx + 1}`);
            if (badge) {
                const iconHtml = badge.querySelector("i")?.outerHTML || "";
                badge.innerHTML = `${iconHtml} ${text}`;
            }
        });

        Object.entries(copy.steps).forEach(([step, content]) => {
            const heading = document.getElementById(`step-${step}-heading`);
            const description = document.getElementById(`step-${step}-description`);
            if (heading) heading.textContent = content.heading;
            if (description) description.textContent = content.description;
        });

        document.getElementById("slider-intro-text-element").textContent = copy.sliderIntro;
        document.getElementById("palette-intro-text-element").textContent = copy.paletteIntro;
        document.getElementById("typo-intro-text-element").textContent = copy.typoIntro;
        document.getElementById("regulatory-intro-text-element").textContent = copy.regulatoryIntro;
        document.getElementById("action-panel-title").textContent = copy.actionTitle;
        document.getElementById("action-panel-description").textContent = copy.actionDescription;
        const summaryPriorityEyebrow = document.getElementById("summary-regulatory-eyebrow");
        if (summaryPriorityEyebrow) {
            summaryPriorityEyebrow.textContent = "Prioridades para Sacar la Marca Adelante";
        }
        const livePriorityLabel = document.querySelector("#live-param-regulatory")?.previousElementSibling;
        if (livePriorityLabel) {
            livePriorityLabel.innerHTML = `<i class="fas fa-compass-drafting"></i> Prioridades:`;
        }

        if (formCopy) {
            const withIcon = (target, text, suffix = "") => {
                const el = typeof target === "string" ? document.querySelector(target) : target;
                if (!el) return;
                const iconHtml = el.querySelector("i")?.outerHTML || "";
                el.innerHTML = `${iconHtml} ${text}${suffix}`;
            };

            withIcon('#label-brand-name', formCopy.brandNameLabel);
            withIcon('#label-brand-slogan', formCopy.brandSloganLabel);
            withIcon('#label-products-group', formCopy.productsLabel, ' <span class="required-flag">(Selecciona los que apliquen)</span>');
            withIcon('#label-brand-history', formCopy.historyLabel);
            withIcon('#label-values-group', formCopy.valuesLabel, ' <span class="required-flag">(Elige exactamente 3)</span>');
            withIcon('#label-target-group', formCopy.targetLabel);
            withIcon('#label-personality-group', formCopy.personalityLabel);
            withIcon('#label-tone-group', formCopy.toneLabel);
            withIcon('#label-palette-group', formCopy.paletteLabel);
            withIcon('#label-typo-group', formCopy.typoLabel);
            withIcon('#label-logo-style-group', formCopy.logoStyleLabel);
            withIcon('#label-value-prop', formCopy.valuePropLabel);
            withIcon('#label-regulatory-group', formCopy.regulatoryLabel);
            withIcon('#label-channels-group', formCopy.channelsLabel);
            withIcon('#label-references', formCopy.referencesLabel);

            brandNameInput.placeholder = formCopy.brandNamePlaceholder;
            brandSloganInput.placeholder = formCopy.brandSloganPlaceholder;
            historyTextarea.placeholder = formCopy.historyPlaceholder;
            brandValuePropInput.placeholder = formCopy.valuePropPlaceholder;
            if (brandReferencesInput) {
                brandReferencesInput.placeholder = formCopy.referencesPlaceholder;
            }

            const brandNameHint = document.getElementById("hint-brand-name");
            const sloganHint = document.getElementById("hint-brand-slogan");
            const historyHint = document.getElementById("hint-brand-history");
            const valuePropHint = document.getElementById("hint-value-prop");
            const referencesHint = document.getElementById("hint-references");

            if (brandNameHint) brandNameHint.textContent = formCopy.brandNameHint;
            if (sloganHint) sloganHint.textContent = formCopy.brandSloganHint;
            if (historyHint) historyHint.textContent = formCopy.historyHint;
            if (valuePropHint) valuePropHint.textContent = formCopy.valuePropHint;
            if (referencesHint) referencesHint.textContent = formCopy.referencesHint;
        }

        // Update header status text based on category
        const headerStatusTexts = {
            perfumeria: "Laboratorio de Co-Creación",
            gastronomia: "Taller de Co-Creación",
            abogados: "Estudio de Co-Creación",
            boutique: "Atelier de Co-Creación"
        };
        const headerStatusEl = document.getElementById("header-status-text");
        if (headerStatusEl) {
            headerStatusEl.textContent = headerStatusTexts[categoryKey] || "Laboratorio de Co-Creación";
        }

        if (currentStepDisplay) {
            stepTitleDisplay.textContent = stepTitles[currentStep];
        }
    }

    // Category Card Selection
    const categoryCards = document.querySelectorAll(".category-card-select");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            categoryCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            selectedCategory = card.getAttribute("data-category");
            
            // Re-render categories default data
            loadCategoryPresets(selectedCategory);
        });
    });

    // Transition from welcome screen
    startBriefBtn.addEventListener("click", () => {
        console.log("Botón Comenzar Cocreación clickeado");
        
        // Enforce loading correct category presets based on active welcome screen card
        const activeCard = document.querySelector(".category-card-select.active");
        if (activeCard) {
            selectedCategory = activeCard.getAttribute("data-category") || "perfumeria";
            console.log("Categoría seleccionada:", selectedCategory);
        } else {
            console.log("No hay categoría activa, usando perfumeria por defecto");
            selectedCategory = "perfumeria";
        }
        
        try {
            loadCategoryPresets(selectedCategory);
            
            welcomeScreen.classList.add("hidden");
            wizardScreen.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });
            updateWizardUI();
            
            console.log("Transición a wizard completada");
        } catch (error) {
            console.error("Error al hacer transición al wizard:", error);
            alert("Hubo un error al cargar el brief. Por favor, recarga la página e intenta nuevamente.");
        }
    });

    function returnToWelcomeMenu() {
        const shouldExit = window.confirm("Si sales al menu de cocreacion, perderas el avance actual y deberas empezar de nuevo. Deseas continuar?");
        if (!shouldExit) return;

        wizardScreen.classList.add("hidden");
        welcomeScreen.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Navigation triggers
    prevStepBtn.addEventListener("click", () => {
        if (currentStep === 1) {
            returnToWelcomeMenu();
            return;
        }

        if (currentStep > 1) {
            currentStep--;
            updateWizardUI();
        }
    });

    nextStepBtn.addEventListener("click", () => {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                updateWizardUI();
            }
        }
    });

    // Node clicking (only to previous or validated steps)
    stepNodes.forEach(node => {
        node.addEventListener("click", () => {
            const targetStep = parseInt(node.getAttribute("data-step"));
            if (targetStep < currentStep) {
                currentStep = targetStep;
                updateWizardUI();
            } else if (targetStep > currentStep) {
                // Check if we can jump (requires validating intermediate steps)
                let canJump = true;
                for (let s = currentStep; s < targetStep; s++) {
                    if (!validateStep(s)) {
                        canJump = false;
                        break;
                    }
                }
                if (canJump) {
                    currentStep = targetStep;
                    updateWizardUI();
                }
            }
        });
    });

    // Step Validation
    function validateStep(step) {
        if (step === 1) {
            const nameVal = brandNameInput.value.trim();
            if (!nameVal) {
                showToast("Por favor, introduce el nombre de la marca.");
                return false;
            }
            if (brandData.products.length === 0) {
                showToast("Por favor, selecciona al menos una línea de producto.");
                return false;
            }
            if (brandData.values.length !== 3) {
                showToast("Por favor, elige exactamente 3 valores de marca.");
                return false;
            }
        }
        if (step === 2) {
            if (!brandData.target) {
                showToast("Por favor, selecciona el público objetivo ideal.");
                return false;
            }
            if (!brandData.tone) {
                showToast("Por favor, elige el tono de comunicación escrito.");
                return false;
            }
        }
        if (step === 3) {
            if (!brandData.logoStyle) {
                showToast("Por favor, elige una dirección de diseño para el logotipo.");
                return false;
            }
            const preset = brandingPresets[selectedCategory];
            if (preset && preset.visualLab) {
                if (!brandData.visualDirection.signatureTemplate || !brandData.visualDirection.finish) {
                    showToast("Por favor, completa la firma y el acabado visual.");
                    return false;
                }
            }
        }
        return true;
    }

    // UI Updates on Step change
    function updateWizardUI() {
        // Toggle Step panes
        stepPanes.forEach(pane => {
            pane.classList.remove("active");
            if (parseInt(pane.getAttribute("data-step")) === currentStep) {
                pane.classList.add("active");
            }
        });

        // Update indicators
        stepNodes.forEach(node => {
            const stepNum = parseInt(node.getAttribute("data-step"));
            node.classList.remove("active", "completed");
            if (stepNum === currentStep) {
                node.classList.add("active");
            } else if (stepNum < currentStep) {
                node.classList.add("completed");
            }
        });

        circleIndicators.forEach(circle => {
            const stepNum = parseInt(circle.getAttribute("data-step"));
            circle.classList.remove("active");
            if (stepNum === currentStep) {
                circle.classList.add("active");
            }
        });

        // Update header texts
        currentStepDisplay.textContent = currentStep;
        stepTitleDisplay.textContent = stepTitles[currentStep];

        // Animate fluid progress liquid bar
        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressLiquid.style.width = `${progressPercentage}%`;

        // Update buttons state
        if (currentStep === 1) {
            prevStepBtn.classList.remove("disabled");
            prevStepBtn.removeAttribute("disabled");
            prevStepBtn.innerHTML = `<i class="fas fa-arrow-left"></i> Volver al menu`;
        } else {
            prevStepBtn.classList.remove("disabled");
            prevStepBtn.removeAttribute("disabled");
            prevStepBtn.innerHTML = `<i class="fas fa-arrow-left"></i> Atras`;
        }

        if (currentStep === totalSteps) {
            nextStepBtn.classList.add("hidden");
            generateMoodboard();
            triggerAromaSparks();
        } else {
            nextStepBtn.classList.remove("hidden");
            nextStepBtn.querySelector("span").textContent = "Continuar";
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ==========================================
    // 2. INPUT BINDINGS & SYNCS
    // ==========================================
    brandNameInput.addEventListener("input", (e) => {
        const previousDerived = deriveSignatureText(brandData.name);
        brandData.name = e.target.value.trim() || brandingPresets[selectedCategory].defaultName;
        document.getElementById("live-param-name").textContent = brandData.name;
        // Sync previsualizer text
        document.getElementById("typo-preview-input").value = brandData.name;
        updateTypoPreviews(brandData.name);
        if (signatureLetterInput && (signatureLetterInput.value.trim() === "" || signatureLetterInput.value.trim().toUpperCase() === previousDerived)) {
            const nextSignature = deriveSignatureText(brandData.name);
            signatureLetterInput.value = nextSignature;
            brandData.visualDirection.signatureText = nextSignature;
        }
        applyCategoryCopy(selectedCategory);
        syncVisualLabLetters();
    });

    brandSloganInput.addEventListener("input", (e) => {
        brandData.slogan = e.target.value.trim();
        document.getElementById("live-param-slogan").textContent = brandData.slogan || "Sin definir";
    });

    historyTextarea.addEventListener("input", (e) => {
        brandData.history = e.target.value.trim();
    });

    brandValuePropInput.addEventListener("input", (e) => {
        brandData.valueProp = e.target.value.trim();
    });

    if (signatureLetterInput) {
        signatureLetterInput.addEventListener("input", (e) => {
            const cleaned = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4);
            e.target.value = cleaned;
            brandData.visualDirection.signatureText = cleaned || deriveSignatureText(brandData.name);
            syncVisualLabLetters();
        });
    }

    // Personality Sliders Event listeners init
    sliders.forEach(s => {
        const sliderEl = document.getElementById(s.id);
        sliderEl.addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            brandData.personality[s.key] = val;
            
            document.getElementById(s.displayId).textContent = val;
            document.getElementById(s.liveId).textContent = `${val}%`;
            
            const textDisplay = sliderEl.parentElement.querySelector(".slider-value-display");
            if (val === 50) {
                textDisplay.textContent = `${s.balancedText} (50%)`;
            } else if (val < 45) {
                textDisplay.textContent = `Orientado al polo izquierdo (${100 - val}%)`;
            } else if (val > 55) {
                textDisplay.textContent = `Orientado al polo derecho (${val}%)`;
            } else {
                textDisplay.textContent = `Centrado (${val}%)`;
            }
        });
    });

    // Live Typography preview input sync
    const typoInput = document.getElementById("typo-preview-input");
    typoInput.addEventListener("input", (e) => {
        const text = e.target.value.trim() || brandData.name;
        updateTypoPreviews(text);
    });

    function updateTypoPreviews(text) {
        document.getElementById("sample-cormorant").textContent = text;
        document.getElementById("sample-cinzel").textContent = text.toUpperCase();
        document.getElementById("sample-montserrat").textContent = text.toUpperCase();
        document.getElementById("sample-sacramento").textContent = text;
        const dmSerif = document.getElementById("sample-dm-serif");
        const spaceGrotesk = document.getElementById("sample-space-grotesk");
        if (dmSerif) dmSerif.textContent = text;
        if (spaceGrotesk) spaceGrotesk.textContent = text.toUpperCase();
    }

    // Typography selector cards (Radio-like)
    const typoCards = document.querySelectorAll(".typo-preview-card");
    typoCards.forEach(card => {
        card.addEventListener("click", () => {
            typoCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            
            brandData.fontFamily = card.getAttribute("data-font");
            brandData.fontType = card.getAttribute("data-type");
            
            document.getElementById("live-param-font").textContent = brandData.fontFamily;
        });
    });

    // References input
    if (brandReferencesInput) {
        brandReferencesInput.addEventListener("input", (e) => {
            brandData.references = e.target.value.trim();
        });
    }

    // Custom palette reader
    function readCustomColors() {
        const bgVal = document.getElementById("custom-color-bg").value;
        const priVal = document.getElementById("custom-color-primary").value;
        const accVal = document.getElementById("custom-color-accent").value;
        const softVal = document.getElementById("custom-color-soft").value;

        brandData.paletteColors = [bgVal, priVal, accVal, softVal];
        brandData.paletteName = `Personalizada · Base 1 + Base 2`;
        
        ambientGlow1.style.background = brandData.paletteColors[2];
        ambientGlow2.style.background = brandData.paletteColors[1];
        
        const sidebarSwatches = document.getElementById("live-param-colors").querySelectorAll(".l-swatch");
        sidebarSwatches.forEach((sw, idx) => {
            sw.style.backgroundColor = brandData.paletteColors[idx];
        });
    }

    function syncVisualLabLetters() {
        const letter = brandData.visualDirection.signatureText || deriveSignatureText(brandData.name);
        document.querySelectorAll(".signature-template-symbol").forEach(node => {
            node.textContent = letter;
        });
        document.querySelectorAll(".bottle-preview-label").forEach(node => {
            node.textContent = letter;
        });
    }

    // ==========================================
    // 3. DYNAMIC PRESET LOAD & INJECTION ENGINE
    // ==========================================
    function loadCategoryPresets(categoryKey) {
        const preset = brandingPresets[categoryKey];
        if (!preset) return;

        applyCategoryCopy(categoryKey);

        // 1. Sync header text and welcome crest colors/SVG if necessary
        document.getElementById("header-logo-text").innerHTML = `${preset.title.split(" & ")[0].toUpperCase()} <span class="logo-light">${preset.title.split(" & ")[1] ? preset.title.split(" & ")[1].toUpperCase() : "LAB"}</span>`;
        
        // 2. Set dynamic brand default name and slogan
        brandNameInput.value = preset.defaultName;
        brandSloganInput.value = "";
        brandNameInput.placeholder = `Ej. ${preset.defaultName}`;
        brandSloganInput.placeholder = `Ej. ${preset.defaultSlogan}`;
        
        brandData.name = preset.defaultName;
        brandData.slogan = "";
        brandData.history = "";
        historyTextarea.value = "";
        historyTextarea.placeholder = `¿Cuál es la historia detrás de tu proyecto de ${preset.title}? Describe la chispa que dio vida a este proyecto...`;
        
        // Reset and rebuild selected options arrays in brandData
        brandData.products = [];
        brandData.values = [];
        brandData.target = "";
        brandData.tone = "";
        brandData.paletteName = preset.palettes[0].name;
        brandData.paletteColors = [...preset.palettes[0].colors];
        brandData.fontFamily = "Cormorant Garamond";
        brandData.fontType = "Editorial Serif";
        brandData.logoStyle = "";
        brandData.valueProp = "";
        brandData.regulatory = [];
        brandData.channels = [];
        brandData.references = "";
        brandData.visualDirection = {
            signatureText: (preset.visualLab && preset.visualLab.defaultSignature) || deriveSignatureText(preset.defaultName),
            signatureTemplate: "",
            bottleTemplate: "",
            finish: "",
            frameClass: "frame-cartouche",
            bottleShapeClass: "bottle-shape-rect"
        };
        brandValuePropInput.value = "";
        if (brandReferencesInput) {
            brandReferencesInput.value = "";
        }
        if (signatureLetterInput) {
            signatureLetterInput.value = brandData.visualDirection.signatureText;
        }
        
        // Sync live previsualizer sidebar default labels
        const liveParamName = document.getElementById("live-param-name");
        const liveParamSlogan = document.getElementById("live-param-slogan");
        const liveParamProducts = document.getElementById("live-param-products");
        const liveParamValues = document.getElementById("live-param-values");
        const liveParamFont = document.getElementById("live-param-font");
        const liveParamEje1 = document.getElementById("live-param-eje1");
        const liveParamEje2 = document.getElementById("live-param-eje2");
        const liveParamEje3 = document.getElementById("live-param-eje3");
        const liveParamEje4 = document.getElementById("live-param-eje4");
        
        if (liveParamName) liveParamName.textContent = brandData.name;
        if (liveParamSlogan) liveParamSlogan.textContent = "Sin definir";
        if (liveParamProducts) liveParamProducts.textContent = "Ninguno seleccionado";
        if (liveParamValues) liveParamValues.textContent = "Ninguno seleccionado";
        if (liveParamFont) liveParamFont.textContent = brandData.fontFamily;
        if (liveParamEje1) liveParamEje1.textContent = "50%";
        if (liveParamEje2) liveParamEje2.textContent = "50%";
        if (liveParamEje3) liveParamEje3.textContent = "50%";
        if (liveParamEje4) liveParamEje4.textContent = "50%";
        
        // Sync dynamic side panel labels
        const sidebarTitleEl = document.querySelector(".sidebar-card-title");
        const formulaSpinnerEl = document.querySelector(".alembic-status-box span");

        if (sidebarTitleEl) {
            sidebarTitleEl.innerHTML = `<i class="fas ${preset.sidebarIcon}"></i> ${preset.sidebarTitle}`;
        }
        if (formulaSpinnerEl) {
            formulaSpinnerEl.textContent = preset.sidebarState;
        }
        
        // Reset personality sliders to 50
        sliders.forEach(s => {
            const sliderEl = document.getElementById(s.id);
            const displayEl = document.getElementById(s.displayId);
            if (!sliderEl) {
                console.warn(`Slider no encontrado: ${s.id}`);
                return;
            }

            sliderEl.value = 50;

            if (displayEl) {
                displayEl.textContent = "50";
            } else {
                console.warn(`Display de slider no encontrado: ${s.displayId}`);
            }

            const textDisplay = sliderEl.parentElement?.querySelector(".slider-value-display");
            if (textDisplay) {
                textDisplay.textContent = `${s.balancedText} (${sliderEl.value}%)`;
            }
            brandData.personality[s.key] = 50;
        });
        
        // Personality Slider labels (Pole descriptions)
        const personalityLabelPairs = [
            [preset.personalityLabels.eje1Left, preset.personalityLabels.eje1Right],
            [preset.personalityLabels.eje2Left, preset.personalityLabels.eje2Right],
            [preset.personalityLabels.eje3Left, preset.personalityLabels.eje3Right],
            [preset.personalityLabels.eje4Left, preset.personalityLabels.eje4Right]
        ];

        sliders.forEach((slider, index) => {
            const sliderRoot = document.getElementById(slider.id)?.parentElement;
            if (!sliderRoot) return;

            const firstLabel = sliderRoot.querySelector(".slider-side-label:first-child");
            const lastLabel = sliderRoot.querySelector(".slider-side-label:last-child");
            const [leftLabel, rightLabel] = personalityLabelPairs[index];

            if (firstLabel) firstLabel.textContent = leftLabel;
            if (lastLabel) lastLabel.textContent = rightLabel;
        });

        document.querySelectorAll(".typo-preview-card").forEach((card, idx) => {
            card.classList.toggle("active", idx === 0);
        });

        // 3. Inject Products Grid
        const productsContainer = document.getElementById("products-grid-container");
        productsContainer.innerHTML = preset.products.map(p => `
            <div class="grid-card-option" data-value="${p.value}">
                <div class="option-icon"><i class="fas ${p.icon}"></i></div>
                <h5>${p.title}</h5>
                <p>${p.desc}</p>
            </div>
        `).join("");
        
        // 4. Inject Values pills
        const valuesContainer = document.getElementById("values-pills-container");
        valuesContainer.innerHTML = preset.values.map(v => `
            <div class="value-pill" data-value="${v.value}">
                <span class="pill-dot" style="background-color: var(${v.color});"></span>
                <span>${v.text}</span>
            </div>
        `).join("");

        // 5. Inject Targets Grid
        const targetsContainer = document.getElementById("targets-grid-container");
        targetsContainer.innerHTML = preset.targets.map(t => `
            <div class="target-card" data-value="${t.value}">
                <div class="target-icon"><i class="fas ${t.icon}"></i></div>
                <h5>${t.title}</h5>
                <p>${t.desc}</p>
            </div>
        `).join("");

        // 6. Inject Tones Grid
        const tonesContainer = document.getElementById("tones-grid-container");
        tonesContainer.innerHTML = preset.tones.map(t => `
            <div class="tone-card-option" data-value="${t.value}">
                <h5>${t.title}</h5>
                <p>${t.desc}</p>
            </div>
        `).join("");

        // 7. Inject Color Palettes
        const palettesContainer = document.getElementById("palettes-list-container");
        let palettesHtml = preset.palettes.map((pal, idx) => `
            <div class="palette-card ${idx === 0 ? 'active' : ''}" data-palette="${pal.name}" data-colors="${pal.colors.join(",")}">
                <div class="palette-header-row">
                    <h5>${pal.name}</h5>
                    <span class="badge-palette">${pal.tag}</span>
                </div>
                <div class="color-swatches-strip">
                    ${pal.colors.map(color => `<div class="swatch" style="background-color: ${color};" title="${color}"></div>`).join("")}
                </div>
                <p class="palette-desc">${pal.desc}</p>
            </div>
        `).join("");

        // Add custom palette selector card
        palettesHtml += `
            <div class="palette-card custom-selector-card" data-palette="Personalizada">
                <div class="palette-header-row">
                    <h5>Paleta a Eleccion</h5>
                    <span class="badge-palette">Editable</span>
                </div>
                <div class="custom-pickers-row">
                    <div class="picker-container">
                        <label>Base 1</label>
                        <input type="color" id="custom-color-bg" value="#121214" />
                    </div>
                    <div class="picker-container">
                        <label>Base 2</label>
                        <input type="color" id="custom-color-primary" value="${preset.palettes[0].colors[1]}" />
                    </div>
                    <div class="picker-container">
                        <label>Acento</label>
                        <input type="color" id="custom-color-accent" value="${preset.palettes[0].colors[2]}" />
                    </div>
                    <div class="picker-container">
                        <label>Suave</label>
                        <input type="color" id="custom-color-soft" value="#F4F6F9" />
                    </div>
                </div>
                <p class="palette-desc">Arma tu paleta a eleccion. Los dos primeros colores seran la base principal que mas se buscara conservar; los otros dos funcionan como acento y apoyo visual.</p>
            </div>
        `;
        palettesContainer.innerHTML = palettesHtml;

        // 8. Inject Logo Styles
        const logoStylesContainer = document.getElementById("logo-style-grid-container");
        logoStylesContainer.innerHTML = preset.logoStyles.map(ls => `
            <div class="logo-style-card" data-value="${ls.value}">
                <div class="logo-style-illustration">
                    ${ls.svg ? ls.svg : `<div class="logo-style-illustration font-serif-cormorant" style="font-size:1.6rem; letter-spacing:0.1em; display:flex; align-items:center; justify-content:center; height:100%; color:var(--gold-primary);">${ls.initial}</div>`}
                </div>
                <h5>${ls.text}</h5>
                <p>${ls.desc}</p>
            </div>
        `).join("");

        const sectorLabTitle = document.getElementById("sector-lab-title");
        const sectorLabBadge = document.getElementById("sector-lab-badge");
        const sectorLabIntro = document.getElementById("sector-lab-intro");
        const sectorLabPlaceholder = document.getElementById("sector-lab-placeholder");
        const sectorLabContent = document.getElementById("sector-lab-content");
        const signatureTemplateContainer = document.getElementById("signature-template-grid-container");
        const bottleTemplateContainer = document.getElementById("bottle-template-grid-container");
        const finishContainer = document.getElementById("finish-grid-container");

        if (preset.visualLab) {
            sectorLabTitle.textContent = preset.visualLab.title;
            sectorLabBadge.textContent = preset.visualLab.badge;
            sectorLabIntro.textContent = preset.visualLab.intro;
            sectorLabPlaceholder.classList.add("hidden");
            sectorLabContent.classList.remove("hidden");

            signatureTemplateContainer.innerHTML = preset.visualLab.signatureTemplates.map((item, idx) => `
                <div class="visual-option-card signature-template-card ${idx === 0 ? "selected" : ""}" data-value="${item.value}" data-frame-class="${item.frameClass}">
                    <div class="visual-option-topline">
                        <span class="visual-option-badge">${item.badge}</span>
                    </div>
                    <div class="signature-template-preview">
                        <div class="signature-template-symbol ${item.frameClass}">${idx === 0 ? brandData.visualDirection.signatureText : item.preview}</div>
                    </div>
                    <h6>${item.title}</h6>
                    <p>${item.desc}</p>
                </div>
            `).join("");

            bottleTemplateContainer.innerHTML = preset.visualLab.bottleTemplates.map((item, idx) => `
                <div class="visual-option-card bottle-template-card ${idx === 0 ? "selected" : ""}" data-value="${item.value}" data-shape-class="${item.shapeClass}" data-frame-class="${item.frameClass}">
                    <div class="visual-option-topline">
                        <span class="visual-option-badge">${item.badge}</span>
                    </div>
                    <div class="bottle-template-preview">
                        <div class="bottle-shape ${item.shapeClass}">
                            <div class="bottle-preview-label ${item.frameClass}">${brandData.visualDirection.signatureText}</div>
                        </div>
                    </div>
                    <h6>${item.title}</h6>
                    <p>${item.desc}</p>
                </div>
            `).join("");

            finishContainer.innerHTML = preset.visualLab.finishes.map((item, idx) => `
                <div class="finish-chip ${idx === 0 ? "selected" : ""}" data-value="${item.value}">
                    <strong>${item.title}</strong>
                    <span>${item.desc}</span>
                </div>
            `).join("");

            brandData.visualDirection.signatureTemplate = preset.visualLab.signatureTemplates[0].value;
            brandData.visualDirection.frameClass = preset.visualLab.signatureTemplates[0].frameClass;
            brandData.visualDirection.bottleTemplate = preset.visualLab.bottleTemplates[0].value;
            brandData.visualDirection.bottleShapeClass = preset.visualLab.bottleTemplates[0].shapeClass;
            brandData.visualDirection.finish = preset.visualLab.finishes[0].value;
        }

        // Dynamic sidebar labels & icons based on sector
        const sidebarProductsLabels = {
            perfumeria: { icon: "fa-leaf", text: "Ingredientes:" },
            gastronomia: { icon: "fa-utensils", text: "Líneas de Oferta:" },
            abogados: { icon: "fa-scale-balanced", text: "Áreas Práctica:" },
            boutique: { icon: "fa-shirt", text: "Colecciones:" }
        };
        const liveParamProductsLabel = document.getElementById("live-param-products-label");
        if (liveParamProductsLabel) {
            const info = sidebarProductsLabels[categoryKey] || { icon: "fa-leaf", text: "Ingredientes:" };
            liveParamProductsLabel.innerHTML = `<i class="fas ${info.icon}" id="live-param-products-icon"></i> ${info.text}`;
        }

        syncVisualLabLetters();

        // 9. Inject Regulatory Checkbox list
        const regulatoryContainer = document.getElementById("regulatory-checklist-container");
        regulatoryContainer.innerHTML = preset.regulatory.map(reg => `
            <label class="checkbox-wrapper-lux">
                <input type="checkbox" id="${reg.id}" value="${reg.value}" ${reg.checked ? 'checked' : ''} />
                <span class="checkbox-custom"></span>
                <div class="checkbox-label-content">
                    <strong>${reg.title}</strong>
                    <p>${reg.desc}</p>
                </div>
            </label>
        `).join("");

        // 10. Inject Sales Channels grid
        const channelsContainer = document.getElementById("channels-grid-container");
        channelsContainer.innerHTML = preset.channels.map(ch => `
            <label class="channel-card-checkbox">
                <input type="checkbox" name="sales-channels" value="${ch.value}" ${ch.checked ? 'checked' : ''} />
                <div class="channel-card-content">
                    <div class="channel-icon"><i class="fas ${ch.icon}"></i></div>
                    <h5>${ch.text}</h5>
                </div>
            </label>
        `).join("");

        // Re-attach event listeners
        bindDynamicEvents(categoryKey);
        
        // Sync default colors initially
        ambientGlow1.style.background = brandData.paletteColors[2];
        ambientGlow2.style.background = brandData.paletteColors[1];
        
        const sidebarSwatches = document.getElementById("live-param-colors").querySelectorAll(".l-swatch");
        sidebarSwatches.forEach((sw, idx) => {
            if (brandData.paletteColors[idx]) {
                sw.style.backgroundColor = brandData.paletteColors[idx];
            }
        });
        
        // Load default checked items
        preset.regulatory.forEach(reg => {
            if (reg.checked) {
                brandData.regulatory.push(reg.value);
            }
        });
        updatePrioritySummary();

        preset.channels.forEach(ch => {
            if (ch.checked) {
                brandData.channels.push(ch.value);
            }
        });
        
        updateTypoPreviews(brandData.name);
    }

    function bindDynamicEvents(categoryKey) {
        const preset = brandingPresets[categoryKey];
        
        // Product category clicking
        const newProductCards = document.querySelectorAll(".grid-card-option");
        newProductCards.forEach(card => {
            card.addEventListener("click", () => {
                const val = card.getAttribute("data-value");
                if (card.classList.contains("selected")) {
                    card.classList.remove("selected");
                    brandData.products = brandData.products.filter(p => p !== val);
                } else {
                    card.classList.add("selected");
                    brandData.products.push(val);
                }
                document.getElementById("live-param-products").textContent = brandData.products.join(", ") || "Ninguno seleccionado";
            });
        });

        // Value pills clicking
        const newValuePills = document.querySelectorAll(".value-pill");
        newValuePills.forEach(pill => {
            pill.addEventListener("click", () => {
                const val = pill.getAttribute("data-value");
                if (pill.classList.contains("selected")) {
                    pill.classList.remove("selected");
                    brandData.values = brandData.values.filter(v => v !== val);
                } else {
                    if (brandData.values.length >= 3) {
                        showToast("Solo puedes seleccionar exactamente 3 valores de marca.");
                        return;
                    }
                    pill.classList.add("selected");
                    brandData.values.push(val);
                }
                document.getElementById("live-param-values").textContent = brandData.values.join(", ") || "Ninguno seleccionado";
            });
        });

        // Target client cards clicking
        const newTargetCards = document.querySelectorAll(".target-card");
        newTargetCards.forEach(card => {
            card.addEventListener("click", () => {
                newTargetCards.forEach(c => c.classList.remove("selected"));
                card.classList.add("selected");
                brandData.target = card.getAttribute("data-value");
            });
        });

        // Communication tones card clicking
        const newToneOptions = document.querySelectorAll(".tone-card-option");
        newToneOptions.forEach(opt => {
            opt.addEventListener("click", () => {
                newToneOptions.forEach(o => o.classList.remove("selected"));
                opt.classList.add("selected");
                brandData.tone = opt.getAttribute("data-value");
            });
        });

        // Palette card clicking
        const newPaletteCards = document.querySelectorAll(".palette-card");
        newPaletteCards.forEach(card => {
            card.addEventListener("click", () => {
                newPaletteCards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                
                const paletteName = card.getAttribute("data-palette");
                brandData.paletteName = paletteName;
                
                if (paletteName !== "Personalizada") {
                    const colorsStr = card.getAttribute("data-colors");
                    brandData.paletteColors = colorsStr.split(",");
                } else {
                    readCustomColors();
                }
                
                ambientGlow1.style.background = brandData.paletteColors[2];
                ambientGlow2.style.background = brandData.paletteColors[1];
                
                const sidebarSwatches = document.getElementById("live-param-colors").querySelectorAll(".l-swatch");
                sidebarSwatches.forEach((sw, idx) => {
                    sw.style.backgroundColor = brandData.paletteColors[idx];
                });
            });
        });

        // Custom Pickers listeners
        const newBg = document.getElementById("custom-color-bg");
        const newPri = document.getElementById("custom-color-primary");
        const newAcc = document.getElementById("custom-color-accent");
        const newSoft = document.getElementById("custom-color-soft");

        [newBg, newPri, newAcc, newSoft].forEach(picker => {
            if (picker) {
                picker.addEventListener("input", () => {
                    const customCard = document.querySelector(".custom-selector-card");
                    if (customCard && !customCard.classList.contains("active")) {
                        customCard.click();
                    } else {
                        readCustomColors();
                    }
                });
            }
        });

        // Logo Style selection
        const newLogoCards = document.querySelectorAll(".logo-style-card");
        newLogoCards.forEach(card => {
            card.addEventListener("click", () => {
                newLogoCards.forEach(c => c.classList.remove("selected"));
                card.classList.add("selected");
                brandData.logoStyle = card.getAttribute("data-value");
            });
        });

        const signatureCards = document.querySelectorAll(".signature-template-card");
        signatureCards.forEach(card => {
            card.addEventListener("click", () => {
                signatureCards.forEach(c => c.classList.remove("selected"));
                card.classList.add("selected");
                brandData.visualDirection.signatureTemplate = card.getAttribute("data-value");
                brandData.visualDirection.frameClass = card.getAttribute("data-frame-class") || "frame-cartouche";
            });
        });

        const bottleCards = document.querySelectorAll(".bottle-template-card");
        bottleCards.forEach(card => {
            card.addEventListener("click", () => {
                bottleCards.forEach(c => c.classList.remove("selected"));
                card.classList.add("selected");
                brandData.visualDirection.bottleTemplate = card.getAttribute("data-value");
                brandData.visualDirection.bottleShapeClass = card.getAttribute("data-shape-class") || "bottle-shape-rect";
                const cardFrame = card.getAttribute("data-frame-class");
                if (cardFrame && !brandData.visualDirection.signatureTemplate) {
                    brandData.visualDirection.frameClass = cardFrame;
                }
            });
        });

        const finishChips = document.querySelectorAll(".finish-chip");
        finishChips.forEach(chip => {
            chip.addEventListener("click", () => {
                finishChips.forEach(item => item.classList.remove("selected"));
                chip.classList.add("selected");
                brandData.visualDirection.finish = chip.getAttribute("data-value");
            });
        });

        // Regulatory checkboxes listeners
        preset.regulatory.forEach(reg => {
            const chk = document.getElementById(reg.id);
            if (chk) {
                chk.addEventListener("change", () => {
                    brandData.regulatory = [];
                    preset.regulatory.forEach(r => {
                        const c = document.getElementById(r.id);
                        if (c && c.checked) {
                            brandData.regulatory.push(c.value);
                        }
                    });
                    updatePrioritySummary();
                });
            }
        });

        // Sales channels listeners
        const newChannelBoxes = document.querySelectorAll("input[name='sales-channels']");
        newChannelBoxes.forEach(chk => {
            chk.addEventListener("change", () => {
                brandData.channels = [];
                newChannelBoxes.forEach(c => {
                    if (c.checked) {
                        brandData.channels.push(c.value);
                    }
                });
            });
        });
    }

    // ==========================================
    // 4. PORTRAIT MOODBOARD GENERATOR (STEP 5)
    // ==========================================
    function generateMoodboard() {
        const preset = brandingPresets[selectedCategory];
        const visualPreset = getCurrentVisualPreset();
        
        // Brand details headers
        document.getElementById("summary-brand-display").textContent = brandData.name;
        
        const fallbackSlogans = {
            perfumeria: "Laboratorio de Alquimia Olfativa",
            gastronomia: "Taller Gastronómico de Autor",
            abogados: "Servicios Jurídicos y Protección Patrimonial",
            boutique: "Colección Textil y Costura Lenta"
        };
        document.getElementById("summary-slogan-display").textContent = brandData.slogan || fallbackSlogans[selectedCategory];

        // Color Swatches
        const colorStrip = document.getElementById("summary-colors-strip");
        colorStrip.innerHTML = "";
        brandData.paletteColors.forEach(color => {
            const dot = document.createElement("div");
            dot.className = "moodboard-color-dot";
            dot.style.backgroundColor = color;
            dot.title = color;
            colorStrip.appendChild(dot);
        });
        document.getElementById("summary-palette-name").textContent = `${brandData.paletteName} (${brandData.paletteColors.join(", ")})`;

        // Font Family Preview
        const fontPreview = document.getElementById("summary-font-preview");
        fontPreview.textContent = brandData.name;
        fontPreview.className = "moodboard-font-preview"; // Reset
        
        if (brandData.fontFamily === "Cormorant Garamond") {
            fontPreview.classList.add("font-serif-cormorant");
        } else if (brandData.fontFamily === "Cinzel") {
            fontPreview.classList.add("font-serif-cinzel");
            fontPreview.textContent = brandData.name.toUpperCase();
        } else if (brandData.fontFamily === "Montserrat") {
            fontPreview.classList.add("font-sans-montserrat");
            fontPreview.textContent = brandData.name.toUpperCase();
        } else if (brandData.fontFamily === "Sacramento") {
            fontPreview.classList.add("font-script-sacramento");
        } else if (brandData.fontFamily === "DM Serif Display") {
            fontPreview.classList.add("font-serif-dm");
        } else if (brandData.fontFamily === "Space Grotesk") {
            fontPreview.classList.add("font-sans-space");
            fontPreview.textContent = brandData.name.toUpperCase();
        }
        document.getElementById("summary-font-style").textContent = brandData.fontType;

        // Core values list
        const valuesList = document.getElementById("summary-values-list");
        valuesList.innerHTML = "";
        brandData.values.forEach(val => {
            const li = document.createElement("li");
            li.innerHTML = `<i class="fas fa-circle"></i> <span>${val}</span>`;
            valuesList.appendChild(li);
        });

        // Products selection tags
        const productsList = document.getElementById("summary-products-list");
        productsList.innerHTML = "";
        brandData.products.forEach(p => {
            const span = document.createElement("span");
            span.className = "moodboard-tag";
            span.innerHTML = `<i class="fas ${preset.sidebarIcon}"></i> ${p}`;
            productsList.appendChild(span);
        });

        // Story Text
        const storyDisplay = document.getElementById("summary-story-text");
        if (brandData.history) {
            storyDisplay.textContent = `"${brandData.history}"`;
        } else {
            storyDisplay.textContent = `"${preset.fallbackStory}"`;
        }

        // Personality radar-fills
        document.getElementById("radar-fill-1").style.width = `${brandData.personality.modernity}%`;
        document.getElementById("radar-fill-2").style.width = `${brandData.personality.science}%`;
        document.getElementById("radar-fill-3").style.width = `${brandData.personality.luxury}%`;
        document.getElementById("radar-fill-4").style.width = `${brandData.personality.exclusivity}%`;

        // Brand priorities
        const regulatoryList = document.getElementById("summary-regulatory-list");
        regulatoryList.innerHTML = "";
        brandData.regulatory.forEach(reg => {
            const item = document.createElement("div");
            item.className = "moodboard-check-item";
            item.innerHTML = `<i class="fas fa-check-double"></i> <span>${reg}</span>`;
            regulatoryList.appendChild(item);
        });
        if (brandData.regulatory.length === 0) {
            regulatoryList.innerHTML = `<div class="moodboard-check-item" style="color:var(--text-muted);">Sin prioridades definidas.</div>`;
        }

        if (brandData.regulatory.length === 0) {
            regulatoryList.innerHTML = `<div class="moodboard-check-item" style="color:var(--text-muted);">Sin prioridades de marca definidas.</div>`;
        }

        // Sales channels
        const channelsList = document.getElementById("summary-channels-list");
        channelsList.innerHTML = "";
        brandData.channels.forEach(ch => {
            const tag = document.createElement("span");
            tag.className = "moodboard-tag";
            tag.innerHTML = `<i class="fas fa-route"></i> ${ch}`;
            channelsList.appendChild(tag);
        });

        const signatureText = brandData.visualDirection.signatureText || deriveSignatureText(brandData.name);
        const signatureBox = document.querySelector("#summary-visual-signature .signature-mark-box");
        const signatureStyle = document.getElementById("summary-signature-style");
        const finishStyle = document.getElementById("summary-finish-style");
        const bottleShape = document.getElementById("summary-bottle-shape");
        const bottleFrame = document.getElementById("summary-bottle-label-frame");
        const bottleLetter = document.getElementById("summary-bottle-letter");
        const bottleCap = document.getElementById("summary-bottle-cap");
        const bottleCaption = document.getElementById("summary-bottle-caption");
        const disclaimer = document.getElementById("reference-disclaimer");

        signatureBox.textContent = signatureText;
        signatureStyle.textContent = brandData.visualDirection.signatureTemplate || "Direccion visual inicial";
        finishStyle.textContent = brandData.visualDirection.finish || "Acabado por definir";
        
        // Remove existing frame classes and add the active one
        signatureBox.className = "signature-mark-box " + (brandData.visualDirection.frameClass || "frame-cartouche");
        
        // Apply inline styles based on finish colors
        const finishColors = getFinishColors(brandData.visualDirection.finish);
        if (brandData.visualDirection.frameClass === "frame-seal") {
            signatureBox.style.backgroundColor = finishColors.hex;
            signatureBox.style.color = finishColors.hex === "#5C1D24" ? "#D4AF37" : "#FFFFFF";
            signatureBox.style.borderColor = finishColors.hex === "#5C1D24" ? "#D4AF37" : "rgba(255, 255, 255, 0.4)";
        } else {
            signatureBox.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
            signatureBox.style.color = finishColors.hex;
            signatureBox.style.borderColor = finishColors.hex;
        }
        signatureBox.style.boxShadow = `0 10px 30px ${finishColors.shadow}, inset 0 0 12px rgba(255,255,255,0.02)`;

        // Update dynamic eyebrows based on active sector
        const categoryEyebrows = {
            perfumeria: {
                personality: "Carácter Olfativo & Psicológico",
                products: "Universo de Aromas",
                story: "La Chispa e Inspiración del Fundador",
                regulatory: "Gobernanza & Cumplimiento Técnico",
                channels: "Ruta Comercial"
            },
            gastronomia: {
                personality: "ADN Gastronómico & Psicológico",
                products: "Líneas de Oferta Culinaria",
                story: "La Chispa & Filosofía de la Mesa",
                regulatory: "Gobernanza Alimenticia & BPM",
                channels: "Ruta Comercial & Distribución"
            },
            abogados: {
                personality: "ADN Institucional & Posicionamiento",
                products: "Áreas de Práctica Jurídica",
                story: "La Chispa & Filosofía del Despacho",
                regulatory: "Gobernanza Legal & Cumplimiento UAFE",
                channels: "Ruta Profesional & Despacho"
            },
            boutique: {
                personality: "ADN de Colección & Concepto Moda",
                products: "Líneas de Producto & Colección",
                story: "La Chispa, Inspiración & Telar",
                regulatory: "Gobernanza Textil & Normativa INEN",
                channels: "Canales de Venta & Atelier"
            }
        };
        categoryEyebrows.perfumeria.regulatory = "Prioridades para Sacar la Marca Adelante";
        categoryEyebrows.gastronomia.regulatory = "Prioridades para Estructurar la Experiencia";
        categoryEyebrows.abogados.regulatory = "Prioridades para Consolidar la Firma";
        categoryEyebrows.boutique.regulatory = "Prioridades para Potenciar la Marca";

        const eyebrows = categoryEyebrows[selectedCategory] || categoryEyebrows.perfumeria;
        const personalityEb = document.getElementById("summary-personality-eyebrow");
        const productsEb = document.getElementById("summary-products-eyebrow");
        const storyEb = document.getElementById("summary-story-eyebrow");
        const regulatoryEb = document.getElementById("summary-regulatory-eyebrow");
        const channelsEb = document.getElementById("summary-channels-eyebrow");

        if (personalityEb) personalityEb.textContent = eyebrows.personality;
        if (productsEb) productsEb.textContent = eyebrows.products;
        if (storyEb) storyEb.textContent = eyebrows.story;
        if (regulatoryEb) regulatoryEb.textContent = eyebrows.regulatory;
        if (channelsEb) channelsEb.textContent = eyebrows.channels;

        bottleLetter.textContent = signatureText;
        bottleShape.className = `summary-bottle-shape ${brandData.visualDirection.bottleShapeClass || "bottle-shape-rect"}`;
        bottleFrame.className = `summary-bottle-label-frame ${brandData.visualDirection.frameClass || "frame-cartouche"}`;
        bottleCap.style.background = getFinishCapStyle(brandData.visualDirection.finish);
        bottleCaption.textContent = brandData.visualDirection.bottleTemplate || "Frasco de referencia";
        disclaimer.textContent = (visualPreset && visualPreset.disclaimer) || "Esto no es la marca final en si. Es una referencia visual y estrategica para alinear gustos, lenguaje y direccion creativa antes del diseno formal.";
    }

    // ==========================================
    // 5. EXPORT & WHATSAPP INTEGRATION
    // ==========================================
    const sendWhatsappBtn = document.getElementById("send-whatsapp-btn");
    const exportPdfBtn = document.getElementById("export-pdf-btn");
    const successOverlay = document.getElementById("success-overlay");
    
    sendWhatsappBtn.addEventListener("click", () => sendToWhatsApp(true));
    exportPdfBtn.addEventListener("click", () => generateTechnicalPDF(false));

    document.getElementById("success-pdf-btn").addEventListener("click", () => generateTechnicalPDF(false));
    document.getElementById("success-whatsapp-btn").addEventListener("click", () => sendToWhatsApp(false));
    document.getElementById("close-success-btn").addEventListener("click", () => successOverlay.classList.add("hidden"));

    // WhatsApp Message Composer (Ecuador local standard hook)
    function sendToWhatsApp(downloadPdf = true) {
        if (downloadPdf) {
            generateTechnicalPDF(true);
        }
        
        const phone = "593963036594"; // Marco Pérez Designs Ecuador number
        const preset = brandingPresets[selectedCategory];
        
        let message = `🧪 *BRIEF DE MARCA - ${preset.title.toUpperCase()}*\n`;
        message += `===================================\n\n`;
        message += `👑 *Nombre de Marca:* ${brandData.name}\n`;
        if (brandData.slogan) {
            message += `✍️ *Slogan/Subtexto:* "${brandData.slogan}"\n`;
        }
        
        const productLabels = {
            perfumeria: "Universo Aromático",
            gastronomia: "Universo Gastronómico",
            abogados: "Área Jurídica",
            boutique: "Líneas de Moda"
        };
        message += `🍃 *${productLabels[selectedCategory]}:* ${brandData.products.join(", ")}\n`;
        message += `💎 *Valores Nucleares:* ${brandData.values.join(" | ")}\n\n`;
        
        message += `🎯 *Cliente Ideal:* ${brandData.target}\n`;
        message += `🎭 *ADN de Personalidad:*\n`;
        message += `   • Tradicional vs Moderno: ${brandData.personality.modernity}%\n`;
        message += `   • Ancestral vs Innovación: ${brandData.personality.science}%\n`;
        message += `   • Artesanía vs Lujo: ${brandData.personality.luxury}%\n`;
        message += `   • Familiar vs Exclusivo: ${brandData.personality.exclusivity}%\n`;
        message += `🗣️ *Tono de Voz:* ${brandData.tone}\n\n`;
        
        message += `🎨 *Estética Destilada:*\n`;
        message += `   • Paleta Elegida: ${brandData.paletteName}\n`;
        message += `   • Colores Hex: ${brandData.paletteColors.join(" | ")}\n`;
        message += `   • Logotipo Font: ${brandData.fontFamily} (${brandData.fontType})\n`;
        message += `   • Dirección de Logotipo: ${brandData.logoStyle}\n\n`;
        
        message += `🛡️ *Parámetros Técnicos & Calidad:*\n`;
        message += `   • Prioridades clave: ${brandData.regulatory.join(", ") || "Sin definir"}\n`;
        message += `   • Canales: ${brandData.channels.join(", ")}\n`;
        if (brandData.references) {
            message += `💡 *Referencias Admiradas:* ${brandData.references}\n`;
        }
        
        if (brandData.history) {
            message += `\n📖 *Chispa Fundacional:*\n_"${brandData.history}"_\n`;
        }
        
        message += `\n-----------------------------------\n`;
        message += `✨ _Brief interactivo generado bajo MP Designs Portafolio (2026)_`;

        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank");
        
        triggerCelebration();
    }

    // High Fidelity jsPDF Exporter


    // ==========================================
    // 6. CELEBRATION & TOAST UTILITIES
    // ==========================================
    function triggerCelebration() {
        successOverlay.classList.remove("hidden");
        
        if (window.confetti) {
            window.confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ["#D4AF37", "#8F9D96", "#1F2833", "#F4F6F9"]
            });
        }
    }

    function triggerAromaSparks() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const bubble = {
                    x: Math.random() * canvas.width,
                    y: canvas.height + 20,
                    size: Math.random() * 15 + 5,
                    speedY: -(Math.random() * 4 + 2),
                    color: brandData.paletteColors[2] || "#D4AF37",
                    alpha: Math.random() * 0.5 + 0.3
                };
                particlesArray.push(new ParticleInstance(bubble));
            }, i * 100);
        }
    }

    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast-message";
        toast.innerHTML = `<i class="fas fa-circle-exclamation"></i> <span>${message}</span>`;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add("show"), 50);
        
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

    // Toast styles injected dynamically
    const styleNode = document.createElement("style");
    styleNode.textContent = `
        .toast-message {
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translate(-50%, 50px);
            background: rgba(18, 20, 26, 0.95);
            border: 1px solid var(--gold-primary);
            box-shadow: 0 5px 25px rgba(212, 175, 55, 0.25);
            padding: 14px 28px;
            border-radius: 30px;
            color: var(--text-main);
            font-size: 0.85rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 2000;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
        }
        .toast-message.show {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        .toast-message i {
            color: var(--gold-primary);
        }
    `;
    document.head.appendChild(styleNode);

    // ==========================================
    // 7. HTML5 CANVAS PARTICLES ANIMATION
    // ==========================================
    const canvas = document.getElementById("aroma-particles");
    const ctx = canvas.getContext("2d");
    
    let particlesArray = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class ParticleInstance {
        constructor(custom) {
            this.x = custom ? custom.x : Math.random() * canvas.width;
            this.y = custom ? custom.y : Math.random() * canvas.height;
            this.size = custom ? custom.size : Math.random() * 8 + 3;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = custom ? custom.speedY : -(Math.random() * 0.8 + 0.3);
            // Adaptive colors syncing in real time to the selected brand colors!
            this.color = custom ? custom.color : (Math.random() > 0.5 ? brandData.paletteColors[2] : brandData.paletteColors[1]);
            this.alpha = custom ? custom.alpha : Math.random() * 0.2 + 0.05;
            this.pulseSpeed = Math.random() * 0.02 + 0.005;
            this.pulseDir = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            this.speedX += (Math.random() * 0.1 - 0.05);
            if (this.speedX > 0.6) this.speedX = 0.6;
            if (this.speedX < -0.6) this.speedX = -0.6;
            
            this.alpha += this.pulseSpeed * this.pulseDir;
            if (this.alpha > 0.35 || this.alpha < 0.02) {
                this.pulseDir *= -1;
            }
            if (this.alpha < 0) this.alpha = 0.01;
            
            if (this.y < -20) {
                this.y = canvas.height + 20;
                this.x = Math.random() * canvas.width;
                this.speedY = -(Math.random() * 0.8 + 0.3);
                this.color = Math.random() > 0.5 ? brandData.paletteColors[2] : brandData.paletteColors[1];
            }
            if (this.x < -20 || this.x > canvas.width + 20) {
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            
            const rgb = hexToRgb(this.color);
            if (rgb) {
                grad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.alpha * 1.5})`);
                grad.addColorStop(0.7, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${this.alpha * 0.4})`);
                grad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
            } else {
                grad.addColorStop(0, `rgba(212, 175, 55, ${this.alpha})`);
                grad.addColorStop(1, "rgba(212, 175, 55, 0)");
            }
            
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.restore();
        }
    }

    function initParticles() {
        particlesArray = [];
        const count = Math.min(Math.floor(canvas.width / 24), 70);
        for (let i = 0; i < count; i++) {
            particlesArray.push(new ParticleInstance());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function generateTechnicalPDF(isSilent = false) {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        const preset = brandingPresets[selectedCategory];
        const visualPreset = getCurrentVisualPreset();
        const primaryColor = hexToRgb(brandData.paletteColors[1] || "#8A9A86");
        const accentColor = hexToRgb(brandData.paletteColors[2] || "#D4AF37");
        const darkColor = { r: 18, g: 20, b: 26 };
        const signatureText = brandData.visualDirection.signatureText || deriveSignatureText(brandData.name);
        const today = new Date().toLocaleDateString("es-EC", { year: "numeric", month: "long", day: "numeric" });
        const fallbackSlogans = {
            perfumeria: "Laboratorio de Alquimia Olfativa",
            gastronomia: "Taller Gastronomico de Autor",
            abogados: "Servicios Juridicos y Proteccion Patrimonial",
            boutique: "Coleccion Textil y Costura Lenta"
        };
        const referenceDisclaimer = (visualPreset && visualPreset.disclaimer) || `Esto no es la marca final en si. Es una referencia visual y estrategica para alinear decisiones antes del diseno formal de ${brandData.name}.`;

        const drawField = (label, value, x, y, width) => {
            pdf.setFont("Helvetica", "bold");
            pdf.setFontSize(8);
            pdf.setTextColor(95, 95, 95);
            pdf.text(label, x, y);
            pdf.setFont("Helvetica", "normal");
            pdf.setTextColor(45, 45, 45);
            const lines = pdf.splitTextToSize(value || "Sin definir", width);
            pdf.text(lines, x, y + 4.5);
            return y + 4.5 + (lines.length * 4.2);
        };

        const drawPersonalityBar = (label, value, x, y, width) => {
            pdf.setFont("Helvetica", "bold");
            pdf.setFontSize(8);
            pdf.setTextColor(70, 70, 70);
            pdf.text(label, x, y);
            pdf.setDrawColor(220, 220, 220);
            pdf.setFillColor(245, 245, 245);
            pdf.roundedRect(x, y + 2.5, width, 3.5, 1.2, 1.2, "FD");
            pdf.setFillColor(accentColor.r, accentColor.g, accentColor.b);
            pdf.roundedRect(x, y + 2.5, Math.max(4, width * (value / 100)), 3.5, 1.2, 1.2, "F");
            pdf.setFont("Helvetica", "normal");
            pdf.text(`${value}%`, x + width + 3, y + 5.4);
        };

        const drawBrandBadge = (x, y) => {
            pdf.setFillColor(255, 255, 255);
            pdf.roundedRect(x, y, 62, 98, 6, 6, "F");
            pdf.setDrawColor(235, 235, 235);
            pdf.roundedRect(x, y, 62, 98, 6, 6, "S");

            const cx = x + 31;
            const cy = y + 42;
            const frameClass = brandData.visualDirection.frameClass || "frame-cartouche";

            const finishVal = brandData.visualDirection.finish || "";
            const colors = getFinishColors(finishVal);
            const rgb = { r: colors.rgb[0], g: colors.rgb[1], b: colors.rgb[2] };

            // Draw the vector badge structure based on the frameClass
            pdf.setLineWidth(0.5);
            if (frameClass === "frame-seal") {
                // Circular wax seal with dripped organic details
                pdf.setFillColor(rgb.r, rgb.g, rgb.b);
                
                // Draw organic dripped circles around
                pdf.circle(cx - 11, cy - 11, 3.2, "F");
                pdf.circle(cx + 13, cy + 9, 2.7, "F");
                pdf.circle(cx - 5, cy + 13, 3.6, "F");
                pdf.circle(cx + 12, cy - 10, 2.2, "F");
                
                // Main filled circle
                pdf.circle(cx, cy, 17, "F");
                
                // Outer stamped circle border in white or lighter tone to give 3D stamped feeling
                pdf.setDrawColor(255, 255, 255);
                pdf.setLineWidth(0.4);
                pdf.circle(cx, cy, 14.5, "S");
                
                // Text colored white inside the filled seal
                pdf.setTextColor(255, 255, 255);
            } else if (frameClass === "frame-cartouche") {
                // Double-lined rectangular frame
                pdf.setDrawColor(rgb.r, rgb.g, rgb.b);
                pdf.setLineWidth(0.6);
                pdf.roundedRect(cx - 18, cy - 18, 36, 36, 4, 4, "S");
                pdf.setLineWidth(0.25);
                pdf.roundedRect(cx - 15, cy - 15, 30, 30, 3, 3, "S");
                
                // Text in same color as the border
                pdf.setTextColor(rgb.r, rgb.g, rgb.b);
            } else if (frameClass === "frame-oval") {
                // High-fidelity double oval frame
                pdf.setDrawColor(rgb.r, rgb.g, rgb.b);
                pdf.setLineWidth(0.6);
                pdf.ellipse(cx, cy, 22, 16, "S");
                pdf.setLineWidth(0.25);
                pdf.ellipse(cx, cy, 19, 13, "S");
                
                // Text in same color as the border
                pdf.setTextColor(rgb.r, rgb.g, rgb.b);
            } else if (frameClass === "frame-botanical") {
                // Rounded rectangle with corner accents (dots & small leaf-like ticks)
                pdf.setDrawColor(rgb.r, rgb.g, rgb.b);
                pdf.setLineWidth(0.5);
                pdf.roundedRect(cx - 18, cy - 18, 36, 36, 4, 4, "S");
                
                // Draw four filled dots in corners
                pdf.setFillColor(rgb.r, rgb.g, rgb.b);
                pdf.circle(cx - 18, cy - 18, 0.8, "F");
                pdf.circle(cx + 18, cy - 18, 0.8, "F");
                pdf.circle(cx - 18, cy + 18, 0.8, "F");
                pdf.circle(cx + 18, cy + 18, 0.8, "F");
                
                // Little corner ornaments (leaf ticks)
                pdf.setLineWidth(0.3);
                // Top-left
                pdf.line(cx - 18, cy - 18, cx - 14, cy - 18);
                pdf.line(cx - 18, cy - 18, cx - 18, cy - 14);
                // Top-right
                pdf.line(cx + 18, cy - 18, cx + 14, cy - 18);
                pdf.line(cx + 18, cy - 18, cx + 18, cy - 14);
                // Bottom-left
                pdf.line(cx - 18, cy + 18, cx - 14, cy + 18);
                pdf.line(cx - 18, cy + 18, cx - 18, cy + 14);
                // Bottom-right
                pdf.line(cx + 18, cy + 18, cx + 14, cy + 18);
                pdf.line(cx + 18, cy + 18, cx + 18, cy + 14);

                // Text in same color as the border
                pdf.setTextColor(rgb.r, rgb.g, rgb.b);
            }

            // Write signatureText centered
            // Font size selection based on text length
            const sigLen = signatureText.length;
            let fSize = 22;
            if (sigLen === 1) fSize = 26;
            else if (sigLen === 2) fSize = 22;
            else if (sigLen === 3) fSize = 17;
            else if (sigLen >= 4) fSize = 13;

            pdf.setFont("Times", "bold");
            pdf.setFontSize(fSize);
            
            // Center alignment and exact vertical centering
            const textY = cy + (fSize * 0.13);
            pdf.text(signatureText, cx, textY, { align: "center" });

            // Subtitle labels
            pdf.setTextColor(65, 65, 65);
            pdf.setFont("Helvetica", "bold");
            pdf.setFontSize(7.5);
            pdf.text((brandData.visualDirection.signatureTemplate || "Sello Aplicado").toUpperCase(), cx, y + 80, { align: "center" });
            pdf.setFont("Helvetica", "normal");
            pdf.setFontSize(7.5);
            pdf.text(brandData.visualDirection.finish || "Acabado por definir", cx, y + 86, { align: "center" });
        };

        pdf.setFillColor(250, 248, 244);
        pdf.rect(0, 0, 210, 297, "F");
        pdf.setFillColor(darkColor.r, darkColor.g, darkColor.b);
        pdf.rect(0, 0, 210, 58, "F");
        pdf.setFillColor(accentColor.r, accentColor.g, accentColor.b);
        pdf.rect(0, 58, 210, 2, "F");

        pdf.setTextColor(255, 255, 255);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(9);
        pdf.text("MP DESIGNS | BRIEF DE COCREACION", 20, 16);
        pdf.setFontSize(24);
        pdf.text(brandData.name.toUpperCase(), 20, 34);
        pdf.setFont("Helvetica", "italic");
        pdf.setFontSize(10);
        pdf.text((brandData.slogan || fallbackSlogans[selectedCategory]).toUpperCase(), 20, 42);

        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(20, 72, 82, 148, 6, 6, "F");
        pdf.setDrawColor(235, 235, 235);
        pdf.roundedRect(20, 72, 82, 148, 6, 6, "S");
        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Direccion visual base", 26, 84);
        pdf.setTextColor(60, 60, 60);
        pdf.setFontSize(8.5);
        pdf.setFont("Helvetica", "normal");
        pdf.text(pdf.splitTextToSize(brandData.valueProp || preset.fallbackStory, 70), 26, 92);

        pdf.setFont("Helvetica", "bold");
        pdf.text("Paleta seleccionada", 26, 135);
        let swatchX = 26;
        brandData.paletteColors.forEach(color => {
            const rgb = hexToRgb(color);
            pdf.setFillColor(rgb.r, rgb.g, rgb.b);
            pdf.roundedRect(swatchX, 140, 12, 12, 2, 2, "F");
            pdf.setDrawColor(215, 215, 215);
            pdf.roundedRect(swatchX, 140, 12, 12, 2, 2, "S");
            swatchX += 15;
        });
        pdf.setFont("Helvetica", "normal");
        pdf.text(brandData.paletteName, 26, 159);

        pdf.setFont("Helvetica", "bold");
        pdf.text("Firma y sistema", 26, 171);
        pdf.setFont("Helvetica", "normal");
        pdf.text(pdf.splitTextToSize(`${brandData.visualDirection.signatureTemplate || "Direccion tipografica"} | ${brandData.visualDirection.finish || "Acabado por definir"}`, 70), 26, 177);

        pdf.setFont("Helvetica", "bold");
        pdf.text("Valores eje", 26, 193);
        pdf.setFont("Helvetica", "normal");
        pdf.text(pdf.splitTextToSize(brandData.values.join(" | "), 70), 26, 199);

        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(108, 72, 82, 148, 6, 6, "F");
        pdf.setDrawColor(235, 235, 235);
        pdf.roundedRect(108, 72, 82, 148, 6, 6, "S");
        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Identidad & Sello Aplicado", 114, 84);
        drawBrandBadge(118, 88);

        pdf.setTextColor(70, 70, 70);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(8);
        pdf.text("TIPOGRAFIA", 114, 192);
        pdf.setFont("Helvetica", "normal");
        pdf.text(`${brandData.fontFamily} / ${brandData.fontType}`, 114, 197);
        pdf.setFont("Helvetica", "bold");
        pdf.text("LOGOTIPO", 114, 205);
        pdf.setFont("Helvetica", "normal");
        pdf.text(pdf.splitTextToSize(brandData.logoStyle || "Tipografico minimalista", 64), 114, 210);

        pdf.setTextColor(120, 120, 120);
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(8);
        pdf.text(`Documento generado el ${today}`, 20, 248);
        pdf.text(`Categoria: ${preset.title}`, 20, 253);
        pdf.text("Pagina 1 de 2", 172, 286);

        pdf.addPage();
        pdf.setFillColor(250, 248, 244);
        pdf.rect(0, 0, 210, 297, "F");
        pdf.setFillColor(darkColor.r, darkColor.g, darkColor.b);
        pdf.rect(0, 0, 210, 24, "F");
        pdf.setFillColor(accentColor.r, accentColor.g, accentColor.b);
        pdf.rect(0, 24, 210, 1.5, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(10);
        pdf.text(`${brandData.name.toUpperCase()} | BASE ESTRATEGICA`, 20, 14);

        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(20, 34, 82, 92, 6, 6, "F");
        pdf.roundedRect(108, 34, 82, 92, 6, 6, "F");
        pdf.roundedRect(20, 134, 170, 56, 6, 6, "F");
        pdf.roundedRect(20, 198, 82, 35, 6, 6, "F");
        pdf.roundedRect(108, 198, 82, 35, 6, 6, "F");

        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Esencia comercial", 26, 46);
        let leftY = 52;
        leftY = drawField("Productos", brandData.products.join(", "), 26, leftY, 70);
        leftY = drawField("Publico objetivo", brandData.target, 26, leftY + 4, 70);
        drawField("Tono", brandData.tone, 26, leftY + 4, 70);

        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Personalidad de marca", 114, 46);
        drawPersonalityBar("Modernidad", brandData.personality.modernity, 114, 55, 52);
        drawPersonalityBar("Ciencia", brandData.personality.science, 114, 67, 52);
        drawPersonalityBar("Lujo", brandData.personality.luxury, 114, 79, 52);
        drawPersonalityBar("Exclusividad", brandData.personality.exclusivity, 114, 91, 52);

        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Historia y referencias", 26, 146);
        pdf.setTextColor(60, 60, 60);
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(8.4);
        pdf.text(pdf.splitTextToSize(brandData.history || preset.fallbackStory, 158), 26, 154);
        if (brandData.references) {
            pdf.setFont("Helvetica", "bold");
            pdf.text("Referencias:", 26, 180);
            pdf.setFont("Helvetica", "normal");
            pdf.text(pdf.splitTextToSize(brandData.references, 145), 46, 180);
        }

        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Prioridades y canales", 26, 205);
        pdf.setTextColor(60, 60, 60);
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(8.2);
        const regulatoryText = brandData.regulatory.length ? brandData.regulatory.join(" | ") : "Sin prioridades definidas";
        pdf.text(pdf.splitTextToSize(regulatoryText, 70), 26, 210);
        pdf.text(pdf.splitTextToSize(brandData.channels.join(", ") || "Canales por definir", 70), 26, 222);

        pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text("Siguiente etapa creativa", 114, 205);
        pdf.setTextColor(60, 60, 60);
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(8.4);
        const nextStageText = "Con esta base, MP Designs puede desarrollar rutas de identidad, exploraciones de logotipo, packaging y sistema visual.";
        pdf.text(pdf.splitTextToSize(nextStageText, 70), 114, 210);

        // Warning Banner / Aclaracion Importante en la pagina 2 al final
        pdf.setFillColor(accentColor.r, accentColor.g, accentColor.b);
        pdf.roundedRect(20, 238, 170, 22, 4, 4, "F");
        pdf.setTextColor(darkColor.r, darkColor.g, darkColor.b);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(8.5);
        pdf.text("Advertencia / Aclaracion importante", 25, 243.5);
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(7.5);
        pdf.text(pdf.splitTextToSize(referenceDisclaimer, 160), 25, 248.5);

        pdf.setDrawColor(200, 200, 200);
        pdf.line(30, 268, 85, 268);
        pdf.line(125, 268, 180, 268);
        pdf.setTextColor(80, 80, 80);
        pdf.setFont("Helvetica", "bold");
        pdf.setFontSize(8);
        pdf.text(brandData.name.toUpperCase(), 57, 273, { align: "center" });
        pdf.text("Marca / cliente", 57, 277, { align: "center" });
        pdf.text("MP DESIGNS", 152, 273, { align: "center" });
        pdf.text("Direccion creativa", 152, 277, { align: "center" });
        pdf.setFont("Helvetica", "normal");
        pdf.setFontSize(8);
        pdf.text("Pagina 2 de 2", 172, 286);

        pdf.save(`Brief_Marca_${brandData.name.replace(/\s+/g, "_")}.pdf`);
        if (!isSilent) {
            triggerCelebration();
        }
    }

    // Initialize animation loops
    initParticles();
    animateParticles();

    // Boot default category initially (Perfumería & Cosmética)
    loadCategoryPresets("perfumeria");

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.body.classList.remove("brief-loading");
        });
    });
});
