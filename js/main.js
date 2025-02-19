

function swiperCode() {

  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "cube", //add(make slider cube
    grabCursor: true, //add(grab cursor
    speed: 1500,
    autoplay: {
      delay: 17000,
      disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // If you need pagination
    on: {
      slideChange: function () {
        const index_currentSlide = this.realIndex;
        var row1;
        var row2;
        var row3;
        var row4;

        if (index_currentSlide === 0) {
          row1 = '';
          row1 = row1 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row1 = row1 + '<span class="loaderSwipe"></span>';
          row1 = row1 + '</div>';
          $('#slide1').html(row1);
          setTimeout(slide1, 1500);
        } else if (index_currentSlide === 1) {
          row2 = '';
          row2 = row2 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row2 = row2 + '<span class="loaderSwipe"></span>';
          row2 = row2 + '</div>';
          $('#slide2').html(row2);
          setTimeout(slide2, 1500);
        } else if (index_currentSlide === 2) {
          row3 = '';
          row3 = row3 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row3 = row3 + '<span class="loaderSwipe"></span>';
          row3 = row3 + '</div>';
          $('#slide3').html(row3);
          setTimeout(slide3, 1500);
        } else if (index_currentSlide === 3) {
          row4 = '';
          row4 = row4 + '<div style="position: absolute; top: 0; left: 0; width: 300px; height: 250px; background: white; display: flex; justify-content: center; align-items: center;">';
          row4 = row4 + '<span class="loaderSwipe"></span>';
          row4 = row4 + '</div>';
          $('#slide4').html(row4);
          setTimeout(slide4, 1500);
        } else {
          alert('something went wrong');
        }

        function slide1() {
          row1 = row1 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/1/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide1').html(row1);
        }

        function slide2() {
          row2 = row2 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/2/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide2').html(row2);
        }

        function slide3() {
          row3 = row3 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/3/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide3').html(row3);
        }

        function slide4() {
          row4 = row4 + '<iframe style="position: absolute; top: 0; left: 0;" src="cube/300x250/4/index.html" frameborder="0" width="300" height="250"></iframe>';
          $('#slide4').html(row4);
        }
      },
    },
  });

}



const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Ads Section Snap Animation 



