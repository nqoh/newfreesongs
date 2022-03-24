<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use Intervention\Image\Facades\Image;


class PictureController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = $request->file('file');
        if ($file === null) {
            return "Select image before click upload";
        }

        if (preg_match("/.(png|jpg|jpeg|gif)$/i", $file->getClientOriginalName())
        ) {
        } else {
            return "We only accept png,jpeg and gif format";
        }

        $img = Member::where('id', session()->get('id'))->first();
        if (file_exists('/pictures/' . $img->image)) {
            unlink('/pictures/' . $img->image);
        }

        Member::where('username', session()->get('username'))->update(['image' => '/pictures/' . session()->get('username') . '.jpg']);

        $path = 'pictures/' . session()->get('username') . '.jpg';

        if (Image::make($file->getRealPath())->resize(200, 200)) {
            Image::make($file->getRealPath())->resize(200, 200)->save($path);
            return session()->get('username') . '.jpg';
        } else {
            return "Image corrupted";
        };


    }

    public function removeImg(){
       /* if (file_exists('pictures/' . session()->get('username').'jpg')) {
            unlink('pictures/' . session()->get('username').'jpg');
        }*/
        Member::where('username', session()->get('username'))->update(['image' => '/pictures/newuser.gif']);
    }

    /**p
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
