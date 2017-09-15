
$(document).ready(function () {
    // 点击a标签激活active下标
    $('#mynavbar ul li:not(.login)').click(function () {

        //$subscript.width()
        $(this).addClass('subscript').siblings().removeClass('subscript')
    })


    var $header = $('header')
    var $logo = $('.nav img')
    var windowHeight = $(window).height()

    $(window).scroll(function () {
        var $scrollTop = $(window).scrollTop()

        //滚动监听 nav变色
        navChange($scrollTop)

    })

    function navChange($scrollTop) {
        if( $scrollTop > 50){
            $logo.attr('src','../image/BOSSJOBwhite.svg')
            $header.css('background','linear-gradient(to right, #3D75E6, #00BBCC)')
        } else {
            $logo.attr('src',"../image/BOSSJOBblue.svg")
            $header.css('background','rgba(0,0,0,0)')
        }
    }
})