function serviceCode() {

  gsap.registerPlugin(ScrollTrigger);


  gsap.from(".displayAd__head", {
      x: '20%',
      y: '15%',
      stagger: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".displayAd",
        start: "top 80%",
        // end: "top 30vh",
        // scrub: true,
        toggleActions: "play none none none",
      },
      
  });

  var dynamicTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".dynamicAd",
      start: "top 80%",
      // end: "top center",
      // scrub: true,
      toggleActions: "play none none none",
    }
  })

  dynamicTl
  .from(".dynamicAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  // gsap.from(".dynamicAd__head", {

      
  // });
  .to(".dynamicAd__images--one__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: 'power2.out'})
  .to(".dynamicAd__ams--arrow", { duration: 0.2, opacity: 1, ease: 'power2.out'}, '-=0.1')
  .to(".dynamicAd__ams--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: 'power2.inOut'}, '-=0.1')

  .to(".dynamicAd__images--two__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: 'power2.out'}, '-=0.1')
  .to(".dynamicAd__rot--arrow", { duration: 0.2, opacity: 1, ease: 'power2.out'}, '-=0.1')
  .to(".dynamicAd__rot--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: 'power2.inOut'}, '-=0.1')

  .to(".dynamicAd__images--three__dot", { duration: 0.3, opacity: 1, stagger: 0.1, ease: 'power2.out'}, '-=0.1')
  .to(".dynamicAd__den--arrow", { duration: 0.2, opacity: 1, ease: 'power2.out'}, '-=0.1')
  .to(".dynamicAd__den--pic", { duration: 0.4, opacity: 1, rotationY: 0, ease: 'power2.inOut'}, '-=0.1')



  // gsap.from(".swipe_hand", {
  //   rotation: '15deg',
  //   duration: 0.6,
  //   repeatDelay: 0.3,
  //   repeat: 4,
  //   scrollTrigger: {
  //     trigger: ".displayAd",
  //     start: "top center",
      // end: "top 30vh",
      // scrub: true,
  //     toggleActions: "restart none none none",
  //   }
  // });

  let video = document.querySelector('.weboramaAd__bg--content');
  let video1 = document.querySelector('.video-one');
  let video2 = document.querySelector('.video-two');
  let video3 = document.querySelector('.video-three');
  let apto = document.getElementById('apto');
  let interstial = document.getElementById('interstial');
  let swipeCubeWeb = document.getElementById('swipeCubeWeb');


  video.pause();
  function videoPlayPause() {
    if (!video.play()) {
      video1.play();
      video1.addEventListener('ended', function myHandler1() {
          video2.play();
          video1.style.display = 'none';
          video3.style.display = 'none';
          video2.style.display = 'block';

          apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          interstial.style.background = "#024783";
          swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        
          apto.style.color = "#000000";
          interstial.style.color = "#ffffff";
          swipeCubeWeb.style.color = "#000000";

           video2.addEventListener('ended', function myHandler2() {
            video3.play();

            video1.style.display = 'none';
            video2.style.display = 'none';
            video3.style.display = 'block';

            apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            swipeCubeWeb.style.background = "#024783";
          
            apto.style.color = "#000000";
            interstial.style.color = "#000000";
            swipeCubeWeb.style.color = "#ffffff";

              video3.addEventListener('ended', function myHandler3() {
                video1.play();

                video2.style.display = 'none';
                video3.style.display = 'none';
                video1.style.display = 'block';

                apto.style.background = "#024783";
                interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
                swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
              
                apto.style.color = "#ffffff";
                interstial.style.color = "#000000"
                swipeCubeWeb.style.color = "#000000"
              });
           });
      });
    } else {

      video1.play();
      video1.addEventListener('ended', function myHandler1() {
        video2.play();
        video1.style.display = 'none';
        video3.style.display = 'none';
        video2.style.display = 'block';

        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "#024783";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#000000";
        interstial.style.color = "#ffffff";
        swipeCubeWeb.style.color = "#000000";

         video2.addEventListener('ended', function myHandler2() {
          video3.play();

          video1.style.display = 'none';
          video2.style.display = 'none';
          video3.style.display = 'block';

          apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          swipeCubeWeb.style.background = "#024783";
        
          apto.style.color = "#000000";
          interstial.style.color = "#000000";
          swipeCubeWeb.style.color = "#ffffff";

            video3.addEventListener('ended', function myHandler3() {
              video1.play();

              video2.style.display = 'none';
              video3.style.display = 'none';
              video1.style.display = 'block';

              apto.style.background = "#024783";
              interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
              swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
            
              apto.style.color = "#ffffff";
              interstial.style.color = "#000000"
              swipeCubeWeb.style.color = "#000000"
            });
         });
    });
    }
  }


  var arrowLeft = document.querySelector('.weboramaAd__bg--prev');
  var arrowRight = document.querySelector('.weboramaAd__bg--next');

  var video1Web = document.querySelector('.video-one');
  var video2Web = document.querySelector('.video-two');
  var video3Web = document.querySelector('.video-three');


 
    video1Web.addEventListener('playing', function() {

      arrowRight.addEventListener('click', function() {
        video1.pause();
        video3.pause();
        video1.style.display = "none";
        video2.style.display = "block";
        video3.style.display = "none";

        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "#024783";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#000000";
        interstial.style.color = "#ffffff";
        swipeCubeWeb.style.color = "#000000";

        video2.currentTime = 0;
        video2.play();

        video2.addEventListener('ended', function myHandler(e) {
          video1.style.display = "none";
          video2.style.display = "none";
          video3.style.display = "block";
          
          apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          swipeCubeWeb.style.background = "#024783";
        
          apto.style.color = "#000000";
          interstial.style.color = "#000000";
          swipeCubeWeb.style.color = "#ffffff";
  
          video3.play();
        })
      });

      arrowLeft.addEventListener('click', function() {
        video1.pause();
        video2.pause();
        video1.style.display = "none";
        video2.style.display = "none";
        video3.style.display = "block";
  
        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "#024783";
      
        apto.style.color = "#000000";
        interstial.style.color = "#000000";
        swipeCubeWeb.style.color = "#ffffff";
  
        video3.currentTime = 0;
        video3.play();

        video3.addEventListener('ended', function myHandler(e) {
          video1.style.display = "block";
          video2.style.display = "none";
          video3.style.display = "none";
    
          apto.style.background = "#024783";
          interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        
          apto.style.color = "#ffffff";
          interstial.style.color = "#000000"
          swipeCubeWeb.style.color = "#000000"
  
          video1.play();
        });
      });

    })
    
    video2Web.addEventListener('playing', function() {

      arrowRight.addEventListener('click', function() {
        video1.pause();
        video2.pause();
        video1.style.display = "none";
        video2.style.display = "none";
        video3.style.display = "block";
  
        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "#024783";
      
        apto.style.color = "#000000";
        interstial.style.color = "#000000";
        swipeCubeWeb.style.color = "#ffffff";
  
        video3.currentTime = 0;
        video3.play();

        video3.addEventListener('ended', function myHandler(e) {
          video1.style.display = "block";
          video2.style.display = "none";
          video3.style.display = "none";
    
          apto.style.background = "#024783";
          interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        
          apto.style.color = "#ffffff";
          interstial.style.color = "#000000"
          swipeCubeWeb.style.color = "#000000"
  
          video1.play();
        });
      });

      arrowLeft.addEventListener('click', function() {
        video2.pause();
        video3.pause();
        video1.style.display = "block";
        video2.style.display = "none";
        video3.style.display = "none";
  
        apto.style.background = "#024783";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#ffffff";
        interstial.style.color = "#000000"
        swipeCubeWeb.style.color = "#000000"
  
        video1.currentTime = 0;
        video1.play();

        video1.addEventListener('ended', function myHandler(e) {
          video1.style.display = "none";
          video2.style.display = "block";
          video3.style.display = "none";
          apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          interstial.style.background = "#024783";
          swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        
          apto.style.color = "#000000";
          interstial.style.color = "#ffffff";
          swipeCubeWeb.style.color = "#000000";
  
          video2.play();
        })
      });
    });


    video3Web.addEventListener('playing', function() {

      arrowRight.addEventListener('click', function() {
        video2.pause();
        video3.pause();
        video1.style.display = "block";
        video2.style.display = "none";
        video3.style.display = "none";
  
        apto.style.background = "#024783";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#ffffff";
        interstial.style.color = "#000000"
        swipeCubeWeb.style.color = "#000000"
  
        video1.currentTime = 0;
        video1.play();

        video1.addEventListener('ended', function myHandler(e) {
          video1.style.display = "none";
          video2.style.display = "block";
          video3.style.display = "none";
          apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          interstial.style.background = "#024783";
          swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        
          apto.style.color = "#000000";
          interstial.style.color = "#ffffff";
          swipeCubeWeb.style.color = "#000000";
  
          video2.play();
        })
      });

      arrowLeft.addEventListener('click', function() {
        video1.pause();
        video3.pause();
        video1.style.display = "none";
        video2.style.display = "block";
        video3.style.display = "none";

        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "#024783";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#000000";
        interstial.style.color = "#ffffff";
        swipeCubeWeb.style.color = "#000000";

        video2.currentTime = 0;
        video2.play();

        video2.addEventListener('ended', function myHandler(e) {
          video1.style.display = "none";
          video2.style.display = "none";
          video3.style.display = "block";
          
          apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
          swipeCubeWeb.style.background = "#024783";
        
          apto.style.color = "#000000";
          interstial.style.color = "#000000";
          swipeCubeWeb.style.color = "#ffffff";
  
          video3.play();
        })
      });
    });




  var weboramaAdTl = gsap.timeline({

    scrollTrigger: {
      trigger: ".weboramaAd",
      start: "top 80%",
      // end: "top 30vh",
      // scrub: true,
      toggleActions: "play none none none",
    }
  })

  weboramaAdTl
  .to(".weboramaAd__head", {
    x: 0,
    y: 0,
    stagger: 0.2,
    opacity: 1,
    onComplete: videoPlayPause
  })

  .to(".weboramaAd__devices", {
    stagger: 0.2,
    opacity: 1
  })



  var screenWidth = window.innerWidth;


  // console.log(screenWidth)

  var shadowAdTl = gsap.timeline({

    scrollTrigger: {
      trigger: ".shadowAd",
      start: "top 80%",
      // end: "top 30vh",
      // scrub: true,
      // toggleActions: "restart none none none",
    }
  })

  if(screenWidth > 1600) {



    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '94%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')

  } else if(screenWidth > 1400 && screenWidth <= 1600) {


    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '94%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')

  } else if(screenWidth > 1200 && screenWidth <= 1400) {


    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '94%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')

  } else if(screenWidth > 1025 && screenWidth <= 1200) {


    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '93%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')

  } else if(screenWidth > 900 && screenWidth <= 1025) {


    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '94%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')

  } else if(screenWidth > 575 && screenWidth <= 900) {


    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '93%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')

  } else if(screenWidth > 100 && screenWidth <= 575) {


    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '93%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-6%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '44%'
  }, 'sc2')
  } else {
    
    shadowAdTl
  .from(".shadowAd__head", {
    duration: 0.5,
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
  })


  .add('sc0')
  .to(".after_1", {
    duration: 0.5,
    width: '100%'
  }, 'sc0')
  .to(".scroller", {
    duration: 0.5,
    left: '95%'
  }, 'sc0')

  .add('sc1')
  .to(".after_1", {
    duration: 1,
    width: '0%'
  }, 'sc1')
  .to(".scroller", {
    duration: 1,
    left: '-5%'
  }, 'sc1')

  .add('sc2')
  .to(".after_1", {
    duration: 0.5,
    width: '50%'
  }, 'sc2')
  .to(".scroller", {
    duration: 0.5,
    left: '45%'
  }, 'sc2')
  }


}


