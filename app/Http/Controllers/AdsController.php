<?php

namespace App\Http\Controllers;

use App\Ads;
use App\Ads_History;
use App\Ads_States;
use App\Music;
use App\Member;
use App\Follow;
use App\PriceCurrency;
use Illuminate\Http\Request;

class AdsController extends Controller
{
    function index()
    {
        if (Ads::where('music_id', 0)->where('country', session()->get('country'))->exists()) {

            $lounge = Member::Join('ads', 'ads.member_id', '=', 'members.id')->where('ads.music_id', 0)->
            where('ads.country', session()->get('country'))->inRandomOrder()->first();
            $follower = Follow::where('follower_id', '!=', 0)->where('member_id', $lounge->member_id)->count();
            $songs = Music::where('member_id', $lounge->member_id)->count();
            $this->updateLoungeState('Impressions', $lounge);

            $lounge2 = Member::Join('ads', 'ads.member_id', '=', 'members.id')->where('ads.music_id', 0)->
            where('ads.country', session()->get('country'))->inRandomOrder()->first();
            $follower2 = Follow::where('follower_id', '!=', 0)->where('member_id', $lounge2->member_id)->count();
            $songs2 = Music::where('member_id', $lounge2->member_id)->count();

            $this->updateLoungeState('Impressions', $lounge2);

        } else {
            $lounge = Member::where('account_type', 'artist')->inRandomOrder()->first();
            $follower = Follow::where('follower_id', '!=', 0)->where('member_id', $lounge->id)->count();
            $songs = Music::where('member_id', $lounge->member_id)->count();
            $lounge2 = Member::where('account_type', 'artist')->inRandomOrder()->first();
            $follower2 = Follow::where('follower_id', '!=', 0)->where('member_id', $lounge2->id)->count();
            $songs2 = Music::where('member_id', $lounge2->member_id)->count();
        }

        if (Ads::where('music_id', '>', 0)->where('country', session()->get('country'))->exists()) {

            $music = Music::Join('ads', 'ads.music_id', '=', 'music.id')->Join('members', 'music.member_id', '=', 'members.id')
                ->where('ads.music_id', '>', 0)->where('members.id','!=','17547')->where('ads.country', session()->get('country'))->select(
                    'members.username',
                    'members.name',
                    'ads.id',
                    'music.track',
                    'music.size',
                    'music.duration',
                    'music.album_art',
                    'music.downloads',
                    'music.download_code',
                    'music.delete_code',
                    'music.price'
                )->take(3)->inRandomOrder()->get();

            $this->updateMusicState('Impressions', $music);

            if (sizeof($music) < 3) {
                for ($i = 0; $i <= 3 - sizeof($music); $i++) {
                    $aded_music = Music::Join('members', 'music.member_id', '=', 'members.id')->inRandomOrder()->take(1)->get();
                    $array_music[] = $aded_music[0];
                }

                for ($i = 0; $i <= sizeof($aded_music); $i++) {
                    $music[] = $array_music[$i];
                }
            };

        } else {
            $music = Music::Join('members', 'music.member_id', '=', 'members.id')->where('music.member_id','!=','17547')->inRandomOrder()->take(3)->get();
        }

        return [
            'lounge' => $lounge,
            'followers' => $follower,
            'songs' => $songs,
            'lounge2' => $lounge2,
            'followers2' => $follower2,
            'songs2' => $songs2,
            'musics' => $music
        ];
    }


    public function updateMusicState($column, $music)
    {
        $ids=[];
        foreach ($music as $musicId) {
            $ids[] = $musicId->id;
        }

        $getAds = Ads_States::whereIn('Ads_id', $ids)->get();
        foreach ($getAds as $ad) {
            $add = $ad->$column += 1;
            Ads_States::where('id', $ad->id)->update([$column => $add]);
            $Ad = Ads::where('id', $ad->Ads_id)->first();
            if ($add >= 50000) {
                if(Ads_History::where('Music_id',$Ad->music_id)->where('last',1)->exists()){
                    Ads_History::where('Music_id',$Ad->music_id)->where('last',1)->update(['last'=>0]);
                };
                $ad_history = new Ads_History();
                $ad_history->Impressions = $ad->Impressions;
                $ad_history->Hits = $ad->Hits;
                $ad_history->PlayLists = $ad->PlayLists;
                $ad_history->Comments = $ad->Comments;
                $ad_history->Downloads = $ad->Downloads;
                $ad_history->Plays = $ad->Plays;
                $ad_history->Followers = $ad->Followers;
                $ad_history->Member_id = $Ad->member_id;
                $ad_history->Music_id = $Ad->music_id;
                $ad_history->last = 1;
                $ad_history->Started_at = $ad->created_at;
                $ad_history->save();
                Ads_States::where('id', $ad->id)->delete();
                Ads::where('id', $ad->Ads_id)->delete();
            }
        }
    }


