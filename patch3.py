import sys
import re

with open('proyectos/curativa/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add header-close-btn listener after new-modal-overlay listener
target = re.compile(r"    document\.querySelectorAll\(\"\.new-modal-overlay\"\)\.forEach\(\(overlay\) => \{\s+overlay\.addEventListener\(\"click\", function \(event\) \{\s+if \(event\.target === this\) closeModal\(this\.id\);\s+\}\);\s+\}\);")

replacement = '''    document.querySelectorAll(".new-modal-overlay").forEach((overlay) => {
        overlay.addEventListener("click", function (event) {
            if (event.target === this) closeModal(this.id);
        });
    });

    const headerCloseBtn = document.getElementById("header-close-btn");
    if (headerCloseBtn) {
        headerCloseBtn.addEventListener("click", () => {
            closeModal("product-detail-modal");
        });
    }'''

content, count = target.subn(replacement, content)

# Update escape listener
target_esc = re.compile(r"    document\.addEventListener\(\"keydown\", \(event\) => \{\s+if \(event\.key !== \"Escape\"\) return;\s+closeFabMenu\(\);\s+closeMobileCategoryMenu\(\);\s+\}\);")

replacement_esc = '''    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            if (document.body.classList.contains("product-modal-open")) {
                closeModal("product-detail-modal");
            } else {
                closeFabMenu();
                closeMobileCategoryMenu();
            }
        }
    });'''

content, count_esc = target_esc.subn(replacement_esc, content)

with open('proyectos/curativa/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Patched header-close: {count}, escape: {count_esc}")
