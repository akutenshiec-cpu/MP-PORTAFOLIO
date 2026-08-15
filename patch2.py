import sys
import re

with open('proyectos/curativa/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix focusCatalogProduct
target_focus = re.compile(r"    function focusCatalogProduct\(card\) \{\s+if \(!card\) return;\s+const section = card\.closest\(\"\.section\"\);\s+closeCatalogSearchResults\(\);\s+catalogSearch\?\.classList\.remove\(\"expanded\"\);\s+card\.scrollIntoView\(\{ behavior: \"smooth\", block: \"center\", inline: \"center\" \}\);\s+card\.classList\.remove\(\"search-highlight\"\);\s+requestAnimationFrame\(\(\) => card\.classList\.add\(\"search-highlight\"\)\);\s+setTimeout\(\(\) => card\.classList\.remove\(\"search-highlight\"\), 1800\);\s+if \(section\) section\.classList\.add\(\"search-section-active\"\);\s+setTimeout\(\(\) => section\?\.classList\.remove\(\"search-section-active\"\), 1800\);\s+\}")

replacement_focus = '''    function focusCatalogProduct(card) {
        if (!card) return;
        closeCatalogSearchResults();
        if (catalogSearch) catalogSearch.classList.remove("expanded");
        card.click();
    }'''

content, _ = target_focus.subn(replacement_focus, content)

# Fix openModal
target_open = re.compile(r"    function openModal\(modalId\) \{\s+const modal = document\.getElementById\(modalId\);\s+if \(!modal\) return;\s+modal\.classList\.remove\(\"hidden\"\);\s+document\.body\.classList\.add\(\"no-scroll\"\);\s+if \(modalId === \"cart-modal\"\) \{\s+document\.body\.classList\.add\(\"cart-drawer-open\"\);\s+if \(window\.matchMedia\(\"\(max-width: 600px\)\"\)\.matches\) setMobileCheckoutStep\(1\);\s+\}\s+\}")

replacement_open = '''    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
        if (modalId === "cart-modal") {
            document.body.classList.add("cart-drawer-open");
            if (window.matchMedia("(max-width: 600px)").matches) setMobileCheckoutStep(1);
        }
        if (modalId === "product-detail-modal") {
            document.body.classList.add("product-modal-open");
        }
    }'''

content, count1 = target_open.subn(replacement_open, content)

# Fix closeModal
target_close = re.compile(r"    function closeModal\(modalId\) \{\s+const modal = document\.getElementById\(modalId\);\s+if \(!modal\) return;\s+modal\.classList\.add\(\"hidden\"\);\s+if \(modalId === \"cart-modal\"\) document\.body\.classList\.remove\(\"cart-drawer-open\"\);\s+document\.body\.classList\.remove\(\"no-scroll\"\);\s+\}")

replacement_close = '''    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        modal.classList.add("hidden");
        if (modalId === "cart-modal") document.body.classList.remove("cart-drawer-open");
        if (modalId === "product-detail-modal") document.body.classList.remove("product-modal-open");
        document.body.classList.remove("no-scroll");
    }'''

content, count2 = target_close.subn(replacement_close, content)

with open('proyectos/curativa/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Patched open: {count1}, close: {count2}")
