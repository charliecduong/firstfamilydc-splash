$(function(){
  $('.mce-last').keyup(function(){
     if($.trim(this.value).length > 0)
         $('#submit-button').addClass('on')
      else
         $('#submit-button').removeClass('on')
  });
});

$(function(){
  window.sr = ScrollReveal();
  sr.reveal('#content');
  sr.reveal('#input-container');
  sr.reveal('.quote');
  sr.reveal('#footer');
});
