# -*- coding: utf-8 -*-
import re

with open('proyectos/curativa/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_header = '''    <header class="portfolio-nav alua-portfolio-nav">
        <div class="portfolio-nav__inner">
            <a class="portfolio-nav__brand" href="#hero">
                <img src="image/logo_curativa_hero.svg" alt="alúa">
                <span class="portfolio-nav__brand-copy">
                    <strong>ALÚA</strong>
                    <span>Cosmética Natural</span>
                </span>
            </a>
            
            <nav class="portfolio-nav__links">
                <form class="header-search" id="catalog-search" role="search">
                    <label class="sr-only" for="catalog-search-input">Buscar productos</label>
                    <input id="catalog-search-input" type="search" placeholder="Buscar productos" autocomplete="off" aria-controls="catalog-search-results" aria-expanded="false">
                    <button type="submit" class="header-search-btn" aria-label="Buscar productos"><i class="fas fa-magnifying-glass"></i></button>
                    <div class="catalog-search-results hidden" id="catalog-search-results" role="listbox"></div>
                </form>
                
                <div id="header-cart-btn" class="portfolio-nav__cta">
                    <i class="fas fa-shopping-cart"></i>
                    <span id="cart-count" class="cart-badge">0</span>
                </div>
            </nav>
        </div>
    </header>'''

# Replace the entire <header class="glassy-header">...</header>
html = re.sub(r'<header class="glassy-header">.*?</header>', new_header, html, flags=re.DOTALL)

with open('proyectos/curativa/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("HTML patched.")