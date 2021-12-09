////////////////////// 유튜브 api 연결 ///////////////////////////
 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script'); //요즘은 var 보다는 const, let 을 더 많이 사용한다고 함.  createElement('script') 스크립트라는 객체 생성하여 변수 tag에 담음.

      tag.src = "https://www.youtube.com/iframe_api"; // 그 변수의 src 주소는 유튜브api 라이브러리 주소
      var firstScriptTag = document.getElementsByTagName('script')[0]; // 태그 내임 script 를 찾아서 첫 번째를 또 변수 firstScriptTag 에 담음
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  // parentNode = 부모요소를 뜻 함. 부모요소 전에 insertBefore = 무엇인가의 이전 부분에 삽입/
    //insertBefore (삽입할 요소, 삽입할 위치 )
 
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
    
      function onYouTubeIframeAPIReady() {
      new YT.Player('player', {   //여기서 player 은 id 값을 의미 함, 유튜브 영상에서 우클릭해서 <소스코드복사> 는 제어 할 수 없이 단순 출력만 가능. 하지만 공유 > 퍼가기 > 
          //height: '360',
         // width: '640',
          videoId: 'JyRoUu1WuW8', //최초 재생할 유튜브 id
          playerVars: { //영상을 재생하기 위한 변수들
            autoplay: true, //자동 재생 유무
            loop: true, //반복 재생
            playlist:'JyRoUu1WuW8', //반복 재생할 유튜브 영상 ID 
          },
          events :{
              onReady: function(event){ //속성 하나 만듦. 속성에 익명의 함수 할당. 객체 데이터 내부에 함수 데이터 할당되어 있는 것을 매소드라고 함. 매개변수 event 사용.
                  //onReady 라는 매소드가 실행되면, 
                  event.target.mute(); // mute = 음소거
              }
          }
          //events: {
          //  'onReady': onPlayerReady,
          //  'onStateChange': onPlayerStateChange
          //}
        });
      }

      // 4. The API will call this function when the video player is ready.
     //function onPlayerReady(event) {
     //  event.target.playVideo();
     //}

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
     // var done = false;
     // function onPlayerStateChange(event) {
     //   if (event.data == YT.PlayerState.PLAYING && !done) {
     //     setTimeout(stopVideo, 6000);
     //     done = true;
     //   }
     // }
     // function stopVideo() {
     //   player.stopVideo();
     // }

