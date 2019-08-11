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

  var slideParallaxSceneHome = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '500%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-1', 1, { y: "-120%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonHome = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 0.9
  })
    .setClassToggle('.bcg-home-normal-1', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneHome2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '505%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-2', 1, { y: "-125%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonHome2 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 0.9
  })
    .setClassToggle('.bcg-home-normal-2', 'bcg-home-out')
    .addTo(controller);

  var slideParallaxSceneHome3 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax-home',
    triggerHook: 1,
    duration: '512%'
  })
    .setTween(TweenMax.from('.bcg-home-normal-3', 1, { y: "-130%", ease: Power0.easeNone }))
    .addTo(controller);

  var lemonHome3 = new ScrollMagic.Scene({
    triggerElement: '#lemonHome-trigger',
    triggerHook: 0.9
  })
    .setClassToggle('.bcg-home-normal-3', 'bcg-home-out')
    .addTo(controller);

    var slideParallaxSceneHome4 = new ScrollMagic.Scene({
      triggerElement: '.bcg-parallax-home',
      triggerHook: 1,
      duration: '465%'
    })
      .setTween(TweenMax.from('.bcg-home-normal-4', 1, { y: "-115%", ease: Power0.easeNone }))
      .addTo(controller);
  
    var lemonHome4 = new ScrollMagic.Scene({
      triggerElement: '#lemonHome-trigger',
      triggerHook: 0.9
    })
      .setClassToggle('.bcg-home-normal-4', 'bcg-home-out')
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


