document.addEventListener("DOMContentLoaded", () => {
    const WHATSAPP_NUMBER = "593963036594";
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

    // Retract the floating controls while progressing down the page and
    // restore them as soon as the user navigates upwards.
    let lastFabScrollY = Math.max(window.scrollY, 0);
    let fabScrollTicking = false;
    const syncFloatingControlsWithScroll = () => {
        const currentY = Math.max(window.scrollY, 0);
        const delta = currentY - lastFabScrollY;
        const menuIsOpen = fabMenu?.classList.contains("active") || mobileCategoryFab?.classList.contains("active");

        if (!menuIsOpen && currentY > 110 && delta > 7) {
            document.body.classList.add("fab-controls-hidden");
        } else if (delta < -7 || currentY <= 110 || menuIsOpen) {
            document.body.classList.remove("fab-controls-hidden");
        }

        if (Math.abs(delta) > 7) lastFabScrollY = currentY;
        fabScrollTicking = false;
    };

    window.addEventListener("scroll", () => {
        if (fabScrollTicking) return;
        fabScrollTicking = true;
        window.requestAnimationFrame(syncFloatingControlsWithScroll);
    }, { passive: true });

    function closeFabMenu() {
        if (!fabMenu || !fabBtn) return;
        fabMenu.classList.remove("active");
        fabBtn.classList.remove("active");
        fabBtn.setAttribute("aria-expanded", "false");
        const icon = fabBtn.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    }

    window.closeFab = closeFabMenu;

    if (fabBtn && fabMenu) {
        fabBtn.setAttribute("aria-expanded", "false");
        fabBtn.addEventListener("click", () => {
            document.body.classList.remove("fab-controls-hidden");
            const isActive = fabMenu.classList.toggle("active");
            fabBtn.classList.toggle("active", isActive);
            fabBtn.setAttribute("aria-expanded", String(isActive));
            if (isActive) closeMobileCategoryMenu();
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
        mobileCategoryFab?.classList.remove("active");
        mobileCategoryMenu.classList.add("hidden");
        mobileCategoryToggle.setAttribute("aria-expanded", "false");
        mobileCategoryToggle.classList.remove("active");
        document.body.classList.remove("category-menu-open");
        const icon = mobileCategoryToggle.querySelector("i");
        if (icon) {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-th-large");
        }
    }

    function restorePageScroll() {
        const visibleModal = document.querySelector(".new-modal-overlay:not(.hidden)");
        if (!visibleModal) {
            document.body.classList.remove("no-scroll", "cart-drawer-open");
            document.documentElement.style.removeProperty("overflow");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("position");
            document.body.style.removeProperty("touch-action");
        }
    }

    function closeNavigationSurfaces() {
        closeFabMenu();
        closeMobileCategoryMenu();
        if (mobileNavOverlay) {
            mobileNavOverlay.classList.remove("active");
            mobileNavOverlay.classList.add("hidden");
        }
        restorePageScroll();
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const hash = link.getAttribute("href");
            if (!hash || hash === "#") return;
            const target = document.querySelector(hash);
            if (!target) return;

            event.preventDefault();
            closeNavigationSurfaces();
            requestAnimationFrame(() => {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                if (window.history?.replaceState) window.history.replaceState(null, "", hash);
            });
        });
    });

    if (mobileCategoryToggle && mobileCategoryMenu) {
        mobileCategoryToggle.setAttribute("aria-expanded", "false");
        mobileCategoryToggle.addEventListener("click", () => {
            document.body.classList.remove("fab-controls-hidden");
            const isHidden = mobileCategoryMenu.classList.contains("hidden");
            mobileCategoryFab.classList.toggle("active", isHidden);
            mobileCategoryMenu.classList.toggle("hidden", !isHidden);
            mobileCategoryToggle.setAttribute("aria-expanded", String(isHidden));
            mobileCategoryToggle.classList.toggle("active", isHidden);
            document.body.classList.toggle("category-menu-open", isHidden);
            if (isHidden) closeFabMenu();
            const icon = mobileCategoryToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-th-large", !isHidden);
                icon.classList.toggle("fa-times", isHidden);
            }
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

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        closeFabMenu();
        closeMobileCategoryMenu();
    });

    function createGeneratedThumb(name, sectionName) {
        const safeName = (name || "Producto").trim();
        const safeSection = (sectionName || "alúa").trim();
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
              <text x="320" y="112" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="5" fill="${accent}">alúa</text>
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
        const sectionName = section ? section.querySelector(".section-title")?.textContent : "alúa";
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
    function showSlide(index) {
        if (!slides.length) return;

        let targetIndex = index;
        if (targetIndex >= slides.length) targetIndex = 0;
        else if (targetIndex < 0) targetIndex = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.classList.remove("active", "prev-slide");
            if (i === targetIndex) return;

            let isPrev = false;
            if (targetIndex > currentSlide) {
                isPrev = i <= currentSlide; 
            } else {
                isPrev = i < targetIndex;
            }
            if (currentSlide === slides.length - 1 && targetIndex === 0) {
                 isPrev = true;
            } else if (currentSlide === 0 && targetIndex === slides.length - 1) {
                 isPrev = false;
            }
            if (isPrev) slide.classList.add("prev-slide");
        });

        currentSlide = targetIndex;
        slides[currentSlide].classList.add("active");

        dots.forEach((dot) => dot.classList.remove("active"));
        if (dots[currentSlide]) dots[currentSlide].classList.add("active");
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

    function pauseTimer() {
        clearInterval(slideInterval);
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

        const heroSection = document.querySelector("#hero-carousel");
        if (heroSection) {
            let touchStartY = 0;
            let touchEndY = 0;

            heroSection.addEventListener("mouseenter", pauseTimer);
            heroSection.addEventListener("mouseleave", resetTimer);

            heroSection.addEventListener("touchstart", (e) => {
                touchStartY = e.changedTouches[0].screenY;
                pauseTimer();
            }, { passive: true });

            heroSection.addEventListener("touchend", (e) => {
                touchEndY = e.changedTouches[0].screenY;
                if (touchEndY < touchStartY - 50) {
                    nextSlide();
                } else if (touchEndY > touchStartY + 50) {
                    prevSlide();
                }
                resetTimer();
            }, { passive: true });
        }
    }

    document.querySelectorAll(".carousel-wrapper").forEach((wrapper) => {
        const track = wrapper.querySelector(".carousel-track");
        const prevBtn = wrapper.querySelector(".prev-btn");
        const nextBtn = wrapper.querySelector(".next-btn");
        const desktopQuery = window.matchMedia("(min-width: 1081px)");

        if (track && prevBtn && nextBtn) {
            nextBtn.addEventListener("click", () => track.scrollBy({ left: 260, behavior: "smooth" }));
            prevBtn.addEventListener("click", () => track.scrollBy({ left: -260, behavior: "smooth" }));
        }

        if (track) {
            let isDragging = false;
            let hasDragged = false;
            let startX = 0;
            let startScrollLeft = 0;
            let currentTargetScrollLeft = 0;
            let rafId = null;
            let wheelReleaseTimer = null;
            const dragThreshold = 8;
            const clampScroll = (value) => Math.max(0, Math.min(value, track.scrollWidth - track.clientWidth));
            const isDesktopCarousel = () => desktopQuery.matches;

            // iOS may emit a click after a vertical page swipe that began on a card.
            // Track the complete touch gesture independently from Pointer Events.
            let touchStartX = 0;
            let touchStartY = 0;
            let touchMoved = false;
            track.addEventListener("touchstart", (event) => {
                const touch = event.touches[0];
                if (!touch) return;
                touchStartX = touch.clientX;
                touchStartY = touch.clientY;
                touchMoved = false;
            }, { passive: true });
            track.addEventListener("touchmove", (event) => {
                const touch = event.touches[0];
                if (!touch) return;
                const deltaX = touch.clientX - touchStartX;
                const deltaY = touch.clientY - touchStartY;
                if (Math.hypot(deltaX, deltaY) > 7) touchMoved = true;
            }, { passive: true });
            track.addEventListener("touchend", () => {
                if (!touchMoved) return;
                track.dataset.dragged = "true";
                window.setTimeout(() => delete track.dataset.dragged, 350);
            }, { passive: true });

            const stopTrackAnimation = () => {
                if (rafId) {
                    cancelAnimationFrame(rafId);
                    rafId = null;
                }
            };

            const animateTrackToTarget = () => {
                const nextScrollLeft = track.scrollLeft + (currentTargetScrollLeft - track.scrollLeft) * 0.18;
                if (Math.abs(currentTargetScrollLeft - track.scrollLeft) < 0.5) {
                    track.scrollLeft = currentTargetScrollLeft;
                    rafId = null;
                    return;
                }
                track.scrollLeft = nextScrollLeft;
                rafId = requestAnimationFrame(animateTrackToTarget);
            };

            const queueTrackAnimation = () => {
                if (rafId) return;
                rafId = requestAnimationFrame(animateTrackToTarget);
            };

            const releaseWheelMode = () => {
                if (wheelReleaseTimer) {
                    clearTimeout(wheelReleaseTimer);
                }
                wheelReleaseTimer = window.setTimeout(() => {
                    track.classList.remove("is-wheel-scrolling");
                }, 140);
            };

            track.addEventListener("pointerdown", (event) => {
                // En pantallas táctiles Safari debe conservar el gesto y la inercia nativos.
                if (!isDesktopCarousel()) return;
                if (event.pointerType === "mouse" && event.button !== 0) return;
                stopTrackAnimation();
                isDragging = true;
                hasDragged = false;
                startX = event.clientX;
                startScrollLeft = track.scrollLeft;
                currentTargetScrollLeft = track.scrollLeft;
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
                currentTargetScrollLeft = clampScroll(startScrollLeft - delta);
                if (isDesktopCarousel()) {
                    queueTrackAnimation();
                } else {
                    track.scrollLeft = currentTargetScrollLeft;
                }
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
                currentTargetScrollLeft = track.scrollLeft;
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
                currentTargetScrollLeft = track.scrollLeft;
            });

            track.addEventListener("scroll", () => {
                if (!isDragging && !track.classList.contains("is-wheel-scrolling")) {
                    currentTargetScrollLeft = track.scrollLeft;
                }
            }, { passive: true });

            track.addEventListener("wheel", (event) => {
                if (!isDesktopCarousel()) return;
                if (track.scrollWidth <= track.clientWidth) return;

                const dominantDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
                if (!dominantDelta) return;

                event.preventDefault();
                stopTrackAnimation();
                track.classList.add("is-wheel-scrolling");
                currentTargetScrollLeft = clampScroll(currentTargetScrollLeft + dominantDelta * 1.15);
                queueTrackAnimation();
                releaseWheelMode();
            }, { passive: false });

            desktopQuery.addEventListener("change", (event) => {
                if (event.matches) return;
                stopTrackAnimation();
                track.classList.remove("is-wheel-scrolling");
            });
        }
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
        if (modalId === "cart-modal") {
            document.body.classList.add("cart-drawer-open");
            if (window.matchMedia("(max-width: 600px)").matches) setMobileCheckoutStep(1);
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.add("hidden");
        if (modalId === "cart-modal") document.body.classList.remove("cart-drawer-open");
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

        const similarGrid = document.getElementById("similar-products-grid");
        if (similarGrid) {
            similarGrid.innerHTML = "";
            const allCards = Array.from(document.querySelectorAll(".carousel-card.clickable-card"));
            const otherCards = allCards.filter(c => c.getAttribute("data-id") !== currentDetailId);
            const shuffled = otherCards.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            
            selected.forEach(simCard => {
                const simId = simCard.getAttribute("data-id");
                const simName = simCard.getAttribute("data-name");
                const simImg = simCard.querySelector("img").src;
                
                const div = document.createElement("div");
                div.className = "similar-item";
                div.innerHTML = `
                    <img src="${simImg}" alt="${simName}">
                    <h5>${simName}</h5>
                `;
                div.addEventListener("click", () => {
                    simCard.click();
                });
                similarGrid.appendChild(div);
            });
        }

        openModal("product-detail-modal");
        
        if (typeof syncDetailModalQty === "function") {
            syncDetailModalQty();
        }
    });

    const addDetailBtn = document.getElementById("add-to-cart-detail-btn");
    if (addDetailBtn) {
        addDetailBtn.addEventListener("click", () => {
            if (!currentDetailId) return;
            window.addFromHero(currentDetailId);
            const originalText = addDetailBtn.innerHTML;
            addDetailBtn.innerHTML = "<i class='fas fa-check'></i> ¡Añadido!";
            addDetailBtn.style.backgroundColor = "#4caf50";
            addDetailBtn.style.borderColor = "#4caf50";
            setTimeout(() => {
                addDetailBtn.innerHTML = originalText;
                addDetailBtn.style.backgroundColor = "";
                addDetailBtn.style.borderColor = "";
            }, 1500);
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
    const orderRefCodeEl = document.getElementById("order-ref-code");
    const orderDateLabelEl = document.getElementById("order-date-label");
    const orderDeliveryLabelEl = document.getElementById("order-delivery-label");
    const CONTACTS = {
        brand: "CURATIVA",
        studio: "MP Dev Studio",
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

    function getOrderReference() {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, "0");
        const d = String(now.getDate()).padStart(2, "0");
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        return `CUR-${y}${m}${d}-${hh}${mm}`;
    }

    function getOrderDateLabel() {
        return new Date().toLocaleDateString("es-EC", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
    }

    function getDeliveryLabel(province) {
        if (!province) return "Pendiente";
        return province === "Loja" ? "Local" : "Nacional";
    }

    function updateOrderMeta(province = "") {
        if (orderRefCodeEl) orderRefCodeEl.textContent = getOrderReference();
        if (orderDateLabelEl) orderDateLabelEl.textContent = getOrderDateLabel();
        if (orderDeliveryLabelEl) orderDeliveryLabelEl.textContent = getDeliveryLabel(province);
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
        const lastNameInput = document.getElementById("customer-lastname");
        const provinceSelect = document.getElementById("customer-province");
        const addressInput = document.getElementById("customer-address");
        const customerName = nameInput ? nameInput.value.trim() : "";
        const customerLastName = lastNameInput ? lastNameInput.value.trim() : "";
        const province = provinceSelect ? provinceSelect.value : "";
        const customerAddress = addressInput ? addressInput.value.trim() : "";

        if (!customerName) {
            alert("Por favor escribe tus nombres.");
            if (nameInput) nameInput.focus();
            return null;
        }

        if (!customerLastName) {
            alert("Por favor escribe tus apellidos.");
            if (lastNameInput) lastNameInput.focus();
            return null;
        }

        if (requireProvince && !province) {
            alert("Selecciona tu provincia.");
            if (provinceSelect) provinceSelect.focus();
            return null;
        }

        if (!customerAddress) {
            alert("Escribe tu dirección de envío.");
            if (addressInput) addressInput.focus();
            return null;
        }

        return {
            customerName,
            customerLastName,
            customerFullName: `${customerName} ${customerLastName}`.trim(),
            province,
            customerAddress
        };
    }

    function buildPrintableDocument(orderData, totals, embeddedLogo = "") {
        const today = new Date().toLocaleDateString("es-EC", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const rows = cart.map((item) => `
            <tr>
                <td><strong>${escapeHtml(item.name)}</strong><br><span>Producto botánico Curativa</span></td>
                <td class="center">${item.qty}</td>
                <td class="right">${formatCurrency(item.price)}</td>
                <td class="right"><strong>${formatCurrency(item.qty * item.price)}</strong></td>
            </tr>
        `).join("");
        const shippingValue = totals.shipping == null ? "-" : formatCurrency(totals.shipping);
        const orderReference = getOrderReference();
        const whatsappText = encodeURIComponent(`Hola, adjunto mi comprobante de pago para el pedido ${orderReference}.`);

        return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Pedido Curativa</title>
<style>
  @page { size: A4 portrait; margin: 12mm; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 20px; font-family: Arial, sans-serif; color: #352d3d; background: #eee8e1; line-height: 1.55; }
  .sheet { max-width: 800px; margin: auto; padding: 42px; background: #fff; box-shadow: 0 8px 30px rgba(33,22,47,.08); }
  .header { display: flex; justify-content: space-between; gap: 30px; padding-bottom: 20px; border-bottom: .75px solid #e7e1da; }
  .brand { display: flex; align-items: flex-start; gap: 16px; }
  .brand-logo { width: 76px; height: 76px; object-fit: contain; }
  .brand h1 { margin: 0; color: #21162f; font-size: 28px; letter-spacing: .12em; }
  .brand p,.meta p { margin: 3px 0; color: #6f6677; font-size: 12px; }
  .meta { text-align: right; } .meta h2 { margin: 0; color: #21162f; font-size: 18px; }
  .status { display: inline-block; margin-top: 8px; padding: 5px 12px; border: .75px solid #ead18e; border-radius: 99px; background: #fff9e8; color: #8f5a13; font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
  .notice { margin: 24px 0; padding: 17px 20px; border-left: 2px solid #25a95b; border-radius: 3px; background: #f7f9f8; }
  .notice h3,.section-title { margin: 0 0 7px; color: #21162f; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
  .notice p { margin: 0 0 11px; color: #5d5662; font-size: 12px; }
  .wa-contact { margin: 0; color: #4f4854; font-size: 11px; }
  .wa-contact a { color: #187a42; font-weight: 800; text-decoration: underline; text-underline-offset: 2px; }
  .customer { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px; padding: 18px 20px; border-radius: 8px; background: #faf8f5; }
  .customer p,.bank p { margin: 3px 0; color: #554e5a; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; } th,td { padding: 11px 8px; border-bottom: .65px solid #e9e3dc; text-align: left; font-size: 12px; }
  th { color: #746b7d; font-size: 10px; letter-spacing: .06em; text-transform: uppercase; } td span { color: #8b828f; font-size: 10px; }
  .right { text-align: right; } .center { text-align: center; }
  .payment { display: grid; grid-template-columns: 1fr .82fr; gap: 24px; align-items: start; margin-top: 25px; }
  .bank { padding: 17px; border-radius: 8px; background: #faf8f5; } .totals td { padding: 8px; }
  .totals .grand td { padding-top: 12px; border: 0; color: #21162f; font-size: 15px; font-weight: 800; }
  .footer { margin-top: 28px; padding-top: 18px; border-top: .75px solid #e7e1da; color: #7b7281; font-size: 11px; text-align: center; } .footer p { margin: 3px; }
</style>
</head>
<body>
  <div class="sheet">
    <header class="header">
      <div class="brand">
        <img src="${embeddedLogo || "image/logo_curativa_hero.svg"}" alt="Logo Curativa" class="brand-logo">
        <div><h1>CURATIVA</h1><p>Cosmética botánica artesanal</p><p>Loja, Ecuador</p><p>${escapeHtml(CONTACTS.email)} · ${escapeHtml(CONTACTS.whatsappLabel)}</p></div>
      </div>
      <div class="meta">
        <h2>Pedido ${escapeHtml(orderReference)}</h2><p>Fecha: ${escapeHtml(today)}</p><span class="status">Pendiente de pago</span>
      </div>
    </header>
    <section class="notice"><h3>Paso requerido: confirmación de pago</h3><p>Para procesar y despachar tu pedido, envía el comprobante de transferencia por WhatsApp.</p><p class="wa-contact">WhatsApp: <a href="https://wa.me/593963036594?text=${whatsappText}">+593 963 036 594</a></p></section>
    <section class="customer"><div><h3 class="section-title">Datos del cliente</h3><p><strong>${escapeHtml(orderData.customerFullName)}</strong></p><p>Pedido generado desde el catálogo Curativa</p></div><div><h3 class="section-title">Dirección de entrega</h3><p>${escapeHtml(orderData.customerAddress)}</p><p>${escapeHtml(orderData.province)}, Ecuador</p></div></section>
    <h3 class="section-title">Detalle de productos</h3><table><thead><tr><th>Descripción</th><th class="center">Cant.</th><th class="right">Precio unitario</th><th class="right">Total</th></tr></thead><tbody>${rows}</tbody></table>
    <section class="payment"><div class="bank"><h3 class="section-title">Datos para transferencia</h3><p><strong>Banco:</strong> Banco Pichincha</p><p><strong>Tipo:</strong> Cuenta de ahorro transaccional</p><p><strong>Cuenta:</strong> 2210381726</p><p><strong>Confirmación:</strong> WhatsApp ${escapeHtml(CONTACTS.whatsappLabel)}</p></div><table class="totals"><tr><td>Subtotal</td><td class="right">${formatCurrency(totals.subtotal)}</td></tr><tr><td>Envío</td><td class="right">${shippingValue}</td></tr><tr><td>IVA (0%)</td><td class="right">$0.00</td></tr><tr class="grand"><td>Total a pagar</td><td class="right">${formatCurrency(totals.total)}</td></tr></table></section>
    <footer class="footer"><p><strong>Tu orden permanecerá reservada por 24 horas mientras confirmamos el pago.</strong></p><p>Una vez recibido el comprobante coordinaremos preparación y entrega.</p></footer>
  </div>
</body>
</html>`;
    }

    function normalizePdfText(value) {
        return String(value ?? "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\x20-\x7E]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function escapePdfText(value) {
        return normalizePdfText(value)
            .replace(/\\/g, "\\\\")
            .replace(/\(/g, "\\(")
            .replace(/\)/g, "\\)");
    }

    function wrapPdfLine(text, maxLength = 72) {
        const words = normalizePdfText(text).split(" ");
        const lines = [];
        let currentLine = "";

        words.forEach((word) => {
            const nextLine = currentLine ? `${currentLine} ${word}` : word;
            if (nextLine.length > maxLength && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = nextLine;
            }
        });

        if (currentLine) lines.push(currentLine);
        return lines.length ? lines : [""];
    }

    function buildOrderPdfLines(orderData, totals) {
        const shippingLabel = totals.shipping === 0 ? "Envio local" : "Envio nacional estimado";
        const lines = [
            { text: "CURATIVA", size: 20 },
            { text: "Documento tecnico de pedido", size: 11 },
            { text: "", size: 10 },
            { text: `Orden: ${getOrderReference()}`, size: 10 },
            { text: `Fecha: ${getOrderDateLabel()}`, size: 10 },
            { text: `Cliente: ${orderData.customerName}`, size: 10 },
            { text: `Provincia: ${orderData.province}`, size: 10 },
            { text: "", size: 10 },
            { text: "Detalle del pedido", size: 13 },
            { text: "", size: 10 }
        ];

        cart.forEach((item, index) => {
            lines.push({
                text: `${index + 1}. ${item.qty} x ${item.name} | Unitario ${formatCurrency(item.price)} | Total ${formatCurrency(item.qty * item.price)}`,
                size: 10
            });
        });

        lines.push(
            { text: "", size: 10 },
            { text: "Resumen", size: 13 },
            { text: `Items: ${totals.totalItems}`, size: 10 },
            { text: `Subtotal: ${formatCurrency(totals.subtotal)}`, size: 10 },
            { text: `${shippingLabel}: ${totals.shipping == null ? "Por definir" : formatCurrency(totals.shipping)}`, size: 10 },
            { text: `Total estimado: ${formatCurrency(totals.total)}`, size: 12 },
            { text: "", size: 10 },
            { text: "Salida generada desde el checkout digital de Curativa.", size: 9 }
        );

        return lines;
    }

    function createPdfDocument(lineSpecs) {
        const pageWidth = 595;
        const pageHeight = 842;
        const marginX = 52;
        const topStart = 790;
        const bottomLimit = 54;
        const pages = [];
        let commands = [];
        let currentY = topStart;

        const pushPage = () => {
            pages.push(commands.join("\n"));
            commands = [];
            currentY = topStart;
        };

        lineSpecs.forEach((spec) => {
            const wrappedLines = wrapPdfLine(spec.text, spec.size >= 13 ? 54 : 78);
            wrappedLines.forEach((line) => {
                const lineHeight = (spec.size || 10) + 6;
                if (currentY - lineHeight < bottomLimit) {
                    pushPage();
                }
                commands.push(`BT /F1 ${spec.size || 10} Tf 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdfText(line)}) Tj ET`);
                currentY -= lineHeight;
            });
        });

        if (commands.length) pushPage();

        const objects = [];
        const addObject = (body) => {
            objects.push(body);
            return objects.length;
        };

        addObject("<< /Type /Catalog /Pages 2 0 R >>");
        const pagesObjectIndex = addObject("<< /Type /Pages /Kids [] /Count 0 >>");
        const fontObjectIndex = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
        const pageRefs = [];

        pages.forEach((content) => {
            const contentObjectIndex = addObject(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
            const pageObjectIndex = addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontObjectIndex} 0 R >> >> /Contents ${contentObjectIndex} 0 R >>`);
            pageRefs.push(`${pageObjectIndex} 0 R`);
        });

        objects[pagesObjectIndex - 1] = `<< /Type /Pages /Kids [${pageRefs.join(" ")}] /Count ${pageRefs.length} >>`;

        let pdf = "%PDF-1.4\n";
        const offsets = [0];

        objects.forEach((body, index) => {
            offsets.push(pdf.length);
            pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
        });

        const xrefStart = pdf.length;
        pdf += `xref\n0 ${objects.length + 1}\n`;
        pdf += "0000000000 65535 f \n";
        offsets.slice(1).forEach((offset) => {
            pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
        });
        pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
        return pdf;
    }

    function buildLandscapePdfSections(orderData, totals) {
        const rows = cart.map((item, index) =>
            `${index + 1}. ${item.name} | ${item.qty} u | ${formatCurrency(item.price)} | ${formatCurrency(item.qty * item.price)}`
        );

        return [
            { text: "Detalle del pedido", size: 13 },
            { text: "", size: 8 },
            ...rows.map((row) => ({ text: row, size: 10 })),
            { text: "", size: 10 },
            { text: "Resumen", size: 13 },
            { text: `Cliente: ${orderData.customerName}`, size: 10 },
            { text: `Provincia: ${orderData.province}`, size: 10 },
            { text: `Items: ${totals.totalItems}`, size: 10 },
            { text: `Subtotal: ${formatCurrency(totals.subtotal)}`, size: 10 },
            { text: `Envio: ${totals.shipping === 0 ? "Loja sin recargo" : formatCurrency(totals.shipping)}`, size: 10 },
            { text: `Total: ${formatCurrency(totals.total)}`, size: 12 },
            { text: "", size: 10 },
            { text: "Medios de pago: Deuna y transferencia Banco Pichincha.", size: 9 }
        ];
    }

    function createLandscapeOrderPdf(orderData, totals) {
        const pageWidth = 842;
        const pageHeight = 595;
        const marginX = 44;
        const topStart = 500;
        const bottomLimit = 72;
        const contentLines = buildLandscapePdfSections(orderData, totals);
        const rawPages = [];
        let commands = [];
        let currentY = topStart;

        const flushPage = () => {
            rawPages.push(commands.join("\n"));
            commands = [];
            currentY = topStart;
        };

        contentLines.forEach((spec) => {
            const wrapped = wrapPdfLine(spec.text, spec.size >= 13 ? 72 : 104);
            wrapped.forEach((line) => {
                const lineHeight = (spec.size || 10) + 5;
                if (currentY - lineHeight < bottomLimit) {
                    flushPage();
                }
                commands.push(`BT /F1 ${spec.size || 10} Tf 1 0 0 1 ${marginX} ${currentY} Tm (${escapePdfText(line)}) Tj ET`);
                currentY -= lineHeight;
            });
        });

        if (commands.length) flushPage();

        const today = getOrderDateLabel();
        const orderRef = getOrderReference();
        const objects = [];
        const addObject = (body) => {
            objects.push(body);
            return objects.length;
        };

        addObject("<< /Type /Catalog /Pages 2 0 R >>");
        const pagesObjectIndex = addObject("<< /Type /Pages /Kids [] /Count 0 >>");
        const fontObjectIndex = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
        const pageRefs = [];

        rawPages.forEach((bodyContent, pageIndex) => {
            const headerCommands = [
                "0.8 w 44 544 m 798 544 l S",
                `BT /F1 22 Tf 1 0 0 1 44 560 Tm (${escapePdfText("CURATIVA")}) Tj ET`,
                `BT /F1 11 Tf 1 0 0 1 44 544 Tm (${escapePdfText("Catalogo comercial · Pedido digital A4 horizontal")}) Tj ET`,
                `BT /F1 10 Tf 1 0 0 1 620 560 Tm (${escapePdfText(`Orden ${orderRef}`)}) Tj ET`,
                `BT /F1 10 Tf 1 0 0 1 620 546 Tm (${escapePdfText(`Fecha ${today}`)}) Tj ET`
            ].join("\n");

            const footerCommands = [
                "0.8 w 44 44 m 798 44 l S",
                `BT /F1 9 Tf 1 0 0 1 44 28 Tm (${escapePdfText("WhatsApp +593 963 036 594 · Curativa Cosmetica Natural")}) Tj ET`,
                `BT /F1 9 Tf 1 0 0 1 470 28 Tm (${escapePdfText("Pago Deuna · Transferencia Banco Pichincha")}) Tj ET`,
                `BT /F1 9 Tf 1 0 0 1 744 28 Tm (${escapePdfText(`Pag ${pageIndex + 1}`)}) Tj ET`
            ].join("\n");

            const pageStream = `${headerCommands}\n${bodyContent}\n${footerCommands}`;
            const contentObjectIndex = addObject(`<< /Length ${pageStream.length} >>\nstream\n${pageStream}\nendstream`);
            const pageObjectIndex = addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontObjectIndex} 0 R >> >> /Contents ${contentObjectIndex} 0 R >>`);
            pageRefs.push(`${pageObjectIndex} 0 R`);
        });

        objects[pagesObjectIndex - 1] = `<< /Type /Pages /Kids [${pageRefs.join(" ")}] /Count ${pageRefs.length} >>`;

        let pdf = "%PDF-1.4\n";
        const offsets = [0];
        objects.forEach((body, index) => {
            offsets.push(pdf.length);
            pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
        });

        const xrefStart = pdf.length;
        pdf += `xref\n0 ${objects.length + 1}\n`;
        pdf += "0000000000 65535 f \n";
        offsets.slice(1).forEach((offset) => {
            pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
        });
        pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
        return pdf;
    }

    function downloadOrderPdf(orderData, totals) {
        const pdf = createLandscapeOrderPdf(orderData, totals);
        const blob = new Blob([pdf], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${getOrderReference()}-${normalizePdfText(orderData.customerFullName || "pedido").replace(/\s+/g, "-").toLowerCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1500);
    }

    function loadSvgLogoDataUrl() {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                try {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.naturalWidth || 900;
                    canvas.height = img.naturalHeight || 320;
                    const ctx = canvas.getContext("2d");
                    if (!ctx) {
                        resolve(null);
                        return;
                    }
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL("image/png"));
                } catch {
                    resolve(null);
                }
            };
            img.onerror = () => resolve(null);
            img.src = "image/logo_curativa_hero.svg";
        });
    }

    function drawStyledPdfFrame(doc, pageWidth, pageHeight, orderData, totals, pageNumber, pageCount, logoDataUrl) {
        doc.setDrawColor(205, 191, 174);
        doc.setLineWidth(0.5);
        doc.roundedRect(12, 10, pageWidth - 24, pageHeight - 20, 5, 5, "S");
        doc.setFillColor(247, 242, 235);
        doc.rect(12, 10, pageWidth - 24, 26, "F");
        doc.line(12, 36, pageWidth - 12, 36);
        doc.line(12, pageHeight - 24, pageWidth - 12, pageHeight - 24);

        if (logoDataUrl) {
            doc.addImage(logoDataUrl, "PNG", 18, 14, 28, 18, undefined, "FAST");
        }

        doc.setTextColor(61, 45, 32);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.text("CURATIVA", 52, 21);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text("Catalogo comercial · Pedido A4 horizontal", 52, 28);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.text(`ORDEN ${getOrderReference()}`, pageWidth - 18, 18, { align: "right" });
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.5);
        doc.text(`Fecha ${getOrderDateLabel()}`, pageWidth - 18, 24, { align: "right" });
        doc.text(`Cliente ${normalizePdfText(orderData.customerName)}`, pageWidth - 18, 30, { align: "right" });

        doc.setFillColor(250, 247, 242);
        doc.roundedRect(pageWidth - 92, 46, 72, 40, 4, 4, "FD");
        doc.setDrawColor(212, 198, 181);
        doc.roundedRect(pageWidth - 92, 46, 72, 40, 4, 4, "S");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(125, 96, 67);
        doc.text("RESUMEN", pageWidth - 86, 54);
        doc.setTextColor(61, 45, 32);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.4);
        doc.text(`Items: ${totals.totalItems}`, pageWidth - 86, 62);
        doc.text(`Subtotal: ${formatCurrency(totals.subtotal)}`, pageWidth - 86, 68);
        doc.text(`Envio: ${totals.shipping === 0 ? "Loja sin recargo" : formatCurrency(totals.shipping)}`, pageWidth - 86, 74);
        doc.setFont("helvetica", "bold");
        doc.text(`Total: ${formatCurrency(totals.total)}`, pageWidth - 86, 80);

        doc.setTextColor(93, 79, 66);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8.2);
        doc.text("WhatsApp +593 963 036 594", 18, pageHeight - 15);
        doc.text("Pago Deuna · Transferencia Banco Pichincha", pageWidth / 2, pageHeight - 15, { align: "center" });
        doc.text(`Pagina ${pageNumber} de ${pageCount}`, pageWidth - 18, pageHeight - 15, { align: "right" });
    }

    function buildPaymentSheetHtml(orderData, totals, logoDataUrl) {
        const rows = cart.map((item) => `
            <tr>
                <td>
                    <strong>${escapeHtml(item.name)}</strong><br>
                    <span style="font-size: 8.5pt; color: #64748b;">Producto Curativa</span>
                </td>
                <td class="text-center">${item.qty}</td>
                <td class="text-right">${formatCurrency(item.price)}</td>
                <td class="text-right">${formatCurrency(item.qty * item.price)}</td>
            </tr>
        `).join("");

        const shippingValue = totals.shipping == null ? "$0.00" : formatCurrency(totals.shipping);
        const logoBlock = logoDataUrl
            ? `<img src="${logoDataUrl}" alt="Curativa" style="height: 24mm; width: auto; display:block; margin-bottom: 4px;">`
            : `<div class="logo-title">curativa</div>`;

        return `
            <style>
                .pdf-sheet-root, .pdf-sheet-root * { box-sizing: border-box; }
                .pdf-sheet-root {
                    width: 297mm;
                    min-height: 210mm;
                    position: relative;
                    padding: 16mm 15mm;
                    background-color: #f8fafc;
                    color: #1e293b;
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }
                .pdf-sheet-root .header { border-bottom: 2px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 18px; }
                .pdf-sheet-root .header-table, .pdf-sheet-root .info-section, .pdf-sheet-root .details-table, .pdf-sheet-root .totals-table { width: 100%; border-collapse: collapse; }
                .pdf-sheet-root .header-table td { vertical-align: top; }
                .pdf-sheet-root .logo-title { font-size: 24pt; font-weight: bold; color: #0f172a; letter-spacing: -0.5px; }
                .pdf-sheet-root .logo-subtitle { font-size: 10pt; color: #64748b; margin-top: 4px; text-transform: uppercase; letter-spacing: 1px; }
                .pdf-sheet-root .meta-title { text-align: right; font-size: 14pt; font-weight: bold; color: #0284c7; text-transform: uppercase; letter-spacing: 0.5px; }
                .pdf-sheet-root .meta-details { text-align: right; font-size: 9.5pt; color: #334155; margin-top: 6px; line-height: 1.45; }
                .pdf-sheet-root .info-section { margin-bottom: 18px; }
                .pdf-sheet-root .info-section td {
                    width: 50%;
                    vertical-align: top;
                    padding: 12px 15px;
                    background-color: #ffffff;
                    border: 1px solid #e2e8f0;
                }
                .pdf-sheet-root .info-section td:first-child { border-top-left-radius: 6px; border-bottom-left-radius: 6px; border-right: none; }
                .pdf-sheet-root .info-section td:last-child { border-top-right-radius: 6px; border-bottom-right-radius: 6px; }
                .pdf-sheet-root .info-label { font-size: 8.5pt; text-transform: uppercase; color: #64748b; font-weight: bold; margin-bottom: 4px; letter-spacing: 0.5px; }
                .pdf-sheet-root .info-value { font-size: 10pt; color: #0f172a; line-height: 1.45; }
                .pdf-sheet-root .details-box {
                    background-color: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    margin-bottom: 18px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
                    overflow: hidden;
                }
                .pdf-sheet-root .details-title {
                    font-size: 11pt;
                    font-weight: bold;
                    color: #0f172a;
                    padding: 15px 20px;
                    border-bottom: 1px solid #e2e8f0;
                    margin: 0;
                    background-color: #f1f5f9;
                }
                .pdf-sheet-root .details-table th {
                    background-color: #ffffff;
                    color: #64748b;
                    font-size: 8.5pt;
                    text-transform: uppercase;
                    font-weight: bold;
                    padding: 12px 20px;
                    text-align: left;
                    border-bottom: 1px solid #e2e8f0;
                    letter-spacing: 0.5px;
                }
                .pdf-sheet-root .details-table td {
                    padding: 13px 20px;
                    font-size: 10pt;
                    color: #334155;
                    border-bottom: 1px solid #f1f5f9;
                    vertical-align: middle;
                }
                .pdf-sheet-root .details-table tr:last-child td { border-bottom: none; }
                .pdf-sheet-root .text-right { text-align: right !important; }
                .pdf-sheet-root .text-center { text-align: center !important; }
                .pdf-sheet-root .totals-container {
                    border-top: 2px solid #e2e8f0;
                    background-color: #f8fafc;
                    padding: 15px 20px;
                }
                .pdf-sheet-root .totals-table {
                    width: 100%;
                    max-width: 110mm;
                    margin-left: auto;
                }
                .pdf-sheet-root .totals-table td { padding: 4px 0; font-size: 10pt; color: #475569; }
                .pdf-sheet-root .grand-total-label { font-size: 11pt; font-weight: bold; color: #0f172a; padding-top: 8px; }
                .pdf-sheet-root .grand-total-value { font-size: 13pt; font-weight: bold; color: #0284c7; padding-top: 8px; }
                .pdf-sheet-root .instructions {
                    background-color: #f0fdf4;
                    border: 1px solid #bbf7d0;
                    border-radius: 6px;
                    padding: 15px;
                    margin-bottom: 22px;
                }
                .pdf-sheet-root .instructions-title { font-size: 9.5pt; font-weight: bold; color: #166534; margin-bottom: 5px; }
                .pdf-sheet-root .instructions-text { font-size: 9pt; color: #14532d; line-height: 1.5; margin: 0; }
                .pdf-sheet-root .footer {
                    position: absolute;
                    bottom: 16mm;
                    left: 15mm;
                    right: 15mm;
                    border-top: 1px solid #e2e8f0;
                    padding-top: 12px;
                    text-align: center;
                }
                .pdf-sheet-root .footer-text { font-size: 8.5pt; color: #94a3b8; line-height: 1.5; margin: 0; }
                .pdf-sheet-root .footer-bold { color: #64748b; font-weight: 600; }
            </style>
            <div class="pdf-sheet-root">
                <div class="header">
                    <table class="header-table">
                        <tr>
                            <td>
                                ${logoBlock}
                                <div class="logo-subtitle">Bienestar Integral</div>
                            </td>
                            <td>
                                <div class="meta-title">Ficha de Pago</div>
                                <div class="meta-details">
                                    <strong>Nro. Control:</strong> ${escapeHtml(getOrderReference())}<br>
                                    <strong>Fecha de Emisión:</strong> ${escapeHtml(getOrderDateLabel())}<br>
                                    <strong>Estado:</strong> Pendiente de Validación
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <table class="info-section">
                    <tr>
                        <td>
                            <div class="info-label">Preparado para</div>
                            <div class="info-value">
                                <strong>${escapeHtml(orderData.customerFullName)}</strong><br>
                                Provincia: ${escapeHtml(orderData.province)}<br>
                                Dirección: ${escapeHtml(orderData.customerAddress)}<br>
                                Canal de confirmación: WhatsApp
                            </div>
                        </td>
                        <td>
                            <div class="info-label">Método de Pago Solicitado</div>
                            <div class="info-value">
                                <strong>Transferencia / QR digital</strong><br>
                                Deuna o transferencia Banco Pichincha<br>
                                Envío: ${totals.shipping === 0 ? "Loja sin recargo" : `Estimado ${shippingValue}`}
                            </div>
                        </td>
                    </tr>
                </table>

                <div class="details-box">
                    <h2 class="details-title">Tu Pedido</h2>
                    <table class="details-table">
                        <thead>
                            <tr>
                                <th style="width: 55%;">Descripción del Artículo</th>
                                <th style="width: 15%;" class="text-center">Cant.</th>
                                <th style="width: 15%;" class="text-right">Precio Unit.</th>
                                <th style="width: 15%;" class="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                    <div class="totals-container">
                        <table class="totals-table">
                            <tr>
                                <td class="text-right">Subtotal:</td>
                                <td class="text-right" style="width: 35%; font-weight: 500;">${formatCurrency(totals.subtotal)}</td>
                            </tr>
                            <tr>
                                <td class="text-right">Envío:</td>
                                <td class="text-right" style="font-weight: 500;">${shippingValue}</td>
                            </tr>
                            <tr>
                                <td class="text-right">IVA (0%):</td>
                                <td class="text-right" style="font-weight: 500;">$0.00</td>
                            </tr>
                            <tr>
                                <td class="text-right grand-total-label">Total a Pagar:</td>
                                <td class="text-right grand-total-value">${formatCurrency(totals.total)}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="instructions">
                    <div class="instructions-title">Instrucciones para reportar su pago:</div>
                    <p class="instructions-text">
                        1. Descargue esta ficha y conserve el PDF generado.<br>
                        2. Abra el chat de WhatsApp generado automáticamente y adjunte manualmente el archivo descargado.<br>
                        3. Realice el pago por Deuna o transferencia Banco Pichincha y envíe su comprobante para validación.
                    </p>
                </div>

                <div class="footer">
                    <p class="footer-text">
                        <span class="footer-bold">Curativa © 2026</span> · Documento generado desde el catálogo digital.<br>
                        Loja, Ecuador · WhatsApp +593 963 036 594 · Pago Deuna y transferencia Banco Pichincha
                    </p>
                </div>
            </div>
        `;
    }

    async function downloadOrderPdf(orderData, totals) {
        if (typeof window.html2pdf !== "function") {
            alert("No se pudo cargar el generador PDF.");
            return null;
        }

        const logoDataUrl = await loadSvgLogoDataUrl();
        const fileName = `${getOrderReference()}-${normalizePdfText(orderData.customerFullName || "pedido").replace(/\s+/g, "-").toLowerCase()}.pdf`;
        const tempContainer = document.createElement("div");
        tempContainer.style.position = "fixed";
        tempContainer.style.left = "0";
        tempContainer.style.top = "0";
        tempContainer.style.opacity = "0";
        tempContainer.style.pointerEvents = "none";
        tempContainer.style.zIndex = "-1";
        tempContainer.style.width = "297mm";
        tempContainer.style.background = "#f8fafc";
        tempContainer.innerHTML = buildPaymentSheetHtml(orderData, totals, logoDataUrl);
        document.body.appendChild(tempContainer);

        try {
            await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
            await window.html2pdf().set({
                margin: 0,
                filename: fileName,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, backgroundColor: "#f8fafc" },
                jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
                pagebreak: { mode: ["avoid-all", "css"] }
            }).from(tempContainer).save();
            return fileName;
        } finally {
            tempContainer.remove();
        }
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
            if (plusButton.closest(".modal-qty-controls")) {
                const card = document.querySelector(`.product-item[data-id="${currentDetailId}"]`);
                if (card) updateProductQty(card, 1);
                
                const addBtn = document.getElementById("add-to-cart-detail-btn");
                if (addBtn) {
                    const origText = addBtn.dataset.originalText || addBtn.innerHTML;
                    if (!addBtn.dataset.originalText) addBtn.dataset.originalText = origText;
                    
                    addBtn.innerHTML = "<i class='fas fa-check'></i> ¡Añadido!";
                    addBtn.style.backgroundColor = "#4caf50";
                    addBtn.style.borderColor = "#4caf50";
                    
                    if (addBtn.timeoutId) clearTimeout(addBtn.timeoutId);
                    addBtn.timeoutId = setTimeout(() => {
                        addBtn.innerHTML = origText;
                        addBtn.style.backgroundColor = "";
                        addBtn.style.borderColor = "";
                    }, 1500);
                }
            } else {
                updateProductQty(plusButton.closest(".product-item"), 1);
            }
        }

        if (minusButton) {
            event.stopPropagation();
            if (minusButton.closest(".modal-qty-controls")) {
                const card = document.querySelector(`.product-item[data-id="${currentDetailId}"]`);
                if (card) updateProductQty(card, -1);

                const addBtn = document.getElementById("add-to-cart-detail-btn");
                if (addBtn) {
                    const origText = addBtn.dataset.originalText || addBtn.innerHTML;
                    if (!addBtn.dataset.originalText) addBtn.dataset.originalText = origText;

                    addBtn.innerHTML = "-1";
                    addBtn.style.backgroundColor = "var(--color-secondary)";
                    addBtn.style.borderColor = "var(--color-secondary)";

                    if (addBtn.timeoutId) clearTimeout(addBtn.timeoutId);
                    addBtn.timeoutId = setTimeout(() => {
                        addBtn.innerHTML = origText;
                        addBtn.style.backgroundColor = "";
                        addBtn.style.borderColor = "";
                    }, 1500);
                }
            } else {
                updateProductQty(minusButton.closest(".product-item"), -1);
            }
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

    function syncDetailModalQty() {
        if (!currentDetailId) return;
        const modalQtyDisplay = document.getElementById("modal-qty-display");
        if (!modalQtyDisplay) return;
        const item = cart.find(i => i.id === currentDetailId);
        modalQtyDisplay.textContent = item ? String(item.qty) : "0";
    }

    function updateCartUI() {
        const provinceSelect = document.getElementById("customer-province");
        const selectedProvince = provinceSelect ? provinceSelect.value : "";
        const totals = calculateCartTotals(selectedProvince);

        if (cartCountEl) cartCountEl.textContent = String(totals.totalItems);
        updateOrderMeta(selectedProvince);
        renderModalList(totals);
        syncDetailModalQty();
    }

    function renderModalList(totals) {
        if (!cartItemsList) return;

        cartItemsList.innerHTML = "";
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<div class="empty-msg"><i class="fas fa-basket-shopping"></i><strong>Tu carrito está vacío</strong><span>Agrega productos del catálogo para preparar tu pedido.</span></div>';
        } else {
            cart.forEach((item) => {
                const productCard = document.querySelector(`.product-item[data-id="${item.id}"]`);
                const productImage = productCard?.querySelector(".card-thumb img")?.getAttribute("src") || "image/logo_curativa_hero.svg";
                const row = document.createElement("div");
                row.className = "cart-item-row";
                row.innerHTML = `
                    <div class="cart-item-product">
                        <div class="cart-item-thumb"><img src="${productImage}" alt=""></div>
                        <div class="item-info">
                            <h4>${item.name}</h4>
                            <span class="item-price">$${item.price.toFixed(2)} c/u</span>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="modal-qty-controls">
                            <button onclick="changeModalQty('${item.id}', -1)" class="modal-qty-btn" aria-label="Restar una unidad"><i class="fas fa-minus"></i></button>
                            <span class="modal-qty-value">${item.qty}</span>
                            <button onclick="changeModalQty('${item.id}', 1)" class="modal-qty-btn" aria-label="Agregar una unidad"><i class="fas fa-plus"></i></button>
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

    const cartModalEl = document.getElementById("cart-modal");
    const mobileCheckoutNext = document.getElementById("mobile-checkout-next");
    const mobileCheckoutBack = document.getElementById("mobile-checkout-back");
    const mobileCheckoutSteps = document.querySelectorAll(".checkout-progress-step");
    let mobileCheckoutStep = 1;

    function setMobileCheckoutStep(step) {
        mobileCheckoutStep = Math.max(1, Math.min(3, Number(step) || 1));
        if (!cartModalEl) return;

        cartModalEl.dataset.checkoutStep = String(mobileCheckoutStep);
        mobileCheckoutSteps.forEach((item) => {
            const itemStep = Number(item.dataset.checkoutTarget);
            item.classList.toggle("active", itemStep === mobileCheckoutStep);
            item.classList.toggle("complete", itemStep < mobileCheckoutStep);
            if (itemStep === mobileCheckoutStep) item.setAttribute("aria-current", "step");
            else item.removeAttribute("aria-current");
        });

        if (mobileCheckoutBack) mobileCheckoutBack.hidden = mobileCheckoutStep === 1;
        if (mobileCheckoutNext) {
            mobileCheckoutNext.hidden = mobileCheckoutStep === 3;
            mobileCheckoutNext.innerHTML = mobileCheckoutStep === 1
                ? 'Proceder a pagar <i class="fas fa-arrow-right"></i>'
                : 'Continuar al pago <i class="fas fa-arrow-right"></i>';
        }

        const drawer = cartModalEl.querySelector(".cart-modal-advanced");
        if (drawer) drawer.scrollTo({ top: 0, behavior: "smooth" });
    }

    function validateMobileCheckoutStep() {
        if (mobileCheckoutStep === 1) {
            if (cart.length === 0) {
                alert("Agrega al menos un producto antes de continuar.");
                return false;
            }
            const provinceField = document.getElementById("customer-province");
            if (!provinceField || !String(provinceField.value || "").trim()) {
                alert("Selecciona tu provincia.");
                if (provinceField) provinceField.focus();
                return false;
            }
        }

        if (mobileCheckoutStep === 2) {
            const requiredFields = [
                [document.getElementById("customer-name"), "Escribe tus nombres."],
                [document.getElementById("customer-lastname"), "Escribe tus apellidos."],
                [document.getElementById("customer-address"), "Escribe la dirección de entrega."]
            ];
            const invalid = requiredFields.find(([field]) => !field || !String(field.value || "").trim());
            if (invalid) {
                alert(invalid[1]);
                if (invalid[0]) invalid[0].focus();
                return false;
            }
        }
        return true;
    }

    if (mobileCheckoutNext) {
        mobileCheckoutNext.addEventListener("click", () => {
            if (!validateMobileCheckoutStep()) return;
            setMobileCheckoutStep(mobileCheckoutStep + 1);
        });
    }

    if (mobileCheckoutBack) {
        mobileCheckoutBack.addEventListener("click", () => setMobileCheckoutStep(mobileCheckoutStep - 1));
    }

    mobileCheckoutSteps.forEach((item) => {
        item.addEventListener("click", () => {
            const targetStep = Number(item.dataset.checkoutTarget);
            if (targetStep < mobileCheckoutStep) setMobileCheckoutStep(targetStep);
        });
    });

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

    async function downloadOrderPdfFromMockup(orderData, totals) {
        const jspdfNs = window.jspdf;
        if (!jspdfNs || typeof jspdfNs.jsPDF !== "function") {
            alert("No se pudo cargar el generador PDF.");
            return null;
        }

        const { jsPDF } = jspdfNs;
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
            compress: true
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const logoDataUrl = await loadSvgLogoDataUrl();
        const fileName = `${getOrderReference()}-${normalizePdfText(orderData.customerFullName || "pedido").replace(/\s+/g, "-").toLowerCase()}.pdf`;
        const shippingValue = totals.shipping == null ? "$0.00" : formatCurrency(totals.shipping);
        const wrapPdf = (text, width) => doc.splitTextToSize(normalizePdfText(text), width);

        const drawHeaderFooter = (pageNumber) => {
            doc.setFillColor(255, 255, 255);
            doc.rect(0, 0, pageWidth, pageHeight, "F");

            doc.setDrawColor(235, 228, 219);
            doc.setLineWidth(0.45);
            doc.line(15, 31, pageWidth - 15, 31);
            doc.line(15, pageHeight - 18, pageWidth - 15, pageHeight - 18);

            if (logoDataUrl) {
                doc.addImage(logoDataUrl, "PNG", 15, 8, 25, 20, undefined, "FAST");
            } else {
                doc.setFont("helvetica", "bold");
                doc.setFontSize(22);
                doc.setTextColor(15, 23, 42);
                doc.text("curativa", 15, 19);
            }

            doc.setFont("helvetica", "bold");
            doc.setFontSize(13);
            doc.setTextColor(33, 22, 47);
            doc.text(`Pedido ${getOrderReference()}`, pageWidth - 15, 13, { align: "right" });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(91, 81, 104);
            doc.text(`Fecha: ${getOrderDateLabel()}`, pageWidth - 15, 18, { align: "right" });
            doc.setFillColor(255, 247, 220);
            doc.setDrawColor(242, 207, 124);
            doc.roundedRect(pageWidth - 55, 21, 40, 7, 3.5, 3.5, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7);
            doc.setTextColor(155, 92, 9);
            doc.text("PENDIENTE DE PAGO", pageWidth - 35, 25.6, { align: "center" });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(123, 114, 129);
            doc.text("Curativa 2026 · Loja, Ecuador · WhatsApp +593 963 036 594", pageWidth / 2, pageHeight - 10, { align: "center" });
            doc.text(`Pag. ${pageNumber}`, pageWidth - 15, pageHeight - 10, { align: "right" });
        };

        const drawInfoBoxes = () => {
            doc.setFillColor(245, 247, 246);
            doc.setDrawColor(37, 211, 102);
            doc.setLineWidth(0.45);
            doc.roundedRect(15, 37, 180, 24, 2, 2, "F");
            doc.line(15, 37, 15, 61);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            doc.setTextColor(33, 22, 47);
            doc.text("PASO REQUERIDO: CONFIRMACION DE PAGO", 21, 44);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.2);
            doc.setTextColor(80, 72, 86);
            doc.text(wrapPdf("Envia el comprobante de transferencia por WhatsApp para procesar y despachar tu pedido.", 160), 21, 50);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(80, 72, 86);
            doc.text("WhatsApp:", 21, 57.5);
            doc.setTextColor(24, 122, 66);
            doc.textWithLink("+593 963 036 594", 38, 57.5, {
                url: `https://wa.me/593963036594?text=${encodeURIComponent(`Hola, adjunto mi comprobante para el pedido ${getOrderReference()}.`)}`
            });

            doc.setDrawColor(235, 228, 219);
            doc.setFillColor(250, 248, 245);
            doc.roundedRect(15, 67, 180, 28, 2, 2, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7.5);
            doc.setTextColor(116, 90, 132);
            doc.text("DATOS DEL CLIENTE", 21, 74);
            doc.text("DIRECCION DE ENTREGA", 109, 74);
            doc.setFontSize(10);
            doc.setTextColor(33, 22, 47);
            doc.text(wrapPdf(orderData.customerFullName, 74), 21, 80);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(80, 72, 86);
            doc.text("Pedido generado desde el catalogo Curativa", 21, 87);
            doc.text(wrapPdf(orderData.customerAddress, 78), 109, 80);
            doc.text(`${normalizePdfText(orderData.province)}, Ecuador`, 109, 90);
        };

        const drawTotalsAndNotes = (startY) => {
            if (startY > pageHeight - 76) {
                doc.addPage();
                drawHeaderFooter(doc.internal.getNumberOfPages());
                startY = 38;
            }
            doc.setDrawColor(235, 228, 219);
            doc.setFillColor(250, 248, 245);
            doc.roundedRect(15, startY, 88, 34, 2, 2, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(7.5);
            doc.setTextColor(116, 90, 132);
            doc.text("DATOS PARA TRANSFERENCIA", 21, startY + 7);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(80, 72, 86);
            doc.text(["Banco: Banco Pichincha", "Tipo: Cuenta de ahorro transaccional", "Cuenta: 2210381726", "Confirmacion: WhatsApp +593 963 036 594"], 21, startY + 14);

            doc.setFillColor(255, 255, 255);
            doc.roundedRect(109, startY, 86, 34, 2, 2, "FD");

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9.2);
            doc.setTextColor(80, 72, 86);
            doc.text("Subtotal", 116, startY + 8);
            doc.text("Envio", 116, startY + 14);
            doc.text("IVA (0%)", 116, startY + 20);

            doc.setFont("helvetica", "bold");
            doc.text(formatCurrency(totals.subtotal), 190, startY + 8, { align: "right" });
            doc.text(shippingValue, 190, startY + 14, { align: "right" });
            doc.text("$0.00", 190, startY + 20, { align: "right" });

            doc.setDrawColor(235, 228, 219);
            doc.line(116, startY + 23, 190, startY + 23);
            doc.setFontSize(11);
            doc.setTextColor(33, 22, 47);
            doc.text("Total a pagar", 116, startY + 30);
            doc.text(formatCurrency(totals.total), 190, startY + 30, { align: "right" });

            const noteY = startY + 42;
            doc.setFont("helvetica", "bold");
            doc.setFontSize(8.5);
            doc.setTextColor(70, 60, 77);
            doc.text("Tu orden permanecera reservada por 24 horas mientras confirmamos el pago.", pageWidth / 2, noteY, { align: "center" });
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.setTextColor(123, 114, 129);
            doc.text("Una vez recibido el comprobante coordinaremos preparacion y entrega.", pageWidth / 2, noteY + 5, { align: "center" });
        };

        drawHeaderFooter(1);
        drawInfoBoxes();

        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(116, 90, 132);
        doc.text("DETALLE DE LOS PRODUCTOS", 15, 104);

        doc.autoTable({
            startY: 108,
            margin: { left: 15, right: 15, top: 38, bottom: 70 },
            head: [["Descripción del Artículo", "Cant.", "Precio Unit.", "Total"]],
            body: cart.map((item) => ([
                `${normalizePdfText(item.name)}\nProducto Curativa`,
                String(item.qty),
                formatCurrency(item.price),
                formatCurrency(item.qty * item.price)
            ])),
            theme: "plain",
            styles: {
                font: "helvetica",
                fontSize: 9,
                textColor: [53, 45, 61],
                cellPadding: { top: 4, right: 5, bottom: 4, left: 5 },
                lineColor: [235, 228, 219],
                lineWidth: 0.35,
                valign: "middle"
            },
            headStyles: {
                fillColor: [250, 248, 245],
                textColor: [116, 107, 125],
                fontStyle: "bold"
            },
            columnStyles: {
                0: { cellWidth: 99 },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 28, halign: "right" },
                3: { cellWidth: 28, halign: "right" }
            },
            didParseCell: (data) => {
                data.cell.styles.lineColor = [235, 228, 219];
                data.cell.styles.lineWidth = { bottom: 0.35 };
            }
        });

        const afterTableY = Math.max((doc.lastAutoTable?.finalY || 145) + 7, 154);
        drawTotalsAndNotes(afterTableY);

        const blob = doc.output("blob");
        return { fileName, blob };
    }

    function isAppleMobileBrowser() {
        const platform = navigator.platform || "";
        const userAgent = navigator.userAgent || "";
        return /iPad|iPhone|iPod/.test(userAgent)
            || (platform === "MacIntel" && navigator.maxTouchPoints > 1);
    }

    function deliverGeneratedPdf(pdfResult, previewWindow = null) {
        if (!pdfResult?.blob || !pdfResult?.fileName) return false;

        const blobUrl = URL.createObjectURL(pdfResult.blob);
        if (previewWindow && !previewWindow.closed) {
            previewWindow.location.replace(blobUrl);
        } else {
            const downloadLink = document.createElement("a");
            downloadLink.href = blobUrl;
            downloadLink.download = pdfResult.fileName;
            downloadLink.rel = "noopener";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            downloadLink.remove();
        }

        // Safari needs the object URL to remain alive while its PDF viewer loads.
        window.setTimeout(() => URL.revokeObjectURL(blobUrl), 120000);
        return true;
    }

    async function downloadOrderPdfFromTemplate(orderData, totals) {
        if (typeof window.html2pdf !== "function") {
            alert("No se pudo cargar el generador visual del PDF.");
            return null;
        }

        const fileName = `${getOrderReference()}-${normalizePdfText(orderData.customerFullName || "pedido").replace(/\s+/g, "-").toLowerCase()}.pdf`;
        const renderHost = document.createElement("div");
        renderHost.id = "pdf-render-host";
        renderHost.setAttribute("aria-hidden", "true");
        Object.assign(renderHost.style, {
            position: "fixed",
            left: "-10000px",
            top: "0",
            width: "900px",
            minHeight: "1250px",
            padding: "20px",
            background: "#eee8e1",
            pointerEvents: "none",
            zIndex: "-9999"
        });

        try {
            const embeddedLogo = await loadSvgLogoDataUrl();
            const templateDocument = new DOMParser().parseFromString(
                buildPrintableDocument(orderData, totals, embeddedLogo || ""),
                "text/html"
            );
            const templateStyle = templateDocument.querySelector("style");
            const templateSheet = templateDocument.querySelector(".sheet");
            if (!templateStyle || !templateSheet) throw new Error("No se pudo preparar la plantilla del pedido.");

            const styleElement = document.createElement("style");
            styleElement.textContent = templateStyle.textContent;
            const sheet = document.importNode(templateSheet, true);
            renderHost.append(styleElement, sheet);
            document.body.appendChild(renderHost);

            if (document.fonts?.ready) await document.fonts.ready;
            const images = Array.from(sheet.querySelectorAll("img"));
            await Promise.all(images.map((image) => image.complete
                ? Promise.resolve()
                : new Promise((resolve) => {
                    image.addEventListener("load", resolve, { once: true });
                    image.addEventListener("error", resolve, { once: true });
                })));

            await window.html2pdf().set({
                margin: [7, 7, 7, 7],
                filename: fileName,
                enableLinks: true,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    allowTaint: false,
                    backgroundColor: "#eee8e1",
                    logging: false,
                    windowWidth: 900
                },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait", compress: true },
                pagebreak: { mode: ["css", "legacy"], avoid: [".header", ".notice", ".customer", ".payment", ".footer", "tr"] }
            }).from(sheet).save();

            return fileName;
        } catch (error) {
            console.error("No se pudo generar el PDF desde la plantilla visual:", error);
            alert("No se pudo generar el PDF con la plantilla visual.");
            return null;
        } finally {
            renderHost.remove();
        }
    }

    const checkoutBtnPdf = document.getElementById("checkout-btn");
    if (checkoutBtnPdf) {
        const checkoutPdfClone = checkoutBtnPdf.cloneNode(true);
        checkoutBtnPdf.replaceWith(checkoutPdfClone);
        checkoutPdfClone.addEventListener("click", async () => {
            if (checkoutPdfClone.dataset.nextAction === "whatsapp") {
                const whatsappUrl = checkoutPdfClone.dataset.whatsappUrl;
                if (whatsappUrl) window.open(whatsappUrl, "_blank", "noopener");
                return;
            }

            if (cart.length === 0) {
                alert("Tu carrito esta vacio.");
                return;
            }

            const orderData = getCustomerOrderData(true);
            if (!orderData) return;

            const totals = calculateCartTotals(orderData.province);
            updateOrderMeta(orderData.province);
            const pdfPreviewWindow = isAppleMobileBrowser() ? window.open("about:blank", "_blank") : null;
            if (pdfPreviewWindow) {
                pdfPreviewWindow.document.title = "Generando pedido Curativa";
                pdfPreviewWindow.document.body.innerHTML = "<p style='font:16px system-ui;padding:24px'>Preparando tu PDF...</p>";
            }

            checkoutPdfClone.disabled = true;
            checkoutPdfClone.setAttribute("aria-busy", "true");
            const originalButtonHtml = checkoutPdfClone.innerHTML;
            checkoutPdfClone.innerHTML = '<i class="fas fa-spinner fa-spin"></i> GENERANDO PDF';

            let pdfResult = null;
            try {
                pdfResult = await downloadOrderPdfFromMockup(orderData, totals);
            } catch (error) {
                console.error("No se pudo generar el PDF del pedido:", error);
            }

            if (!pdfResult || !deliverGeneratedPdf(pdfResult, pdfPreviewWindow)) {
                if (pdfPreviewWindow && !pdfPreviewWindow.closed) pdfPreviewWindow.close();
                checkoutPdfClone.disabled = false;
                checkoutPdfClone.removeAttribute("aria-busy");
                checkoutPdfClone.innerHTML = originalButtonHtml;
                alert("No se pudo crear el PDF. Intenta nuevamente.");
                return;
            }

            const fileName = pdfResult.fileName;

            const message = [
                `Hola, soy ${orderData.customerFullName} de ${orderData.province}.`,
                `Dirección de envío: ${orderData.customerAddress}.`,
                `Acabo de generar mi pedido en PDF: ${fileName}.`,
                "Voy a adjuntar el archivo descargado en este chat para confirmar mi compra.",
                "",
                `Items: ${totals.totalItems}`,
                `Total estimado: ${formatCurrency(totals.total)}`
            ].join("\n");

            const whatsappMessage = [
                "Hola, Curativa.",
                "",
                "He generado mi ficha de pago y voy a adjuntar el PDF descargado en este chat para confirmar mi pedido.",
                "",
                "• Cliente",
                `${orderData.customerFullName}`,
                "",
                "• Envío",
                `📍 ${orderData.province}`,
                `🏠 ${orderData.customerAddress}`,
                "",
                "• Resumen del pedido",
                `🧾 Ítems: ${totals.totalItems}`,
                `💳 Total estimado: ${formatCurrency(totals.total)}`,
                `📄 Archivo: ${fileName}`,
                "",
                "Quedo atento a la validación del pago."
            ].join("\n");

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
            checkoutPdfClone.disabled = false;
            checkoutPdfClone.removeAttribute("aria-busy");
            checkoutPdfClone.dataset.nextAction = "whatsapp";
            checkoutPdfClone.dataset.whatsappUrl = whatsappUrl;
            checkoutPdfClone.innerHTML = '<i class="fab fa-whatsapp"></i> PDF LISTO · ABRIR WHATSAPP';
        });
    }

    const catalogSearch = document.getElementById("catalog-search");
    const catalogSearchInput = document.getElementById("catalog-search-input");
    const catalogSearchResults = document.getElementById("catalog-search-results");
    const searchableProducts = Array.from(document.querySelectorAll(".product-item[data-name]"));
    let currentSearchMatches = [];

    const normalizeSearchText = (value) => String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    function closeCatalogSearchResults() {
        if (!catalogSearchResults || !catalogSearchInput) return;
        catalogSearchResults.classList.add("hidden");
        catalogSearchInput.setAttribute("aria-expanded", "false");
    }

    function focusCatalogProduct(card) {
        if (!card) return;
        const section = card.closest(".section");
        closeCatalogSearchResults();
        catalogSearch?.classList.remove("expanded");
        card.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        card.classList.remove("search-highlight");
        requestAnimationFrame(() => card.classList.add("search-highlight"));
        setTimeout(() => card.classList.remove("search-highlight"), 1800);
        if (section) section.classList.add("search-section-active");
        setTimeout(() => section?.classList.remove("search-section-active"), 1800);
    }

    function renderCatalogSearch(query) {
        if (!catalogSearchResults || !catalogSearchInput) return;
        const normalizedQuery = normalizeSearchText(query);
        catalogSearchResults.innerHTML = "";

        if (!normalizedQuery) {
            currentSearchMatches = [];
            closeCatalogSearchResults();
            return;
        }

        currentSearchMatches = searchableProducts.filter((card) => {
            const name = normalizeSearchText(card.dataset.name);
            const sectionName = normalizeSearchText(card.closest(".section")?.querySelector(".section-title")?.textContent);
            return name.includes(normalizedQuery) || sectionName.includes(normalizedQuery);
        }).slice(0, 6);

        if (!currentSearchMatches.length) {
            const empty = document.createElement("p");
            empty.className = "search-empty";
            empty.textContent = "No encontramos productos con ese nombre.";
            catalogSearchResults.appendChild(empty);
        } else {
            currentSearchMatches.forEach((card) => {
                const option = document.createElement("button");
                option.type = "button";
                option.className = "catalog-search-option";
                option.setAttribute("role", "option");
                option.innerHTML = `<span><strong>${card.dataset.name}</strong><small>${card.closest(".section")?.querySelector(".section-title")?.textContent || "Catálogo"}</small></span><b>$${Number(card.dataset.price).toFixed(2)}</b>`;
                option.addEventListener("click", () => focusCatalogProduct(card));
                catalogSearchResults.appendChild(option);
            });
        }

        catalogSearchResults.classList.remove("hidden");
        catalogSearchInput.setAttribute("aria-expanded", "true");
    }

    if (catalogSearch && catalogSearchInput) {
        catalogSearchInput.addEventListener("input", () => renderCatalogSearch(catalogSearchInput.value));
        catalogSearch.addEventListener("submit", (event) => {
            event.preventDefault();
            if (window.matchMedia("(max-width: 768px)").matches && !catalogSearch.classList.contains("expanded")) {
                catalogSearch.classList.add("expanded");
                setTimeout(() => catalogSearchInput.focus(), 50);
                return;
            }
            if (currentSearchMatches[0]) focusCatalogProduct(currentSearchMatches[0]);
            else catalogSearchInput.focus();
        });
        document.addEventListener("click", (event) => {
            if (!catalogSearch.contains(event.target)) {
                closeCatalogSearchResults();
                if (!catalogSearchInput.value) catalogSearch.classList.remove("expanded");
            }
        });
        catalogSearchInput.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                catalogSearchInput.value = "";
                closeCatalogSearchResults();
                catalogSearch.classList.remove("expanded");
                catalogSearchInput.blur();
            }
        });
    }

    updateOrderMeta();
    updateCartUI();

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

    // ==========================================
    // KEYBOARD CAROUSEL NAVIGATION LOGIC
    // ==========================================
    let currentActiveSection = null;
    let sectionsArray = [];
    let isKeyboardMode = false;
    let focusedCardIndex = -1;

    const sectionObserver = new IntersectionObserver((entries) => {
        let maxIntersection = 0;
        let mostVisibleSection = null;
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio > 0.5) {
                    currentActiveSection = entry.target;
                } else if (entry.intersectionRatio > maxIntersection) {
                    maxIntersection = entry.intersectionRatio;
                    mostVisibleSection = entry.target;
                }
            }
        });
        
        if (!currentActiveSection && mostVisibleSection) {
            currentActiveSection = mostVisibleSection;
        }
        
        clearCardFocus();
    }, {
        root: null,
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9]
    });

    document.querySelectorAll("section").forEach(section => {
        sectionsArray.push(section);
        sectionObserver.observe(section);
    });

    let lastDownTime = 0;
    let downHoldTimer = null;
    const DOWN_DOUBLE_TAP_THRESHOLD = 500; // ms
    const DOWN_HOLD_THRESHOLD = 1500; // ms
    
    let lastUpTime = 0;
    let upHoldTimer = null;
    const UP_DOUBLE_TAP_THRESHOLD = 500; // ms
    const UP_HOLD_THRESHOLD = 2000; // ms

    function jumpToNextSection(currentSection) {
        if (!currentSection) return;
        const currentIndex = sectionsArray.indexOf(currentSection);
        if (currentIndex !== -1 && currentIndex + 1 < sectionsArray.length) {
            sectionsArray[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    function jumpToHeroTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function clearCardFocus() {
        document.querySelectorAll(".carousel-card.keyboard-focus").forEach(el => {
            el.classList.remove("keyboard-focus");
        });
        focusedCardIndex = -1;
    }

    function applyCardFocus(cards, index) {
        clearCardFocus();
        if (cards[index]) {
            cards[index].classList.add("keyboard-focus");
            cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            focusedCardIndex = index;
        }
    }

    // Deactivate keyboard mode when mouse moves
    document.addEventListener("mousemove", () => {
        if (isKeyboardMode) {
            isKeyboardMode = false;
            clearCardFocus();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!currentActiveSection) return;

        // Ensure we are not typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            isKeyboardMode = true;
        }

        const isHero = currentActiveSection.id === "hero-carousel";
        const carouselTrack = currentActiveSection.querySelector(".carousel-track");

        if (isHero) {
            if (e.key === "ArrowUp") {
                e.preventDefault();
                const now = Date.now();
                
                if (now - lastUpTime < UP_DOUBLE_TAP_THRESHOLD) {
                    clearTimeout(upHoldTimer);
                    lastUpTime = 0;
                    jumpToHeroTop();
                    return;
                }
                lastUpTime = now;

                if (!upHoldTimer) {
                    upHoldTimer = setTimeout(() => {
                        jumpToHeroTop();
                        upHoldTimer = null;
                    }, UP_HOLD_THRESHOLD);
                }

                prevSlide();
                resetTimer();
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                const now = Date.now();
                
                if (now - lastDownTime < DOWN_DOUBLE_TAP_THRESHOLD) {
                    clearTimeout(downHoldTimer);
                    lastDownTime = 0;
                    jumpToNextSection(currentActiveSection);
                    return;
                }
                lastDownTime = now;

                if (!downHoldTimer) {
                    downHoldTimer = setTimeout(() => {
                        jumpToNextSection(currentActiveSection);
                        downHoldTimer = null;
                    }, DOWN_HOLD_THRESHOLD);
                }

                nextSlide();
                resetTimer();
            }
        } else if (carouselTrack) {
            const cards = Array.from(carouselTrack.querySelectorAll(".carousel-card"));
            if (!cards.length) return;

            if (e.key === "ArrowLeft") {
                e.preventDefault();
                if (focusedCardIndex <= 0) focusedCardIndex = cards.length - 1;
                else focusedCardIndex--;
                applyCardFocus(cards, focusedCardIndex);
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                if (focusedCardIndex === -1 || focusedCardIndex >= cards.length - 1) focusedCardIndex = 0;
                else focusedCardIndex++;
                applyCardFocus(cards, focusedCardIndex);
            }
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowDown") {
            if (downHoldTimer) {
                clearTimeout(downHoldTimer);
                downHoldTimer = null;
            }
        } else if (e.key === "ArrowUp") {
            if (upHoldTimer) {
                clearTimeout(upHoldTimer);
                upHoldTimer = null;
            }
        }
    });
});
