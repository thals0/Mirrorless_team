// SWIPER PRODUCT
// product > swiper
const swiperProduct = new Swiper(".product .swiper", {
  slidersPerView: "auto",
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  paginasion: {
    el: ".product .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".product .swiper-button-prev",
    nextEl: ".product .swiper-button-next",
  },
});
