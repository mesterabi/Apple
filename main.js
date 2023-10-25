var swiper = new Swiper(".mySwiper", {
  spaceBetween: 15,
  centeredSlides: true,
  loop: 9,
  slidesToShow: 3,
  slidesPerView: 1.2,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  autoplayHoverPause: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper-s", {
  slidesPerView: 1.9,
  centeredSlides: "true",
  spaceBetween: 10,
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
});
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
