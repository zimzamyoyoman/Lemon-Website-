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
    .addTo(controller);

  var grid2 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.7
  })
    .setClassToggle('#grid2', 'fade-in')
    .addTo(controller);

  var grid3 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.5
  })
    .setClassToggle('#grid3', 'fade-in')
    .addTo(controller);

  var grid4 = new ScrollMagic.Scene({
    triggerElement: '#niche-scroll',
    triggerHook: 0.3
  })
    .setClassToggle('#grid4', 'fade-in')
    .addTo(controller);

  var grid5 = new ScrollMagic.Scene({
    triggerElement: '#grid5',
    triggerHook: 0.9
  })
    .setClassToggle('#grid5', 'fade-in')
    .addTo(controller);

  var grid6 = new ScrollMagic.Scene({
    triggerElement: '#grid5',
    triggerHook: 0.7
  })
    .setClassToggle('#grid6', 'fade-in')
    .addTo(controller);

  var grid7 = new ScrollMagic.Scene({
    triggerElement: '#grid4',
    triggerHook: 0.5
  })
    .setClassToggle('#grid7', 'fade-in')
    .addTo(controller);


  var grid8 = new ScrollMagic.Scene({
    triggerElement: '#grid4',
    triggerHook: 0.3,
  })
    .setClassToggle('#grid8', 'fade-in')
    .addTo(controller);

  // parallax scene
  var slideParallaxSceneNiche = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '300%'
  })
    .setTween(TweenMax.from('.bcg', 1, { y: '70%', ease: Power0.easeNone }))
    .addTo(controller);

  var slideParallaxSceneTeam = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-team',
    triggerHook: 1,
    duration: '200%'
  })
    .setTween(TweenMax.from('.bcg-team', 1, { y: '80%', ease: Power0.easeNone }))
    .addTo(controller);

  var slideParallaxSceneTeam2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-team',
    triggerHook: 1,
    duration: '200%'
  })
    .setTween(TweenMax.from('.bcg-team2', 1, { y: '40%', ease: Power0.easeNone }))
    .addTo(controller);

  var slideParallaxSceneSkill = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-skill',
    triggerHook: 1,
    duration: '220%'
  })
    .setTween(TweenMax.from('.bcg-skill', 1, { y: '80%', ease: Power0.easeNone }))
    .addTo(controller);

  var slideParallaxSceneWork = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-work',
    triggerHook: 1,
    duration: '250%'
  })
    .setTween(TweenMax.from('.bcg-work', 1, { y: '40%', ease: Power0.easeNone }))
    .addTo(controller);

});

// SCROLLMAGIC FOR SKILLS SECTION

$(document).ready(function () {

  // Init ScrollMagic
  var controller2 = new ScrollMagic.Controller();

  var gridS1 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.3
  })
    .setClassToggle('#skill-grid-1', 'skill-grid')
    .addTo(controller2);

  var gridS2 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.25
  })
    .setClassToggle('#skill-grid-2', 'skill-grid')
    .addTo(controller2);

  var gridS3 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.2
  })
    .setClassToggle('#skill-grid-3', 'skill-grid')
    .addTo(controller2);

  var gridS4 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.15
  })
    .setClassToggle('#skill-grid-4', 'skill-grid-h')
    .addTo(controller2);

  var gridS5 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.1
  })
    .setClassToggle('#skill-grid-5', 'skill-grid')
    .addTo(controller2);

  var gridS6 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0.05
  })
    .setClassToggle('#skill-grid-6', 'skill-grid')
    .addTo(controller2);

  var gridS7 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: 0
  })
    .setClassToggle('#skill-grid-7', 'skill-grid')
    .addTo(controller2);

  var gridS8 = new ScrollMagic.Scene({
    triggerElement: '#skill-trigger',
    triggerHook: -0.05
  })
    .setClassToggle('#skill-grid-8', 'skill-grid-h')
    .addTo(controller2);
});

//PINNING HOME SECTION

$(document).ready(function () {
  var controller5 = new ScrollMagic.Controller();

  var pinHome = new ScrollMagic.Scene({
    triggerElement: '#home',
    triggerHook: 0,
    duration: '180%'
  })
    .setPin('#home', { pushFollowers: false })
    .addTo(controller5);
});

//PARALLAX SCENE


