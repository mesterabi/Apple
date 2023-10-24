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
  //   576: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 1.9,
  //     spaceBetween: 5,
  //     loop: 9,
  //   },
  // 1200: {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  // },
  // },
});
var swiper = new Swiper(".mySwiper-s", {
  // spaceBetween: 15,
  // centeredSlides: true,
  // loop: 9,
  // slidesToShow: 3,
  // slidesPerView: 1.9,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  // breakpoints: {
  //   576: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 1.9,
  //     spaceBetween: 5,
  //     loop: 9,
  //   },
  // 1200: {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  // },
  // },
});
