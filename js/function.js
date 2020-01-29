$(function(){
   var nowIdx=0;
    
    setInterval(function(){
        $('.main_img>ul>li').eq(nowIdx).stop().fadeOut();
        if(nowIdx<3){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        $('.main_img>ul>li').eq(nowIdx).stop().fadeIn();
    },3000);
});