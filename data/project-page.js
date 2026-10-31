/* Shared renderer for project detail pages and catalog cards.
   Loaded by proyecto.html and index2.html. Also evaluated by
   scripts/prerender-projects.mjs. Keep it free of DOM access at load time. */
(function (root) {
    "use strict";

    var WHATSAPP = "593963036594";

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function safeUrl(value) {
        var url = String(value == null ? "" : value).trim();
        if (!url) return "";
        if (/^(https?:\/\/|mailto:)/i.test(url)) return url;
        if (/^(index\.html|proyecto\.html|proyectos\/|images\/|\.\.\/|\.\/)/.test(url)) return url;
        if (url.charAt(0) === "#" || url.charAt(0) === "/") return url;
        return "";
    }

    function assetUrl(prefix, src) {
        var url = safeUrl(src);
        if (!url || /^(https?:)?\/\//i.test(url) || url.charAt(0) === "#" || url.charAt(0) === "/") return url;
        return (prefix || "") + url;
    }

    function projects() {
        var data = root.MPPortfolioData || {};
        return Array.isArray(data.projects) ? data.projects : [];
    }

    function findProject(id) {
        var key = String(id || "").trim();
        if (!key) return null;
        var list = projects();
        for (var i = 0; i < list.length; i += 1) {
            var project = list[i];
            if (!project || project.visible === false) continue;
            if (project.id === key || project.slug === key) return project;
        }
        return null;
    }

    function pageHref(project, prefix) {
        var slug = String(project.slug || project.id || "").trim();
        var page = typeof project.page === "string" ? project.page.trim() : "";
        var href = page || ("proyecto.html?id=" + encodeURIComponent(slug));
        return assetUrl(prefix, href);
    }

    function whatsappHref(project) {
        var name = project.title || "un proyecto";
        var text = "Hola MP Dev Studio, vi el caso de " + name + " y quiero conversar sobre un alcance parecido.";
        return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text);
    }

    function renderProjectBody(project, options) {
        var prefix = (options && options.assetPrefix) || "";
        var home = assetUrl(prefix, "index.html#" + (project.section || "webs"));
        var image = assetUrl(prefix, project.image || "");
        var live = safeUrl(project.externalUrl || "");
        var features = Array.isArray(project.features) ? project.features : [];
        var stack = Array.isArray(project.stack) ? project.stack : [];
        var tags = Array.isArray(project.tags) ? project.tags : [];
        var featureHtml = features.map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
        }).join("");
        var stackHtml = stack.map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
        }).join("");
        var tagHtml = tags.map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
        }).join("");
        var liveLabel = project.liveLabel || project.ctaLabel || "Abrir sitio";
        var actions = "";
        if (live) {
            actions += '<a class="case-btn" href="' + escapeHtml(live) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(liveLabel) + "</a>";
        }
        actions += '<a class="case-btn case-btn--ghost" href="' + escapeHtml(whatsappHref(project)) + '" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>';

        return [
            '<a class="case-back" href="' + escapeHtml(home) + '">Volver al portafolio</a>',
            '<article class="case">',
            '<header class="case-copy">',
            '<p class="case-kicker">' + escapeHtml(project.badge || "Caso") + "</p>",
            "<h1>" + escapeHtml(project.title || "Proyecto") + "</h1>",
            '<p class="case-rubro">' + escapeHtml(project.rubro || "") + "</p>",
            '<p class="case-lead">' + escapeHtml(project.lead || project.description || "") + "</p>",
            tagHtml ? '<ul class="case-tags">' + tagHtml + "</ul>" : "",
            '<div class="case-actions">' + actions + "</div>",
            "</header>",
            image
                ? '<figure class="case-figure"><img src="' + escapeHtml(image) + '" alt="' + escapeHtml(project.imageAlt || project.title || "") + '" width="1200" height="717"></figure>'
                : "",
            '<section class="case-detail">',
            "<div>",
            "<h2>Qué incluye</h2>",
            featureHtml ? "<ul>" + featureHtml + "</ul>" : "<p>El alcance se conversa en el diagnóstico.</p>",
            "</div>",
            "<aside>",
            "<h2>Ficha</h2>",
            '<dl>',
            "<div><dt>Rol</dt><dd>" + escapeHtml(project.role || "MP Dev Studio") + "</dd></div>",
            stackHtml ? "<div><dt>Stack</dt><dd><ul>" + stackHtml + "</ul></dd></div>" : "",
            live ? '<div><dt>En vivo</dt><dd><a href="' + escapeHtml(live) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(live.replace(/^https?:\/\//, "")) + "</a></dd></div>" : "",
            "</dl>",
            "</aside>",
            "</section>",
            "</article>"
        ].join("");
    }

    function renderCatalogCard(project, options) {
        var prefix = (options && options.assetPrefix) || "";
        var image = assetUrl(prefix, project.image || "");
        var href = pageHref(project, prefix);
        var features = Array.isArray(project.features) ? project.features : [];
        var items = features.map(function (item) {
            return "<li>" + escapeHtml(item) + "</li>";
        }).join("");
        return [
            '<article class="service-card service-card--project">',
            '<div class="service-card__image">',
            image ? '<img src="' + escapeHtml(image) + '" alt="' + escapeHtml(project.imageAlt || project.title || "") + '" loading="lazy">' : "",
            "</div>",
            '<div class="service-card__body">',
            '<span class="service-card__tag">' + escapeHtml(project.catalogTag || project.badge || "Caso") + "</span>",
            "<h3>" + escapeHtml(project.title || "") + "</h3>",
            "<p>" + escapeHtml(project.description || "") + "</p>",
            project.catalogResult ? '<p class="service-card__result">' + escapeHtml(project.catalogResult) + "</p>" : "",
            '<a class="service-card__cta" href="' + escapeHtml(href) + '"><span>Ver el caso</span></a>',
            items ? "<details><summary>Qué incluye</summary><ul>" + items + "</ul></details>" : "",
            "</div>",
            "</article>"
        ].join("");
    }

    function setMeta(name, content, attr) {
        if (!content || !root.document) return;
        var selector = attr === "property" ? 'meta[property="' + name + '"]' : 'meta[name="' + name + '"]';
        var node = root.document.head.querySelector(selector);
        if (!node) {
            node = root.document.createElement("meta");
            node.setAttribute(attr || "name", name);
            root.document.head.appendChild(node);
        }
        node.setAttribute("content", content);
    }

    function mountDetail(target) {
        var doc = root.document;
        if (!doc || !target) return;
        var params = new URLSearchParams(root.location.search);
        var project = findProject(params.get("id"));
        if (!project) {
            doc.title = "Proyecto · MP Dev Studio";
            target.innerHTML = '<a class="case-back" href="index.html">Volver al portafolio</a><article class="case case--empty"><h1>No encontramos ese proyecto</h1><p class="case-lead">La ficha no está en el portafolio o todavía no está visible.</p></article>';
            return;
        }
        doc.title = project.title + " · MP Dev Studio";
        var summary = project.description || project.lead || "";
        setMeta("description", summary, "name");
        setMeta("og:title", project.title + " · MP Dev Studio", "property");
        setMeta("og:description", summary, "property");
        if (project.image) setMeta("og:image", new URL(project.image, root.location.href).href, "property");
        target.innerHTML = renderProjectBody(project, { assetPrefix: "" });
    }

    function mountCatalog() {
        var doc = root.document;
        if (!doc) return;
        var groups = {};
        projects().forEach(function (project) {
            if (!project || project.visible === false || !project.catalogSection) return;
            var key = String(project.catalogSection);
            if (!groups[key]) groups[key] = [];
            groups[key].push(project);
        });
        Object.keys(groups).forEach(function (sectionId) {
            var grid = doc.querySelector("#" + (window.CSS && CSS.escape ? CSS.escape(sectionId) : sectionId) + " .service-grid");
            if (!grid) return;
            var html = groups[sectionId]
                .slice()
                .sort(function (a, b) { return (a.order || 9999) - (b.order || 9999); })
                .map(function (project) { return renderCatalogCard(project, { assetPrefix: "" }); })
                .join("");
            grid.insertAdjacentHTML("beforeend", html);
        });
    }

    function renderStaticDocument(project) {
        var slug = String(project.slug || project.id || "").trim();
        var prefix = "../../";
        var canonical = "https://mpdesigns.xyz/proyectos/" + slug + "/";
        var image = project.image ? "https://mpdesigns.xyz/" + String(project.image).replace(/^\//, "") : "";
        var summary = project.description || project.lead || "";
        var jsonLd = {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title || "",
            description: summary,
            url: canonical,
            creator: { "@type": "Organization", name: "MP Dev Studio", url: "https://mpdesigns.xyz/" }
        };
        if (safeUrl(project.externalUrl || "")) jsonLd.sameAs = project.externalUrl;
        if (image) jsonLd.image = image;

        return [
            "<!doctype html>",
            '<html lang="es">',
            "<head>",
            '<meta charset="utf-8">',
            '<meta name="viewport" content="width=device-width, initial-scale=1">',
            "<title>" + escapeHtml(project.title || "Proyecto") + " · MP Dev Studio</title>",
            '<meta name="description" content="' + escapeHtml(summary) + '">',
            '<link rel="canonical" href="' + escapeHtml(canonical) + '">',
            '<meta property="og:type" content="article">',
            '<meta property="og:title" content="' + escapeHtml((project.title || "Proyecto") + " · MP Dev Studio") + '">',
            '<meta property="og:description" content="' + escapeHtml(summary) + '">',
            '<meta property="og:url" content="' + escapeHtml(canonical) + '">',
            image ? '<meta property="og:image" content="' + escapeHtml(image) + '">' : "",
            '<meta name="twitter:card" content="summary_large_image">',
            '<link rel="icon" href="' + prefix + 'images/mp-dev-studio-icon-light-fg.svg" type="image/svg+xml">',
            '<link rel="preconnect" href="https://fonts.googleapis.com">',
            '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
            '<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">',
            '<link rel="stylesheet" href="' + prefix + 'proyecto.css">',
            '<script type="application/ld+json">' + JSON.stringify(jsonLd).replace(/</g, "\\u003c") + "</script>",
            "</head>",
            "<body>",
            "<!-- Generado por scripts/prerender-projects.mjs desde data/portfolio-data.js. No editar a mano. -->",
            '<header class="case-topbar"><a class="case-brand" href="' + prefix + 'index.html"><img src="' + prefix + 'images/mp-dev-studio-mark.svg" alt="" width="34" height="28"><span>MP Dev Studio</span></a></header>',
            "<main>" + renderProjectBody(project, { assetPrefix: prefix }) + "</main>",
            '<footer class="case-footer"><span>© 2026 MP Dev Studio</span><span>Loja, Ecuador</span></footer>',
            "</body>",
            "</html>",
            ""
        ].join("\n");
    }

    root.MPProjectPage = {
        findProject: findProject,
        renderProjectBody: renderProjectBody,
        renderCatalogCard: renderCatalogCard,
        renderStaticDocument: renderStaticDocument,
        mountDetail: mountDetail,
        mountCatalog: mountCatalog
    };
})(typeof window !== "undefined" ? window : globalThis);
