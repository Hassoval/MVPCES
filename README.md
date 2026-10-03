# Complexo Escolar Sanjukila — Website Institucional (MVP)

> **Assinatura Institucional:** Rigor • Qualidade • Inovação  
> **Mensagem Institucional:** "Educar para conhecer, valorizar e transformar."  
> **Localização:** Zango III, Primeira Paragem, Rua da Polícia, antes do Mercado Avô Baiango, Luanda, Angola  
> **Telefone:** +244 944 512 096

---

## 1. O que é o projeto

Este projeto é o **MVP (Mínimo Produto Viável) do website institucional do Complexo Escolar Sanjukila**, concebido com estética contemporânea, editorial e corporativa para transmitir excelência educacional, credibilidade, rigor e preparação para o futuro no contexto angolano.

O website foi arquitetado para ser apresentado diretamente à direção do Sanjukila como uma proposta comercial e funcional completa, contendo todas as páginas fundamentais, integração prática com WhatsApp e códigos preparados para substituição fácil de conteúdos oficiais.

---

## 2. Tecnologias utilizadas

O projeto foi construído propositadamente com tecnologias limpas, leves, universais e sem dependências complexas de compilação:

- **HTML5 Semântico:** Estrutura clara (`header`, `nav`, `main`, `section`, `article`, `footer`) e metadados SEO/Open Graph.
- **CSS3 com Variáveis Customizadas (`:root`):** Facilidade total para alterar paleta de cores e tipografia.
- **JavaScript Vanilla (ES6+):** Código limpo sem bibliotecas pesadas para scroll do header, filtros da galeria, links dinâmicos de WhatsApp e formulários.
- **Bootstrap 5 (v5.3.3 via CDN):** Grid responsivo Mobile-First e utilitários modernos.
- **Bootstrap Icons (v1.11.3 via CDN):** Ícones funcionais e leves.
- **Google Fonts:** Tipografia com *Manrope* (títulos fortes e institucionais) e *Inter* (excelente legibilidade de leitura).

---

## 3. Estrutura de pastas

```text
sanjukila-website/
├── index.html           # Página inicial (Hero, Níveis, Instalações, Bilíngue, Galeria, Notícias)
├── sobre.html           # História, Missão, Visão e Valores (Rigor, Qualidade, Inovação)
├── ensino.html          # Níveis de ensino (Pré-escolar, Primário, I e II Ciclo, Técnico, Bilíngue)
├── cursos.html          # Grade com 8 Cursos Técnicos Profissionais e metodologia
├── matriculas.html      # Processo de admissão em 5 passos, requisitos e simulador
├── contactos.html       # Endereço completo em Zango III, telefone, mapa, WhatsApp e formulário
│
├── css/
│   └── style.css        # Variáveis de design (:root), tipografia, componentes e responsividade
│
├── js/
│   └── main.js          # Configuração central do WhatsApp, filtros, simulador e validações
│
├── assets/
│   ├── images/          # Fotografias do campus, laboratórios, mediateca, informática e desporto
│   └── logo/            # Área reservada para o logotipo oficial (logo.png / logo.svg)
│
├── robots.txt           # Diretivas de indexação para motores de busca
├── sitemap.xml          # Mapa do site estruturado para SEO
└── README.md            # Guia de manutenção e publicação
```

---

## 4. Como executar no VS Code

O projeto funciona diretamente no navegador, sem necessidade de instalar Node.js ou compilar pacotes.

1. Abra o **Visual Studio Code**.
2. Vá em **File > Open Folder...** e selecione a pasta do projeto.
3. Se tiver a extensão **Live Server** instalada:
   - Clique com o botão direito no arquivo `index.html` e escolha **"Open with Live Server"**.
   - O website abrirá automaticamente no navegador em `http://127.0.0.1:5500/index.html`.
4. Sem extensões:
   - Basta dar um duplo clique diretamente em `index.html` para abrir em qualquer navegador (Chrome, Edge, Firefox, Safari).

---

## 5. Como substituir o logotipo

Na pasta `assets/logo/`:
1. Salve o arquivo oficial com o nome: `assets/logo/logo.png`.
2. Dimensões recomendadas: altura de 50px a 70px com fundo transparente (PNG ou SVG).
3. O código já está preparado em todas as páginas: se o arquivo `logo.png` existir, ele é exibido; se não existir ou enquanto estiver em produção, o sistema exibe um bloco textual refinado com `"SANJUKILA • COMPLEXO ESCOLAR"`.

---

## 6. Como substituir imagens

