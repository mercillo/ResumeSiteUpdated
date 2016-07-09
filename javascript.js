
$(document).ready(function(){
  $('body') .stratus({
      key: "f5acea118fd7ee7d176eb243ac2c7fe2",
      links: "https://soundcloud.com/marky-ercillo/new-year-new-mix-2016"
    });
  $('.report-card.treehouse').reportCard({
      userName: 'marlonercillo2',
      site: 'treehouse',
      badgesAmount: 7
  });

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
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('googleMap'), {
          center: {lat: 33.6811755, lng: -117.7989647},
          zoom: 8
        });
    }

    var treehouseData = function(){
      var url="https://teamtreehouse.com/marlonercillo2.json";

          $.getJSON(url,function(data){
            
            $("#name").html(data.name);
            $("#avatar").html("<img src="+data.gravatar_url+"></img>")
            $("#badges").html("Badges: "+data.badges.length);
            for(subject in data.points){
              var html="";
              html += "<li>"+subject+ ": "+data.points[subject]+"</li>";
              console.log(html);
              //$("#subjects").append(html);
            }
 
        });
    }
    initMap();
    treehouseData();


});


