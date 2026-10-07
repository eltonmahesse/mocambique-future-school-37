// JS partilhado pelas páginas internas (sobre, programas, inscricoes, contacto)

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

// ── Toast ────────────────────────────────────────────────────────────
function showToast(message, success = true) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `fixed bottom-5 right-5 ${success ? 'bg-green-dark' : 'bg-red-bright'} text-white px-6 py-4 rounded-xl shadow-2xl`;
  window.setTimeout(() => toast.classList.add('hidden'), 4000);
}

const HAMBURGER_SVG = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>';
const CLOSE_SVG = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';

// ── Menu mobile / tablet (colapsado até 1024px) ──────────────────────
function setupMenu() {
  const toggle = $('#menu-toggle');
  const menu   = $('#mobile-menu');
  if (!toggle || !menu) return;

  const isOpen = () => !menu.classList.contains('hidden');
  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.innerHTML = open ? CLOSE_SVG : HAMBURGER_SVG;
  };

  toggle.innerHTML = HAMBURGER_SVG;
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!isOpen());
  });
  $$('#mobile-menu a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', (event) => {
    if (!isOpen()) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && isOpen()) setOpen(false);
  });
}

// ── Formulário de matrícula → WhatsApp ───────────────────────────────
function setupForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = [...form.querySelectorAll('input, select')];
  fields.forEach((field) => {
    const clearError = () => {
      field.removeAttribute('aria-invalid');
      const error = document.getElementById(`error-${field.name}`);
      if (error) error.textContent = '';
    };
    field.addEventListener('input', clearError);
    field.addEventListener('change', clearError);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let firstInvalidField = null;
    fields.forEach((field) => {
      field.removeAttribute('aria-invalid');
      const error = document.getElementById(`error-${field.name}`);
      if (error) error.textContent = '';
      const missingValue = field.required && !field.value.trim();
      if (field.validity.valid && !missingValue) return;

      field.setAttribute('aria-invalid', 'true');
      if (error) {
        error.textContent = field.validity.valueMissing || missingValue
          ? 'Este campo é obrigatório.'
          : field.validity.typeMismatch
            ? 'Introduza um email válido.'
            : 'Verifique o valor introduzido.';
      }
      if (!firstInvalidField) firstInvalidField = field;
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }

    const nome     = (form.nome.value     || '').trim();
    const telefone = (form.telefone.value || '').trim();
    const email    = (form.email.value    || '').trim();
    const aluno    = (form.aluno.value    || '').trim();
    const classe   = (form.classe.value   || '').trim();

    let linhas = [
      'NOVO CONTACTO — WEBSITE COLÉGIO PÉRCIA',
      '',
      'Olá, gostaria de iniciar o processo de matrícula.',
      '',
      'Dados do encarregado:',
      'Nome: ' + nome,
      'Telefone: ' + telefone,
    ];

    if (email) linhas.push('Email: ' + email);

    linhas = linhas.concat([
      '',
      'Dados do aluno:',
      'Nome do aluno: ' + aluno,
      'Classe pretendida: ' + classe,
      '',
      'Origem: Website do Colégio Pércia',
      'Gostaria de receber informações sobre o processo de matrícula.',
    ]);

    const mensagem = linhas.join('\n');
    const url = 'https://wa.me/258858681368?text=' + encodeURIComponent(mensagem);
    window.open(url, '_blank', 'noopener,noreferrer');
    form.reset();
  });
}

setupMenu();
setupForm();
