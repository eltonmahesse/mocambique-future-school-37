const galleryItems = [
  ['imagens/tic-room1.jpg', 'Estudantes em sala de Informática'],
  ['imagens/lab-fisica.jpg', 'Laboratório de Física'],
  ['imagens/lab-quimica.jpg', 'Laboratório de Química'],
  ['imagens/biblioteca2.jpg', 'Biblioteca da escola'],
  ['imagens/taek2.webp', 'Eventos escolares'],
  ['imagens/excursao3.jpg', 'Visita de estudo']
];

const videos = [
  ['Tour Virtual das Instalações', 'Conheça nossos laboratórios, salas de aula e espaços de convivência', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=450&fit=crop', 'imagens/video-institucional.mp4'],
  ['Metodologia Pedagógica', 'Nossa abordagem inovadora para o ensino e aprendizagem', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=450&fit=crop', 'imagens/professor-depoimento.mp4'],
  ['Depoimentos de Sucesso', 'Histórias de alunos que se destacaram após formação no Colégio Pércia', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=450&fit=crop', 'https://www.youtube.com/embed/dQw4w9WgXcQ']
];

const testimonials = [
  ['Maria Santos', 'João, 12 anos', 'O Colégio Pércia transformou a vida do meu filho. Ele desenvolveu não apenas conhecimento académico, mas também valores importantes para a vida. A equipa é excepcional!', 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=150&h=150&fit=crop&crop=face', 'bg-red-bright'],
  ['Carlos Muchanga', 'Ana, 15 anos', 'Excelente qualidade de ensino e infraestrutura moderna. A minha filha sente-se motivada a aprender todos os dias. Recomendo a todas as famílias que procuram o melhor.', 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=150&h=150&fit=crop&crop=face', 'bg-green-primary'],
  ['Fatima Abdul', 'Pedro, 9 anos', 'O acompanhamento personalizado e o carinho com que tratam cada aluno faz toda a diferença. O meu filho melhorou muito as suas notas e a sua autoestima.', 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=150&h=150&fit=crop&crop=face', 'bg-green-dark']
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const showToast = (message, success = true) => {
  const toast = $('#toast');
  toast.textContent = message;
  toast.className = `fixed bottom-5 right-5 ${success ? 'bg-green-dark' : 'bg-red-bright'} text-white px-6 py-4 rounded-xl shadow-2xl`;
  window.setTimeout(() => toast.classList.add('hidden'), 4000);
};

const HAMBURGER_SVG = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>';
const CLOSE_SVG = '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>';

function setupMenu() {
  const toggle = $('#menu-toggle');
  const menu = $('#mobile-menu');
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

function setupGallery() {
  let current = 0;
  const image = $('#gallery-image');
  const caption = $('#gallery-caption');
  const dots = $('#gallery-dots');
  const thumbnails = $('#gallery-thumbnails');
  const render = () => {
    image.src = galleryItems[current][0];
    image.alt = galleryItems[current][1];
    caption.textContent = galleryItems[current][1];
    $$('#gallery-dots button, #gallery-thumbnails button').forEach((button, index) => button.classList.toggle('gallery-active', index === current));
  };
  galleryItems.forEach((item, index) => {
    const dot = document.createElement('button');
    dot.className = 'w-3 h-3 rounded-full bg-gray-300';
    dot.setAttribute('aria-label', `Ver imagem ${index + 1}`);
    dot.addEventListener('click', () => { current = index; render(); });
    dots.append(dot);
    const thumb = document.createElement('button');
    thumb.innerHTML = `<img src="${item[0]}" alt="${item[1]}">`;
    thumb.addEventListener('click', () => { current = index; render(); });
    thumbnails.append(thumb);
  });
  $('[data-gallery="prev"]').addEventListener('click', () => { current = (current - 1 + galleryItems.length) % galleryItems.length; render(); });
  $('[data-gallery="next"]').addEventListener('click', () => { current = (current + 1) % galleryItems.length; render(); });
  render();
}

const STAR_SVG = '<svg class="w-4 h-4 fill-amber-400 text-amber-400 shrink-0 inline" viewBox="0 0 20 20" aria-hidden="true"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';

function setupVideos() {
  $('#video-grid').innerHTML = videos.map((video, index) => `<article class="video-card group" data-video="${index}"><div class="relative"><img src="${video[2]}" alt="${video[0]}"><span class="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/20 transition-colors"><svg class="w-14 h-14 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span></div><div class="video-copy"><h3>${video[0]}</h3><p>${video[1]}</p><small class="text-gray-500">Vídeo Institucional</small></div></article>`).join('');
  const modal = $('#video-modal');
  $$('.video-card').forEach((card) => card.addEventListener('click', () => {
    const source = videos[Number(card.dataset.video)][3];
    $('#modal-content').innerHTML = source.endsWith('.mp4') ? `<video src="${source}" controls autoplay class="w-full h-full"></video>` : `<iframe src="${source}" title="Vídeo institucional" allow="autoplay; fullscreen" class="w-full h-full"></iframe>`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }));
  const close = () => { modal.classList.add('hidden'); modal.classList.remove('flex'); $('#modal-content').innerHTML = ''; };
  $('#modal-close').addEventListener('click', close);
  modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
}

function setupTestimonials() {
  let current = 0;
  const track = $('#testimonial-track');
  const fiveStarsHtml = `<div class="flex gap-1 justify-center md:justify-start mt-3" aria-label="Avaliação: 5 de 5 estrelas">${STAR_SVG.repeat(5)}</div>`;
  track.innerHTML = testimonials.map(([name, child, quote, photo, color]) => `<article class="testimonial-slide"><div class="testimonial-card ${color}"><div class="flex flex-col md:flex-row items-center gap-6"><img src="${photo}" alt="${name}"><div class="text-center md:text-left"><p class="text-lg italic mb-5">“${quote}”</p><h3 class="text-xl font-bold">${name}</h3><p class="text-white/80">Mãe/Pai de ${child}</p>${fiveStarsHtml}</div></div></div></article>`).join('');
  const render = () => { track.style.transform = `translateX(-${current * 100}%)`; $$('#testimonial-dots button').forEach((dot, index) => dot.classList.toggle('bg-green-primary', index === current)); };
  testimonials.forEach((_, index) => { const dot = document.createElement('button'); dot.className = 'w-3 h-3 rounded-full bg-gray-300'; dot.setAttribute('aria-label', `Ver depoimento ${index + 1}`); dot.addEventListener('click', () => { current = index; render(); }); $('#testimonial-dots').append(dot); });
  $('[data-testimonial="prev"]').addEventListener('click', () => { current = (current - 1 + testimonials.length) % testimonials.length; render(); });
  $('[data-testimonial="next"]').addEventListener('click', () => { current = (current + 1) % testimonials.length; render(); });
  render();
}

function setupForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome     = (form.nome.value     || '').trim();
    const telefone = (form.telefone.value || '').trim();
    const email    = (form.email.value    || '').trim();
    const aluno    = (form.aluno.value    || '').trim();
    const classe   = (form.classe.value   || '').trim();

    // Validação dos campos obrigatórios
    if (!nome || !telefone || !aluno || !classe) {
      showToast('Por favor, preencha todos os campos obrigatórios (*).', false);
      [['nome', nome], ['telefone', telefone], ['aluno', aluno], ['classe', classe]].forEach(function(pair) {
        const field = form[pair[0]];
        if (!pair[1] && field) {
          field.style.borderColor = '#E53935';
          field.addEventListener('input', function() { field.style.borderColor = ''; }, { once: true });
        }
      });
      return;
    }

    // Construir mensagem estruturada para a secretaria
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
setupGallery();
setupVideos();
setupTestimonials();
setupForm();
