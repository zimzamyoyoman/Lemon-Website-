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

//  SCROLLMAGIC 

$(document).ready(function () {

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  var grid1 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.9
  })
    .setClassToggle('#grid1', 'fade-in')
    // .addIndicators({
    //   name: 'grid1',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var grid2 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.7
  })
    .setClassToggle('#grid2', 'fade-in')
    // .addIndicators({
    //   name: 'grid2',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var grid3 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.5
  })
    .setClassToggle('#grid3', 'fade-in')
    // .addIndicators({
    //   name: 'grid3',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var grid4 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.3
  })
    .setClassToggle('#grid4', 'fade-in')
    // .addIndicators({
    //   name: 'grid4',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var grid5 = new ScrollMagic.Scene({
    triggerElement: '#grid5',
    triggerHook: 0.9
  })
    .setClassToggle('#grid5', 'fade-in')
    // .addIndicators({
    //   name: 'grid5',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var grid6 = new ScrollMagic.Scene({
    triggerElement: '#grid5',
    triggerHook: 0.7
  })
    .setClassToggle('#grid6', 'fade-in')
    // .addIndicators({
    //   name: 'grid6',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var grid7 = new ScrollMagic.Scene({
    triggerElement: '#grid4',
    triggerHook: 0.5
  })
    .setClassToggle('#grid7', 'fade-in')
    // .addIndicators({
    //   name: 'grid7',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);


  var grid8 = new ScrollMagic.Scene({
    triggerElement: '#grid4',
    triggerHook: 0.3,
  })
    .setClassToggle('#grid8', 'fade-in')
    // .addIndicators({
    //   name: 'grid8',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var nicheBackground = new ScrollMagic.Scene({
    triggerElement: '#niche-trigger',
    triggerHook: 0.9
  })
    .setClassToggle('.niche', 'niche-background')
    // .addIndicators({
    //   name: 'niche-background',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

  var teamBackground = new ScrollMagic.Scene({
    triggerElement: '#team-trigger',
    triggerHook: 0.7

  })
    .setClassToggle('.team', 'team-background')
    // .addIndicators({
    //   name: 'niche-background',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller);

});

// SCROLLMAGIC FOR SKILLS SECTION

$(document).ready(function () {

  // Init ScrollMagic
  var controller2 = new ScrollMagic.Controller();

  var skillBackground = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.7
  })
    .setClassToggle('.skill', 'skill-background')
    // .addIndicators({
    //   name: 'skill-background',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS1 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.3
  })
    .setClassToggle('#skill-grid-1', 'skill-grid')
    // .addIndicators({
    //   name: 'skill-grid1',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS2 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.25
  })
    .setClassToggle('#skill-grid-2', 'skill-grid')
    // .addIndicators({
    //   name: 'skill-grid2',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS3 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.2
  })
    .setClassToggle('#skill-grid-3', 'skill-grid')
    // .addIndicators({
    //   name: 'skill-grid3',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS4 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.15
  })
    .setClassToggle('#skill-grid-4', 'skill-grid-h')
    // .addIndicators({
    //   name: 'skill-grid4',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS5 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.1
  })
    .setClassToggle('#skill-grid-5', 'skill-grid')
    // .addIndicators({
    //   name: 'skill-grid5',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS6 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.05
  })
    .setClassToggle('#skill-grid-6', 'skill-grid')
    // .addIndicators({
    //   name: 'skill-grid6',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS7 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0
  })
    .setClassToggle('#skill-grid-7', 'skill-grid')
    // .addIndicators({
    //   name: 'skill-grid7',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);

  var gridS8 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: -0.05
  })
    .setClassToggle('#skill-grid-8', 'skill-grid-h')
    // .addIndicators({
    //   name: 'skill-grid8',
    //   colorTrigger: 'black',
    //   indent: 500,
    //   colorStart: '#75C695'
    // })
    .addTo(controller2);


});

// SCROLLMAGIC FOR CLIENTS SECTION

