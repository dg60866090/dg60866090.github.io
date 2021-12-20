//swiper 
// var swiper = new Swiper(".container", {});


// graph width 조정
const grh_percents = document.querySelectorAll('.save_container > .save');
for(p = 0; p < grh_percents.length; p ++){
    const grph_percent = grh_percents[p].querySelector('.save_graph');
    const grph_percent_data = Number(grph_percent.dataset.percent);
    
    console.log(grph_percent_data)
    if(0 < grph_percent_data < 20){
        grph_percent.style.background = "#FF5F00"
    }else if(20 <= grph_percent_data < 40){
        grph_percent.style.background = "#FEB700"
    }else if(40 <= grph_percent_data < 60){
        grph_percent.style.background = "#55ACEE"
    }else if(60 <= grph_percent_data < 80){
        grph_percent.style.background = "#0A73C3"
    }else{
        grph_percent.style.background = "#005F59"
    }

    grph_percent.style.width = `${grph_percent_data}%`;
}



//kslider height 조정
const kslider_btn = document.querySelector('.kslider_btn');
const kslider = document.querySelector('.kslider');
kslider_btn.addEventListener('click',function(){
 const Btn_on = kslider.classList.contains('click');
 if(Btn_on){
    kslider.classList.remove('click');
 }else{
    kslider.classList.add('click');
 }
});




// 가격 합산 찍어주기
//각각 day 마다 반복 실행
const days = document.querySelectorAll('.history_wrap > .day');
for(let i = 0; i < days.length; i ++){

    //각각 day 의 지출내역 반복 실행
    
    const day_total = days[i].querySelectorAll('.history > li');
    let total_price = 0;
    for(let t = 0; t < day_total.length; t++){     
        //각각 day 의 지출에서 출금만 선택  
        const withdraw_leng = day_total[t].querySelector('.withdraw')
        let withdraw_price = unComma(withdraw_leng.textContent);
        console.log(withdraw_price)
        
       //출금 가격 합계 
       total_price += Number(withdraw_price);
       //각각 day의 total에 text 찍어주기
       days[i].querySelector('.total').textContent = priceToString(total_price);
       
    }
    
}






//천자리마다 콤마 찍어주기
function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//콤마 제거
function unComma(pStr) { 
    var strCheck = /\,/g;
     pStr = pStr.replace(strCheck, ''); 
    return pStr;
 }
