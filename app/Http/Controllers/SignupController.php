<?php

namespace App\Http\Controllers;

use App\Alert;
use Illuminate\Http\Request;
use App\Member;
use App\Login;
use App\geoLoaction;
class SignupController extends Controller
{

    public function index()
    {
        //
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        if (!empty($request->account_type)) {
            if (Member::where([['email', $request->email], ['block', 1]])->exists()) {
                return "You account is blocked due to missuse or unethical behave";
            }

            if (!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
                return "Invalid email";
            }


            $this->validate($request, [
                'username' => 'required|min:3|max:15|unique:members,username|unique:music,download_code|unique:music,delete_code|regex:/^[\w_]*$/',
                'email' => 'required|email|unique:members,email',
                'password' => 'required|min:6|max:30',
                'password2' => 'required|same:password',
                'account_type' => 'required'
            ]);

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

            $geo = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=$ip_address"));
            if ($geo['geoplugin_city'] != "") {
                session()->put('city', $geo['geoplugin_city']);
            } else {

            }
            $country = $geo['geoplugin_countryCode'];
            if (geoLoaction::where('abv', $country)->exists()) {
                $cnty = geoLoaction::where('abv', $country)->first();
            }

            $newmember = new Member();
            $newmember->username = strtolower($request->username);
            $newmember->name = strtolower($request->username);
            $newmember->surname = '';
            $newmember->email = strtolower($request->email);
            $newmember->country = $cnty->country_name;
            $newmember->province = session()->get('city');
            $newmember->bio = 'Welcome to my Bogiyo lounge';
            $newmember->image = '/pictures/newuser.gif';
            $newmember->account_type = $request->account_type;
            $newmember->block = 0;
            $newmember->save();

            $login = new Login();
            $login->username = strtolower($request->username);
            $login->email = strtolower($request->email);
            $login->password = md5($request->password);
            $login->active = 1;
            $login->save();



            $user = Member::where('username', strtolower($request->username))->first();
            $request->session()->put(['id' => $user->id]);
            $request->session()->put(['name' => $user->name]);
            $request->session()->put(['username' => $user->username]);
            $request->session()->put(['email' => $user->email]);

            $alerts = new Alert();
            $alerts->alert=$request->account_type;
            $alerts->from_member_id=session()->get('id');
            $alerts->to_member_id=session()->get('id');
            $alerts->status=1;
            $alerts->save();

            return "Ok";

        } else {
            return "You are a robot";
        }
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }

    public function email($email)
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return "Invalid email";
        }
        if (Member::where('email', $email)->exists()) {
            return "Email already taken";
        }

        if (Member::where([['email', $email], ['block', 1]])->exists()) {
            return "You account is blocked due to missuse or unethical behave";
        }

        return "Ok";

    }

    public function username($username)
    {
        if (Member::where('username', $username)->exists()) {
            return "Username already taken";
        }
        return "Ok";

    }
}