// Video Button Control







// Weborama Devices

function weboramaCode() {

    let apto = document.getElementById('apto');
    let interstial = document.getElementById('interstial');
    let swipeCubeWeb = document.getElementById('swipeCubeWeb');

    let videoOne = document.querySelector('.video-one');
    let videoTwo = document.querySelector('.video-two');
    let videoThree = document.querySelector('.video-three');


    apto.addEventListener('click', function() {
      videoOne.style.display = "block";
      videoTwo.style.display = "none";
      videoThree.style.display = "none";

      apto.style.background = "#024783";
      interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
    
      apto.style.color = "#ffffff";
      interstial.style.color = "#000000"
      swipeCubeWeb.style.color = "#000000"

      videoOne.currentTime = 0;
      videoOne.play();


      videoOne.addEventListener('ended', function myHandler(e) {
        videoOne.style.display = "none";
        videoTwo.style.display = "block";
        videoThree.style.display = "none";
        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "#024783";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#000000";
        interstial.style.color = "#ffffff";
        swipeCubeWeb.style.color = "#000000";

        videoTwo.play();
      })

    })

    interstial.addEventListener('click', function() {
      videoOne.style.display = "none";
      videoTwo.style.display = "block";
      videoThree.style.display = "none";

      apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      interstial.style.background = "#024783";
      swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
    
      apto.style.color = "#000000";
      interstial.style.color = "#ffffff";
      swipeCubeWeb.style.color = "#000000";

      videoTwo.currentTime = 0;
      videoTwo.play();

      videoTwo.addEventListener('ended', function myHandler(e) {
        videoOne.style.display = "none";
        videoTwo.style.display = "none";
        videoThree.style.display = "block";
        
        apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "#024783";
      
        apto.style.color = "#000000";
        interstial.style.color = "#000000";
        swipeCubeWeb.style.color = "#ffffff";

        videoThree.play();
      })

    })

    swipeCubeWeb.addEventListener('click', function() {
      videoOne.style.display = "none";
      videoTwo.style.display = "none";
      videoThree.style.display = "block";

      apto.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      swipeCubeWeb.style.background = "#024783";
    
      apto.style.color = "#000000";
      interstial.style.color = "#000000";
      swipeCubeWeb.style.color = "#ffffff";

      videoThree.currentTime = 0;
      videoThree.play();

      videoThree.addEventListener('ended', function myHandler(e) {
        videoOne.style.display = "block";
        videoTwo.style.display = "none";
        videoThree.style.display = "none";
  
        apto.style.background = "#024783";
        interstial.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
        swipeCubeWeb.style.background = "linear-gradient(41deg, #ffffff, #ffffff)";
      
        apto.style.color = "#ffffff";
        interstial.style.color = "#000000"
        swipeCubeWeb.style.color = "#000000"

        videoOne.play();
      });

    })


}




