// external js: isotope.pkgd.js

$('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
    }
  });

  

//LEMON PICTURE LIGHT UP

//NUMBER 1

$(".grid-item-1").on("mouseover", function(){
  $(".grid-lemons-2").attr("src", "../images/bright-lemon.jpg");
});

$(".grid-item-1").on("mouseleave", function(){
  $(".grid-lemons-2").attr("src", "../images/dull-lemon.jpg");
});  

  
//NUMBER 2

$(".grid-item-6").on("mouseover", function(){
  $(".grid-lemons-7").attr("src", "../images/bright-lemon.jpg");
});

$(".grid-item-6").on("mouseleave", function(){
  $(".grid-lemons-7").attr("src", "../images/dull-lemon.jpg");
}); 

//NUMBER 3

$(".grid-item-8").on("mouseover", function(){
  $(".grid-lemons-4").attr("src", "../images/bright-lemon.jpg");
});

$(".grid-item-8").on("mouseleave", function(){
  $(".grid-lemons-4").attr("src", "../images/dull-lemon.jpg");
}); 