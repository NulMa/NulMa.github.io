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
   PROJECT GIF PREVIEWS
   ========================================= */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  document.querySelectorAll('.project-card[data-gif-src]').forEach(card => {
    if (card.closest('.project-card-source')) return;

    const gifSrc = card.dataset.gifSrc;
    const gifPreview = card.querySelector('.header-gif-preview');
    if (!gifSrc || !gifPreview) return;

    const preload = new Image();
    preload.onload = () => {
      gifPreview.src = gifSrc;
      card.classList.add('gif-ready');
    };
    preload.src = gifSrc;
  });
}

const showcaseGifImages = document.querySelectorAll('.gif-tile img[data-src]');

function loadShowcaseGif(img) {
  if (!img.dataset.src || img.src) return;
  img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
  img.src = img.dataset.src;
}

if (showcaseGifImages.length) {
  if ('IntersectionObserver' in window) {
    const showcaseGifObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadShowcaseGif(entry.target);
        showcaseGifObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: '600px 0px',
      threshold: 0.01
    });

    showcaseGifImages.forEach(img => showcaseGifObserver.observe(img));
  } else {
    showcaseGifImages.forEach(loadShowcaseGif);
  }
}

function isGithubLink(link) {
  const href = link.getAttribute('href') || '';
  const label = link.textContent || '';
  return href.toLowerCase().includes('github.com') || label.toLowerCase().includes('github');
}

function getYoutubeNocookieEmbedUrl(url) {
  if (!url) return '';

  try {
    const parsed = new URL(url);
    let videoId = '';

    if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.replace('/', '');
    } else if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v') || '';
      if (!videoId && parsed.pathname.startsWith('/shorts/')) {
        videoId = parsed.pathname.split('/')[2] || '';
      }
      if (!videoId && parsed.pathname.startsWith('/embed/')) {
        videoId = parsed.pathname.split('/')[2] || '';
      }
    }

    if (!videoId) return '';

    const embed = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
    embed.searchParams.set('playsinline', '1');
    embed.searchParams.set('rel', '0');
    const origin = window.location.origin;
    if (origin && origin !== 'null') embed.searchParams.set('origin', origin);
    if (origin && origin !== 'null') embed.searchParams.set('widget_referrer', window.location.href.split('#')[0]);
    return embed.toString();
  } catch {
    return '';
  }
}

function syncShowcaseCopyFromCards() {
  const cards = Array.from(document.querySelectorAll('.project-card'));

  document.querySelectorAll('.showcase-project[data-card-title]').forEach(project => {
    const cardTitle = project.dataset.cardTitle;
    const card = cards.find(item => item.querySelector('.card-body h3')?.textContent.trim() === cardTitle);
    const copy = project.querySelector('.showcase-copy');
    if (!card || !copy) return;

    const existingKicker = copy.querySelector('.showcase-kicker')?.textContent.trim();
    const tags = card.querySelector('.card-tags')?.cloneNode(true);
    const title = card.querySelector('.card-body h3')?.textContent.trim() || cardTitle;
    const sub = card.querySelector('.card-sub')?.cloneNode(true);
    const desc = card.querySelector('.card-desc')?.cloneNode(true);
    const highlights = card.querySelector('.card-highlights')?.cloneNode(true);
    const sourceLinks = Array.from(card.querySelectorAll('.card-links a'));
    const usableLinks = sourceLinks.filter(link => !isGithubLink(link));
    const videoUrl = project.dataset.videoUrl || '';

    copy.innerHTML = '';

    const summary = document.createElement('div');
    summary.className = 'showcase-summary';
    const details = document.createElement('div');
    details.className = 'showcase-details';

    if (existingKicker) {
      const kicker = document.createElement('span');
      kicker.className = 'showcase-kicker';
      kicker.textContent = existingKicker;
      summary.appendChild(kicker);
    }

    if (tags) summary.appendChild(tags);

    const heading = document.createElement('h3');
    heading.textContent = title;
    summary.appendChild(heading);

    if (sub) summary.appendChild(sub);

    if (usableLinks.length || videoUrl) {
      const links = document.createElement('div');
      links.className = 'card-links showcase-links';
      usableLinks.forEach(link => links.appendChild(link.cloneNode(true)));
      if (videoUrl) {
        const videoButton = document.createElement('button');
        videoButton.className = 'link-btn link-btn-video showcase-video-btn';
        videoButton.type = 'button';
        videoButton.textContent = '전체 영상 보기';
        videoButton.dataset.videoUrl = videoUrl;
        videoButton.dataset.projectTitle = title;
        links.appendChild(videoButton);
      }
      summary.appendChild(links);
    }

    if (desc) details.appendChild(desc);
    if (highlights) details.appendChild(highlights);

    copy.appendChild(summary);
    copy.appendChild(details);
  });
}

