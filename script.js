$(function(){

    $('#page_top').click(function(){
        // animateメソッドを用いて、
        // アニメーション付きでスクロールするようにしてください。
        $('html, body').animate({
        'scrollTop': 0
        },500);
    });
    var mySwiper = new Swiper ('.swiper-container', {
        // ここからオプション
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    
      $(function(){
        $("#menu").css("display","none");
        $("#menu-btn").on("click", function() {
           $("#menu").slideToggle(300);
           $(this).toggleClass("active");
        });
        $("#menu").on("click", function() {
          $("#menu").hide();
       });       
     });


     var thisOffset;
     $(window).on('load',function(){
       thisOffset = $('.hero').offset().top + $('.hero').outerHeight()+200;
     });
     $(window).scroll(function(){
             if( $(window).scrollTop() + $(window).height() > thisOffset){
               $('.fixed_button_area').addClass('is_fixed').fadeIn(800);
             } else {
               $('.fixed_button_area').removeClass('is_fixed').fadeIn(800);
               // 特定の要素を超えていない
             }        

     });
     
     $('.qa_list_item').click(function() {
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')) {
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠してください
        $answer.slideUp();
        
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find('span').text('+');
        
      } else {
        $answer.addClass('open'); 
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();
        
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(this).find('span').text('-');
      }
    });
});