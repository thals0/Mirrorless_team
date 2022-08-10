const header = document.querySelector("header");
const toogleBtn = header.querySelector(".nav__btn");
const toogleProductBtn = header.querySelector(".product__btn");
const bars = header.querySelector("#bars");
const productMenu = header.querySelector(".sub_product");

toogleBtn.addEventListener("click", function (e) {
  if (bars.classList.contains("active")) {
    bars.classList.remove("active");
  } else {
    bars.classList.add("active");
  }
});
toogleProductBtn.addEventListener("click", function (e) {
  if (productMenu.classList.contains("active")) {
    productMenu.classList.remove("active");
  } else {
    productMenu.classList.add("active");
  }
});
