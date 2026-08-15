# -*- coding: utf-8 -*-
import re

css_content = open('proyectos/curativa/styles.css', encoding='utf-8').read()

new_css = '''
/* ========================================= */
/* OVERRIDE CAROUSEL TO GRID ON DESKTOP */
/* ========================================= */
@media (min-width: 769px) {
  .section:not(.hero-carousel) .carousel-wrapper {
    display: block !important;
    margin-top: 2rem !important;
  }
  
  .section:not(.hero-carousel) .carousel-btn {
    display: none !important;
  }
  
  .section:not(.hero-carousel) .carousel-track {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
    grid-auto-flow: row !important;
    gap: 24px !important;
    overflow-x: visible !important;
    width: 92% !important;
    max-width: 1400px !important;
    margin: 0 auto !important;
    padding: 0 0 2rem 0 !important;
    scrollbar-width: auto !important;
  }
  
  .section:not(.hero-carousel) .carousel-card {
    width: 100% !important;
    margin: 0 !important;
  }
}
'''

with open('proyectos/curativa/styles.css', 'a', encoding='utf-8') as f:
    f.write(new_css)