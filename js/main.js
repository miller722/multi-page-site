 // Slider
 function testimonialsSlider(){
    new Swiper('.JS-testimonials-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      fadeEffect:{
        crossFade: true
      },
      autoHeight: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
    });
  }