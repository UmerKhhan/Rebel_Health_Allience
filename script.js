const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 breakpoints:{
    300:{
            slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
    1024:{
        slidesPerView:2,
    },
 }

});