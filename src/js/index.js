jQuery(function($){

    (function(){
        let carouselWrap=$('#banner .lunbotu');
        let carousel=$('#banner .lunbotu .carousel');
        let indicators = $('#banner .lunbotu .indicator');
        let width=1190;
        lunbotu(carouselWrap,carousel,indicators,width);
    })();
    (function(){
        let carouselWrap=$('#dog .carousel-wrap');
        let carousel=$('#dog .carousel-wrap .carousel');
        let indicators = $('#dog .carousel-wrap .indicator');
        let width=360;
        lunbotu(carouselWrap,carousel,indicators,width);
    })();
    (function(){
        let carouselWrap=$('#cat .carousel-wrap');
        let carousel=$('#cat .carousel-wrap .carousel');
        let indicators = $('#cat .carousel-wrap .indicator');
        let width=360;
        lunbotu(carouselWrap,carousel,indicators,width);

    })();
    (function(){
        let carouselWrap=$('#worm .carousel-wrap');
        let carousel=$('#worm .carousel-wrap .carousel');
        let indicators = $('#worm .carousel-wrap .indicator');
        let width=360;
        lunbotu(carouselWrap,carousel,indicators,width);
    })();
    (function(){
        let carouselWrap=$('#fish .carousel-wrap');
        let carousel=$('#fish .carousel-wrap .carousel');
        let indicators = $('#fish .carousel-wrap .indicator');
        let width=360;
        lunbotu(carouselWrap,carousel,indicators,width);
    })();
    (function(){
        let carouselWrap=$('#turtle .carousel-wrap');
        let carousel=$('#turtle .carousel-wrap .carousel');
        let indicators = $('#turtle .carousel-wrap .indicator');
        let width=360;
        lunbotu(carouselWrap,carousel,indicators,width);
    })();

    function lunbotu(carouselWrap,carousel,indicators,width){
        let num=5,carouselWidth=width,count=1,timer=null
        //索引指示器1,2,3
        function setIndicatorStyle(count){
          indicators.eq(count-1).addClass('active').siblings().removeClass('active')
        } 
         // 索引指示器点击事件
        indicators.click(function () {
            count = $(this).index()
            count=count+1
            console.log(count)
            setIndicatorStyle(count)
            carousel.finish().animate({left:-carouselWidth*(count)},500)
        })
         // 鼠标移入移出事件
        carouselWrap.mouseover(function () {
            clearInterval(timer)
        }).mouseout(interval)
        interval();
        // 动画主函数
        function move(flag){
            if(!flag){
                count++;
                l = -carouselWidth*count
                if(count===num-1){
                    carousel.finish().animate({left: l}, 500, function(){
                    count = 1
                    setIndicatorStyle(count)
                    $(this).css('left', -carouselWidth*count)
                  })
                }else{
                    setIndicatorStyle(count)
                    carousel.finish().animate({left: l}, 500)
                }
            }else{
                count--;
                l = -carouselWidth*count;
                if(count === 0){
                  carousel.finish().animate({
                    left: l
                  }, 500, function(){
                    count = num - 2
                    setIndicatorStyle(count)
                    $(this).css('left', -carouselWidth*count)
                  })
                }else{
                  setIndicatorStyle(count)
                  carousel.finish().animate({
                    left: l
                  }, 500)
                }
            }
        }
        //自动轮播
        function interval(){
            timer=setInterval(move,2000)
        }
    };
    // 点击轮播
    (function(){
        let carousel=$('#dog .wrap .carousel');
        let arrowLeft=$('#dog .wrap .arrow_left')
        let arrowRight=$('#dog .wrap .arrow_right')
        let width=570;
        arrow(carousel,arrowLeft,arrowRight,width);
    })();
    (function(){
        let carousel=$('#cat .wrap .carousel');
        let arrowLeft=$('#cat .wrap .arrow_left')
        let arrowRight=$('#cat .wrap .arrow_right')
        let width=570;
        arrow(carousel,arrowLeft,arrowRight,width);
    })();
    (function(){
        let carousel=$('#worm .wrap .carousel');
        let arrowLeft=$('#worm .wrap .arrow_left')
        let arrowRight=$('#worm .wrap .arrow_right')
        let width=570;
        arrow(carousel,arrowLeft,arrowRight,width);
    })();
    (function(){
        let carousel=$('#fish .wrap .carousel');
        let arrowLeft=$('#fish .wrap .arrow_left')
        let arrowRight=$('#fish .wrap .arrow_right')
        let width=570;
        arrow(carousel,arrowLeft,arrowRight,width);
    })();
    (function(){
        let carousel=$('#turtle .wrap .carousel');
        let arrowLeft=$('#turtle .wrap .arrow_left')
        let arrowRight=$('#turtle .wrap .arrow_right')
        let width=570;
        arrow(carousel,arrowLeft,arrowRight,width);
    })();
    function arrow(carousel,arrowLeft,arrowRight,width){
        let num=5,carouselWidth=width,count=1,timer=null
        //设置左右箭头的点击事件
        arrowLeft.click(function (e) {
          e.preventDefault()
          move(true)
        })
        arrowRight.click(function(e){
        console.log(123)
          e.preventDefault()
          move()
        })
        // 动画主函数
        function move(flag){
            if(!flag){
                count++;
                l = -carouselWidth*count
                if(count===num-1){
                    carousel.finish().animate({left: l}, 500, function(){
                    count = 1
                    // setIndicatorStyle(count)
                    $(this).css('left', -carouselWidth*count)
                  })
                }else{
                    // setIndicatorStyle(count)
                    carousel.finish().animate({left: l}, 500)
                }
            }else{
                count--;
                l = -carouselWidth*count;
                if(count === 0){
                  carousel.finish().animate({
                    left: l
                  }, 500, function(){
                    count = num - 2
                    // setIndicatorStyle(count)
                    $(this).css('left', -carouselWidth*count)
                  })
                }else{
                  // setIndicatorStyle(count)
                  carousel.finish().animate({
                    left: l
                  }, 500)
                }
            }
        }
    }
    
})