$(document).ready(function () {

  // Init ScrollMagic
  var controller3 = new ScrollMagic.Controller();

  var clientBackground = new ScrollMagic.Scene({
    triggerElement: '#client-trigger',
    triggerHook: 0.9
  })
    .setClassToggle('.clients', 'client-background')
    // .addIndicators({
    //   name: 'client-background',
    //   colorTrigger: 'black',
    //   indent: 200,
    //   colorStart: '#75C695'
    // })
    .addTo(controller3);

  var gridC1 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.7,
    duration: '150%'
  })
    .setClassToggle('#client-grid-1', 'client-grid')
    .addTo(controller3);

  var gridC2 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-2',
    triggerHook: 0.65,
    duration: '150%'
  })
    .setClassToggle('#client-grid-2', 'client-grid')
    .addTo(controller3);

  var gridC3 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-3',
    triggerHook: 0.6,
    duration: '150%'
  })
    .setClassToggle('#client-grid-3', 'client-grid')
    .addTo(controller3);

  var gridC4 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.55,
    duration: '150%'
  })
    .setClassToggle('#client-grid-4', 'client-grid')
    .addTo(controller3);

  var gridC5 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.5,
    duration: '150%'
  })
    .setClassToggle('#client-grid-5', 'client-grid')
    .addTo(controller3);

  var gridC6 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.45,
    duration: '150%'
  })
    .setClassToggle('#client-grid-6', 'client-grid')
    .addTo(controller3);

  var gridC7 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.4,
    duration: '150%'
  })
    .setClassToggle('#client-grid-7', 'client-grid')
    .addTo(controller3);

  var gridC8 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.35,
    duration: '150%'
  })
    .setClassToggle('#client-grid-8', 'client-grid')
    .addTo(controller3);

  var gridC9 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.3,
    duration: '150%'
  })
    .setClassToggle('#client-grid-9', 'client-grid')
    .addTo(controller3);

  var gridC10 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.25,
    duration: '150%'
  })
    .setClassToggle('#client-grid-10', 'client-grid')
    .addTo(controller3);

  var gridC11 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.2,
    duration: '150%'
  })
    .setClassToggle('#client-grid-11', 'client-grid')
    .addTo(controller3);

  var gridC12 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.2,
    duration: '150%'
  })
    .setClassToggle('#client-grid-12', 'client-grid')
    .addTo(controller3);

  var gridC13 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.2,
    duration: '150%'
  })
    .setClassToggle('#client-grid-13', 'client-grid')
    .addTo(controller3);

  var gridC14 = new ScrollMagic.Scene({
    triggerElement: '#client-grid-1',
    triggerHook: 0.2,
    duration: '150%'
  })
    .setClassToggle('#client-grid-14', 'client-grid')
    .addTo(controller3);
});

// SCROLLING EFFECT FOR WORK SECTION

$(document).ready(function () {

  // Init ScrollMagic
  var controller3 = new ScrollMagic.Controller();

  var clientBackground = new ScrollMagic.Scene({
    triggerElement: '#work-trigger',
  })
    .setClassToggle('.work', 'work-background')
    .addTo(controller3);
});

// SCROLLING EFFECT FOR CONTACT SECTION

$(document).ready(function () {

  // Init ScrollMagic
  var controller4 = new ScrollMagic.Controller();

  var contactBackground = new ScrollMagic.Scene({
    triggerElement: '#contact-trigger',
  })
    .setClassToggle('.contact', 'contact-background')
    .addTo(controller4);
});

// FACTS SECTION CODE s

$(document).ready(function () {
  $("#next-arrow").click(function () {
    $(".fact-lemon-imgs").animate({
      left: '-=150px'
    }, 500, 'swing');
  });
});
$(document).ready(function () {
  $("#prev-arrow").click(function () {
    $(".fact-lemon-imgs").animate({
      left: '+=150px'
    }, 600, 'swing');
  });
});

//PINNING HOME SECTION

$(document).ready(function () {
  var controller5 = new ScrollMagic.Controller();

  var pinHome = new ScrollMagic.Scene({
    triggerElement: '#home',
    triggerHook: 0,
    duration: '300%'
  })
  .setPin('#home', {pushFollowers: false})
  .addTo(controller5);
});
