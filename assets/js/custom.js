

$(document).ready(function(){

 // Start Humber Main Menu Icon Js
  $('.all-p-humber').click(function(){
         $(this).toggleClass('open');
     });
  //==== End Humber Main Menu Icon Js

  // menu js 
  $('.all-p-humber').click(function(){
    $('.menu_content').fadeToggle();
  });


  // hero slider js
  $('.home_project_slider').owlCarousel({
    loop:false,
    items: 1,
    margin:0,
    nav:true,
    dots: true,
    navText:
       ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],

    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});




$('html,body').animate({
  scrollTop:$($(this).attr('href')).offset().top
},1000);

// scroll js

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});







});







  // menu hover add class
  $( ".serive_images").hover(
    function() {
      $(this).addClass( "show" );
    },
     function() {
      $(this).removeClass( "show" );
    }
  );

  $(window).scroll(function(){

    var scrollValue = $(this).scrollTop();

    if(scrollValue>500){
      $('.back_top').fadeIn();
    }else{
       $('.back_top').fadeOut();
    }

    


  });



  const myDiv = document.getElementById("menu_logo");

// // Add class when hovering
myDiv.addEventListener("mouseover", function() {
  myDiv.classList.add("hovered");
});

// // Remove class when no longer hovering
myDiv.addEventListener("mouseout", function() {
  myDiv.classList.remove("hovered");
});


// Get the anchor element by its class
const leftAnchor = document.querySelector('.left_side');

// Add the "disabled" class to the anchor element
leftAnchor.classList.add('disabled');


