/* =========================================
   NAVBAR SCROLL
   ========================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* =========================================
   REVEAL ON SCROLL (Intersection Observer)
   ========================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // staggered delay for project cards
      const card = entry.target.closest('.project-card');
      const delay = card ? parseInt(card.dataset.index || 0) * 120 : 0;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* =========================================
   SMOOTH ACTIVE NAV HIGHLIGHT
   ========================================= */
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinksAll.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--text)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* =========================================
   VIDEO MODAL
   ========================================= */
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-modal-iframe');

function closeVideoModal() {
  videoModal.classList.remove('active');
  videoIframe.src = '';
}

document.querySelectorAll('.link-btn-video').forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.dataset.videoId;
    videoIframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
    videoModal.classList.add('active');
  });
});

document.getElementById('video-modal-close').addEventListener('click', closeVideoModal);

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) closeVideoModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

/* =========================================
   HERO PARALLAX (subtle)
   ========================================= */
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight && heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
    heroContent.style.opacity = 1 - scrolled / (window.innerHeight * 0.8);
  }
}, { passive: true });
