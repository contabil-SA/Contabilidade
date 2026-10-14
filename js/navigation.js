// navigation.js
// Menu mobile (hambúrguer) e sombra do header ao rolar a página.
// Única fonte de verdade para esse comportamento — no site antigo, o efeito
// de sombra do header e um listener de scroll "morto" (debounce sem função
// real) viviam em pontos diferentes do arquivo.

export function initNavigation() {
  const header = document.querySelector('.header');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!hamburger || !navMenu) return;

  const navLinks = navMenu.querySelectorAll('.nav-link');

  const closeMenu = () => {
    hamburger.classList.remove('is-active');
    navMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    hamburger.classList.add('is-active');
    navMenu.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Fecha ao clicar fora do menu/navbar
  document.addEventListener('click', (event) => {
    if (!navMenu.classList.contains('is-open')) return;
    if (event.target.closest('.navbar')) return;
    closeMenu();
  });

  // Fecha com ESC e devolve o foco ao botão, para quem navega por teclado
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });
}
