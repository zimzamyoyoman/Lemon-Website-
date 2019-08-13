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

  var slideParallaxSceneNormal1 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '500%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-1', 1, { y: "-120%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonNormal1 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-normal-1', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneNormal2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '505%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-2', 1, { y: "-130%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonNormal2 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-normal-2', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneNormal3 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '525%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-3', 1, { y: "-140%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonNormal3 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-normal-3', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneNormal4 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '465%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-4', 1, { y: "-115%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonNormal4 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-normal-4', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneNormal5 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '425%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-5', 1, { y: "-110%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonNormal5 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-normal-5', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneNormal6 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '515%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-6', 1, { y: "-123%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonNormal6 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-normal-6', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneMiddle1 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '510%'
  })
    .setTween(TweenMax.from('.bcg-home-middle-1', 1, { y: "-130%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonMiddle1 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-middle-1', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneMiddle2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '465%'
  })
    .setTween(TweenMax.from('.bcg-home-middle-2', 1, { y: "-115%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonMiddle2 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-middle-2', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneMiddle3 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '445%'
  })
    .setTween(TweenMax.from('.bcg-home-middle-3', 1, { y: "-110%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonMiddle3 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-middle-3', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneMiddle4 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '435%'
  })
    .setTween(TweenMax.from('.bcg-home-middle-4', 1, { y: "-110%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonMiddle4 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-middle-4', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneMiddle5 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '515%'
  })
    .setTween(TweenMax.from('.bcg-home-middle-5', 1, { y: "-130%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonMiddle5 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-middle-5', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneBack1 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '425%'
  })
    .setTween(TweenMax.from('.bcg-home-back-1', 1, { y: "-110%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonBack1 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-back-1', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneBack2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '500%'
  })
    .setTween(TweenMax.from('.bcg-home-back-2', 1, { y: "-150%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonBack2 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-back-2', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneBack3 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '505%'
  })
    .setTween(TweenMax.from('.bcg-home-back-3', 1, { y: "-120%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonBack3 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-back-3', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneBack4 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '425%'
  })
    .setTween(TweenMax.from('.bcg-home-back-4', 1, { y: "-115%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonBack4 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-back-4', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneBack5 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '475%'
  })
    .setTween(TweenMax.from('.bcg-home-back-5', 1, { y: "-125%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonBack5 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-back-5', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneBack6 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '465%'
  })
    .setTween(TweenMax.from('.bcg-home-back-6', 1, { y: "-120%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonBack6 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-back-6', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra1 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '465%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-1', 1, { y: "-120%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra1 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-1', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '510%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-2', 1, { y: "-150%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra2 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-2', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra3 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '415%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-3', 1, { y: "-110%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra3 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-3', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra4 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '515%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-4', 1, { y: "-130%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra4 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-4', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra5 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '530%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-5', 1, { y: "-135%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra5 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-5', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra6 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '510%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-6', 1, { y: "-125%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra6 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-6', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra7 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '440%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-7', 1, { y: "-110%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra7 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-7', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra8 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '440%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-8', 1, { y: "-120%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra8 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-8', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneExtra9 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '480%'
  })
    .setTween(TweenMax.from('.bcg-home-extra-9', 1, { y: "-130%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonExtra9 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 1
  })
    .setClassToggle('.bcg-home-extra-9', 'bcg-home-out')
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


