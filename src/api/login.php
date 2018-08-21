<?php
    // 登录
    include 'connect.php';
    $tel=isset($_POST['tel'])?$_POST['tel']:null;
    $password=isset($_POST['password'])?$_POST['password']:null;
    //判断数据库名字密码是否匹配
    $sql="select*from username where phone='$tel' and password='$password'";
    $result=$conn->query($sql);
    if($result->num_rows>0){
        echo 1;//登录成功
    }else{
        echo 2;//账户或者密码错误;
    }
?>