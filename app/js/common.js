$(function() {

	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 0
	});
	$('.value-percent').each(function() {
	  var dataValue = $(this).data('inner');
	  var dataCount = $(this).html("<span class='data_inner'>"+dataValue+"</span>");
	    $(this).animate({
	        width: dataValue
	    });
	});
});
