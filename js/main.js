$(function (){

	$('.hamburger, .cross').on('click', function(){
		// show/hide menu
		$(this).parent().siblings('.menu').slideToggle();

		// show/hide cross/hamburger
		$(this).toggle();

		if ($(this).hasClass('hamburger')) {
			$(this).siblings('.cross').toggle();
		} else {
			$(this).siblings('.hamburger').toggle();		
		}
	});	

	// hide menu when a href is clicked
	$('.menu > ul').on('click', function() {
		$('.menu').hide();
		$('.cross').hide();
		$('.hamburger').show();
	});


	//click to expand job description
	$('.job.default, .job.open, .plus, .minus').on('click', function(){

		// open job description
		$(this).closest('.work-experience-items').find('.job-desc').slideToggle();

		if ($(this).hasClass('default')) {
			$(this).removeClass('default');
			$(this).addClass('open');
			$(this).siblings('.switcher').find('.plus').hide();
			$(this).siblings('.switcher').find('.minus').show();
		}  

		else if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).addClass('default');

			$(this).siblings('.switcher').find('.minus').hide();
			$(this).siblings('.switcher').find('.plus').show();
		}


		if ($(this).hasClass('plus') || $(this).hasClass('minus')) {
			$(this).toggle();

			if ($(this).hasClass('minus')) {
				$(this).siblings('.plus').toggle();	
			} else {
				$(this).siblings('.minus').toggle();
			}	
		}
	});


// timeline interactivity

	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
	    rect.top >= 0 &&
	    rect.left >= 0 &&
	    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}

	// add class when in view
	var timelineitems = document.querySelectorAll(".timeline li");
	var skillsitems = document.querySelectorAll(".skills li")

	// code for the isElementInViewport function
	 
	function callbackFunc() {
	  for (var i = 0; i < timelineitems.length; i++) {
	    if (isElementInViewport(timelineitems[i])) {
	      timelineitems[i].classList.add("in-view");
	    }
	  }
	 
	  for (var i = 0; i < skillsitems.length; i++) {
	    if (isElementInViewport(skillsitems[i])) {
	      skillsitems[i].classList.add("in-view");
	    }
	  }
	}
		 
	window.addEventListener("load", callbackFunc);
	window.addEventListener("scroll", callbackFunc);


	//check window size
	// function checkWindowSize() {
	// 	if ($(window).innerWidth() < 753) {
	// 		$('nav').hide();
	// 	} else {
	// 		$('nav').show();
	// 	}
	// }

	// checkWindowSize();

	// $(window).resize(function (){
	// 	checkWindowSize();
	// });


});