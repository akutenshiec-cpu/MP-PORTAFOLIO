function initHeroCarouselLegacy() {
    const slides = heroCarousel.slides || [];
    if (!slides.length) return;

    const heroBrand = document.querySelector('[data-mp-brand-slot="hero"]');
    const heroDesc = document.getElementById("hero-desc");
    const heroImg = document.getElementById("hero-image");
    const ctaPrimary = document.getElementById("hero-cta-primary");
    const ctaSecondary = document.getElementById("hero-cta-secondary");
    const dotsWrap = document.getElementById("hero-dots");
    const secondarySection = document.getElementById("hero-secondary-content");
    const secondaryTitle = document.getElementById("hero-secondary-title");
    const secondaryRole = document.getElementById("hero-secondary-role");
    const secondaryDesc = document.getElementById("hero-secondary-desc");
    const secondaryImg = document.getElementById("hero-secondary-image");
    const secondaryCtaPrimary = document.getElementById("hero-secondary-cta-primary");
    const secondaryCtaSecondary = document.getElementById("hero-secondary-cta-secondary");
    if (!heroDesc || !heroImg || !ctaPrimary || !ctaSecondary || !dotsWrap) return;

    const primarySlide = slides[0];
    const secondarySlide = slides[1];

    if (primarySlide) {
        applySlideBrandVariant(heroBrand, primarySlide);
        heroDesc.textContent = repairText(primarySlide.description || "");
        heroImg.src = primarySlide.image || heroImg.src;
        heroImg.alt = repairText(primarySlide.imageAlt || "Hero image");
        ctaPrimary.textContent = repairText(primarySlide.ctaPrimaryText || "Ver");
        ctaPrimary.href = primarySlide.ctaPrimaryLink || "#";
        ctaSecondary.textContent = repairText(primarySlide.ctaSecondaryText || "Más");
        ctaSecondary.href = primarySlide.ctaSecondaryLink || "#";
    }

    dotsWrap.innerHTML = "";

    if (!secondarySection) return;
    if (!secondarySlide || !secondaryTitle || !secondaryRole || !secondaryDesc || !secondaryImg || !secondaryCtaPrimary || !secondaryCtaSecondary) {
        secondarySection.style.display = "none";
        return;
    }

    secondaryTitle.textContent = repairText(secondarySlide.title || "");
    secondaryRole.innerHTML = repairText(secondarySlide.role || "").replace("//", '<span class="slash">//</span>');
    secondaryDesc.textContent = repairText(secondarySlide.description || "");
    secondaryImg.src = secondarySlide.image || secondaryImg.src;
    secondaryImg.alt = repairText(secondarySlide.imageAlt || "Hero secondary image");
    secondaryCtaPrimary.textContent = repairText(secondarySlide.ctaPrimaryText || "Ver");
    secondaryCtaPrimary.href = secondarySlide.ctaPrimaryLink || "#";
    secondaryCtaSecondary.textContent = repairText(secondarySlide.ctaSecondaryText || "Más");
    secondaryCtaSecondary.href = secondarySlide.ctaSecondaryLink || "#";
    secondarySection.style.display = "";
}

function initHeroCarousel() {
    const slides = heroCarousel.slides || [];
    if (!slides.length) return;

    const heroBrand = document.querySelector('[data-mp-brand-slot="hero"]');
    const heroDesc = document.getElementById("hero-desc");
    const heroImg = document.getElementById("hero-image");
    const ctaPrimary = document.getElementById("hero-cta-primary");
    const ctaSecondary = document.getElementById("hero-cta-secondary");
    if (!heroDesc || !heroImg || !ctaPrimary || !ctaSecondary) return;

    const primarySlide = slides[0];
    if (!primarySlide) return;

    applySlideBrandVariant(heroBrand, primarySlide);
    heroDesc.textContent = repairText(primarySlide.description || "");
    heroImg.src = primarySlide.image || heroImg.src;
    heroImg.alt = repairText(primarySlide.imageAlt || "Hero image");
    ctaPrimary.textContent = repairText(primarySlide.ctaPrimaryText || "Ver");
    ctaPrimary.href = primarySlide.ctaPrimaryLink || "#";
    ctaSecondary.textContent = repairText(primarySlide.ctaSecondaryText || "Mas");
    ctaSecondary.href = primarySlide.ctaSecondaryLink || "#";
}

/* =========================================
   1. DATA
   ========================================= */
const sharedData = window.MPPortfolioData || {};
const imgDB = Object.fromEntries(
    Object.entries(sharedData.galleries || {}).map(([key, value]) => [
        key,
        { title: value.title, imgs: value.images || [] }
    ])
);
const webDB = sharedData.webs || {};
const homeSections = sharedData.homeSections || {};
const sectionMeta = sharedData.sectionMeta || {};
const heroCarousel = sharedData.heroCarousel || { slides: [] };
const pageConfig = sharedData.pageConfig || {};
const contentBlocks = sharedData.contentBlocks || {};
const WHATSAPP_NUMBER = "593963036594";

