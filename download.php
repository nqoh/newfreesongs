<?php
require 'connect.php';

if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip_address = $_SERVER['HTTP_CLIENT_IP'];
}

if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== false) {
        $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
        foreach ($iplist as $ip) {
            $ip_address = $ip;
        }
    } else {
        $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
}

if (!empty($_SERVER['HTTP_X_FORWARDED'])) {
    $ip_address = $_SERVER['HTTP_X_FORWARDED'];
} elseif (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP'])) {
    $ip_address = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_FORWARDED_FOR'])) {
    $ip_address = $_SERVER['HTTP_FORWARDED_FOR'];
} elseif (!empty($_SERVER['HTTP_FORWARDED'])) {
    $ip_address = $_SERVER['HTTP_FORWARDED'];
} else {
    $ip_address = $_SERVER['REMOTE_ADDR'];
}

if(isset($_POST['song'])){
    $song=$_POST['song'];  $code=$_POST['code'];
    $filename = '../musicfile/'.$song;
    $ip=$ip_address;
    setcookie("song",$song,time()+3000);
    $query1=mysqli_query($conn,"SELECT * FROM `downloads` WHERE `ip`='$ip' AND `download_code`='$code'");

    if(mysqli_num_rows($query1)==0 || mysqli_num_rows($query1) >=1){

        mysqli_query($conn,"INSERT INTO `downloads` VALUES (NULL,$ip,$code)");

        $escape=mysqli_real_escape_string($conn, $_POST['song']);
        $query=mysqli_query($conn,"SELECT * FROM `music` WHERE `track`='$escape'");
        $row=mysqli_fetch_assoc($query);
        $count=$row['downloads']+1;//add count
        $id=$row['id'];

        mysqli_query($conn,"UPDATE `music` SET `downloads`='$count' WHERE `track`='$escape'");

        $query=mysqli_query($conn,"SELECT * FROM `ads` WHERE `music_id`='$id'");
        $row=mysqli_fetch_assoc($query);
        $id=$row['id'];

        $query=mysqli_query($conn,"SELECT * FROM `ads__states` WHERE `Ads_id`='$id'");
        $row=mysqli_fetch_assoc($query);
        $counts=$row['Downloads']+1;
        mysqli_query($conn,"UPDATE `ads__states` SET `Downloads`='$counts' WHERE `Ads_id`='$id'");

        header('Location:dw.php?song='.$song);
        exit();
    }else {
        $filename = '../musicfile/'.$song;
        $query=mysqli_query($conn,"SELECT * FROM `music` WHERE `track`='$song'");
        $id=$row['id'];

        $query=mysqli_query($conn,"SELECT * FROM `ads` WHERE `music_id`='$id'");
        $row=mysqli_fetch_assoc($query);
        $id=$row['id'];

        $query=mysqli_query($conn,"SELECT * FROM `ads__states` WHERE `Ads_id`='$id'");
        $row=mysqli_fetch_assoc($query);
        $counts=$row['Downloads']+1;
        mysqli_query($conn,"UPDATE `ads__states` SET `Downloads`='$counts' WHERE `Ads_id`='$id'");

        header('Location:dw.php?song='.$song);

        exit();
    }
}
?>




