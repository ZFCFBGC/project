jQuery(function($){
    // 手风琴效果
    let lis=$('#dog .goodcate li');
    lis.click('on',function(){
        // 获取当前点击时的子代元素，给其加上类名show
        let div=$(this).children('.service');
        div.toggleClass('show');
    });
    var page=2;
    $('#dog .pagination').on('click','span',function(){
        $(this).siblings('span').removeClass('active');
        $(this).addClass('active');
        if($(this).html()==1){
            page=$(this).html()*1+1;
        }else if($(this).html()==2){
            page=$(this).html()*1+1;
            console.log(page);
            getData(page);
        }
    })
    
    // 获取数据
    // let goodslist=$('#goodslist');
    let goodslist=document.getElementById('goodslist')
    var ul=document.createElement('ul')
    ul.className='list';
    var currentPage=1;
    var total,totalPage;
    function getData(page){ 
        $.ajax({ 
            type: 'POST', 
            url: '../api/goodslist.php', 
            data: {"pageNo":page-1,
                    "qty":20
            }, 
            dataType:'json', 
            async:"true",
            success:function(res){
                total=res.total;//总商品数
                currentPage=page;
                jiegou();
                let $sort=$('#dog .main .sort .sort_l')
                $sort.on('click','span',function(){
                    var currentSpan=$(this);
                    if(currentSpan.html()==='评论'){
                        review();
                        jiegou();
                        chuanc();

                    }else if(currentSpan.html()==='销量'){
                        volume();
                        jiegou();
                        chuanc();

                    }else if(currentSpan.html()==='单价'){
                        danjia();
                        jiegou();
                        chuanc();
                    }
                    else if(currentSpan.html()==='售价'){
                        jiage();
                        jiegou();
                        chuanc();
                    }else if(currentSpan.html()==='综合排序'){
                        getData(page);
                        jiegou();
                        chuanc();
                    }
                })
                function jiegou(){
                    ul.innerHTML='';
                    ul.innerHTML=res.data.map(function(item){
                        return `<li data_guid="${item.id}">
                                    <img src="${item.imgurl}" />
                                    <span class="sale">￥${item.total}</span>
                                    <span class="price">${item.price}元/斤</span>
                                    <p class="discount">${item.discount}</p>
                                    <p class="name">${item.name}</p>
                                    <p class="event">${item.event}</p>
                                    <div><span class="volume">已售${item.sales}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="review">已有<a href="#">${item.review}</a>评价</span></div>
                                    <span class="btncar"><i class="icon-gouwuche- iconfont"></i>加入购物车</span>
                                    <span class="collect">收藏</span>
                                    </li>`
                    }).join(''); 
                }
                // 人气升序
                function review(){
                    res.data.sort(function(a,b){
                        return  a.review-b.review;
                    }) 
                }
                // 价格降序
                function jiage(){
                    res.data.sort(function(a,b){
                        return  b.total-a.total;
                    }) 
                }
                //销量降序
                function volume(){
                    res.data.sort(function(a,b){
                        return  a.sales-b.sales;
                    }) 
                }
                // 单价排序
                function danjia(){
                    res.data.sort(function(a,b){
                        return  a.price-b.price;
                    }) 
                }
                //传递参数到详情页
                //$('.datalist tbody').on('click','td',function(){
                function chuanc(){
                    $('#goodslist').on('click','li',function(){
                        var $currentLi=$(this);
                        var id=$currentLi.attr("data_guid")
                        location.href = 'xiangqing.html?id='+id;
                    })
                }
            }

        });
        goodslist.appendChild(ul)
    };
    getData(page);
})