const cp1252ByteMap = new Map([
    [0x20AC, 0x80], [0x201A, 0x82], [0x0192, 0x83], [0x201E, 0x84], [0x2026, 0x85], [0x2020, 0x86], [0x2021, 0x87], [0x02C6, 0x88],
    [0x2030, 0x89], [0x0160, 0x8A], [0x2039, 0x8B], [0x0152, 0x8C], [0x017D, 0x8E], [0x2018, 0x91], [0x2019, 0x92], [0x201C, 0x93],
    [0x201D, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97], [0x02DC, 0x98], [0x2122, 0x99], [0x0161, 0x9A], [0x203A, 0x9B],
    [0x0153, 0x9C], [0x017E, 0x9E], [0x0178, 0x9F]
]);
const brokenRunPattern = /[ÃÂâð][-ÿŒœŠšŸŽžƒˆ˜–—‘’‚“”„†‡•…‰‹›€™]*/gu;
const exactRepairs = [
    ["Validaci?n", "Validación"],
    ["validaci?n", "validación"],
    ["Cat?logo", "Catálogo"],
    ["cat?logo", "catálogo"],
    ["cat?logos", "catálogos"],
    ["Conversi?n", "Conversión"],
    ["conversi?n", "conversión"],
    ["Dise?o", "Diseño"],
    ["dise?o", "diseño"],
    ["A?adir", "Me interesa"],
    ["Gesti?n", "Gestión"],
    ["gesti?n", "gestión"],
    ["operaci?n", "operación"],
    ["Operaci?n", "Operación"],
    ["acci?n", "acción"],
    ["presentaci?n", "presentación"],
    ["redacci?n", "redacción"],
    ["r?pida", "rápida"],
    ["s?lida", "sólida"],
    ["autom?tico", "automático"],
    ["din?micas", "dinámicas"],
    ["est?ticos", "estáticos"],
    ["hom?logos", "homólogos"],
    ["p?gina", "página"],
    ["campa?as", "campañas"],
    ["Campa?as", "Campañas"],
    ["T?cnica", "Técnica"],
    ["t?cnica", "técnica"],
    ["t?cnico", "técnico"],
    ["gr?ficos", "gráficos"],
    ["Ilustraci?n", "Ilustración"],
    ["Implementaci?n", "Implementación"],
    ["implementaci?n", "implementación"],
    ["comunicaci?n", "comunicación"],
    ["m?ltiples", "múltiples"],
    ["observaci?n", "observación"],
    ["Se?al", "Señal"],
    ["se?al", "señal"],
    ["señal?tica", "señalética"],
    ["Env?ar", "Enviar"],
    ["env?a", "envía"],
    ["Laminas", "Láminas"],
    ["morfologica", "morfológica"],
    ["tecnologica", "tecnológica"],
    ["agricola", "agrícola"],
    ["botanica", "botánica"],
    ["Entomologico", "Entomológico"],
    ["cientifica", "científica"]
];
function repairText(value) {
    if (value == null) return "";
    let text = String(value);
    text = text.replace(brokenRunPattern, (run) => {
        const bytes = [];
        for (const ch of run) {
            const code = ch.codePointAt(0);
            if (code <= 0xFF) bytes.push(code);
            else if (cp1252ByteMap.has(code)) bytes.push(cp1252ByteMap.get(code));
            else return run;
        }
        const decoded = Buffer.from(bytes).toString("utf8");
        return decoded.includes("�") ? run : decoded;
    });
    for (const [from, to] of exactRepairs) {
        text = text.split(from).join(to);
    }
    return text;
}


function normalizeCards(cards = []) {
    return cards
        .filter((card) => card && card.visible !== false)
        .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999));
}

function applySectionMetaToDOM() {
    Object.entries(sectionMeta || {}).forEach(([sectionKey, meta]) => {
        const sectionEl = document.getElementById(sectionKey);
        if (!sectionEl || !meta) return;

        const sectionTitle = sectionEl.querySelector(".section-title");
        if (sectionTitle && meta.title) {
            const icon = meta.icon || "fa-circle";
            sectionTitle.innerHTML = `<i class="fas ${icon}"></i> ${repairText(meta.title)}`;
        }

        if (meta.subtitle) {
            let intro = sectionEl.querySelector(".section-intro");
            if (!intro) {
                intro = document.createElement("p");
                intro.className = "section-intro";
                const header = sectionEl.querySelector(".section-header");
                if (header) header.insertAdjacentElement("afterend", intro);
            }
            intro.textContent = repairText(meta.subtitle);
        }
    });
}

function renderHomeSections() {
    const sectionMap = [
        { sectionKey: "servicios", gridId: "servicios-grid" },
        { sectionKey: "webs", gridId: "webs-grid" },
        { sectionKey: "branding", gridId: "branding-grid" },
        { sectionKey: "promo", gridId: "promo-grid" },
        { sectionKey: "ciencia", gridId: "ciencia-grid" }
    ];

    sectionMap.forEach(({ sectionKey, gridId }) => {
        const grid = document.getElementById(gridId);
        const sectionEl = document.getElementById(sectionKey);
        const meta = sectionMeta[sectionKey] || {};
        const cards = normalizeCards(homeSections[sectionKey] || []);
        if (!grid || !sectionEl) return;

        const isEnabled = meta.enabled !== false;
        if (!isEnabled || !cards.length) {
            sectionEl.style.display = "none";
            grid.innerHTML = "";
            return;
        }
        sectionEl.style.display = "";

        grid.innerHTML = cards.map((card, cardIndex) => {
            const cardClass = card.cardClass ? ` ${card.cardClass}` : "";
            const imageClass = card.imageClass ? ` ${card.imageClass}` : "";
            const badgeLabel = repairText(card.badge || "");
            const badge = badgeLabel ? `<span class="card-badge">${badgeLabel}</span>` : "";
            const kickerLabel = repairText(card.rubro || card.badge || "Proyecto seleccionado");
            const overlay = card.overlayText
                ? `<div class="hover-overlay"><i class="fas ${card.overlayIcon || "fa-arrow-right"}"></i> ${card.overlayText}</div>`
                : "";
            const hasInterestCTA = card.buyEnabled === true;
            const commerce = hasInterestCTA
                ? `
                    <div class="card-commerce">
                        <button class="buy-btn" data-interest="${card.id}">Consultar por WhatsApp</button>
                    </div>
                `
                : "";
            const safeAlt = repairText(card.imageAlt || card.title || "");
            const imageStyle = card.imageStyle || "";
            const isClickable = card.type === "web" || card.type === "gallery" || card.type === "bio";
            const galleryTarget = card.galleryId || (card.type === "gallery" ? card.id : "");
            const galleryIndex =
                card.type === "gallery" && sectionKey === "ciencia"
                    ? cardIndex
                    : (Number.isInteger(card.galleryStartIndex) ? card.galleryStartIndex : null);
            const galleryIndexAttr =
                Number.isInteger(galleryIndex) ? ` data-gallery-index="${galleryIndex}"` : "";
            const actionAttrs = isClickable ? ` data-action="${card.type}" data-key="${card.id}"${galleryIndexAttr}` : "";
            const tagsHtml =
                Array.isArray(card.tags) && card.tags.length
                    ? `<div class="card-tags">${card.tags
                          .map((t) => `<span class="card-tag">${t}</span>`)
                          .join("")}</div>`
                    : "";
            const galleryLink =
                galleryTarget
                    ? `<a href="galerial.html?id=${encodeURIComponent(
                          galleryTarget
                       )}" class="card-gallery-link" data-gallery-link target="_blank" rel="noopener noreferrer">Vista galería HD <i class="fas fa-images"></i></a>`
                    : "";

            return `
                <div class="trust-card${cardClass}${isClickable ? "" : " no-link"}"${actionAttrs}>
                    <div class="card-image${imageClass}">
                        ${badge}
                        <img src="${card.image}" alt="${safeAlt}" style="${imageStyle}" loading="lazy" decoding="async">
                        ${overlay}
                    </div>
                    <div class="card-info">
                        <span class="card-kicker">${kickerLabel}</span>
                        <h4>${repairText(card.title)}</h4>
                        <p>${repairText(card.description)}</p>
                        ${tagsHtml}
                        ${galleryLink}
                        ${commerce}
                    </div>
                </div>
            `;
        }).join("");
    });
}

