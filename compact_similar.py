import os

styles_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\styles.css"

with open(styles_path, 'r', encoding='utf-8') as f:
    styles = f.read()

styles = styles.replace(
    'padding: 24px 20px 150px !important; /* Clear fixed action row */',
    'padding: 24px 16px 90px !important; /* Clear fixed action row */'
)

styles = styles.replace(
    'padding: 26px 20px 160px !important;',
    'padding: 24px 16px 90px !important;'
)

# Let's also check if the font sizes or margins can be compacted
styles = styles.replace(
    'margin: 0 0 18px;',
    'margin: 0 0 12px;'
)

with open(styles_path, 'w', encoding='utf-8') as f:
    f.write(styles)

print("Compacted similar products on mobile")