/**
 * Rastreamento e Gestão Centralizada de Contactos WhatsApp — Colégio Pércia
 * Novo número oficial: +258 87 678 0260 (formato para links: 258876780260)
 * GTM Container ID: GTM-WN7LVCLJ
 * Evento no dataLayer: whatsapp_click
 */

(function () {
  'use strict';

  var WHATSAPP_NUMBER = '258876780260';

  /**
   * Identifica dinamicamente a página actual
   * @returns {{ key: string, name: string }}
   */
  function getPageInfo() {
    var path = (window.location.pathname || '').toLowerCase();
    if (path.indexOf('sobre') !== -1) {
      return { key: 'sobre', name: 'Página Sobre' };
    }
    if (path.indexOf('programa') !== -1) {
      return { key: 'programas', name: 'Página Programas' };
    }
    if (path.indexOf('inscric') !== -1) {
      return { key: 'inscricoes', name: 'Página Inscrições' };
    }
    if (path.indexOf('contact') !== -1) {
      return { key: 'contacto', name: 'Página Contacto' };
    }
    return { key: 'home', name: 'Página Inicial' };
  }

  /**
   * Envia evento estruturado para o Google Tag Manager (dataLayer)
   * @param {string} sourcePage - Página de origem
   * @param {string} sourceButton - Identificador do botão clicado
   * @param {string} contactType - Finalidade do contacto
   */
  function trackWhatsAppClick(sourcePage, sourceButton, contactType) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_click',
        source_page: sourcePage || getPageInfo().key,
        source_button: sourceButton || 'desconhecido',
        contact_type: contactType || 'geral',
        destination: WHATSAPP_NUMBER
      });
    } catch (e) {
      // Falha silenciosa para nunca impedir a abertura do WhatsApp
    }
  }

  /**
   * Gera URL seguro do WhatsApp com encodeURIComponent
   * @param {string} message - Texto da mensagem pré-preenchida
   * @returns {string} URL completo do WhatsApp
   */
  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  /**
   * Catálogo de mensagens padronizadas por página e botão
   */
  var MESSAGES = {
    // Botão flutuante dinâmico
    floating: function (pageName) {
      return [
        'Olá! Estou a visitar o website do Colégio Pércia e gostaria de obter algumas informações.',
        '',
        'Origem: Website — Botão flutuante de WhatsApp.',
        'Página: ' + pageName + '.'
      ].join('\n');
    },

    // Página Inicial
    home_iniciar_matricula: [
      'Olá! Encontrei o Colégio Pércia através do website e gostaria de obter informações sobre as matrículas de 2027.',
      '',
      'Origem: Website — Página Inicial.',
      'Botão: Iniciar Matrícula.'
    ].join('\n'),

    home_transporte: [
      'Olá! Gostaria de saber se existe transporte escolar para a minha zona.',
      '',
      'Origem: Website — Transporte Escolar (Página Inicial).',
      'Botão: Consultar transporte.'
    ].join('\n'),

    home_visita: [
      'Olá! Gostaria de marcar uma visita ao Colégio Pércia.',
      '',
      'Origem: Website — Conheça em Vídeo (Página Inicial).',
      'Botão: Marcar uma visita.'
    ].join('\n'),

    // Página Sobre
    sobre_falar_colegio: [
      'Olá! Estive a conhecer o Colégio Pércia através do website e gostaria de obter mais informações.',
      '',
      'Origem: Website — Página Sobre.',
      'Botão: Falar com o Colégio.'
    ].join('\n'),

    // Página Programas
    programas_contactar: [
      'Olá! Consultei os programas educativos do Colégio Pércia e gostaria de obter mais informações.',
      '',
      'Origem: Website — Página Programas.',
      'Botão: Contactar o Colégio.'
    ].join('\n'),

    // Página Inscrições
    inscricoes_iniciar_matricula: [
      'Olá! Consultei a página de Inscrições do Colégio Pércia e gostaria de receber orientação sobre o processo de matrícula para 2027.',
      '',
      'Origem: Website — Página Inscrições.',
      'Botão: Iniciar Matrícula.'
    ].join('\n'),

    inscricoes_secretaria: [
      'Olá! Consultei a página de Inscrições do Colégio Pércia e gostaria de receber orientação sobre o processo de matrícula para 2027.',
      '',
      'Origem: Website — Página Inscrições.',
      'Botão: Contactar a secretaria pelo WhatsApp.'
    ].join('\n'),

    inscricoes_transporte: [
      'Olá! Gostaria de saber se existe transporte escolar para a minha zona.',
      '',
      'Origem: Website — Transporte Escolar (Página Inscrições).',
      'Botão: Consultar transporte.'
    ].join('\n'),

    // Página Contacto
    contacto_principal: [
      'Olá! Encontrei os contactos do Colégio Pércia através do website e gostaria de falar com a equipa.',
      '',
      'Origem: Website — Página Contacto.',
      'Botão: Contactar.'
    ].join('\n')
  };

  /**
   * Inicializa o rastreamento nos botões estáticos e flutuantes
   */
  function initTracker() {
    var page = getPageInfo();

    // 1. Configurar Botão Flutuante
    var floatingBtn = document.getElementById('whatsapp-floating-btn');
    if (floatingBtn) {
      floatingBtn.href = buildWhatsAppUrl(MESSAGES.floating(page.name));
      floatingBtn.addEventListener('click', function () {
        trackWhatsAppClick(page.key, 'botao_flutuante', 'informacoes');
      });
    }

    // 2. Intercetar cliques em todos os links directos para wa.me
    var waLinks = document.querySelectorAll('a[href*="wa.me"]');
    waLinks.forEach(function (link) {
      if (link.id === 'whatsapp-floating-btn') return; // já tratado

      link.addEventListener('click', function () {
        var btnId = link.getAttribute('data-wa-button') || link.id || 'link_whatsapp';
        var contactType = link.getAttribute('data-wa-type') || 'contacto_geral';
        var pageKey = link.getAttribute('data-wa-page') || page.key;
        trackWhatsAppClick(pageKey, btnId, contactType);
      });
    });
  }

  // API Global do Colégio Pércia para WhatsApp
  window.ColegioPerciaWA = {
    NUMBER: WHATSAPP_NUMBER,
    getPageInfo: getPageInfo,
    trackClick: trackWhatsAppClick,
    buildUrl: buildWhatsAppUrl,
    MESSAGES: MESSAGES
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracker);
  } else {
    initTracker();
  }
})();

