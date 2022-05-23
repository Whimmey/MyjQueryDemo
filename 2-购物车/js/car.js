$(function() {
    $('.checkall').change(function() {
        $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
        $('.cart-item').toggleClass('check-cart-item')
    });
    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        }
        $(this).parents('.cart-item').toggleClass('check-cart-item')
        getSum();
    });
    $('.increment').click(function() {
        $(this).siblings('.itxt').val($(this).siblings('.itxt').val() - 0 + 1);
        var price = $(this).parent().parent().siblings('.p-price').text();
        price = price.substr(1); //去除RMB￥符号
        var num = $(this).siblings('.itxt').val();
        $(this).parent().parent().siblings('.p-sum').text('￥' + (price * num).toFixed(2));
        getSum()
    });
    $('.decrement').click(function() {
        if ($(this).siblings('.itxt').val() >= 2) {
            $(this).siblings('.itxt').val($(this).siblings('.itxt').val() - 1);
            var price = $(this).parent().parent().siblings('.p-price').text();
            price = price.substr(1); //去除RMB￥符号
            var num = $(this).siblings('.itxt').val();
            $(this).parent().parent().siblings('.p-sum').text('￥' + (price * num).toFixed(2));
        } else {
            alert('数量不能小于0！')
        }
        getSum()
    });
    $('.itxt').change(function() {
        $(this).val()
        var price = $(this).parent().parent().siblings('.p-price').text();
        price = price.substr(1); //去除RMB￥符号
        var num = $(this).val();
        $(this).parent().parent().siblings('.p-sum').text('￥' + (price * num).toFixed(2));
        getSum()
    });

    //删除购物车商品
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    });
    //删除选中的商品
    $('.remove-batch').click(function() {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    });
    //删除所有商品
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    });

    //获得变化之后的选中商品个数和价格
    function getSum() {
        var count = 0;
        var sum = 0;
        $('.j-checkbox').each(function(i, domEle) {
            if ($(domEle).prop('checked')) {
                count += ($('.itxt').eq(i).val() - 0);
                sum += ($('.p-sum').eq(i).text().substr(1) - 0); //记得去掉RMB符号
            }
        });
        $('.amount-sum em').text(count);
        $('.price-sum em').text('￥' + sum.toFixed(2));
    }
});