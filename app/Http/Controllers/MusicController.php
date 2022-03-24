<?php

namespace App\Http\Controllers;
use App\Member;
use App\Music;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use App\Trending;
use App\Earnings;
class MusicController extends Controller
{
    function Paid(){
        return Music::Join('members', 'music.member_id', '=', 'members.id')->where('price', 1)
            ->where('member_id', session()->get('id'))->paginate(6);
    }

    function Question($downloadCode){
        $music =  Music::where('download_code',$downloadCode)->first();
        if(Earnings::where('member_id',session()->get('id'))->where('music_id',$music->id)->exists()){
            return 'yes';
        }else{
            return 'no';
        }
    }

    function TotalPaid(){
        $TotalPaid=0;
        foreach (Music::where('member_id', session()->get('id'))->where('price',1)->get() as $paid){
            $TotalPaid += $paid->downloads;
        }
        return $TotalPaid;
    }

    function Free(){
        return Music::Join('members', 'music.member_id', '=', 'members.id')->where('price', 0)
            ->where('member_id', session()->get('id'))->paginate(6);
    }

    function FreeLoungeMusic($id){
        $member = Member::where('username',$id)->first();
        return Music::Join('members', 'music.member_id', '=', 'members.id')->where('price', 0)
            ->where('member_id', $member->id)->paginate(6);
    }

    function getDeleteMusic($id){
        if(Music::where('delete_code',$id)->exists()){
            return Music::Join('members','music.member_id','members.id')->where('music.delete_code',$id)->get();
        }else{
            return 'fail';
        }
    }

    function DeleteMusic($id){
        if(Music::where('delete_code',$id)->exists()){
            Music::where('delete_code',$id)->delete();
            return "deleted";
        }else{
            return 'not exists';
        }
    }


    function PaidLoungeMusic($id){
        $member = Member::where('username',$id)->first();
        return Music::Join('members', 'music.member_id', '=', 'members.id')->where('price','!=', 0)
            ->where('member_id', $member->id)->paginate(6);
    }
    function PaidLoungeAllMusic($id){
        $member = Member::where('username',$id)->first();
        return Music::Join('members', 'music.member_id', '=', 'members.id')
            ->where('member_id', $member->id)->paginate(6);
    }
    function Music(){

        return Trending::Join('music','trending.music_id','music.id')->
                 Join('members','music.member_id','members.id')->
                 where('trending.country',session()->get('country'))->
                 orderBy('trending.downloads','desc')->paginate(10);
    }

    function MostDownload($num){
        return Music::Join('members', 'music.member_id', '=', 'members.id')->where('member_id' ,'!=' ,'17547')
            ->orderBy('downloads','desc')->skip($num)->take(16)->get();
    }

    function TrackExit($track){
        if (Music::where('member_id', session()->get('id'))->count() >= 50) {
            return 'Your exceeded track limit , delete some track\'s';
        }
        if (Music::where('track', $track)->exists()) {
            return 'That track has already been uploaded';
        } else {
            return 'Ok';
        }
    }

    function QualifyPaidDownloads(){
        if (Music::where('member_id', session()->get('id'))->where('downloads', '>=', 1000)->exists()) {
            return "Ok";
        } else {
            return "Sorry  you need a minimum of 1,000 free downloads";
        }
    }

    function trackSessions(){
        return [session()->get('download_link'), session()->get('delete_link'),session()->get('track_id')];
    }


    function getExploreMusic($num){
        return Member::Join('music','members.id','music.member_id')->skip($num)
            ->take(10)->orderBy('music.id','desc')->get();
    }

    function DeleteTrack($id){
        Music::where('id',$id)->delete();
        return 'Ok';
    }

    function getEditMusic($id){
        return Music::Join('members','music.member_id','members.id')->select(
            'music.track',
            'music.size',
            'music.lyrics',
            'music.duration',
            'music.download_code',
            'music.id',
            'music.downloads',
            'music.price',
            'music.album_art',
            'members.username',
            'members.name'
        )->where('download_code',$id)->first();
    }

