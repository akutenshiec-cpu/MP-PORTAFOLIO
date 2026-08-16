import os

index_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\index.html"

with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

old_block = '''                            <button id="add-to-cart-detail-btn" class="btn btn-primary"><i class="fas fa-bag-shopping" aria-hidden="true"></i> Añadir a mi rutina</button>
                        </div>
                    </div>
                </div>

                <div class="similar-products-section">
                    <h4>Similares de alúa</h4>
                    <div id="similar-products-grid" class="similar-grid"></div>
                </div>
            </div>
        </div>
    </div>'''

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
    print("Moved similar products inside detail-content-wrapper")
else:
    print("Block not found!")