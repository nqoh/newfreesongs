<?php
/**
 * Created by PhpStorm.
 * User: Ngobese
 * Date: 10-Apr-17
 * Time: 20:07
 */

namespace App;
use Exception;
use Intervention\Image\Facades\Image;

require 'getid3/getid3.php';

class extract_ide
{
    public function mp3($fileName){
        $getInfo= new \getID3();
        $get_file= $getInfo->analyze('musicfile/'.$fileName);
        $image=substr($fileName,0,strlen($fileName)-4);
        if(isset($get_file['comments']['picture'][0])){
            $img=$get_file['comments']['picture']['0']['data'];
            file_put_contents('album_art/'.$image.'.jpg',$img);
        }
    }

    public function playtimes($fileName){
        $getInfo= new \getID3();
        $getInformation=$getInfo->analyze('musicfile/'.$fileName);
        try {
            return $duration = $getInformation['playtime_string'];
        }catch (Exception $e){
            return "invalid file";
        }
    }

}