<?php
include 'email.php';
include 'crypt.php';
include 'connect.php';
$query = mysqli_query($conn,"SELECT * FROM logins  WHERE datediff(now(), created_at) > 2 ");
        if (mysqli_num_rows($query) >= 1) {
        while ($row = mysqli_fetch_assoc($query)) {
       $email = $row['email'];
        $mx= substr($email,strpos($email,"@")+1,strlen($email));
        if (checkdnsrr($mx, "MX")) { 
		if (checkmail($email) === "") {
                if(mysqli_num_rows(mysqli_query($conn,"select * from unsubscribes where email = '$email'")) == 0) {
                $meber_row = mysqli_fetch_assoc(mysqli_query($conn, "select * from members where email ='$email'"));
                $country = $meber_row['country'];
                $pic = str_replace(" ","%20",$meber_row['image']);
                $name= $meber_row['name'];
                $username = $meber_row['username'];
                $surname= $meber_row['surname'];
                $q = mysqli_query($conn, "select * from members join music on members.id = music.member_id where  members.country='$country' and music.downloads > '500' ORDER BY RAND() LIMIT 5");
                $div = '';
                if (mysqli_num_rows($q) > 1) {
                    while ($rows = mysqli_fetch_assoc($q)) {
                        $track_name = '';
                        if (strlen($rows['track']) > 27) {
                            $track_name = substr($rows['track'], 0, 27) . '.mp3';
                        } else {
                            $track_name = $rows['track'];
                        }
                        
                        $album='';
                        if($rows['album_art'] == '/album_art/olova logo.png'){
                            $album ='https://bogiyo.com/album_art/olova%20logo.png';
                        }else{
                            $album = 'https://bogiyo.com'.$rows['album_art'];
                        }
                        
                       $album='https://bogiyo.com'.str_replace(" ","%20",$rows['album_art']);
                        
                       $div .= '<div style="margin-bottom:30px;"  class="col-xl-12" >
      <div style="margin: 0px auto" class="col-xl-8 col-md-8 col-lg-8 col-sm-8 col-12">
        <a href="https://bogiyo.com/' . $rows['download_code'] . '"><img src="'.$album.'"  onerror="this.src="https://bogiyo.com/thumbnails/olova.png;""  style="float: left; margin-right:10px;  width:80px"></a>
        <p style="margin: 0px; font-weight:bold; opacity: .8; font-size:18px">' . $track_name . '</p>
        <p style="font-size:13px;margin: 4px 0px 4px 0px; float: left; opacity: .8; ">By : <a href="https://bogiyo.com/'.$rows['username'].'" style="color: #d19275; opacity: 1; text-decoration: none">' . ucfirst($rows['name']) . '</a></p>
        <a href="https://bogiyo.com/' . $rows['download_code'] . '" style="float: right"><span style=" border-radius: 5px; float: right; padding: 3px 8px 3px 8px;color:#d19275; border: 1px solid #d19275;">View</span></a>
        <p style="clear:right;margin: 0px;font-size:13px; font-weight:bold; opacity: .8; ">' . number_format($rows['downloads']) . ' Downloads</p>
      </div>
    </div>';
                    }
                    $crypt = new crypt();
                    $key   = 'base64:48Hp4EKVcFDYYV3oqDPAhWFh+V2T3OlupjegVpRcrmU';
                    $mail  = $crypt->encryptIt($email, $key);
                    $header  ="FROM : Bogiyo <noreply@bogiyo.com>\n";
                    $header .="MIME-Version: 1.0\n";
                    $header .="Content-type: text/html; charaset=iso-8859l\n";
                    $message = '<!doctype html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
<div class="container" style="padding: 1% 5% 0% 5%;">
    <img src="https://bogiyo.com/thumbnails/mail.png" style="float: left; width:20%; margin-top: -3%">
    <img src="https://bogiyo.com'.$pic.'" style="float: right; border-radius: 100%; width:8%"><br><br><br>
    <div style="clear:both; background:#eed5b7;  padding:5px;  width: 100%">
        <p align="center" style="font-size:17px;color:black">' . ucfirst($name) .', you have missed a lot in your lounge </p>
        <p align="center" ><a href="https://bogiyo.com/' . $username . '" style="width: 200px; border-radius: 5px; padding: 8px;text-decoration:none;color:white; background-color: #d19275;">Visit Your Lounge</a></p>
        <p align="center" style="font-size:17px">More music for you, Don\'t miss a beat.</p>
    </div>
    <div >
    <p align="center" style="color:black; font-size: 120%;opacity:.7;  margin:2% auto;">
       These songs were trending while you were away
    </p>
 <div class="row">'.$div.'</div>
    </div>

    <div style="background:#eed5b7;height: 8px"></div>
    <div>
        <p align="center" style=" font-weight:bold; color:#d19275; font-size:20px; margin:3px 0px 0px 0px">HOME FOR MUSIC LOVERS</p>
        <p align="center" style="margin: 0px; font-weight:bold; opacity: .8; font-size:16px">Discover new music and see current trends</p>
        <p align="center" style=" margin-top:3px; font-size:18px"><a href="https://bogiyo.com" style="text-decoration:underline;color:#d19275;">Go to Bogiyo</a> </p>
        <p align="center" style="opacity:.7; margin-top:5px;   font-size:12px">This message was sent to '.$email.' and intended for '.ucfirst($name).' '.ucfirst($surname).'.<br> Bogiyo
            sends updates like this to help you keep up with the latest music trends.<br>You can
            <a href="https://bogiyo.com/unsusbcribe/' . $mail . '" style="text-decoration:underline;color:#d19275;">unsubscribe</a>
            from these updates, at anytime you wish.
        </p>
    </div>
</div>
</body>
</html>';
      mail($email, "\n Missed Latest Music Trends \n", $message, $header);
            }
        }
    
			
		} elseif (verifyEmail::validate($email)) {
			
		} else {
			
		}
		
		

}

}
}

?>