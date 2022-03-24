<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Resetpassword;
use App\crypt;
use App\Member;
use App\Login;
class ResetPasswordController extends Controller
{
    public function ResetPassword($email){
         if(Member::where('email',$email)->exists()){

       $member=Member::where('email',$email)->first();

       return [
             'name'=>$member->name,
             'surname'=>$member->surname,
             'image'=>$member->image,
             'email'=>$email
       ];

    }else{
        return "Email not exists";
    }
    }

    public function ChangePassword(Request $request){
        $crypt= new crypt();
        $key='base64:48Hp4EKVcFDYYV3oqDPAhWFh+V2T3OlupjegVpRcrmU';
        $email = $crypt->decryptIt(str_replace('|' ,'/',$request->email .'='),$key);
        if(Login::where('email',$email)->exists()){

            Login::where('email',$email)->update(
                [
                    'password' => md5($request->NPassword)
                ]
            );

            return 'Ok';
        }else{
           return "Failed Please Contactus";
        }
    }

    public  function  CheckLink($link){
        if(Resetpassword::where('crypt',$link)->exists()){
            $conn=mysqli_connect("localhost","olovamp3_Iamspam","Sav3Lovafac3") or die("fail");
            mysqli_select_db($conn,"olovamp3_All_over") or die("database not found");
            mysqli_query($conn,'DELETE FROM `resetpasswords` WHERE datediff(now(), created_at) > 1');
            return 'true';
        }else{
            return 'false';
        }
    }

    public function Confirmed($email){
         if(Member::where('email',$email)->exists()){
       $cypt=new crypt();
       $key='base64:48Hp4EKVcFDYYV3oqDPAhWFh+V2T3OlupjegVpRcrmU';
       $crypt =chop($cypt->encryptIt($email,$key),'=');
       $member=Member::where('email',$email)->first();
       $reset = new Resetpassword();
       $reset->crypt=$crypt;
       $reset->member_id=$member->id;
       $reset->save();

     $header  ="FROM : Bogiyo <noreply@bogiyo.com>\n";
     $header .="MIME-Version: 1.0\n";
     $header .="Content-type: text/html; charaset=iso-8859l\n";
     $message ='<!Doctype>
<html>
<title></title><head></head>
<body>
 <h1 align="center" style="color:#b05f3c;">Bogiyo </h1>
 <h4 align="center">Account Team</h4>
 <p align="center">Hey  '.$member->name.', We heard that you lost your Bogiyo password. Sorry about that!</p>
 <p align="center">But don’t worry! You can use the following link within the next two days to reset your password:<br><br> 
 <a href="http://bogiyo.com/changepassword/'.$crypt.'" style=" text-decoration: none;
     padding: 8px;
     background: #2a88bd;
     color: white;
     border-radius: 5px;">Reset Password</a> </p>
 <p align="center">If you don\'t use this link within 48 hours, it will expire. To get a new password reset link 
 <a href="http://bogiyo.com/resetpassword">Click here</a></p>


 <div id="_rc_sig"><br><br><div class="pre"><img style="float: right" src="http://bogiyo.com/thumbnails/mailfooota.png">Bogiyo Account Team</div>
     <div class="pre" style="text-align: left"><span style="color: #d19275"><a style="color: #d19275" href="mailto:info@bogiyo.com">info@bogiyo.com</a></span></div>
     <div class="pre">&nbsp;</div>
     <div class="pre">ENGAGE US:&nbsp;<span style="color: #3366ff"><a style="color: #3366ff" href="https://www.facebook.com/pages/Mp3Olova/1512466575638686">FACEBOOK</a>
     </span>&nbsp;|&nbsp;<span style="color: #00ccff"><a style="color: #00ccff" href="https://twitter.com/bogiyomusic">TWITTER</a></span></div>
     <div class="pre">WEBSITE:&nbsp;<span style="color: #d19275"><a style="color: #d19275" title="Music From All Over" href="http://bogiyo.com">BOGIYO.COM
     </a></span></div></div>
</body>
</html>';

     mail($email,"\nPassword reset\n",$message, $header);
   }

   return 'Ok';
    }
}
