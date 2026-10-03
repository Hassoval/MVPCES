/**
 * ==========================================================================
 * COMPLEXO ESCOLAR SANJUKILA — JAVASCRIPT INSTITUCIONAL
 * Arquivo: js/main.js
 * Descrição: Comportamentos Vanilla JS leves, acessíveis e fáceis de manter.
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. CONFIGURAÇÕES PRINCIPAIS (EDITAR AQUI)
// --------------------------------------------------------------------------

/**
 * Número do WhatsApp da Secretaria (formato internacional sem + nem espaços).
 * Telefone institucional indicado: +244 944 512 096
 * Caso queira alterar, edite o valor abaixo:
 */
const WHATSAPP_NUMBER = "244944512096"; // EDITAR AQUI: Número oficial da instituição
const WHATSAPP_DISPLAY = "+244 944 512 096";

/**
 * Mensagens padrão para os botões de contacto
 */
const DEFAULT_WHATSAPP_MESSAGES = {
  geral: "Olá, gostaria de obter informações gerais sobre o Complexo Escolar Sanjukila.",
  matricula: "Olá! Gostaria de informações sobre o processo de matrículas para o Ano Letivo 2026/2027.",
  cursos: "Olá, gostaria de conhecer os Cursos Técnicos Profissionais disponíveis no Sanjukila.",
  secretaria: "Olá, Secretaria do Complexo Escolar Sanjukila. Gostaria de tirar uma dúvida."
};

/**
 * Gera URL limpa para o WhatsApp
 */
function buildWhatsAppUrl(message) {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "COLOCAR_NUMERO_AQUI") {
    return "#";
  }
  const encodedText = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGES.geral);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

// --------------------------------------------------------------------------
// 2. TRANSIÇÃO SUTIL DE CARREGAMENTO (FADE-IN COM WINDOW.ONLOAD)
// --------------------------------------------------------------------------
window.onload = function () {
  document.body.classList.add("fade-in");
};

// Fallback de segurança para garantir a visibilidade se o carregamento demorar
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (!document.body.classList.contains("fade-in")) {
      document.body.classList.add("fade-in");
    }
  }, 350);

  initHeaderScroll();
  initWhatsAppLinks();
  initGalleryFilters();
  initContactForms();
  initPreEnrollmentAssistant();
  initCopyrightYear();
});

// --------------------------------------------------------------------------
// 3. HEADER STICKY COM TRANSIÇÃO SUTIL NO SCROLL
// --------------------------------------------------------------------------
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Executar na carga inicial

  // Fechamento suave do menu mobile ao clicar em links internos
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const menuCollapse = document.getElementById("menuPrincipal");
  if (menuCollapse && window.bootstrap) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (menuCollapse.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getInstance(menuCollapse) || new bootstrap.Collapse(menuCollapse);
          bsCollapse.hide();
        }
      });
    });
  }
}

// --------------------------------------------------------------------------
// 4. ATRIBUIÇÃO AUTOMÁTICA DOS LINKS DE WHATSAPP
// --------------------------------------------------------------------------
function initWhatsAppLinks() {
  // Botão flutuante
  const floatingBtn = document.querySelector(".floating-whatsapp");
  if (floatingBtn) {
    floatingBtn.href = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGES.secretaria);
    floatingBtn.target = "_blank";
    floatingBtn.rel = "noopener noreferrer";
    floatingBtn.setAttribute("aria-label", "Falar com a Secretaria pelo WhatsApp");
  }

  // Links que possuem data-whatsapp-intent
  const intentLinks = document.querySelectorAll("[data-whatsapp-intent]");
  intentLinks.forEach(link => {
    const intent = link.getAttribute("data-whatsapp-intent") || "geral";
    const msg = DEFAULT_WHATSAPP_MESSAGES[intent] || DEFAULT_WHATSAPP_MESSAGES.geral;
    link.href = buildWhatsAppUrl(msg);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // Interatividade do card flutuante de atendimento WhatsApp
  const popupCard = document.querySelector(".whatsapp-popup-card");
  const closePopupBtn = document.querySelector(".btn-close-popup");
  if (closePopupBtn && popupCard) {
    closePopupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      popupCard.classList.remove("is-active");
      popupCard.style.display = "none";
    });

    // Exibição amigável discreta após 3 segundos no desktop
    if (window.innerWidth > 768) {
      setTimeout(() => {
        if (popupCard.style.display !== "none") {
          popupCard.classList.add("is-active");
          // Desvanece suavemente após 8 segundos caso não haja interação
          setTimeout(() => {
            popupCard.classList.remove("is-active");
          }, 8000);
        }
      }, 3000);
    }
  }
}

