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
   HAMBURGER MENU
   ========================================= */
const hamburger = document.getElementById('nav-hamburger');
const mobileNav = document.getElementById('mobile-nav');

function openMobileNav() {
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', '메뉴 닫기');
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
}

function closeMobileNav() {
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', '메뉴 열기');
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMobileNav() : openMobileNav();
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileNav();
    hamburger.focus();
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
    closeMobileNav();
  }
});

/* =========================================
   PROJECT MODAL
   ========================================= */
const projectModal = document.getElementById('project-modal');
const pmIframe = document.getElementById('pm-iframe');
const pmClose = document.getElementById('pm-close');
const pmTags = document.getElementById('pm-tags');
const pmTitle = document.getElementById('pm-title');
const pmSub = document.getElementById('pm-sub');
const pmDesc = document.getElementById('pm-desc');
const pmHighlights = document.getElementById('pm-highlights');
const pmLinks = document.getElementById('pm-links');
let pmTrigger = null;

function openProjectModal(card, trigger) {
  pmTrigger = trigger || card;
  const videoId = card.dataset.videoId;
  pmIframe.src = videoId ? `https://drive.google.com/file/d/${videoId}/preview` : '';
  pmTags.innerHTML = card.querySelector('.card-tags')?.innerHTML || '';
  pmTitle.textContent = card.querySelector('h3')?.textContent || '';
  pmSub.textContent = card.querySelector('.card-sub')?.textContent || '';
  pmDesc.innerHTML = card.querySelector('.card-desc')?.innerHTML || '';
  pmHighlights.innerHTML = card.querySelector('.card-highlights')?.innerHTML || '';
  pmLinks.innerHTML = card.querySelector('.card-links')?.innerHTML || '';
  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  pmClose.focus();
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
  pmIframe.src = '';
  document.body.style.overflow = '';
  if (pmTrigger) { pmTrigger.focus(); pmTrigger = null; }
}

pmClose.addEventListener('click', closeProjectModal);

projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) closeProjectModal();
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    e.stopPropagation();
    openProjectModal(card, e.target.closest('.card-play-btn') || card);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal.classList.contains('active')) closeProjectModal();
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