function findCardById(id) {
    const sections = Object.values(homeSections || {});
    for (const section of sections) {
        const match = (section || []).find((card) => card.id === id);
        if (match) return match;
    }
    return null;
}

function sendInterestToWhatsApp(serviceName) {
    const cleanName = repairText(serviceName || "Servicio");
    const message = `Hola MP Dev Studio, estoy interesado en el proyecto: ${cleanName}. ¿Podemos conversar sobre el alcance?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function initHeroCarouselLegacy() {
    const slides = heroCarousel.slides || [];
    if (!slides.length) return;

    const heroBrand = document.querySelector('[data-mp-brand-slot="hero"]');
    const heroDesc = document.getElementById("hero-desc");
    const heroImg = document.getElementById("hero-image");
    const ctaPrimary = document.getElementById("hero-cta-primary");
    const ctaSecondary = document.getElementById("hero-cta-secondary");
    const dotsWrap = document.getElementById("hero-dots");
    if (!heroDesc || !heroImg || !ctaPrimary || !ctaSecondary || !dotsWrap) return;

    let current = 0;
    function goToSlide(index) {
        current = (index + slides.length) % slides.length;
        applySlide(current);
    }

    function applySlide(index) {
        const slide = slides[index];
        applySlideBrandVariant(heroBrand, slide);
        heroDesc.textContent = repairText(slide.description || "");
        heroImg.src = slide.image || heroImg.src;
        heroImg.alt = repairText(slide.imageAlt || "Hero image");
        ctaPrimary.textContent = repairText(slide.ctaPrimaryText || "Ver");
        ctaPrimary.href = slide.ctaPrimaryLink || "#";
        ctaSecondary.textContent = slide.ctaSecondaryText || "Más";
        ctaSecondary.href = slide.ctaSecondaryLink || "#";
        dotsWrap.querySelectorAll(".hero-dot").forEach((dot, idx) => {
            dot.classList.toggle("active", idx === index);
        });
    }

    dotsWrap.innerHTML = slides.map((_, idx) => `<span class="hero-dot ${idx === 0 ? "active" : ""}" data-hero-dot="${idx}"></span>`).join("");
    applySlide(0);

    dotsWrap.addEventListener("click", (event) => {
        const dot = event.target.closest("[data-hero-dot]");
        if (!dot) return;
        goToSlide(Number(dot.dataset.heroDot || 0));
    });

    const heroTouchTarget = document.getElementById("hero-card-container") || document.getElementById("hero");
    let touchStartX = 0;
    let touchStartY = 0;

    if (heroTouchTarget && slides.length > 1) {
        heroTouchTarget.addEventListener("touchstart", (event) => {
            const touch = event.changedTouches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        }, { passive: true });

        heroTouchTarget.addEventListener("touchend", (event) => {
            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;
            if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
            goToSlide(current + (deltaX < 0 ? 1 : -1));
        }, { passive: true });
    }

    const autoplayMs = Number(heroCarousel.autoplayMs || 0);
    if (autoplayMs > 0 && slides.length > 1) {
        setInterval(() => {
            goToSlide(current + 1);
        }, autoplayMs);
    }
}

function renderLinks(containerId, links = [], targetBlank = false) {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(links)) return;
    container.innerHTML = links.map((link) => {
        const href = link.href || "#";
        const text = repairText(link.text || href);
        const target = targetBlank ? ' target="_blank"' : "";
        return `<a href="${href}"${target}>${text}</a>`;
    }).join("");
}

const STUDIO_BRAND_ACCENTS = ["gold", "copper", "wine", "split"];

function applySlideBrandVariant(heroBrand, slide) {
    if (!heroBrand || !slide) return;
    const variants = sharedData.studioBrand?.variants || [];
    if (!variants.length) return;
    const index = Number.isFinite(slide.brandVariant) ? slide.brandVariant : 0;
    const variant = variants[(index + variants.length) % variants.length];
    applyStudioBrandVariant(heroBrand, variant);
}

function applyStudioBrandVariant(root, variant) {
    if (!root || !variant) return;
    const nameEl = root.querySelector("[data-mp-brand-name]");
    const tagEl = root.querySelector("[data-mp-brand-tagline]");
    if (nameEl && variant.name) nameEl.textContent = repairText(variant.name);
    if (tagEl && variant.tagline) tagEl.textContent = repairText(variant.tagline);
    STUDIO_BRAND_ACCENTS.forEach((accent) => root.classList.remove(`mp-brand--accent-${accent}`));
    root.classList.add(`mp-brand--accent-${variant.accent || "gold"}`);
}

function initStudioBrand() {
    const config = sharedData.studioBrand || {};
    const variants = Array.isArray(config.variants) ? config.variants : [];
    if (!variants.length) return;

    const nav = document.querySelector('[data-mp-brand-slot="nav"]');
    if (nav) applyStudioBrandVariant(nav, variants[0]);

    const rotateRoots = document.querySelectorAll("[data-mp-brand-rotate]");
    let variantIndex = 0;

    const syncRotating = () => {
        const variant = variants[variantIndex];
        rotateRoots.forEach((root) => applyStudioBrandVariant(root, variant));
    };

    syncRotating();

    if (variants.length < 2 || !rotateRoots.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalMs = Number(config.rotateMs) || 6200;
    window.setInterval(() => {
        variantIndex = (variantIndex + 1) % variants.length;
        rotateRoots.forEach((root) => {
            root.classList.add("mp-brand--transitioning");
            window.setTimeout(() => root.classList.remove("mp-brand--transitioning"), 520);
        });
        syncRotating();
    }, intervalMs);
}

function applyContentCustomization() {
    const heroStatus = document.getElementById("hero-status-text");
    if (heroStatus && pageConfig.heroStatusText) {
        heroStatus.textContent = repairText(pageConfig.heroStatusText);
    }

    const planes = contentBlocks.planes || {};
    const planesTitle = document.getElementById("planes-title");
    const planesDescription = document.getElementById("planes-description");
    const planesCtaLink = document.getElementById("planes-cta-link");
    const planesCtaText = document.getElementById("planes-cta-text");
    if (planesTitle && planes.title) planesTitle.textContent = repairText(planes.title);
    if (planesDescription && planes.description) planesDescription.textContent = repairText(planes.description);
    if (planesCtaLink && planes.ctaLink) planesCtaLink.href = planes.ctaLink;
    if (planesCtaText && planes.ctaText) planesCtaText.textContent = repairText(planes.ctaText);

    const contact = contentBlocks.contacto || {};
    const contactTitle = document.getElementById("contact-title");
    const contactDescription = document.getElementById("contact-description");
    const contactWhatsapp = document.getElementById("contact-whatsapp");
    const contactEmail = document.getElementById("contact-email");
    const contactInstagram = document.getElementById("contact-instagram");
    if (contactTitle && contact.title) contactTitle.textContent = repairText(contact.title);
    if (contactDescription && contact.description) contactDescription.textContent = repairText(contact.description);
    if (contactWhatsapp && contact.whatsapp) contactWhatsapp.href = contact.whatsapp;
    if (contactEmail && contact.email) contactEmail.href = contact.email;
    if (contactInstagram && contact.instagram) contactInstagram.href = contact.instagram;

    const footer = contentBlocks.footer || {};
    const footerBrandDescription = document.getElementById("footer-brand-description");
    const footerCopy = document.getElementById("footer-copy");
    if (footerBrandDescription && footer.brandDescription) footerBrandDescription.textContent = repairText(footer.brandDescription);
    if (footerCopy && footer.copy) footerCopy.textContent = repairText(footer.copy);
    renderLinks("footer-services-links", footer.services || []);
    renderLinks("footer-contact-links", footer.contacts || [], true);
}

function initRevealOnScroll() {
    const els = document.querySelectorAll(".anim-up");
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        els.forEach((el) => el.classList.add("anim-revealed"));
        return;
    }
    const io = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("anim-revealed");
                obs.unobserve(entry.target);
            });
        },
        { threshold: 0.06, rootMargin: "0px 0px -24px 0px" }
    );
    els.forEach((el) => io.observe(el));
}

function initMobileSectionMotion() {
    const media = window.matchMedia('(max-width: 899px)');
    const sections = Array.from(document.querySelectorAll('.grid-container > section[data-section-key]'));
    if (!media.matches || !sections.length) return;

    sections.forEach((section) => section.classList.add('mobile-scroll-section'));
    const cards = Array.from(document.querySelectorAll(
        '.grid-container > section[data-section-key] .cards-grid > *, .grid-container > section[data-section-key] .banner-card, .grid-container > section[data-section-key] .contact-box'
    ));
    cards.forEach((card) => card.classList.add('mobile-orbit-card'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        sections.forEach((section) => section.classList.add('mobile-section-visible'));
        cards.forEach((card) => card.classList.add('mobile-card-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('mobile-section-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    sections.forEach((section) => observer.observe(section));

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('mobile-card-visible');
            cardObserver.unobserve(entry.target);
        });
    }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
    cards.forEach((card) => cardObserver.observe(card));
}

function applySectionLayout() {
    const main = document.querySelector("main.grid-container");
    if (!main) return;
    const order = Array.isArray(pageConfig.sectionOrder) ? pageConfig.sectionOrder : [];
    const hidden = new Set(Array.isArray(pageConfig.hiddenSections) ? pageConfig.hiddenSections : []);

    const sectionMap = {};
    main.querySelectorAll("[data-section-key]").forEach((section) => {
        sectionMap[section.dataset.sectionKey] = section;
    });

    order.forEach((key) => {
        const section = sectionMap[key];
        if (!section) return;
        main.appendChild(section);
    });

    Object.values(sectionMap).forEach((section) => {
        const key = section.dataset.sectionKey;
        section.style.display = hidden.has(key) ? "none" : "";
    });
}

/* =========================================
   2. UI VARIABLES
   ========================================= */
let currentImgs = [], idx = 0, currentScale = 1, currentX = 0, currentY = 0, startX = 0, startY = 0, isDragging = false, lastTap = 0;
let suppressBioOpenUntil = 0;
let closingGalleryHistoryEntry = false;
const lightbox = document.getElementById('lightbox'), lbImg = document.getElementById('lb-img'), lbTitle = document.getElementById('lb-title'), lbCounter = document.getElementById('lb-counter'), lbWrapper = document.querySelector('.lb-image-wrapper');
const webModal = document.getElementById('web-modal'), webFrame = document.getElementById('web-frame'), webTitle = document.getElementById('web-title'), webLink = document.getElementById('web-link');

/* =========================================
   3. CONTROL DE HISTORIAL (BACK BUTTON FIX)
   ========================================= */
window.addEventListener('popstate', function(e) {
    const galleryWasOpen = Boolean(lightbox && lightbox.classList.contains('active'));
    const galleryWasClosedByControl = closingGalleryHistoryEntry || galleryWasOpen;
    closingGalleryHistoryEntry = false;

    if (galleryWasOpen) {
        closeGalleryUI();
    }
    if (webModal && webModal.classList.contains('active')) {
        closeWebUI();
    }
    
    const state = e.state || {};
    
    // Bio dock management
    const paneBio = document.getElementById('pane-bio');
    if (paneBio) {
        if ((state.modal === 'marcobio' || state.modal === 'cvnote') && !galleryWasClosedByControl && Date.now() >= suppressBioOpenUntil) {
            if (!paneBio.classList.contains('active-dock')) {
                openMarcoBioDockUI();
            }
        } else {
            if (paneBio.classList.contains('active-dock')) {
                closeMarcoBioDockUI();
            }
        }
    }
    
    // CV Note management
    const cvNote = document.getElementById('cv-note-modal');
    if (cvNote) {
        if (state.modal === 'cvnote' && !galleryWasClosedByControl && Date.now() >= suppressBioOpenUntil) {
            if (!cvNote.classList.contains('active')) {
                openCvNoteUI();
            }
        } else {
            if (cvNote.classList.contains('active')) {
                closeCvNoteUI();
            }
        }
    }
});

/* =========================================
   4. GALERÍA FUNCIONES
   ========================================= */
function openGallery(key, startIndex = 0) {
    const data = imgDB[key]; if(!data) return;
    currentImgs = data.imgs;
    const parsedIndex = Number(startIndex);
    idx = Number.isFinite(parsedIndex) ? Math.max(0, Math.min(parsedIndex, currentImgs.length - 1)) : 0;
    resetTransform();
    lbTitle.innerText = data.title; updateImage();
    history.pushState({ modal: 'gallery' }, null, "");
    lightbox.classList.add('active'); 
    document.body.classList.add('modal-open');
}

function updateImage() {
    // Cada imagen entra siempre en su estado canónico: 100% y sin desplazamiento.
    resetTransform();
    lbImg.style.opacity = 0.5; lbImg.style.transition = 'opacity 0.2s';
    lbImg.decoding = 'async';
    lbImg.fetchPriority = 'high';
    lbImg.src = currentImgs[idx]; lbCounter.innerText = (idx + 1) + " / " + currentImgs.length;
    lbImg.onload = () => {
        resetTransform();
        lbImg.style.opacity = 1;
        lbImg.style.transition = 'none';
    };
}

function closeGalleryUI() {
    lightbox.classList.remove('active'); 
    document.body.classList.remove('modal-open');
    setTimeout(() => { lbImg.src = ""; resetTransform(); }, 300);
}

function closeGallery(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    // Evita que el mismo toque active el botón flotante del CV situado debajo.
    suppressBioOpenUntil = Date.now() + 500;
    closeGalleryUI();
    if (history.state && history.state.modal === 'gallery') {
        closingGalleryHistoryEntry = true;
        history.back();
    }
}

function changeSlide(dir) {
    idx += dir; if(idx >= currentImgs.length) idx = 0; if(idx < 0) idx = currentImgs.length - 1;
    resetTransform(); updateImage();
}

/* =========================================
   5. MODAL WEB & FAB
   ========================================= */
function openWeb(key) {
    const data = webDB[key];
    if (!data?.url) return;
    const demoWindow = window.open(data.url, "_blank", "noopener,noreferrer");
    if (demoWindow) demoWindow.opener = null;
}

function closeWebUI() {
    webModal.classList.remove('active'); 
    document.body.classList.remove('modal-open');
    document.body.classList.remove('web-modal-active');
    setTimeout(() => webFrame.src = "", 300);
}

function closeWeb() {
    closeWebUI();
    if (history.state && history.state.modal === 'web') {
        history.back();
    }
}

/* =========================================
   6. TOUCH & ZOOM LOGIC
   ========================================= */
function resetTransform() {
    currentScale = 1;
    currentX = 0;
    currentY = 0;
    isDragging = false;
    applyTransform();
    if (lbWrapper) lbWrapper.style.cursor = 'grab';
}
function applyTransform() { lbImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`; }