syncShowcaseCopyFromCards();

const videoLightbox = document.createElement('div');
videoLightbox.className = 'video-lightbox';
videoLightbox.setAttribute('role', 'dialog');
videoLightbox.setAttribute('aria-modal', 'true');
videoLightbox.setAttribute('aria-hidden', 'true');
videoLightbox.innerHTML = `
  <div class="video-lightbox-panel">
    <button class="video-lightbox-close" type="button" aria-label="Close">X</button>
    <div class="video-lightbox-frame">
      <iframe class="video-lightbox-iframe" src="" title="Project gameplay video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="video-lightbox-footer">
      <span class="video-lightbox-caption"></span>
      <a class="video-lightbox-link" href="#" target="_blank" rel="noopener">YouTube에서 열기</a>
    </div>
  </div>
`;
document.body.appendChild(videoLightbox);

const videoLightboxIframe = videoLightbox.querySelector('.video-lightbox-iframe');
const videoLightboxCaption = videoLightbox.querySelector('.video-lightbox-caption');
const videoLightboxClose = videoLightbox.querySelector('.video-lightbox-close');
const videoLightboxLink = videoLightbox.querySelector('.video-lightbox-link');

function openVideoLightbox(url, title) {
  const embedUrl = getYoutubeNocookieEmbedUrl(url);
  if (!embedUrl) return;

  videoLightboxIframe.src = embedUrl;
  videoLightboxCaption.textContent = title || '전체 영상';
  videoLightboxLink.href = url;
  videoLightbox.classList.add('active');
  videoLightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  videoLightboxClose.focus();
}

function closeVideoLightbox() {
  videoLightbox.classList.remove('active');
  videoLightbox.setAttribute('aria-hidden', 'true');
  videoLightboxIframe.src = '';
  document.body.style.overflow = '';
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.showcase-video-btn');
  if (!button) return;
  openVideoLightbox(button.dataset.videoUrl, button.dataset.projectTitle);
});

videoLightboxClose.addEventListener('click', closeVideoLightbox);
videoLightbox.addEventListener('click', (event) => {
  if (event.target === videoLightbox) closeVideoLightbox();
});

document.querySelectorAll('.gif-grid').forEach((grid, index) => {
  if (grid.parentElement?.classList.contains('gif-slider')) return;

  const slider = document.createElement('div');
  slider.className = 'gif-slider';
  grid.parentNode.insertBefore(slider, grid);
  slider.appendChild(grid);

  const controls = document.createElement('div');
  controls.className = 'gif-slider-controls';
  controls.innerHTML = `
    <button class="gif-slider-btn" type="button" data-dir="-1" aria-label="Previous GIF">&lt;</button>
    <button class="gif-slider-btn" type="button" data-dir="1" aria-label="Next GIF">&gt;</button>
  `;
  slider.appendChild(controls);

  controls.querySelectorAll('.gif-slider-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const direction = Number(button.dataset.dir || 1);
      grid.scrollBy({
        left: direction * grid.clientWidth * 0.58,
        behavior: 'smooth'
      });
    });
  });

  let dragStart = null;

  grid.addEventListener('pointerdown', (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    dragStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      scrollLeft: grid.scrollLeft,
      dragging: false,
      tile: event.target.closest('.gif-tile')
    };
    grid.classList.add('is-pointer-down');
    grid.setPointerCapture?.(event.pointerId);
  });

  grid.addEventListener('pointermove', (event) => {
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - dragStart.x;
    if (Math.abs(deltaX) > 4) {
      dragStart.dragging = true;
      grid.classList.add('is-dragging');
    }
    if (!dragStart.dragging) return;
    event.preventDefault();
    grid.scrollLeft = dragStart.scrollLeft - deltaX;
  });

  function stopGridDrag(event) {
    if (!dragStart || dragStart.pointerId !== event.pointerId) return;
    const moveX = Math.abs(event.clientX - dragStart.x);
    const moveY = Math.abs(event.clientY - dragStart.y);
    const scrollMove = Math.abs(grid.scrollLeft - dragStart.scrollLeft);
    const shouldOpenLightbox = dragStart.tile && !dragStart.dragging && moveX < 8 && moveY < 8 && scrollMove < 8;

    grid.releasePointerCapture?.(event.pointerId);
    grid.classList.remove('is-pointer-down');
    setTimeout(() => grid.classList.remove('is-dragging'), 0);
    const tileToOpen = dragStart.tile;
    dragStart = null;

    if (shouldOpenLightbox) {
      openGifLightbox(tileToOpen);
    }
  }

  grid.addEventListener('pointerup', stopGridDrag);
  grid.addEventListener('pointercancel', stopGridDrag);
  grid.addEventListener('pointerleave', stopGridDrag);
});

