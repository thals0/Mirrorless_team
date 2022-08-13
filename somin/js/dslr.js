const video = document.querySelector("video");
const wrap = document.querySelector("section");
const img = document.querySelector("img");
// const span = document.querySelectorAll("span");

img.addEventListener("mouseover", function (e) {
  video.style.filter = "brightness(0.2)";
  // console.log(img);
  // span[i].classList.add("on");
});
img.addEventListener("mouseout", function (e) {
  video.style.filter = "brightness(1)";
  // span[i].classList.remove("on");
});

video.playbackRate = 0.5;