lbWrapper.addEventListener('touchstart', handleStart, {passive: false});
lbWrapper.addEventListener('mousedown', handleStart);
function handleStart(e) {
    const now = new Date().getTime();
    if (now - lastTap < 300) { e.preventDefault(); toggleZoom(); lastTap = now; return; }
    lastTap = now;
    if(e.type === 'touchstart') { startX = e.touches[0].clientX; startY = e.touches[0].clientY; } else { e.preventDefault(); startX = e.clientX; startY = e.clientY; }
    isDragging = true; lbWrapper.style.cursor = 'grabbing';
}

lbWrapper.addEventListener('touchmove', handleMove, {passive: false});
lbWrapper.addEventListener('mousemove', handleMove);
function handleMove(e) {
    if (!isDragging) return; e.preventDefault();
    let cx, cy;
    if(e.type === 'touchmove') { cx = e.touches[0].clientX; cy = e.touches[0].clientY; } else { cx = e.clientX; cy = e.clientY; }
    const dx = cx - startX; const dy = cy - startY;
    if (currentScale > 1) { currentX += dx * 0.5; currentY += dy * 0.5; applyTransform(); startX = cx; startY = cy; }
    else { lbImg.style.transform = `translateX(${dx}px)`; }
}

lbWrapper.addEventListener('touchend', handleEnd);
lbWrapper.addEventListener('mouseup', handleEnd);
lbWrapper.addEventListener('mouseleave', () => { if(isDragging) handleEnd(); });
function handleEnd(e) {
    if (!isDragging) return; isDragging = false; lbWrapper.style.cursor = 'grab';
    if (currentScale === 1) {
        let ex = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
        if (Math.abs(ex - startX) > 50) { changeSlide(ex - startX > 0 ? -1 : 1); }
        else { lbImg.style.transition = 'transform 0.2s'; lbImg.style.transform = 'translate(0,0) scale(1)'; setTimeout(() => lbImg.style.transition = 'none', 200); }
    }
}
function toggleZoom() {
    if (currentScale === 1) currentScale = 1.75; else resetTransform();
    lbImg.style.transition = 'transform 0.3s ease'; applyTransform(); setTimeout(() => lbImg.style.transition = 'none', 300);
}
function changeGalleryZoom(amount) {
    currentScale = Math.max(1, Math.min(2.5, currentScale + amount));
    if (currentScale === 1) { currentX = 0; currentY = 0; }
    lbImg.style.transition = 'transform 0.25s ease';
    applyTransform();
    setTimeout(() => { lbImg.style.transition = 'none'; }, 250);
}
function resetGalleryZoom() { resetTransform(); }