    function ChangeCover(Request $request){
        $file = $request->file('file');
        $name = $file->getClientOriginalName();
        if ($file === null) {
            return "Select image before click upload";
        }

        if (preg_match("/.(png|jpg|jpeg|gif)$/i", $name)
        ) {
        } else {
            return "We only accept png,jpeg and gif format";
        }


        if(Music::where('track', $request->music_name)->exists()){
            $music=Music::where('track', $request->music_name)->first();


                if (file_exists('/album_art/' . $music->album_art)){
                    unlink('/album_art/' . $music->album_art);
                }

            Music::where('track',$request->music_name )->update(
                [
                    'album_art'=> '/album_art/'.substr($request->music_name,0, strlen($request->music_name) - 3).'jpg',
                ]
            );

                $path = 'album_art/'.substr($request->music_name,0, strlen($request->music_name) - 3).'jpg';
                Image::make($file->getRealPath())->resize(500, 500)->save($path);

                $pic = 'album_art/'.substr($request->music_name,0, strlen($request->music_name) - 3).'jpg';

                $this->WriteOnMusic($request->music_name,$pic);


                    return 'Ok';
        }else{
            return 'not exists';
        }

    }

    function updatLyrics(Request $request){
        if(Music::where('download_code',$request->id)->exists()) {
            $lyrics = $request->lyrics;
            if (strlen($lyrics) <= 0) { $lyrics = "No lyrics";};

            Music::where('download_code',$request->id)->update(['lyrics'=>$lyrics]);

            return "Ok";
        }else{
            return "Fail";
        }
    }

    function RemoveCover(Request $request){
        if(Music::where('download_code',$request->id)->exists()) {
            Music::where('download_code',$request->id)->update(['album_art'=>'/album_art/olova-logo.png']);
            $music=Music::where('download_code',$request->id)->first();
            $this->WriteOnMusic($music->track,'album_art/olova-logo.png');
            return "Ok";
        }
    }


    function WriteOnMusic($music,$pic){

        include 'getid3/getid3.php';
        $TaggingFormat = 'UTF-8';
// Initialize getID3 engine
        $getID3 = new \getID3;
        $getID3->setOption(array('encoding'=>$TaggingFormat));

// Get ID3 is distributed with the plugin
        require_once('getid3/write.php');

// Initialize getID3 tag-writing module
        $tagwriter = new \getid3_writetags;
        $tagwriter->filename = 'musicfile/'.$music;
        $tagwriter->tagformats = array('id3v2.3');


// set various options (optional)
        $tagwriter->overwrite_tags = true;
        $tagwriter->tag_encoding = $TaggingFormat;
        $tagwriter->remove_other_tags = true;

// populate data array
        $TagData['title'][]   = $music;
        $TagData['artist'][]  = "";
        $TagData['album'][]   = "";
        $TagData['year'][]    = "";
        $TagData['genre'][]   = "";
        $TagData['comment'][] = "olovamp3.com";

        $picture = $pic;
        $picturecaption = 'No picture available';
        $albumcover =  $picture;

        // Open the picture file and read set up the ID3 structures
        if ($fd = @fopen($albumcover, 'rb')) {
            $APICdata = fread($fd, filesize($albumcover));
            fclose ($fd);
            list($APIC_width, $APIC_height, $APIC_imageTypeID) = GetImageSize($albumcover);
            $TagData['attached_picture'][0]['data']            = $APICdata;
            $TagData['attached_picture'][0]['picturetypeid']   = 0x03;                 // 'Cover (front)'
            $TagData['attached_picture'][0]['description']     = $picturecaption;
            $TagData['attached_picture'][0]['mime']            = 'image/jpeg';
        }

        $tagwriter->tag_data = $TagData;
// write tags
        $tagwriter->WriteTags();
    }


}



