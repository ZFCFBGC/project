jQuery(function($){
    var id=decodeURI(location.search).slice(4);
    console.log(id);
    let main=document.querySelector('#main')
    var ul=document.createElement('ul')
    ul.className='list';
    getData();
    function getData(){
        $.ajax({ 
            type: 'POST', 
            url: '../api/xiangqing.php', 
            data: {"id":id}, 
            dataType:'json', 
            async:"true",
            success:function(res){
                console.log(res);
                ul.innerHTML=`
                            <li class="picture"><img src="${res[0].imgurl}" data-big="${res[0].imgurl}" /></li>
                            <li class="content" data-guid="${res[0].id}">
                                <h2>${res[0].name}</h2>
                                <p class="event">${res[0].event}</p>
                                <div class="sale">
                                    波奇价:
                                    <span>￥${res[0].total}</span>
                                    <span>${res[0].price}元/斤</span>
                                </div>
                                <p class="guide">厂商指导价：</p>
                                <p class="promotion">促销信息：<span>${res[0].discount}</span></p>
                                <div class="adress">配送至：<span></span>有货：<a href="#">支持使用优惠券</a></div>
                                <div class="weight">套装：<span class="active">1kg</span><span>3kg</span></div>
                                <div class="number">购买数量：
                                <span class="reduce">-</span>
                                    <span class="num">1</span>
                                    <span class="add">+</span>
                                </div>
                                <div class="btn">
                                    <span class="buy"><a href="#">立即购买</a></span>
                                    <span class="car"><i class="icon-gouwuche- iconfont"></i>加入购物车</span>
                                    <span class="shouc">☆收藏商品</span>
                                </div>
                            </li>`
                main.appendChild(ul);  
                // 放大镜效果
                $('#main .picture').gqgzoom();
                // 存入cookie
                var addcar=document.querySelector('#main .car');
                var carList=[];//用于保存购物车信息
                var cookies=document.cookie.split('; ');
                for(var i=0;i<cookies.length;i++){
                    var arr=cookies[i].split('=');
                    if(arr[0]==='carlist'){
                        carList=JSON.parse(arr[1]);
                    }
                };
                $('#main .weight').on('click','span',function(){
                        
                        $(this).siblings('span').removeClass('active');
                        $(this).addClass('active');
                    });
                let number=document.querySelector('#main .number')
                let num=document.querySelector('#main .number .num');
                console.log(num)
                number.onclick=function(e){
                    if(e.target.className=='reduce'){
                       num.innerHTML--;
                       if(num.innerHTML<1){
                        num.innerHTML=1;
                       }
                    }else if(e.target.className=='add'){
                        num.innerHTML++;
                    }
                }
                addcar.onclick=function(){
                    var currentLi=document.querySelector('#main .content');
                    var picture=currentLi.previousElementSibling;
                    let currenSpan=document.querySelector('#main .weight .active');
                    var currentGUID=currentLi.getAttribute('data-guid');
                    var children=currentLi.children;
                    //创建一个对象保存当前商品信息
                    var goodsObj={};
                    goodsObj.guid=currentGUID;
                    goodsObj.imgurl=picture.children[0].getAttribute('src')
                    goodsObj.qty=num.innerHTML*1;
                    goodsObj.weight=currenSpan.innerHTML;
                    goods.name=children[0].innerHTML;
                    goodsObj.total=children[2].children[0].innerHTML;
                    goodsObj.price=children[2].children[1].innerHTML;
                    //判断cookies是否为空
                    if(carList.length===0){
                        //为空则直接添加
                        carList.push(goodsObj);
                    }else{
                        // 不为空则需判断是否是同名商品
                        for(var i=0;i<carList.length;i++){
                            //如果有，则qty加1
                            if(carList[i].guid===currentGUID){
                                carList[i].qty+=(num.innerHTML*1);
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
                }
            }
        });
    }
    
    // 放大镜效果

})