// El historial de página y los cambios de tamaño nunca deben restaurar un zoom anterior.
window.addEventListener('pageshow', resetTransform);
window.addEventListener('resize', () => {
    if (lightbox && lightbox.classList.contains('active')) resetTransform();
});

/* =========================================
   7. MENÚ FAB
   ========================================= */
const fabWrapper = document.getElementById('fabMenu'), fabBtn = document.getElementById('fabBtn');
if(fabBtn) {
    fabBtn.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        fabWrapper.classList.toggle('active'); 
        fabBtn.classList.toggle('active'); 
        fabBtn.setAttribute('aria-expanded', fabWrapper.classList.contains('active') ? 'true' : 'false');
        const i = fabBtn.querySelector('i');
        if(fabWrapper.classList.contains('active')) { 
            i.classList.remove('fa-bars'); i.classList.add('fa-times'); 
        } else { 
            i.classList.remove('fa-times'); i.classList.add('fa-bars'); 
        } 
    });
}
function closeFab() { 
    if (fabWrapper) fabWrapper.classList.remove('active');
    if (!fabBtn) return;
    fabBtn.classList.remove('active');
    fabBtn.setAttribute('aria-expanded', 'false');
    const i = fabBtn.querySelector('i');
    if (i) {
        i.classList.remove('fa-times');
        i.classList.add('fa-bars');
    }
}

