let camera1 =document.querySelector(".img1");
let camera2 =document.querySelector(".img2");
let video = document.querySelector(".video")
let title1 = document.querySelector(".title1");
let title2 = document.querySelector(".title2");
let title3 = document.querySelector(".title3");


// function cameraOpcity(){
//     camera1.style.opacity = 1;
//     camera2.style.opacity = 1;

// }

// setTimeout(cameraOpcity, 9000);

camera1.addEventListener('mouseover', function(){
    camera1.style.transform = "scale(1.5)";
    camera1.style.transition = "0.5s";
  });
camera1.addEventListener('mouseout', function(){
    camera1.style.transform = "scale(1)";
    camera1.style.transition = "0.5s";
  });
camera1.addEventListener('click', function(){
    video.setAttribute("src","./video/videoreverse.mp4");
    camera1.style.opacity ="0";
    camera2.style.opacity ="0";
    setTimeout("location.href='map.html'", 3500);
  });
camera2.addEventListener('mouseover', function(){
    camera2.style.transform = "scale(1.5)";
    camera2.style.transition = "0.5s";
  });
camera2.addEventListener('mouseout', function(){
    camera2.style.transform = "scale(1)";
    camera2.style.transition = "0.5s";
  });

  // let scrollYpos;
  // window.addEventListener("scroll", function(){
  //     scrollYpos = window.scrollY;
  //     if(scrollYpos >1200){
  //       title1.style.transform = "translate(0px,0px)"
  //       title2.style.transform = "translate(0px,0px)"
  //       title3.style.transform = "translate(0px,0px)"
  //     }
  //     console.log(scrollYpos);
  // })
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".title1", {
     scrollTrigger: {
      trigger: ".section",
      toggleActions: "restart",
      start: "30% 0%",
      end: "50% 50%",
     },
     x: -2000,
     scaleX: 1,
     duration: 2,
    });
  gsap.from(".title2", {
    scrollTrigger: {
     trigger: ".section",
     toggleActions: "restart",
     start: "30% 0%",
     end: "50% 50%",
    },
    x: 2000,
    scaleX: 1,
    duration: 2,
   });
   gsap.from(".title3", {
    scrollTrigger: {
     trigger: ".section",
     toggleActions: "restart",
     start: "30% 0%",
     end: "50% 50%",
    },
    x: 2000,
    scaleX: 1,
    duration: 2,
   });
   gsap.to(".img1", {
    scrollTrigger: {
     trigger: ".section",
     toggleActions: "restart",
     start: "30% 0%",
     end: "50% 50%",
    },
    x: 0,
    scaleX: 1,
    duration: 2,
    opacity: 1,
   })
   gsap.to(".img2", {
    scrollTrigger: {
     trigger: ".section",
     toggleActions: "restart",
     start: "30% 0%",
     end: "50% 50%",
    },
    x: 0,
    scaleX: 1,
    duration: 2,
    opacity: 1,

   })  
     
     