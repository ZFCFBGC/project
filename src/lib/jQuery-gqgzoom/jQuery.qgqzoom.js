jQuery.prototype.gqgzoom=function(options){
    //设置默认值
    var defaults={
        width:400,
        height:460,
        position:'right',
        gap:50
    }
    var opt=$.extend({},defaults,options);
    //获取小图容器
    var small=this;
    console.log(small)
    small.addClass('gqg-zoom');
    var smallImg=small.children('img')
    //获取大图的src
    var bigurl=smallImg.attr('data-big');
    //创建大图容器，将大图插入容器
    var big=$('<div/>').addClass('gqg-bigzoom').appendTo('body');
    var bigImg=$('<img/>').attr('src',bigurl).appendTo(big);
    //大图与小图的比列
    var ratio;
    var bigTop,bigLeft;
    if(opt.position=='right'){
        bigLeft=small.offset().left+smallImg.outerWidth()+opt.gap;
        bigTop=small.offset().top;
    }else if(opt.position=='bottom'){
        bigLeft=small.offset().left;
        bigTop=small.offset().top+smallImg.outerHeight()+opt.gap;
    }
    big.css({
        width:opt.width,
        height:opt.height,
        top:bigTop,
        left:bigLeft
    })
    //创建放大加入到goods
    var zoom=$('<div/>').addClass('zoom').appendTo(small)
    //鼠标移入，移出事件
    small.on('mouseover',function(){
        zoom.show();
        big.show();
        ratio=bigImg.outerWidth()/smallImg.outerWidth();
        //等比例放大
        zoom.css({
            width:opt.width/ratio,
            height:opt.height/ratio
        })
        
    }).on('mouseout',function(){
        zoom.hide();
        big.hide();
    }).on('mousemove',function(e){
        //当鼠标移动时，放大镜跟随鼠标光标位置,默认光标位置处于zoom的中心点，因此要减去zoom宽度的一半
        var left=e.pageX-small.offset().left-zoom.outerWidth()/2;
        var top=e.pageY-small.offset().top-zoom.outerHeight()/2;
        //判断left，top值避免放大镜移到small容器外
        if(left<0){
            left=0;
        }else if(left>smallImg.outerWidth()-zoom.outerWidth()){
            left=smallImg.outerWidth()-zoom.outerWidth();
        }
        if(top<0){
            top=0
        }else if(top>smallImg.outerHeight()-zoom.outerHeight()){
            top=smallImg.outerHeight()-zoom.outerHeight();
        }
        zoom.css({
            left:left,
            top:top
        })
        bigImg.css({
            left:-left*ratio,
            top:-top*ratio
        })
    })

}