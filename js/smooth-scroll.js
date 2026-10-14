// smooth-scroll.js
// Implementação única de rolagem suave para links âncora. O site antigo tinha
// essa mesma lógica duplicada em dois pontos diferentes do script.js.

export function initSmoothScroll() {
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();

      const headerOffset = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

      window.scrollTo({
        top: targetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      // Move o foco para a seção de destino, para quem navega por teclado
      // ou leitor de tela também "chegar" onde a página rolou.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}
