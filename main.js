var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  centeredSlides: true,
  loop: 9,
  slidesToShow: 3,
  slidesPerView: 1.2,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  autoplayHoverPause: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //     576: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,
  //     },
  //     1200: {
  //       slidesPerView: 3,
  //       spaceBetween: 50,
  //     },
  //   },
});
