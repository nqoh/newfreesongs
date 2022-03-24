<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Music;
use App\extract_ide;
use Intervention\Image\Facades\Image;
use App\Alert;
class UploadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (session()->get('username') && session()->get('id')) {


            $file = $request->file('file');

            if (Music::where('member_id', session()->get('id'))->count() >= 50) {
                return 'Your exceeded track limit , delete some track\'s';
            }

            if ($request->file('file') === null) {
                return 'Please select your Song before Upload';
            }

            if (preg_match("/.(mp3|wma|wav)$/i", $request->file('file')->getClientOriginalName())){
            } else {
                return 'Your track must be a mp3,wav,wma format';
            }

            if ($file->getClientSize() > 110000000) {
                return 'Your track is too large';
            }

            if (Music::where('track', $file->getClientOriginalName())->exists()) {
                return 'That track has already been uploaded';
            }


            if ($file) {
                $name = $file->getClientOriginalName();
                $size = $file->getClientSize();
                $lyrics = $request->lyrics;
                if (strlen($lyrics) <= 0){$lyrics = "No lyrics";};
                $file->move('musicfile', $name);
                $music = new Music();
                $song_name = md5($name);
                $download_cd = substr($song_name, 5, 5);
                $delete_cd = substr($song_name, 10, 10);
                $music->lyrics = $lyrics;
                $music->size = $size;
                $music->track = $name;
                $music->genre = $request->genre;
                $music->downloads = 0;
                $music->price = $request->price;
                $music->download_code = $download_cd;
                $music->delete_code = $delete_cd;
                $music->member_id = $request->id;
                $dura = new extract_ide();
                if ($dura->playtimes($name) === "invalid file") {
                    unlink('musicfile/' . $name);
                    return "Your file is corrupted and try again";
                }

                $mp3 = new extract_ide();
                $mp3->mp3($name);

                if(file_exists('album_art/'. substr($name,0, strlen($name) - 4) .'.jpg')){
                    $image = 'album_art/'. substr($name,0, strlen($name) - 4) .'.jpg';
                    $music->album_art = '/'. $image;
                    Image::make($image)->resize(500, 500)->save($image);
                }else{
                    $music->album_art = '/album_art/olova-logo.png';
                }

                $music->duration = $dura->playtimes($name);
                $music->save();

                $id = Music::where('download_code',$download_cd)->first()->id;
                session()->put(['download_link' =>   $download_cd]);
                session()->put('delete_link', $delete_cd);
                session()->put('track_id',$id);

                return 'Ok';
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
