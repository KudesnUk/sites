

$(document).ready(function(){
			 $('#scroller').hide();  
			//fade in/out based on scrollTop value
			$(window).scroll(function() {
				if ($(window).scrollTop() > 100) {
					$('#scroller').fadeIn();
				}else{
					$('#scroller').fadeOut();
					// alert ('hello word');
				}
			});
		 
			// scroll body to 0px on click
			$('#scroller').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 1000);
				return false;
			});
		});