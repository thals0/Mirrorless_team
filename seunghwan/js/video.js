let camera1Hover = document.querySelector(".camera1");
let ornageTitle = document.querySelector(".orange_title");

camera1Hover.addEventListener("mouseover",function(){
  camera1Hover.style.transform ="translate(-700px,0) scale(1.5)";
  ornageTitle.style.opacity = 0;
})
camera1Hover.addEventListener("mouseout",function(){
  camera1Hover.style.transform ="translate(0px,0) scale(1)";
  ornageTitle.style.opacity = 1;
})
     
     
