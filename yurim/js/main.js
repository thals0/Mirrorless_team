/*main page*/

/* 1. types of camera : scroll하면 크기 조정(줄이기)*/
gsap.to('.typeimg', {
  scrollTrigger: {
    trigger: '.types',
    toggleActions: 'restart',
  },
  scale: 0.7,
  duration: 1.5,
});

// /*2. scroll해서 원하는 article만큼씩 보여주기*/

// window.onload = () => {
//   const elm = document.querySelectorAll('article');
//   const elmCount = elm.length;
//   elm.forEach(function (item, index) {
//     // 2-1. scrollActionBlock : wheel의 원래 scroll되는 기능을 flase시키기
//     item.addEventListener('mousewheel', e => {
//       e.preventDefault();

//       let delta = 0;

//       if (!e) e = window.e;
//       if (e.wheelDelta) {
//         delta = e.wheelDelta / 120;
//         console.log(wheelDelta);
//         if (window.opera) delta = -delta;
//       } else if (e.detail) delta = -event.detail / 3;

//       let moveTop = window.scrollY;
//       let elmSelector = elm[index];

//       // wheel down : move to next section
//       if (delta < 0) {
//         if (elmSelector !== elmCount - 1) {
//           try {
//             moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
//           } catch (e) {}
//         }
//       }
//       // wheel up : move to previous section
//       else {
//         if (elmSelector !== 0) {
//           try {
//             moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
//           } catch (e) {}
//         }
//       }

//       const body = document.querySelector('html');
//       window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
//     });
//   });
// }

/*custom page*/

// /*custom main페이지 카메라 돌아가기*/
let isFirst = -1;

window.addEventListener('load', (e) => {
  changeCameraImg();
});

function changeCameraImg() {
  const customCamera = document.querySelector('article>img');
  console.log(customCamera);
  const cameraNames = ["custom", "custom1", "custom2", "custom3", "custom4", "custom5", "custom6", "custom7", "custom8", "custom9"];

  for (i = 1; i < 8; i++) {
    (function (x) {
      setTimeout(function () {
        customCamera.setAttribute("src", `../yurim/img/main/${cameraNames[x]}.png`);
        if (x === 7) changeCameraImg();
      }, 500 * x);
    })(i);
  }
}
  