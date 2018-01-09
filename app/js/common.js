$(function() {

  $('#menu').slicknav({
      prependTo:'nav',
      parentTag:'div',
  });

  $('.menu li a').mPageScroll2id();

  $('nav.menu li a').on('click', function(){
    $('nav.menu li a').removeClass('active_a');
    $(this).addClass('active_a');
  });

  $('.slicknav_menu li a').mPageScroll2id();

  $('.slicknav_nav li a').on('click', function(e){  
    $('.slicknav_nav a').removeClass('active_a');
    $(this).addClass('active_a');
  });

  //$('.grid').imagesLoaded( function() {
   // $('.grid').masonry({
      // options
     // itemSelector: '.grid-item',
     // columnWidth: '.grid-item'
    //});
 // });
	
	$('.value-percent').each(function() {
	  var dataValue = $(this).data('inner');
	  var dataCount = $(this).html("<span class='data_inner'>"+dataValue+"</span>");
	    $(this).animate({
	        width: dataValue
	    });
	});
  var swiper1 = new Swiper('.team_cont', {
      autoplay: {
        delay: 3500,
          disableOnInteraction: false,
       },
      centeredSlides: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });
  var swiper2 = new Swiper('.testims_wrap', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
	var swiper3 = new Swiper('.news_wrapper', {
      spaceBetween: 30,
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      //autoplay: {
      //delay: 3500,
      //disableOnInteraction: false,
     // }
    });

    $('.portfolio_items').mixItUp();

    $('.more').magnificPopup({
      type: 'inline',
      showCloseBtn: true
    });
    $('.swiper-slide').each(function(i){
      $(this).find('a').attr('href', '#news_' + i);
      $(this).find('.news_popup_wrap').attr('id', 'news_' + i);
    });

    $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

////////////////////////////////////////custom scripts 

  $(window).on('scroll', function(){
    if(scrollY > 90){
      $('.menu_wrap').css({
        'background': 'rgba(0,0,0,.8)'
      });
    }else{
      $('.menu_wrap').css({
        'background': 'transparent'
      });
    }
  });
  $('.arrow_down').on('click', function(){
    $('html, body').animate({ scrollTop: 650}, 700, 'linear');
  });
/////////////////////////////////////
  $('.portf_menu li').on('click', function(){
    $('.item_wrap').css({
      'float': 'left',
      'margin': '0 0 0'
    });
     $('.portf_menu li').removeClass('active_li');
     $(this).addClass('active_li');
  });
  $('#all').on('click', function(){
    $('.item_wrap').css({
      'float': 'none',
      'margin': '0 0 .5em'
    });
  });
/////////////////////////////////////


});
