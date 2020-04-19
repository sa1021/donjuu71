(function($){
  $(function(){
$('#maa').hide();
$('.osinagaki').hide();

//＋、－、アコーディオン、どんじゅう
$('.charfive').click(function(){
  var $answer = $('.chartwo');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).find('span').text('+');
  }else{
    $answer.addClass('open');
    $answer.slideDown();
    $(this).find('span').text('-');
  }
});

//＋、－、アコーディオン、おしながき
$('.chartree').click(function(){
  var $answer = $('.charfour');
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).find('span').text('+');
  }else{
    $answer.addClass('open');
    $answer.slideDown();
    $(this).find('span').text('-');
  }
});

//メニュー開閉
$("header span").on("click", function() {
  var $mark = $('#maa');
  if($mark.hasClass('op')){
    $mark.removeClass('op');
    $(this).text('≡');
    $mark.fadeOut();
  }else{
    $mark.addClass('op');
    $(this).text('×');
    $mark.fadeIn();
  }
});

//飛びやナビゲート、どんじゅう
$('.chartwo').click(function(){
  $('.osinagaki').hide();
  $('.main').show();
  var $id = $(this).attr('href');
  var $position = $('id').offset().top;
  $('html,body').animate({
    'scrollTop' : $position
  } , slow);
});

//飛びやナビゲート、おしながき
$('.charfour').click(function(){
  $('.osinagaki').show();
  $('.main').hide();
  var $id = $(this).attr('href');
  var $position = $('id').offset().top;
  $('html,body').animate({
    'scrollTop' : $position
  } , slow);

});

//飛びやナビゲート、home
$('.homeb').click(function(){
  $('.osinagaki').hide();
  $('.main').show();
  var $id = $(this).attr('href');
  var $position = $('id').offset().top;
  $('html,body').animate({
    'scrollTop' : $position
  } , slow);
});

  });

})(jQuery);
