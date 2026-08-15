# -*- coding: utf-8 -*-
import re

css_content = open('proyectos/curativa/styles.css', encoding='utf-8').read()

new_css = '''
#ojos-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_ojos_1786783270728.jpg') right center / cover no-repeat !important;
}
#desodorantes-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_desodorantes_1786783278204.jpg') right center / cover no-repeat !important;
}
'''

with open('proyectos/curativa/styles.css', 'a', encoding='utf-8') as f:
    f.write(new_css)