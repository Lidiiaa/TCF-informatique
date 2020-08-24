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


 /*---------scrollspy--------*/

 // $('body').scrollspy({ target: '.navbar' });
//Change pos/background/padding/add shadow on nav when scroll event happens 



$(function(e){
  var navbar = $('.navbarscroll');
  
  $(window).scroll(function(){
    if($(window).scrollTop() <= 500){
      navbar.removeClass('nav-dropdown-scroll');
     
    } else {
      
      navbar.addClass('nav-dropdown-scroll');
    }
  });
});

/*------------------- HOVER ANIMATION SECTION 3-------------------*/


$(document).ready(function()
{          
    $(".hovereffect").hover(function(){
        $(this).find(".r1").css("color","transparent")},
        function () {
        $(this).find(".r1").css("color",'#593459')
    });
});



/* ---------------------------Change icon animation ----------------------*/

$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});