function shadowCode() {

  let active = false;

  let selectOne = document.getElementById('shadowAd__select--one');
  let selectTwo = document.getElementById('shadowAd__select--two');
  let selectThree = document.getElementById('shadowAd__select--three');

  var beforeOne = document.getElementsByClassName('before_1');
  var afterOne = document.getElementsByClassName('after_1');
  
  var beforeTwo = document.getElementsByClassName('before_2');
  var afterTwo = document.getElementsByClassName('after_2');
  
  var beforeThree = document.getElementsByClassName('before_3');
  var afterThree = document.getElementsByClassName('after_3');



  selectOne.addEventListener('click', function() {

    beforeOne[0].style.display = "block";
    afterOne[0].style.display = "block";
    beforeTwo[0].style.display = "none";
    afterTwo[0].style.display = "none";
    beforeThree[0].style.display = "none";
    afterThree[0].style.display = "none";

    selectOne.style.background = "#000";
    selectTwo.style.background = "#fff";
    selectThree.style.background = "#fff";

    selectOne.style.color = "#fff";
    selectTwo.style.color = "black";
    selectThree.style.color = "black";

    selectOne.style.border = '1px solid #000';
    selectTwo.style.border = "1px solid #000";
    selectThree.style.border = "1px solid #000";


    

    document.querySelector(".after_1").style.width = "50%";
    document.querySelector(".scroller").style.left = "45%";
    
  });

  selectTwo.addEventListener('click', function() {

    beforeOne[0].style.display = "none";
    afterOne[0].style.display = "none";
    beforeTwo[0].style.display = "block";
    afterTwo[0].style.display = "block";
    beforeThree[0].style.display = "none";
    afterThree[0].style.display = "none";

    selectOne.style.background = "#fff";
    selectTwo.style.background = "#000";
    selectThree.style.background = "#fff";

    selectOne.style.color = "black";
    selectTwo.style.color = "#fff";
    selectThree.style.color = "black";

    selectOne.style.border = '1px solid #000';
    selectTwo.style.border = "1px solid #000";
    selectThree.style.border = "1px solid #000";

    document.querySelector(".after_2").style.width = "50%";
    document.querySelector(".scroller").style.left = "45%";
  });

  selectThree.addEventListener('click', function() {

    beforeOne[0].style.display = "none";
    afterOne[0].style.display = "none";
    beforeTwo[0].style.display = "none";
    afterTwo[0].style.display = "none";
    beforeThree[0].style.display = "block";
    afterThree[0].style.display = "block";
    
    selectOne.style.background = "#fff";
    selectTwo.style.background = "#fff";
    selectThree.style.background = "#000";

    selectOne.style.color = "black";
    selectTwo.style.color = "black";
    selectThree.style.color = "#fff";

    selectOne.style.border = '1px solid #000';
    selectTwo.style.border = "1px solid #000";
    selectThree.style.border = "1px solid #000";

    document.querySelector(".after_3").style.width = "50%";
    document.querySelector(".scroller").style.left = "45%";
  });



  // First we'll have to set up our event listeners
  // We want to watch for clicks on our scroller
  document.querySelector(".scroller").addEventListener("mousedown", function () {
    active = true;
    // Add our scrolling class so the scroller has full opacity while active
    document.querySelector(".scroller").classList.add("scrolling");
  });
  // We also want to watch the body for changes to the state,
  // like moving around and releasing the click
  // so let's set up our event listeners
  document.body.addEventListener("mouseup", function () {
    active = false;
    document.querySelector(".scroller").classList.remove("scrolling");
  });
  document.body.addEventListener("mouseleave", function () {
    active = false;
    document.querySelector(".scroller").classList.remove("scrolling");
  });

  // Let's figure out where their mouse is at
  $(document).bind('touchmove mousemove', function (e) {
    if (!active) return;
    // Their mouse is here...
    let x = e.originalEvent.touches ?  e.originalEvent.touches[0].pageX : e.pageX;
    // but we want it relative to our wrapper
    x -= document.querySelector(".wrapper").getBoundingClientRect().left;
    // Okay let's change our state
    scrollIt(x);
  });

  

  // Let's use this function
  function scrollIt(x) {

    var beforeOne = document.getElementsByClassName('before_1');
    var afterOne = document.getElementsByClassName('after_1');
    
    var beforeTwo = document.getElementsByClassName('before_2');
    var afterTwo = document.getElementsByClassName('after_2');
    
    var beforeThree = document.getElementsByClassName('before_3');
    var afterThree = document.getElementsByClassName('after_3');

    window.onload = function(e){

      var screenWidth = window.innerWidth;
    
      if(screenWidth > 1600) {
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";

      } else if(screenWidth > 1200 && screenWidth <= 1600) {
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";

      } else if(screenWidth > 1025 && screenWidth <= 1200) { 
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";

      } else if(screenWidth > 900 && screenWidth <= 1025) { 
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";
        
      } else if(screenWidth > 575 && screenWidth <= 900) {
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";

      } else if(screenWidth > 100 && screenWidth <= 575) {
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";

      } else {
        document.querySelector(".after_1").style.width = "50%";
        document.querySelector(".scroller").style.left = "44%";
      }

    }

    if(beforeOne[0].clientWidth > 0 || afterOne[0].clientWidth > 0) {
      let transform = Math.max(
        0,
        Math.min(x, document.querySelector(".wrapper").offsetWidth)
      );

      document.querySelector(".after_1").style.width = transform + "px";
      document.querySelector(".scroller").style.left = transform - 25 + "px";
    }
    
    if(beforeTwo[0].clientWidth > 0 || afterTwo[0].clientWidth > 0) {
      let transform = Math.max(
        0,
        Math.min(x, document.querySelector(".wrapper").offsetWidth)
      );
      document.querySelector(".after_2").style.width = transform + "px";
      document.querySelector(".scroller").style.left = transform - 25 + "px";
    }
    if(beforeThree[0].clientWidth > 0 || afterThree[0].clientWidth > 0) {
      let transform = Math.max(
        0,
        Math.min(x, document.querySelector(".wrapper").offsetWidth)
      );
      document.querySelector(".after_3").style.width = transform + "px";
      document.querySelector(".scroller").style.left = transform - 25 + "px";
    }


    
  }

  // Let's set our opening state based off the width,
  // we want to show a bit of both images so the user can see what's going on
  scrollIt(150);

  // And finally let's repeat the process for touch events
  // first our middle scroller...
  document.querySelector(".scroller").addEventListener("touchstart", function () {
    active = true;
    document.querySelector(".scroller").classList.add("scrolling");
  });
  document.body.addEventListener("touchend", function () {
    active = false;
    document.querySelector(".scroller").classList.remove("scrolling");
  });
  document.body.addEventListener("touchcancel", function () {
    active = false;
    document.querySelector(".scroller").classList.remove("scrolling");
  });

  document.body.addEventListener("touchmove", function (e) {
    if (!active) return;
    // Their mouse is here...
    let x = e.pageX;
    // but we want it relative to our wrapper
    x -= document.querySelector(".wrapper").getBoundingClientRect().left;
    // Okay let's change our state
    scrollIt(x);
  });


}



