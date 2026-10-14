// faq.js
// Accordion do FAQ. Usa <button> nativo (foco e teclado funcionam de graça,
// sem handlers extras) e aria-expanded para o estado. A rotação da seta é
// puramente CSS (.faq-item.is-open svg) — o script antigo trocava o atributo
// "d" do path do SVG manualmente e o CSS já rotacionava o ícone ao mesmo
// tempo, então as duas técnicas competiam para fazer o mesmo trabalho.

export function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((otherItem) => {
        otherItem.classList.remove('is-open');
        const otherTrigger = otherItem.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
