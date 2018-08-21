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
    }
    let ymz=$('#register .tellphone .yzm');
    ymz.html(code());
    let btn=$('#register .tellphone .code .btn');
    btn.on('click',function(){
        ymz.html(code());
    })
    //手机，邮箱注册切换
    let tellphone=$('#register .tellphone')
    let email=$('#register .email')
    let current1=$('#register .current1')
    let current2=$('#register .current2')
    current1.on('click',function(){
        tellphone.css("display","block");
        email.css("display","none")
    });
    current2.on('click',function(){
        tellphone.css("display","none");
        email.css("display","block")
    });
    //注册页面注册验证正则，注册内容加入数据库
    
    $('#submit').click('on',function(){
        var nickname=$('#nickname').val();
        var password=$('#password').val();
        var tel=$('#tel').val();
        if(nickname!=""&&password!=""){
            $.ajax({
                type:"POST",
                url:"../api/register.php",
                dataType:"JSON",
                async:"true",
                data:{
                    "tel":tel,
                    "password":password,
                    "nickname":nickname
                },
                success:function(data){
                    switch(data){
                        case 1://用户已存在
                            alert("该用户已存在！请换一个用户名注册。")
                            break;
                        case 2://注册成功
                            alert("注册成功！");
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