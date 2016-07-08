
$(document).ready(function(){


  $(".contentContainer").css("min-height", $(window).height());
 
  $(".workSlide").addClass("hideMe").viewportChecker({
      classToAdd: 'visible animated slideInUp',
      offset:100
     //console.log("js working");
    });

  $(".fadeLeft").addClass("hideMe").viewportChecker({
      classToAdd: 'visible animated fadeInLeft',
      offset:100
  });

   $('.aboutHover').hover(
   		function(){
   			$(this).find('.caption').show();
   		},
   		function(){
   			$(this).find('.caption').hide();
   		}
   	);

    $('.portfolio-caption').hover(
     	function(){
     		$(this).find('.caption').show();
     	},
     	function(){
     		$(this).find('.caption').hide();
     	}
     ); 

    $('.carousel').carousel({
        interval: 5000 //changes the speed
    })
});


