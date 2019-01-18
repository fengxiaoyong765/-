// input的点击事件开始
// 当 input 文本框获取焦点的时候触发
// 第一个开始
$('.home').on('focus', function () {
    console.log('input 获取焦点了')
    $('.y_difang').addClass('dis')
})

// 当 input 文本框失去焦点的时候触发
$('.home').on('blur', function () {
    console.log('input 失去焦点了')
    $('.y_difang').removeClass('dis')
})
//第二个开始
$('.Rtime').on('focus', function () {
    console.log('input 获取焦点了')
    $('.y_ruzhu').addClass('dis')
})

// 当 input 文本框失去焦点的时候触发
$('.Rtime').on('blur', function () {
    console.log('input 失去焦点了')
    $('.y_ruzhu').removeClass('dis')
})
//第三个开始
$('.Ltime').on('focus', function () {
    console.log('input 获取焦点了')
    $('.l_ruzhu').addClass('dis')
})

// 当 input 文本框失去焦点的时候触发
$('.Ltime').on('blur', function () {
    console.log('input 失去焦点了')
    $('.l_ruzhu').removeClass('dis')
})
//第四个开始大人小孩的人数
$('.pople').on('focus', function () {
    console.log('input 获取焦点了')
    $('.renshu').addClass('dis')
})

// 当 input 文本框失去焦点的时候触发
$('.pople').on('blur', function () {
    console.log('input 失去焦点了')
    $('.renshu').removeClass('dis')
})
$('.yi')
    .children('li')
    .mouseenter(function () {
        $(this)
            .children('.xiaozu')
            .css('display', 'block')
    })
$('.yi')
    .children('li')
    .mouseleave(function () {
        $(this)
            .children('.xiaozu')
            .css('display', 'none')
    })
//盒子轮播切换
$('.qiehuan .w .top li').click(function () {
    var num = $(this).index()
    $('.hezi .item')
        .eq(num)
        .css('display', 'block')
        .siblings()
        .css('display', 'none')
})
//轮播图里面的文字鼠标进入事件
$('.qiehuan .hezi .item li span').mouseenter(function () {

})

//第二个轮播图开始

$('.qiehuan2 .w .top li').click(function () {
    var num = $(this).index()
    $('.qiehuan2 .w .hezi .item')
        .eq(num)
        .css('display', 'block')
        .siblings()
        .css('display', 'none')
})



// 鼠标进去轮播图1
//进入每一个li

$('.qiehuan .hezi .item li').mousemove(function (e) {
    var x = e.pageX - $(this).offset().left - $(this).find('span').width() / 2;
    var y = e.pageY - $(this).offset().top - $(this).find('span').height() / 2;
    if (x < 0) {
        x = 0
    } else if (x > $(this).width() - $(this).find('span').width()) {
        x = $(this).width() - $(this).find('span').width();
    }
    if (y < 0) {
        y = 0
    } else if (y > $(this).height() - $(this).find('span').height()) {
        y = $(this).height() - $(this).find('span').height();
    }
    console.log($(this).offset().left);
    $(this).find('span').css({
        left: x,
        top: y
    }).siblings().css({
        left: 0,
        top: 0
    })
})
$('.qiehuan .hezi .item li').mouseleave(function () {
    $(this).find('span').css('left', '2%');
    $(this).find('span').css('top', '10%');
})
//底部固定导航点击事件
$('.guding .zheng li').mouseenter(function () {
    $('.guding .active').show()
})
$('.guding .active').mouseleave(function () {
    $('.guding .active ').hide()
})

