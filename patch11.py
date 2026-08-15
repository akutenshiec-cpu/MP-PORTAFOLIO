# -*- coding: utf-8 -*-
import re

css_content = open('proyectos/curativa/styles.css', encoding='utf-8').read()

new_css = '''
/* ========================================= */
/* IMÁGENES DE CABECERA MARFIL POR SECCIÓN */
/* ========================================= */
#rostro-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_rostro_1786782706316.jpg') right center / cover no-repeat !important;
}
#capilar-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_capilar_1786782715560.jpg') right center / cover no-repeat !important;
}
#cuerpo-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_cuerpo_1786782725953.jpg') right center / cover no-repeat !important;
}
#balsamos-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_balsamos_1786782746500.jpg') right center / cover no-repeat !important;
}
#roll-on-section::after {
  background:
    radial-gradient(circle at 8% 0%, rgba(255,255,255,.92), transparent 34%),
    linear-gradient(to right, #faf6ef 15%, rgba(233, 223, 211, 0.1) 85%),
    url('image/bg_rollon_1786782753782.jpg') right center / cover no-repeat !important;
}
'''

with open('proyectos/curativa/styles.css', 'a', encoding='utf-8') as f:
    f.write(new_css)