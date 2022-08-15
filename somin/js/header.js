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
Kakao.init("b1a67a8304b174c1e613bca5bcb40c41");


function kakaoLogin() {

  Kakao.Auth.login({
    success: function (response) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {
          console.log(response)
          login.style.display ="none"
          logout.style.display = "block"
          console.log(login.style.diplay);
        },
        fail: function (error) {
          console.log(error)
        },
      })
    },
    fail: function (error) {
      console.log(error)
    },
  })
}