/* =========================================
   8. EVENTOS GLOBALES
   ========================================= */
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") { 
        if (lightbox && lightbox.classList.contains('active')) closeGallery();
        if (webModal && webModal.classList.contains('active')) closeWeb();
    }
    if(lightbox && lightbox.classList.contains('active')) {
        if(e.key === "ArrowLeft") changeSlide(-1);
        if(e.key === "ArrowRight") changeSlide(1);
        if(e.key === "+" || e.key === "=") changeGalleryZoom(0.25);
        if(e.key === "-") changeGalleryZoom(-0.25);
        if(e.key === "0") resetGalleryZoom();
    }
});
document.addEventListener('click', (e) => {
    if(fabWrapper && fabWrapper.classList.contains('active') && !fabWrapper.contains(e.target)) closeFab();
    if(lightbox && e.target === lightbox) closeGallery();
});

const clientAccessLink = document.getElementById("hero-cta-itera");
const pageLoadingOverlay = document.getElementById("page-loading-overlay");

if (clientAccessLink && pageLoadingOverlay) {
    clientAccessLink.addEventListener("click", () => {
        pageLoadingOverlay.hidden = false;
        pageLoadingOverlay.classList.add("active");
    });
    window.addEventListener("pageshow", () => {
        pageLoadingOverlay.classList.remove("active");
        pageLoadingOverlay.hidden = true;
    });
}

window.openGallery = openGallery; 
window.closeGallery = closeGallery; 
window.openWeb = openWeb; 
window.closeWeb = closeWeb; 
window.changeSlide = changeSlide; 
window.changeGalleryZoom = changeGalleryZoom;
window.resetGalleryZoom = resetGalleryZoom;
window.closeFab = closeFab;

document.addEventListener("click", (event) => {
    if (event.target.closest("a[data-gallery-link]")) return;

    const interestBtn = event.target.closest("[data-interest]");
    if (interestBtn) {
        event.preventDefault();
        event.stopPropagation();
        const card = findCardById(interestBtn.dataset.interest);
        if (card) sendInterestToWhatsApp(card.title);
        return;
    }

    const card = event.target.closest(".trust-card[data-action][data-key]");
    if (!card) return;

    const action = card.dataset.action;
    const key = card.dataset.key;
    const galleryIndex = Number(card.dataset.galleryIndex || 0);
    if (action === "bio" || key === "marco") {
        openMarcoBioDock();
        return;
    }
    if (action === "web") openWeb(key);
    if (action === "gallery") openGallery(key, galleryIndex);
});

/* =========================================
   9. HERO ANIMATION (Sin cambios, las partículas verdes se verán bien sobre blanco)
   ========================================= */
window.addEventListener('load', function() {
    applyContentCustomization();
    initStudioBrand();
    renderHomeSections();
    applySectionMetaToDOM();
    applySectionLayout();
    initHeroCarousel();
    initRevealOnScroll();
    initMobileSectionMotion();

    const canvas = document.getElementById('hero-canvas');
    const container = document.getElementById('hero-card-container'); 
    
    if (!canvas || !container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        canvas.style.display = "none";
        return;
    }

    const ctx = canvas.getContext('2d');
    let w, h;
    let particles = [];
    const particleCount = 70; 
    const connectDist = 110; 
    const accentRgb = '39, 174, 96';

    let lastWidth = window.innerWidth;

    function resize() {
        const newWidth = window.innerWidth;
        if (newWidth === lastWidth && w !== undefined) return;
        lastWidth = newWidth;

        w = container.offsetWidth;
        h = container.offsetHeight;
        if(w === 0) w = 800;
        if(h === 0) h = 500;

        canvas.width = w;
        canvas.height = h;
        initParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if(this.x < 0 || this.x > w) this.vx *= -1;
            if(this.y < 0 || this.y > h) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${accentRgb}, 1)`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for(let i=0; i<particleCount; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            
            for(let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < connectDist) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${accentRgb}, ${1 - dist/connectDist})`;
                    ctx.lineWidth = 1.2; 
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(animate);
    }

    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            if (entry.contentRect.width > 0) resize();
        }
    });
    
    resizeObserver.observe(container);
    setTimeout(resize, 500); 
    animate();
});

/* =========================================
   10. MARCO INTERACTIVE CV & OVERLAY DRAWER
   ========================================= */
const CV_DATA_MARCO = {
    "1": {
        title: "Arquitectura QMS & ERP",
        desc: "<strong>Sistemas a medida.</strong><br><br>Desarrollo backend y bases de datos relacionales para operaciones industriales reales. Control documental estricto, flujos de inventario y trazabilidad bajo normativas de calidad (ITERA)."
    },
    "2": {
        title: "Ecosistemas Web Premium",
        desc: "<strong>Landings & E-commerce de alto rendimiento.</strong><br><br>Interfaces que elevan la percepción de marca con carga veloz y arquitecturas frontend optimizadas. Flujos de conversión sin fricción integrados con ventas."
    },
    "3": {
        title: "Identidad Visual & Packaging",
        desc: "<strong>Branding & preparación retail.</strong><br><br>Sistemas visuales completos y maquetación técnica de etiquetas listas para imprenta, garantizando coherencia entre el producto físico y el digital."
    },
    "4": {
        title: "Ilustración Científica",
        desc: "<strong>Fauna neotropical & botánica.</strong><br><br>Documentación morfológica precisa de especies silvestres y láminas naturalistas de alta resolución. Enfoque analítico respaldado por mi formación como Biólogo."
    },
    "5": {
        title: "Diseño Editorial",
        desc: "<strong>Manuales & publicaciones técnicas.</strong><br><br>Maquetación estructurada de libros, folletos y manuales técnicos. Rigor tipográfico, jerarquía visual y legibilidad para material complejo."
    },
    "6": {
        title: "IA & Tecnologías 3D",
        desc: "<strong>Automatización & prototipado.</strong><br><br>Modelado 3D e integración de sistemas de Inteligencia Artificial para potenciar flujos de trabajo en código y diseño visual."
    }
};

function openMarcoBioDock() {
    if (Date.now() < suppressBioOpenUntil) return;
    const paneBio = document.getElementById('pane-bio');
    if (!paneBio || paneBio.classList.contains('active-dock')) return;

    // Open first: some mobile browsers can reject history mutations.
    openMarcoBioDockUI();
    try {
        history.pushState({ modal: 'marcobio' }, '', window.location.href);
        paneBio.dataset.historyEntry = 'true';
    } catch (error) {
        paneBio.dataset.historyEntry = 'false';
    }
}

function openMarcoBioDockUI() {
    const paneBio = document.getElementById('pane-bio');
    if (paneBio) {
        paneBio.classList.add('active-dock');
        paneBio.setAttribute('aria-hidden', 'false');
    }
    const trigger = document.getElementById('floating-bio-dock');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('cv-modal-open');
    closeFab();
}

