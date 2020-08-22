// $(document).ready(function(){
//   $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll > 300) {
//       $(".navbar-scroll").css("background" , rgba(52, 58, 64, 0.5);
//     }

//     else{
//       $(".navbar-scroll").css("background" , "#333");   
//     }
//   })
// })

/* --------------- Text desappear --------------------*/
// var x = getElementsByClassName('hoveralim');
// x.onmouseover = function(Hide){
//   document.getElementById('disappear1').style.color = "white";
// };



//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function(){
  var navbar = $('.navbar');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 500){
      navbar.removeClass('nav-dropdown-scroll');
    } else {
      navbar.addClass('nav-dropdown-scroll');
    }
  });
});

/*------------------- HOVER ANIMATION SECTION 3-------------------*/

$('.hovereffect').mouseover(function() {
    $('#alim-hide').css("color","transparent");;
}).mouseout(function() {
    $('#alim-hide').css("color","black");;
});