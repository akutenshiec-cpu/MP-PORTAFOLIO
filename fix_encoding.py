import os

styles_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\styles.css"
script_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\script.js"

with open(styles_path, 'r', encoding='utf-8') as f:
    styles = f.read()

styles = styles.replace(
    '  #product-detail-modal .detail-info-col {\n    padding: 26px 20px 22px !important;\n  }',
    '  #product-detail-modal .detail-info-col {\n    padding: 26px 20px 120px !important;\n  }'
)

css_append = '''
/* Hidden on scroll styles for mobile action row and pager */
@media (max-width: 768px) {
  #product-detail-modal .detail-action-row {
    transition: transform 0.3s ease, opacity 0.3s ease, border-color 0.28s ease, box-shadow 0.28s ease !important;
  }
  #product-detail-modal .detail-action-row.hidden-on-scroll {
    transform: translateY(150%) !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
  #product-detail-modal .product-detail-pager.hidden-on-scroll {
    transform: translateY(150%) !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
}
'''
with open(styles_path, 'w', encoding='utf-8') as f:
    f.write(styles + '\n' + css_append)


with open(script_path, 'r', encoding='utf-8') as f:
    script = f.read()

if script.endswith('});\n') or script.endswith('});'):
    script = script[:script.rfind('});')]

js_append = '''
    // Hiding action row and pager on scroll down (swipe up)
    const detailGridMobile = document.querySelector("#product-detail-modal .detail-grid");
    if (detailGridMobile) {
        let lastGridScrollY = 0;
        let isScrollTicking = false;

        detailGridMobile.addEventListener("scroll", () => {
            if (isScrollTicking) return;
            isScrollTicking = true;
            window.requestAnimationFrame(() => {
                if (window.matchMedia("(max-width: 768px)").matches) {
                    const currentScroll = detailGridMobile.scrollTop;
                    const actionRow = document.querySelector("#product-detail-modal .detail-action-row");
                    const pager = document.querySelector("#product-detail-modal .product-detail-pager");
                    
                    if (currentScroll > lastGridScrollY && currentScroll > 50) {
                        if (actionRow) actionRow.classList.add("hidden-on-scroll");
                        if (pager) pager.classList.add("hidden-on-scroll");
                    } else {
                        if (actionRow) actionRow.classList.remove("hidden-on-scroll");
                        if (pager) pager.classList.remove("hidden-on-scroll");
                    }
                    lastGridScrollY = currentScroll;
                }
                isScrollTicking = false;
            });
        }, { passive: true });
    }
});
'''
with open(script_path, 'w', encoding='utf-8') as f:
    f.write(script + '\n' + js_append)

print("Done python fix")