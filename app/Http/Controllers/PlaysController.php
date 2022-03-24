<?php

namespace App\Http\Controllers;

use App\Plays;
use App\Music;
use App\Ads;
use Illuminate\Http\Request;

class PlaysController extends Controller
{
    public function getPlays($id)
    {
        if (Plays::where('music_id', $id)->exists()) {
            return Plays::where('music_id', $id)->count();
        } else {
            return 0;
        }
    }

    public function addPlays($id)
    {
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


        if(Ads::where('music_id',$id)->exists()) {

            $ad = Ads::Join('ads__states','ads.id','ads__states.Ads_id')->
            where('ads.music_id', $id)->first();

            Ads::Join('ads__states','ads.id','ads__states.Ads_id')->
            where('ads.music_id', $id)->update(['Plays'=> $ad->Plays + 1]);
        }

            if (Plays::where('ip', $ip_address)->where('music_id', $id)->exists()) {

            } else {
                $plays = new Plays();
                $plays->ip = $ip_address;
                $plays->music_id = $id;
                $plays->save();
        }
    }
}
