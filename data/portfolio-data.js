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
            title: "Tres niveles para crecer con criterio",
            description:
                "Presencia que atrae clientes, catálogo que cierra pedidos por WhatsApp, sistema que registra cada lote y emite documentos sin planillas. Tres niveles, un solo proveedor.",
            ctaText: "Explorar tarifario estratégico",
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
            title: "Inversión estratégica",
            icon: "fa-tags",
            enabled: true,
            subtitle:
                "Un tarifario agrupado por tipo de solución para que el cliente entienda el valor antes que la lista de entregables."
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
        curativa: {
            title: "Curativa Cosmética",
            rubro: "Identidad y E-commerce",
            summary:
                "Identidad completa y ecosistema visual para cosmética natural: manual de marca, packaging y piezas para retail y entorno digital.",
            images: [
                "images/curativa-hq.png",
                "images/desodorante-hq.png",
                "images/balsamo-hq.png",
                "images/Manual1-hq.png",
                "images/Manual2-hq.png",
                "images/Manual3-hq.png",
                "images/Manual4-hq.png",
                "images/Manual5-hq.png",
                "images/Manual6-hq.png",
                "images/Manual7-hq.png",
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
            images: ["images/finca-hq.jpeg"]
        },
        encuentros: {
            title: "Los Encuentros NET",
            rubro: "Identidad corporativa",
            summary: "Sistema visual corporativo para proveedor local de internet, con aplicaciones técnicas y señalética.",
            images: ["images/losencuentros-hq.png", "images/1.png"]
        },
        flyer: {
            title: "Campaña Jardín 5 Elementos",
            rubro: "Publicidad digital",
            summary: "Serie promocional para eventos, talleres y activaciones con una dirección visual inmersiva.",
            images: ["images/5elementos-hq.jpg", "images/talleresvacacionales-hq.jpg", "images/halloween.jpg"]
        },
        cultura: {
            title: "Cultura Saraguro",
            rubro: "Fotografía y editorial",
            summary: "Serie editorial inspirada en patrimonio, identidad cultural y territorio.",
            images: [
                "images/Saraguro1-hq.jpg",
                "images/Saraguro2-hq.jpg",
                "images/Saraguro3-hq.jpg",
                "images/Saraguro4-hq.jpg"
            ]
        },
        science: {
            title: "Ilustración Científica",
            rubro: "Divulgación",
            summary: "Láminas naturalistas en alta definición para divulgación, documentación y lectura editorial.",
            images: ["images/caracol-hq.jpg", "images/cangrejo1-hq.jpg", "images/tipula-hq.jpg"]
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
            rubro: "Productos promocionales",
            summary: "Aplicación de marca en objeto promocional y pieza de activación.",
            images: ["images/llavero.jpg"]
        },
        prototype: {
            title: "PROTOTYP3D",
            rubro: "Identidad tech",
            summary: "Identidad para marca tecnológica con énfasis industrial y comercial.",
            images: ["images/prototype.png", "images/tarjetaprototyp3d.png"]
        },
        editorial: {
            title: "Editorial y Manuales",
            rubro: "Maquetación",
            summary: "Maquetación de materiales largos, manuales visuales y contenidos promocionales de alta lectura.",
            images: ["images/Manual1-hq.png", "images/talleresvacacionales-hq.jpg"]
        }
    },
    galleryGroups: [
        {
            title: "Marca y sistemas visuales",
            items: ["curativa", "tiny", "finca", "encuentros", "prototype", "llavero"]
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
                title: "Implementación ITERA LITE",
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
                title: "ITERA ERP Premium",
                description:
                    "Gestión total de inventarios, ventas, documentos y reportes para operaciones B2B y B2C con criterio industrial.",
                image: "images/itera_ventas_crm.png",
                imageAlt: "Vista actual de ventas y pedidos en ITERA ERP Premium",
                badge: "Full Suite",
                tags: ["ERP", "Operación", "Industrial"],
                order: 2,
                visible: true,
                buyEnabled: true,
            }
        ],
        webs: [
            {
                id: "elementos",
                type: "web",
                title: "Landing de validación",
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
                type: "web",
                title: "Catálogo Pro WhatsApp",
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
                type: "web",
                title: "Demo: Ecosistema Premium",
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
                description:
                    "Brandbook, empaques y sistema visual técnico listos para retail y posicionamiento premium.",
                image: "images/curativa-thumb.png",
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
                title: "Jardín 5 Elementos",
                description:
                    "Campañas estacionales, flyers y material experiencial para eventos con atmósfera propia.",
                image: "images/5elementos-thumb.jpg",
                imageAlt: "Jardín 5 Elementos",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Eventos",
                tags: ["Flyers", "Temporadas", "Experiencia"],
                order: 1,
                visible: true
            },
            {
                id: "cultura",
                type: "gallery",
                title: "Cultura Saraguro",
            rubro: "Fotografía y editorial",
                description:
                    "Serie gráfica y editorial con foco en identidad cultural, patrimonio y lenguaje visual.",
                image: "images/Saraguro1-thumb.jpg",
                imageAlt: "Cultura Saraguro",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Editorial",
                tags: ["Patrimonio", "Cultura", "Gráfica"],
                order: 2,
                visible: true
            },
            {
                id: "editorial",
                type: "gallery",
                title: "Editorial y manuales",
                description:
                    "Maquetación de piezas largas, manuales visuales y soportes de campaña con lectura clara.",
                image: "images/talleresvacacionales-thumb.jpg",
                imageAlt: "Editorial y manuales",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Maquetación",
                tags: ["Editorial", "Manual", "Campaña"],
                order: 3,
                visible: true
            },
            {
                id: "llavero",
                type: "gallery",
                title: "Merchandising y objeto",
                description:
                    "Aplicaciones de marca sobre piezas físicas para activaciones, recuerdo y presencia comercial.",
                image: "images/llavero.jpg",
                imageAlt: "Merchandising y objeto",
                overlayText: "Ver galería HD",
                overlayIcon: "fa-images",
                badge: "Promo",
                tags: ["Objeto", "Marca", "Activación"],
                order: 4,
                visible: true
            }
        ],
        ciencia: [
            {
                id: "science",
                type: "gallery",
                title: "Ilustración botánica",
                description:
                    "Láminas técnicas con precisión morfológica y una lectura cuidada para publicación o divulgación.",
                image: "images/caracol-thumb.jpg",
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
                description:
                    "Documentación visual de especies y detalle anatómico para guías, docencia e investigación.",
                image: "images/cangrejo1-thumb.jpg",
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
                description:
                    "Observación e ilustración de estructuras finas para material educativo y documentación especializada.",
                image: "images/tipula-thumb.jpg",
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
