var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.552035, 126.991177), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
 
// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '엘리카메라', 
        latlng: new kakao.maps.LatLng(37.565472899999904, 126.91798339999957),
        link: 'https://www.allycamera.com/',
        content: '<div class="customoverlay">' +
            '  <a href=https://www.allycamera.com/>' +
            '    <span class="title">엘리카메라</span>' +
            '  </a>' +
            '</div>'
    },
    {
        title: '카매라워크 더현대서울', 
        latlng: new kakao.maps.LatLng(37.525623499999654, 126.89497999999969),
        link: 'https://www.instagram.com/camerawork_seoul/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.instagram.com/camerawork_seoul/>' +
        '    <span class="title">카매라워크 더현대서울</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '로모그래피 앰버시 스토어', 
        latlng: new kakao.maps.LatLng(37.556145799999925, 126.92464019999946),
        link: 'https://www.log135.com/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.log135.com/>' +
        '    <span class="title">로모그래피 앰버시 스토어</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '파티클',
        latlng: new kakao.maps.LatLng(37.526719400000125, 127.04063809999955),
        link: 'https://fujifilm-korea.co.kr/',
        content: '<div class="customoverlay">' +
        '  <a href=https://fujifilm-korea.co.kr/>' +
        '    <span class="title">파티클</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '당근카메라',
        latlng: new kakao.maps.LatLng(37.56022559999972, 126.97711209999987),
        link: '#',
        content: '<div class="customoverlay">' +
        '  <a href=#>' +
        '    <span class="title">당근카메라</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '동아카메라 소니 현대백화점압구정본점',
        latlng: new kakao.maps.LatLng(37.527092200000155, 127.02750889999976),
        link: '#',
        content: '<div class="customoverlay">' +
        '  <a href=#>' +
        '    <span class="title">동아카메라 소니 현대백화점압구정본점</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '고래사진관 필름현상소',
        latlng: new kakao.maps.LatLng(37.56309140000012, 126.99158709999956),
        link: 'https://www.slowlens.net/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.slowlens.net/>' +
        '    <span class="title">고래사진관 필름현상소</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '옥상필름 필름현상소',
        latlng: new kakao.maps.LatLng(37.56563920000008, 127.00193929999966),
        link: 'https://www.instagram.com/ox.film/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.instagram.com/ox.film/>' +
        '    <span class="title">옥상필름 필름현상소</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '망우삼림',
        latlng: new kakao.maps.LatLng(37.5660614999996, 126.98988189999957),
        link: 'https://www.instagram.com/mangwoosamlim/?hl=ko',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.instagram.com/mangwoosamlim/?hl=ko>' +
        '    <span class="title">망우삼림</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '언포모',
        latlng: new kakao.maps.LatLng(37.54722239999981, 127.0409438999997),
        link: 'https://www.instagram.com/unfomo.official/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.instagram.com/unfomo.official/>' +
        '    <span class="title">언포모</span>' +
        '  </a>' +
        '</div>'

<<<<<<< HEAD
    },
    {
        title: '용산카메라',
        latlng: new kakao.maps.LatLng(37.52956489999985, 126.96430409999968),
        link: 'https://blog.naver.com/yangkun100',
        content: '<div class="customoverlay">' +
        '  <a href=https://blog.naver.com/yangkun100>' +
        '    <span class="title">용산카메라</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '즐거운카메라',
        latlng: new kakao.maps.LatLng(37.5326643999998, 126.95806069999986),
        link: 'https://www.fu-gall.com/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.fu-gall.com/>' +
        '    <span class="title">즐거운카메라</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: 'UA카메라',
        latlng: new kakao.maps.LatLng(37.5354644999999, 127.09517899999949),
        link: 'https://www.uacamera.co.kr/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.uacamera.co.kr/>' +
        '    <span class="title">UA카메라</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '반도카메라',
        latlng: new kakao.maps.LatLng(37.502388099999806, 127.05504770000013),
        link: 'https://booking.naver.com/booking/10/bizes/655045?area=bmp',
        content: '<div class="customoverlay">' +
        '  <a href=https://booking.naver.com/booking/10/bizes/655045?area=bmp>' +
        '    <span class="title">반도카메라</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '럭키카메라',
        latlng: new kakao.maps.LatLng(37.53572629999982, 127.09466189999938),
        link: '#',
        content: '<div class="customoverlay">' +
        '  <a href=#>' +
        '    <span class="title">럭키카메라</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '라이카카메라스토어',
        latlng: new kakao.maps.LatLng(37.392494799999625, 127.11144640000012),
        link: 'https://www.leica-store.co.kr/main/main.asp',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.leica-store.co.kr/main/main.asp>' +
        '    <span class="title">라이카카메라스토어</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '캐논 현대백화점',
        latlng: new kakao.maps.LatLng(37.50865419999967, 127.05137089999968),
        link: 'https://kr.canon/intro',
        content: '<div class="customoverlay">' +
        '  <a href=https://kr.canon/intro>' +
        '    <span class="title">캐논 현대백화점</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '어필룸',
        latlng: new kakao.maps.LatLng(37.58208320000015, 126.9705099),
        link: 'https://www.instagram.com/uh_feel/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.instagram.com/uh_feel/>' +
        '    <span class="title">어필룸</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '필름로그',
        latlng: new kakao.maps.LatLng(37.50040079999985, 127.02493049999941),
        link: 'https://www.instagram.com/filmlog_official/',
        content: '<div class="customoverlay">' +
        '  <a href=https://www.instagram.com/filmlog_official/>' +
        '    <span class="title">필름로그</span>' +
        '  </a>' +
        '</div>'

    },
    {
        title: '캐논플렉스',
        latlng: new kakao.maps.LatLng(37.50780149999977, 127.0348027999998),
        link: 'https://blog.naver.com/canonkoreacamera',
        content: '<div class="customoverlay">' +
        '  <a href=https://blog.naver.com/canonkoreacamera>' +
        '    <span class="title">캐논플렉스</span>' +
        '  </a>' +
        '</div>'

    },

];

