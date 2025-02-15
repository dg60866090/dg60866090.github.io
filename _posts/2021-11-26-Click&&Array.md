---
layout: post
title:  "2021-11-26"
---



# click 이벤트 & 배열 



온라인 수강 이후 처음으로 실습하는 시간 ! 

나만의 사진 포트폴리오 만들기이다. 실습을 하기 위해 몇 가지 자바스크립트 기능을 배웠다. 

그 중 배운 내용 토대로 개념과 예시를 간단히 정리해보자 ! 





1. onclick / click 

   - 주어진 요소를 클릭했을 때 나타나는 이벤트 

     
   
	**onclick** 
	html의 태그에 onclick 이란 속성을 부여해서 함수 실행하는 방법. 
	
	onclick 속성을 작성 한 객체를 클릭하면 클릭 이벤트 발생. 
	
	```html
   <div class="clickDiv" onclick ="clickEvent">클릭</div>
   ```
   
   ```javascript
   <script>
   	function clickEvent (){
   		alert('div.clickDikv 를 클릭함! '); 
   	}
   </script>
   ```
   
   
   
   **click**
   
   스크립트로 객체를 클릭하면 클릭 이벤트 발생
   
   ```html
   <div class="clickDiv">클릭</div>
   ```
   
   ``` javascript
   <script>
       document.querySelector('div.clickDiv').addEventListener('click', function(){
       alert('div.clickDikv 를 클릭함! '); 
   });
   </script>
   ```
   
   

2.  배열
   - 배열 만드는 방법. 빈 값으로 배열을 생성할 수도, 배열에 요소를 담아 생성할 수도 있음. 하단은 빈 배열을 만드는 방법
   
     ``` javascript
     let arr = []; 
     let arr  = new Array();
     ```
   
     
   
   - 배열에 요소를 담아 생성하는 방법은 [ 대괄호 ] 안에 콤마(,) 로 구분지어 작성하면 된다. 
   
     ``` javascript
     let arr = ["사과", 3 , ["바나나", "딸기"]];
     ```
     
     
     
   - 배열의 개수 구하기 . 배열변수에 .length 붙임. 
   
     ``` javascript
     console.log(arr.length) // 3  
     ```
     
     
     
   - 이미 있는 배열에 요소 추가하고 싶을 때  push를 사용! 배열 요소 맨 끝에 추가됨. 
   
     ``` javascript
     arr.push('포도') 
     console..log(arr) //["사과", 3 , ["바나나", "딸기"], "포도"];
	  ```
     
     
     
   - concat : 배열에 다른 배열을 이어 붙인 값 반환
     
     ``` javascript
     var myArr = [1, 3, 5]
     var myArr2 = [2, 4, 8]
     myArr = myArr.concat(myArr2)
     console.log(myArr) //[1, 3, 5, 2, 4, 8] 반환
     ```
     
     
     
   - sort : 배열을 어떠한 기준으로 정렬해준다. 배열 내 객체들이 직접적으로 변경 됨. 
   
     내림차순 정렬
   
     ``` javascript
     array.sort(function (a, b) {
         return a < b ? 1 : -1;
     });
     console.log(array);
     ```
     
     오름차순 정렬
     
     ```javascript
     array.sort(function (a, b) {
         return a > b ? 1 : -1;
     });
     console.log(array);
     ```
   
   
   
   - filter : 어떠한 조건으로 filter 함수 실행 후, 결과 값이 변경되어 반환되지만 sort 와는 다르게 본래의 배열의 내용은 바뀌지 않는다. 
   
     ``` javascript
     var array = [3, 1, 4, 2, 8, 0, 9];
     var filtered = array.filter(function (it) {
       return it < 5;
     });
     console.log(filtered); //[3, 1, 4, 2, 0] 반환 
     console.log(array) // [3, 1, 4, 2, 8, 0, 9]; 반환
     ```
     
     
     
   - 배열 요소 중 다른 값으로 변경하기. 
   
     바꾸고자 하는 배열의 index 선택 후 변경. 
   
     ``` javascript
     var myArr = [1, 3, 5];
     myArr[2] = 4;
     console.log(myArr) // [1,3,4];
     ```
     
     

