import os

styles_path = r"c:\Users\Usuario iTC\Documents\Desarrollo Sistemas\MP-PORTAFOLIO\proyectos\curativa\styles.css"

with open(styles_path, 'r', encoding='utf-8') as f:
    styles = f.read()

styles = styles.replace(
    '  #product-detail-modal .detail-info-col {\n    padding: 26px 20px 120px !important;\n  }',
    '  #product-detail-modal .detail-info-col {\n    padding: 26px 20px 22px !important;\n  }'
)

with open(styles_path, 'w', encoding='utf-8') as f:
    f.write(styles)

print("Reverted padding")