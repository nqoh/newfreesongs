<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Login;
use App\Member;
class LoginController extends Controller
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

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Login::where('username',$request->username)->where('password',md5($request->password))->
        orwhere('email',$request->username)->where('password',md5($request->password))->exists()){

           if(Member::where('username',$request->username)->where('block', 0)->orwhere('email',$request->username)->where('block', 0)->exists() ) {
               $user = Member::where('username', strtolower($request->username))->orwhere('email', strtolower($request->username))->first();
               $request->session()->put(['id' => $user->id]);
               $request->session()->put(['name' => $user->name]);
               $request->session()->put(['username' => $user->username]);
               $request->session()->put(['email'=>$user->email]);

               Login::where('username',$request->username)->where('password',md5($request->password))->
               orwhere('email',$request->username)->where('password',md5($request->password))->update(['active'=>1]);

               return 'Ok';
           }else{
             return "You account is blocked";
           }
         }else{
             return "Invalid credentials";
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
