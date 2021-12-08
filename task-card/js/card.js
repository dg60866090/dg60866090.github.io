
let card_heart = document.querySelectorAll('.card .info .heart');
for(var i = 0; i <  card_heart.length; i ++ ){
    card_heart[i].addEventListener('click',function(){
        this.classList.toggle('on');
        let count_heart = this.innerHTML; 
        if( this.classList.contains('on')){
            count_heart = Number(count_heart);
            count_heart= count_heart+1;
            this.innerHTML = count_heart;
        }else{
            count_heart = Number(count_heart);
            count_heart= count_heart -1 ;
            this.innerHTML = count_heart;
        }
    });
}

