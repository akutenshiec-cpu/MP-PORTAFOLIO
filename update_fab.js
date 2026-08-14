const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="fab-list">[\s\S]*?<\/div>/;
const newHtml = `<div class="fab-list">
    <a href="#hero" onclick="closeFab()"><span>Inicio</span><div class="mini-fab"><i class="fas fa-house"></i></div></a>
    <a href="#servicios" onclick="closeFab()"><span>Sistemas</span><div class="mini-fab"><i class="fas fa-cubes"></i></div></a>
    <a href="#webs" onclick="closeFab()"><span>Web</span><div class="mini-fab"><i class="fas fa-code"></i></div></a>
    <a href="#branding" onclick="closeFab()"><span>Marca</span><div class="mini-fab"><i class="fas fa-layer-group"></i></div></a>
    <a href="#promo" onclick="closeFab()"><span>Narrativa</span><div class="mini-fab"><i class="fas fa-bullhorn"></i></div></a>
    <a href="#ciencia" onclick="closeFab()"><span>Ciencia</span><div class="mini-fab"><i class="fas fa-microscope"></i></div></a>
    <a href="#planes" onclick="closeFab()"><span>Planes</span><div class="mini-fab"><i class="fas fa-tags"></i></div></a>
    <a href="#contacto" onclick="closeFab()"><span>Contacto</span><div class="mini-fab"><i class="fas fa-paper-plane"></i></div></a>
    <hr style="border-color: rgba(255,255,255,0.08); margin: 6px 0; border-width: 1px 0 0 0;">
    <a href="index2.html"><span>Más Servicios</span><div class="mini-fab"><i class="fas fa-briefcase"></i></div></a>
    <a href="galerial.html?id=curativa" target="_blank" rel="noopener noreferrer" onclick="closeFab()"><span>Galería HD</span><div class="mini-fab"><i class="fas fa-images"></i></div></a>
    <a href="https://www.instagram.com/neckarc" target="_blank" onclick="closeFab()"><span>Instagram</span><div class="mini-fab"><i class="fab fa-instagram"></i></div></a>
</div>`;

content = content.replace(regex, newHtml);
fs.writeFileSync('index.html', content, 'utf8');
