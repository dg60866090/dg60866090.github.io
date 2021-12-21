//swiper 
var swiper = new Swiper(".container", {});


// 네비게이션 메뉴 클릭시, on 클래스 추가
const nav_lis = document.querySelectorAll('nav li');
for (n = 0; n < nav_lis.length; n++) {
    nav_lis[n].querySelector('a').addEventListener('click', function () {
        for (j = 0; j < nav_lis.length; j++) {
            nav_lis[j].classList.remove('on');
        }
        this.parentNode.classList.add('on');
    });
}


const main_sliders = document.querySelectorAll('.main_slider');

for (m = 0; m < main_sliders.length; m++) {
    

    // graph width 조정
    const grh_percents = main_sliders[m].querySelectorAll('.save_container > .save');
   
    for (p = 0; p < grh_percents.length; p++) {
        const grph_percent = grh_percents[p].querySelector('.save_graph');
        let grph_percent_data = Number(grph_percent.dataset.percent);

        let grph_percent_plt = parseInt(grph_percent_data / 20);

        switch (grph_percent_plt) {
            case 0:
                grph_percent.style.background = "#FF5F00";
                break;
            case 1:
                grph_percent.style.background = "#FEB700";
                break;
            case 2:
                grph_percent.style.background = "#55ACEE";
                break;
            case 3:
                grph_percent.style.background = "#0A73C3";
                break;
            default:
                grph_percent.style.background = "#005F59";
        }

        // if(0 <= grph_percent_data && grph_percent_data < 20){
        //     grph_percent.style.background = "#FF5F00";
        // }else if(20 <= grph_percent_data && grph_percent_data < 40){
        //     grph_percent.style.background  = "#FEB700";
        // }else if(40 <= grph_percent_data && grph_percent_data < 60){
        //     grph_percent.style.background = "#55ACEE";
        // }else if(60 <= grph_percent_data && grph_percent_data < 80){
        //     grph_percent.style.background = "#0A73C3";
        // }else{
        //     grph_percent.style.background = "#005F59";
        // }

        grph_percent.style.width = `${grph_percent_data}%`;
    }




    //이체 버튼 클릭했을 때
    main_sliders[m].querySelector('.transfer_btn').addEventListener('click', function () {

        var target = main_sliders[m].querySelector(".transfer_container");
        let bottom = -100;

        function move(time) {
            bottom++;
            target.style.bottom = `${bottom}%`;

            if (bottom >= -100) {
                requestAnimationFrame(move)
            } else if (bottom == 0) {

                cancelAnimationFrame(move)
                target.style.bottom = `0%`;
            }
        }

        // window.requestAnimationFrame(move);


    });



    //kslider height 조정
    const kslider_btn = main_sliders[m].querySelector('.kslider_btn');
    const kslider = main_sliders[m].querySelector('.kslider');
    kslider_btn.addEventListener('click', function () {
        const Btn_on = kslider.classList.contains('click');
        kslider.classList.toggle('click');

    });




    // 가격 합산 찍어주기
    //각각 day 마다 반복 실행
    const days = main_sliders[m].querySelectorAll('.history_wrap > .day');
    for (let i = 0; i < days.length; i++) {

        //각각 day 의 지출내역 반복 실행

        const day_total = days[i].querySelectorAll('.history > li');
        let total_price = 0;
        for (let t = 0; t < day_total.length; t++) {
            //각각 day 의 지출에서 출금만 선택  
            const withdraw_leng = day_total[t].querySelector('.withdraw')
            let withdraw_price = unComma(withdraw_leng.textContent);
            console.log(withdraw_price)

            //출금 가격 합계 
            total_price += Number(withdraw_price);
            //각각 day의 total에 text 찍어주기
            days[i].querySelector('.total').textContent = comma(total_price);
        }
    }

} //main_ slider 반복문




// 계좌 영역 차트 js
//차트 데이터 속성 설정
// const chartdata = {
//     labels: [
//       'January',
//       'February',
//       'March',
//       'April'
//     ],
//     datasets: [{
//       type: 'bar',
//       label: 'Bar Dataset',
//       data: [10, 20, 30, 40],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.2)'
//     }, {
//       type: 'line',
//       label: 'Line Dataset',
//       data: [50, 50, 50, 50],
//       fill: false,
//       borderColor: 'rgb(54, 162, 235)'
//     }]
//   };

// //차트 옵션 설정(X,Y축)
// var chartOptions = {
//     scales: {
//         xAxes: [
//             {
//                 ticks: {
//                     beginAtZero: true
//                 },
//                 scaleLabel: {
//                     display: true,
//                     labelString: "x축 텍스트",
//                     fontColor: "red"
//                 },
//                 stacked: true
//             }
//         ],
//         yAxes: [
//             {
//                 scaleLabel: {
//                     display: true,
//                     labelString: "y축 텍스트",
//                     fontColor: "green"
//                 },
//                 ticks: {
//                     // max: 7000,
//                     min: 0,
//                     // stepSize: 1000,
//                     autoSkip: true
//                 },
//                 stacked: true
//             }
//         ]
//     },
//     responsive: true
// };

// //차트 추가
// var ctx = document.getElementsByClassName("myChart");
// JsChartBar = new Chart(ctx, {
//     type: 'bar',
//     data: chartdata,
//     options: chartOptions
// });







//천자리마다 콤마 찍어주기
function comma(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//콤마 제거
function unComma(pStr) {
    var strCheck = /\,/g;
    pStr = pStr.replace(strCheck, '');
    return pStr;
}