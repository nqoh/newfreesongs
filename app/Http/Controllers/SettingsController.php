<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use App\BankDetail;
use App\Login;
class SettingsController extends Controller
{
    public function edit(Request $request)
    {
        if (session()->get('id')) {
            Member::where('id', session()->get('id'))->update(
                [
                    'name' => ucfirst($request->firstname),
                    'surname' => ucfirst($request->lastname),
                    'email' => $request->email,
                    'country' => ucfirst($request->country),
                    'province' => ucfirst($request->city),
                    'bio' => $request->bio
                ]
            );
            Login::where('username',session()->get('username'))->update(['email' => $request->email ]);
            return "Ok";
        }
    }

    public function account(Request $request)
    {
        if (BankDetail::where('member_id',session()->get('id'))->exists()) {
           BankDetail::where('member_id',session()->get('id'))->update(
               [
                   'name' => ucfirst($request->firstname),
                   'cell' => $request->cell,
                   'email' => $request->email,
                   'bank' => ucfirst($request->bank_name),
                   'account' =>$request->account_no,
                   'member_id' =>session()->get('id')
               ]
           );
           return 'Ok';
        }else{
            $bank = new BankDetail();
            $bank->name = ucfirst($request->firstname);
            $bank->cell = $request->cell;
            $bank->email = $request->email;
            $bank->bank =  ucfirst($request->bank_name);
            $bank->account = $request->account_no;
            $bank->member_id = session()->get('id');
            $bank->save();
            return 'Ok';
        }
    }

    public function getdetails()
    {
        if (session()->get('id')) {
            if (BankDetail::where('member_id', session()->get('id'))->exists())
                return BankDetail::where('member_id', session()->get('id'))->get();
        }
    }

    public  function  getpassword($password){
        if(Login::where('password',md5($password))->where('username',session()->get('username'))->exists()){
            return "Ok";
        }else{
            return "Invalid Password";
        }
    }

    public  function  setpassword(Request $request){

        $this->validate($request, [
            'NPassword' => 'required|min:6|max:30',
            'RPassword' => 'required|same:NPassword',
        ]);

        if(Login::where('password',md5($request->CPassword))->where('username',session()->get('username'))->exists()){
            Login::where('password',md5($request->CPassword))->where('username',session()->get('username'))->update(
              [
                  'password' => md5($request->NPassword)
              ]
            );
            return 'Ok';
        }else{
            return "Invalid Password";
        }
    }
}
