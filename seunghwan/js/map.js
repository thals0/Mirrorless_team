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

    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "./img/마커이미지.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    
    var imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
    var imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다. 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize ,imageOption); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지
    });
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

let maplistContent = document.querySelectorAll(".maplist div");

for(let i =0; i<maplistContent.length;i++){
    maplistContent[i].addEventListener("mouseover",function(e){
        e.currentTarget.classList.add("maphover");
    })
    maplistContent[i].addEventListener("mouseout",function(e){
        e.currentTarget.classList.remove("maphover");
    })
}