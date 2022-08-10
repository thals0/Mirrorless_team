/*main page*/

/*header menu 클릭 시 header menubar 오픈*/

// const headerbar = document.querySelector('.leftbox');
// let headeron = 0;
// headerbar.addEventListener('click', () => {
//   if(headerbar.style.display = 'block'){
//     headerbar.style.display = 'none';
//   } else{
//     headerbar.style.display = 'block';
//   }
// })

// headerbar.classList.remove("on");


/*types of camera : scroll하면 크기 조정(줄이기)*/
/*1) 일반 scroll addEventListener로 할 때*/
const types = document.querySelectorAll('.types');

document.addEventListener("scroll", () => {
  scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  // console.log(document.getElementsByClassName("typeimg"));
  const img = document.getElementsByClassName("typeimg");  
  img[0].style.transform = (scrollHeight >= 130 ? 'scale(0.7)' : '');
}, false);

/*2) gsap사용할 때*/
gsap.to('.typeimg', {
  scrollTrigger : {
    trigger: '.types',
    toggleActions: 'restart',
  },
  scale:0.7,
  duration: 1.5,
});

let tl = gsap.timeline();

// /*best sellers : scroll하면 제품만 크기 조정(키우기)*/
// tl.to('.only_product', {
//   scrollTrigger : {
//     trigger: '.sub_part > .title',
//     toggleActions: 'restart',
//   },
//   x:10,
//   scale:1.2,
//   duration:1.5,
// }).from('.only_product', {
//   scrollTrigger: {
//     trigger: '.sub_part > .secondImgs',
//     toggleActions: 'restart',
//   },
//   x:-10,
//   scale:1,
//   duration:1.5
// })


/*custom page*/

/*custom main페이지 카메라 돌아가기*/
let isFirst = -1;

window.addEventListener('load', (e) => {  
  changeCameraImg();   
});

function changeCameraImg() {
  const customCamera = document.querySelector('article>img');  
  const cameraNames = ["change1", "change2", "change3", "change4", "change5", "change6", "change7", "change8", "change9", "change10"];


  for(i=1; i<11; i++){
    (function(x){
      setTimeout(function(){
        customCamera.setAttribute("src", `../img/custom/${cameraNames[x]}.png`);
        if(x === 10) changeCameraImg();
      }, 500*x);
    })(i);
  }
}

/*custom sub페이지 +, - 누르면 증감되도록 하기*/


/*custom sub페이지 클릭하면 input값에 나타나게하기*/
const clickevent = document.getElementsByClassName('inputbox');
console.log(clickevent);

clickevent.addEventListener('click', (e) => {
  clickevent.innerHTML
})






