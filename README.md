# SA Contabilidade — site institucional

Site estático (HTML, CSS e JavaScript puros) publicado pelo GitHub Pages em:

**https://contabil-sa.github.io/Contabilidade/**

## Estrutura

- `index.html` — página única (conteúdo, metadados e dados estruturados)
- `css/` e `js/` — estilos e scripts do site
- `assets/` — ícones e imagens (`og-sa-contabilidade.jpg` é a imagem de compartilhamento, 1200×630)
- `sitemap.xml` — mapa do site (publicado em `/Contabilidade/sitemap.xml`)
- `google479a79a7f71f520c.html` — arquivo de verificação do Google Search Console; **não remova**, senão a propriedade perde a verificação
- `robots.txt` — modelo de regras de rastreamento (veja a observação abaixo)
- `script.js`, `styles.css`, `foto-externa.png`, `foto-interna.png` — arquivos da versão antiga do site; **não são mais usados** pelo `index.html`

## SEO e dados estruturados — o que manter em dia

O `index.html` contém dois blocos JSON-LD (`AccountingService` e `FAQPage`). Eles precisam refletir o que está **visível** na página:

- Mudou endereço, telefone, e-mail ou horário? Atualize o texto do site **e** o bloco `AccountingService`.
- Mudou uma pergunta ou resposta do FAQ? Atualize o texto visível **e** o bloco `FAQPage`.
- Mudou o endereço do site (domínio próprio)? Atualize `canonical`, `og:url`, `og:image`, os URLs do JSON-LD, o `sitemap.xml` e a linha `Sitemap:` do `robots.txt`.
- Só inclua coordenadas (`geo`), redes sociais (`sameAs`) ou avaliações no JSON-LD se forem dados reais e confirmados.

## robots.txt e GitHub Pages

Os rastreadores só leem o `robots.txt` na **raiz do domínio** (`https://contabil-sa.github.io/robots.txt`). Neste projeto, o arquivo em `/Contabilidade/robots.txt` não tem efeito. Para usá-lo, copie-o para o repositório `contabil-sa.github.io` (site de usuário/organização do GitHub Pages), se existir. Sem robots.txt na raiz, os rastreadores consideram o site liberado para rastreamento. O `sitemap.xml` deve ser enviado pelo Google Search Console.
