$(function() {
    //添加节流阀 防止点击滚动与页面滚动冲突
    var flag = true;
    toolToggle();
    $(window).scroll(function() {
        toolToggle();
        if (flag == true) {

            //滑动到拿个floor自动在左侧显示
            $('.floor>div').each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.fixedtool li').removeClass('current');
                    $('.fixedtool li').eq(i).addClass('current');
                }
            });
        }
    });
    $('.fixedtool li').click(function() {
        flag = false;
        $('.fixedtool li').removeClass('current');
        $(this).addClass('current');
        var scrollAt = $('.floor>div').eq($(this).index()).offset().top;
        console.log(scrollAt);
        $('html,body').stop().animate({
            scrollTop: scrollAt,
        }, function() {
            flag = true;
        });
    });

    function toolToggle() {
        if ($(document).scrollTop() >= $('.recomlikes').offset().top) {
            $('.fixedtool').css('display', 'block');
        } else {
            $('.fixedtool').css('display', 'none');
        }
    }
})