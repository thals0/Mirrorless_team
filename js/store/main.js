// SWIPER PRODUCT
// product > swiper
const swiperProduct = new Swiper(".product .swiper", {
  slidersPerView: "auto",
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 1000,
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

// Swiper product autoplay control
function controlAutoplay() {
  if (swiperProduct.autoplay.running) {
    swiperProduct.autoplay.stop();
  } else {
    swiperProduct.autoplay.start();
  }
}

// Swiper product hover stop
$(".swiper-slide img").on("mouseenter", function (e) {
  // console.log("stop autoplay");
  swiperProduct.autoplay.stop();
});
$(".swiper-slide img").on("mouseleave", function (e) {
  // console.log("start autoplay");
  swiperProduct.autoplay.start();
});

// Product
