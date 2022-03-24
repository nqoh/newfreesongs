<?php

namespace App\Http\Controllers;

use App\Alert;
use Illuminate\Http\Request;
use App\Playlist;
use App\Member;
use App\Music;
use App\Ads;

class PlaylistController extends Controller
{
    public function getPlaylist()
    {
        $member = Member::find(session()->get('id'));
        $array=[];
        foreach ($member->playlists as $playlist) {
            $array [] = $playlist->music_id;
        }

        return Music::Join('members', 'music.member_id', '=', 'members.id')->
        whereIn('music.id', $array)->select(
            'music.track',
            'music.size',
            'music.duration',
            'music.download_code',
            'music.id',
            'music.downloads',
            'music.price',
            'music.album_art',
            'members.username',
            'members.name'
        )->paginate(6);

    }


    public function RemoveOnPlaylist($id)
    {
        Playlist::where('music_id', $id)->where('member_id', session()->get('id'))->delete();
        return "Ok";
    }


    public  function  addSongOnPlaylist($id){
        $music = Music::where('id',$id)->first();
        $play = new Playlist();
        $play->music_id=$id;
        $play->member_id=session()->get('id');
        $play->save();


        if(Ads::where('music_id',$id)->exists()) {

            $ad = Ads::Join('ads__states','ads.id','ads__states.Ads_id')->
            where('ads.music_id', $id)->first();

            Ads::Join('ads__states','ads.id','ads__states.Ads_id')->
            where('ads.music_id', $id)->update(['PlayLists'=> $ad->PlayLists + 1]);
        }

        $alert = new Alert();
        $alert->alert='playlist';
        $alert->from_member_id = session()->get('id');
       if($music->member_id == session()->get('id')){
           $alert->to_member_id = 0;
       }else {
        $alert->to_member_id = $music->member_id;}
        $alert->status=0;
        $alert->save();

        return 'Ok';
    }

    function getSongOnPlaylisted($id){
        $playlisted=Playlist::Join('members','playlists.member_id','members.id')->where('music_id',$id)
             ->orderBy('playlists.id','desc')->take(2)->get();

        $total=Playlist::where('music_id',$id)->count();

        if(Playlist::where('music_id',$id)->where('member_id',session()->get('id'))->exists()){
            $memberPlaylisted= 'true';
        }else{
            $memberPlaylisted= 'false';
        }


        return [
          'playlisted' => $playlisted,
          'total' => $total,
          'memberPlaylisted' => $memberPlaylisted
        ];

    }
    public function RecentOnPlayList()
    {
       /* $member = Member::orderBy('playlists.id','desc')->find(session()->get('id'));

        foreach ($member->playlists as $playlist) {
            $array [] = $playlist->music_id;
        }*/

        return Playlist::Join('music','playlists.music_id','music.id')->
                Join('members','music.member_id','members.id')->
        where('playlists.member_id',session()->get('id'))->select(
            'music.track',
            'music.size',
            'music.duration',
            'music.download_code',
            'music.id',
            'music.downloads',
            'music.price',
            'music.album_art',
            'members.username',
            'members.name'
        )->orderBy('playlists.id','desc')->take(3)->get();

      /*  return Music::Join('members', 'music.member_id', '=', 'members.id')->
        whereIn('music.id', $array)->select(
            'music.track',
            'music.size',
            'music.duration',
            'music.download_code',
            'music.id',
            'music.downloads',
            'music.price',
            'music.album_art',
            'members.username',
            'members.name'
        )->take(3)->orderBy('')->get();*/
    }

    function  LoungeRecentOnPlayList($id){
        $member= Member::where('username',$id)->first();
        return Playlist::Join('music','playlists.music_id','music.id')->
        Join('members','music.member_id','members.id')->
        where('playlists.member_id',$member->id)->select(
            'music.track',
            'music.size',
            'music.duration',
            'music.download_code',
            'music.id',
            'music.downloads',
            'music.price',
            'music.album_art',
            'members.username',
            'members.name'
        )->orderBy('playlists.id','desc')->take(3)->get();
    }

    function getLoungePlaylist($id){
        $member = Member::where('username',$id)->first();
        $array=[];
        foreach ($member->playlists as $playlist) {
            $array [] = $playlist->music_id;
        }

        return Music::Join('members', 'music.member_id', '=', 'members.id')->
        whereIn('music.id', $array)->select(
            'music.track',
            'music.size',
            'music.duration',
            'music.download_code',
            'music.id',
            'music.downloads',
            'music.price',
            'music.album_art',
            'members.username',
            'members.name'
        )->paginate(6);
    }


    function  playlisted($download_code){

     $music = Music::where('download_code',$download_code)->first();
      $playlistedMembers=Playlist::Join('members','playlists.member_id','members.id')
            ->where('playlists.music_id',$music->id)->orderBy('playlists.id','desc')
            ->paginate(18);

     return[
         'track'=> $music->track,
         'playlistedMembers' => $playlistedMembers,
     ];

    }
}