function closeMarcoBioDock() {
    const paneBio = document.getElementById('pane-bio');
    if (paneBio && paneBio.classList.contains('active-dock')) {
        if (paneBio.dataset.historyEntry === 'true') {
            paneBio.dataset.historyEntry = 'false';
            history.back();
        } else {
            closeMarcoBioDockUI();
        }
    }
}

function closeMarcoBioDockUI() {
    const paneBio = document.getElementById('pane-bio');
    if (paneBio) {
        paneBio.classList.remove('active-dock');
        paneBio.setAttribute('aria-hidden', 'true');
        paneBio.dataset.historyEntry = 'false';
    }
    const trigger = document.getElementById('floating-bio-dock');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    // Only remove cv-modal-open if the CV note modal is also closed
    const cvNote = document.getElementById('cv-note-modal');
    if (!cvNote || !cvNote.classList.contains('active')) {
        document.body.classList.remove('cv-modal-open');
    }
}

function openCvNote(id) {
    const data = CV_DATA_MARCO[id];
    if (!data) return;
    
    const titleEl = document.getElementById('cv-note-title');
    const descEl = document.getElementById('cv-note-desc');
    if (titleEl) titleEl.innerText = data.title;
    if (descEl) descEl.innerHTML = data.desc;
    
    history.pushState({ modal: 'cvnote' }, null, "");
    openCvNoteUI();
}

function openCvNoteUI() {
    const cvNote = document.getElementById('cv-note-modal');
    if (cvNote) {
        cvNote.classList.add('active');
    }
    document.body.classList.add('cv-modal-open');
}

function closeCvNote() {
    const cvNote = document.getElementById('cv-note-modal');
    if (cvNote && cvNote.classList.contains('active')) {
        history.back();
    }
}

function closeCvNoteUI() {
    const cvNote = document.getElementById('cv-note-modal');
    if (cvNote) {
        cvNote.classList.remove('active');
    }
    // Only remove body scroll lock if the main bio pane is also closed
    const paneBio = document.getElementById('pane-bio');
    if (!paneBio || !paneBio.classList.contains('active-dock')) {
        document.body.classList.remove('cv-modal-open');
    }
}

// Bind Swipe down to close on mobile handles
function initCvSwipeGestures() {
    // Bio dock handle
    const dockHandle = document.querySelector('.cv-dock-handle');
    if (dockHandle) {
        let touchStartY = 0;
        dockHandle.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        dockHandle.addEventListener('touchmove', (e) => {
            const deltaY = e.touches[0].clientY - touchStartY;
            if (deltaY > 50) {
                closeMarcoBioDock();
            }
        }, { passive: true });
    }
    
    // CV Note handle
    const noteHandle = document.getElementById('cv-note-handle');
    if (noteHandle) {
        let touchStartY = 0;
        noteHandle.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        noteHandle.addEventListener('touchmove', (e) => {
            const deltaY = e.touches[0].clientY - touchStartY;
            if (deltaY > 50) {
                closeCvNote();
            }
        }, { passive: true });
    }
}

