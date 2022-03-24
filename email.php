<?php
   
  include_once  'verifyEmail.php';
  function checkmail($email){
    $vmail = new verifyEmail();
    $vmail->setStreamTimeoutWait(20);
    $vmail->Debug= FALSE;
    $vmail->Debugoutput= 'html';

    $vmail->setEmailFrom('info@bogiyo.com');

    if ($vmail->check($email)) {
        return ""; 
    }

    if (verifyEmail::validate($email)) {
        return 'valid email, but not exist!';
    } else {
        return 'Invalid Email';
    }
}

?>