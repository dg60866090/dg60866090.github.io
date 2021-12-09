const searchEl = document.querySelector('.search');  //클래스가 search 찾아서 변수에 담기. 여기서 document 는 html 그 자체를 의미함.
const searchInput = searchEl.querySelector('input');  // searchEl 변수에 담아놓은 .search 에서 또 input 찾기

//변수 searchEl 에 담아놓은 .search 에 이벤트핸들러 추가, 이벤트는 click 임. 
searchEl.addEventListener('click', function(){
    searchInput.focus();
    
});

//검색 input 에 focus 되었을 때 .
searchInput.addEventListener('focus', function(){
    searchEl.classList.add('focused'); //클래스 추가하겠다.
    searchInput.setAttribute('placeholder', '검색어를 입력하세요.'); //html 속성 = attribute , searchInput에 html 속성을 지정하겠다.
    //searchEl.addClass('focused'); 
});

//검색 input에서 focus가 벗어났을 때, 
searchInput.addEventListener('blur', function(){
    searchEl.classList.remove('focused'); //클래스 추가하겠다.
    searchInput.setAttribute('placeholder', ''); //html 속성 = attribute , searchInput에 html 속성을 지정하겠다.
    //searchEl.addClass('focused'); 
});


const badgeEl = document.querySelector('header .badges');
const toTopEl= document.querySelector('#to-top');

//gsap.to(요소, 지속시간, 옵션)
window.addEventListener('scroll',_.throttle(function(){
    if(window.scrollY >=  132){
        //badgeEl.style.display = 'none' 
        gsap.to(badgeEl , .6, {
            opacity:0,
            display:'none'
        })
      //top 버튼 보이기
         gsap.to(toTopEl, .2, {
          x : 0 
          });
    }else{    
        //badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        })
        //top 버튼 숨기기
       gsap.to(toTopEl, .2, {
         x : 100 
       });
    }
},200));


toTopEl.addEventListener('click', function(){
  gsap.to(window , .7, {
    scrollTo : 0
  }); // window 객체는 화면 자체 = 창
});


const fadeEls = document.querySelectorAll('.visual .fade-in'); //.fade-in 클래스 가진 div 전부 선택; 
fadeEls.forEach(function(fadeEl, index){ //객체 fadeEl를 각가 실행하는데, 반복되는 횟수 = index 매개변수
    gsap.to(fadeEl, 1, {  //fadeEl 이란 객체를 1초동안 실행, 옵션은 딜레이 and 오파시티
        delay:(index+1) * .7, // 0.7, 1.4, 2.1, 2.8  ==> .fade-in 클래스를 가진 div 는 4개니까, 4번만 실행.
        opacity:1
    });
    
});


//new Swiper(선택자, 옵션);
new Swiper(".notice-line .swiper-container", {
     direction:'vertical',
    autoplay: true,
    loop:true,
});  //자바스크립트에서 new 는 생성자(클래스), 소괄호 사이에 넣는 것을 인수. 

new Swiper(".promotion .swiper-container", {
    slidesPerView : 3,
    spaceBetween : 10, 
    centeredSlides: true,
    //autoplay: true,
    loop:true,
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});  //자바스크립트에서 new 는 생성자(클래스), 소괄호 사이에 넣는 것을 인수. 
//swiper 맨 하단
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween : 30,
  slidesPerView : 5,  
  navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});



const promotionEl = document.querySelector('.promotion'); //var promotionEl = $(document).find('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion'); // var promotionToggleBtn = $('.toggle-promotion');
let isHidePromotion = false;

//$(promotiontoggleBtn).click(function(){});
//promotionToggleBtn.addEventListener('click',function(){});
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion  = !isHidePromotion; // 반대값 코드로 전환시켜줌.
    if(isHidePromotion){
    //만일 true 면 , 숨김처리 해야함! 
        promotionEl.classList.add('hide'); //addClass('hide') ==> 변수.classList.add('클래스명');
        
    }else{
        //false 면, 숨김처리 해제.
        promotionEl.classList.remove('hide');
        
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애네메이션 동작 시간 { //gsap의 to라는 메소드는 selecotr 이란 선택자를 받을 것이고, 두번째론 random 함수를 통해서 지속시간을 받을 것이고, 세번째론 옵션을 지정할 것ㄴ
        {//옵션
            y : size,
            repeat: -1, // 무한 반복 
            yoyo:true, // 한 번 재생한 애니메이션을 역실행해서 자연스럽게 해줌
            ease: Power1.easeInOut, //gsap easing 검색해서 들어가면, 애니메이션 지정하고 하단에 나오는 스크립트에서 gsap = TweenMax 이고, to 또하 동일.
            delay:random(0, delay)// 지연시간 옵션 
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

//scroll function
const spyEls= document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({ //Scene 감시하는 요소가 .8부분에서 나타나면, setClassTollge 이라는 메소드 실행
      triggerElement : spyEl,//보여짐 여부를 감시할 요소를 지정 
      triggerHook: .8, //뷰포트 기준으로 top:0, bottom:1 임. 0.8 부분에서 trigger 강제로 무엇을 시키겠다. 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



//올해 몇 년도인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해 년도 반환











