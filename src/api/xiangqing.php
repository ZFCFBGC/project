<?php
    include 'shopconnect.php';
    $id=isset($_POST['id'])? $_POST['id'] : null;
    $info=mysqli_query($conn,"select * from goodslist where id='$id' ");
    $newArr=array();
    
    while($array=mysqli_fetch_array($info,MYSQLI_ASSOC)){
        array_push($newArr,$array);
    };
    echo(json_encode($newArr));
?>