// colorful
const colorfulWrap = document.querySelector("section.colorful");
const colorfulImg = document.querySelectorAll(".colorful img");
const colorfullenImg = colorfulImg.length;
const colorfulSpan = document.querySelectorAll(".colorful span");

for (let i = 0; i < colorfullenImg; i++) {
  colorfulImg[i].addEventListener("mouseover", function (e) {
    colorfulWrap.style.backgroundColor = "#000";
    // console.log(img);
    colorfulSpan[i].classList.add("on");
  });
  colorfulImg[i].addEventListener("mouseout", function (e) {
    colorfulWrap.style.backgroundColor = "#fff";
    colorfulSpan[i].classList.remove("on");
  });
}

// DSLR
const dslrVideo = document.querySelector(".dslr video");
const dslrWrap = document.querySelector("section.dslr");
const dslrImg = document.querySelector(".dslr img");
// const span = document.querySelectorAll("span");

dslrImg.addEventListener("mouseover", function (e) {
  dslrVideo.style.filter = "brightness(0.2)";
  // console.log(img);
  // span[i].classList.add("on");
});
dslrImg.addEventListener("mouseout", function (e) {
  dslrVideo.style.filter = "brightness(1)";
  // span[i].classList.remove("on");
});

dslrVideo.playbackRate = 0.5;