    public function updateLoungeState($column, $lounge)
    {

        $getAdId = Ads::where('member_id', $lounge->member_id)->where('music_id', 0)->first();
        $getAd = Ads_States::where('Ads_id', $getAdId->id)->first();
        $add = $getAd->$column += 1;
        Ads_States::where('Ads_id', $getAdId->id)->update([$column => $add]);

        if ($add >= 50000) {
            if(Ads_History::where('Member_id',$lounge->member_id)->where('Music_id',0)->where('last',1)->exists()){
                Ads_History::where('Member_id',$lounge->member_id)->where('Music_id',0)->where('last',1)->update(['last'=>0]);
            }
            $ad_history = new Ads_History();
            $ad_history->Impressions = $getAd->Impressions;
            $ad_history->Hits = $getAd->Hits;
            $ad_history->PlayLists = $getAd->PlayLists;
            $ad_history->Comments = $getAd->Comments;
            $ad_history->Downloads = $getAd->Downloads;
            $ad_history->Plays = $getAd->Plays;
            $ad_history->Followers = $getAd->Followers;
            $ad_history->Member_id = $lounge->member_id;
            $ad_history->last = 1;
            $ad_history->Music_id = $lounge->music_id;
            $ad_history->Started_at = $getAd->created_at;
            $ad_history->save();
            Ads_States::where('Ads_id', $getAdId->id)->delete();
            Ads::where('id', $getAdId->id)->delete();
        }
    }


    function MusicToPromote()
    {

        $lounge=[];$follower=[];$ids=[];$Totalsongs=[];
        $promoted=Ads::where('member_id',session()->get('id'))->where('music_id','!=',0)->get();
        foreach ($promoted as $notpromoted){
            $ids[] = $notpromoted->music_id;
        }
        if(!Ads::where('member_id',session()->get('id'))->where('music_id',0)->exists()){
            $lounge= Member::where('id',session()->get('id'))->first();
            $follower = Follow::where('follower_id', '!=', 0)->where('member_id', session()->get('id'))->count();
            $Totalsongs = Music::where('member_id', session()->get('id'))->count();
        }
        $music = Music::whereNotIn('id',$ids)->where('member_id',session()->get('id'))
            ->orderBy('id','desc')->paginate(6);
        return[
            'lounge'=>$lounge,
            'followers'=>$follower,
            'Totalsongs'=>$Totalsongs,
            'music'=>$music
        ];

    }


    function AdsMusic($id)
    {
        $currency = PriceCurrency::where('country', session()->get('country'))->first();
        $followers = Follow::where('follower_id', '!=', 0)->where('member_id', session()->get('id'))->count();
        $music_total = Music::where('member_id', session()->get('id'))->count();
        if (Music::where('id', $id)->where('member_id', session()->get('id'))->exists()) {
            $music = Music::Join('members', 'music.member_id', '=', 'members.id')->where('music.id', $id)->first();
            return [
                'member' => $music,
                'followers' => $followers,
                'music' => $music_total,
                'currency' => $currency
            ];
        } else if (Member::where('id', $id)->where('username', session()->get('username'))->exists()) {
            return [
                'currency' => $currency,
                'followers' => $followers,
                'music' => $music_total,
                'member' => Member::where('id', $id)->where('username', session()->get('username'))->first()
            ];
        } else {
            return "not exists";
        }
    }

    function AdsOverview(){
        $member = Ads::Join('members','ads.member_id','=','members.id')->leftJoin('music','ads.music_id','=','music.id')
            ->where('ads.member_id',session()->get('id'))->select(
                'members.username',
                'members.name',
                'members.image',
                'members.bio',
                'ads.id',
                'ads.music_id',
                'ads.member_id',
                'music.track',
                'music.size',
                'music.duration',
                'music.album_art',
                'music.downloads',
                'music.download_code',
                'music.delete_code',
                'music.price'
            )->orderBy('ads.id','desc')->paginate(6);

        $follower = Follow::where('follower_id', '!=', 0)->where('member_id', session()->get('id'))->count();
        $songs = Music::where('member_id', session()->get('id'))->count();
        return [
            'member'=>$member,
            'followers'=>$follower,
            'totalSongs'=>$songs
        ];
    }

    function getAdInsight($id)
    {
        if (Ads_States::Join('ads', 'ads.id', 'ads__states.Ads_id')->where('ads.id', $id)->
        where('ads.member_id', session()->get('id'))->exists())
        {
            return Ads_States::Join('ads', 'ads.id', 'ads__states.Ads_id')->where('ads.id', $id)->where('ads.member_id', session()->get('id'))->get();
        }else{
            return 'Not Exists';
        }
    }


    function AdHistory(){
        $member = Ads_History::Join('members','ads__histories.Member_id','=','members.id')
            ->leftJoin('music','ads__histories.Music_id','=','music.id')
            ->where('ads__histories.Member_id',session()->get('id'))->where('last',1)->select(
                'members.username',
                'members.name',
                'members.image',
                'members.bio',
                'ads__histories.id',
                'ads__histories.Music_id',
                'ads__histories.Member_id',
                'music.track',
                'music.size',
                'music.duration',
                'music.album_art',
                'music.downloads',
                'music.download_code',
                'music.delete_code',
                'music.price'
            )->orderBy('ads__histories.id','desc')->paginate(6);

        $follower = Follow::where('follower_id', '!=', 0)->where('member_id', session()->get('id'))->count();
        $songs = Music::where('member_id', session()->get('id'))->count();
        return [
            'member'=>$member,
            'followers'=>$follower,
            'totalSongs'=>$songs
        ];
    }

    function getAdHistoryInsight($id){
        if (Ads_History::where('ads__histories.Music_id', $id)->where('ads__histories.Member_id', session()->get('id'))->exists())
        {
            return Ads_History::where('ads__histories.Music_id', $id)->
            where('ads__histories.Member_id', session()->get('id'))
                ->orderBy('id','desc')->paginate(1);

        }else{
            return 'Not Exists';
        }
    }
}
