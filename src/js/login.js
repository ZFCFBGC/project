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
        // var nickname=$('#nickname').val();
        console.log(123)
        var password=$('#password').val();
        var tel=$('#tel').val();
        if(tel!=""&&password!=""){
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
                        case 1://用户已存在
                            // alert("该用户已存在！请换一个用户名注册。")
                            location.href=""
                            break;
                        case 2://注册成功
                            alert("账户或者密码错误，请重新输入");
                            // $.cookie("user",username);
                            // $.cookie("limit",0);
                            // window.location.href="index.php";
                            break;
                    }    
                }

            })
        }
    })
})