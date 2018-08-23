<?php
    include 'shopconnect.php';
    $pageNo=isset($_POST['pageNo'])? $_POST['pageNo'] : null;
    $qty=isset($_POST['qty'])? $_POST['qty'] : null;
    $info = mysqli_query($conn,'select * from goodslist');
    $newArr=array();
    while($array=mysqli_fetch_array($info,MYSQLI_ASSOC)){
        array_push($newArr,$array);
    };
    $res=array(
        "total" =>count($newArr),
        "data"  =>array_slice($newArr,($pageNo-1)*$qty,$qty),
        "pageNo" =>$pageNo,
        "qty" =>$qty
    );
    echo json_encode($res,JSON_UNESCAPED_UNICODE); 
?>