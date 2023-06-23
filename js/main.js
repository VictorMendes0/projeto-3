$(document).ready(function() {
    // Adiciona um evento de clique aos botões da navegação
    $('.nav-link').click(function() {
      // Remove a classe "show" de todas as abas
    $('.tab-pane').removeClass('show');
      // Adiciona a classe "d-none" a todas as abas
    $('.tab-pane').addClass('d-none');
      // Adiciona a classe "show" à aba selecionada
    $($(this).data('bs-target')).addClass('show');
      // Remove a classe "d-none" da aba selecionada
    $($(this).data('bs-target')).removeClass('d-none');
})});