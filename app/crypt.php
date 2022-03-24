<?php
/**
 * Created by PhpStorm.
 * User: Ngobese
 * Date: 13-May-17
 * Time: 10:15
 */

namespace App;


class crypt
{
    function encryptIt($data, $key) {
    $encryption_key = base64_decode($key);
    $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));
    $encrypted = openssl_encrypt($data, 'aes-256-cbc', $encryption_key, 0, 
    $iv);
    return str_replace('/' ,'|',base64_encode($encrypted . '::' . $iv));
    }

    function decryptIt($data, $key) {
    $encryption_key = base64_decode($key);
    list($encrypted_data, $iv) = array_pad(explode('::', base64_decode($data), 
    2),2,null);
    return openssl_decrypt($encrypted_data, 'aes-256-cbc', $encryption_key, 0, 
    $iv);
    }

}