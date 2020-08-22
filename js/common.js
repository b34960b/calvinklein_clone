// common.js

(function($){
  const win = $(window);
  const headBox = $('#headBox');
  const container = $('#container');
  const footBox = $('#footBox');

  win.on('scroll', function(){
    let winScroll = win.scrollTop();
    // console.log(winScroll);
    if(winScroll > 10){
      headBox.addClass('action'); 
    }else{
      headBox.removeClass('action');
      // console.log('class remove')
    }
  }); //슬라이드배너 스크롤 내릴때 사라지기

  
  const slide = $('.prompSlide');
  let i = 0;
    
  setInterval(function(){
    i++;
    if(i>1){i=0;}
    slide.animate({left:i*-100+'%'});
  },2000);






})(jQuery);