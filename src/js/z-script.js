// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  $('.nav__link--dropdown').click(function(e) { 
      e.preventDefault();
      $(this).closest('.nav').find('.menu-services').show();
  });

  $('.menu-services__close').click(function(e) { 
      e.preventDefault();
      $(this).closest('.menu-services').hide();
  });

  var servicesMoreLink = $('.services-type__item--more .services-type__link');
  $(servicesMoreLink).click(function(e) { 
      e.preventDefault();
      $(this).closest('.services-type__item--more').hide();
      $(this).closest('.services-type__list').find('.services-type__item--hidden').show();
  });

  /* Faq accordion */
  $('.faq__ask').click(function(){
    if($(this).next('.faq__text').is(":visible")) {
      $(this).next('.faq__text').slideUp();
      $(this).closest('.faq__block').find('.faq__icon--active').removeClass('faq__icon--active');
    } else {
      $(this).closest('.faq').find('.faq__text').slideUp();
      $(this).siblings('.faq__text').slideDown();
      $(this).closest('.faq').find('.faq__icon--active').removeClass('faq__icon--active');
      $(this).closest('.faq__block').find('.faq__icon').addClass('faq__icon--active');
    }
  }); 




  // /* hamburger - product-type */
  // $('.hamburger').click(function(e) { 
  //     e.preventDefault();    
  //     $('.menu-dropdown--product-type').show();
  // });
  // /* menu - document-type */
  // $('.document-type-menu__link').click(function(e) { 
  //     e.preventDefault();    
  //     $('.menu-dropdown--document-type').show();
  // });
  // $('.menu-dropdown__close').click(function(e) { 
  //     e.preventDefault();
  //     $(this).closest('.menu-dropdown').hide();
  // });

  // /* Timeline - tabs */
  // $('.timeline__item').on('click', function() {
  //   $(this).closest('.timeline').find('.timeline__item').removeClass('timeline__item--active');
  //   $(this).addClass('timeline__item--active'); 
  //   var id = $(this).attr('class');
  //   var id = id.replace(/\D/g, "");
  //   var idText = '.timeline__description--' + id;
  //   $(this).closest('.timeline').find($('.timeline__description')).removeClass('timeline__description--active');   
  //   $(idText).addClass('timeline__description--active'); 
  // }); 

  // /* галерея "специалисты" */
  // $('.specialists__gallery').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 8000,
  //   centerMode: true,
  //   centerPadding: '0'
  // });

  // /* галерея "другие документы" */
  // $('.other-docs__gallery').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


  // /* галерея "другие документы" */
  // $('.gratitude__gallery').slick({
  //   infinite: true,
  //   arrows: false,
  //   dots: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // /* галерея "клиенты" */
  // $('.clients__gallery').slick({
  //   infinite: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // /* плавный скролл наверх */
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 102) {
  //     $('.up').fadeIn();
  //   } else {
  //     $('.up').fadeOut();
  //   }
  // });
  // $('.up').click(function () {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });

  // /* Form in the modal window */
  // $('.btn[data-form]').click( function(e){
  //   e.preventDefault(); 
  //   var suffix = $(this).data("form"); 
  //   var overlay = $('.overlay');
  //   $('body').css({"overflow":"hidden"});   
  //   $(overlay).show();
  //   var formClass = '.form--' + suffix;
  //   $(overlay).find(formClass).fadeIn();    
  // });
  // /* Close the modal window */
  // $('.form__close').click( function(e){ 
  //   e.preventDefault();
  //   var overlay = $('.overlay'); 
  //   $('body').css({"overflow":"auto"});
  //   $(overlay).find(".form").fadeOut();
  //   $(overlay).fadeOut(400);
  // });

  // /* Название документа в блоке Compulsory docs в textarea в всплывающей форме */
  // $('.compulsory-docs .btn').click(function(){
  //     var doc = $(this).closest('.compulsory-docs__item').find('.compulsory-docs__caption').text();
  //     $('.overlay .form--application .form__textarea').text(doc);
  // });

  // /* Значение data-id в блоке branches в textarea в всплывающей форме */
  // $('.btn--branches').click(function(){
  //     var value = $(this).data('id');
  //     $('.overlay .form--application .form__textarea').text("Пакет документов для отрасли: "+value);
  // });

  // /* одинаковая высота у promo__title */
  // var promoTitleMaxHeight = 0;
  // var promoTitleItem = $(".promo__title");
  // $(promoTitleItem).each(function(){
  //  if ( $(this).height() > promoTitleMaxHeight ) 
  //  {
  //   promoTitleMaxHeight = $(this).height();
  //  }
  // });
  // $(promoTitleItem).height(promoTitleMaxHeight);
  // /* одинаковая высота у promo__text */
  // var promoTextMaxHeight = 0;
  // var promoTextItem = $(".promo__text");
  // $(promoTextItem).each(function(){
  //  if ( $(this).height() > promoTextMaxHeight ) 
  //  {
  //   promoTextMaxHeight = $(this).height();
  //  }
  // });
  // $(promoTextItem).height(promoTextMaxHeight);

  // /* Review in the modal window */
  // $('.reviews__img').click( function(e){ 
  //   e.preventDefault(); 
  //   $('body').css({"overflow":"hidden"});   
  //   $('.overlay').show();
  //   $(this).closest('.reviews__slide').find('.reviews__modal').clone().appendTo($('.overlay'))
  //   .show()
  //   .animate({opacity: 1}, 200); 
  // });
  // /* Close the modal window */
  // $('.overlay').click( function(){ 
  //   $('body').css({"overflow":"auto"});
  //   $(this).find('.reviews__modal')
  //     .animate({opacity: 0}, 200,  
  //       function(){
  //         $(this).hide();
  //         $('.overlay').fadeOut(400);
  //       }
  //     );
  // }); 

  // /* галерея "отзывов" */
  // $('.reviews__gallery').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0', 
  //   variableWidth: true,     
  //   responsive: [
  //     {
  //       breakpoint: 1040,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });


  // /* плавный скролл в page-reviews */
  // $('.page--reviews .content__link').click(function(e){
  //     e.preventDefault();
  //     var el = $(this).attr('href');
  //     $('body').animate({
  //     scrollTop: $(el).offset().top}, 500);
  //     return false;
  // });



});