const gifLightboxItems = Array.from(document.querySelectorAll('.gif-tile'));
let currentGifGroup = [];
let currentGifIndex = 0;
let gifLightboxTrigger = null;

const gifLightbox = document.createElement('div');
gifLightbox.className = 'gif-lightbox';
gifLightbox.setAttribute('role', 'dialog');
gifLightbox.setAttribute('aria-modal', 'true');
gifLightbox.setAttribute('aria-hidden', 'true');
gifLightbox.innerHTML = `
  <div class="gif-lightbox-panel">
    <button class="gif-lightbox-close" type="button" aria-label="Close">X</button>
    <button class="gif-lightbox-nav gif-lightbox-prev" type="button" aria-label="Previous GIF">&lt;</button>
    <img class="gif-lightbox-media" alt="">
    <button class="gif-lightbox-nav gif-lightbox-next" type="button" aria-label="Next GIF">&gt;</button>
    <div class="gif-lightbox-caption"></div>
  </div>
`;
document.body.appendChild(gifLightbox);

const gifLightboxImage = gifLightbox.querySelector('.gif-lightbox-media');
const gifLightboxCaption = gifLightbox.querySelector('.gif-lightbox-caption');
const gifLightboxClose = gifLightbox.querySelector('.gif-lightbox-close');
const gifLightboxPrev = gifLightbox.querySelector('.gif-lightbox-prev');
const gifLightboxNext = gifLightbox.querySelector('.gif-lightbox-next');

function getGifSource(tile) {
  const image = tile.querySelector('img');
  if (!image) return '';
  loadShowcaseGif(image);
  return image.currentSrc || image.src || image.dataset.src || '';
}

function setLightboxGif(index) {
  if (!currentGifGroup.length) return;
  currentGifIndex = (index + currentGifGroup.length) % currentGifGroup.length;
  const tile = currentGifGroup[currentGifIndex];
  const image = tile.querySelector('img');
  const projectTitle = tile.closest('.showcase-project')?.querySelector('h3')?.textContent || '';
  const clipTitle = tile.querySelector('figcaption')?.textContent || '';
  const source = getGifSource(tile);

  gifLightboxImage.src = source;
  gifLightboxImage.alt = image?.alt || clipTitle || projectTitle;
  gifLightboxCaption.textContent = [projectTitle, clipTitle].filter(Boolean).join(' - ');
}

function openGifLightbox(tile) {
  const grid = tile.closest('.gif-grid');
  currentGifGroup = Array.from(grid?.querySelectorAll('.gif-tile') || gifLightboxItems);
  currentGifIndex = currentGifGroup.indexOf(tile);
  gifLightboxTrigger = tile;
  setLightboxGif(currentGifIndex);
  gifLightbox.classList.add('active');
  gifLightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  gifLightboxClose.focus();
}

function closeGifLightbox() {
  gifLightbox.classList.remove('active');
  gifLightbox.setAttribute('aria-hidden', 'true');
  gifLightboxImage.src = '';
  document.body.style.overflow = '';
  if (gifLightboxTrigger) {
    gifLightboxTrigger.focus();
    gifLightboxTrigger = null;
  }
}

gifLightboxItems.forEach(tile => {
  tile.tabIndex = 0;
  tile.addEventListener('click', (event) => {
    event.preventDefault();
  });
  tile.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openGifLightbox(tile);
  });
});

gifLightboxClose.addEventListener('click', closeGifLightbox);
gifLightboxPrev.addEventListener('click', () => setLightboxGif(currentGifIndex - 1));
gifLightboxNext.addEventListener('click', () => setLightboxGif(currentGifIndex + 1));
gifLightbox.addEventListener('click', (event) => {
  if (event.target === gifLightbox) closeGifLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && videoLightbox.classList.contains('active')) {
    closeVideoLightbox();
    return;
  }

  if (!gifLightbox.classList.contains('active')) return;
  if (event.key === 'Escape') closeGifLightbox();
  if (event.key === 'ArrowLeft') setLightboxGif(currentGifIndex - 1);
  if (event.key === 'ArrowRight') setLightboxGif(currentGifIndex + 1);
});


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
