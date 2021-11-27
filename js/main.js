function Init(){
  homeSlider();
}
Init();



 // Slider
 function homeSlider(){
    new Swiper('.JS-home-swiper', {
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

  $(window).scroll(function () {
    $("header").toggleClass("scroll", $(this).scrollTop() > 100);
  });