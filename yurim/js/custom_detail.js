/* 1. position : fixed되어있는 img 특정 지점에서 위치값 고정시키기*/

//카메라 이미지, 카메라 가격, +add to cart
const cameraImg = document.querySelector('.expand > .img');
const cameraPrice = document.querySelector('.expand > .add-cart > .price');
const cameraAddto = document.querySelector('.expand > .add-cart > a');
// console.log(cameraPrice);
// console.log(cameraAddto);
// console.log(cameraImg);

window.addEventListener('scroll', () => {
  if (scrollY > 250) {
    cameraImg.classList.add('on');
    cameraPrice.classList.add('on');
    cameraAddto.classList.add('on');
  } else {
    cameraImg.classList.remove('on')
    cameraPrice.classList.remove('on');
    cameraAddto.classList.remove('on');
  }
})
 
//scrollY지점 확인용 코드
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
})
//해당 요소의 지금 x,y좌표 값 확인용 코드
const img = document.querySelector('.img');
let rect = img.getBoundingClientRect();
console.log(rect.x);
console.log(rect.y);




/* 2. input창 클릭하면 나오게하는 것*/
let inputlist = document.querySelector(".sub_list li");

const inputBtn = document.querySelector(".inputlist > span i");
console.log(inputBtn);
// const toogleProductBtn = header.querySelector(".product__btn");
const sublist = document.querySelector(".sub_list");

inputBtn.addEventListener("click", (e) => {
  if (sublist.classList.contains("active")) {
    sublist.classList.remove("active");
  } else {
    sublist.classList.add("active");
  }
});






/* 3. custom sub페이지 +, - 누르면 증감되도록 하기*/
// + 누르면 1 증가 
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let result = document.querySelector("#result")
let totalcost = document.querySelector('.totalcost')
let i = 1;
plus.addEventListener("click", () => {
  i++
  result.textContent = i;
  let totalcostNum = i*450000;
  totalcost.textContent = "₩" + totalcostNum.toLocaleString();

})
minus.addEventListener("click", () => {
  if(i > 0){
    i--
    result.textContent = i; 
    let totalcostNum = i*450000;
    totalcost.textContent = "₩" + totalcostNum.toLocaleString();
    
  }else {
    totalcost.textContent = "₩" + 0
  }
})


/* 3. custom sub페이지 클릭하면 input값에 나타나게하기*/
/* 3-1. 색상 넣기*/
// 방법 1. (단순반복)
// let selectColor1 = document.querySelector('.color > .color_select > .color1');
// let selectColor2 = document.querySelector('.color > .color_select > .color2');
// let selectColor3 = document.querySelector('.color > .color_select > .color3');
// let selectColor4 = document.querySelector('.color > .color_select > .color4');
// let selectColor5 = document.querySelector('.color > .color_select > .color5');
// let selectColor6 = document.querySelector('.color > .color_select > .color6');
// let selectColor7 = document.querySelector('.color > .color_select > .color7');
// let selectColor8 = document.querySelector('.color > .color_select > .color8');
// let inputBox = document.querySelector('.inputbox');

// selectColor1.onclick = function() {
//   inputBox.style.backgroundColor = "#f36969";
// }
// selectColor2.onclick = function() {
//   inputBox.style.backgroundColor = "#ffbc3f";
// }
// selectColor3.onclick = function() {
//   inputBox.style.backgroundColor = "#ffff88";
// }
// selectColor4.onclick = function() {
//   inputBox.style.backgroundColor = "#6da26d";
// }
// selectColor5.onclick = function() {
//   inputBox.style.backgroundColor = "#55add8";
// }
// selectColor6.onclick = function() {
//   inputBox.style.backgroundColor = "#313159";
// }
// selectColor7.onclick = function() {
//   inputBox.style.backgroundColor = "#ba89ba";
// }
// selectColor8.onclick = function() {
//   inputBox.style.backgroundColor = "#404040";
// }

/*방법 2 : for문*/
let inputBox = document.querySelector('.inputbox'); //색을 넣을 위치 선언
const selectColors = document.querySelectorAll(".color > .color_select span");
//순서대로 넣을 색상값 배열로 만들기
const colors = ["#f36969", "#ffbc3f", "#ffff88", "#6da26d", "#55add8", "#313159", "#ba89ba", "#404040"];

//for문으로 순서대로 색 넣어주기
for (let i = 0; i < selectColors.length; i++) {
  selectColors[i].addEventListener("click", () => {
    inputBox.style.backgroundColor = colors[i];
  })
}


/* 3-2. 이모지 넣기*/
let selectEmojies = document.querySelectorAll(".emoji > .emoji_select span");
let inputBox_emoji = document.querySelector('.emoji > .inputbox_emoji');

selectEmojies.forEach(el => {
  el.addEventListener("click", () => {
    inputBox_emoji.innerHTML = el.innerHTML;
  })
});