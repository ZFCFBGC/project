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
        page = $(this).index()
        page=page+2;
        if(page>3&&$(this).html()!='下一页&gt;'){
            alert('警告！页面分页数量不够。')
            page=3;
        }
        // if($(this).html()=='下一页&gt;'){
        //     if($('#dog .pagination span').hasClass('active')){
        //         $('#dog .pagination span').addClass('GQG');
        //     }
            
        // }
        getData(page);
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
                // console.log(res);
                jiegou();
                chuanc();
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
                        return `<div class="gqg"><li data-guid="${item.id}">
                                    <img src="${item.imgurl}" />
                                    <span class="sale">￥${item.total}</span>
                                    <span class="price">${item.price}元/斤</span>
                                    <p class="discount">${item.discount}</p>
                                    <p class="name">${item.name}</p>
                                    <p class="event">${item.event}</p>
                                    <div><span class="volume">已售${item.sales}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="review">已有<a href="#">${item.review}</a>评价</span></div>
                                    </li>
                                    <div class="click">
                                        <span class="btncar"><i class="icon-gouwuche- iconfont"></i>加入购物车</span>
                                        <span class="collect">收藏</span>
                                    </div></div>`
                    }).join(''); 
                }

                // 加入购物车，存入cookie;
                let car=document.querySelector('#car')
                let list=document.querySelector('.list');
                var carList=[];//用于保存购物车信息
                var cookies=document.cookie.split('; ');
                for(var i=0;i<cookies.length;i++){
                    var arr=cookies[i].split('=');
                    if(arr[0]==='carlist'){
                        carList=JSON.parse(arr[1]);
                    }
                };
                list.onclick=function(e){
                    if(e.target.className=='btncar'){
                        var currentLi=e.target.parentNode.previousElementSibling;
                        var currentGUID=currentLi.getAttribute('data-guid');
                        // 创建一个对象保存商品信息
                        var goodsObj={};
                        goodsObj.guid=currentGUID;
                        goodsObj.qty=1;
                        goodsObj.imgurl=currentLi.children[0].getAttribute('src')
                        goodsObj.weight='3kg';
                        goodsObj.name=currentLi.children[4].innerHTML;
                        goodsObj.total=currentLi.children[1].innerHTML;
                        goodsObj.price=currentLi.children[2].innerHTML;
                        //判断cookies是否为空
                        if(carList.length===0){
                            //为空则直接添加
                            carList.push(goodsObj);
                        }else{
                            // 不为空则需判断是否是同名商品
                            for(var i=0;i<carList.length;i++){
                                //如果有，则qty加1
                                if(carList[i].guid===currentGUID){
                                    carList[i].qty++;
                                     break;
                                }
                            }
                            if(i===carList.length){
                                carList.push(goodsObj);
                            }
                        }
                        
                        // 得到当前时间
                        var date = new Date();
                        // 设置保留时间
                        date.setDate(date.getDate()+30);
                        //存入cookie
                        document.cookie='carlist='+JSON.stringify(carList)+';expires=' + date.toUTCString();
                        var goods = document.cookie.split('; ');
                        for(var i=0;i<cookies.length;i++){
                            var arr = goods[i].split('=');
                            if(arr[0] === 'carlist'){
                                carList = JSON.parse(arr[1]);
                                console.log(carList);
                            }
                        }
                        // 生成结构
                        // if(carList){
                        //     var shopping=document.createElement('ul');
                        //     shopping.innerHTML='';
                        //     shop.innerHTML=carList.map(function(item){
                        //         return `<li data-guid="${item.guid}">
                        //                     <div class="car_l">
                        //                         <img src="${item.imgurl}" />
                        //                     </div>
                        //                     <div class="car_c">
                        //                         <span class="add">+</span>
                        //                         <span class="num">${item.qty}</span>
                        //                         <span class="add">-</span>
                        //                     </div>
                        //                     <div  class="car_r">
                        //                         <span><span>
                        //                     </div>
                        //                 </li>`
                        //     })
                        // }
                        var goods=Cookie.get('carlist')
                        console.log(goods);
                        if(goods===''){
                            goods=[];
                        }else{
                            goods=JSON.parse(goods)
                        }
                         //生成HTML结构
                         // jiegou();
                         // function jiegou(){}
                         //    if(goods.length!=undefined){
                         //        var ul=document.createElement('ul');
                         //    }
                         // }
                    }
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
                function chuanc(){
                    $('#goodslist').on('click','li',function(){
                        var $currentLi=$(this);
                        var id=$currentLi.attr("data-guid")
                        location.href = 'xiangqing.html?id='+id;
                    })
                }
            }

        });
        goodslist.appendChild(ul)
    };
    getData(page);
     // let btncar=document.querySelector('#goodslist .click .btncar')
    // console.log(btncar)
    

})
