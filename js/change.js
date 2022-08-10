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
        if(x === 9) changeCameraImg();
      }, 500*x);
    })(i);
  }
}