Todas as imagens encontram-se na pasta `assets/images/`:
- `hero_campus.jpg` — Fotografia de entrada do campus.
- `laboratorios.jpg` — Instalações do laboratório de ciências.
- `mediateca.jpg` — Biblioteca e espaço de estudo.
- `informatica.jpg` — Sala de informática e computadores.
- `refeitorio.jpg` — Refeitório da escola.
- `desporto.jpg` — Campo desportivo e relvado.
- `multi_pavilhao.jpg` — Multi-pavilhão polidesportivo.
- `sala_aula.jpg` — Interior de salas de aula.

Para substituir qualquer foto, basta guardar a nova imagem na pasta com o mesmo nome ou atualizar o atributo `src="assets/images/novo_nome.jpg"` no HTML.

---

## 7. Como alterar as cores da identidade visual

Todas as cores estão centralizadas no topo do arquivo `css/style.css` dentro do bloco `:root`:

```css
:root {
  --color-primary: #123B70;       /* Cor primária (Azul Sanjukila) */
  --color-secondary: #1E63A8;     /* Cor secundária */
  --color-light-blue: #EAF3FA;    /* Azul claro de fundo */
  --color-accent: #F4B942;        /* Cor de destaque (Dourado âmbar) */
  --color-text: #14202B;          /* Cor do texto principal */
}
```

Ao alterar qualquer código hexadecimal nesse arquivo, todo o website atualizará instantaneamente.

---

## 8. Como alterar os contactos

Os contactos oficiais da escola estão disponíveis em `index.html`, `contactos.html` e no rodapé de todas as páginas:

- **Endereço:** Zango III, Primeira Paragem, Rua da Polícia, antes do Mercado Avô Baiango, Luanda, Angola.
- **Telefone:** `+244 944 512 096`
- **Email:** Substitua o placeholder `[email institucional a confirmar]` pelo endereço oficial (ex.: `secretaria@sanjukila.ao`).
- **Horário:** Substitua o placeholder `[07h30 às 16h30]` pelo horário que a direção confirmar.

---

## 9. Como adicionar ou renomear Cursos Técnicos

Abra os arquivos `cursos.html` e `index.html`. Cada curso técnico possui um comentário explícito `<!-- EDITAR AQUI -->`:

```html
<!-- Exemplo no arquivo cursos.html -->
<div class="course-card">
  <span class="course-number">CURSO 01</span>
  <h4>Informática de Gestão</h4> <!-- Substitua "Curso Técnico 01" pelo nome oficial -->
  <div class="course-placeholder-note">Plano curricular de 4 anos</div>
  <p>Descrição das disciplinas práticas, laboratório e saídas profissionais.</p>
</div>
```

---

## 10. Como adicionar notícias

Em `index.html`, localize a seção `<section id="noticias">`. Cada notícia é um elemento `<article class="news-card">`.
Basta duplicar um dos blocos e atualizar:
- Imagem de capa
- Categoria (ex.: `Académico`, `Desporto`, `Cursos Técnicos`)
- Data do comunicado
- Título da notícia
- Resumo do texto

---

## 11. Como configurar o WhatsApp

No arquivo `js/main.js`, localize a linha 17:

```javascript
// Substitua pelo número com código de país (244) sem o sinal de + e sem espaços:
const WHATSAPP_NUMBER = "244944512096";
```

Todos os botões *"Falar com a Secretaria"* e o botão flutuante no canto inferior direito utilizarão esse número automaticamente.

---

## 12. Como publicar no GitHub (GitHub Pages)

1. Crie um repositório no seu GitHub chamado `sanjukila-website`.
2. No seu computador, inicialize o Git na pasta:
   ```bash
   git init
   git add .
   git commit -m "Versão Inicial do Website do Complexo Escolar Sanjukila"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/sanjukila-website.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings > Pages**.
4. Em **Branch**, selecione `main` e a pasta `/ (root)`.
5. Clique em **Save**. Em 1 minuto o site estará publicado gratuitamente no endereço:  
   `https://SEU_USUARIO.github.io/sanjukila-website/`

---

## 13. Como publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
2. Clique em **"Add New..." > Project**.
3. Selecione o repositório `sanjukila-website`.
4. Como é um projeto estático em HTML/CSS/JS puro, não precisa de nenhuma configuração de build.
5. Clique em **Deploy**. O site estará no ar em poucos segundos com certificado SSL (HTTPS) gratuito e CDN de alta velocidade.

---

*Complexo Escolar Sanjukila — "Educar para conhecer, valorizar e transformar."*
