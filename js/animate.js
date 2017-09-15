
/*
   $imgSvg          SVG父元素元素
   $scrollTop       滚轮滑动得距离
   windowHeight     窗口得高度
   svgs             SVG图片对象
   svgNum          第几个SVG

   flag < windowHeight && flag > 0   :    SVG图片超出视口范围（向上滑动得时候）,在向下滑动，判断整个SVG图片都进入可视范围内才会执行动画
   如果不写 flag > 0 SVG图片向下滑动时，只要底部出现在范围内就会进行动画
    */




var svg = {
    activeSvgTwo : function($animateOne, $animateTwo) {
        $animateOne.css({
            'transition' : '1s linear',
            'opacity' : 1
        })
        $animateTwo.css({
            'transition':'1s 1s linear',
            'opacity': 1
        })
    },
    cancelSvgTwo : function ($animateOne, $animateTwo) {
        $animateOne.css({
            'transition':'0s',
            'opacity': 0
        })
        $animateTwo.css({
            'transition':'0s',
            'opacity': 0
        })
    },
    activeSvgThr : function($animateOne, $animateTwo) {

        $animateOne.css({
            'transition' : '1s linear',
            'transform': 'translateX(0)'
        })
        $animateTwo.css({
            'transition' : '1s 1s linear',
            'transform' :'translateY(0) rotate(-90deg)'
        })
    },
    cancelSvgThr : function ($animateOne, $animateTwo) {
        $animateOne.css({
            'transition':'0s',
            'transform': 'translateX(100px)'
        })
        $animateTwo.css({
            'transition':'0s',
            'transform' :'translateY(100px) rotate(90deg)'
        })
    },
    activeSvgFo : function($animateOne) {
        $animateOne.css({
            'animation': '1.3s rotate'
        })
    },
    cancelSvgFo : function ($animateOne) {
        $animateOne.css({
            'animation': 'none'
        })
    }
}

function ShowAnimate($imgSvg, $scrollTop, windowHeight, svgs, svgNum) {
    var $imgSvgOffset = $imgSvg.offset().top
    var $imgSvgOuter = $imgSvg.outerHeight()
    var flag = $imgSvgOffset + $imgSvgOuter / 2 - $scrollTop

    // 当SVG图片得中间部分出现在可视窗口范围内 才会执行动画
    if(flag < windowHeight && flag > 0){
        if( svgNum =='two'){
            svg.activeSvgTwo(svgs.svgOne, svgs.svgTwo)
        } else if (svgNum =='thr'){
            svg.activeSvgThr(svgs.svgTh, svgs.svgFo)
        }
        else if(svgNum =='Fo'){
            svg.activeSvgFo(svgs.svgDallor)
        }
    }
    else if($imgSvgOffset + $imgSvgOuter - $scrollTop > windowHeight || $imgSvgOffset + $imgSvgOuter - $scrollTop < 0){
        if(svgNum =='two'){
            svg.cancelSvgTwo(svgs.svgOne, svgs.svgTwo)
        }else if(svgNum =='thr'){
            svg.cancelSvgThr(svgs.svgTh, svgs.svgFo)
        } else if(svgNum =='Fo'){
            svg.cancelSvgFo(svgs.svgDallor)
        }
    }
}
