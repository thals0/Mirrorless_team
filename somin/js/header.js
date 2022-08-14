
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