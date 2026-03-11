/* ============================================================
   EL PATIO RESTAURANT — MAIN SCRIPT
   ============================================================ */

'use strict';

/* ---- Utility ---- */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   1. STICKY NAV — shadow + backdrop on scroll
   ============================================================ */
(function initNav() {
  const header    = qs('#nav-header');
  const hamburger = qs('#hamburger');
  const navLinks  = qs('#nav-links');

  if (!header) return;

  // Scroll handler
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click
    navLinks.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
})();


/* ============================================================
   2. SCROLL-TRIGGERED ANIMATIONS via IntersectionObserver
   ============================================================ */
(function initScrollAnimations() {
  const animatedEls = qsa('.fade-up, .fade-left, .fade-right');
  if (!animatedEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // Staggered delay for review cards and menu cards in a group
        const delay = parseFloat(el.style.getPropertyValue('--delay') || '0');
        if (delay) {
          setTimeout(() => el.classList.add('visible'), delay * 1000);
        } else {
          el.classList.add('visible');
        }

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
})();


/* ============================================================
   3. MENU CATEGORY FILTER
   ============================================================ */
(function initMenuFilter() {
  const tabs     = qsa('.menu-tab');
  const cards    = qsa('.menu-card');
  const menuGrid = qs('#menu-grid');

  if (!tabs.length || !cards.length) return;

  function filterMenu(category) {
    cards.forEach((card) => {
      const match = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !match);
    });

    // Re-trigger fade-in for visible cards
    requestAnimationFrame(() => {
      cards.forEach((card, i) => {
        if (!card.classList.contains('hidden')) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          card.style.transition = 'none';
          requestAnimationFrame(() => {
            setTimeout(() => {
              card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, i * 30);
          });
        }
      });
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      filterMenu(tab.dataset.category);
    });
  });
})();


/* ============================================================
   4. TODAY'S HOURS HIGHLIGHT
   ============================================================ */
(function initHoursHighlight() {
  const today    = new Date().getDay(); // 0 = Sunday, 1 = Mon, ...
  const todayRow = qs(`[data-day="${today}"]`);
  if (todayRow) todayRow.classList.add('today');
})();


/* ============================================================
   5. SMOOTH SCROLL for anchor links (enhances native behavior)
   ============================================================ */
(function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = qs(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });

    // Update URL without jump
    history.pushState(null, '', link.getAttribute('href'));
  });
})();


/* ============================================================
   6. ACTIVE NAV LINK on scroll (Intersection Observer)
   ============================================================ */
(function initActiveNav() {
  const sections  = qsa('section[id], div[id="home"]');
  const navLinks  = qsa('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute('href').replace('#', '');
          link.style.color = href === id ? 'var(--clr-primary)' : '';
          link.style.background = href === id ? 'rgba(185,28,47,0.08)' : '';
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
})();


/* ============================================================
   7. HERO: add class once loaded for smooth entrance
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});
