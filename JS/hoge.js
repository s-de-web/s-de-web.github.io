// let sildeNumber = document.getElementById("my-works").childElementCount;
let swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 0,
    initialSlide: 0,
    centeredSlides : true,
    slidesPerView: 1,
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
    },
    on: {
        slideChange: function () {
        // $('.m__w-s-content').hide(0);
        $('.m__w-swip-content').animate({ opacity: 0 }, { duration: 0, easing: 'linear' });
        $('.swiper-slide').removeClass('swiper-active');
        realIndex = this.realIndex + 1;
        // $('.m__w-s-content-' + realIndex).show(1000);
        $('.m__w-swip-content-' + realIndex).animate({ opacity: 1 }, { duration: 1000, easing: 'linear' });
        $('.swiper-slide-' + realIndex).addClass('swiper-active');
        },
    },
});

jQuery(document).ready(function($) {
    //600px以上の場合
    if (window.matchMedia( '(min-width: 768px)' ).matches) {

    //600px以下の場合
    } else {
        $(function(){
            $('.js-contents-open').each(function(){
                $(this).on('click',function(){
                    $('.m__srv-boxes').find('.mobile-collapse').slideUp();
                    let target = $(this).data('target');
                    let contents = document.getElementById(target);
                    $(contents).slideDown();
                    return false;
                });
            });
        });
        $('.h-list').click(function(){
            $('.h-nav-toggler').toggleClass('collapse-switch');
            $('.h-nav').hide();
            $('#h-toggle-fa').removeClass("fa-times").addClass('fa-bars');
        });
    };
});

/*ヘッダーレスポンシブ時のnav*/
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






$(window).on('load scroll', function(){
    /*topに戻るボタン*/
    if ($(window).scrollTop() > 350) {
      $('.is-flow').fadeIn(400);
    } else {
      $('.is-flow').fadeOut(400);
    }
    /*スクロールでnav表示*/
    let jumBottom = $('.jumbotron-extend').height();
    if ($(window).scrollTop() > jumBottom) {
        $('.change-title').addClass('show-top');
    } else {
        $('.change-title').removeClass('show-top');
        $('.change-nav-toggler').toggleClass('collapse-switch');
        $('.change-nav').hide();
        $('#change-toggle-fa').removeClass("fa-times").addClass('fa-bars');
    }
});

/*スクロールで出るnav*/
$('.change-nav-toggler').click(function(){
    $('.change-nav-toggler').toggleClass('collapse-switch');
    if($('.change-nav-toggler').hasClass('collapse-switch')){
      $('.change-nav').hide();
      $('#change-toggle-fa').removeClass("fa-times").addClass('fa-bars');
    }else{
      $('.change-nav').fadeIn(500);
      $('#change-toggle-fa').removeClass("fa-bars").addClass('fa-times');
    }
});

$('.change-list').click(function(){
    $('.change-nav-toggler').toggleClass('collapse-switch');
    $('.change-nav').hide();
    $('#change-toggle-fa').removeClass("fa-times").addClass('fa-bars');
});