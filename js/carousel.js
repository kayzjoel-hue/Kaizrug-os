// ============================================
// Kaizrug OS – Carousel Controller
// Accessible pause/play toggle with keyboard support
// ============================================

(function() {
  const carousel = document.getElementById('carousel');
  const toggle = document.getElementById('carouselToggle');

  if (!carousel || !toggle) return;

  // Initialize toggle state
  toggle.addEventListener('click', function() {
    const isPaused = carousel.classList.contains('pause');
    carousel.classList.toggle('pause');
    
    const newState = carousel.classList.contains('pause');
    toggle.setAttribute('aria-pressed', newState);
    toggle.textContent = newState ? 'Play carousel' : 'Pause carousel';
  });

  // Keyboard support (Space bar)
  toggle.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });

  // Mouse/touch fallback: click carousel to toggle
  carousel.addEventListener('click', function(e) {
    // Only toggle if clicking on the carousel container itself, not child elements
    if (e.target === carousel || e.target.closest('.carousel-track')) {
      toggle.click();
    }
  });

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    carousel.classList.add('pause');
    toggle.setAttribute('aria-pressed', true);
    toggle.textContent = 'Play carousel';
  }
})();
