<?php
    // 注册
    include 'connect.php';
    //接口所要达到的效果：用户注册数据写入数据库
    //所需要前端传递的参数用户名，密码。写好接口
    $tel=isset($_POST['tel'])?$_POST['tel']:null;
    $password=isset($_POST['password'])?$_POST['password']:null;
    $nickname=isset($_POST['nickname'])?$_POST['nickname']:null;
    $sql="select*from bqzhuce where name='$nickname' and phone='$tel'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        echo 1;//用户已存在
    }else{//注册成功
        $sql1="insert into bqzhuce (name,password,phone) value ('$nickname','$password','$tel')";
        $result1=$conn->query($sql1);
        if($result){
            echo 2;
        }
    };
?>