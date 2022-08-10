/*video*/
/*cursor move*/ 
document.body.addEventListener("mousemove", (e) => {
  //clientX,Y : 브라우저 페이지의 X좌표 위치 반환 or 페이지 상단을 0값으로 지정
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.05
  });
});

/*text sliding*/
let tl = gsap.timeline();

tl.from('.focus', {
  scrollTrigger : {
    trigger : '.focus',
    toggleAction : 'restart',
  },
  x:1000,
  scale: 1.2,
  duration: 2,
}).from('.your', {
  scrollTrigger : {
    trigger : '.your',
    toggleAction : 'restart',
  },
  x:1000,
  scale: 1.2,
  duration: 2,
}).from('.filmcamera', {
  scrollTrigger : {
    trigger : '.filmcamera',
    toggleAction : 'restart',
  },
  x:1000,
  scale: 1.2,
  duration: 2,
})