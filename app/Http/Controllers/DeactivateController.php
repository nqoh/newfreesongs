<?php

namespace App\Http\Controllers;

use App\Ads;
use App\Ads_History;
use App\Ads_States;
use App\Alert;
use App\BankDetail;
use App\Follow;
use App\Login;
use App\Member;
use App\Messages;
use App\Music;
use App\Playlist;
use Illuminate\Http\Request;

class DeactivateController extends Controller
{
    function Deactivate($password){
       if(Login::where('username',session()->get('username'))->where('password',md5($password))->exists()){
          if(Music::where('member_id',session()->get('id'))->exists()){
              foreach (Music::where('member_id',session()->get('id'))->get() as $music){
                  unlink('musicfile/'.$music->track);
                  if($music->album_art !== "/album_art/olova-logo.png"){
                      unlink(substr($music->album_art,1 , strlen($music->album_art)));
                  }
              }
          }
          Music::where('member_id',session()->get('id'))->delete();
          Member::where('id',session()->get('id'))->delete();
          Login::where('username',session()->get('username'))->where('password',md5($password))->delete();
          Ads_History::where('Member_id',session()->get('id'))->delete();

          $ads = Ads::where('member_id',session()->get('id'))->get();
          foreach ($ads as $ad){
              Ads_States::where('Ads_id',$ad->id)->delete();
          }
          Alert::where('to_member_id',session()->get('id'))->delete();
          Ads::where('member_id',session()->get('id'))->delete();
          BankDetail::where('member_id',session()->get('id'))->delete();
          Follow::where('follower_id',session()->get('id'))->where('member_id',session()->get('id'))->delete();
          Messages::where('from_member_id',session()->get('id'))->
          orwhere('to_member_id',session()->get('id'))->delete();
          Playlist::where('member_id',session()->get('id'))->delete();

          session()->flush();
          return 'Ok';

       }else{
           return "Invalid Password";
       }
    }
}
