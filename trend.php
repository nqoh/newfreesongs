<?php
$conn=mysqli_connect("localhost","olovamp3_Iamspam","Sav3Lovafac3") or die("fail");
mysqli_select_db($conn,"olovamp3_All_over") or die("database not found");



function setTraindingTracks(){
    global $conn;
    mysqli_query($conn,"DELETE FROM `trending`");
    if(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='South Africa'")) >= 10){
        $query = mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='South Africa' ");
        $i=0;
        while($i < 10){
            $row=mysqli_fetch_assoc($query);
            $code=$row['music_id'];
            $count=$row['downloads'];
            mysqli_query($conn,"INSERT INTO `trending` (`id`, `music_id`, `downloads`, `country`, `created_at`, `updated_at`) VALUES(NULL ,'$code','$count','South Africa',CURRENT_TIMESTAMP , CURRENT_TIMESTAMP )");
            $i++;
        }
        NgTraindingTracks();
    }else{
        $getLeftRecord =  10 -  mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='South Africa'"));
        $i=0;
        while($i < $getLeftRecord ){
            $random =  mysqli_query($conn,"select music.id from `music` join `members` on music.member_id=members.id 
             AND music.downloads >= 500 AND members.country ='South Africa'  ORDER BY rand()");
            $row=mysqli_fetch_assoc($random);
            $code=$row['id'];
            if(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE `music_id`='$code'")) == 0) {
                mysqli_query($conn, "INSERT INTO `next_trending` (`id`, `music_id`, `downloads`, `country`, `created_at`, `updated_at`)  VALUES(NULL,'$code',0,'South Africa',CURRENT_TIMESTAMP , CURRENT_TIMESTAMP )");
            }else{
                setTraindingTracks();
            }
            $i++;
        }
        setTraindingTracks();
    }
}


function NgTraindingTracks(){
    global $conn;
    if(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='Nigeria'")) >= 10){
        $query = mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='Nigeria' ");
        $i=0;
        while($i < 10){
            $row=mysqli_fetch_assoc($query);
            $code=$row['music_id'];
            $count=$row['downloads'];
            mysqli_query($conn,"INSERT INTO `trending` (`id`, `music_id`, `downloads`, `country`, `created_at`, `updated_at`) 
             VALUES(NULL ,'$code','$count','Nigeria',CURRENT_TIMESTAMP , CURRENT_TIMESTAMP )");
            $i++;
        }
        AllTraindingTracks();
    }else{
        $getLeftRecord =  10 -  mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='Nigeria'"));
        $i=0;
        while($i < $getLeftRecord ){
            $random =  mysqli_query($conn,"select music.id from `music` join `members` on music.member_id=members.id AND 
             music.downloads >= 500 AND members.country ='Nigeria'  ORDER BY rand()");
            $row=mysqli_fetch_assoc($random);
            $code=$row['id'];
            if(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE `music_id`='$code'")) == 0) {
                mysqli_query($conn, "INSERT INTO `next_trending` (`id`, `music_id`, `downloads`, `country`, `created_at`, `updated_at`) VALUES(NULL ,'$code',0,'Nigeria',
                   CURRENT_TIMESTAMP,CURRENT_TIMESTAMP )");
            }else{
                NgTraindingTracks();
            }
            $i++;
        }
        NgTraindingTracks();
    }
}




function AllTraindingTracks(){
    global $conn;
    if(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='international'")) >= 10){
        $query = mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='international' ");
        $i=0;
        while($i < 10){
            $row=mysqli_fetch_assoc($query);
            $code=$row['music_id'];
            $count=$row['downloads'];
            mysqli_query($conn,"INSERT INTO `trending` (`id`, `music_id`, `downloads`, `country`, `created_at`, `updated_at`) 
             VALUES(NULL ,'$code','$count','international',CURRENT_TIMESTAMP , CURRENT_TIMESTAMP )");
            $i++;
        }
        mysqli_query($conn,"DELETE FROM `next_trending`");
        exit();
    }else{
        $getLeftRecord =  10 -  mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE  `country`='international'"));
        $i=0;
        while($i < $getLeftRecord ){
            $random =  mysqli_query($conn,"SELECT music.id FROM `music` WHERE `downloads` >= 500 AND `member_id` != '17547' ORDER  BY  rand()");
            $row=mysqli_fetch_assoc($random);
            $code=$row['id'];
            if(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM `next_trending` WHERE `music_id`='$code'")) == 0) {
                mysqli_query($conn, "INSERT INTO `next_trending` (`id`, `music_id`, `downloads`, `country`, `created_at`, `updated_at`) VALUES(NULL ,'$code',0,'international',
CURRENT_TIMESTAMP , CURRENT_TIMESTAMP )");
            }else{
                AllTraindingTracks();
            }
            $i++;
        }
        AllTraindingTracks();
    }
}



setTraindingTracks();