// --------------------------------------------------------------------------
// 5. FILTROS FUNCIONAIS DA GALERIA (VIDA ESCOLAR)
// --------------------------------------------------------------------------
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Atualizar classe ativa
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (selectedCategory === "all" || itemCategory === selectedCategory) {
          item.classList.remove("hidden-item");
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.opacity = "1";
          }, 50);
        } else {
          item.classList.add("hidden-item");
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 6. FORMULÁRIOS DE CONTACTO (SIMULAÇÃO PROFISSIONAL NO FRONT-END)
// --------------------------------------------------------------------------
function initContactForms() {
  const forms = document.querySelectorAll(".contact-form");

  forms.forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      // Validação básica HTML5
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : "Enviar";

      // Estado de envio
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> A enviar...`;
      }

      // Simulação de processamento rápido (1.2 segundos)
      setTimeout(() => {
        // Criar ou exibir aviso de sucesso
        const alertBox = document.createElement("div");
        alertBox.className = "alert alert-success d-flex align-items-center gap-2 mt-3 p-3 border-0 rounded-3";
        alertBox.style.backgroundColor = "#EAF3FA";
        alertBox.style.color = "#123B70";
        alertBox.innerHTML = `
          <i class="bi bi-check-circle-fill text-success fs-5"></i>
          <div>
            <strong>Mensagem registada com sucesso!</strong><br>
            <small class="text-muted">A secretaria do Complexo Escolar Sanjukila entrará em contacto pelos dados informados.</small>
          </div>
        `;

        form.reset();
        form.classList.remove("was-validated");

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        // Inserir alerta após o botão ou no topo do formulário
        form.appendChild(alertBox);

        // Remover o alerta após 7 segundos
        setTimeout(() => {
          alertBox.remove();
        }, 7000);
      }, 1200);
    });
  });
}

// --------------------------------------------------------------------------
// 7. ASSISTENTE DE PRÉ-MATRÍCULA (INTERAÇÃO DIRETA COM WHATSAPP)
// --------------------------------------------------------------------------
function initPreEnrollmentAssistant() {
  const simForm = document.getElementById("preMatriculaForm");
  if (!simForm) return;

  simForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("alunoNome")?.value || "";
    const nivel = document.getElementById("alunoNivel")?.value || "";
    const cursoOuClasse = document.getElementById("alunoClasse")?.value || "";

    const mensagemCustom = `Olá Secretaria do Sanjukila! Gostaria de consultar vagas de matrícula para:\n- Aluno: ${nome}\n- Nível: ${nivel}\n- Opção/Classe: ${cursoOuClasse}\nPor favor, confirmem os requisitos e documentação.`;

    const url = buildWhatsAppUrl(mensagemCustom);
    window.open(url, "_blank");
  });
}

// --------------------------------------------------------------------------
// 8. ATUALIZAÇÃO AUTOMÁTICA DO ANO DE COPYRIGHT
// --------------------------------------------------------------------------
function initCopyrightYear() {
  const yearElements = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}

/**
 * Abre modal demonstrativo de notícia
 */
function openNewsPreview(title, date, category, excerpt) {
  const modalTitle = document.getElementById("newsModalLabel");
  const modalMeta = document.getElementById("newsModalMeta");
  const modalBody = document.getElementById("newsModalBody");
  
  if (modalTitle && modalMeta && modalBody) {
    modalTitle.textContent = title;
    modalMeta.textContent = `${category} • ${date}`;
    modalBody.innerHTML = `
      <p class="lead">${excerpt}</p>
      <div class="alert alert-light border p-3 mt-4 text-muted small">
        <i class="bi bi-info-circle me-1"></i>
        <strong>Nota Institucional:</strong> Notícia demonstrativa estruturada para o protótipo do website. O conteúdo oficial com galeria de fotos e texto integral será atualizado pela comissão editorial do Complexo Escolar Sanjukila.
      </div>
    `;
    const newsModalEl = document.getElementById("newsModal");
    if (newsModalEl && window.bootstrap) {
      const modal = new bootstrap.Modal(newsModalEl);
      modal.show();
    }
  }
}
window.openNewsPreview = openNewsPreview;
