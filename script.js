function initHeroCarouselLegacy() {
    const slides = heroCarousel.slides || [];
    if (!slides.length) return;

    const heroName = document.getElementById("hero-name");
    const heroRole = document.getElementById("hero-role");
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
    if (!heroName || !heroRole || !heroDesc || !heroImg || !ctaPrimary || !ctaSecondary || !dotsWrap) return;

    const primarySlide = slides[0];
    const secondarySlide = slides[1];

    if (primarySlide) {
        heroName.textContent = repairText(primarySlide.title || "");
        heroRole.innerHTML = repairText(primarySlide.role || "").replace("//", '<span class="slash">//</span>');
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

    const heroName = document.getElementById("hero-name");
    const heroRole = document.getElementById("hero-role");
    const heroDesc = document.getElementById("hero-desc");
    const heroImg = document.getElementById("hero-image");
    const ctaPrimary = document.getElementById("hero-cta-primary");
    const ctaSecondary = document.getElementById("hero-cta-secondary");
    if (!heroName || !heroRole || !heroDesc || !heroImg || !ctaPrimary || !ctaSecondary) return;

    const primarySlide = slides[0];
    if (!primarySlide) return;

    heroName.textContent = repairText(primarySlide.title || "");
    heroRole.innerHTML = repairText(primarySlide.role || "").replace("//", '<span class="slash">//</span>');
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
            const isClickable = card.type === "web" || card.type === "gallery";
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
                card.type === "gallery"
                    ? `<a href="galerial.html?id=${encodeURIComponent(
                          card.id
                      )}" class="card-gallery-link" data-gallery-link>Vista galería HD <i class="fas fa-images"></i></a>`
                    : "";

            return `
                <div class="trust-card${cardClass}${isClickable ? "" : " no-link"}"${actionAttrs}>
                    <div class="card-image${imageClass}">
                        ${badge}
                        <img src="${card.image}" alt="${safeAlt}" style="${imageStyle}" loading="lazy" decoding="async">
                        ${overlay}
                    </div>
                    <div class="card-info">
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
    const message = `Hola Marco, estoy interesado en el proyecto: ${cleanName}. ¿Podemos conversar sobre el alcance?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function initHeroCarouselLegacy() {
    const slides = heroCarousel.slides || [];
    if (!slides.length) return;

    const heroName = document.getElementById("hero-name");
    const heroRole = document.getElementById("hero-role");
    const heroDesc = document.getElementById("hero-desc");
    const heroImg = document.getElementById("hero-image");
    const ctaPrimary = document.getElementById("hero-cta-primary");
    const ctaSecondary = document.getElementById("hero-cta-secondary");
    const dotsWrap = document.getElementById("hero-dots");
    if (!heroName || !heroRole || !heroDesc || !heroImg || !ctaPrimary || !ctaSecondary || !dotsWrap) return;

    let current = 0;
    function goToSlide(index) {
        current = (index + slides.length) % slides.length;
        applySlide(current);
    }

    function applySlide(index) {
        const slide = slides[index];
        heroName.textContent = repairText(slide.title || "");
        heroRole.innerHTML = repairText(slide.role || "").replace("//", '<span class="slash">//</span>');
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
    const footerBrandTitle = document.getElementById("footer-brand-title");
    const footerBrandDescription = document.getElementById("footer-brand-description");
    const footerCopy = document.getElementById("footer-copy");
    if (footerBrandTitle && footer.brandTitle) footerBrandTitle.textContent = repairText(footer.brandTitle);
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
const lightbox = document.getElementById('lightbox'), lbImg = document.getElementById('lb-img'), lbTitle = document.getElementById('lb-title'), lbCounter = document.getElementById('lb-counter'), lbWrapper = document.querySelector('.lb-image-wrapper');
const webModal = document.getElementById('web-modal'), webFrame = document.getElementById('web-frame'), webTitle = document.getElementById('web-title'), webLink = document.getElementById('web-link');

/* =========================================
   3. CONTROL DE HISTORIAL (BACK BUTTON FIX)
   ========================================= */
window.addEventListener('popstate', function() {
    if (lightbox && lightbox.classList.contains('active')) {
        closeGalleryUI();
    }
    if (webModal && webModal.classList.contains('active')) {
        closeWebUI();
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
    lbImg.style.opacity = 0.5; lbImg.style.transition = 'opacity 0.2s';
    lbImg.src = currentImgs[idx]; lbCounter.innerText = (idx + 1) + " / " + currentImgs.length;
    lbImg.onload = () => { lbImg.style.opacity = 1; lbImg.style.transition = 'none'; };
}

function closeGalleryUI() {
    lightbox.classList.remove('active'); 
    document.body.classList.remove('modal-open');
    setTimeout(() => { lbImg.src = ""; resetTransform(); }, 300);
}

function closeGallery() {
    history.back(); 
}

function changeSlide(dir) {
    idx += dir; if(idx >= currentImgs.length) idx = 0; if(idx < 0) idx = currentImgs.length - 1;
    resetTransform(); updateImage();
}

/* =========================================
   5. MODAL WEB & FAB
   ========================================= */
function openWeb(key) {
    const data = webDB[key]; if(!data) return;
    webTitle.innerText = data.title; webFrame.src = data.url; webLink.href = data.url;
    history.pushState({ modal: 'web' }, null, "");
    webModal.classList.add('active'); 
    document.body.classList.add('modal-open');
}

function closeWebUI() {
    webModal.classList.remove('active'); 
    document.body.classList.remove('modal-open');
    setTimeout(() => webFrame.src = "", 300);
}

function closeWeb() {
    history.back();
}

/* =========================================
   6. TOUCH & ZOOM LOGIC
   ========================================= */
function resetTransform() { currentScale = 1; currentX = 0; currentY = 0; applyTransform(); lbWrapper.style.cursor = 'grab'; }
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
    if (currentScale === 1) currentScale = 2.5; else resetTransform();
    lbImg.style.transition = 'transform 0.3s ease'; applyTransform(); setTimeout(() => lbImg.style.transition = 'none', 300);
}

/* =========================================
   7. MENÚ FAB
   ========================================= */
const fabWrapper = document.getElementById('fabMenu'), fabBtn = document.getElementById('fabBtn');
if(fabBtn) {
    fabBtn.addEventListener('click', (e) => { 
        e.stopPropagation(); 
        fabWrapper.classList.toggle('active'); 
        fabBtn.classList.toggle('active'); 
        const i = fabBtn.querySelector('i');
        if(fabWrapper.classList.contains('active')) { 
            i.classList.remove('fa-bars'); i.classList.add('fa-times'); 
        } else { 
            i.classList.remove('fa-times'); i.classList.add('fa-bars'); 
        } 
    });
}
function closeFab() { 
    fabWrapper.classList.remove('active'); 
    fabBtn.classList.remove('active'); 
    const i = fabBtn.querySelector('i');
    i.classList.remove('fa-times'); i.classList.add('fa-bars'); 
}

/* =========================================
   8. EVENTOS GLOBALES
   ========================================= */
document.addEventListener('keydown', (e) => {
    if(e.key === "Escape") { 
        if (lightbox && lightbox.classList.contains('active')) closeGallery();
        if (webModal && webModal.classList.contains('active')) closeWeb();
    }
    if(lightbox && lightbox.classList.contains('active')) { if(e.key === "ArrowLeft") changeSlide(-1); if(e.key === "ArrowRight") changeSlide(1); }
});
document.addEventListener('click', (e) => {
    if(fabWrapper && fabWrapper.classList.contains('active') && !fabWrapper.contains(e.target)) closeFab();
    if(lightbox && e.target === lightbox) closeGallery();
});

const clientAccessLink = document.getElementById("hero-cta-itera");
const pageLoadingOverlay = document.getElementById("page-loading-overlay");

if (clientAccessLink && pageLoadingOverlay) {
    clientAccessLink.addEventListener("click", () => {
        pageLoadingOverlay.classList.add("active");
    });
    window.addEventListener("pageshow", () => {
        pageLoadingOverlay.classList.remove("active");
    });
}

window.openGallery = openGallery; 
window.closeGallery = closeGallery; 
window.openWeb = openWeb; 
window.closeWeb = closeWeb; 
window.changeSlide = changeSlide; 
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
    if (action === "web") openWeb(key);
    if (action === "gallery") openGallery(key, galleryIndex);
});

/* =========================================
   9. HERO ANIMATION (Sin cambios, las partículas verdes se verán bien sobre blanco)
   ========================================= */
window.addEventListener('load', function() {
    applyContentCustomization();
    renderHomeSections();
    applySectionMetaToDOM();
    applySectionLayout();
    initHeroCarousel();
    initRevealOnScroll();

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
