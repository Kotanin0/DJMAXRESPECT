(function () {

	'use strict';

	$("body").css("display", "none");
	$("body").fadeIn(2000);
	$("body").stop().animate({
	  opacity: 1
	});

	$('a[href^="#"]').click(function() {
	 var speed = 400;
	 var href = $(this).attr("href");
	 var target = $(href == "#" || href == "" ? 'html' : href);
	 var position = target.offset().top - 61;
	 $('body,html').animate({scrollTop:position}, speed, 'swing');
	 return false;
  });

}());
