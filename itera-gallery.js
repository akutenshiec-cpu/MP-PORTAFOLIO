/* Galería ligera de capturas reales para tarjetas con `showcase` (ITERA, Nuestro Sí). */
(function () {
    "use strict";
    let dlg, stage, captionEl, counterEl, thumbsEl, titleEl, siteLink, altLink, noteEl, current = 0, slides = [], opener = null, lastScrollY = 0;

    function findCard(id) {
        const data = window.MPPortfolioData || {};
        const sections = data.homeSections || data.sections || {};
        for (const list of Object.values(sections)) {
            const hit = (Array.isArray(list) ? list : []).find((c) => c && c.id === id);
            if (hit) return hit;
        }
        return null;
    }

    function build() {
        dlg = document.createElement("div");
        dlg.className = "pc-lightbox";
        dlg.setAttribute("role", "dialog");
        dlg.setAttribute("aria-modal", "true");
        dlg.setAttribute("aria-labelledby", "pc-lightbox-title");
        dlg.hidden = true;
        dlg.innerHTML = `
            <div class="pc-lightbox__backdrop" data-close></div>
            <div class="pc-lightbox__panel">
                <header class="pc-lightbox__head">
                    <div>
                        <p class="pc-lightbox__kicker"><span class="pc-lightbox__kicker-text">Capturas reales</span> <span class="pc-lightbox__counter" aria-live="polite"></span></p>
                        <h3 id="pc-lightbox-title" class="pc-lightbox__title"></h3>
                    </div>
                    <button type="button" class="pc-lightbox__close" data-close aria-label="Cerrar galería">×</button>
                </header>
                <div class="pc-lightbox__stage" aria-roledescription="carrusel">
                    <button type="button" class="pc-lightbox__nav pc-lightbox__nav--prev" data-prev aria-label="Captura anterior">‹</button>
                    <figure class="pc-lightbox__figure"></figure>
                    <button type="button" class="pc-lightbox__nav pc-lightbox__nav--next" data-next aria-label="Captura siguiente">›</button>
                </div>
                <p class="pc-lightbox__caption"></p>
                <footer class="pc-lightbox__foot">
                    <div class="pc-lightbox__thumbs" role="tablist" aria-label="Elegir captura"></div>
                    <div class="pc-lightbox__links">
                        <a class="pc-site-link pc-lightbox__alt" target="_blank" rel="noopener noreferrer"></a>
                        <a class="pc-lightbox__cta" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </footer>
                <p class="pc-lightbox__note"></p>
            </div>`;
        document.body.appendChild(dlg);
        stage = dlg.querySelector(".pc-lightbox__figure");
        captionEl = dlg.querySelector(".pc-lightbox__caption");
        counterEl = dlg.querySelector(".pc-lightbox__counter");
        thumbsEl = dlg.querySelector(".pc-lightbox__thumbs");
        titleEl = dlg.querySelector(".pc-lightbox__title");
        siteLink = dlg.querySelector(".pc-lightbox__cta");
        altLink = dlg.querySelector(".pc-lightbox__alt");
        noteEl = dlg.querySelector(".pc-lightbox__note");

        dlg.addEventListener("click", (e) => {
            if (e.target.closest("[data-close]")) close();
            else if (e.target.closest("[data-prev]")) go(current - 1);
            else if (e.target.closest("[data-next]")) go(current + 1);
            const t = e.target.closest("[data-thumb]");
            if (t) go(Number(t.dataset.thumb));
        });
        dlg.addEventListener("keydown", onKey);

        // Deslizar en móvil
        let x0 = null, y0 = null;
        const area = dlg.querySelector(".pc-lightbox__stage");
        area.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
        area.addEventListener("touchend", (e) => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(current + (dx < 0 ? 1 : -1));
            x0 = y0 = null;
        });
    }

    function focusables() {
        return [...dlg.querySelectorAll("button, a[href]")].filter((el) => !el.disabled && el.offsetParent !== null);
    }

    function onKey(e) {
        if (e.key === "Escape") { e.preventDefault(); close(); }
        else if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
        else if (e.key === "Tab") {
            const f = focusables(); if (!f.length) return;
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    }

    function go(i) {
        current = (i + slides.length) % slides.length;
        const s = slides[current];
        stage.classList.toggle("is-portrait", !!s.portrait);
        stage.innerHTML = `<picture><source srcset="${s.src}.webp" type="image/webp"><img src="${s.src}.jpg" alt="${s.alt}" width="${s.w}" height="${s.h}" decoding="async"></picture>`;
        captionEl.textContent = s.caption || "";
        counterEl.textContent = `${current + 1} / ${slides.length}`;
        thumbsEl.querySelectorAll("[data-thumb]").forEach((b, bi) => {
            b.setAttribute("aria-selected", bi === current ? "true" : "false");
            b.tabIndex = bi === current ? 0 : -1;
        });
        // precarga la siguiente
        const n = slides[(current + 1) % slides.length];
        if (n) { const im = new Image(); im.src = `${n.src}.webp`; }
    }

    function open(card, index, trigger) {
        if (!dlg) build();
        slides = card.showcase.slides;
        opener = trigger || document.activeElement;
        titleEl.textContent = card.showcase.title || card.displayTitle || card.title || "";
        const sc = card.showcase;
        const ext = ' <span aria-hidden="true">↗</span><span class="sr-only"> (se abre en una pestaña nueva)</span>';
        // Botón principal: la muestra en vivo si existe; si no, el sitio del producto.
        const mainUrl = sc.sampleUrl || card.externalUrl;
        const mainLabel = sc.sampleUrl ? `Abrir ${(sc.sampleLabel || "el ejemplo").toLowerCase()}` : `Visitar ${sc.siteLabel || "IteraQMS.com"}`;
        const mark = sc.openIcon
            ? `<i class="fas ${sc.openIcon}" aria-hidden="true"></i>`
            : '<img src="images/branding/itera/iteraqms-mark.png" alt="" width="20" height="20" aria-hidden="true">';
        if (mainUrl) { siteLink.href = mainUrl; siteLink.innerHTML = `${mark}<span>${mainLabel}</span>${ext}`; siteLink.hidden = false; } else siteLink.hidden = true;
        if (sc.sampleUrl && card.externalUrl) { altLink.href = card.externalUrl; altLink.innerHTML = `${sc.siteLabel || card.externalUrl}${ext}`; altLink.hidden = false; } else altLink.hidden = true;
        dlg.querySelector(".pc-lightbox__kicker-text").textContent = sc.kicker || "Capturas reales";
        noteEl.textContent = sc.note || "Datos de demostración. Nombres de producto, proveedor y usuario difuminados.";
        thumbsEl.innerHTML = slides.map((s, i) => `<button type="button" role="tab" class="pc-lightbox__thumb${s.portrait ? " is-portrait" : ""}" data-thumb="${i}" aria-label="Captura ${i + 1}: ${s.alt}"><picture><source srcset="${s.src}.webp" type="image/webp"><img src="${s.src}.jpg" alt="" loading="lazy"></picture></button>`).join("");
        dlg.hidden = false;
        lastScrollY = window.scrollY;
        document.documentElement.classList.add("pc-lightbox-open");
        requestAnimationFrame(() => dlg.classList.add("is-open"));
        go(index || 0);
        dlg.querySelector(".pc-lightbox__close").focus({ preventScroll: true });
    }

    function close() {
        if (!dlg || dlg.hidden) return;
        dlg.classList.remove("is-open");
        dlg.hidden = true;
        document.documentElement.classList.remove("pc-lightbox-open");
        if (opener && typeof opener.focus === "function") opener.focus({ preventScroll: true });
        window.scrollTo(0, lastScrollY);
    }

    function trigger(e) {
        const el = e.target.closest("[data-showcase-open]");
        if (!el) return false;
        const card = findCard(el.dataset.showcaseOpen);
        if (!card || !card.showcase) return false;
        e.preventDefault(); e.stopPropagation();
        open(card, Number(el.dataset.showcaseIndex || 0), el);
        return true;
    }
    document.addEventListener("click", trigger, true);
    document.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches('[data-showcase-open][role="button"]')) trigger(e);
    }, true);
    window.MPShowcase = { open: (id, i) => { const c = findCard(id); if (c) open(c, i || 0); }, close };
})();
