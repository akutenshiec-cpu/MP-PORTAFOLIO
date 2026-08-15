import re

html_content = open('proyectos/curativa/index.html', encoding='utf-8').read()

new_footer = '''    <footer class="site-footer" id="footer-contact">
        <div class="footer-content">
            <div class="footer-col logo-col">
                <img src="image/logo_alúa_hero.svg" alt="alúa" class="footer-logo-img">
                <span class="footer-eyebrow">Cosmética botánica artesanal</span>
                <p>Cuidado consciente y natural para tu piel y cabello.</p>
            </div>
            <div class="footer-col">
                <h4>Contacto</h4>
                <p><i class="fab fa-whatsapp"></i> <a href="https://wa.me/593963036594" target="_blank" style="color: inherit; text-decoration: none;">+593 963 036 594</a></p>
                <p><i class="fas fa-envelope"></i> <a href="mailto:hola@alua.ec" style="color: inherit; text-decoration: none;">hola@alua.ec</a></p>
                <p><i class="fab fa-instagram"></i> <a href="https://www.instagram.com/alua_ec" target="_blank" style="color: inherit; text-decoration: none;">@alua_ec</a></p>
            </div>
            <div class="footer-col footer-explore">
                <h4>Explorar</h4>
                <nav class="footer-quick-links" aria-label="Categorías del catálogo">
                    <a href="#rostro-section">Rostro <i class="fas fa-arrow-right"></i></a>
                    <a href="#capilar-section">Capilar <i class="fas fa-arrow-right"></i></a>
                    <a href="#cuerpo-section">Bienestar <i class="fas fa-arrow-right"></i></a>
                    <a href="#balsamos-section">Bálsamos <i class="fas fa-arrow-right"></i></a>
                    <a href="#">Trabaja con nosotros <i class="fas fa-arrow-right"></i></a>
                </nav>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Alúa. Todos los derechos reservados.</p>
        </div>
    </footer>
    
    <section class="developer-credits-section">
      <footer class="curarte-studio-footer" aria-label="Créditos y contacto del proyecto">
        <a class="curarte-studio-brand" href="../../index.html" aria-label="Visitar MP Dev Studio">
          <span class="curarte-studio-monogram" aria-hidden="true">
            <svg viewBox="48 0 292 245">
              <path d="M212.86,8.68v232.63l-21.44-24.74V55.12l-13.09,22.67-6.19,10.72-6.19,10.73-6.19,10.72-6.19-10.72-6.2-10.73-6.19-10.72-12.69-25.02v88.85l-21.84-26.04V8.68c0-4.8,3.89-8.68,8.68-8.68h0c3.53,0,6.79,1.88,8.56,4.94l4.21,7.29,5.32,9.22,26.34,45.61,26.33-45.61,5.33-9.23,4.2-7.28c1.76-3.06,5.03-4.94,8.56-4.94h0c4.8,0,8.68,3.89,8.68,8.68Z"/>
              <path d="M222.41,241.31c.16-.16,21.43-24.74,21.43-24.74v-117.33h49.53c20.68,0,37.45-16.77,37.45-37.45v-24.34c0-20.68-16.77-37.45-37.45-37.45h-62.29c-4.8,0-8.68,3.88-8.68,8.67,0,43.15.02,232.64,0,232.64ZM292.01,77.79h-48.17V21.45h48.17c9.59,0,17.36,7.77,17.36,17.36v21.62c0,9.59-7.77,17.36-17.36,17.36Z"/>
            </svg>
          </span>
          <span><strong>Dev Studio</strong><small>Development · Design · Systems</small></span>
        </a>
        <p>Experiencia digital diseñada y desarrollada por MP Dev Studio.</p>
        <nav aria-label="Contacto de MP Dev Studio">
          <a href="https://wa.me/593963036594" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
          <a href="mailto:marcod.pc2021@gmail.com"><i class="fa-regular fa-envelope"></i> Email</a>
          <a href="https://www.instagram.com/neckarc" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> @neckarc</a>
        </nav>
        <small>&copy; 2026 MP Dev Studio · Loja, Ecuador.</small>
      </footer>
    </section>'''

pattern = re.compile(r'<footer class="site-footer" id="footer-contact">.*?</footer>', re.DOTALL)
html_content = pattern.sub(new_footer, html_content)

with open('proyectos/curativa/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
