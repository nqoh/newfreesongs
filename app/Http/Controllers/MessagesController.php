<?php

namespace App\Http\Controllers;

use App\Follow;
use App\Member;
use Illuminate\Http\Request;
use App\Messages;
use App\Login;

class MessagesController extends Controller
{

    function DeleteMessage($from,$to){
        if(Messages::where('from_member_id',$from)->where('to_member_id',$to)->exists()){
            Messages::where('from_member_id',$from)->where('to_member_id',$to)->delete();
            Messages::where('to_member_id',$from)->where('from_member_id',$to)->delete();
            return 'Ok';
        }
    }

    function getMessages()
    {

        $messages = Messages::Join('members', 'messages.from_member_id', 'members.id')->
        where('to_member_id', session()->get('id'))
            ->where('last_message', 1)->select(
                'members.name',
                'members.surname',
                'members.username',
                'members.id',
                'members.image',
                'messages.message',
                'messages.created_at',
                'messages.from_member_id',
                'messages.to_member_id'
            )->latest('messages.created_at')->paginate(4);
        $unread = [0];
        $login = [];
        foreach ($messages as $message) {
            $unread[] = Messages::where('from_member_id', $message->from_member_id)->
            where('to_member_id',session()->get('id'))->where('status', 1)->count();
            $login[] = Login::where('username', $message->username)->first()->active;
        }


        return [
            'message' => $messages,
            'unread' => $unread,
            'login' => $login
        ];
    }


    function readMessages($id, $num)
    {


        Messages::where('from_member_id', $id)
            ->where('to_member_id', session()->get('id'))->update(['status' => 0]);

        $message = Messages::where('from_member_id', $id)->where('to_member_id', session()->get('id'))->
        Orwhere('from_member_id', session()->get('id'))->where('to_member_id', $id)->
        orderBy('id', 'desc')->skip($num)->take(10)->get();

        $error = '';
        if (Follow::where('follower_id', $id)->where('member_id', session()->get('id'))->exists()) {
            $error = '';
            if (Follow::where('follower_id', session()->get('id'))->where('member_id', $id)->exists()) {
                $error = '';
            } else {
                $member = Member::where('id', $id)->first();
                $error = 'You must follow '.ucfirst($member->name).' back';
            }
        } else {
            $member = Member::where('id', $id)->first();
            $error = ucfirst($member->name) . ' must follow you back';
        }


        $msg=[];
        $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
        for($i=0 ; $i < sizeof($message); $i++){
            $text=$message[$i]['message'];
            if(preg_match($reg_exUrl, $text, $url)) {
                $mesage=preg_replace($reg_exUrl , "<a target='_blank' href='{$url[0]}'>{$url[0]}</a> " , $text);

            } else {
                $mesage=$message[$i]['message'];
            }
            $msg[] = [
                'id'=>$message[$i]['id'],
                'status' => $message[$i]['status'],
                'from_member_id'=>$message[$i]['from_member_id'],
                'to_member_id'=>$message[$i]['to_member_id'],
                'last_message'=>$message[$i]['last_message'],
                'message'=>$mesage,
                'created_at'=>$message[$i]['created_at'],
            ];
        }
        $member = Member::Join('logins','members.username','logins.username')->where('members.id', $id)->first();

        return [
            'messages' => $msg,
            'error' => $error,
            'name' => $member->name,
            'surname' => $member->surname,
            'active' => $member->active
        ];

    }

    function readLoungeMessages($username,$num){
        $member = Member::where('username',$username)->first();
        $id= $member->id;
        Messages::where('from_member_id', $id)
            ->where('to_member_id', session()->get('id'))->update(['status' => 0]);

        $message = Messages::where('from_member_id', $id)->where('to_member_id', session()->get('id'))->
        Orwhere('from_member_id', session()->get('id'))->where('to_member_id', $id)->
        orderBy('id', 'desc')->skip($num)->take(10)->get();

        $error = '';
        if (Follow::where('follower_id', $id)->where('member_id', session()->get('id'))->exists()) {
            $error = '';
            if (Follow::where('follower_id', session()->get('id'))->where('member_id', $id)->exists()) {
                $error = '';
            } else {
                $member = Member::where('id', $id)->first();
                $error = 'You must follow '.ucfirst($member->name).' back';
            }
        } else {
            $member = Member::where('id', $id)->first();
            $error = ucfirst($member->name) . ' must follow you back';
        }

        $msg=[];
        $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
        for($i=0 ; $i < sizeof($message); $i++){
            $text=$message[$i]['message'];
            if(preg_match($reg_exUrl, $text, $url)) {
                $mesage=preg_replace($reg_exUrl , "<a target='_blank' href='{$url[0]}'>{$url[0]}</a> " , $text);

            } else {
                $mesage=$message[$i]['message'];
            }
            $msg[] = [
                'id'=>$message[$i]['id'],
                'status' => $message[$i]['status'],
                'from_member_id'=>$message[$i]['from_member_id'],
                'to_member_id'=>$message[$i]['to_member_id'],
                'last_message'=>$message[$i]['last_message'],
                'message'=>$mesage,
                'created_at'=>$message[$i]['created_at'],
            ];
        }

        return [
            'messages' => $msg,
            'error' => $error,
        ];
    }

    function SendMessage(Request $request)
    {
        if (session()->get('id')) {
            Messages::where('from_member_id', session()->get('id'))
                ->where('to_member_id', $request->from_member_id)->update(['last_message' => 0]);

            $message = new Messages();
            $message->message = $request->message;
            $message->from_member_id = session()->get('id');
            $message->to_member_id = $request->from_member_id;
            $message->last_message = 1;
            $message->status = 1;
            $message->save();

            return 'Ok';
        }
    }

    function  SendLoungeMessage(Request $request)
    {
        if (session()->get('id')) {
            $member = Member::where('username',$request->username)->first();
            Messages::where('from_member_id', session()->get('id'))
                ->where('to_member_id', $member->id)->update(['last_message' => 0]);

            $message = new Messages();
            $message->message = $request->message;
            $message->from_member_id = session()->get('id');
            $message->to_member_id = $member->id;
            $message->last_message = 1;
            $message->status = 1;
            $message->save();

            return 'Ok';
        }
    }
}
