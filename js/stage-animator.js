// ============================================
// Kaizrug OS – Stage Animator
// Automatic scene rotation for Stories-like UX
// ============================================

(function() {
  const scenes = [...document.querySelectorAll('.scene')];
  const prog = document.getElementById('prog');

  if (!scenes.length || !prog) return;

  // Scene durations (milliseconds)
  const durations = [3000, 2200, 3500, 2000, 2300];

  let currentScene = 0;
  let animationId = null;
  let paused = false;

  function show(n) {
    scenes.forEach(s => s.classList.remove('active'));
    if (scenes[n]) {
      scenes[n].classList.add('active');
    }
  }

  function animate() {
    if (paused) return;

    show(currentScene);
    const dur = durations[currentScene] || 2500;
    const startTime = performance.now();

    function updateProgress(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min((elapsed / dur), 1);
      prog.style.width = (progress * 100) + '%';

      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        currentScene = (currentScene + 1) % scenes.length;
        animate();
      }
    }

    requestAnimationFrame(updateProgress);
  }

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      paused = !paused;
      if (!paused) animate();
    }
    if (e.key === 'ArrowRight') {
      currentScene = (currentScene + 1) % scenes.length;
      paused = true;
      show(currentScene);
    }
    if (e.key === 'ArrowLeft') {
      currentScene = (currentScene - 1 + scenes.length) % scenes.length;
      paused = true;
      show(currentScene);
    }
  });

  // Click to pause/play
  document.querySelector('.stage').addEventListener('click', () => {
    paused = !paused;
    if (!paused) animate();
  });

  // Particles with canvas
  const canvas = document.getElementById('bg');
  if (canvas) {
    const c = canvas;
    const x = c.getContext('2d');
    let w, h, dpr;

    function resize() {
      const r = c.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.width = r.width * dpr;
      h = c.height = r.height * dpr;
    }

    resize();

    const P = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.4,
      s: Math.random() * 0.0004 + 0.00008,
      a: Math.random() * 0.4 + 0.2
    }));

    function tick() {
      x.clearRect(0, 0, w, h);
      for (const p of P) {
        p.y -= p.s;
        if (p.y < 0) {
          p.y = 1;
          p.x = Math.random();
        }
        x.beginPath();
        x.arc(p.x * w, p.y * h, p.r * dpr, 0, 6.283);
        x.fillStyle = `rgba(212,175,55,${p.a})`;
        x.fill();
      }
      requestAnimationFrame(tick);
    }

    tick();
    window.addEventListener('resize', resize);
  }

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    paused = true;
    show(0);
  } else {
    animate();
  }
})();