function scrollBallCode() {

  gsap.registerPlugin(ScrollTrigger);



  ScrollTrigger.create({
    trigger: ".client",
    start: "top 35%",
    end: "bottom 32%",
    id: 'one',
    toggleClass: { targets: ".clientCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".subscribe",
    start: "top 30%",
    end: "bottom 32%",
    id: 'two',
    toggleClass: { targets: ".subscribeCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".displayAd",
    start: "top 30%",
    end: "bottom 32%",
    id: 'three',
    toggleClass: { targets: ".displayCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".weboramaAd",
    start: "top 30%",
    end: "bottom 32%",
    id: 'four',
    toggleClass: { targets: ".richCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".platform",
    start: "top 30%",
    end: "bottom 32%",
    id: 'five',
    toggleClass: { targets: ".platformCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".dynamicAd",
    start: "top 30%",
    end: "bottom 32%",
    id: 'six',
    toggleClass: { targets: ".dynamicCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".showreel",
    start: "top 30%",
    end: "bottom 32%",
    id: 'seven',
    toggleClass: { targets: ".showreelCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".shadowAd",
    start: "top 30%",
    end: "bottom 22%",
    id: 'eight',
    toggleClass: { targets: ".productionCircle", className: "active" }
  });

  ScrollTrigger.create({
    trigger: ".about",
    start: "top 30%",
    end: "bottom 32%",
    id: 'nine',
    toggleClass: { targets: ".aboutCircle", className: "active" }
  });

}



document.addEventListener('readystatechange', function() {
  document.body.style.visibility = 'visible';




  let tHeader = gsap.timeline({ paused: true})

  var myBrowserWidth = window.innerWidth;


  if(myBrowserWidth > 300 && myBrowserWidth < 1301 ) {
    tHeader

    .add('head', '+=0.5')
    .to('.header__paralaxBlack', { duration: 3, maskPosition: "100% 0%", ease: "steps(44)" }, 'head')
    .to('.header__paralaxColor', { duration: 0, filter: 'grayscale(0%)', '-webkit-filter':'grayscale(0%)', ease: "none" }, 'head+=0.1')
    .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none" })
  
  }
  //  else if(myBrowserWidth > 900 && myBrowserWidth < 1101 ) {
  //   tHeader

  //   .add('head', '+=2')
  //   .to('.header__paralaxBlack', { duration: 1.5, maskPosition: "100% 0%", ease: "steps(44)" }, 'head')
  //   .to('.header__paralaxColor', { duration: 0, filter: 'grayscale(0%)', '-webkit-filter':'grayscale(0%)', ease: "none" }, 'head+=0.1')
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: bigBeeMove })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: smallBeeMove })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: bigBeeShake })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: smallBeeShake })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none" })
  
  // }
  //  else if(myBrowserWidth > 800 && myBrowserWidth < 901 ) {
  //   tHeader

  //   .add('head', '+=2')
  //   .to('.header__paralaxBlack', { duration: 1.5, maskPosition: "100% 0%", ease: "steps(44)" }, 'head')
  //   .to('.header__paralaxColor', { duration: 0, filter: 'grayscale(0%)', '-webkit-filter':'grayscale(0%)', ease: "none" }, 'head+=0.1')
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: bigBeeMove })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: smallBeeMove })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: bigBeeShake })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: smallBeeShake })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none" })
  
  // } else if(myBrowserWidth > 700 && myBrowserWidth < 801 ) {
  //   tHeader

  //   .add('head', '+=2')
  //   .to('.header__paralaxBlack', { duration: 1.5, maskPosition: "100% 0%", ease: "steps(44)" }, 'head')
  //   .to('.header__paralaxColor', { duration: 0, filter: 'grayscale(0%)', '-webkit-filter':'grayscale(0%)', ease: "none" }, 'head+=0.1')
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: bigBeeMove })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: smallBeeMove })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: bigBeeShake })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none", onComplete: smallBeeShake })
  //   .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none" })
  
  // }
   else {

    tHeader

    .add('head', '+=0.5')
    .to('.header__paralaxBlack', { duration: 3, maskPosition: "100% 0%", ease: "steps(45)" }, 'head')
    .to('.header__paralaxColor', { duration: 0, filter: 'grayscale(0%)', '-webkit-filter':'grayscale(0%)', ease: "none" }, 'head+=0.1')
    .to('.header__paralaxBlack', { duration: 0, display: 'none', ease: "none" })
    

  }

  
  

  if (document.readyState === 'complete') {
// Hide the loading overlay and show the content
    document.getElementById('loader').style.display = 'none';
    document.getElementById('allContents').style.display = 'block';

// Make the body visible now that everything is loaded
    document.body.style.visibility = 'visible';

    tHeader.play();

    scrollBallCode();
    swiperCode();
    serviceCode();
    weboramaCode();
    shadowCode();
  }

