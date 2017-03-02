'use strict'
window.onload = function(){
    var RobotImg = document.querySelector('.robot_img');
    var oSpeak = document.querySelector('.speak');
    var oHuzi = document.querySelector('.huzi');
    RobotImg.onmouseover = function(){
        RobotImg.style.webkitAnimation = 'none';
        oSpeak.style.opacity = 1;
    };
    RobotImg.onmouseout = function(){
        RobotImg.style.webkitAnimation = 'rotate 1s linear infinite';
        oSpeak.style.opacity = 0;
    };
    oHuzi.onmouseover = function(){
        this.style.WebkitTransform = 'rotate(360deg)';
    };
    oHuzi.onmouseout = function(){
        this.style.WebkitTransform = 'rotate(0deg)';
    };
    //选项卡
    (function(){
        var oBanner = document.querySelector('.banner');
        var oUl = oBanner.querySelector('ul');
        var aLi = oUl.querySelectorAll('li');
        var oOl = document.querySelector('ol');
        var aBtn = document.querySelectorAll('ol li');
        var timer = null;
        var iNow = 0;
        for(var i=0;i<aBtn.length;i++){
            (function(index){
                aBtn[i].onclick = function(){
                    iNow = index;
                    tab();
                };
            })(i);
        }
        clock();
        function clock(){
            timer=setInterval(function(){
                iNow++;
                if(iNow>aLi.length-1)iNow=0;
                tab();
            },2000);
        };
        function tab(){
            for(var i=0;i<aBtn.length;i++){
                aBtn[i].className = '';
            }
            aBtn[iNow].className = 'on';
            move(oUl,{left:-aLi[0].offsetWidth*iNow});
        };
        oBanner.onmouseover = oOl.onmouseover = function(){
            clearInterval(timer);
        };
        oBanner.onmouseout = oOl.onmouseout = function(){
            clock();
        };
    })();
    (function(){
        var n = 0;
        var timer = null;
        var oMenu = document.querySelector('#menu');
        var oBtn = document.querySelector('.btn');
        var aA = oMenu.querySelectorAll('a');
        var oBody = document.querySelector('body');
        document.onmousedown = function(ev){
            var lock = false;
            if(!lock){
                for(var i=0;i<aA.length;i++){
                    aA[i].style.opacity = 0;
                    aA[i].style.left = 0;
                }
            }
            var x = ev.pageX;
            var y = ev.pageY;
            timer = setInterval(function(){
                n++;
                if(n>=1){
                    clearInterval(timer);
                    lock = true;
                    oBtn.style.opacity = 0;
                    for(var i=0;i<aA.length;i++){
                        aA[i].style.opacity = 1;
                    }
                    if(x<oMenu.offsetWidth/2){
                        oMenu.style.left = 0;
                        oMenu.style.top = y - oMenu.offsetHeight/2+'px';
                        aA[1].style.left = '110px';
                        aA[2].style.left = '220px';
                    }else{
                        if(oBody.offsetWidth-x<oMenu.offsetWidth/6){
                            oMenu.style.left = x - oMenu.offsetWidth/6+'px';
                            oMenu.style.top = y - oMenu.offsetHeight/2+'px';
                            aA[0].style.left = '-220px';
                            aA[2].style.left = '-110px';
                        }else{
                            oMenu.style.left = x - oMenu.offsetWidth/6+'px';
                            oMenu.style.top = y - oMenu.offsetHeight/2+'px';
                            aA[0].style.left = '-110px';
                            aA[2].style.left = '110px';
                        }
                    }
                }
            },1000);
            document.onmouseup = function(){
                clearInterval(timer);
            };
            return false;
        };

        for(var i=0;i<aA.length;i++){
            aA[i].onmouseover = function(){
                this.style.top = '-6px';
            };
            aA[i].onmouseout = function(){
                this.style.top = 0;
            }
        }


    })();
    (function(){
        var oBox = document.querySelector('.picture');
        var oImg = oBox.querySelector('img');
        var oTop = oBox.querySelector('#top');
        var oDown = oBox.querySelector('#down');
        var top = 0;
        var timer = null;
        var oImgHeight = parseInt(getStyle(oImg,'height'));
        var oBoxHeight = parseInt(getStyle(oBox,'height'));
        oTop.onmouseover = function(){
            clearInterval(timer);
            //图片向上滑动
            timer = setInterval(function(){
                top-=3;
                if(top<=oBoxHeight - oImgHeight){
                    top=oBoxHeight - oImgHeight;
                }
                oImg.style.top = top+'px';
            },30);
        };
        oTop.onmouseout = function(){
            clearInterval(timer);
        };
        oDown.onmouseover = function(){
            clearInterval(timer);
            //图片向下滑动
            timer = setInterval(function(){
                top+=3;
                if(top>=0){
                    top=0;
                }
                oImg.style.top = top+'px';
            },30);
        };
        oDown.onmouseout = function(){
            clearInterval(timer);
        };
    })();
    (function(){
        var aLi = document.querySelectorAll('.header li');
        //var aA = document.querySelectorAll('#menu a');
        //var oScrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        aLi[0].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=1000;
        };
        aLi[1].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=1460;
        };
        aLi[2].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=3517;
        };
        aLi[3].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=2900;
        };
    })();
    (function(){
        var aA = document.querySelectorAll('#menu a');
        //var oScrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        aA[0].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=1000;
        };
        aA[1].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=1460;
        };
        /*aLi[2].onclick = function(){
         document.body.scrollTop=document.documentElement.scrollTop=3517;
         };*/
        aA[2].onclick = function(){
            document.body.scrollTop=document.documentElement.scrollTop=3517;
        };
    })();
};
