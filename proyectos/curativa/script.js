document.addEventListener("DOMContentLoaded", () => {
    const WHATSAPP_NUMBER = "593999913839";
    const productsDB = {
        "serum-detox": {
            desc: "Tratamiento efectivo para disminuir y eliminar granitos, espinillas y puntos negros en rostro, cuello y espalda. Sus aceites combaten bacterias y hongos. También funciona como detox para eliminar mal olor en axilas y pies.",
            benefits: ["Elimina granitos y espinillas", "Combate bacterias y hongos", "Detox para axilas y pies", "Cura infecciones cutáneas"]
        },
        "serum-premium": {
            desc: "Serum antioxidante y antiarrugas rico en Vitamina C y E. Ideal para humectar y fortalecer la piel, mejorando su textura y tono, dejándola luminosa y suave.",
            benefits: ["Antioxidante", "Antiarrugas", "Mejora textura y tono", "Piel luminosa y suave"]
        },
        "crema-facial": {
            desc: "Hidratación profunda con Rosa Mosqueta y Ácido Hialurónico. Elimina y trata manchitas, aumenta la hidratación, mejora la elasticidad y fortalece la piel.",
            benefits: ["Elimina manchas", "Aumenta hidratación", "Mejora elasticidad", "Fortalece la piel"]
        },
        "crema-facial-50": {
            desc: "Presentación de 50g. Hidratación profunda con Rosa Mosqueta y Ácido Hialurónico. Elimina y trata manchitas, mejora la elasticidad.",
            benefits: ["Elimina manchas", "Aumenta hidratación", "Mejora elasticidad", "Fortalece la piel"]
        },
        "tonico-facial": {
            desc: "Para todo tipo de piel. Con Ácido Hialurónico y Rosa Mosqueta. Ayuda a cerrar poros, eliminar granitos y controlar la grasa. Hidrata y renueva.",
            benefits: ["Cierra poros", "Controla grasa", "Elimina granitos", "Mejora aspecto de arrugas"]
        },
        "limpiador-avena": {
            desc: "Remueve todas las impurezas gracias a una exfoliación natural de la avena. Deja la piel suave, hidratada y nutrida. Calma irritaciones y combate el acné.",
            benefits: ["Exfoliación natural", "Piel suave y nutrida", "Calma irritaciones", "Combate el acné"]
        },
        "jabon-carbon": {
            desc: "Limpiador facial de carbón activado. Regula y controla la grasa del rostro y ayuda a combatir el acné. Ideal para piel mixta a grasa.",
            benefits: ["Controla la grasa", "Combate el acné", "Limpieza profunda", "Ideal piel mixta/grasa"]
        },
        "mascarilla-aclara": {
            desc: "Aclara zonas de tu piel como codos, rodillas, manos, paño o quemaduras de sol. Regula el sebo y elimina impurezas mediante exfoliación.",
            benefits: ["Aclara manchas y zonas oscuras", "Regula el sebo", "Elimina impurezas", "Exfoliante"]
        },
        "mascarilla-detox": {
            desc: "Con arcilla y carbón activado. Combate y elimina granitos y puntos negros, además ayuda a regular el exceso de grasa en la piel.",
            benefits: ["Elimina granitos", "Elimina puntos negros", "Regula exceso de grasa", "Limpieza profunda"]
        },
        "bloqueador": {
            desc: "Bloqueador solar natural SPF 50. Refleja y dispersa los rayos UV, efectivo para prevenir quemaduras y envejecimiento prematuro.",
            benefits: ["SPF 50", "Previene quemaduras", "Previene envejecimiento", "Ingredientes naturales"]
        },
        "rollon-lineas": {
            desc: "Adiós Líneas de Expresión. Con Colágeno y Ácido Hialurónico. Disminuye arrugas, previene signos de envejecimiento y mejora el tono de la piel.",
            benefits: ["Disminuye arrugas", "Retrasa envejecimiento", "Mejora tono de piel", "Hidratación localizada"]
        },
        "contorno-ojos": {
            desc: "Con aceites esenciales de Café y almendras. Elimina bolsas y ojeras, mejorando la apariencia y el tono de la piel en la zona de los ojos.",
            benefits: ["Elimina bolsas", "Elimina ojeras", "Mejora tono de piel", "Mirada descansada"]
        },
        "serum-pestanas": {
            desc: "Promueve el crecimiento de pestañas y cejas. Su conjunto de aceites fortalece el folículo y evita la caída.",
            benefits: ["Promueve crecimiento", "Fortalece folículo", "Evita caída", "Para cejas y pestañas"]
        },
        "pomada-cejas": {
            desc: "Logra cejas naturales y definidas por más tiempo. Color café oscuro. Con aceite de ricino para mayor cuidado y crecimiento.",
            benefits: ["Cejas definidas", "Acabado natural", "Promueve crecimiento", "Larga duración"]
        },
        "corrector-base": {
            desc: "Cubre imperfecciones y manchas. Formato en barra. Contiene protección solar SPF 50.",
            benefits: ["Cubre imperfecciones", "SPF 50", "Formato práctico", "Acabado natural"]
        },
        "pads": {
            desc: "Pads desmaquillantes reutilizables. Remueven maquillaje e impurezas suavemente gracias a su tela de microfibra y algodón orgánico.",
            benefits: ["Reutilizables", "Microfibra y algodón", "Suaves con la piel", "Ecológicos"]
        },
        "tonico-capilar": {
            desc: "Con Romero y Ricino. Ayuda al cuero cabelludo a recuperar su fortaleza, elimina la caída y promueve el crecimiento del cabello.",
            benefits: ["Elimina la caída", "Promueve crecimiento", "Fortalece cuero cabelludo", "Ingredientes naturales"]
        },
        "cera-peinar": {
            desc: "Barra para peinar a base de cera de abeja. Proporciona un agarre suave y flexible con acabado semi-mate. Para cabello húmedo o seco.",
            benefits: ["Agarre flexible", "Acabado semi-mate", "Sin residuos", "Fácil aplicación"]
        },
        "cepillo-bambu": {
            desc: "Cepillo de bambú para niños. Mango antibacteriano resistente al agua. Cerdas de Nylon libres de BPA con colores.",
            benefits: ["Antibacteriano", "Libre de BPA", "Ecológico", "Diseño para niños"]
        },
        "deo-spray": {
            desc: "Desodorante en spray de Piedra de Alumbre. Combate sudoración y bacterias. Cierra poros y elimina irritación post-depilación. Variedades: menta, hierba luisa y lavanda.",
            benefits: ["Piedra de Alumbre", "Combate mal olor", "Cierra poros", "Post-afeitado"]
        },
        "deo-crema": {
            desc: "Desodorante cremoso. Evita sudoración excesiva y neutraliza olores. Humecta y repara la piel. Variedades: cítrico y bosque herbal.",
            benefits: ["Neutraliza olores", "Humecta y repara", "Sin aluminio nocivo", "Aceites esenciales"]
        },
        "aceite-magnesio": {
            desc: "Reduce riesgos de migrañas, mejora el sueño, alivia síntomas premenstruales, reduce estrés y fatiga muscular. Prepara músculos antes de actividad física.",
            benefits: ["Reduce migrañas", "Mejora el sueño", "Alivia dolor muscular", "Reduce estrés"]
        },
        "aguardiente": {
            desc: "Aguardiente Alcanforado. Poder antibacterial y germicida. Combate estados gripales, dolores de cabeza, mareos, sinusitis y dolores musculares.",
            benefits: ["Antibacterial", "Combate gripe", "Alivia dolores musculares", "Controla mareos"]
        },
        "vinagre-300": {
            desc: "Vinagre de Sidra de Manzana con Pulpa Madre. Desintoxica, fortalece sistema inmune, promueve pérdida de peso, limpia colon e hígado y regula glucosa.",
            benefits: ["Desintoxica organismo", "Fortalece inmunidad", "Regula glucosa", "Mejora digestión"]
        },
        "vinagre-100": {
            desc: "Versión de viaje (100ml) del Vinagre de Manzana con Pulpa Madre. Mismos beneficios en formato práctico.",
            benefits: ["Formato viaje", "Desintoxica", "Digestivo", "Regula glucosa"]
        },
        "sahumerios": {
            desc: "Purifican profundamente el ambiente, limpiando la energía. Variedades: Romero/Laurel, Lavanda/Caléndula, Salvia/Canela y Pino/Canela.",
            benefits: ["Purifica ambiente", "Limpia energía", "Aromas naturales", "Relajación"]
        },
        "balsamo-corporal": {
            desc: "Gran humectación gracias a sus mantecas y ceras. Para pieles resecas. Usos: estimulante, relajante, resfriados y picaduras.",
            benefits: ["Hidratación intensa", "Multiusos", "Para piel reseca", "Alivia picaduras"]
        },
        "rollon-capaz": {
            desc: "Soy Capaz. Aceite esencial de menta. Activa concentración, reduce dolores de cabeza y estrés. Relaja y calma el sistema.",
            benefits: ["Activa concentración", "Reduce dolor de cabeza", "Reduce estrés", "Relajante"]
        },
        "rollon-paz": {
            desc: "Soy Paz. Aceite esencial de lavanda. Elimina los momentos de ansiedad y estrés. Relaja, equilibra y calma.",
            benefits: ["Calma ansiedad", "Elimina estrés", "Equilibra", "Aceite de Lavanda"]
        },
        "rollon-feliz": {
            desc: "Soy Feliz. Aceite esencial de mandarina y limón. Aumenta tu estado de ánimo y energía. Olvídate de la tristeza y el decaimiento.",
            benefits: ["Aumenta energía", "Mejora estado de ánimo", "Cítrico estimulante", "Combate tristeza"]
        },
        "balsamo-rosas": {
            desc: "Bálsamo Labial de Rosas (tono rojo vino). Humecta y protege tus labios frente a agresiones externas.",
            benefits: ["Humectación", "Protección", "Tono rojo vino", "Natural"]
        },
        "balsamo-cafe": {
            desc: "Bálsamo Labial de Café. Humecta y protege tus labios con un aroma estimulante.",
            benefits: ["Humectación", "Protección", "Aroma café", "Natural"]
        },
        "balsamo-pastel": {
            desc: "Bálsamo Labial Rosa Pastel (sin color). Ideal para hidratación diaria suave.",
            benefits: ["Sin color", "Hidratación", "Protección", "Suave"]
        },
        "balsamo-vainilla": {
            desc: "Bálsamo Labial Vainilla-Canela (sin color). Aroma cálido y dulce para proteger tus labios.",
            benefits: ["Aroma Vainilla-Canela", "Sin color", "Hidratación", "Protección"]
        },
        "balsamo-remolacha": {
            desc: "Bálsamo Labial de Remolacha. Aporta color natural mientras nutre los labios.",
            benefits: ["Color natural", "Nutritivo", "Protección", "Humectante"]
        }
    };

    const headerMenuBtn = document.getElementById("header-menu-btn");
    const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
    const closeMobileMenuBtn = document.getElementById("close-mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const fabMenu = document.getElementById("fabMenu");
    const fabBtn = document.getElementById("fabBtn");
    const mobileCategoryFab = document.getElementById("mobile-category-fab");
    const mobileCategoryToggle = document.getElementById("mobile-category-toggle");
    const mobileCategoryMenu = document.getElementById("mobile-category-menu");

    function closeFabMenu() {
        if (!fabMenu || !fabBtn) return;
        fabMenu.classList.remove("active");
        fabBtn.classList.remove("active");
        const icon = fabBtn.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    }

    window.closeFab = closeFabMenu;

    if (fabBtn && fabMenu) {
        fabBtn.addEventListener("click", () => {
            const isActive = fabMenu.classList.toggle("active");
            fabBtn.classList.toggle("active", isActive);
            const icon = fabBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars", !isActive);
                icon.classList.toggle("fa-times", isActive);
            }
        });
    }

    if (headerMenuBtn && mobileNavOverlay) {
        headerMenuBtn.addEventListener("click", () => {
            mobileNavOverlay.classList.toggle("active");
            mobileNavOverlay.classList.toggle("hidden");
        });
    }

    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener("click", () => {
            mobileNavOverlay.classList.remove("active");
            mobileNavOverlay.classList.add("hidden");
        });
    }

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNavOverlay.classList.remove("active");
            mobileNavOverlay.classList.add("hidden");
        });
    });

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener("click", (event) => {
            if (event.target === mobileNavOverlay) {
                mobileNavOverlay.classList.remove("active");
                mobileNavOverlay.classList.add("hidden");
            }
        });
    }

    function closeMobileCategoryMenu() {
        if (!mobileCategoryMenu || !mobileCategoryToggle) return;
        mobileCategoryMenu.classList.add("hidden");
        mobileCategoryToggle.setAttribute("aria-expanded", "false");
    }

    if (mobileCategoryToggle && mobileCategoryMenu) {
        mobileCategoryToggle.setAttribute("aria-expanded", "false");
        mobileCategoryToggle.addEventListener("click", () => {
            const isHidden = mobileCategoryMenu.classList.contains("hidden");
            mobileCategoryMenu.classList.toggle("hidden", !isHidden);
            mobileCategoryToggle.setAttribute("aria-expanded", String(isHidden));
        });
    }

    document.querySelectorAll(".mobile-category-pill").forEach((pill) => {
        pill.addEventListener("click", () => {
            mobileNavOverlay.classList.remove("active");
            mobileNavOverlay.classList.add("hidden");
            closeMobileCategoryMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (!mobileCategoryFab || !mobileCategoryMenu || !mobileCategoryToggle) return;
        if (mobileCategoryFab.contains(event.target)) return;
        closeMobileCategoryMenu();
    });

    document.addEventListener("click", (event) => {
        if (!fabMenu || !fabBtn) return;
        if (fabMenu.contains(event.target)) return;
        closeFabMenu();
    });

    function createGeneratedThumb(name, sectionName) {
        const safeName = (name || "Producto").trim();
        const safeSection = (sectionName || "Curativa").trim();
        const palette = {
            "Rostro y Limpieza": ["#f3e4c7", "#fff7ef", "#8d6a2c"],
            "Ojos y Maquillaje": ["#eedcf3", "#fff8fc", "#6f57a5"],
            "Cuidado Capilar": ["#dbe9db", "#f7fcf5", "#4f7754"],
            "Desodorantes": ["#dce8ef", "#f7fbfd", "#4d7081"],
            "Cuerpo y Bienestar": ["#f0e4dc", "#fffaf6", "#8b6146"],
            "BÃ¡lsamos Labiales": ["#f6d9de", "#fff8fa", "#a45b70"],
            "Roll-ons": ["#e4e0f6", "#faf8ff", "#5b4f8b"]
        };
        const [bg, panel, accent] = palette[safeSection] || ["#ece8f7", "#fbf9ff", "#6f57a5"];
        const titleLines = safeName.length > 18
            ? [safeName.slice(0, 18), safeName.slice(18, 36)]
            : [safeName, ""];
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img" aria-label="${safeName}">
              <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="${bg}"/>
                  <stop offset="100%" stop-color="${panel}"/>
                </linearGradient>
              </defs>
              <rect width="640" height="640" rx="56" fill="url(#bg)"/>
              <rect x="92" y="68" width="456" height="504" rx="42" fill="${panel}" opacity="0.98"/>
              <rect x="156" y="138" width="328" height="36" rx="18" fill="${accent}" opacity="0.16"/>
              <rect x="188" y="202" width="264" height="220" rx="132" fill="${accent}" opacity="0.14"/>
              <rect x="218" y="232" width="204" height="160" rx="102" fill="${accent}" opacity="0.22"/>
              <text x="320" y="112" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="5" fill="${accent}">CURATIVA</text>
              <text x="320" y="466" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="42" font-weight="700" fill="#2f2840">${titleLines[0]}</text>
              ${titleLines[1] ? `<text x="320" y="512" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="38" font-weight="700" fill="#2f2840">${titleLines[1]}</text>` : ""}
              <text x="320" y="554" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="2" fill="${accent}">${safeSection.toUpperCase()}</text>
            </svg>
        `;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }

    document.querySelectorAll(".product-item .placeholder-img").forEach((img) => {
        const card = img.closest(".product-item");
        const section = card ? card.closest(".section") : null;
        const sectionName = section ? section.querySelector(".section-title")?.textContent : "Curativa";
        const name = card ? card.getAttribute("data-name") : "Producto";
        img.src = createGeneratedThumb(name, sectionName);
        img.removeAttribute("class");
        img.alt = name || "Producto";
    });

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");
    const prevHeroBtn = document.querySelector(".hero-arrow.prev");
    const nextHeroBtn = document.querySelector(".hero-arrow.next");
    const heroNav = document.querySelector(".hero-nav");
    const heroProgressBar = document.querySelector(".hero-progress-bar");
    const heroCarouselContainer = document.querySelector(".carousel-container");
    const progressBar = document.querySelector(".progress-fill");
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000;
    let heroMobileControls = null;

    function relocateHeroControls() {
        if (!heroNav || !heroProgressBar || !slides.length) return;

        const activeSlide = slides[currentSlide] || document.querySelector(".hero-slide.active");
        const activeContent = activeSlide ? activeSlide.querySelector(".hero-slide-content") : null;
        const activeText = activeContent ? activeContent.querySelector(".hero-text") : null;
        if (!activeContent || !activeText) return;

        if (!heroMobileControls) {
            heroMobileControls = document.createElement("div");
            heroMobileControls.className = "hero-mobile-controls";
        }

        heroMobileControls.appendChild(heroNav);
        heroMobileControls.appendChild(heroProgressBar);
        activeText.appendChild(heroMobileControls);
    }

    function showSlide(index) {
        if (!slides.length) return;

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        slides[currentSlide].classList.add("active");
        if (dots[currentSlide]) dots[currentSlide].classList.add("active");
        relocateHeroControls();

        if (progressBar) {
            progressBar.style.transition = "none";
            progressBar.style.width = "0%";
            setTimeout(() => {
                progressBar.style.transition = `width ${slideDuration}ms linear`;
                progressBar.style.width = "100%";
            }, 50);
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    if (slides.length > 0) {
        showSlide(0);
        resetTimer();
        if (nextHeroBtn) nextHeroBtn.addEventListener("click", () => { nextSlide(); resetTimer(); });
        if (prevHeroBtn) prevHeroBtn.addEventListener("click", () => { prevSlide(); resetTimer(); });
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                showSlide(index);
                resetTimer();
            });
        });
    }

    window.addEventListener("resize", relocateHeroControls);

    document.querySelectorAll(".carousel-wrapper").forEach((wrapper) => {
        const track = wrapper.querySelector(".carousel-track");
        const prevBtn = wrapper.querySelector(".prev-btn");
        const nextBtn = wrapper.querySelector(".next-btn");

        if (track && prevBtn && nextBtn) {
            nextBtn.addEventListener("click", () => track.scrollBy({ left: 260, behavior: "smooth" }));
            prevBtn.addEventListener("click", () => track.scrollBy({ left: -260, behavior: "smooth" }));
        }

        if (track) {
            let isDragging = false;
            let hasDragged = false;
            let startX = 0;
            let startScrollLeft = 0;
            const dragThreshold = 8;

            track.addEventListener("pointerdown", (event) => {
                if (event.pointerType === "mouse" && event.button !== 0) return;
                isDragging = true;
                hasDragged = false;
                startX = event.clientX;
                startScrollLeft = track.scrollLeft;
            });

            track.addEventListener("pointermove", (event) => {
                if (!isDragging) return;
                const delta = event.clientX - startX;
                if (!hasDragged && Math.abs(delta) < dragThreshold) return;
                if (!hasDragged) {
                    hasDragged = true;
                    track.classList.add("is-dragging");
                    track.setPointerCapture(event.pointerId);
                }
                track.scrollLeft = startScrollLeft - delta;
            });

            const stopDragging = (event) => {
                if (!isDragging) return;
                isDragging = false;
                const wasDragging = hasDragged;
                hasDragged = false;
                track.classList.remove("is-dragging");
                if (event.pointerId !== undefined && track.hasPointerCapture(event.pointerId)) {
                    track.releasePointerCapture(event.pointerId);
                }
                if (wasDragging) {
                    track.dataset.dragged = "true";
                    setTimeout(() => {
                        delete track.dataset.dragged;
                    }, 0);
                }
            };

            track.addEventListener("pointerup", stopDragging);
            track.addEventListener("pointercancel", stopDragging);
            track.addEventListener("pointerleave", () => {
                if (!isDragging) return;
                isDragging = false;
                track.classList.remove("is-dragging");
            });
        }
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.add("hidden");
        document.body.classList.remove("no-scroll");
    }

    document.querySelectorAll(".close-modal-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const modal = this.closest(".new-modal-overlay");
            if (modal) closeModal(modal.id);
        });
    });

    document.querySelectorAll(".new-modal-overlay").forEach((overlay) => {
        overlay.addEventListener("click", function (event) {
            if (event.target === this) closeModal(this.id);
        });
    });

    document.querySelectorAll(".trigger-distributor").forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault();
            openModal("distributor-modal");
        });
    });

    let currentDetailId = null;

    document.body.addEventListener("click", (event) => {
        if (event.target.closest(".qty-controls") || event.target.closest(".btn-primary")) return;

        const card = event.target.closest(".clickable-card");
        if (!card) return;
        const parentTrack = card.closest(".carousel-track");
        if (parentTrack?.dataset.dragged === "true") return;

        const id = card.getAttribute("data-id");
        const name = card.getAttribute("data-name");
        const price = card.getAttribute("data-price");
        const img = card.querySelector("img");
        const info = productsDB[id] || { desc: "Producto 100% natural hecho a mano.", benefits: ["Natural", "Artesanal"] };

        document.getElementById("detail-img").src = img ? img.src : "";
        document.getElementById("detail-title").textContent = name || "Producto";
        document.getElementById("detail-price").textContent = `$${price}`;
        document.getElementById("detail-desc").textContent = info.desc;

        const benefitsList = document.getElementById("detail-benefits");
        benefitsList.innerHTML = "";
        info.benefits.forEach((benefit) => {
            const item = document.createElement("li");
            item.textContent = benefit;
            benefitsList.appendChild(item);
        });

        currentDetailId = id;
        openModal("product-detail-modal");
    });

    const addDetailBtn = document.getElementById("add-to-cart-detail-btn");
    if (addDetailBtn) {
        addDetailBtn.addEventListener("click", () => {
            if (!currentDetailId) return;
            window.addFromHero(currentDetailId);
            closeModal("product-detail-modal");
        });
    }

    let cart = [];
    const headerCartBtn = document.getElementById("header-cart-btn");
    const cartCountEl = document.getElementById("cart-count");
    const cartItemsList = document.getElementById("cart-items-list");
    const finalTotalEl = document.getElementById("final-total");
    const summaryItemsCountEl = document.getElementById("summary-items-count");
    const summarySubtotalEl = document.getElementById("summary-subtotal");
    const summaryShippingEl = document.getElementById("summary-shipping");
    const summaryGrandTotalEl = document.getElementById("summary-grand-total");
    const previewCartBtn = document.getElementById("preview-cart-btn");
    const printPreviewBtn = document.getElementById("print-preview-btn");
    const printPreviewFrame = document.getElementById("print-preview-frame");
    const CONTACTS = {
        brand: "CURATIVA",
        studio: "MP Designs · Marco Pérez",
        whatsappLabel: "+593 963 036 594",
        whatsappUrl: "https://wa.me/593963036594",
        email: "marcod.pc2021@gmail.com",
        instagram: "@neckarc",
        instagramUrl: "https://www.instagram.com/neckarc"
    };

    function formatCurrency(value) {
        return `$${Number(value || 0).toFixed(2)}`;
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function getShippingForProvince(province) {
        if (!province) return null;
        return province === "Loja" ? 0 : 5.5;
    }

    function calculateCartTotals(province = "") {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        const shipping = getShippingForProvince(province);
        const total = subtotal + (shipping || 0);
        return { subtotal, totalItems, shipping, total };
    }

    function getCustomerOrderData(requireProvince = true) {
        const nameInput = document.getElementById("customer-name");
        const provinceSelect = document.getElementById("customer-province");
        const customerName = nameInput ? nameInput.value.trim() : "";
        const province = provinceSelect ? provinceSelect.value : "";

        if (!customerName) {
            alert("Por favor escribe tu nombre.");
            if (nameInput) nameInput.focus();
            return null;
        }

        if (requireProvince && !province) {
            alert("Selecciona tu provincia.");
            if (provinceSelect) provinceSelect.focus();
            return null;
        }

        return { customerName, province };
    }

    function buildPrintableDocument(orderData, totals) {
        const today = new Date().toLocaleDateString("es-EC", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const rows = cart.map((item, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${escapeHtml(item.name)}</td>
                <td>${item.qty}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>${formatCurrency(item.qty * item.price)}</td>
            </tr>
        `).join("");
        const shippingLabel = totals.shipping == null
            ? "Por confirmar"
            : totals.shipping === 0
                ? "Sin recargo local"
                : "Envío nacional estimado";
        const shippingValue = totals.shipping == null ? "-" : formatCurrency(totals.shipping);

        return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Pedido Curativa</title>
<style>
  @page { size: A4 landscape; margin: 16mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, sans-serif; color: #2a2336; background: #ffffff; }
  .sheet { width: 100%; min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; gap: 12mm; }
  .header { display: flex; justify-content: space-between; gap: 12mm; padding-bottom: 6mm; border-bottom: 1px solid #d8cfc5; }
  .brand { display: flex; align-items: center; gap: 6mm; }
  .brand-logo { width: 42mm; max-height: 22mm; object-fit: contain; }
  .brand-copy { display: grid; gap: 1mm; }
  .brand h1 { margin: 0; font-size: 28px; letter-spacing: 0.18em; }
  .brand p, .meta p, .footer p { margin: 4px 0 0; font-size: 12px; line-height: 1.5; color: #5b5168; }
  .meta { text-align: right; }
  .hero-box { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 10mm; align-items: start; }
  .card { border: 1px solid #e7dfd6; border-radius: 14px; padding: 6mm; background: #fcfaf7; }
  .card h2 { margin: 0 0 4mm; font-size: 18px; letter-spacing: 0.04em; }
  .table { width: 100%; border-collapse: collapse; }
  .table th { text-align: left; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: #6a5f76; padding: 0 0 3mm; }
  .table td { padding: 3.5mm 0; border-top: 1px solid #ece5dd; font-size: 13px; }
  .table th:last-child, .table td:last-child { text-align: right; }
  .table th:nth-last-child(2), .table td:nth-last-child(2) { text-align: right; }
  .summary { display: grid; gap: 3mm; }
  .summary-line { display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #4f455c; }
  .summary-line.total { margin-top: 3mm; padding-top: 3mm; border-top: 1px solid #d8cfc5; font-size: 16px; font-weight: 700; color: #2a2336; }
  .notes { font-size: 12px; line-height: 1.6; color: #5f566b; }
  .footer { display: flex; justify-content: space-between; gap: 10mm; padding-top: 5mm; border-top: 1px solid #d8cfc5; font-size: 11px; color: #5b5168; }
</style>
</head>
<body>
  <div class="sheet">
    <header class="header">
      <div class="brand">
        <img src="image/logo_curativa_hero.svg" alt="Logo Curativa" class="brand-logo">
        <div class="brand-copy">
        <h1>${escapeHtml(CONTACTS.brand)}</h1>
        <p>Catálogo comercial · Vista previa para impresión / PDF</p>
        <p>${escapeHtml(CONTACTS.studio)}</p>
        </div>
      </div>
      <div class="meta">
        <p><strong>Cliente:</strong> ${escapeHtml(orderData.customerName)}</p>
        <p><strong>Provincia:</strong> ${escapeHtml(orderData.province || "Por confirmar")}</p>
        <p><strong>Fecha:</strong> ${escapeHtml(today)}</p>
      </div>
    </header>

    <main class="hero-box">
      <section class="card">
        <h2>Detalle del pedido</h2>
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Cant.</th>
              <th>Unit.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </section>

      <aside class="card">
        <h2>Resumen comercial</h2>
        <div class="summary">
          <div class="summary-line"><span>Ítems</span><strong>${totals.totalItems}</strong></div>
          <div class="summary-line"><span>Subtotal</span><strong>${formatCurrency(totals.subtotal)}</strong></div>
          <div class="summary-line"><span>${escapeHtml(shippingLabel)}</span><strong>${shippingValue}</strong></div>
          <div class="summary-line total"><span>Total estimado</span><strong>${formatCurrency(totals.total)}</strong></div>
        </div>
        <div class="notes">
          <p>Documento de referencia para revisión, impresión o guardado como PDF desde el navegador.</p>
          <p>Para confirmar el pedido, envío y pago final, continúa el contacto por WhatsApp.</p>
        </div>
      </aside>
    </main>

    <footer class="footer">
      <div>
        <p><strong>WhatsApp:</strong> ${escapeHtml(CONTACTS.whatsappLabel)}</p>
        <p><strong>Email:</strong> ${escapeHtml(CONTACTS.email)}</p>
      </div>
      <div>
        <p><strong>Instagram:</strong> ${escapeHtml(CONTACTS.instagram)}</p>
        <p>Diseño y desarrollo: ${escapeHtml(CONTACTS.studio)}</p>
      </div>
    </footer>
  </div>
</body>
</html>`;
    }

    window.addFromHero = function (id) {
        const productCard = document.querySelector(`.product-item[data-id="${id}"]`);
        if (productCard) {
            updateProductQty(productCard, 1);
        }

        if (cartCountEl) {
            cartCountEl.style.transform = "scale(1.25)";
            setTimeout(() => {
                cartCountEl.style.transform = "scale(1)";
            }, 180);
        }
    };

    document.addEventListener("click", (event) => {
        const plusButton = event.target.closest(".plus");
        const minusButton = event.target.closest(".minus");

        if (plusButton) {
            event.stopPropagation();
            updateProductQty(plusButton.closest(".product-item"), 1);
        }

        if (minusButton) {
            event.stopPropagation();
            updateProductQty(minusButton.closest(".product-item"), -1);
        }
    });

    function updateProductQty(card, change) {
        if (!card) return;

        const id = card.getAttribute("data-id");
        const name = card.getAttribute("data-name");
        const price = parseFloat(card.getAttribute("data-price"));
        const qtyDisplay = card.querySelector(".qty-display");

        let item = cart.find((entry) => entry.id === id);
        let newQty = (item ? item.qty : 0) + change;

        if (newQty < 0) newQty = 0;
        if (qtyDisplay) qtyDisplay.textContent = String(newQty);

        if (newQty > 0) {
            if (item) item.qty = newQty;
            else cart.push({ id, name, price, qty: newQty });
        } else {
            cart = cart.filter((entry) => entry.id !== id);
        }

        updateCartUI();
    }

    window.changeModalQty = function (id, change) {
        const item = cart.find((entry) => entry.id === id);
        if (!item) return;

        item.qty += change;
        const card = document.querySelector(`.product-item[data-id="${id}"]`);

        if (item.qty <= 0) {
            cart = cart.filter((entry) => entry.id !== id);
            if (card) card.querySelector(".qty-display").textContent = "0";
        } else if (card) {
            card.querySelector(".qty-display").textContent = String(item.qty);
        }

        updateCartUI();
    };

    window.removeAllItem = function (id) {
        cart = cart.filter((entry) => entry.id !== id);
        const card = document.querySelector(`.product-item[data-id="${id}"]`);
        if (card) card.querySelector(".qty-display").textContent = "0";
        updateCartUI();
    };

    function updateCartUI() {
        const provinceSelect = document.getElementById("customer-province");
        const selectedProvince = provinceSelect ? provinceSelect.value : "";
        const totals = calculateCartTotals(selectedProvince);

        if (cartCountEl) cartCountEl.textContent = String(totals.totalItems);
        renderModalList(totals);
    }

    function renderModalList(totals) {
        if (!cartItemsList) return;

        cartItemsList.innerHTML = "";
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p class="empty-msg">Tu carrito está vacío.</p>';
        } else {
            cart.forEach((item) => {
                const row = document.createElement("div");
                row.className = "cart-item-row";
                row.innerHTML = `
                    <div class="item-info">
                        <h4>${item.name}</h4>
                        <span class="item-price">$${item.price.toFixed(2)} c/u</span>
                    </div>
                    <div class="cart-item-actions">
                        <div class="modal-qty-controls">
                            <button onclick="changeModalQty('${item.id}', -1)" class="modal-qty-btn"><i class="fas fa-minus"></i></button>
                            <span style="font-weight:bold; width:20px; text-align:center;">${item.qty}</span>
                            <button onclick="changeModalQty('${item.id}', 1)" class="modal-qty-btn"><i class="fas fa-plus"></i></button>
                        </div>
                        <div class="cart-item-meta">
                            <div class="cart-item-total">$${(item.qty * item.price).toFixed(2)}</div>
                            <button onclick="removeAllItem('${item.id}')" class="btn-text-danger cart-item-remove"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                `;
                cartItemsList.appendChild(row);
            });
        }

        if (finalTotalEl) finalTotalEl.textContent = formatCurrency(totals.total);
        if (summaryItemsCountEl) summaryItemsCountEl.textContent = `${totals.totalItems} item${totals.totalItems === 1 ? "" : "s"}`;
        if (summarySubtotalEl) summarySubtotalEl.textContent = formatCurrency(totals.subtotal);
        if (summaryShippingEl) {
            summaryShippingEl.textContent =
                totals.shipping == null
                    ? "Selecciona provincia"
                    : (totals.shipping === 0 ? "Gratis (Loja)" : formatCurrency(totals.shipping));
        }
        if (summaryGrandTotalEl) summaryGrandTotalEl.textContent = formatCurrency(totals.total);
    }

    if (headerCartBtn) {
        headerCartBtn.addEventListener("click", () => openModal("cart-modal"));
    }

    const continueBtn = document.getElementById("continue-shopping-btn");
    if (continueBtn) continueBtn.addEventListener("click", () => closeModal("cart-modal"));

    const provinceSelect = document.getElementById("customer-province");
    if (provinceSelect) provinceSelect.addEventListener("change", updateCartUI);

    const clearBtn = document.getElementById("clear-cart-btn");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (cart.length > 0 && confirm("¿Vaciar carrito?")) {
                cart = [];
                document.querySelectorAll(".qty-display").forEach((span) => {
                    span.textContent = "0";
                });
                updateCartUI();
            }
        });
    }

    if (previewCartBtn) {
        previewCartBtn.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }

            const orderData = getCustomerOrderData(true);
            if (!orderData) return;

            const totals = calculateCartTotals(orderData.province);
            if (printPreviewFrame) {
                printPreviewFrame.srcdoc = buildPrintableDocument(orderData, totals);
            }
            openModal("print-preview-modal");
        });
    }

    if (printPreviewBtn && printPreviewFrame) {
        printPreviewBtn.addEventListener("click", () => {
            const frameWindow = printPreviewFrame.contentWindow;
            if (!frameWindow) return;
            frameWindow.focus();
            frameWindow.print();
        });
    }

    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }

            const nameInput = document.getElementById("customer-name");
            const provinceSelect = document.getElementById("customer-province");
            const customerName = nameInput ? nameInput.value.trim() : "";
            const province = provinceSelect ? provinceSelect.value : "";

            if (!customerName) {
                alert("Por favor escribe tu nombre.");
                if (nameInput) nameInput.focus();
                return;
            }

            if (!province) {
                alert("Selecciona tu provincia.");
                if (provinceSelect) provinceSelect.focus();
                return;
            }

            let subtotalCart = 0;
            let message = `Hola, soy ${customerName} de ${province}. Quiero hacer este pedido:\n`;

            cart.forEach((item) => {
                const total = item.qty * item.price;
                message += `▪ ${item.qty} x ${item.name} ($${total.toFixed(2)})\n`;
                subtotalCart += total;
            });

            const shipping = province !== "Loja" ? 5.5 : 0;
            const shippingText = shipping > 0 ? `$${shipping.toFixed(2)}` : "GRATIS (Local)";

            message += `\nSubtotal: $${subtotalCart.toFixed(2)}`;
            message += `\n📦 Envío: ${shippingText}`;
            message += `\n\n*TOTAL A PAGAR: $${(subtotalCart + shipping).toFixed(2)}*`;
            message += "\n\n(Adjunto comprobante de pago).";

            const plainItems = cart.map((item) => `- ${item.qty} x ${item.name}: $${(item.qty * item.price).toFixed(2)}`).join("\n");
            const plainShipping = province !== "Loja" ? `$${shipping.toFixed(2)}` : "$0.00";
            message = `Hola, soy ${customerName} de ${province}. Quiero hacer este pedido:\n${plainItems}\n\nSubtotal: $${subtotalCart.toFixed(2)}\nEnvio: ${plainShipping}\nTotal: $${(subtotalCart + shipping).toFixed(2)}\nGracias.`;
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
        });
    }

    const checkoutBtnOverride = document.getElementById("checkout-btn");
    if (checkoutBtnOverride) {
        const checkoutClone = checkoutBtnOverride.cloneNode(true);
        checkoutBtnOverride.replaceWith(checkoutClone);
        checkoutClone.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("Tu carrito está vacío.");
                return;
            }

            const orderData = getCustomerOrderData(true);
            if (!orderData) return;

            const totals = calculateCartTotals(orderData.province);
            const plainItems = cart
                .map((item) => `- ${item.qty} x ${item.name}: ${formatCurrency(item.qty * item.price)}`)
                .join("\n");
            const shippingText = totals.shipping === 0 ? "$0.00 (Loja)" : formatCurrency(totals.shipping);
            const message = [
                `Hola, soy ${orderData.customerName} de ${orderData.province}.`,
                "Quiero confirmar este pedido de Curativa:",
                "",
                plainItems,
                "",
                `Items: ${totals.totalItems}`,
                `Subtotal: ${formatCurrency(totals.subtotal)}`,
                `Envio estimado: ${shippingText}`,
                `Total: ${formatCurrency(totals.total)}`,
                "",
                "Gracias."
            ].join("\n");

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
        });
    }

    // Disable right-click, dragging and touch menu for all images globally
    document.addEventListener("contextmenu", (event) => {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });

    document.addEventListener("dragstart", (event) => {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });
});
