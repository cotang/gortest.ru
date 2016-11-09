// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

  $('.nav__link--dropdown').click(function(e) { 
      e.preventDefault();
      $(this).closest('.header').find('.menu-services').show();
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

  /* галерея "клиенты" */
  $('.clients__gallery').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  /* search */
  $('.social-links__link--search').click(function(e) { 
      e.preventDefault();    
      $('.search').show();
  });
  $('.search__close').click(function(e) { 
      e.preventDefault();    
      $('.search').hide();
  });

  /* плавный скролл наверх */
  $('.up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  /* sticky menu */
  var headerInner = $('.header__inner');
  var headerNav = $('.header__nav'); 
  var navList = $('.nav__list');
  var navItemLogo = $(navList).find('.nav__item--logo');  

  $(window).scroll(function () {
    if ($(window).width() > 768) {
      if ($(this).scrollTop() >= headerInner.height() ) {
        $(headerNav).addClass('header__nav--sticky');
        $(navList).addClass('nav__list--sticky');
        $(navItemLogo).show();
      } else {
        $(headerNav).removeClass('header__nav--sticky');
        $(navList).removeClass('nav__list--sticky');
        $(navItemLogo).hide();
      }
    }
  });

  /* hamburger */
  $('.hamburger').click(function(e) { 
      e.preventDefault();    
      $('.nav__wrapper').toggle();
  });


  /* 404 - sticky footer */
  // var footerHeight = $('.footer').outerHeight();
  // if ($(window).height() >= $('body').height()){
  //   $('body').addClass('body--full-screen');
  //   $('body').css('padding-bottom', footerHeight+'px');
  //   $('.footer').addClass('footer--stuck-to-bottom');
  // }


  var servicesBlock = $('.services__block');
  /* Цикл по всем блокам */
  $(servicesBlock).each(function(i, el){

      var servicesType = $(el).find('.services-type');
      var servicesTypeMinHeight = parseInt( $(servicesType).css('min-height'));  
      var servicesTitle = $(servicesType).find('.services-type__title');
      var currentHeight = $(servicesTitle).outerHeight();
          currentHeight = currentHeight + 10; /* margin-top у ul*/
      var servicesTypeList = $(servicesType).find('.services-type__list');
      var servicesTypeItem = $(servicesTypeList).find('.services-type__item'); 

      /* Скрытие элементов которые не влезают в 270px */
      $(servicesTypeItem).each(function(indx, element){          
        currentHeight+= $(element).outerHeight();  
        if (currentHeight > servicesTypeMinHeight) {
          $(element).hide();
        }        
      });

      /* Добавление строки 'Еще n услуг' */
      if (currentHeight > servicesTypeMinHeight) {
        $(servicesTypeList).find('.services-type__item:visible:last').hide();
        var numHidden = $(servicesTypeList).find('.services-type__item:hidden').length;
        var word;
        if (numHidden >= 11 && numHidden <= 20){ 
          word = 'услуг';
        } else {
          if (numHidden%10 == 1){
            word = 'услуга';
          } else if (numHidden%10 == 2 || numHidden%10 == 3 || numHidden%10 == 4){          
            word = 'услуги';
          } else {
            word = 'услуг';
          }
        }
        $('<li class="services-type__item services-type__item--more"><a class="services-type__link" href="#">Еще ' +numHidden+ ' ' +word+' </a></li>').appendTo($(servicesTypeList));
        /* Добавление строк по клику */
        var servicesMoreLink = $(servicesTypeList).find('.services-type__item--more .services-type__link');
        $(servicesMoreLink).click(function(e) { 
            e.preventDefault();
            $(this).closest('.services-type__list').find('.services-type__item:hidden').show();
            $(this).closest('.services-type__item--more').hide();
        });
      }

  });





    /* Map */
    var map = new GMaps({
        el: '.contacts__map',
        lat: 59.971198,
        lng: 30.315121,
        scrollwheel: false
    });
    map.drawOverlay({
        lat: 59.971198,
        lng: 30.315121,
        content: '<div class="pin"></div>'
    });

});

