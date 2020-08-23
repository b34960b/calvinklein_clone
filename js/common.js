// common.js

(function($){
  const win = $(window);
  const headBox = $('#headBox');
  const container = $('#container');
  const footBox = $('#footBox');

  const headFoot = $('.header-foot');
  const headNoneScroll = headFoot.offset().top;

  win.on('scroll', function(){
    let winScroll = win.scrollTop();
    // console.log(winScroll);
    if(winScroll > 10){
      headBox.addClass('action'); 
    }else{
      headBox.removeClass('action');
      // console.log('class remove')
    }

    if (winScroll >= headNoneScroll - 70) {
      $('.display-None').css("display", "block");
      headBox.css("display", "none");
    } else {
      $('.display-None').css("display", "none");
      headBox.css("display", "block");
    } //헤더 복사 후, 기존 헤더 숨기고 새로운 헤더는 포지션 기본으로 스르륵 올라가기
  }); //슬라이드배너 스크롤 내릴때 사라지기

  
  
  const slide = $('.prompSlide');
  let i = 0;
    
  setInterval(function(){
    i++;
    if(i>1){i=0;}
    slide.animate({left:i*-100+'%'});
  },2000);






})(jQuery);