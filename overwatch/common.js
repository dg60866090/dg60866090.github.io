$(document).ready(function(){
    $('.container .heroes > div').each(function(){
    var heroIndex = $(this).index();
    heroIndex = heroIndex + 1 ;

    var heroImage = $(this).children('.image').css('background-image','url("https://raw.githubusercontent.com/ParkYoungWoong/overwatch-hero-selector-vanilla/master/images/hero'+ heroIndex +'.png")');
    console.log(heroImage);
    });

});