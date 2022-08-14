const product = document.querySelector(".product");
const slide = document.querySelectorAll(".swiper-slide");
const lenSlide = slide.length;

const frameCamcoder = document.querySelector(".details_products");
const listCamcoder = frameCamcoder.querySelectorAll("section");
const lenCamcoder = listCamcoder.length;

const btn = document.querySelector(".button");
const lenBtn = btn.length;

const header = document.querySelector("header");
// const toogleBtn = header.querySelector(".nav__btn");
// const toogleProductBtn = header.querySelector(".product__btn");
// const bars = header.querySelector("#bars");
// const productMenu = header.querySelector(".sub_product");

// toogleBtn.addEventListener("click", function (e) {
//   if (bars.classList.contains("active")) {
//     bars.classList.remove("active");
//   } else {
//     bars.classList.add("active");
//   }
// });
// toogleProductBtn.addEventListener("click", function (e) {
//   if (productMenu.classList.contains("active")) {
//     productMenu.classList.remove("active");
//   } else {
//     productMenu.classList.add("active");
//   }
// });

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

// Product -> Detail
// for (let i = 0; i < lenCamcoder; i++) {
//   // slide click시
//   slide[i].addEventListener("click", function (e) {
//     listCamcoder[i - 2].classList.add("on");
//     console.log(slide);
//     console.log(lenSlide);
//     console.log(listCamcoder);
//     header.classList.add("on");
//     product.classList.add("on");
//     btn.style.display = "none";
//   });
// }

function addOn(t) {
  console.log(t);
  header.classList.add("on");
  product.classList.add("on");
  btn.style.display = "none";
  console.log(btn);
  let slideNum = -1;
  console.log(t);
  slideNum = parseInt(t.getAttribute("data-swiper-slide-index"));
  console.log(slideNum);
  listCamcoder[slideNum].classList.add("on");
}

/* custom sub페이지 +, - 누르면 증감되도록 하기*/
// + 누르면 1 증가
let cost = document.querySelectorAll(".cost");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let result = document.querySelectorAll(".result");
let totalcost = document.querySelectorAll(".totalcost");
let k = 1;

for (let i = 0; i < lenCamcoder; i++) {
  plus[i].addEventListener("click", () => {
    k++;
    result[i].textContent = k;
    const price = parseInt(cost[i].textContent);
    let totalcostNum = k * price;
    totalcost[i].textContent = "₩" + totalcostNum.toLocaleString();
  });

  minus[i].addEventListener("click", () => {
    if (i > 0) {
      k--;
      result[i].textContent = k;
      const price = parseInt(cost[i].textContent);
      let totalcostNum = k * price;
      totalcost[i].textContent = "₩" + totalcostNum.toLocaleString();
    } else {
      totalcost[i].textContent = "₩" + 0;
    }
  });
}
