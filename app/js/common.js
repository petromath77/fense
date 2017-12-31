$(function() {

  $('.grid').imagesLoaded( function() {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-item'
    });
  });
	
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
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      }
    });

});
