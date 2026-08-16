import os

index_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\index.html"

with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

# The incorrect structure
old_block = '''                            <button id="add-to-cart-detail-btn" class="btn btn-primary"><i class="fas fa-bag-shopping" aria-hidden="true"></i> Añadir a mi rutina</button>
                        </div>
                    </div>
                    </div>
                </div>

                    <div class="similar-products-section">
                        <h4>Similares de alúa</h4>
                        <div id="similar-products-grid" class="similar-grid"></div>
                    </div>
                            </div>
        </div>'''

# The correct structure
new_block = '''                            <button id="add-to-cart-detail-btn" class="btn btn-primary"><i class="fas fa-bag-shopping" aria-hidden="true"></i> Añadir a mi rutina</button>
                        </div>
                    </div>

                    <div class="similar-products-section">
                        <h4>Similares de alúa</h4>
                        <div id="similar-products-grid" class="similar-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>'''

if old_block in html:
    html = html.replace(old_block, new_block)
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Fixed HTML structure")
else:
    print("Could not find exact block, let's try a more robust approach.")
    # More robust approach
    import re
    
    # We want to move similar-products-section inside detail-content-wrapper
    # Let's find the similar-products-section
    pattern = re.compile(r'(</div>\s*</div>\s*</div>\s*)<div class="similar-products-section">(.*?)</div>\s*</div>\s*</div>', re.DOTALL)
    
    def replacer(match):
        return '</div>\s*<div class="similar-products-section">' + match.group(2) + '</div>\s*</div>\s*</div>\s*</div>\s*</div>'
        
    # Actually, let's just do a manual string manipulation
    pass
