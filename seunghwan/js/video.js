let camera1 =document.querySelector(".img1");
let camera2 =document.querySelector(".img2");
let video = document.querySelector(".video")


function cameraOpcity(){
    camera1.style.opacity = 1;
    camera2.style.opacity = 1;

}

setTimeout(cameraOpcity, 9000);

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
camera2.addEventListener('click', function(){
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