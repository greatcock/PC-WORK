


$(document).ready(function () {
    // 点击a标签激活active下标
    $('#mynavbar ul li:not(.login)').click(function () {

        //$subscript.width()
        $(this).addClass('subscript').siblings().removeClass('subscript')
    })


    var $header = $('header')
    var $logo = $('.nav img')
    var windowHeight = $(window).height()


    //第一个动画得两个图片
    var $imgSvgTwo = $('.content-two')

    //第二个动画得两个图片
    var $imgSvgTh = $('.content-th')

    //钱袋SVG
    var $imgSvgFo = $('.content-four')

    var svgs = {
        svgOne:     $('#dialogue-one'),
        svgTwo:     $('#dialogue-two'),
        svgTh:      $('#Combined-Shape2'),
        svgFo:      $('#Combined-Shape-Copy'),
        svgDallor:  $('#dollar')
    }

    $(window).scroll(function () {
        var $scrollTop = $(window).scrollTop()

        //滚动监听 nav变色
        navChange($scrollTop)
        ShowAnimate($imgSvgTwo, $scrollTop, windowHeight, svgs, 'two')
        ShowAnimate($imgSvgTh, $scrollTop, windowHeight, svgs, 'thr')
        ShowAnimate($imgSvgFo, $scrollTop, windowHeight, svgs, 'Fo')
    })

    //改变nav背景色
    function navChange($scrollTop) {
        if( $scrollTop > 50){
            $logo.attr('src','../image/BOSSJOBwhite.svg')
            $header.css('background','linear-gradient(to right, #3D75E6, #00BBCC)')
        } else {
            $logo.attr('src',"../image/BOSSJOBblue.svg")
            $header.css('background','rgba(0,0,0,0)')
        }
    }

    //点击button添加浮层
    var $forbid = $('.forbid')
    var $hiddenUl = $('#hiddenUl')
    var isShow = true
    $('#navButton').on('click', function () {
        if(isShow){
            $(this).css({'transform': 'rotate(90deg)'})
            $hiddenUl.fadeIn(500)
            $forbid.fadeIn(500)
            $hiddenUl.addClass('visible-xs')
            $forbid.addClass('visible-xs')
            isShow = false
        } else {
            $(this).css({'transform': 'rotate(0deg)'})
            $hiddenUl.fadeOut(500)
            $forbid.fadeOut(500)
            $hiddenUl.removeClass('visible-xs')
            $forbid.removeClass('visible-xs')
            isShow = true
        }
    })
})