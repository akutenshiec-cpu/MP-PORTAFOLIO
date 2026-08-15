import sys
with open('proyectos/curativa/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Match the old broken target that got partially replaced
target = re.compile(r"    function focusCatalogProduct\(card\) \{\s+if \(!card\) return;\s+closeCatalogSearchResults\(\);\s+catalogSearch\?\.classList\.remove\(\"expanded\"\);\s+setTimeout\(\(\) => section\?\.classList\.remove\(\"search-section-active\"\), 1800\);\s+\}")

replacement = '''    function focusCatalogProduct(card) {
        if (!card) return;
        closeCatalogSearchResults();
        if (catalogSearch) catalogSearch.classList.remove("expanded");
        card.click();
    }'''

new_content, count = target.subn(replacement, content)

if count > 0:
    with open('proyectos/curativa/script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully replaced.")
else:
    print("Could not find the target text.")