// })




function islandAnimation() {
  gsap.ticker.lagSmoothing(false);

  let tHeader4 = gsap.timeline({repeat: 1, repeatDelay: -0.2})
  tHeader4
  .add('island')
  .to('#small_island, #big_island_laptop', { duration: 2, y: -5, ease: "none" }, 'island')
  .to('#middle_island, #middle_island_laptop', { duration: 2, y: -10, ease: "none" }, 'island')
  .to('#big_island, #big_island_laptop', { duration: 2, y: -10, ease: "none" }, 'island+=0.4')
  .to('#small_island_left, #middle_island_laptop', { duration: 2, y: -10, ease: "none" }, 'island+=0.8')

  .add('island2', '-=0.2')
  .to('#small_island, #big_island_laptop', { duration: 4, y: 5, ease: "none" }, 'island2')
  .to('#middle_island, #middle_island_laptop', { duration: 4, y: 10, ease: "none" }, 'island2')
  .to('#big_island, #big_island_laptop', { duration: 4, y: 10, ease: "none" }, 'island2+=0.4')
  .to('#small_island_left, #middle_island_laptop', { duration: 4, y: 10, ease: "none" }, 'island2+=0.8')

  .add('island3', '-=0.4')
  .to('#small_island, #big_island_laptop', { duration: 2, y: 0, ease: "none" }, 'island3')
  .to('#middle_island, #middle_island_laptop', { duration: 2, y: 0, ease: "none" }, 'island3')
  .to('#big_island, #big_island_laptop', { duration: 2, y: 0, ease: "none" }, 'island3+=0.4')
  .to('#small_island_left, #middle_island_laptop', { duration: 2, y: 0, ease: "none" }, 'island3+=0.8')


}





