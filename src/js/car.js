jQuery(function($){
    var goodslist=document.querySelector('#goodslist')
    var totals=document.querySelector('#main .pay .total')
    // var carList;
    var cookies=Cookie.get('carlist')
    console.log(cookies);
    if(cookies === ''){
        cookies = [];
    }else{
        cookies = JSON.parse(cookies);//cookies必须为json字符串
    };
    console.log(cookies.length);
    jiegou();
    function jiegou(){
        if(cookies.length!=undefined){
           var ul=document.createElement('ul')
            // 定义初始总价
            var amount=0;
            goodslist.innerHTML=''; 
            ul.innerHTML=cookies.map(function(item){
                //计算总价 
                amount+=item.total.slice(1)*item.qty;
                return `<li data-guid="${item.guid}">
                            <div class="choice fl">
                                <input type="checkbox" />
                            </div>
                            <div class="picture fl"><img src="${item.imgurl}" /></div>
                            <div class="sname fl">${item.name}</div>
                            <div class="weight fl">${item.weight}</div>
                            <div class="cost fl">${item.total}</div>
                            <div class="dispose fl">
                                <span class="reduce">-</span>
                                <span class="num">${item.qty}</span>
                                <span class="add">+</span>
                            </div>
                            <div class="total fl">${(Number(item.total.slice(1))*Number(item.qty)).toFixed(2)}元</div>
                            <div class="clear fl">删除</div>
                        </li>`
            }).join('');
            // 把ul写入页面
            goodslist.innerHTML='';
            goodslist.appendChild(ul);
            totals.innerHTML=amount.toFixed(2);
        }
    }
    let allclear=document.querySelector('#main .pay .allclear')
    allclear.onclick = function(){
            // 清空cookie
            Cookie.remove('carlist');
            // 清空cookie数组
            cookies = [];
            jiegou();
            // 手动刷新页面
            window.location.reload()
    }
    // 删除单个商品
    goodslist.onclick=function(e){
        // 点击目标必须加上全部类名要不然有可能拿不到
        if(e.target.className==='clear fl'){
            var currentLi=e.target.parentNode;
            var guid=currentLi.getAttribute('data-guid');
            for(var i=0;i<cookies.length;i++){
                if(cookies[i].guid===guid){
                    cookies.splice(i,1);
                    break;
                }
            }
            // 重写cookie
            Cookie.set('carlist',JSON.stringify(cookies));
            jiegou();
        }
        if(e.target.className==='add'){
            var num=e.target.previousElementSibling;
            num.innerHTML++;
        }
        if(e.target.className==='reduce'){
            var num=e.target.nextElementSibling;
            num.innerHTML--;
            if(num.innerHTML<=1){
                // e.target.off("click")
                $('.reduce').unbind('click')
            }
        }
    }
    // var cookies = document.cookie.split('; ');
    
    // for(var i=0;i<cookies.length;i++){
    //     var arr=cookies[i].split('=')
    //     if(arr[0]==='carlist'){
    //         carList=JSON.parse(arr[1]);
    //         console.log(carList)
    //     }
    //  };
    // function jiegou(){
    //     if(carList){
    //        var ul=document.createElement('ul')
    //         // 定义初始总价
    //         var amount=0;
    //         goodslist.innerHTML=''; 
    //         ul.innerHTML=carList.map(function(item){
    //             //计算总价 
    //             amount+=item.total.slice(1)*item.qty;
    //             return `<li data-guid="${item.guid}">
    //                         <div class="choice fl">
    //                             <input type="checkbox" />
    //                         </div>
    //                         <div class="picture fl"><img src="${item.imgurl}" /></div>
    //                         <div class="sname fl">${item.name}</div>
    //                         <div class="weight fl">${item.weight}</div>
    //                         <div class="cost fl">${item.total}</div>
    //                         <div class="dispose fl">
    //                             <span class="add">+</span>
    //                             <span class="num">${item.qty}</span>
    //                             <span class="add">-</span>
    //                         </div>
    //                         <div class="total fl">${(Number(item.total.slice(1))*Number(item.qty)).toFixed(2)}元</div>
    //                         <div class="clear fl">删除</div>
    //                     </li>`
    //         }).join('');
    //         // 把ul写入页面
    //         goodslist.innerHTML=''
    //         goodslist.appendChild(ul);
    //         totals.innerHTML=amount.toFixed(2);
    //     }
    // }
    // jiegou();
    //清空购物车
    // let allclear=document.querySelector('#main .pay .allclear')
    //     allclear.onclick=function(){
    //         // jiegou();
    //         goodslist.innerHTML='';
    //         var now = new Date();
    //         now.setDate(now.getDate()-7);
    //         document.cookie = 'carlist=null;expires=' + now;
    //         totals.innerHTML='';
    // }
})