// 마커 이미지의 이미지 주소입니다

=======
    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "./img/마커이미지.png"; 
>>>>>>> f7f5b39672d2660c1fe18c805d654cc0ef7bfe4a
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
<<<<<<< HEAD

    var imageSrc = "./img/마커이미지.png";
    var imageSrc2 = "./img/마커이미지2.png";
    var imageSrc3 = "./img/마커이미지3.png";
    var imageSrc4 = "./img/마커이미지4.png";  

=======
    
>>>>>>> f7f5b39672d2660c1fe18c805d654cc0ef7bfe4a
    var imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
    var imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다. 
    
    // 마커 이미지를 생성합니다    
<<<<<<< HEAD
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize ,imageOption);
    var markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize ,imageOption); 
    var markerImage3 = new kakao.maps.MarkerImage(imageSrc3, imageSize ,imageOption); 
    var markerImage4 = new kakao.maps.MarkerImage(imageSrc4, imageSize ,imageOption); 

    if(i < 4){
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지
        });
    }
    else if(i < 8){
            // 마커를 생성합니다
=======
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize ,imageOption); 
    
    // 마커를 생성합니다
>>>>>>> f7f5b39672d2660c1fe18c805d654cc0ef7bfe4a
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
<<<<<<< HEAD
        image : markerImage2 // 마커 이미지
    });
    }
    else if(i <12){
            // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage3 // 마커 이미지
    });
    }
    else{
            // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage4 // 마커 이미지
    });
    }

=======
        image : markerImage // 마커 이미지
    });
>>>>>>> f7f5b39672d2660c1fe18c805d654cc0ef7bfe4a
//     var content = '<div class="customoverlay">' +
//     '  <a href='+positions[i].link+'>' +
//     '    <span class="title">'+positions[i].title+ '</span>' +
//     '  </a>' +
//     '</div>';

