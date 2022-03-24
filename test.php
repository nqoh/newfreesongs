<?php
    include 'verifyEmail.php';
    $email="ngobese.fgfdgsdgdsgnn@yahoo.com";
    $vmail = new verifyEmail();
    $vmail->setStreamTimeoutWait(20);
    $vmail->Debug= FALSE;
    $vmail->Debugoutput= 'html';

    $vmail->setEmailFrom('info@bogiyo.com');

    if ($vmail->check($email)) {
          echo "valid and exit";exit();
    }

    if (verifyEmail::validate($email)) {
        echo 'valid but not exit';exit();
    } else {
        echo 'Invalid Email';exit();
    }


