$(function(){
  $('#mce-EMAIL').keyup(function(){
     if($.trim(this.value).length > 0)
         $('#submit-button').addClass('on')
      else
         $('#submit-button').removeClass('on')
  });
});
