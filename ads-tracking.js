(function () {
  "use strict";
  const config = window.MPAdsConfig || {};
  const storageKey = "mp_ads_consent_v1";
  let tagsLoaded = false;

  const hasGoogle = /^AW-\d+$/.test(config.googleAdsId || "");
  const hasMeta = /^\d{6,}$/.test(config.metaPixelId || "");

  function loadScript(src, id) {
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadTags() {
    if (tagsLoaded || (!hasGoogle && !hasMeta)) return;
    tagsLoaded = true;
    if (hasGoogle) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
      window.gtag("consent", "default", {
        ad_storage: "granted", ad_user_data: "granted",
        ad_personalization: "granted", analytics_storage: "granted"
      });
      window.gtag("js", new Date());
      window.gtag("config", config.googleAdsId);
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.googleAdsId)}`, "mp-google-tag");
    }
    if (hasMeta) {
      window.fbq = window.fbq || function () { (window.fbq.callMethod ? window.fbq.callMethod : window.fbq.queue.push).apply(window.fbq, arguments); };
      window.fbq.queue = window.fbq.queue || [];
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq("init", config.metaPixelId);
      window.fbq("track", "PageView");
      loadScript("https://connect.facebook.net/en_US/fbevents.js", "mp-meta-pixel");
    }
  }

  function setConsent(granted) {
    localStorage.setItem(storageKey, granted ? "granted" : "denied");
    document.getElementById("mp-consent")?.remove();
    if (granted) loadTags();
  }

  function renderConsent() {
    if (document.getElementById("mp-consent")) return;
    const panel = document.createElement("aside");
    panel.id = "mp-consent";
    panel.className = "mp-consent";
    panel.setAttribute("aria-label", "Preferencias de privacidad");
    panel.innerHTML = `<p><strong>Privacidad y medición</strong><span>Usamos medición publicitaria para conocer qué campañas generan contactos. No se activa sin tu autorización.</span></p><div><button type="button" data-consent="deny">Solo necesarias</button><button type="button" data-consent="grant">Aceptar medición</button></div>`;
    panel.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-consent]")?.dataset.consent;
      if (choice) setConsent(choice === "grant");
    });
    document.body.appendChild(panel);
  }

  function trackLead(destination) {
    if (localStorage.getItem(storageKey) !== "granted") return;
    const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    if (hasGoogle && window.gtag) {
      window.gtag("event", "generate_lead", { method: destination, value: Number(config.leadValue) || 1, currency: config.currency || "USD" });
      if (config.googleLeadLabel) {
        window.gtag("event", "conversion", {
          send_to: `${config.googleAdsId}/${config.googleLeadLabel}`,
          value: Number(config.leadValue) || 1,
          currency: config.currency || "USD",
          transaction_id: eventId
        });
      }
    }
    if (hasMeta && window.fbq) window.fbq("track", "Contact", { content_name: destination }, { eventID: eventId });
  }

  document.addEventListener("click", (event) => {
    const privacy = event.target.closest("[data-privacy-settings]");
    if (privacy) {
      event.preventDefault();
      localStorage.removeItem(storageKey);
      renderConsent();
      return;
    }
    const target = event.target.closest("a,button");
    if (!target) return;
    const href = target.getAttribute("href") || "";
    if (/wa\.me|whatsapp/i.test(href) || target.matches("[data-interest]")) trackLead("whatsapp");
    else if (/^mailto:/i.test(href)) trackLead("email");
  }, { capture: true });

  const choice = localStorage.getItem(storageKey);
  if (choice === "granted") loadTags();
  else if (!choice) document.addEventListener("DOMContentLoaded", renderConsent, { once: true });
  window.MPAds = { trackLead, openPrivacy: renderConsent };
})();
