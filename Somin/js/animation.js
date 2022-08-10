const wrap = document.querySelector("body");
const img = document.querySelectorAll("img");
const lenImg = img.length;
const span = document.querySelectorAll("span");

for (let i = 0; i < lenImg; i++) {
  img[i].addEventListener("mouseover", function (e) {
    wrap.style.backgroundColor = "#000";
    // console.log(img);
    span[i].classList.add("on");
  });
  img[i].addEventListener("mouseout", function (e) {
    wrap.style.backgroundColor = "#fff";
    span[i].classList.remove("on");
  });
}