window.addEventListener("scroll", () => {
  // islandAnimation.pause();
  window.requestAnimationFrame(() => {
    const scrollY = window.scrollY;
    // const parallax = document.querySelector(".parallax-header");
    // parallax.style.transform = `translateY(${scrollY * 0.5}px)`;




  // $(window).scroll(function () {
    gsap.ticker.lagSmoothing(false);

    const bg = document.getElementById('bg');
    const planet = document.getElementById('planet1');
    const big_island = document.getElementById('big_island');
    const small_island_left = document.getElementById('small_island_left');
    const small_island = document.getElementById('small_island');
    const middle_island = document.getElementById('middle_island');
    const planet2 = document.getElementById('planet2');
    const grass = document.getElementById('grass');
    const cloud1 = document.getElementById('cloud1');
    const cloud2 = document.getElementById('cloud2');
    const sun = document.getElementById('sun');
    const header_text = document.getElementById('header__text');

    const bg_black = document.getElementById('bg_black');
    const planet_black = document.getElementById('planet1_black');
    const big_island_black = document.getElementById('big_island_black');
    const small_island_left_black = document.getElementById('small_island_left_black');
    const small_island_black = document.getElementById('small_island_black');
    const middle_island_black = document.getElementById('middle_island_black');
    const planet2_black = document.getElementById('planet2_black');
    const grass_black = document.getElementById('grass_black');
    const cloud1_black = document.getElementById('cloud1_black');
    const cloud2_black = document.getElementById('cloud2_black');
    const sun_black = document.getElementById('sun_black');
    const header_text_black = document.getElementById('header__textBlack');
    const header_paralaxBlack = document.getElementsByClassName('header__paralaxBlack');
    var circleWrap = document.querySelector('.circleWrap');



    const bg_laptop = document.getElementById('bg_laptop');
    const planet1_laptop = document.getElementById('planet1_laptop');
    const big_island_laptop = document.getElementById('big_island_laptop');
    const small_island_left_laptop = document.getElementById('small_island_left_laptop');
    const small_island_laptop = document.getElementById('small_island_laptop');
    const middle_island_laptop = document.getElementById('middle_island_laptop');
    const planet2_laptop = document.getElementById('planet2_laptop');
    const grass_laptop = document.getElementById('grass_laptop');
    const cloud1_laptop = document.getElementById('cloud1_laptop');
    const cloud2_laptop = document.getElementById('cloud2_laptop');
    const sun_laptop = document.getElementById('sun_laptop');
    const header_text_laptop = document.getElementById('header__text_laptop');

    const bg_black_laptop = document.getElementById('bg_black_laptop');
    const planet1_black_laptop = document.getElementById('planet1_black_laptop');
    const big_island_black_laptop = document.getElementById('big_island_black_laptop');
    const small_island_left_black_laptop = document.getElementById('small_island_left_black_laptop');
    const small_island_black_laptop = document.getElementById('small_island_black_laptop');
    const middle_island_black_laptop = document.getElementById('middle_island_black_laptop');
    const planet2_black_laptop = document.getElementById('planet2_black_laptop');
    const grass_black_laptop = document.getElementById('grass_black_laptop');
    const cloud1_black_laptop = document.getElementById('cloud1_black_laptop');
    const cloud2_black_laptop = document.getElementById('cloud2_black_laptop');
    const sun_black_laptop = document.getElementById('sun_black_laptop');
    const header_text_black_laptop = document.getElementById('header__textBlack_laptop');
    const header_paralaxBlack_laptop = document.getElementsByClassName('header__paralaxBlack_laptop');
    var circleWrap = document.querySelector('.circleWrap');
    
    

    const value = Math.round(window.scrollY);
    const value2 = Math.round(window.scrollY);
    
    if(!(value >= 820)) {
      circleWrap.style.display = 'none';
    } else {
      circleWrap.style.display = 'flex';
    }
    // if(header_paralaxBlack)

      if( !(value2 >= 790) ) {
        planet_black.style.transform = `translateY(${value2 * 0.03}%)`;
        big_island_black.style.transform = `translateY(${value2 * -0.01}%)`;
        small_island_black.style.transform = `translateY(${value2 * -0.001}%)`;
        small_island_left_black.style.transform = `translateY(${value2 * -0.005}%)`;
        middle_island_black.style.transform = `translateY(${value2 * -0.005}%)`;
        planet2_black.style.transform = `translateY(${value2 * 0.02}%)`;
        // header_text_black.style.transform = `translateY(${value2 * 0.025}%)`;
        sun_black.style.transform = `translateY(${value2 * 0.01}%)`;


        planet1_black_laptop.style.transform = `translateY(${value2 * 0.03}%)`;
        big_island_black_laptop.style.transform = `translateY(${value2 * -0.02}%)`;
        middle_island_black_laptop.style.transform = `translateY(${value2 * -0.01}%)`;
        planet2_black_laptop.style.transform = `translateY(${value2 * 0.02}%)`;
        // header_text_black.style.transform = `translateY(${value2 * 0.025}%)`;
        sun_black_laptop.style.transform = `translateY(${value2 * 0.01}%)`;
      }



      if( !(value >= 790) ) {
        planet.style.transform = `translateY(${value * 0.03}%)`;
        big_island.style.transform = `translateY(${value * -0.01}%)`;
        small_island.style.transform = `translateY(${value * -0.001}%)`;
        small_island_left.style.transform = `translateY(${value * -0.005}%)`;
        middle_island.style.transform = `translateY(${value * -0.005}%)`;
        planet2.style.transform = `translateY(${value * 0.02}%)`;
        // header_text.style.transform = `translateY(${value * 0.025}%)`;
        sun.style.transform = `translateY(${value * 0.01}%)`;

        planet1_laptop.style.transform = `translateY(${value2 * 0.03}%)`;
        big_island_laptop.style.transform = `translateY(${value * -0.02}%)`;
        middle_island_laptop.style.transform = `translateY(${value * -0.01}%)`;
        planet2_laptop.style.transform = `translateY(${value * 0.02}%)`;
        // header_text.style.transform = `translateY(${value * 0.025}%)`;
        sun_laptop.style.transform = `translateY(${value * 0.01}%)`;
      }


  // });


  });
});

});