//     // 커스텀 오버레이를 생성합니다
//     var customOverlay = new kakao.maps.CustomOverlay({
//     map: map,
//     position: positions[i].latlng,
//     content: content,
//     yAnchor: 1 
// });
var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].content // 인포윈도우에 표시할 내용
});

// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
// 이벤트 리스너로는 클로저를 만들어 등록합니다 
// for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
// kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    let clickstatus = 0;
    return function() {
        if(clickstatus ===0){
            infowindow.open(map, marker);
            clickstatus = 1;
        }
        else if((clickstatus ===1)){
            infowindow.close();
            clickstatus = 0;
        }
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
// function makeOutListener(infowindow) {
//     return function() {
//         infowindow.close();
//     };
// }
<<<<<<< HEAD
let input1 = document.querySelector(".input1");
let inputbox1 = document.querySelector(".input_box1")
let inputText1 =document.querySelectorAll(".input_text1");
let input1I = document.querySelector(".input1 i");
let input2 = document.querySelector(".input2");
let inputbox2 = document.querySelector(".input_box2")
let inputText2 =document.querySelectorAll(".input_text2");
let input2I = document.querySelector(".input2 i");
let input3 = document.querySelector(".input3");
let inputbox3 = document.querySelector(".input_box3")
let inputText3 =document.querySelectorAll(".input_text3");
let input3I = document.querySelector(".input3 i");
let input4 = document.querySelector(".input4");
let inputbox4 = document.querySelector(".input_box4")
let inputText4 =document.querySelectorAll(".input_text4");
let input4I = document.querySelector(".input4 i");

    input1.addEventListener("click",function(){
        if(inputbox1.style.display === "block"){
            inputbox1.style.display = "none";
            input1I.style.transform = "rotateX(0deg)";

        }
        else{
            inputbox1.style.display = "block";
            input1I.style.transform = "rotateX(180deg)";
        }
        for(let j =0; j<inputText1.length;j++){
            inputText1[j].addEventListener("click",function(e){
                let text =e.currentTarget.textContent
            })
        }
    })
    input2.addEventListener("click",function(){
        if(inputbox2.style.display === "block"){
            inputbox2.style.display = "none"
            input2I.style.transform = "rotateX(0deg)";

        }
        else{
            inputbox2.style.display = "block"
            input2I.style.transform = "rotateX(180deg)";
        }
        for(let j =0; j<inputText2.length;j++){
            inputText2[j].addEventListener("click",function(e){
                let text =e.currentTarget.textContent
            })
        }
    })
    input3.addEventListener("click",function(){
        if(inputbox3.style.display === "block"){
            inputbox3.style.display = "none"
            input3I.style.transform = "rotateX(0deg)";

        }
        else{
            inputbox3.style.display = "block"
            input3I.style.transform = "rotateX(180deg)";
        }
        for(let j =0; j<inputText3.length;j++){
            inputText3[j].addEventListener("click",function(e){
                let text =e.currentTarget.textContent
            })
        }
    })
    input4.addEventListener("click",function(){
        if(inputbox4.style.display === "block"){
            inputbox4.style.display = "none"
            input4I.style.transform = "rotateX(0deg)";

        }
        else{
            inputbox4.style.display = "block"
            input4I.style.transform = "rotateX(180deg)";
        }
        for(let j =0; j<inputText4.length;j++){
            inputText4[j].addEventListener("click",function(e){
                let text =e.currentTarget.textContent
            })
        }
    })



=======

let maplistContent = document.querySelectorAll(".maplist div");

for(let i =0; i<maplistContent.length;i++){
    maplistContent[i].addEventListener("mouseover",function(e){
        e.currentTarget.classList.add("maphover");
    })
    maplistContent[i].addEventListener("mouseout",function(e){
        e.currentTarget.classList.remove("maphover");
    })
}
>>>>>>> f7f5b39672d2660c1fe18c805d654cc0ef7bfe4a
