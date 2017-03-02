'use strict'
$(document).ready(function() {
    var oUl = $('ul').eq(0);
    var aLi = oUl.children();
    var N = aLi.length;
    aLi.each(function (i) {
        $(this).css(
            {
                "WebkitTransition": '1s all ease ' + (N - i) * 100 + 'ms',
                "WebkitTransform": 'rotateY(' + 360 / N * i + 'deg) translateZ(350px)'
            });
    });

    //获取不到transform的值，用数字模拟
    var x = 0; 			//x轴角度
    var y = 0; 			//y轴角度
    var iSpeedX = 0;
    var iSpeedY = 0;
    var lastX = 0;
    var lastY = 0;
    oUl.mousedown(function(ev){
        var disX = ev.pageX-y;
        var disY = ev.pageY -x;
        $(document).mousemove (function(ev){
            x = ev.pageY -disY;
            y = ev.pageX -disX;
            oUl.css({"WebkitTransform": 'perspective(800px) rotateY(' + y / 5 + 'deg) rotateX(' +x / 5 +'deg)'});

            iSpeedX = ev.pageX -lastX;
            iSpeedY = ev.pageY -lastY;
            lastX = ev.pageX;
            lastY = ev.pageY;
        });
        $(document).mouseup(function(){
            $(document).off('mousemove');
            $(document).off('mouseup');
            clearInterval(oUl.timer);
            oUl.timer = setInterval(function(){
                x+= iSpeedY;
                y+= iSpeedX;
                oUl.css({"WebkitTransform": 'perspective(800px) rotateY('+y/5+ 'deg) rotateX('+-x/5+ 'deg)'});
                iSpeedX*=0.95;
                iSpeedY*=0.95;
                if(Math.abs(iSpeedX)<1)iSpeedX=0;
                if(Math.abs(iSpeedY)<1) iSpeedY=0;
                if(iSpeedX==0&& iSpeedY==0){
                    clearInterval(oUl.timer);
                }
            },30);
        });
        return false;
    })
})
