jQuery(function($){
    //生成随机验证码
    function code(){
        let str='0123456789abcdefghijklmnopqrstuvwxyz'
        var res='';
        for(var i=0;i<4;i++){
            var idx=parseInt(Math.random()*str.length);
            res=res+str.charAt(idx);
        }
        return res;
    };
    let shengc=$('#login .shengc')
    shengc.html(code());
    let btn=$('#btn');
    btn.on('click',function(){
        shengc.html(code());
    })

    //登录
    $('#login .btn').click('on',function(){
        var _yanzhen=$('#yanzhen').val();
        var password=$('#password').val();
        var tel=$('#tel').val();
        if(tel!=""&&password!=""&&shengc.html()===_yanzhen){
            $.ajax({
                type:"POST",
                url:"../api/login.php",
                dataType:"JSON",
                async:"true",
                data:{
                    "tel":tel,
                    "password":password,
                },
                success:function(data){
                    switch(data){
                        case 1:
                            alert("登录成功");
                            window.location.href="../index.html";
                            break;
                        case 2:
                            alert("账户或者密码错误，请重新输入");
                            break;
                    }    
                }
            })
        }else if(shengc.html()!=_yanzhen){
            alert("验证码输出错误，请重新输入")
        }
    })
})