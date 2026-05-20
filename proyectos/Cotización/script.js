/* Javascript logic: Architecture Integration, Tabs Switching & Dynamic Delivery Ledger */
/* Designed by Marco Pérez · MP Designs */

/**
 * Datos formales del emisor en el PDF exportable.
 * Complete `ruc` y ajuste `direccionFiscal` según su situación tributaria.
 */
const EMITENTE_COTIZACION = {
    razonSocial: "MP Designs",
    representante: "Marco Pérez",
    ruc: "",
    direccionFiscal: "Loja, Ecuador",
    telefono: "+593 96 303 6594",
    email: "marcod.pc2021@gmail.com",
    marcaSub: "Marco Pérez · Arquitectura de software a medida",
    whatsappE164: "593963036594",
};

document.addEventListener("DOMContentLoaded", () => {
    
    // Core parameters state
    const termMonths = 12;
    /** Factor sobre el total de obra cuando se elige plan en 12 pagos (vs. contado). Ajusta aquí si cambias la política comercial. */
    const YEAR1_DEFERRED_FACTOR = 1.1;
    const deferredPercentLabel = Math.round((YEAR1_DEFERRED_FACTOR - 1) * 100);
    /** Mantenimiento operativo mínimo facturado en año 1 (USD/mes). Mayor cuando el canal web está en el proyecto. */
    const YEAR1_MAINTENANCE_WITH_WEB = 52;
    const YEAR1_MAINTENANCE_NO_WEB = 38;
    /** Referencia mes 13+ (USD/mes), alineada al desglose lateral */
    const POST_YEAR_QMS_MONTHLY = 60;
    const POST_YEAR_WEB_MONTHLY = 50;
    const modules = document.querySelectorAll(".proposal-item-accordion");
    const liveItemsCount = document.getElementById("live-items-count");
    const liveTotalNeto = document.getElementById("live-total-neto");
    const liveMonthlyPayment = document.getElementById("live-monthly-payment");
    const liveMonthlyMaintenance = document.getElementById("live-monthly-maintenance");
    const liveYear1TotalMonthly = document.getElementById("live-year1-total-monthly");
    const maintenanceTierNote = document.getElementById("maintenance-tier-note");
    const postYearWebRow = document.getElementById("post-year-web-row");
    const postYearWebAmt = document.getElementById("post-year-web-amt");
    const postYearTotalAmt = document.getElementById("post-year-total-amt");
    const postYearQmsAmt = document.getElementById("post-year-qms-amt");
    const alembicMes13Line = document.getElementById("alembic-mes13-line");
    const sidebarWebPill = document.getElementById("sidebar-web-pill");
    const maintenanceMonthlyBox = document.getElementById("maintenance-monthly-box");
    const liveDeliveryTime = document.getElementById("live-delivery-time");
    const sendWaBtn = document.getElementById("send-proposal-wa");
    const exportPdfBtn = document.getElementById("export-quotation-pdf");
    const quotationPrint = document.getElementById("quotation-print");
    const stickyMonthlyVal = document.getElementById("sticky-monthly-val");
    const stickyObraTotalEl = document.getElementById("sticky-m-obra-total");
    const stickyCuotaObraEl = document.getElementById("sticky-m-cuota-obra");
    const stickyMantEl = document.getElementById("sticky-m-mant");
    const stickySendWaBtn = document.getElementById("sticky-send-wa");
    
    // Tabs Navigation Elements
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane-content");

    // Initialize state mapping
    syncModuleStateClasses();
    calculateProposalValues();

    function applyEmitenteToPrintTemplate() {
        const setText = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val && String(val).trim() ? String(val).trim() : "—";
        };
        setText("qp-emit-razon", EMITENTE_COTIZACION.razonSocial);
        setText("qp-emit-rep", EMITENTE_COTIZACION.representante);
        setText("qp-emit-ruc", EMITENTE_COTIZACION.ruc);
        setText("qp-emit-dir", EMITENTE_COTIZACION.direccionFiscal);
        setText("qp-emit-tel", EMITENTE_COTIZACION.telefono);
        setText("qp-emit-mail", EMITENTE_COTIZACION.email);
        const brandSub = document.getElementById("qp-brand-sub");
        if (brandSub) brandSub.textContent = EMITENTE_COTIZACION.marcaSub;
    }
    applyEmitenteToPrintTemplate();

    function fmtUsdPdf(n) {
        return (
            "$" +
            Number(n).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }) +
            " USD"
        );
    }

    function buildQuotationPrintSnapshot() {
        const currentNet = parseFloat(sendWaBtn.getAttribute("data-current-net"));
        if (currentNet <= 0) {
            alert("Por favor active al menos un módulo operativo para generar la propuesta.");
            return false;
        }

        const currentMonthly = parseFloat(sendWaBtn.getAttribute("data-current-monthly"));
        const year1MaintenanceMonthly = parseFloat(sendWaBtn.getAttribute("data-year1-maintenance-monthly") || "0");
        const year1TotalMonthlyWa = parseFloat(sendWaBtn.getAttribute("data-year1-total-monthly") || "0");
        const year1DeferredTotal = parseFloat(sendWaBtn.getAttribute("data-year1-deferred-total") || "0");
        const deferredFactor = parseFloat(sendWaBtn.getAttribute("data-deferred-factor") || "1");
        const deferredPct = Math.round((deferredFactor - 1) * 100);
        const currentTimeline = sendWaBtn.getAttribute("data-current-timeline");
        const webModuleActiveWa = sendWaBtn.getAttribute("data-web-module-active") === "1";
        const postYearTotalMes13Wa = parseFloat(sendWaBtn.getAttribute("data-post-year-total-mes13") || "0");

        const tbody = document.getElementById("qp-lines");
        if (tbody) tbody.replaceChildren();

        let itemNumber = 1;
        modules.forEach((module) => {
            const checkbox = module.querySelector(".module-toggle-checkbox");
            if (!checkbox || !checkbox.checked) return;
            const titleEl = module.querySelector(".item-title-block h3");
            const moduleName = titleEl ? titleEl.textContent.trim() : "Módulo";
            const priceNum = parseFloat(module.getAttribute("data-price"));
            const tr = document.createElement("tr");
            const tdN = document.createElement("td");
            tdN.textContent = String(itemNumber);
            const tdName = document.createElement("td");
            tdName.textContent = moduleName;
            const tdUsd = document.createElement("td");
            tdUsd.textContent = fmtUsdPdf(priceNum);
            tr.appendChild(tdN);
            tr.appendChild(tdName);
            tr.appendChild(tdUsd);
            if (tbody) tbody.appendChild(tr);
            itemNumber++;
        });

        const fechaEl = document.getElementById("qp-fecha");
        if (fechaEl) {
            fechaEl.textContent = new Date().toLocaleDateString("es-EC", { dateStyle: "long" });
        }
        const refEl = document.getElementById("qp-ref");
        if (refEl) {
            const d = new Date();
            const ymd = d.toISOString().slice(0, 10).replace(/-/g, "");
            refEl.textContent = `COT-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
        }
        const plazoEl = document.getElementById("qp-plazo");
        if (plazoEl) plazoEl.textContent = currentTimeline || "—";

        const setEl = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };
        setEl("qp-total-obra", fmtUsdPdf(currentNet));
        setEl("qp-factor-pct", `${deferredPct}%`);
        setEl("qp-serie-obra", fmtUsdPdf(year1DeferredTotal));
        setEl("qp-cuota-obra", `${fmtUsdPdf(currentMonthly)} / mes`);
        setEl("qp-mant", `${fmtUsdPdf(year1MaintenanceMonthly)} / mes`);
        setEl("qp-total-mes", `${fmtUsdPdf(year1TotalMonthlyWa)} / mes`);
        setEl(
            "qp-mes13",
            webModuleActiveWa
                ? `${fmtUsdPdf(postYearTotalMes13Wa)} / mes ref. (QMS + web)`
                : `${fmtUsdPdf(postYearTotalMes13Wa)} / mes ref. (solo núcleo QMS)`
        );

        const footYear = document.getElementById("qp-footer-year");
        if (footYear) footYear.textContent = String(new Date().getFullYear());

        return true;
    }

    function exportQuotationPdf() {
        if (!quotationPrint || !buildQuotationPrintSnapshot()) return;
        quotationPrint.removeAttribute("hidden");
        const onAfterPrint = () => {
            quotationPrint.setAttribute("hidden", "");
            window.removeEventListener("afterprint", onAfterPrint);
        };
        window.addEventListener("afterprint", onAfterPrint);
        requestAnimationFrame(() => window.print());
    }

    if (exportPdfBtn) {
        exportPdfBtn.addEventListener("click", exportQuotationPdf);
    }

    // ==========================================
    // 1. TABS SYSTEM LOGIC
    // ==========================================
    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetPaneId = button.getAttribute("data-tab");

            // Toggle active buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Toggle visible content panes
            tabPanes.forEach(pane => {
                pane.classList.remove("active");
                if (pane.id === targetPaneId) {
                    pane.classList.add("active");
                }
            });
        });
    });

    // ==========================================
    // 2. ACCORDION & CHECKBOX INTEGRATION
    // ==========================================
    modules.forEach(module => {
        const trigger = module.querySelector(".accordion-trigger");
        const checkbox = module.querySelector(".module-toggle-checkbox");
        const detailsText = module.querySelector(".toggle-details-text");

        // Action A: Toggle Open/Close descriptive panel view
        trigger.addEventListener("click", (e) => {
            if (e.target.closest(".switch-container")) return;
            if (!module.classList.contains("active-module")) return;

            module.classList.toggle("open-panel");
            
            if (module.classList.contains("open-panel")) {
                detailsText.textContent = "Ver menos";
            } else {
                detailsText.textContent = "Ver más detalles";
            }
        });

        // Action B: Change Checkbox active state status
        checkbox.addEventListener("change", () => {
            syncModuleStateClasses();
            calculateProposalValues();
        });
    });

    function syncModuleStateClasses() {
        modules.forEach(module => {
            const isChecked = module.querySelector(".module-toggle-checkbox").checked;
            const detailsText = module.querySelector(".toggle-details-text");
            
            if (isChecked) {
                module.classList.add("active-module");
                if (module.classList.contains("open-panel")) {
                    detailsText.textContent = "Ver menos";
                } else {
                    detailsText.textContent = "Ver más detalles";
                }
            } else {
                module.classList.remove("active-module");
                module.classList.remove("open-panel");
                detailsText.textContent = "Módulo inactivo";
            }
        });
    }

    // ==========================================
    // 3. DYNAMIC LIQUIDATION & TIMELINE CALCULATOR
    // ==========================================
    function calculateProposalValues() {
        let cumulativeNeto = 0;
        let cumulativeActiveCount = 0;
        let isIteraCoreActive = false;

        modules.forEach(module => {
            const checkbox = module.querySelector(".module-toggle-checkbox");
            if (checkbox.checked) {
                cumulativeNeto += parseFloat(module.getAttribute("data-price"));
                cumulativeActiveCount++;
                if (module.id === "module-itera") {
                    isIteraCoreActive = true;
                }
            }
        });

        const webModuleEl = document.getElementById("module-web");
        const webCheckbox = webModuleEl?.querySelector(".module-toggle-checkbox");
        const webModuleActive = !!(webCheckbox?.checked);

        const monthlyMaintenance =
            cumulativeNeto > 0 ? (webModuleActive ? YEAR1_MAINTENANCE_WITH_WEB : YEAR1_MAINTENANCE_NO_WEB) : 0;

        const calculatedMonthly = cumulativeNeto > 0 ? (cumulativeNeto * YEAR1_DEFERRED_FACTOR) / termMonths : 0;
        const year1DeferredTotal = cumulativeNeto > 0 ? cumulativeNeto * YEAR1_DEFERRED_FACTOR : 0;
        const year1TotalMonthly = calculatedMonthly + monthlyMaintenance;

        // Calculate delivery roadmap variables dynamically
        let deliveryTimelineText = "";
        if (cumulativeActiveCount === 0) {
            deliveryTimelineText = "Sin módulos seleccionados";
        } else if (isIteraCoreActive) {
            // Core takes 1 week, each extra active item adds 1 week
            let totalWeeks = 1 + (cumulativeActiveCount - 1);
            deliveryTimelineText = `7 días Núcleo central + ${totalWeeks - 1} Sem. Despliegue asíncrono`;
            if (cumulativeActiveCount === 1) {
                deliveryTimelineText = "7 días hábiles (Núcleo Core)";
            }
        } else {
            // General setup without Itera Core
            deliveryTimelineText = `${cumulativeActiveCount} Semanas estimadas`;
        }

        // Render parameter values on Sidebar UI
        liveItemsCount.textContent = `${cumulativeActiveCount} ${cumulativeActiveCount === 1 ? 'Módulo Activo' : 'Módulos Activos'}`;
        liveTotalNeto.textContent = `$${cumulativeNeto.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` + " USD";
        liveMonthlyPayment.textContent = calculatedMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (liveMonthlyMaintenance) {
            liveMonthlyMaintenance.textContent = monthlyMaintenance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        if (liveYear1TotalMonthly) {
            liveYear1TotalMonthly.textContent = year1TotalMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        if (maintenanceTierNote) {
            maintenanceTierNote.textContent = webModuleActive
                ? "con módulo web / tienda activo"
                : "sin módulo web en esta simulación";
        }
        const postYearTotalMes13 =
            cumulativeNeto > 0 ? POST_YEAR_QMS_MONTHLY + (webModuleActive ? POST_YEAR_WEB_MONTHLY : 0) : 0;

        const fmtUsd = (n) =>
            "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        if (cumulativeNeto <= 0) {
            if (postYearWebRow) postYearWebRow.hidden = true;
            if (postYearTotalAmt) postYearTotalAmt.textContent = "—";
            if (postYearQmsAmt) postYearQmsAmt.textContent = "—";
        } else {
            if (postYearQmsAmt) postYearQmsAmt.textContent = fmtUsd(POST_YEAR_QMS_MONTHLY);
            if (postYearWebRow) postYearWebRow.hidden = !webModuleActive;
            if (postYearWebAmt) postYearWebAmt.textContent = fmtUsd(POST_YEAR_WEB_MONTHLY);
            if (postYearTotalAmt) postYearTotalAmt.textContent = fmtUsd(postYearTotalMes13);
        }

        if (alembicMes13Line) {
            if (cumulativeNeto <= 0) {
                alembicMes13Line.textContent = "activa módulos para ver referencia";
            } else if (webModuleActive) {
                alembicMes13Line.textContent = `~USD ${postYearTotalMes13} ref. (${POST_YEAR_QMS_MONTHLY} QMS + ${POST_YEAR_WEB_MONTHLY} web)`;
            } else {
                alembicMes13Line.textContent = `~USD ${POST_YEAR_QMS_MONTHLY} ref. (solo núcleo QMS; sin catálogo web en esta simulación)`;
            }
        }

        if (sidebarWebPill) {
            if (cumulativeNeto <= 0) {
                sidebarWebPill.textContent = "—";
                sidebarWebPill.classList.remove("sidebar-web-pill--off");
            } else {
                sidebarWebPill.textContent = webModuleActive ? "Web activa" : "Sin web";
                sidebarWebPill.classList.toggle("sidebar-web-pill--off", !webModuleActive);
            }
        }
        if (maintenanceMonthlyBox) {
            maintenanceMonthlyBox.classList.toggle("maintenance-monthly-box--no-web", cumulativeNeto > 0 && !webModuleActive);
        }

        liveDeliveryTime.textContent = deliveryTimelineText;

        const deferredPctEl = document.getElementById("deferred-factor-pct");
        if (deferredPctEl) deferredPctEl.textContent = String(deferredPercentLabel);

        const dash = "—";
        const fmtMoney = (n) =>
            n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (stickyMonthlyVal) {
            stickyMonthlyVal.textContent =
                cumulativeNeto > 0 ? fmtMoney(year1TotalMonthly) : dash;
        }
        if (stickyObraTotalEl) {
            stickyObraTotalEl.textContent =
                cumulativeNeto > 0 ? "$" + fmtMoney(cumulativeNeto) : dash;
        }
        if (stickyCuotaObraEl) {
            stickyCuotaObraEl.textContent =
                cumulativeNeto > 0 ? fmtMoney(calculatedMonthly) : dash;
        }
        if (stickyMantEl) {
            stickyMantEl.textContent =
                cumulativeNeto > 0 ? fmtMoney(monthlyMaintenance) : dash;
        }
        
        // Update attributes states triggers
        sendWaBtn.setAttribute("data-current-net", cumulativeNeto.toFixed(2));
        sendWaBtn.setAttribute("data-current-monthly", calculatedMonthly.toFixed(2));
        sendWaBtn.setAttribute("data-year1-maintenance-monthly", monthlyMaintenance.toFixed(2));
        sendWaBtn.setAttribute("data-year1-total-monthly", year1TotalMonthly.toFixed(2));
        sendWaBtn.setAttribute("data-year1-deferred-total", year1DeferredTotal.toFixed(2));
        sendWaBtn.setAttribute("data-deferred-factor", String(YEAR1_DEFERRED_FACTOR));
        sendWaBtn.setAttribute("data-current-timeline", deliveryTimelineText);
        sendWaBtn.setAttribute("data-web-module-active", webModuleActive ? "1" : "0");
        sendWaBtn.setAttribute("data-post-year-total-mes13", postYearTotalMes13.toFixed(2));
    }

    // ==========================================
    // 4. WHATSAPP DATA COMPOSE OUT-BOUND
    // ==========================================
    function processAndSendWhatsApp() {
        const phone = EMITENTE_COTIZACION.whatsappE164;
        const currentNet = parseFloat(sendWaBtn.getAttribute("data-current-net"));
        const currentMonthly = parseFloat(sendWaBtn.getAttribute("data-current-monthly"));
        const year1MaintenanceMonthly = parseFloat(sendWaBtn.getAttribute("data-year1-maintenance-monthly") || "0");
        const year1TotalMonthlyWa = parseFloat(sendWaBtn.getAttribute("data-year1-total-monthly") || "0");
        const year1DeferredTotal = parseFloat(sendWaBtn.getAttribute("data-year1-deferred-total") || "0");
        const deferredFactor = parseFloat(sendWaBtn.getAttribute("data-deferred-factor") || "1");
        const deferredPct = Math.round((deferredFactor - 1) * 100);
        const currentTimeline = sendWaBtn.getAttribute("data-current-timeline");
        const webModuleActiveWa = sendWaBtn.getAttribute("data-web-module-active") === "1";
        const postYearTotalMes13Wa = parseFloat(sendWaBtn.getAttribute("data-post-year-total-mes13") || "0");
        
        if (currentNet <= 0) {
            alert("Por favor active al menos un módulo operativo para generar la propuesta.");
            return;
        }

        let message = `🧪 *PROPUESTA DE INTEGRACIÓN MODULAR - MAFER*\n`;
        message += `=========================================\n\n`;
        message += `Hola Marco, te comparto el desglose de la arquitectura tecnológica de ITERA QMS & E-commerce, desarrollada a la medida de tu planta y flujos de negocio:\n\n`;

        let itemNumber = 1;
        modules.forEach(module => {
            const checkbox = module.querySelector(".module-toggle-checkbox");
            if (checkbox.checked) {
                const moduleName = module.querySelector(".item-title-block h3").textContent;
                const modulePrice = module.querySelector(".price-value").textContent;
                message += `${itemNumber}. *${moduleName}* → _${modulePrice}_\n`;
                itemNumber++;
            }
        });

        message += `\n_Partidas: valores netos de obra._\n`;

        message += `\n✨ *Filosofía de Desarrollo a Medida:*\n`;
        message += `• Al tratarse de un ecosistema de software a medida, todos los entregables e interfaces se adaptarán y refinarán con total elasticidad de acuerdo con tus requerimientos específicos de control sanitario (ARCSA), logística de planta y flujos comerciales.\n\n`;

        message += `🔭 *Extensiones posteriores (fuera de esta simulación):*\n`;
        message += `• *Otros módulos o integraciones* (terceros, fiscal, etc.) se cotizan *aparte*, siempre con *investigación previa* al caso.\n`;
        message += `• La arquitectura está pensada para *escalabilidad*; cada ampliación implica *mayor inversión en desarrollo y plazos* acordes al alcance.\n\n`;

        message += `⏱️ *Roadmap & Cronograma de Entrega:*\n`;
        message += `• *Plazo de Despliegue:* ${currentTimeline}\n`;
        message += `• *Hito Inicial:* El Núcleo de ITERA ERP (Next.js 16) se despliega a los 7 días del primer abono. Los componentes adicionales en desarrollo se inyectan dinámicamente en segundo plano sin interrumpir tu producción.\n\n`;

        const etiquetadoLoteModule = document.getElementById("module-etiquetado-lote");
        const etiquetadoLoteActive = etiquetadoLoteModule?.querySelector(".module-toggle-checkbox")?.checked;
        if (etiquetadoLoteActive) {
            message += `🏭 *Módulo Etiquetado por lote (USD 120,00 en esta simulación):*\n`;
            message += `• *USD 60,00* — integración del módulo al flujo de lotes / QMS.\n`;
            message += `• *USD 60,00* — adaptación técnica de las *6 matrices* del bloque de diseño (*USD 10 / etiqueta*, precio *promo* del pack primario).\n`;
            message += `• *Etiquetas adicionales* o alcance *fuera de este bloque* se cotizan *aparte* (tarifa distinta al promo).\n\n`;
        }

        message += `💳 *Año 1 — pagos mensuales (referencia):*\n`;
        message += `• *Cuota obra (12 pagos):* $${currentMonthly.toLocaleString("en-US", { minimumFractionDigits: 2 })} USD / mes — obra + *${deferredPct}%* diferimiento (serie *$${year1DeferredTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}* USD). *Contado obra:* *$${currentNet.toLocaleString("en-US", { minimumFractionDigits: 2 })}* USD.\n`;
        message += `• *Mantenimiento mínimo (año 1):* $${year1MaintenanceMonthly.toLocaleString("en-US", { minimumFractionDigits: 2 })} USD / mes — ${
            webModuleActiveWa
                ? "referencia *con* módulo *Ventas & catálogo web* activo (mayor carga operativa)."
                : "referencia *sin* web en esta simulación (solo núcleo; tarifa reducida)."
        }\n`;
        message += `• *Total mensual año 1:* ~*$${year1TotalMonthlyWa.toLocaleString("en-US", { minimumFractionDigits: 2 })}* USD / mes (obra en cuotas + mantenimiento).\n`;
        if (webModuleActiveWa) {
            message += `• *Mes 13+:* ~*$${postYearTotalMes13Wa.toLocaleString("en-US", { minimumFractionDigits: 2 })}* USD / mes ref. (*60* QMS + *50* web, contrato).\n\n`;
        } else {
            message += `• *Mes 13+:* ~*$${postYearTotalMes13Wa.toLocaleString("en-US", { minimumFractionDigits: 2 })}* USD / mes ref. (*solo* núcleo QMS; sin partida web mientras el módulo no esté en el proyecto).\n\n`;
        }
        
        message += `🛡️ *Gobernanza de Soporte & Telemetría:*\n`;
        message += `• ITERA incluye auditorías integradas y monitoreo de logs de acciones por ruta (PageActionLogsPanel). Dispones de telemetría automática en tiempo real; ante cualquier reporte o incidencia, intervengo el código para estabilizar la plataforma de inmediato.\n\n`;
        message += `✨ _Simulación oficial generada bajo el entorno de MP Designs (2026)_`;

        const finalUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(finalUrl, "_blank");
    }

    sendWaBtn.addEventListener("click", processAndSendWhatsApp);
    if (stickySendWaBtn) {
        stickySendWaBtn.addEventListener("click", processAndSendWhatsApp);
    }

    // ==========================================
    // 5. CANVAS ANIMATION LOOPS
    // ==========================================
    const canvas = document.getElementById("aroma-particles");
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    let animationFrameId = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileViewport = () => window.matchMedia("(max-width: 768px)").matches;

    function resizeCanvas() {
        const dpr = Math.min(window.devicePixelRatio || 1, isMobileViewport() ? 1.25 : 2);
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener("resize", () => {
        resizeCanvas();
        particlesArray = [];
        if (!prefersReducedMotion) {
            generateParticles();
        }
    });
    resizeCanvas();

    class BackgroundParticle {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * 5 + 2;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = -(Math.random() * 0.4 + 0.1);
            this.color = Math.random() > 0.5 ? "#D4AF37" : "#8A9A86";
            this.alpha = Math.random() * 0.12 + 0.04;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < -10) {
                this.y = window.innerHeight + 10;
                this.x = Math.random() * window.innerWidth;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
    }

    function generateParticles() {
        const mobile = isMobileViewport();
        const divisor = mobile ? 80 : 35;
        const cap = mobile ? 18 : 45;
        const density = Math.min(Math.floor(window.innerWidth / divisor), cap);
        for (let i = 0; i < density; i++) {
            particlesArray.push(new BackgroundParticle());
        }
    }

    function runAnimationLoop() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        particlesArray.forEach(p => { p.update(); p.draw(); });
        animationFrameId = requestAnimationFrame(runAnimationLoop);
    }

    if (prefersReducedMotion) {
        resizeCanvas();
        canvas.style.display = "none";
    } else {
        generateParticles();
        runAnimationLoop();
    }

    document.addEventListener("visibilitychange", () => {
        if (prefersReducedMotion) return;
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(runAnimationLoop);
        }
    });
});