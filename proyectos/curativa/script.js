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
    const orderRefCodeEl = document.getElementById("order-ref-code");
    const orderDateLabelEl = document.getElementById("order-date-label");
    const orderDeliveryLabelEl = document.getElementById("order-delivery-label");
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
        updateOrderMeta(selectedProvince);
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
        const paymentMethod = totals.shipping === 0 ? "Transferencia / QR local" : "Transferencia / QR nacional";
        const wrapPdf = (text, width) => doc.splitTextToSize(normalizePdfText(text), width);

        const drawHeaderFooter = (pageNumber) => {
            doc.setFillColor(248, 250, 252);
            doc.rect(0, 0, pageWidth, pageHeight, "F");

            doc.setDrawColor(226, 232, 240);
            doc.setLineWidth(0.7);
            doc.line(15, 26, pageWidth - 15, 26);
            doc.line(15, pageHeight - 18, pageWidth - 15, pageHeight - 18);

            if (logoDataUrl) {
                doc.addImage(logoDataUrl, "PNG", 15, 11, 34, 14, undefined, "FAST");
            } else {
                doc.setFont("helvetica", "bold");
                doc.setFontSize(22);
                doc.setTextColor(15, 23, 42);
                doc.text("curativa", 15, 19);
            }

            doc.setFont("helvetica", "bold");
            doc.setFontSize(15);
            doc.setTextColor(2, 132, 199);
            doc.text("Ficha de Pago", pageWidth - 15, 15, { align: "right" });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(51, 65, 85);
            doc.text(`Nro. Control: ${getOrderReference()}`, pageWidth - 15, 20, { align: "right" });
            doc.text(`Fecha de Emision: ${getOrderDateLabel()}`, pageWidth - 15, 24.5, { align: "right" });

            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.setTextColor(148, 163, 184);
            doc.text("Curativa © 2026 · Loja, Ecuador · WhatsApp +593 963 036 594", pageWidth / 2, pageHeight - 10, { align: "center" });
            doc.text(`Pag. ${pageNumber}`, pageWidth - 15, pageHeight - 10, { align: "right" });
        };

        const drawInfoBoxes = () => {
            doc.setDrawColor(226, 232, 240);
            doc.setFillColor(255, 255, 255);
            doc.roundedRect(15, 33, 87.5, 31, 2, 2, "FD");
            doc.roundedRect(102.5, 33, 92.5, 31, 2, 2, "FD");

            doc.setFont("helvetica", "bold");
            doc.setFontSize(8);
            doc.setTextColor(100, 116, 139);
            doc.text("PREPARADO PARA", 20, 39);
            doc.text("METODO DE PAGO SOLICITADO", 107.5, 39);

            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.setTextColor(15, 23, 42);
            doc.text(wrapPdf(orderData.customerFullName, 70), 20, 45);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);
            doc.setTextColor(51, 65, 85);
            doc.text(wrapPdf(`Provincia: ${orderData.province}`, 70), 20, 50);
            doc.text(wrapPdf(`Direccion: ${orderData.customerAddress}`, 70), 20, 55);
            doc.text("Canal: WhatsApp", 20, 61);

            doc.setFont("helvetica", "bold");
            doc.setTextColor(15, 23, 42);
            doc.text(wrapPdf(paymentMethod, 74), 107.5, 45);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(51, 65, 85);
            doc.text(wrapPdf("Banco Pichincha / Deuna / Ahorros transaccional", 74), 107.5, 50);
            doc.text(wrapPdf("Cuenta: 2210381726", 74), 107.5, 56);
            doc.text(wrapPdf(`Envio: ${totals.shipping === 0 ? "Loja sin recargo" : `Estimado ${shippingValue}`}`, 74), 107.5, 63);
        };

        const drawTotalsAndNotes = (startY) => {
            doc.setDrawColor(226, 232, 240);
            doc.setFillColor(248, 250, 252);
            doc.roundedRect(15, startY, 180, 25, 2, 2, "FD");

            doc.setFont("helvetica", "normal");
            doc.setFontSize(9.2);
            doc.setTextColor(71, 85, 105);
            doc.text("Subtotal:", 128, startY + 7, { align: "right" });
            doc.text("Envío:", 128, startY + 12.5, { align: "right" });
            doc.text("IVA (0%):", 128, startY + 18, { align: "right" });

            doc.setFont("helvetica", "bold");
            doc.text(formatCurrency(totals.subtotal), 190, startY + 7, { align: "right" });
            doc.text(shippingValue, 190, startY + 12.5, { align: "right" });
            doc.text("$0.00", 190, startY + 18, { align: "right" });

            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.setTextColor(2, 132, 199);
            doc.text("Total a Pagar:", 128, startY + 24, { align: "right" });
            doc.text(formatCurrency(totals.total), 190, startY + 24, { align: "right" });

            const noteY = startY + 31;
            doc.setFillColor(240, 253, 244);
            doc.setDrawColor(187, 247, 208);
            doc.roundedRect(15, noteY, 180, 28, 2, 2, "FD");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9.2);
            doc.setTextColor(22, 101, 52);
            doc.text("Instrucciones para reportar su pago:", 20, noteY + 7);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.7);
            doc.setTextColor(20, 83, 45);
            const noteLines = [
                "1. Descargue esta ficha y conserve el PDF generado.",
                "2. Abra el chat de WhatsApp generado automaticamente y adjunte manualmente el archivo descargado.",
                "3. Realice el pago por Deuna o transferencia Banco Pichincha y envie su comprobante para validacion."
            ];
            doc.text(noteLines, 20, noteY + 13);
        };

        drawHeaderFooter(1);
        drawInfoBoxes();

        doc.setDrawColor(226, 232, 240);
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(15, 70, 180, 114, 2, 2, "FD");
        doc.setFillColor(241, 245, 249);
        doc.rect(15, 70, 180, 13, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(15, 23, 42);
        doc.text("Tu Pedido", 20, 78.5);

        doc.autoTable({
            startY: 83,
            margin: { left: 15, right: 15, top: 83, bottom: 60 },
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
                textColor: [51, 65, 85],
                cellPadding: { top: 4, right: 5, bottom: 4, left: 5 },
                lineColor: [241, 245, 249],
                lineWidth: 0.35,
                valign: "middle"
            },
            headStyles: {
                fillColor: [255, 255, 255],
                textColor: [100, 116, 139],
                fontStyle: "bold"
            },
            columnStyles: {
                0: { cellWidth: 99 },
                1: { cellWidth: 20, halign: "center" },
                2: { cellWidth: 28, halign: "right" },
                3: { cellWidth: 28, halign: "right" }
            },
            didParseCell: (data) => {
                data.cell.styles.lineColor = [241, 245, 249];
                data.cell.styles.lineWidth = { bottom: 0.35 };
            }
        });

        const afterTableY = Math.max((doc.lastAutoTable?.finalY || 126) + 4, 146);
        drawTotalsAndNotes(afterTableY);

        doc.save(fileName);
        return fileName;
    }

    const checkoutBtnPdf = document.getElementById("checkout-btn");
    if (checkoutBtnPdf) {
        const checkoutPdfClone = checkoutBtnPdf.cloneNode(true);
        checkoutBtnPdf.replaceWith(checkoutPdfClone);
        checkoutPdfClone.addEventListener("click", async () => {
            if (cart.length === 0) {
                alert("Tu carrito esta vacio.");
                return;
            }

            const orderData = getCustomerOrderData(true);
            if (!orderData) return;

            const totals = calculateCartTotals(orderData.province);
            updateOrderMeta(orderData.province);
            const whatsappWindow = window.open("about:blank", "_blank");
            const fileName = await downloadOrderPdfFromMockup(orderData, totals);
            if (!fileName) {
                if (whatsappWindow) whatsappWindow.close();
                return;
            }

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
            if (whatsappWindow) {
                whatsappWindow.location.href = whatsappUrl;
            } else {
                window.open(whatsappUrl, "_blank");
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
});
