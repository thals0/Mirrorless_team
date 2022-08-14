const header = document.querySelector("header");
const bars = header.querySelector("#bars");
const productMenu = header.querySelector(".sub_product");
const login = document.querySelector(".login");
const logout = document.querySelector(".logout");
Kakao.init("b1a67a8304b174c1e613bca5bcb40c41");

function sendLinkCustom() {

    Kakao.Link.sendCustom({
        templateId: 81334 
    });
}
//카카오로그인
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
//카카오로그아웃  
function kakaoLogout() {
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response)
        login.style.display ="block"
        logout.style.display = "none"
        Kakao.init(); 

      },
      fail: function (error) {
        console.log(error)
      },
    })
    Kakao.Auth.setAccessToken(undefined)
  }
}  