// Register event handlers
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const sectionWheel = document.getElementById('section-wheel');
    const portfolioHeaderInner = document.querySelector('.portfolio-nav__inner');
    const portfolioHeaderBrand = portfolioHeaderInner?.querySelector('.portfolio-nav__brand');
    if (sectionWheel && portfolioHeaderInner && portfolioHeaderBrand) {
        portfolioHeaderBrand.insertAdjacentElement('afterend', sectionWheel);
    }
    const ferrisMedia = window.matchMedia('(min-width: 900px) and (min-height: 560px)');
    const ferrisSections = Array.from(document.querySelectorAll('.grid-container > section[data-section-key]'));
    const ferrisLinks = Array.from(sectionWheel?.querySelectorAll('.section-wheel__window') || []);
    const ferrisOrbit = sectionWheel?.querySelector('.section-wheel__orbit');
    const ferrisCounter = sectionWheel?.querySelector('.section-wheel__counter');
    let ferrisIndex = Math.max(0, ferrisSections.findIndex((section) => `#${section.id}` === window.location.hash));
    let ferrisRotation = 90 - (ferrisIndex * 45);
    let ferrisRenderedIndex = ferrisIndex;
    let ferrisWheelLocked = false;
    let ferrisResizeTimer = 0;

    ferrisSections.forEach((section) => {
        if (section.id === 'hero' || section.querySelector(':scope > .ferris-section-content')) return;
        const content = document.createElement('div');
        content.className = 'ferris-section-content';
        while (section.firstChild) content.appendChild(section.firstChild);
        section.appendChild(content);
    });

    const renderFerris = (nextIndex, updateHash = true) => {
        if (ferrisMedia.matches) window.scrollTo(0, 0);
        const count = ferrisSections.length;
        const normalizedNext = (nextIndex + count) % count;
        let movement = normalizedNext - ferrisRenderedIndex;
        if (movement > count / 2) movement -= count;
        if (movement < -count / 2) movement += count;
        ferrisRotation -= movement * (360 / count);
        ferrisIndex = normalizedNext;
        ferrisRenderedIndex = normalizedNext;
        if (sectionWheel) {
            sectionWheel.classList.toggle('section-wheel--from-above', movement < 0);
            sectionWheel.classList.toggle('section-wheel--from-below', movement >= 0);
        }
        ferrisSections.forEach((section, index) => {
            const rawDelta = index - ferrisIndex;
            const delta = ((rawDelta + count / 2) % count + count) % count - count / 2;
            section.classList.remove('ferris-active', 'ferris-prev', 'ferris-next', 'ferris-away-up', 'ferris-away-down');
            if (delta === 0) section.classList.add('ferris-active');
            else if (delta === -1) section.classList.add('ferris-prev');
            else if (delta === 1) section.classList.add('ferris-next');
            else section.classList.add(delta < 0 ? 'ferris-away-up' : 'ferris-away-down');
            section.setAttribute('aria-hidden', String(delta !== 0));
        });
        ferrisLinks.forEach((link, index) => {
            link.classList.toggle('is-active', index === ferrisIndex);
            link.setAttribute('aria-current', index === ferrisIndex ? 'page' : 'false');
            const cab = link.querySelector('.section-wheel__cab');
            if (cab) cab.style.rotate = `${-ferrisRotation}deg`;
        });
        if (ferrisOrbit) ferrisOrbit.style.rotate = `${ferrisRotation}deg`;
        if (ferrisCounter) ferrisCounter.textContent = `${String(ferrisIndex + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
        if (updateHash) history.replaceState(history.state, '', `#${ferrisSections[ferrisIndex].id}`);
        ferrisSections[ferrisIndex].scrollTo({ top: 0, left: 0, behavior: 'instant' });
        ferrisSections[ferrisIndex].querySelectorAll('img[loading="lazy"]').forEach((image) => {
            image.loading = 'eager';
        });
    };

    const setFerrisMode = () => {
        window.scrollTo(0, 0);
        document.documentElement.classList.toggle('ferris-scroll-lock', ferrisMedia.matches);
        document.body.classList.toggle('ferris-mode', ferrisMedia.matches);
        if (ferrisMedia.matches) {
            window.scrollTo(0, 0);
            renderFerris(ferrisIndex, false);
        }
        else ferrisSections.forEach((section) => {
            section.classList.remove('ferris-active', 'ferris-prev', 'ferris-next', 'ferris-away-up', 'ferris-away-down');
            section.removeAttribute('aria-hidden');
        });
    };

    if (sectionWheel && ferrisSections.length) {
        ferrisLinks.forEach((link, index) => link.addEventListener('click', (event) => {
            if (!ferrisMedia.matches) return;
            event.preventDefault();
            renderFerris(index);
        }));
        sectionWheel.querySelectorAll('[data-wheel-direction]').forEach((button) => button.addEventListener('click', () => {
            renderFerris(ferrisIndex + Number(button.dataset.wheelDirection));
        }));
        document.addEventListener('click', (event) => {
            const anchor = event.target.closest('a[href^="#"]');
            if (!anchor || !ferrisMedia.matches) return;
            const targetIndex = ferrisSections.findIndex((section) => `#${section.id}` === anchor.getAttribute('href'));
            if (targetIndex < 0) return;
            event.preventDefault();
            renderFerris(targetIndex);
        });
        document.addEventListener('keydown', (event) => {
            if (!ferrisMedia.matches || event.target.matches('input, textarea, select')) return;
            if (event.key === 'ArrowUp' || event.key === 'PageUp') renderFerris(ferrisIndex - 1);
            if (event.key === 'ArrowDown' || event.key === 'PageDown') renderFerris(ferrisIndex + 1);
        });
        document.querySelector('.grid-container')?.addEventListener('wheel', (event) => {
            if (!ferrisMedia.matches || ferrisWheelLocked) return;
            const active = ferrisSections[ferrisIndex];
            const atTop = active.scrollTop <= 1;
            const atBottom = active.scrollTop + active.clientHeight >= active.scrollHeight - 2;
            if ((event.deltaY < 0 && !atTop) || (event.deltaY > 0 && !atBottom)) return;
            event.preventDefault();
            ferrisWheelLocked = true;
            renderFerris(ferrisIndex + (event.deltaY > 0 ? 1 : -1));
            window.setTimeout(() => { ferrisWheelLocked = false; }, 750);
        }, { passive: false });
        ferrisMedia.addEventListener('change', setFerrisMode);
        window.addEventListener('resize', () => {
            window.clearTimeout(ferrisResizeTimer);
            ferrisResizeTimer = window.setTimeout(setFerrisMode, 120);
        });
        window.addEventListener('pageshow', () => window.requestAnimationFrame(setFerrisMode));
        if (document.fonts?.ready) {
            document.fonts.ready.then(() => window.requestAnimationFrame(setFerrisMode));
        }
        setFerrisMode();
    }

    const bioTrigger = document.getElementById('floating-bio-dock');
    if (bioTrigger) {
        bioTrigger.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            openMarcoBioDock();
        });
    }

    // Grid item click handling
    document.addEventListener('click', (e) => {
        const gridItem = e.target.closest('.cv-grid-item');
        if (gridItem && gridItem.dataset.cv) {
            e.preventDefault();
            e.stopPropagation();
            openCvNote(gridItem.dataset.cv);
        }
    });
    
    initCvSwipeGestures();
});

// Expose functions globally for inline HTML event handlers
window.openMarcoBioDock = openMarcoBioDock;
window.closeMarcoBioDock = closeMarcoBioDock;
window.openCvNote = openCvNote;
window.closeCvNote = closeCvNote;

// Recupera la navegación normal al volver desde el historial o reactivar la pestaña.
function restorePageInteraction() {
    const galleryOpen = lightbox && lightbox.classList.contains('active');
    const webOpen = webModal && webModal.classList.contains('active');
    const bioOpen = document.getElementById('pane-bio')?.classList.contains('active-dock');
    const noteOpen = document.getElementById('cv-note-modal')?.classList.contains('active');

    if (!galleryOpen && !webOpen) {
        document.body.classList.remove('modal-open', 'web-modal-active');
    }
    if (!bioOpen && !noteOpen) {
        document.body.classList.remove('cv-modal-open');
    }
}

window.addEventListener('pageshow', restorePageInteraction);
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) restorePageInteraction();
});
document.addEventListener('touchstart', restorePageInteraction, { passive: true, capture: true });
document.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') restorePageInteraction();
}, { passive: true, capture: true });

/* Profundidad editorial del hero: capas independientes, solo con puntero preciso. */
function initHeroPointerComposition() {
    const stage = document.querySelector('.hero-editorial__stage');
    if (!stage) return;
    const hero = document.getElementById('hero') || stage;
    if (stage.dataset.pointerCompositionReady === 'true') return;
    stage.dataset.pointerCompositionReady = 'true';

    let frame = 0;
    const setPosition = (x, y) => {
        const layer = (name, factorX, factorY = factorX) => {
            stage.style.setProperty(`--hero-${name}-x`, `${(x * factorX).toFixed(2)}px`);
            stage.style.setProperty(`--hero-${name}-y`, `${(y * factorY).toFixed(2)}px`);
        };
        layer('bg', .55);
        layer('ring', -1.05);
        layer('dots', 1.45);
        layer('arc', -.85);
        layer('photo', 1.5, .85);
    };
    const moveComposition = (event) => {
        const rect = hero.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - .5) * 2)) * 24;
        const y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - .5) * 2)) * 18;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => setPosition(x, y));
        stage.classList.add('is-pointer-active');
    };
    const resetComposition = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => setPosition(0, 0));
        stage.classList.remove('is-pointer-active');
    };
    window.addEventListener('mousemove', (event) => {
        const rect = hero.getBoundingClientRect();
        const insideHero = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
        if (insideHero) moveComposition(event);
        else resetComposition();
    }, { passive: true });
    window.addEventListener('blur', resetComposition);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroPointerComposition, { once: true });
} else {
    initHeroPointerComposition();
}