$(document).ready(function () {

  var controllerContact = new ScrollMagic.Controller();

  var slideParallaxSceneContact = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-contact',
    triggerHook: 1,
    duration: '250%'
  })
    .setTween(TweenMax.from('.bcg-contact', 1, { y: '30%', ease: Power0.easeNone }))
    .addTo(controllerContact);

  var slideParallaxSceneContact2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-contact',
    triggerHook: 1,
    duration: '250%'
  })
    .setTween(TweenMax.from('.bcg-contact2', 1, { y: '40%', ease: Power0.easeNone }))
    .addTo(controllerContact);

  var slideParallaxSceneContact3 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-contact',
    triggerHook: 1,
    duration: '250%'
  })
    .setTween(TweenMax.from('.bcg-contact3', 1, { y: '80%', ease: Power0.easeNone }))
    .addTo(controllerContact);
});

$(function () { // wait for document ready
  var flightpath = {
    entry: {
      // curviness: 1.25,
      // autoRotate: true,
      values: [
        { x: 0, y: 0 },
        { x: 0, y: 10 },
        { x: 0, y: 20 },
        { x: 0, y: 30 },
        { x: 0, y: 40 },
        { x: 0, y: 50 },
        { x: 0, y: 60 },
        { x: 0, y: 70 },
        { x: 0, y: 80 },
        { x: 0, y: 90 }
      ]
    },
    looping: {
      values: [
        { x: 0, y: 100 },
        { x: 0, y: 110 },
        { x: 0, y: 120 },
        { x: 0, y: 130 },
        { x: 0, y: 140 },
        { x: 0, y: 150 },
        { x: 0, y: 160 },
        { x: 0, y: 170 },
        { x: 0, y: 180 },
        { x: 0, y: 190 },
        { x: 0, y: 200 },
        { x: 0, y: 210 },
        { x: 0, y: 220 },
        { x: 0, y: 230 },
        { x: 0, y: 240 },
        { x: 0, y: 250 },
        { x: 0, y: 260 },
        { x: 0, y: 270 },
        { x: 0, y: 280 },
        { x: 0, y: 290 },
        { x: 0, y: 300 },
        { x: 0, y: 310 },
        { x: 0, y: 320 },
        { x: 0, y: 330 },
        { x: 0, y: 340 },
        { x: 0, y: 350 },
        { x: 0, y: 360 },
        { x: 0, y: 370 },
        { x: 0, y: 380 },
        { x: 0, y: 390 },
        { x: 0, y: 400 },
        { x: 0, y: 410 },
        { x: 0, y: 420 },
        { x: 0, y: 430 },
        { x: 0, y: 440 },
        { x: 0, y: 450 },
        { x: 0, y: 460 },
        { x: 0, y: 470 },
        { x: 0, y: 480 },
        { x: 0, y: 490 },
        { x: 0, y: 500 },
        { x: 0, y: 510 },
        { x: 0, y: 520 },
        { x: 0, y: 530 },
        { x: 0, y: 540 },
        { x: 0, y: 550 },
        { x: 0, y: 560 },
        { x: 0, y: 570 },
        { x: 0, y: 580 },
        { x: 0, y: 590 },
        { x: 0, y: 600 },
        { x: 0, y: 610 },
        { x: 0, y: 620 },
        { x: 0, y: 630 },
        { x: 0, y: 640 },
        { x: 0, y: 650 },
        { x: 0, y: 660 },
        { x: 0, y: 670 },
        { x: 0, y: 680 },
        { x: 0, y: 690 },
        { x: 0, y: 700 },
        { x: 0, y: 710 },
      ]
    },
    leave: {
      // curviness: 1,
      // autoRotate: true,
      values: [
        { x: 0, y: 720 },
        { x: 0, y: 730 },
        // {x: $(window).width() + 300,	y: -100},
      ]
    }
  };
  // init controller
  var controllerP = new ScrollMagic.Controller();

  // create tween
  var tween = new TimelineMax()
    .add(TweenMax.to($("#plane"), 3, { css: { bezier: flightpath.entry }, ease: Power1.easeInOut }))
    .add(TweenMax.to($("#plane"), 3, { css: { bezier: flightpath.looping }, ease: Power1.easeInOut }))
    .add(TweenMax.to($("#plane"), 3, { css: { bezier: flightpath.leave }, ease: Power1.easeInOut }));


  // build scene
  var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 1000, offset: 400 })
    .setPin("#target")
    .setTween(tween)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controllerP);



});
