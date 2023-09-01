$(function () {
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed');
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });
  });
$(window).load(function() { // Garante que todo o site seja carregado
    $('#preloader').delay(350).fadeOut('slow'); // desaparecerá o DIV branco que cobre o site.
})
  