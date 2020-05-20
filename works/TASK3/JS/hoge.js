$(function(){
  //レスポンシブ時のナビボタン
  $('.h-nav-toggler').click(function(){
    $('.h-nav-toggler').toggleClass('collapse-switch');
    if($('.h-nav-toggler').hasClass('collapse-switch')){
      $('.h-nav').hide();
      $('#h-toggle-fa').removeClass("fa-times").addClass('fa-bars');
    }else{
      $('.h-nav').fadeIn(500);
      $('#h-toggle-fa').removeClass("fa-bars").addClass('fa-times');
    }
  });

  //スクロール矢印
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() > 350) {
      $('.is-flow').fadeIn(400);
      } else {
      $('.is-flow').fadeOut(400);
      }
  });

  // スライドショー
  // var $interval = 3000; // 切り替わりの間隔（ミリ秒）
  // var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）

  // $(".h-imagesbox :first-child").addClass("i-active").show();
  // setInterval(function(){
  //   var $active = $(".h-imagesbox :first-child.i-active");
  //   var $next = $active.next("img").length?$active.next("img") :$(".h-imagesbox :first-child");
  //   $active.fadeOut($fade_speed).removeClass("i-active");
  //   $next.fadeIn($fade_speed).addClass("i-active");
  // }, 2000);

  let $setImg = $(".h-imagesbox");
  let $interval = 5000; // 切り替わりの間隔（ミリ秒）
  let $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
  $($setImg).children('img').css({opacity: "0"});
  $($setImg).children('img:first').stop().animate({opacity:'1',zIndex:'20'},0);
  setInterval(function(){
    $($setImg).children('img:first').animate({opacity:'0'},$fade_speed).next('img').animate({opacity:'1'},$fade_speed).end().appendTo($setImg);
  },$interval);
});