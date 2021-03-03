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
    });
    $("#inputName"). submit(function(event){
alert(inputName + "we have received your message. Thank you for reaching out to us.")
event.preventDefault();
});
});