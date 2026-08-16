import os

styles_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\styles.css"

with open(styles_path, 'r', encoding='utf-8') as f:
    styles = f.read()

old_block = '''/* ========================================= */
/* FIX SIMILAR PRODUCTS MODAL FULL WIDTH DESKTOP */
/* ========================================= */
@media (min-width: 769px) {
  #product-detail-modal .detail-grid {
    height: auto !important;
    min-height: auto !important;
  }
  
  #product-detail-modal .detail-content-wrapper {
    grid-template-columns: 1fr !important;
    padding-right: 0 !important;
    min-height: auto !important;
  }
  
  #product-detail-modal .similar-products-section {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    border-left: none !important;
    padding: 3.5rem 2.5rem !important;
    max-height: none !important;
    display: block !important;
  }
  
  #product-detail-modal .similar-products-section h4 {
    text-align: center !important;
    margin-bottom: 2.5rem !important;
  }
  
  #product-detail-modal .similar-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    gap: 1.5rem !important;
    max-width: 1200px !important;
    margin: 0 auto !important;
  }
}'''

new_block = '''/* ========================================= */
/* FIX SIMILAR PRODUCTS MODAL DESKTOP HEIGHT */
/* ========================================= */
@media (min-width: 769px) {
  #product-detail-modal .detail-grid {
    height: auto !important;
    min-height: auto !important;
  }
  
  #product-detail-modal .similar-products-section {
    border-left: 1px solid rgba(239, 184, 77, 0.14) !important;
    padding: 5rem 1.5rem 2rem !important;
  }
  
  #product-detail-modal .similar-products-section h4 {
    text-align: left !important;
    margin-bottom: 1.5rem !important;
  }
  
  #product-detail-modal .similar-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }
}'''

if old_block in styles:
    styles = styles.replace(old_block, new_block)
    with open(styles_path, 'w', encoding='utf-8') as f:
        f.write(styles)
    print("Reverted full-width desktop similar products")
else:
    print("Block not found!")