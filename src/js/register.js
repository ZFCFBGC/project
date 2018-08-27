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
    let content_l_tag=$('#register .content_l_tag');
    content_l_tag.on('click','div',function(){
         var i = $(this).index();
         console.log(i)
         $(this).addClass('active').siblings().removeClass('active');
         $('.toggle .main').eq(i).show().siblings().hide();
    })

    //手机注册页面注册验证正则，注册内容加入数据库
    $('#submit').click('on',function(){
        var nickname=$('#nickname').val();
        var password=$('#password').val();
        var conform=$('#conform').val();
        var tel=$('#tel').val();
        var code=$('#code').val();
        var isChecked = $('#agree').prop('checked')
        if(!/^1[3-9]\d{9}$/.test(tel)){
            alert('手机号不合法');
            return false;
        }
        //(?![0-9]+$)用来判定后面不全是数字，(?![a-zA-Z]+$)用来判定后面不全是字母（
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,12}/.test(password)){
            alert('密码格式不正确，请重新输入密码')
            return false;
        }   
        if(password!=conform){
             alert('两次密码输入不一致，请重新确认')
            return false;
        }
        //第一位必须是字母，后面必须是字母数字下划线的4-9位
        if(!/^[a-z][\w]{3,8}$/.test(nickname)){
            alert('昵称格式书写不正确')
            return false;
        }
        if(code!=ymz.html()){
            alert('验证码输入有误，请重新确认')
            return false; 
        }
        if(isChecked==false){
            alert('请同意用户协议')
            return false;
        }
        if(nickname!=""&&password!=""){
            console.log(123)
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
                            window.location.href="login.html";
                            break;
                    }    
                }

            })
        }
    })
})