$(document).ready(function() {
$(".click1"). click(function(){
  $(".show1").toggle();
  $(".hide1").toggle();
});

$(".click2"). click(function(){
    $(".show2").toggle();
    $(".hide2").toggle();
  });

$(".click3"). click(function(){
  $(".show3").toggle();
  $(".hide3").toggle();
    });

    $(".col-3").hover(function(){
      $(this)("background-color", "white");
      }, function(){
        $('.col-3').fadeIn(500);
      
    });

    $(".img.fluid").hover(function(){
      $('.col-3').fadeIn(500);
    });
  });  
