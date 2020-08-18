$(document).ready(function(){
    $(function(){ $('#nav_about').click(function(){ 
        $('html,body').animate({scrollTop:$('#about').offset().top}, 500);});  
    }); 
}); 

$(document).ready(function(){
    $(function(){ $('#nav_projects').click(function(){ 
        $('html,body').animate({scrollTop:$('#projects').offset().top}, 500);});  
    }); 
}); 

$(document).ready(function(){
    $(function(){ $('#nav_contact').click(function(){ 
        $('html,body').animate({scrollTop:$('#contact').offset().top}, 500);});  
    }); 
}); 

$(function(){
  
    $(window).scroll(function(){
      //var $(window).scrollTop(); 為 scroll
      var scroll = $(window).scrollTop();
      
      if( scroll >= 200){
        // 當卷軸超過70px,.gototop就淡入，如果小於就淡出
        $(".gototop").fadeIn();
        
      }else{
        
        $(".gototop").fadeOut();
        
      }
    });
    // 當我按下.gototop時，添加動畫讓卷軸跑道最上面
    $('.gototop').click(function(){
      $('html,body').animate({
        scrollTop:$('html').offset().top
      })
      
      return false;
    });
  
  })