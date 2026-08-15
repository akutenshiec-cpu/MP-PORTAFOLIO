# -*- coding: utf-8 -*-
import re

css_content = open('proyectos/curativa/styles.css', encoding='utf-8').read()

new_css = '''/* ========================================= */
/* 10. DEVELOPER CREDITS FOOTER */
/* ========================================= */

.footer-dev-credit {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.curarte-studio-brand { display: flex; align-items: center; gap: 0.8rem; color: inherit; text-decoration: none; }
.curarte-studio-monogram { width: 38px; height: 34px; display: grid; place-items: center; color: var(--color-primary); }
.curarte-studio-monogram svg { width: 100%; height: 100%; display: block; fill: currentColor; }
.curarte-studio-brand span { display: grid; gap: 0.15rem; text-align: left; }
.curarte-studio-brand strong { font: 600 0.8rem/1.1 var(--font-body); letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text); }
.curarte-studio-brand small { color: var(--color-primary); font-size: 0.55rem; letter-spacing: 0.1em; text-transform: uppercase; }

.dev-credit-text { margin: 0 !important; color: var(--color-text-soft) !important; font-size: 0.75rem !important; text-align: left !important; justify-content: flex-start !important; }
'''

pattern = re.compile(r'/\* ========================================= \*/\n/\* 10\. DEVELOPER CREDITS FOOTER \*/\n/\* ========================================= \*/.*?(?=$)', re.DOTALL)
if pattern.search(css_content):
    css_content = pattern.sub(new_css, css_content)
else:
    css_content += '\n\n' + new_css

with open('proyectos/curativa/styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)