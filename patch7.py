# -*- coding: utf-8 -*-
import re

css_content = open('proyectos/curativa/styles.css', encoding='utf-8').read()

new_css = '''/* ========================================= */
/* 10. DEVELOPER CREDITS FOOTER */
/* ========================================= */

.developer-credits-section {
  padding: 3rem 1.5rem 1rem;
  max-width: var(--container);
  margin: 0 auto;
}

.curarte-studio-footer { 
  width: min(100%, 860px); 
  margin: 0 auto; 
  padding: 1.8rem; 
  display: grid; 
  justify-items: center; 
  gap: 1rem; 
  border: 1px solid rgba(255, 255, 255, 0.09); 
  border-radius: var(--radius-lg); 
  background: rgba(16, 11, 25, 0.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.035);
  color: var(--color-text); 
}
.curarte-studio-brand { display: flex; align-items: center; gap: 0.8rem; color: inherit; text-decoration: none; }
.curarte-studio-monogram { width: 46px; height: 42px; display: grid; place-items: center; color: var(--color-primary); }
.curarte-studio-monogram svg { width: 100%; height: 100%; display: block; fill: currentColor; }
.curarte-studio-brand span { display: grid; gap: 0.15rem; text-align: left; }
.curarte-studio-brand strong { font: 600 0.85rem/1.1 var(--font-body); letter-spacing: 0.08em; text-transform: uppercase; }
.curarte-studio-brand small { color: var(--color-primary); font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; }
.curarte-studio-footer p { margin: 0; color: var(--color-text-soft); font-size: 0.8rem; text-align: center; }
.curarte-studio-footer nav { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.65rem; width: 100%; }
.curarte-studio-footer nav a { 
  min-height: 38px; 
  padding: 0.55rem 0.85rem; 
  display: inline-flex; 
  align-items: center; 
  gap: 0.4rem; 
  border: 1px solid rgba(255, 255, 255, 0.09); 
  border-radius: var(--radius-sm); 
  color: var(--color-text-soft); 
  background: rgba(255, 255, 255, 0.03); 
  font-size: 0.72rem; 
  text-decoration: none; 
  transition: all 0.3s ease;
}
.curarte-studio-footer nav a:hover { 
  border-color: rgba(251, 170, 38, 0.55); 
  background: rgba(251, 170, 38, 0.08); 
  color: var(--color-primary);
}
.curarte-studio-footer > small { color: var(--color-text-soft); font-size: 0.65rem; letter-spacing: 0.08em; opacity: 0.7; }

@media (max-width: 560px) { 
  .developer-credits-section { padding: 2.5rem 1rem 0; }
  .curarte-studio-footer { padding: 1.5rem 1.2rem; border-radius: var(--radius-md); width: 100%; } 
  .curarte-studio-footer nav { display: grid; grid-template-columns: 1fr; } 
  .curarte-studio-footer nav a { justify-content: center; } 
}'''

pattern = re.compile(r'/\* ========================================= \*/\n/\* 10\. DEVELOPER CREDITS FOOTER \*/\n/\* ========================================= \*/.*?(?=$)', re.DOTALL)
if pattern.search(css_content):
    css_content = pattern.sub(new_css, css_content)
else:
    css_content += '\n\n' + new_css

with open('proyectos/curativa/styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content)