// main.js
// Ponto de entrada único da página. Como é carregado como módulo
// (type="module"), o navegador já espera o HTML terminar de ser interpretado
// antes de executar este arquivo — por isso não precisamos empilhar vários
// listeners de DOMContentLoaded como no script.js antigo.

import { initNavigation } from './navigation.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initFaq } from './faq.js';
import { initScrollReveal } from './scroll-reveal.js';

function setCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

initNavigation();
initSmoothScroll();
initFaq();
initScrollReveal();
setCurrentYear();
