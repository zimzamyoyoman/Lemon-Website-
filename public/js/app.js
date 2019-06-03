// external js: isotope.pkgd.js

// NICHE/SKILL/CLIENTS SECTION CODE
$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
  }
});

// WORK SECTION CODE 
$('.grid-w').isotope({
  itemSelector: '.grid-item-w',
  masonry: {
    gutter: 0
  }
});

//LEMON PICTURE LIGHT UP

//NUMBER 1

$(".grid-item-1").on("mouseover", function () {
  $(".grid-lemons-2").attr("src", "../images/bright-lemon.jpg");
});

$(".grid-item-1").on("mouseleave", function () {
  $(".grid-lemons-2").attr("src", "../images/dull-lemon.jpg");
});


//NUMBER 2

$(".grid-item-6").on("mouseover", function () {
  $(".grid-lemons-7").attr("src", "../images/bright-lemon.jpg");
});

$(".grid-item-6").on("mouseleave", function () {
  $(".grid-lemons-7").attr("src", "../images/dull-lemon.jpg");
});

//NUMBER 3

$(".grid-item-8").on("mouseover", function () {
  $(".grid-lemons-4").attr("src", "../images/bright-lemon.jpg");
});

$(".grid-item-8").on("mouseleave", function () {
  $(".grid-lemons-4").attr("src", "../images/dull-lemon.jpg");
});

//WORK SECTION JQUERY

var $grid = $('.grid-w').isotope({
  itemSelector: '.grid-item-w',
  masonry: {
  }
});

$(document).ready(function () {
  $(".grid-item-w").click(function () {
    alert("The grid item was clicked!");
    // create new item elements
    var $items = $('<div class="grid-item-w grid-item--width10-w grid-item--height10-w ad"> <button onclick="myFunction()">Try it</button> </div>');
    // append items to grid
    $grid.isotope('insert', $items)
  });
});

$grid.on( 'click', '.ad', function() {
  // remove clicked element
  $grid.isotope( 'remove', this )
    // layout remaining item elements
    .isotope('layout');
});


