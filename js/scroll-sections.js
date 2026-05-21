// ============================================
// Kaizrug OS – Scroll-based Section Animator
// For multi-section scroll experiences with
// parallax particles and intersection observers
// ============================================

(function() {
  const sections = document.querySelectorAll('section');
  const scroller = document.getElementById('scroller');

  if (!sections.length || !scroller) return;

  // IntersectionObserver for section activation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));

  // Activate first section on load
  if(sections[0]) {
    sections[0].classList.add('active');
  }

  // Gold particles animation (if canvas present)
  const canvas = document.getElementById('gold-particles');
  if(!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 80;

  function resize() {
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  
  function init() {
    particles = [];
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    for(let i=0; i<particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.3,
        o: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15 - 0.05,
        twinkle: Math.random() * Math.PI * 2
      });
    }
  }

  function animate() {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    ctx.clearRect(0, 0, w, h);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.twinkle += 0.02;
      
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
      
      const opacity = p.o * (0.7 + Math.sin(p.twinkle) * 0.3);
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
      ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
      ctx.shadowBlur = p.r > 1 ? 8 : 4;
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // subtle glow
      if(p.r > 1.2) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity * 0.08})`;
        ctx.fill();
      }
    });
    
    requestAnimationFrame(animate);
  }

  resize();
  init();
  animate();
  window.addEventListener('resize', () => { resize(); init(); });

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced) {
    document.querySelectorAll('[class*="animate"]').forEach(el => {
      el.style.animation = 'none';
    });
  }
})();
