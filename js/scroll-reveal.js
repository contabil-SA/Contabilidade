// scroll-reveal.js
// Anima a entrada de elementos marcados com a classe .reveal conforme entram
// na tela. Se o usuário preferir menos movimento, ou o navegador não
// suportar IntersectionObserver, os elementos aparecem direto (nunca ficam
// presos em opacity: 0).

export function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((el) => observer.observe(el));

  // Rede de segurança: perto do fim da página, revela qualquer elemento que
  // ainda não tenha aparecido. Cobre casos extremos de elementos muito perto
  // do fim do documento, onde pode não sobrar espaço de rolagem suficiente
  // para o observer disparar naturalmente.
  const revealRemaining = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
    if (!nearBottom) return;
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible');
      observer.unobserve(el);
    });
  };

  window.addEventListener('scroll', revealRemaining, { passive: true });
  window.addEventListener('resize', revealRemaining);

  // Segunda rede de segurança, incondicional: um tempo razoável depois de
  // carregar, revela qualquer elemento que ainda esteja escondido — não
  // depende de rolagem nem de o IntersectionObserver disparar. Garante que
  // nenhum conteúdo fique invisível para sempre, aconteça o que acontecer.
  window.setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible');
      observer.unobserve(el);
    });
  }, 2500);
}
