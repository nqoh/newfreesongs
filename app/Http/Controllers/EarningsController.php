<?php

namespace App\Http\Controllers;

use App\Earnings;
use Illuminate\Http\Request;

class EarningsController extends Controller
{
   function getEarnings(){

       $music=Earnings::Join('music','earnings.music_id','music.id')->
              Join('members','music.member_id','members.id')->
              where('earnings.member_id',session()->get('id'))->paginate(6);

       $totalPurchases=0;
       foreach(Earnings::where('member_id',session()->get('id'))->get() as $purchases){
           $totalPurchases += $purchases->purchases;
       }

       return[
         'music'=>$music,
         'totalPurchases' => $totalPurchases,
       ];

   }

   public function isTrackPurchased($id){
       if(Earnings::where('music_id',$id)->where('member_id',session()->get('id'))->exists()){
           return 'true';
       }else{
           return 'false';
       }
   }
}
