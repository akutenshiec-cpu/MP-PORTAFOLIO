import re

def update_html():
    path = 'c:/Users/Usuario iTC/Documents/Desarrollo Sistemas/MP-PORTAFOLIO/proyectos/curativa/index.html'
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()

    overlay = '<div id="category-color-overlay"></div>\n'
    if '<div id="category-color-overlay">' not in html:
        html = html.replace('<body>', f'<body>\n    {overlay}')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(html)

def update_css():
    path = 'c:/Users/Usuario iTC/Documents/Desarrollo Sistemas/MP-PORTAFOLIO/proyectos/curativa/styles.css'
    with open(path, 'r', encoding='utf-8') as f:
        css = f.read()

    overlay_css = '''
#category-color-overlay {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: transparent;
  transition: background-color 1.2s ease;
  mix-blend-mode: color;
  opacity: 0.15;
}
'''
    if '#category-color-overlay {' not in css:
        css += overlay_css
        with open(path, 'w', encoding='utf-8') as f:
            f.write(css)

def update_js():
    path = 'c:/Users/Usuario iTC/Documents/Desarrollo Sistemas/MP-PORTAFOLIO/proyectos/curativa/script.js'
    with open(path, 'r', encoding='utf-8') as f:
        js = f.read()

    observer_code = '''
    // Category Color Tint Observer
    const categoryColors = {
        'inicio': 'transparent', // Hero
        'rostro-section': '#D4AF37', // Dorado
        'capilar-section': '#50C878', // Verde
        'desodorantes-section': '#7DF9FF', // Cyan
        'corporal-section': '#FFB347', // Naranja
        'basicos-section': '#D4B485', // Beige
        'bienestar-section': '#A890D3', // Morado
        'maquillaje-section': '#FF69B4', // Rosa
        'higiene-section': '#A0E8E6', // Menta
        'hogar-section': '#7057A5', // Índigo
        'kits-section': '#F2C478' // Dorado claro
    };

    const overlay = document.getElementById('category-color-overlay');
    if (overlay) {
        const sectionObserver = new IntersectionObserver((entries) => {
            let maxRatio = 0;
            let currentSection = null;
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        currentSection = entry.target.id;
                    }
                }
            });

            if (currentSection && categoryColors[currentSection]) {
                overlay.style.backgroundColor = categoryColors[currentSection];
            } else if (currentSection && currentSection === 'inicio') {
                overlay.style.backgroundColor = 'transparent';
            }
        }, {
            root: null,
            threshold: [0.1, 0.3, 0.5, 0.7]
        });

        document.querySelectorAll('.section').forEach(section => {
            sectionObserver.observe(section);
        });
    }
'''

    if 'Category Color Tint Observer' not in js:
        js = js.replace('document.addEventListener("DOMContentLoaded", () => {', 'document.addEventListener("DOMContentLoaded", () => {' + observer_code)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(js)

update_html()
update_css()
update_js()
