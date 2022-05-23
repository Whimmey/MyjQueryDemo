// 监控模块
(function() {
    $('.tab').on('click', 'a', function() {
        $('.tab a').removeClass('active');
        $(this).addClass('active');
        //content切换
        $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    })
})();