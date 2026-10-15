'use strict';
// No analytics, cookies, storage or network requests. The form is a visual prototype.
const leadForm = document.querySelector('#lead-form');
leadForm?.addEventListener('submit', (event) => event.preventDefault());
// Avoid a persistent mobile CTA covering the form or footer.
const mobileCta = document.querySelector('.mobile-cta');
if ('IntersectionObserver' in window && mobileCta) {
  const visible = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    }
    mobileCta.hidden = visible.size > 0;
  }, { rootMargin: '0px 0px -70px 0px', threshold: 0 });
  document.querySelectorAll('#infomaterial, footer').forEach((el) => observer.observe(el));
}
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});
mobileMenu?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});
