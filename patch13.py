# -*- coding: utf-8 -*-
import re

html_content = open('proyectos/curativa/index.html', encoding='utf-8').read()

# Find the similar-products-section block
pattern = re.compile(r'(\s*<div class="similar-products-section">.*?</div>\s*)(</div>\s*</div>\s*</div>\s*</div>\s*<div id="cart-modal")', re.DOTALL)

def replace_fn(match):
    similar_section = match.group(1)
    # the second group is:
    # </div> (closes detail-content-wrapper)
    # </div> (closes detail-grid)
    # </div> (closes new-modal-container)
    # </div> (closes new-modal-overlay)
    # <div id="cart-modal"
    
    # We want to move similar_section to just AFTER detail-grid closes, which is the second </div>
    return '\n                    </div>\n                </div>\n' + similar_section + '            </div>\n        </div>\n\n    <div id="cart-modal"'

html_content = pattern.sub(replace_fn, html_content)

with open('proyectos/curativa/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)