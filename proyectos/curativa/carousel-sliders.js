(() => {
  const initializeCarouselSliders = () => {
    document.querySelectorAll('.carousel-wrapper').forEach((wrapper, index) => {
      const track = wrapper.querySelector('.carousel-track');
      if (!track || wrapper.querySelector(':scope > .carousel-position-control')) return;

      const title = wrapper.closest('.section')?.querySelector('h2, h3')?.textContent.trim() || `sección ${index + 1}`;
      const control = document.createElement('label');
      control.className = 'carousel-position-control';
      control.innerHTML = `<span>Recorrer ${title}</span><input type="range" min="0" max="1000" value="0" step="1" aria-label="Posición del carrusel de ${title}"><output>0%</output>`;
      wrapper.append(control);

      const range = control.querySelector('input');
      const output = control.querySelector('output');
      const updateControl = () => {
        const max = Math.max(0, track.scrollWidth - track.clientWidth);
        const ratio = max ? Math.max(0, Math.min(1, track.scrollLeft / max)) : 0;
        const value = Math.round(ratio * 1000);
        range.value = String(value);
        range.style.setProperty('--carousel-position', `${ratio * 100}%`);
        output.value = `${Math.round(ratio * 100)}%`;
        range.disabled = max === 0;
      };
      range.addEventListener('input', () => {
        const max = Math.max(0, track.scrollWidth - track.clientWidth);
        track.scrollLeft = max * (Number(range.value) / 1000);
        updateControl();
      });
      track.addEventListener('scroll', updateControl, { passive: true });
      new ResizeObserver(updateControl).observe(track);
      requestAnimationFrame(updateControl);
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeCarouselSliders);
  else initializeCarouselSliders();
})();
