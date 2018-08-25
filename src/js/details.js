jQuery(function($){
    $('#main .picture').gqgzoom();
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
        let currenSpan=document.querySelector('#main .weight .active');
        var currentGUID=currentLi.getAttribute('data-guid');
        var children=currentLi.children;
        //创建一个对象保存当前商品信息
        var goodsObj={};
        goodsObj.guid=currentGUID;
        goodsObj.qty=1;
        goodsObj.weight=currenSpan.innerHTML;
        goodsObj.number=num.innerHTML;
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
                    carList[i].qty++;
                     break;
                }
            }
            if(i===carList.length){
                carList.push(goodsObj);
            }
        }
        //存入cookie
        document.cookie='carlist='+JSON.stringify(carList);
    }
    
})