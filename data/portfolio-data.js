window.MPPortfolioData = {
    studioBrand: {
        rotateMs: 6200,
        variants: [
            {
                name: "MP DEV STUDIO",
                tagline: "DEVELOPMENT | DESIGN",
                accent: "gold",
                nameScale: 1,
                tagScale: 1
            },
            {
                name: "MP DEV STUDIO",
                tagline: "Sistemas · Web · Branding premium",
                accent: "copper",
                nameScale: 1,
                tagScale: 1
            },
            {
                name: "MP DEV · STUDIO",
                tagline: "Visual Architect · Development & design",
                accent: "split",
                nameScale: 1,
                tagScale: 1
            },
            {
                name: "MP DEV STUDIO",
                tagline: "ARCSA & ACESS · Packaging · Sistemas",
                accent: "wine",
                nameScale: 1,
                tagScale: 1
            }
        ]
    },
    pageConfig: {
        sectionOrder: ["hero", "servicios", "webs", "branding", "promo", "ciencia", "planes", "contacto"],
        hiddenSections: [],
        heroStatusText: ""
    },
    contentBlocks: {
        planes: {
            title: "Soluciones para crecer con criterio",
            description:
                "Web, marca y sistemas articulados según el problema, la operación y la etapa real de cada negocio.",
            ctaText: "Explorar catálogo de servicios",
            ctaLink: "index2.html"
        },
        contacto: {
            title: "Contacto profesional",
            description:
                "Cuéntame si necesitas una landing premium, un catálogo de conversión o un sistema empresarial a medida. Respondo con una ruta clara y un alcance realista.",
            whatsapp: "https://wa.me/593963036594",
            email: "mailto:marcod.pc2021@gmail.com",
            instagram: "https://www.instagram.com/neckarc"
        },
        footer: {
            brandDescription:
                "MP Dev Studio — desarrollo web premium, sistemas empresariales a medida, branding y diseño editorial con criterio técnico.",
            services: [
                { text: "Landings premium", href: "#webs" },
                { text: "Catálogos web", href: "#webs" },
                { text: "Sistemas QMS / ERP", href: "#servicios" },
                { text: "Contacto", href: "#contacto" }
            ],
            contacts: [
                { text: "WhatsApp", href: "https://wa.me/593963036594" },
                { text: "marcod.pc2021@gmail.com", href: "mailto:marcod.pc2021@gmail.com" },
                { text: "@neckarc", href: "https://www.instagram.com/neckarc" }
            ],
            copy: "© 2026 MP Dev Studio · Loja, Ecuador. Development, design y sistemas para negocios que necesitan valor real."
        }
    },
    sectionMeta: {
        servicios: {
            title: "Sistemas empresariales a medida",
            icon: "fa-briefcase",
            enabled: true,
            subtitle:
                "QMS, ERP, control de mermas y software operativo diseñado alrededor del flujo real del negocio, no de una plantilla genérica."
        },
        webs: {
            title: "Experiencias web premium",
            icon: "fa-code",
            enabled: true,
            subtitle:
                "Tres escalones claros para validar, convertir y elevar la percepción de marca sin sacrificar claridad comercial."
        },
        branding: {
            title: "Casos de marca",
            icon: "fa-layer-group",
            enabled: true,
            subtitle:
                "Branding, packaging y sistemas visuales desarrollados como piezas editoriales de alto valor percibido."
        },
        promo: {
            title: "Narrativa visual",
            icon: "fa-bullhorn",
            enabled: true,
            subtitle:
                "Campañas, piezas promocionales y recursos editoriales que sostienen la historia de la marca en digital e impreso."
        },
        ciencia: {
            title: "Ilustración científica",
            icon: "fa-microscope",
            enabled: true,
            subtitle:
                "Precisión morfológica, observación y criterio editorial para divulgación, docencia y documentación técnica."
        },
        planes: {
            title: "Servicios y soluciones",
            icon: "fa-compass",
            enabled: true,
            subtitle:
                "Un catálogo de capacidades para entender qué resuelve cada servicio, su alcance y los entregables que puede integrar."
        },
        contacto: {
            title: "Contacto profesional",
            icon: "fa-paper-plane",
            enabled: true,
            subtitle: "Canales directos para nuevos proyectos, soporte o conversaciones de diagnóstico."
        }
    },
    heroCarousel: {
        autoplayMs: 0,
        slides: [
            {
                brandVariant: 0,
                description:
                    "Diseño experiencias web de alto valor y construyo sistemas operativos a medida para negocios que necesitan claridad, control y presencia premium.",
                image: "images/foto-hq.jpg",
                imageAlt: "MP Dev Studio",
                ctaPrimaryText: "Explorar portafolio",
                ctaPrimaryLink: "#webs",
                ctaSecondaryText: "Ver sistemas",
                ctaSecondaryLink: "#servicios"
            },
            {
                brandVariant: 2,
                description:
                    "Desde una landing de validación hasta un ERP enfocado en calidad, ventas y trazabilidad: el stack cambia, la exigencia de diseño no.",
                image: "images/curativa-thumb.png",
                imageAlt: "Proyecto premium",
                ctaPrimaryText: "Ver casos",
                ctaPrimaryLink: "#branding",
                ctaSecondaryText: "Ver cat?logo",
                ctaSecondaryLink: "index2.html"
            }
        ]
    },
    webs: {
        elementos: { title: "Jardín 5 Elementos", url: "proyectos/5elementos/index.html" },
        curativa: { title: "Curativa E-Commerce", url: "proyectos/curativa/index.html" },
        curarte: { title: "CurArte Experience", url: "https://curarteloja.com" },
        maureen: { title: "Cotización Maureen (regulatorio)", url: "proyectos/Cotización/Maureen/index.html" },
    },
    galleries: {
        "itera-lite": {
            title: "ITERA LITE · Sistema QMS",
            rubro: "Producto digital y documentación operativa",
            summary: "Presentación editorial y vistas reales de trazabilidad, documentos, lotes y operación de calidad.",
            images: ["images/card-itera-lite-editorial.webp", "images/itera_dashboard.png", "images/itera_documentos.png", "images/itera_trazabilidad.png"]
        },
        "itera-premium": {
            title: "ITERA ERP Premium",
            rubro: "Arquitectura empresarial",
            summary: "Sistema multiplataforma para ventas, inventario, calidad, documentos y lectura ejecutiva de la operación.",
            images: ["images/card-itera-erp-editorial.webp", "images/itera_ventas_crm.png", "images/itera_dashboard.png", "images/itera_documentos.png"]
        },
        "saas-multitenant": {
            title: "Plataforma SaaS Multitenant",
            rubro: "Arquitectura SaaS · E-commerce · CRM · IA",
            summary: "Plataforma propia para desplegar tiendas independientes: cada cliente obtiene dominio propio, catálogo, órdenes, panel de administración, CRM de proyectos, vendedores, fidelización de compradores y asistente IA integrado. Multi-tenant real: datos y configuración completamente aislados por tenant."
        },
        "fnb-pos": {
            title: "CurArte · Sistema F&B Integral",
            rubro: "Restaurante · POS · Caja · Vitrina pública",
            summary: "Sistema de operación para locales de comida: grilla táctil de mesas con estados (libre/ocupada/reservada), pedidos por mesa/local/delivery, POS con cierre por turno y corte por método de pago, repartidor con panel propio, vitrina pública con carrito persistente y checkout con comprobante obligatorio para pagos bancarios."
        },
        elementos: {
            title: "Landing de validación",
            rubro: "Experiencia web y dirección editorial",
            summary: "Presentación adaptable, interfaz real y piezas visuales aplicadas a una experiencia de lanzamiento.",
            images: ["images/5elementos-real.png", "images/card-web-editorial.webp", "images/5elementos-hq.jpg"]
        },
        "curativa-web": {
            title: "Curativa · Catálogo digital",
            rubro: "Comercio digital",
            summary: "Interfaz comercial, sistema visual y aplicaciones de producto reunidas en una experiencia coherente.",
            images: ["images/curativa-real.png", "images/thumb_catalogo_whatsapp_es.jpg"]
        },
        "curarte-web": {
            title: "CurArte · Ecosistema premium",
            rubro: "Experiencia editorial digital",
            summary: "Dirección de arte, composición y presentación responsive de una experiencia cultural inmersiva.",
            images: ["images/curarte-real.png", "images/thumb_ecosistema_premium_es.jpg", "images/og-preview.png"]
        },
        curativa: {
            title: "Curativa Cosmética",
            rubro: "Identidad y E-commerce",
            summary:
                "Identidad completa y ecosistema visual para cosmética natural: manual de marca, packaging y piezas para retail y entorno digital.",
            images: [
                "images/curativa-hq.png",
                "images/Logonegativo-hq.png",
                "images/logousonormal-hq.png"
            ]
        },
        tiny: {
            title: "Tiny Melts",
            rubro: "Branding de producto",
            summary: "Brand board, logotipo y campaña visual para una marca artesanal con tono cálido y memorable.",
            images: [
                "images/tinymeltsbrandboard-hq.png",
                "images/tinimeltslogo-hq.png",
                "images/publicidad1.png",
                "images/publicidad3.png"
            ]
        },
        finca: {
            title: "Finca Pindaca",
            rubro: "Identidad agrícola",
            summary: "Identidad agrícola enfocada en origen, confianza de marca y aplicaciones de producto.",
            images: ["images/finca-hq.jpeg", "images/gallery-finca-aplicaciones.webp"]
        },
        encuentros: {
            title: "Los Encuentros NET",
            rubro: "Identidad corporativa",
            summary: "Sistema visual corporativo para proveedor local de internet, con aplicaciones técnicas y señalética.",
            images: ["images/losencuentros-hq.png", "images/gallery-encuentros-aplicaciones.webp", "images/1.png"]
        },
        flyer: {
            title: "Dirección de arte estacional",
            rubro: "Publicidad digital",
            summary: "Sistemas visuales escalables para campañas de alto impacto y experiencias inmersivas.",
            images: [
                "images/5elementos-hq.jpg",
                "images/gallery-campana-aplicaciones.webp",
                "images/gallery-victoria-formatos.webp",
                "images/gallery-victoria-evento.webp",
                "images/talleresvacacionales-hq.jpg",
                "images/halloween.jpg"
            ]
        },
        cultura: {
            title: "Narrativa documental",
            rubro: "Revista cultural · Fotografía y editorial",
            summary: "Revista cultural construida como archivo vivo: portada, reportaje fotográfico, crónica visual y sistema editorial sobre memoria, oficio y territorio.",
            images: [
                "images/Saraguro1-hq.jpg",
                "images/gallery-documental-revista.webp",
                "images/gallery-documental-reportaje.webp",
                "images/Saraguro2-hq.jpg",
                "images/Saraguro3-hq.jpg",
                "images/Saraguro4-hq.jpg"
            ]
        },
        science: {
            title: "Ilustración Científica",
            rubro: "Divulgación",
            summary: "Láminas naturalistas en alta definición para divulgación, documentación y lectura editorial.",
            images: ["images/ciencia1.jpg", "images/ciencia2.jpg", "images/ciencia3.jpg", "images/caracol-hq.jpg", "images/cangrejo1-hq.jpg", "images/tipula-hq.jpg"]
        },
        etiquetas: {
            title: "Etiquetas y Packaging",
            rubro: "Impresos comerciales",
            summary: "Sistemas de etiquetado listos para imprenta, normativa y consistencia de línea.",
            images: [
                "images/etiqueta1.png",
                "images/etiqueta2.png",
                "images/etiqueta3.png",
                "images/etiqueta4.png",
                "images/etiqueta5.png",
                "images/etiqueta6.png",
                "images/etiqueta7.png"
            ]
        },
        llavero: {
            title: "Merchandising",
            rubro: "Objeto de marca · Fabricación 3D",
            summary: "Familias de objetos fabricables: identificadores, soportes, sellos y exhibidores desarrollados desde marcas reales y criterios de producción.",
            images: ["images/gallery-merch-3d-brands.webp", "images/gallery-merch-aplicaciones.webp", "images/llavero.jpg"]
        },
        prototype: {
            title: "PROTOTYP3D",
            rubro: "Identidad tech",
            summary: "Sistema de identidad para diseño y fabricación 3D, aplicado a documentación, taller y prototipos físicos.",
            images: ["images/prototype.png", "images/gallery-prototyp3d-aplicaciones.webp", "images/tarjetaprototyp3d.png"]
        },
        editorial: {
            title: "Arquitectura de información",
            rubro: "Maquetación",
            summary: "Maquetación avanzada y diseño editorial especializado en manuales técnicos y sistemas de lectura.",
            images: [
                "images/Manual1-hq.png",
                "images/gallery-editorial-manual.webp",
                "images/Manual2-hq.png",
                "images/Manual3-hq.png",
                "images/Manual4-hq.png",
                "images/Manual5-hq.png",
                "images/Manual6-hq.png",
                "images/Manual7-hq.png"
            ]
        }
    },
    galleryGroups: [
        {
            title: "Marca y sistemas visuales",
            items: ["curativa", "tiny", "finca", "encuentros", "prototype", "llavero"]
        },
        {
            title: "Sistemas y producto digital",
            items: ["itera-lite", "itera-premium", "saas-multitenant", "fnb-pos", "elementos", "curativa-web", "curarte-web"]
        },
        {
            title: "Packaging y etiquetas",
            items: ["etiquetas"]
        },
        {
            title: "Narrativa editorial",
            items: ["cultura", "flyer", "editorial"]
        },
        {
            title: "Ilustración científica",
            items: ["science"]
        }
    ],
    homeSections: {
        servicios: [
            {
                id: "itera-lite",
                galleryId: "itera-lite",
                title: "Implementación ITERA LITE",
                rubro: "Sistema operativo · QMS",
                description:
                    "Sistema QMS base para equipos que inician trazabilidad, control documental y gestión de lotes.",
                image: "images/itera_dashboard.png",
                imageAlt: "Dashboard actual de ITERA con alertas operativas y estado de lotes",
                badge: "QMS Base",
                tags: ["Trazabilidad", "Lotes", "QMS"],
                order: 1,
                visible: true,
                buyEnabled: true,
            },
            {
                id: "itera-premium",
                galleryId: "itera-premium",
                title: "ITERA ERP Premium",
                rubro: "Arquitectura empresarial · ERP",
                description:
                    "Gestión total de inventarios, ventas, documentos y reportes para operaciones B2B y B2C con criterio industrial.",
                image: "images/itera_ventas_crm.png",
                imageAlt: "Vista actual de ventas y pedidos en ITERA ERP Premium",
                badge: "Full Suite",
                tags: ["ERP", "Operación", "Industrial"],
                order: 2,
                visible: true,
                buyEnabled: true,
            },
            {
                id: "saas-multitenant",
                galleryId: "saas-multitenant",
                title: "Plataforma SaaS Multitenant",
                rubro: "Arquitectura SaaS · E-commerce · CRM · IA",
                description:
                    "Plataforma para desplegar tiendas con dominio propio, catálogo, órdenes, CRM de proyectos, vendedores, fidelización y asistente IA. Arquitectura multi-tenant real: datos y configuración aislados por cliente.",
                image: "images/itera_dashboard.png",
                imageAlt: "Panel de administración de la plataforma SaaS multitenant",
                badge: "SaaS",
                tags: ["Multitenant", "E-commerce", "IA", "CRM"],
                order: 3,
                visible: true,
                buyEnabled: false,
            },
            {
                id: "fnb-pos",
                galleryId: "fnb-pos",
                title: "CurArte · Sistema F&B Integral",
                rubro: "Restaurante · POS táctil · Caja · Delivery",
                description:
                    "Sistema de operación para locales: mesas con estado en grilla táctil, pedidos por mesa/local/delivery, cierre POS por turno, panel de repartidor, vitrina pública y checkout con comprobante bancario obligatorio.",
                image: "images/itera_documentos.png",
                imageAlt: "Sistema de pedidos y caja para restaurante con POS táctil",
                badge: "F&B",
                tags: ["POS táctil", "Mesas", "Delivery", "Caja"],
                order: 4,
                visible: true,
                buyEnabled: false,
            }
        ],
        webs: [
            {
                id: "elementos",
                galleryId: "elementos",
                type: "web",
                title: "Landing de validación",
                rubro: "Producto digital · Lanzamiento",
                description:
                    "Conversión rápida, narrativa visual y una estructura precisa para captar leads o validar un producto sin fricción.",
                image: "images/5elementos-real.png",
                imageAlt: "Landing de validación",
                overlayText: "Ver demo",
                overlayIcon: "fa-play-circle",
                badge: "Validación",
                tags: ["Landing", "Leads", "Fast-Load"],
                order: 1,
                visible: true,
                buyEnabled: true
            },
            {
                id: "curativa",
                galleryId: "curativa-web",
                type: "web",
                title: "Catálogo Pro WhatsApp",
                rubro: "Comercio digital · Conversión",
                description:
                    "Inventario dinámico, carrito y cierre por chat para marcas que necesitan vender con claridad y velocidad.",
                image: "images/curativa-real.png",
                imageAlt: "Catálogo Pro WhatsApp",
                overlayText: "Ver web",
                overlayIcon: "fa-shopping-bag",
                badge: "Conversión",
                tags: ["E-commerce", "WhatsApp"],
                order: 2,
                visible: true,
                buyEnabled: true
            },
            {
                id: "curarte",
                galleryId: "curarte-web",
                type: "web",
                title: "Demo: Ecosistema Premium",
                rubro: "Experiencia editorial · Web",
                description:
                    "Una muestra real de dirección de arte, UI refinada y experiencia inmersiva aplicada a una marca con alto valor percibido.",
                image: "images/curarte-real.png",
                imageAlt: "Demo Ecosistema Premium",
                overlayText: "Ver web",
                overlayIcon: "fa-external-link-alt",
                badge: "Premium",
                tags: ["Demo Real", "UI/UX", "Editorial"],
                order: 3,
                visible: true,
                buyEnabled: true
            },
            {
                id: "maureen",
                type: "web",
                title: "Cotización Maureen · Regulatorio",
                description:
                    "Propuesta interactiva: registros, POES, BPM, notificación sanitaria por categorías y rol de representante técnica + calidad.",
                image: "images/curativa-thumb.png",
                imageAlt: "Cotización Maureen",
                overlayText: "Abrir configurador",
                overlayIcon: "fa-flask",
                badge: "Bioquímica",
                tags: ["POES", "BPM", "ARCSA"],
                order: 4,
                visible: false,
                buyEnabled: true
            },
            {
                id: "marco",
                type: "bio",
                title: "Currículum interactivo",
                description:
                    "Currículum profesional interactivo: desarrollo de software (QMS & ERP), branding/packaging e ilustración científica con precisión morfológica.",
                image: "images/foto-hq.jpg",
                imageAlt: "Currículum interactivo",
                overlayText: "Abrir currículum",
                overlayIcon: "fa-id-card",
                badge: "Visual Architect & Dev",
                tags: ["Sistemas", "Branding", "Ilustración"],
                order: 5,
                visible: false,
                buyEnabled: false
            }
        ],
        branding: [
            {
                id: "curativa",
                type: "gallery",
                title: "Curativa · Identidad y packaging",
                rubro: "Cosmética natural · Retail",
                description:
                    "Brandbook, empaques y sistema visual técnico listos para retail y posicionamiento premium.",
                image: "images/desodorante-thumb.png",
                imageAlt: "Curativa",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Case Study",
                tags: ["Brandbook", "Packaging", "Retail"],
                order: 1,
                visible: true
            },
            {
                id: "tiny",
                type: "gallery",
                title: "Tiny Melts · Sistema visual",
                rubro: "Marca artesanal · Identidad",
                description:
                    "Logo, dirección cromática y piezas promocionales para una marca artesanal con lenguaje propio.",
                image: "images/tinymeltsbrandboard-thumb.png",
                imageAlt: "Tiny Melts",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Branding",
                tags: ["Marca", "Visual", "Social"],
                order: 2,
                visible: true
            },
            {
                id: "etiquetas",
                type: "gallery",
                title: "Etiquetas y packaging técnico",
                rubro: "Diseño regulatorio · Impreso",
                description:
                    "Sistemas gráficos para líneas de producto con consistencia visual y salida a imprenta.",
                image: "images/etiqueta1.png",
                imageAlt: "Etiquetas y packaging técnico",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Normativa",
                tags: ["Etiquetas", "Print", "ANSI"],
                order: 3,
                visible: true
            },
            {
                id: "encuentros",
                type: "gallery",
                title: "Los Encuentros NET",
            rubro: "Identidad corporativa",
                description:
                    "Identidad corporativa para ISP local con aplicaciones de señalética y comunicación técnica.",
                image: "images/losencuentros-thumb.png",
                imageAlt: "Los Encuentros NET",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Corporativo",
                tags: ["ISP", "Señalética", "Digital"],
                order: 4,
                visible: true
            },
            {
                id: "prototype",
                type: "gallery",
                title: "PROTOTYP3D",
            rubro: "Identidad tech",
                description:
                    "Identidad para marca tecnológica con acento industrial, comercial y de producto.",
                image: "images/prototype.png",
                imageAlt: "PROTOTYP3D",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Tech",
                tags: ["3D", "Tech", "Corporativo"],
                order: 5,
                visible: true
            },
            {
                id: "finca",
                type: "gallery",
                title: "Finca Pindaca",
            rubro: "Identidad agrícola",
                description:
                    "Construcción de marca agrícola pensada para origen, confianza y aplicaciones de empaque.",
                image: "images/finca-thumb.jpeg",
                imageAlt: "Finca Pindaca",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Agro",
                tags: ["Agro", "Origen", "Packaging"],
                order: 6,
                visible: true
            }
        ],
        promo: [
            {
                id: "flyer",
                type: "gallery",
                title: "Dirección de arte estacional",
                rubro: "Campaña cultural · Evento",
                description:
                    "Sistemas visuales escalables para campañas de alto impacto, enfocados en la retención y la inmersión del usuario.",
                image: "images/gallery-campana-aplicaciones.webp",
                imageAlt: "Dirección de arte estacional",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Campaña",
                tags: ["Dirección de Arte", "Sistema Visual", "Eventos"],
                order: 1,
                visible: true
            },
            {
                id: "cultura",
                type: "gallery",
                title: "Narrativa documental",
                rubro: "Revista cultural · Fotografía y editorial",
                description:
                    "Revista cultural concebida como archivo vivo: crónica visual, fotografía documental y una retícula editorial para narrar memoria, oficio y territorio.",
                image: "images/gallery-documental-revista.webp",
                imageAlt: "Narrativa documental",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Documental",
                tags: ["Editorial", "Patrimonio", "Fotografía"],
                order: 2,
                visible: true
            },
            {
                id: "editorial",
                type: "gallery",
                title: "Arquitectura de información",
                rubro: "Diseño editorial · Manuales",
                description:
                    "Maquetación avanzada y diseño editorial especializado en manuales técnicos y sistemas de lectura de alta densidad.",
                image: "images/gallery-editorial-manual.webp",
                imageAlt: "Arquitectura de información",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Diseño Editorial",
                tags: ["Retículas", "Manuales", "Tipografía"],
                order: 3,
                visible: true
            },
            {
                id: "llavero",
                type: "gallery",
                title: "Merchandising y objeto",
                rubro: "Aplicación de marca · Fabricación 3D",
                description:
                    "Sistemas de objetos fabricables —identificadores, soportes, sellos y exhibidores— desarrollados desde marcas reales y restricciones de producción.",
                image: "images/gallery-merch-aplicaciones.webp",
                imageAlt: "Merchandising y objeto",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Promo",
                tags: ["Impresión 3D", "Objeto", "Prototipado"],
                order: 4,
                visible: true
            }
        ],
        ciencia: [
            {
                id: "science",
                type: "gallery",
                title: "Ilustración botánica",
                rubro: "Lámina naturalista · Botánica",
                description:
                    "Láminas técnicas con precisión morfológica y una lectura cuidada para publicación o divulgación.",
                image: "images/ciencia1.jpg",
                imageAlt: "Ilustración botánica",
                overlayText: "Ver detalle",
                overlayIcon: "fa-search-plus",
                cardClass: "science-card",
                imageClass: "science-view",
                badge: "Taxonomía",
                tags: ["Morfología", "Naturalista"],
                order: 1,
                visible: true
            },
            {
                id: "science",
                type: "gallery",
                title: "Fauna neotropical",
                rubro: "Documentación visual · Fauna",
                description:
                    "Documentación visual de especies y detalle anatómico para guías, docencia e investigación.",
                image: "images/ciencia2.jpg",
                imageAlt: "Fauna neotropical",
                overlayText: "Ver detalle",
                overlayIcon: "fa-search-plus",
                cardClass: "science-card",
                imageClass: "science-view",
                badge: "Fauna",
                tags: ["Neotrópico", "Guía", "Ciencia"],
                order: 2,
                visible: true
            },
            {
                id: "science",
                type: "gallery",
                title: "Detalle entomológico",
                rubro: "Morfología · Entomología",
                description:
                    "Observación e ilustración de estructuras finas para material educativo y documentación especializada.",
                image: "images/ciencia3.jpg",
                imageAlt: "Detalle entomológico",
                overlayText: "Ver detalle",
                overlayIcon: "fa-search-plus",
                cardClass: "science-card",
                imageClass: "science-view",
                badge: "Entomología",
                tags: ["Detalle", "Educación", "Vectorial"],
                order: 3,
                visible: true
            }
        ]
    }
};
