# -*- coding: utf-8 -*-
import re

css_content = open('proyectos/curativa/styles.css', encoding='utf-8').read()

new_css = '''
/* ========================================= */
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
}
'''

with open('proyectos/curativa/styles.css', 'a', encoding='utf-8') as f:
    f.write(new_css)