// swiper 
const swiper = new Swiper('.theme_container .swiper-container', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 8,
});




// 상품 상세 페이지

//탭 클릭
//  const prdTab = document.querySelectorAll('.prd_tab > a');
// for(var i = 0; i < prdTab.length; i ++){
//   prdTab[i].addEventListener('click',function(e){
//     e.preventDefault(); 
//   for(var j =0 ; j < prdTab.length ; j ++){
//     prdTab[j].classList.remove('select');
//   }
//     this.classList.add('select');
//     let eleId = this.getAttribute('id');

//     document.querySelectorAll('.prd_detail_wrap > div').dataset.id(eleId).classList.add('show');
//     // $('.prd_detail_wrap > div').removeClass('on');
//     // $('.prd_detail_wrap > div').data('eleId').addClass('on');
//   });
// }

//탭 클릭 시 컨텐츠 노출
$(document).ready(function(){
  $('.prd_detail_wrap >.prd_detail').addClass('show');
  $('.prd_tab > a').click(function(){
    $('.prd_tab > a').removeClass('select');
    $(this).addClass('select');
    const eleId = $(this).attr('id');

    $('.prd_detail_wrap > div').each(function(){
      if($(this).data('id') == eleId){
        $('.prd_detail_wrap > div').removeClass('show');
        $(this).addClass('show');
      }
    });
  });
});


document.querySelector('.buy_btn').addEventListener('click',function(){
  document.querySelector('.popup_wrap').style.display="block";
});

document.querySelector('.close_btn').addEventListener('click',function(){
  document.querySelector('.popup_wrap').style.display="none";
});