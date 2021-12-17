

$(function(){
    var isOver1 = false; // 주메뉴 마우스 이벤트
    var isOver2 = false; // 부메뉴 마우스 이벤트
    var isOver11 = false;
    var isOver22 = false; 
    var isOver111 = false;
    var isOver222 = false; 
    var isOver1111 = false;
    var isOver2222 = false; 

    function goHide1(){
        if(!isOver1 && !isOver2){
            $('.gnb_depth2_1').stop().fadeOut('fast');
        }
    };
    function goHide2(){
        if(!isOver11 && !isOver22){
            $('.gnb_depth2_2').stop().fadeOut('fast');
        }
    };
    function goHide3(){
        if(!isOver111 && !isOver222){
            $('.gnb_depth2_3').stop().fadeOut('fast');
        }
    };
    function goHide4(){
        if(!isOver1111 && !isOver2222){
            $('.gnb_depth2_4').stop().fadeOut('fast');
        }
    };




    // 첫번째 메뉴
    $('.openAll01').on('mouseover focus', function(){
        if( parseInt($('header').css('width')) > 800)
        $(".gnb_depth2_1").fadeIn('fast');
        isOver1 = true;
    });
    $('.gnb_depth2_1').mouseover(function(){
        isOver2 = true;
    });
    $('.gnb_depth2_1').focus(function(){
        isOver2 = true;
    });


    $('.openAll01').mouseout(function(){
        isOver1 = false;
        setTimeout(goHide1, 200);
    });
    $('.gnb_depth2_1 li:last-child a').blur(function(){
        isOver1 = false;
        setTimeout(goHide1, 200);
    });
    $('.gnb_depth2_1').mouseout(function(){
        isOver2 = false;
        setTimeout(goHide1, 200);
    });

    // 두번째 메뉴
    $('.openAll02').on('mouseover focus', function(){
        if( parseInt($('header').css('width')) > 800)
        $(".gnb_depth2_2").fadeIn('fast');
        isOver11 = true;
    });
    $('.gnb_depth2_2').mouseover(function(){
        isOver22 = true;
    });
    $('.gnb_depth2_2').focus(function(){
        isOver22 = true;
    });


    $('.openAll02').mouseout(function(){
        isOver11 = false;
        setTimeout(goHide2, 200);
    });
    $('.gnb_depth2_2 li:last-child a').blur(function(){
        isOver11 = false;
        setTimeout(goHide2, 200);
    });
    $('.gnb_depth2_2').mouseout(function(){
        isOver22 = false;
        setTimeout(goHide2, 200);
    });

    // 세번째 메뉴
    $('.openAll03').on('mouseover focus', function(){
        if( parseInt($('header').css('width')) > 800)
        $(".gnb_depth2_3").fadeIn('fast');
        isOver111 = true;
    });
    $('.gnb_depth2_3').mouseover(function(){
        isOver222 = true;
    });
    $('.gnb_depth2_3').focus(function(){
        isOver222 = true;
    });


    $('.openAll03').mouseout(function(){
        isOver111 = false;
        setTimeout(goHide3, 200);
    });
    $('.gnb_depth2_3 li:last-child a').blur(function(){
        isOver111 = false;
        setTimeout(goHide3, 200);
    });
    $('.gnb_depth2_3').mouseout(function(){
        isOver222 = false;
        setTimeout(goHide3, 200);
    });

    // 네번째 메뉴
    $('.openAll04').on('mouseover focus', function(){
        if( parseInt($('header').css('width')) > 800)
        $(".gnb_depth2_4").fadeIn('fast');
        isOver1111 = true;
    });
    $('.gnb_depth2_4').mouseover(function(){
        isOver2222 = true;
    });
    $('.gnb_depth2_4').focus(function(){
        isOver2222 = true;
    });


    $('.openAll04').mouseout(function(){
        isOver1111 = false;
        setTimeout(goHide4, 200);
    });
    $('.gnb_depth2_4 li:last-child a').blur(function(){
        isOver1111 = false;
        setTimeout(goHide4, 200);
    });
    $('.gnb_depth2_4').mouseout(function(){
        isOver2222 = false;
        setTimeout(goHide4, 200);
    });


    // swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5500,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationClickable:true
    });

    // 모바일 메뉴 열기
    $('.openMognb').click(function(){
        $('header').addClass('on');
        $('header .header_cont').slideDown('fast');
    });
    $('.closePop a').click(function(){
        $('header .header_cont').slideUp('fast');
        $('header').removeClass('on')
    });
    

    // 모바일에서 메뉴 종료 후 pc에서 메뉴 사라짐 방지
    $(window).resize(function(){
        if( parseInt($('header').css('width')) > 800)
            $(".header_cont").show();
    });


    $(".place_list li").hover(function(){
        $(this).find(".top_inner").stop().fadeIn(300);
    }, function(){
        $(this).find(".top_inner").stop().fadeOut(300);
    });


    $(".quick_open").click(function(){
        event.preventDefault();
        $(".chat").fadeIn(300);
        $(".phone").fadeIn(300);
        $(this).hide();
    });

    $(".quick_close").click(function(){
        event.preventDefault();
        $(".chat").fadeOut(300);
        $(".phone").fadeOut(300);
        $(".quick_open").show();
    });
});

$(function(){

    // smooth scroll

    $('a.s_point').smoothScroll(300);

    $(window).scroll(function(){
        if($(document).scrollTop()<50){
            $('.to_top').addClass('hide');
        }else{
            $('.to_top').removeClass('hide');
        }
    });
});