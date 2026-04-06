// ============================================================
// main.js — Lógica principal del sitio
// ============================================================

// ---- CAROUSEL ----
let currentSlide = 0;
let carouselInterval;

function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track || !CAROUSEL_SLIDES.length) return;

  track.innerHTML = CAROUSEL_SLIDES.map((slide, i) => `
    <div class="carousel__slide ${i === 0 ? 'active' : ''}">
      <img class="carousel__img" src="${slide.image}" alt="${slide.title}" width="1600" height="900" ${i > 0 ? 'loading="lazy"' : ''}>
      <div class="carousel__overlay"></div>
      <div class="carousel__content">
        <span class="carousel__label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Hostal Encantos
        </span>
        <h1 class="carousel__title">${slide.title}</h1>
        <p class="carousel__subtitle">${slide.subtitle}</p>
        <div class="carousel__actions">
          <a href="#habitaciones" class="btn btn-primary">Ver Habitaciones</a>
          <a href="#contacto" class="btn btn-outline">Reservar Ahora</a>
        </div>
      </div>
    </div>
  `).join('');

  const dotsWrap = document.getElementById('carouselDots');
  dotsWrap.innerHTML = CAROUSEL_SLIDES.map((_, i) =>
    `<button class="carousel__dot ${i === 0 ? 'active' : ''}" aria-label="Slide ${i+1}" onclick="goToSlide(${i})"></button>`
  ).join('');

  startAutoplay();
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.carousel__slide');
  const dots   = document.querySelectorAll('.carousel__dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function startAutoplay() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

document.getElementById('prevBtn')?.addEventListener('click', () => { goToSlide(currentSlide - 1); startAutoplay(); });
document.getElementById('nextBtn')?.addEventListener('click', () => { goToSlide(currentSlide + 1); startAutoplay(); });

// ---- SVG ICONS PARA SERVICIOS ----
const SERVICE_ICONS = {
  wifi: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>`,
  coffee: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  'shield-check': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  car: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  'washing-machine': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><circle cx="12" cy="13" r="4"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="10" y1="6" x2="10.01" y2="6"/></svg>`,
  'map-pin': `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`
};

// ---- RENDER ROOMS ----
function renderRooms() {
  const container = document.getElementById('roomsContainer');
  if (!container) return;

  container.innerHTML = ROOMS.map(room => `
    <article class="room-card fade-in" role="listitem">
      <div class="room-card__img-wrap">
        <img class="room-card__img" src="${room.image}" alt="${room.name}" width="800" height="600" loading="lazy">
        ${room.badge ? `<span class="room-card__badge">${room.badge}</span>` : ''}
      </div>

      <div class="room-card__body">
        <div class="room-card__meta">
          <span class="room-card__capacity">
            👤 ${room.capacity} personas
          </span>
          <span class="room-card__size">
            🛏️ ${room.bed}
          </span>
        </div>

        <h3 class="room-card__name">${room.name}</h3>

        ${room.highlight ? `<p class="room-card__highlight">${room.highlight}</p>` : ''}

        <p class="room-card__desc">${room.description}</p>

        <div class="room-card__amenities">
          ${room.amenities.slice(0, 7).map(a => `<span class="room-card__amenity">✔ ${a}</span>`).join('')}
          ${room.amenities.length > 7 ? `<span class="room-card__amenity">+${room.amenities.length - 7} beneficios</span>` : ''}
        </div>

        <div class="room-card__footer">
          <div class="room-card__price">
            <span class="room-card__price-amount">S/. ${room.price}</span>
            <span class="room-card__price-unit"></span>
          </div>

          <a href="https://wa.me/${HOSTAL.whatsapp}?text=Hola%2C%20quiero%20reservar%20la%20${encodeURIComponent(room.name)}"
             target="_blank" rel="noopener noreferrer"
             class="btn btn-primary"
             style="padding: var(--space-2) var(--space-4); font-weight: bold;">
             
             Reservar ahora 🔥
          </a>
        </div>

        <p class="room-card__urgency">
          ⏳ ${room.availability}
        </p>

      </div>
    </article>
  `).join('');
}

// ---- RENDER SERVICES ----
function renderServices() {
  const container = document.getElementById('servicesContainer');
  if (!container) return;
  container.innerHTML = SERVICES.map(service => `
    <div class="service-card fade-in" role="listitem">
      <div class="service-card__icon">
        ${SERVICE_ICONS[service.icon] || SERVICE_ICONS['map-pin']}
      </div>
      <h3 class="service-card__name">${service.name}</h3>
      <p class="service-card__desc">${service.description}</p>
    </div>
  `).join('');
}

// ---- RENDER GALLERY ----
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;
  container.innerHTML = GALLERY.map(item => `
    <div class="gallery__item ${item.span === 'wide' ? 'gallery__item--wide' : ''} fade-in"
         onclick="openLightbox('${item.src}', '${item.alt}')"
         role="button" tabindex="0" aria-label="Ver imagen: ${item.alt}"
         onkeydown="if(event.key==='Enter') openLightbox('${item.src}','${item.alt}')">
      <img src="${item.src}" alt="${item.alt}" width="800" height="600" loading="lazy">
    </div>
  `).join('');
}

// ---- LIGHTBOX ----
function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxImg').alt = alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightbox')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});

// ---- NAV SCROLL + HAMBURGER ----
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu?.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ---- CONTACT FORM → WHATSAPP ----
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value;
    const message = form.querySelector('[name="message"]').value;
    const text = `Hola%2C%20soy%20${encodeURIComponent(name)}%2E%20${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${HOSTAL.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  });
}

// ---- SCROLL ANIMATIONS ----
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, 150);
}

// ---- SMOOTH SCROLL ----
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
});

// ---- RELLENAR DATOS DEL HOSTAL ----
function fillContactData() {
  document.querySelectorAll('[data-hostal-phone]').forEach(el => el.textContent = HOSTAL.phone);
  document.querySelectorAll('[data-hostal-address]').forEach(el => el.textContent = HOSTAL.address);
  document.querySelectorAll('[data-hostal-email]').forEach(el => el.textContent = HOSTAL.email);
  document.querySelectorAll('[data-channel="whatsapp"]').forEach(el =>
    el.setAttribute('href', `https://wa.me/${HOSTAL.whatsapp}?text=Hola%2C%20quiero%20informaci%C3%B3n`));
  document.querySelectorAll('[data-channel="call"]').forEach(el =>
    el.setAttribute('href', `tel:${HOSTAL.phone.replace(/\s/g,'')}`));
  document.querySelectorAll('[data-channel="facebook"]').forEach(el =>
    el.setAttribute('href', HOSTAL.facebook));
  document.querySelectorAll('[data-maps]').forEach(el =>
    el.setAttribute('href', HOSTAL.googleMaps));
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCarousel();
  renderRooms();
  renderServices();
  renderGallery();
  fillContactData();
  initContactForm();
  initScrollAnimations();
});