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

// PARALLAX SCROLLING

// var controller = new ScrollMagic.Controller();

// $(function () { // wait for document ready
//   // build scene
//   var scene = new ScrollMagic.Scene({ triggerElement: "#pin2" })
//     .setPin("#pin2")
//     .addIndicators({ name: "2 (duration: 0)" }) // add indicators (requires plugin)
//     .addTo(controller);
// });

//  SCROLLMAGIC FOR NICHE SECTION 

$(document).ready(function () {

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  var grid1 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.9
  })
    .setClassToggle('#grid1', 'fade-in')
    .addIndicators({
      name: 'grid1',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

  var grid2 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.7
  })
    .setClassToggle('#grid2', 'fade-in')
    .addIndicators({
      name: 'grid2',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

  var grid3 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.5
  })
    .setClassToggle('#grid3', 'fade-in')
    .addIndicators({
      name: 'grid3',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

  var grid4 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.3
  })
    .setClassToggle('#grid4', 'fade-in')
    .addIndicators({
      name: 'grid4',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

  var grid5 = new ScrollMagic.Scene({
    triggerElement: '#grid5',
    triggerHook: 0.9
  })
    .setClassToggle('#grid5', 'fade-in')
    .addIndicators({
      name: 'grid5',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

  var grid6 = new ScrollMagic.Scene({
    triggerElement: '#grid5',
    triggerHook: 0.7
  })
    .setClassToggle('#grid6', 'fade-in')
    .addIndicators({
      name: 'grid6',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

  var grid7 = new ScrollMagic.Scene({
    triggerElement: '#grid4',
    triggerHook: 0.5
  })
    .setClassToggle('#grid7', 'fade-in')
    .addIndicators({
      name: 'grid7',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);


  var grid8 = new ScrollMagic.Scene({
    triggerElement: '#grid4',
    triggerHook: 0.3
  })
    .setClassToggle('#grid8', 'fade-in')
    .addIndicators({
      name: 'grid8',
      colorTrigger: 'black',
      indent: 200,
      colorStart: '#75C695'
    })
    .addTo(controller);

});